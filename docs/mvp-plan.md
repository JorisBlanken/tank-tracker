# Aquarium Log MVP Plan (Mobile First)

## Scope
Build the most basic mobile-only flow to:
- Create a new aquarium.
- Define default parameters per aquarium: `KH`, `Ca`, `Mg`, `NO3`, `PO4`.
- Store upper and lower bounds for each parameter per aquarium.
- Store a user-defined aquarium name.

## Product Goals
- Let a user quickly set up an aquarium in under 2 minutes on mobile.
- Keep setup structured enough to power future "in range / out of range" insights.
- Start with one clear path: create and save aquarium + its parameter targets.

## MVP User Story
As a user, I can create an aquarium by entering:
- Aquarium name.
- Lower and upper bounds for KH, Ca, Mg, NO3, and PO4.

After saving, the aquarium is available for future logging and insights.

## Data Model Plan

### `Aquarium`
- `id`
- `name` (required)
- `createdById` (required)
- `createdAt`
- `updatedAt`

### `AquariumParameterTarget`
- `id`
- `aquariumId` (required, relation to `Aquarium`)
- `parameter` (enum: `KH | CA | MG | NO3 | PO4`)
- `lowerBound` (required, decimal/float)
- `upperBound` (required, decimal/float)
- `createdAt`
- `updatedAt`
- Unique constraint: `(aquariumId, parameter)` to ensure one target range per parameter per tank.

### Validation Rules
- Aquarium name: required, trimmed, min length 1.
- Bounds:
  - both required
  - numeric
  - `lowerBound <= upperBound`
  - optional domain sanity checks (non-negative) for MVP.

## API Plan (tRPC)

### Router: `aquarium`
- `create`
  - Input:
    - `name: string`
    - `targets: Array<{ parameter, lowerBound, upperBound }>` (exactly 5 items for MVP)
  - Behavior:
    - Validate payload.
    - Create aquarium and parameter targets in one transaction.
    - Return created aquarium with targets.

- `listMine` (optional but useful for immediate UI confirmation)
  - Return aquariums for authenticated user (latest first).

## Mobile UI Plan

### Screen 1: "Create Aquarium"
- Fields:
  - Aquarium name.
  - Five parameter cards/rows (KH, Ca, Mg, NO3, PO4).
  - Each row has two numeric inputs: Lower / Upper.
- CTA:
  - `Save Aquarium`
- Behavior:
  - Disable submit while saving.
  - Show inline validation errors.
  - On success: clear form or navigate to simple success/list state.

### Mobile Layout Constraints
- Single-column layout only.
- Large tap targets (`>=44px` height).
- Inputs optimized for mobile numeric entry.
- Keep above-the-fold focused on name + first parameters; vertical scroll for rest.

## Implementation Steps
1. Prisma schema
   - Add `Aquarium`, `AquariumParameterTarget`, and `ParameterType` enum.
   - Relate aquarium to user.
   - Add unique `(aquariumId, parameter)` constraint.
2. Prisma client + DB sync
   - Run `prisma generate`.
   - Run migration / db push based on current workflow.
3. tRPC router
   - Create `aquarium` router with `create` mutation (and optional `listMine` query).
   - Register router in root API.
4. UI
   - Build mobile-only create form page/component.
   - Wire submit to `aquarium.create`.
   - Add inline validation and loading states.
5. Verification
   - Typecheck + lint.
   - Manual test: create aquarium with valid/invalid bounds.

## MVP Acceptance Criteria
- User can create an aquarium with a required name.
- User can set lower/upper bounds for KH, Ca, Mg, NO3, PO4.
- Validation prevents invalid range pairs (`lower > upper`).
- Data persists correctly: aquarium + exactly one target record per parameter.
- UX is usable on mobile viewport and does not rely on desktop layout.

## Deferred (Post-MVP)
- Logging test entries over time.
- Insight engine (in-range/out-of-range status based on latest readings).
- Multiple units and unit conversion.
- Edit/delete aquarium and target ranges.
- Rich dashboard and trend charts.
