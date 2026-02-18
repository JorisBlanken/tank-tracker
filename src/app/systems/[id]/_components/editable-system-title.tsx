"use client";

import { useEffect, useRef, useState } from "react";

import { api } from "~/trpc/react";

type EditableSystemTitleProps = {
  systemId: string;
  initialName: string;
  className?: string;
};

export function EditableSystemTitle({
  systemId,
  initialName,
  className = "text-xl font-semibold",
}: EditableSystemTitleProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);
  const [savedName, setSavedName] = useState(initialName);
  const inputRef = useRef<HTMLInputElement>(null);
  const utils = api.useUtils();

  const updateName = api.system.updateName.useMutation({
    onSuccess: async (updatedSystem) => {
      setSavedName(updatedSystem.name);
      setName(updatedSystem.name);
      await utils.system.invalidate();
    },
  });

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [isEditing]);

  const saveIfChanged = () => {
    const nextName = name.trim();
    if (!nextName) {
      setName(savedName);
      setIsEditing(false);
      return;
    }

    if (nextName !== savedName) {
      updateName.mutate({ id: systemId, name: nextName });
    }

    setName(nextName);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <input
        ref={inputRef}
        value={name}
        className={`${className} rounded-md border border-slate-200 bg-slate-50 px-2 py-1`}
        onChange={(event) => setName(event.target.value)}
        onBlur={saveIfChanged}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            saveIfChanged();
          }
          if (event.key === "Escape") {
            setName(savedName);
            setIsEditing(false);
          }
        }}
      />
    );
  }

  return (
    <button
      type="button"
      className={`${className} rounded-md px-1 py-0.5 text-left`}
      onClick={() => setIsEditing(true)}
      disabled={updateName.isPending}
      aria-label="Edit system name"
    >
      {name}
    </button>
  );
}
