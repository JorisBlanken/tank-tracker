
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model System
 * 
 */
export type System = $Result.DefaultSelection<Prisma.$SystemPayload>
/**
 * Model FilterMedia
 * 
 */
export type FilterMedia = $Result.DefaultSelection<Prisma.$FilterMediaPayload>
/**
 * Model SystemActivity
 * 
 */
export type SystemActivity = $Result.DefaultSelection<Prisma.$SystemActivityPayload>
/**
 * Model SystemParameter
 * 
 */
export type SystemParameter = $Result.DefaultSelection<Prisma.$SystemParameterPayload>
/**
 * Model SystemParameterLog
 * 
 */
export type SystemParameterLog = $Result.DefaultSelection<Prisma.$SystemParameterLogPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SystemActivityType: {
  SYSTEM_CREATED: 'SYSTEM_CREATED',
  PARAMETER_LOGGED: 'PARAMETER_LOGGED',
  WATER_CHANGE_LOGGED: 'WATER_CHANGE_LOGGED',
  SUPPLEMENT_DOSED: 'SUPPLEMENT_DOSED',
  NOTE_LOGGED: 'NOTE_LOGGED',
  FILTER_MEDIA_ADDED: 'FILTER_MEDIA_ADDED',
  FILTER_MEDIA_REPLACED: 'FILTER_MEDIA_REPLACED',
  FILTER_MEDIA_REMOVED: 'FILTER_MEDIA_REMOVED'
};

export type SystemActivityType = (typeof SystemActivityType)[keyof typeof SystemActivityType]

}

export type SystemActivityType = $Enums.SystemActivityType

export const SystemActivityType: typeof $Enums.SystemActivityType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Systems
 * const systems = await prisma.system.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Systems
   * const systems = await prisma.system.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.system`: Exposes CRUD operations for the **System** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Systems
    * const systems = await prisma.system.findMany()
    * ```
    */
  get system(): Prisma.SystemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.filterMedia`: Exposes CRUD operations for the **FilterMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FilterMedias
    * const filterMedias = await prisma.filterMedia.findMany()
    * ```
    */
  get filterMedia(): Prisma.FilterMediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemActivity`: Exposes CRUD operations for the **SystemActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemActivities
    * const systemActivities = await prisma.systemActivity.findMany()
    * ```
    */
  get systemActivity(): Prisma.SystemActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemParameter`: Exposes CRUD operations for the **SystemParameter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemParameters
    * const systemParameters = await prisma.systemParameter.findMany()
    * ```
    */
  get systemParameter(): Prisma.SystemParameterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemParameterLog`: Exposes CRUD operations for the **SystemParameterLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemParameterLogs
    * const systemParameterLogs = await prisma.systemParameterLog.findMany()
    * ```
    */
  get systemParameterLog(): Prisma.SystemParameterLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    System: 'System',
    FilterMedia: 'FilterMedia',
    SystemActivity: 'SystemActivity',
    SystemParameter: 'SystemParameter',
    SystemParameterLog: 'SystemParameterLog',
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "system" | "filterMedia" | "systemActivity" | "systemParameter" | "systemParameterLog" | "account" | "session" | "user" | "verificationToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      System: {
        payload: Prisma.$SystemPayload<ExtArgs>
        fields: Prisma.SystemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>
          }
          findFirst: {
            args: Prisma.SystemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>
          }
          findMany: {
            args: Prisma.SystemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>[]
          }
          create: {
            args: Prisma.SystemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>
          }
          createMany: {
            args: Prisma.SystemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>[]
          }
          delete: {
            args: Prisma.SystemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>
          }
          update: {
            args: Prisma.SystemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>
          }
          deleteMany: {
            args: Prisma.SystemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>[]
          }
          upsert: {
            args: Prisma.SystemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPayload>
          }
          aggregate: {
            args: Prisma.SystemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystem>
          }
          groupBy: {
            args: Prisma.SystemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemCountArgs<ExtArgs>
            result: $Utils.Optional<SystemCountAggregateOutputType> | number
          }
        }
      }
      FilterMedia: {
        payload: Prisma.$FilterMediaPayload<ExtArgs>
        fields: Prisma.FilterMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilterMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilterMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterMediaPayload>
          }
          findFirst: {
            args: Prisma.FilterMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilterMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterMediaPayload>
          }
          findMany: {
            args: Prisma.FilterMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterMediaPayload>[]
          }
          create: {
            args: Prisma.FilterMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterMediaPayload>
          }
          createMany: {
            args: Prisma.FilterMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FilterMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterMediaPayload>[]
          }
          delete: {
            args: Prisma.FilterMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterMediaPayload>
          }
          update: {
            args: Prisma.FilterMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterMediaPayload>
          }
          deleteMany: {
            args: Prisma.FilterMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilterMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FilterMediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterMediaPayload>[]
          }
          upsert: {
            args: Prisma.FilterMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterMediaPayload>
          }
          aggregate: {
            args: Prisma.FilterMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilterMedia>
          }
          groupBy: {
            args: Prisma.FilterMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilterMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FilterMediaCountArgs<ExtArgs>
            result: $Utils.Optional<FilterMediaCountAggregateOutputType> | number
          }
        }
      }
      SystemActivity: {
        payload: Prisma.$SystemActivityPayload<ExtArgs>
        fields: Prisma.SystemActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemActivityPayload>
          }
          findFirst: {
            args: Prisma.SystemActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemActivityPayload>
          }
          findMany: {
            args: Prisma.SystemActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemActivityPayload>[]
          }
          create: {
            args: Prisma.SystemActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemActivityPayload>
          }
          createMany: {
            args: Prisma.SystemActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemActivityPayload>[]
          }
          delete: {
            args: Prisma.SystemActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemActivityPayload>
          }
          update: {
            args: Prisma.SystemActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemActivityPayload>
          }
          deleteMany: {
            args: Prisma.SystemActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemActivityPayload>[]
          }
          upsert: {
            args: Prisma.SystemActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemActivityPayload>
          }
          aggregate: {
            args: Prisma.SystemActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemActivity>
          }
          groupBy: {
            args: Prisma.SystemActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemActivityCountArgs<ExtArgs>
            result: $Utils.Optional<SystemActivityCountAggregateOutputType> | number
          }
        }
      }
      SystemParameter: {
        payload: Prisma.$SystemParameterPayload<ExtArgs>
        fields: Prisma.SystemParameterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemParameterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemParameterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterPayload>
          }
          findFirst: {
            args: Prisma.SystemParameterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemParameterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterPayload>
          }
          findMany: {
            args: Prisma.SystemParameterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterPayload>[]
          }
          create: {
            args: Prisma.SystemParameterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterPayload>
          }
          createMany: {
            args: Prisma.SystemParameterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemParameterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterPayload>[]
          }
          delete: {
            args: Prisma.SystemParameterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterPayload>
          }
          update: {
            args: Prisma.SystemParameterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterPayload>
          }
          deleteMany: {
            args: Prisma.SystemParameterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemParameterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemParameterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterPayload>[]
          }
          upsert: {
            args: Prisma.SystemParameterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterPayload>
          }
          aggregate: {
            args: Prisma.SystemParameterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemParameter>
          }
          groupBy: {
            args: Prisma.SystemParameterGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemParameterGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemParameterCountArgs<ExtArgs>
            result: $Utils.Optional<SystemParameterCountAggregateOutputType> | number
          }
        }
      }
      SystemParameterLog: {
        payload: Prisma.$SystemParameterLogPayload<ExtArgs>
        fields: Prisma.SystemParameterLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemParameterLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemParameterLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterLogPayload>
          }
          findFirst: {
            args: Prisma.SystemParameterLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemParameterLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterLogPayload>
          }
          findMany: {
            args: Prisma.SystemParameterLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterLogPayload>[]
          }
          create: {
            args: Prisma.SystemParameterLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterLogPayload>
          }
          createMany: {
            args: Prisma.SystemParameterLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemParameterLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterLogPayload>[]
          }
          delete: {
            args: Prisma.SystemParameterLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterLogPayload>
          }
          update: {
            args: Prisma.SystemParameterLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterLogPayload>
          }
          deleteMany: {
            args: Prisma.SystemParameterLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemParameterLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemParameterLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterLogPayload>[]
          }
          upsert: {
            args: Prisma.SystemParameterLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterLogPayload>
          }
          aggregate: {
            args: Prisma.SystemParameterLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemParameterLog>
          }
          groupBy: {
            args: Prisma.SystemParameterLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemParameterLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemParameterLogCountArgs<ExtArgs>
            result: $Utils.Optional<SystemParameterLogCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    system?: SystemOmit
    filterMedia?: FilterMediaOmit
    systemActivity?: SystemActivityOmit
    systemParameter?: SystemParameterOmit
    systemParameterLog?: SystemParameterLogOmit
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SystemCountOutputType
   */

  export type SystemCountOutputType = {
    parameters: number
    activities: number
    filterMedia: number
  }

  export type SystemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parameters?: boolean | SystemCountOutputTypeCountParametersArgs
    activities?: boolean | SystemCountOutputTypeCountActivitiesArgs
    filterMedia?: boolean | SystemCountOutputTypeCountFilterMediaArgs
  }

  // Custom InputTypes
  /**
   * SystemCountOutputType without action
   */
  export type SystemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemCountOutputType
     */
    select?: SystemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SystemCountOutputType without action
   */
  export type SystemCountOutputTypeCountParametersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemParameterWhereInput
  }

  /**
   * SystemCountOutputType without action
   */
  export type SystemCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemActivityWhereInput
  }

  /**
   * SystemCountOutputType without action
   */
  export type SystemCountOutputTypeCountFilterMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilterMediaWhereInput
  }


  /**
   * Count Type SystemParameterCountOutputType
   */

  export type SystemParameterCountOutputType = {
    logs: number
    systemActivities: number
  }

  export type SystemParameterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | SystemParameterCountOutputTypeCountLogsArgs
    systemActivities?: boolean | SystemParameterCountOutputTypeCountSystemActivitiesArgs
  }

  // Custom InputTypes
  /**
   * SystemParameterCountOutputType without action
   */
  export type SystemParameterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameterCountOutputType
     */
    select?: SystemParameterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SystemParameterCountOutputType without action
   */
  export type SystemParameterCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemParameterLogWhereInput
  }

  /**
   * SystemParameterCountOutputType without action
   */
  export type SystemParameterCountOutputTypeCountSystemActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemActivityWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    systems: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    systems?: boolean | UserCountOutputTypeCountSystemsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSystemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model System
   */

  export type AggregateSystem = {
    _count: SystemCountAggregateOutputType | null
    _min: SystemMinAggregateOutputType | null
    _max: SystemMaxAggregateOutputType | null
  }

  export type SystemMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type SystemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type SystemCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type SystemMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type SystemMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type SystemCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type SystemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which System to aggregate.
     */
    where?: SystemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Systems to fetch.
     */
    orderBy?: SystemOrderByWithRelationInput | SystemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Systems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Systems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Systems
    **/
    _count?: true | SystemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemMaxAggregateInputType
  }

  export type GetSystemAggregateType<T extends SystemAggregateArgs> = {
        [P in keyof T & keyof AggregateSystem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystem[P]>
      : GetScalarType<T[P], AggregateSystem[P]>
  }




  export type SystemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemWhereInput
    orderBy?: SystemOrderByWithAggregationInput | SystemOrderByWithAggregationInput[]
    by: SystemScalarFieldEnum[] | SystemScalarFieldEnum
    having?: SystemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemCountAggregateInputType | true
    _min?: SystemMinAggregateInputType
    _max?: SystemMaxAggregateInputType
  }

  export type SystemGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: SystemCountAggregateOutputType | null
    _min: SystemMinAggregateOutputType | null
    _max: SystemMaxAggregateOutputType | null
  }

  type GetSystemGroupByPayload<T extends SystemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemGroupByOutputType[P]>
            : GetScalarType<T[P], SystemGroupByOutputType[P]>
        }
      >
    >


  export type SystemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    parameters?: boolean | System$parametersArgs<ExtArgs>
    activities?: boolean | System$activitiesArgs<ExtArgs>
    filterMedia?: boolean | System$filterMediaArgs<ExtArgs>
    _count?: boolean | SystemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["system"]>

  export type SystemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["system"]>

  export type SystemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["system"]>

  export type SystemSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type SystemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["system"]>
  export type SystemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    parameters?: boolean | System$parametersArgs<ExtArgs>
    activities?: boolean | System$activitiesArgs<ExtArgs>
    filterMedia?: boolean | System$filterMediaArgs<ExtArgs>
    _count?: boolean | SystemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SystemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SystemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SystemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "System"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      parameters: Prisma.$SystemParameterPayload<ExtArgs>[]
      activities: Prisma.$SystemActivityPayload<ExtArgs>[]
      filterMedia: Prisma.$FilterMediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["system"]>
    composites: {}
  }

  type SystemGetPayload<S extends boolean | null | undefined | SystemDefaultArgs> = $Result.GetResult<Prisma.$SystemPayload, S>

  type SystemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemCountAggregateInputType | true
    }

  export interface SystemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['System'], meta: { name: 'System' } }
    /**
     * Find zero or one System that matches the filter.
     * @param {SystemFindUniqueArgs} args - Arguments to find a System
     * @example
     * // Get one System
     * const system = await prisma.system.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemFindUniqueArgs>(args: SelectSubset<T, SystemFindUniqueArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one System that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemFindUniqueOrThrowArgs} args - Arguments to find a System
     * @example
     * // Get one System
     * const system = await prisma.system.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first System that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemFindFirstArgs} args - Arguments to find a System
     * @example
     * // Get one System
     * const system = await prisma.system.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemFindFirstArgs>(args?: SelectSubset<T, SystemFindFirstArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first System that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemFindFirstOrThrowArgs} args - Arguments to find a System
     * @example
     * // Get one System
     * const system = await prisma.system.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Systems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Systems
     * const systems = await prisma.system.findMany()
     * 
     * // Get first 10 Systems
     * const systems = await prisma.system.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemWithIdOnly = await prisma.system.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemFindManyArgs>(args?: SelectSubset<T, SystemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a System.
     * @param {SystemCreateArgs} args - Arguments to create a System.
     * @example
     * // Create one System
     * const System = await prisma.system.create({
     *   data: {
     *     // ... data to create a System
     *   }
     * })
     * 
     */
    create<T extends SystemCreateArgs>(args: SelectSubset<T, SystemCreateArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Systems.
     * @param {SystemCreateManyArgs} args - Arguments to create many Systems.
     * @example
     * // Create many Systems
     * const system = await prisma.system.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemCreateManyArgs>(args?: SelectSubset<T, SystemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Systems and returns the data saved in the database.
     * @param {SystemCreateManyAndReturnArgs} args - Arguments to create many Systems.
     * @example
     * // Create many Systems
     * const system = await prisma.system.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Systems and only return the `id`
     * const systemWithIdOnly = await prisma.system.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a System.
     * @param {SystemDeleteArgs} args - Arguments to delete one System.
     * @example
     * // Delete one System
     * const System = await prisma.system.delete({
     *   where: {
     *     // ... filter to delete one System
     *   }
     * })
     * 
     */
    delete<T extends SystemDeleteArgs>(args: SelectSubset<T, SystemDeleteArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one System.
     * @param {SystemUpdateArgs} args - Arguments to update one System.
     * @example
     * // Update one System
     * const system = await prisma.system.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemUpdateArgs>(args: SelectSubset<T, SystemUpdateArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Systems.
     * @param {SystemDeleteManyArgs} args - Arguments to filter Systems to delete.
     * @example
     * // Delete a few Systems
     * const { count } = await prisma.system.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemDeleteManyArgs>(args?: SelectSubset<T, SystemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Systems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Systems
     * const system = await prisma.system.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemUpdateManyArgs>(args: SelectSubset<T, SystemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Systems and returns the data updated in the database.
     * @param {SystemUpdateManyAndReturnArgs} args - Arguments to update many Systems.
     * @example
     * // Update many Systems
     * const system = await prisma.system.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Systems and only return the `id`
     * const systemWithIdOnly = await prisma.system.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SystemUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one System.
     * @param {SystemUpsertArgs} args - Arguments to update or create a System.
     * @example
     * // Update or create a System
     * const system = await prisma.system.upsert({
     *   create: {
     *     // ... data to create a System
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the System we want to update
     *   }
     * })
     */
    upsert<T extends SystemUpsertArgs>(args: SelectSubset<T, SystemUpsertArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Systems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemCountArgs} args - Arguments to filter Systems to count.
     * @example
     * // Count the number of Systems
     * const count = await prisma.system.count({
     *   where: {
     *     // ... the filter for the Systems we want to count
     *   }
     * })
    **/
    count<T extends SystemCountArgs>(
      args?: Subset<T, SystemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a System.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemAggregateArgs>(args: Subset<T, SystemAggregateArgs>): Prisma.PrismaPromise<GetSystemAggregateType<T>>

    /**
     * Group by System.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemGroupByArgs['orderBy'] }
        : { orderBy?: SystemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the System model
   */
  readonly fields: SystemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for System.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parameters<T extends System$parametersArgs<ExtArgs> = {}>(args?: Subset<T, System$parametersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemParameterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends System$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, System$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    filterMedia<T extends System$filterMediaArgs<ExtArgs> = {}>(args?: Subset<T, System$filterMediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the System model
   */
  interface SystemFieldRefs {
    readonly id: FieldRef<"System", 'String'>
    readonly name: FieldRef<"System", 'String'>
    readonly createdAt: FieldRef<"System", 'DateTime'>
    readonly updatedAt: FieldRef<"System", 'DateTime'>
    readonly createdById: FieldRef<"System", 'String'>
  }
    

  // Custom InputTypes
  /**
   * System findUnique
   */
  export type SystemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemInclude<ExtArgs> | null
    /**
     * Filter, which System to fetch.
     */
    where: SystemWhereUniqueInput
  }

  /**
   * System findUniqueOrThrow
   */
  export type SystemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemInclude<ExtArgs> | null
    /**
     * Filter, which System to fetch.
     */
    where: SystemWhereUniqueInput
  }

  /**
   * System findFirst
   */
  export type SystemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemInclude<ExtArgs> | null
    /**
     * Filter, which System to fetch.
     */
    where?: SystemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Systems to fetch.
     */
    orderBy?: SystemOrderByWithRelationInput | SystemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Systems.
     */
    cursor?: SystemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Systems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Systems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Systems.
     */
    distinct?: SystemScalarFieldEnum | SystemScalarFieldEnum[]
  }

  /**
   * System findFirstOrThrow
   */
  export type SystemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemInclude<ExtArgs> | null
    /**
     * Filter, which System to fetch.
     */
    where?: SystemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Systems to fetch.
     */
    orderBy?: SystemOrderByWithRelationInput | SystemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Systems.
     */
    cursor?: SystemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Systems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Systems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Systems.
     */
    distinct?: SystemScalarFieldEnum | SystemScalarFieldEnum[]
  }

  /**
   * System findMany
   */
  export type SystemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemInclude<ExtArgs> | null
    /**
     * Filter, which Systems to fetch.
     */
    where?: SystemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Systems to fetch.
     */
    orderBy?: SystemOrderByWithRelationInput | SystemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Systems.
     */
    cursor?: SystemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Systems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Systems.
     */
    skip?: number
    distinct?: SystemScalarFieldEnum | SystemScalarFieldEnum[]
  }

  /**
   * System create
   */
  export type SystemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemInclude<ExtArgs> | null
    /**
     * The data needed to create a System.
     */
    data: XOR<SystemCreateInput, SystemUncheckedCreateInput>
  }

  /**
   * System createMany
   */
  export type SystemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Systems.
     */
    data: SystemCreateManyInput | SystemCreateManyInput[]
  }

  /**
   * System createManyAndReturn
   */
  export type SystemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * The data used to create many Systems.
     */
    data: SystemCreateManyInput | SystemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * System update
   */
  export type SystemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemInclude<ExtArgs> | null
    /**
     * The data needed to update a System.
     */
    data: XOR<SystemUpdateInput, SystemUncheckedUpdateInput>
    /**
     * Choose, which System to update.
     */
    where: SystemWhereUniqueInput
  }

  /**
   * System updateMany
   */
  export type SystemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Systems.
     */
    data: XOR<SystemUpdateManyMutationInput, SystemUncheckedUpdateManyInput>
    /**
     * Filter which Systems to update
     */
    where?: SystemWhereInput
    /**
     * Limit how many Systems to update.
     */
    limit?: number
  }

  /**
   * System updateManyAndReturn
   */
  export type SystemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * The data used to update Systems.
     */
    data: XOR<SystemUpdateManyMutationInput, SystemUncheckedUpdateManyInput>
    /**
     * Filter which Systems to update
     */
    where?: SystemWhereInput
    /**
     * Limit how many Systems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * System upsert
   */
  export type SystemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemInclude<ExtArgs> | null
    /**
     * The filter to search for the System to update in case it exists.
     */
    where: SystemWhereUniqueInput
    /**
     * In case the System found by the `where` argument doesn't exist, create a new System with this data.
     */
    create: XOR<SystemCreateInput, SystemUncheckedCreateInput>
    /**
     * In case the System was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemUpdateInput, SystemUncheckedUpdateInput>
  }

  /**
   * System delete
   */
  export type SystemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemInclude<ExtArgs> | null
    /**
     * Filter which System to delete.
     */
    where: SystemWhereUniqueInput
  }

  /**
   * System deleteMany
   */
  export type SystemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Systems to delete
     */
    where?: SystemWhereInput
    /**
     * Limit how many Systems to delete.
     */
    limit?: number
  }

  /**
   * System.parameters
   */
  export type System$parametersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterInclude<ExtArgs> | null
    where?: SystemParameterWhereInput
    orderBy?: SystemParameterOrderByWithRelationInput | SystemParameterOrderByWithRelationInput[]
    cursor?: SystemParameterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SystemParameterScalarFieldEnum | SystemParameterScalarFieldEnum[]
  }

  /**
   * System.activities
   */
  export type System$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemActivity
     */
    select?: SystemActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemActivity
     */
    omit?: SystemActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemActivityInclude<ExtArgs> | null
    where?: SystemActivityWhereInput
    orderBy?: SystemActivityOrderByWithRelationInput | SystemActivityOrderByWithRelationInput[]
    cursor?: SystemActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SystemActivityScalarFieldEnum | SystemActivityScalarFieldEnum[]
  }

  /**
   * System.filterMedia
   */
  export type System$filterMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterMedia
     */
    select?: FilterMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterMedia
     */
    omit?: FilterMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterMediaInclude<ExtArgs> | null
    where?: FilterMediaWhereInput
    orderBy?: FilterMediaOrderByWithRelationInput | FilterMediaOrderByWithRelationInput[]
    cursor?: FilterMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilterMediaScalarFieldEnum | FilterMediaScalarFieldEnum[]
  }

  /**
   * System without action
   */
  export type SystemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemInclude<ExtArgs> | null
  }


  /**
   * Model FilterMedia
   */

  export type AggregateFilterMedia = {
    _count: FilterMediaCountAggregateOutputType | null
    _avg: FilterMediaAvgAggregateOutputType | null
    _sum: FilterMediaSumAggregateOutputType | null
    _min: FilterMediaMinAggregateOutputType | null
    _max: FilterMediaMaxAggregateOutputType | null
  }

  export type FilterMediaAvgAggregateOutputType = {
    id: number | null
  }

  export type FilterMediaSumAggregateOutputType = {
    id: number | null
  }

  export type FilterMediaMinAggregateOutputType = {
    id: number | null
    name: string | null
    addedAt: Date | null
    lastReplacedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    systemId: string | null
  }

  export type FilterMediaMaxAggregateOutputType = {
    id: number | null
    name: string | null
    addedAt: Date | null
    lastReplacedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    systemId: string | null
  }

  export type FilterMediaCountAggregateOutputType = {
    id: number
    name: number
    addedAt: number
    lastReplacedAt: number
    createdAt: number
    updatedAt: number
    systemId: number
    _all: number
  }


  export type FilterMediaAvgAggregateInputType = {
    id?: true
  }

  export type FilterMediaSumAggregateInputType = {
    id?: true
  }

  export type FilterMediaMinAggregateInputType = {
    id?: true
    name?: true
    addedAt?: true
    lastReplacedAt?: true
    createdAt?: true
    updatedAt?: true
    systemId?: true
  }

  export type FilterMediaMaxAggregateInputType = {
    id?: true
    name?: true
    addedAt?: true
    lastReplacedAt?: true
    createdAt?: true
    updatedAt?: true
    systemId?: true
  }

  export type FilterMediaCountAggregateInputType = {
    id?: true
    name?: true
    addedAt?: true
    lastReplacedAt?: true
    createdAt?: true
    updatedAt?: true
    systemId?: true
    _all?: true
  }

  export type FilterMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilterMedia to aggregate.
     */
    where?: FilterMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilterMedias to fetch.
     */
    orderBy?: FilterMediaOrderByWithRelationInput | FilterMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilterMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilterMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilterMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FilterMedias
    **/
    _count?: true | FilterMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilterMediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilterMediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilterMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilterMediaMaxAggregateInputType
  }

  export type GetFilterMediaAggregateType<T extends FilterMediaAggregateArgs> = {
        [P in keyof T & keyof AggregateFilterMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilterMedia[P]>
      : GetScalarType<T[P], AggregateFilterMedia[P]>
  }




  export type FilterMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilterMediaWhereInput
    orderBy?: FilterMediaOrderByWithAggregationInput | FilterMediaOrderByWithAggregationInput[]
    by: FilterMediaScalarFieldEnum[] | FilterMediaScalarFieldEnum
    having?: FilterMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilterMediaCountAggregateInputType | true
    _avg?: FilterMediaAvgAggregateInputType
    _sum?: FilterMediaSumAggregateInputType
    _min?: FilterMediaMinAggregateInputType
    _max?: FilterMediaMaxAggregateInputType
  }

  export type FilterMediaGroupByOutputType = {
    id: number
    name: string
    addedAt: Date
    lastReplacedAt: Date | null
    createdAt: Date
    updatedAt: Date
    systemId: string
    _count: FilterMediaCountAggregateOutputType | null
    _avg: FilterMediaAvgAggregateOutputType | null
    _sum: FilterMediaSumAggregateOutputType | null
    _min: FilterMediaMinAggregateOutputType | null
    _max: FilterMediaMaxAggregateOutputType | null
  }

  type GetFilterMediaGroupByPayload<T extends FilterMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilterMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilterMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilterMediaGroupByOutputType[P]>
            : GetScalarType<T[P], FilterMediaGroupByOutputType[P]>
        }
      >
    >


  export type FilterMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    addedAt?: boolean
    lastReplacedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    systemId?: boolean
    system?: boolean | SystemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filterMedia"]>

  export type FilterMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    addedAt?: boolean
    lastReplacedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    systemId?: boolean
    system?: boolean | SystemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filterMedia"]>

  export type FilterMediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    addedAt?: boolean
    lastReplacedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    systemId?: boolean
    system?: boolean | SystemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filterMedia"]>

  export type FilterMediaSelectScalar = {
    id?: boolean
    name?: boolean
    addedAt?: boolean
    lastReplacedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    systemId?: boolean
  }

  export type FilterMediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "addedAt" | "lastReplacedAt" | "createdAt" | "updatedAt" | "systemId", ExtArgs["result"]["filterMedia"]>
  export type FilterMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    system?: boolean | SystemDefaultArgs<ExtArgs>
  }
  export type FilterMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    system?: boolean | SystemDefaultArgs<ExtArgs>
  }
  export type FilterMediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    system?: boolean | SystemDefaultArgs<ExtArgs>
  }

  export type $FilterMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FilterMedia"
    objects: {
      system: Prisma.$SystemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      addedAt: Date
      lastReplacedAt: Date | null
      createdAt: Date
      updatedAt: Date
      systemId: string
    }, ExtArgs["result"]["filterMedia"]>
    composites: {}
  }

  type FilterMediaGetPayload<S extends boolean | null | undefined | FilterMediaDefaultArgs> = $Result.GetResult<Prisma.$FilterMediaPayload, S>

  type FilterMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilterMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilterMediaCountAggregateInputType | true
    }

  export interface FilterMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FilterMedia'], meta: { name: 'FilterMedia' } }
    /**
     * Find zero or one FilterMedia that matches the filter.
     * @param {FilterMediaFindUniqueArgs} args - Arguments to find a FilterMedia
     * @example
     * // Get one FilterMedia
     * const filterMedia = await prisma.filterMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilterMediaFindUniqueArgs>(args: SelectSubset<T, FilterMediaFindUniqueArgs<ExtArgs>>): Prisma__FilterMediaClient<$Result.GetResult<Prisma.$FilterMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FilterMedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilterMediaFindUniqueOrThrowArgs} args - Arguments to find a FilterMedia
     * @example
     * // Get one FilterMedia
     * const filterMedia = await prisma.filterMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilterMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, FilterMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilterMediaClient<$Result.GetResult<Prisma.$FilterMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FilterMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterMediaFindFirstArgs} args - Arguments to find a FilterMedia
     * @example
     * // Get one FilterMedia
     * const filterMedia = await prisma.filterMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilterMediaFindFirstArgs>(args?: SelectSubset<T, FilterMediaFindFirstArgs<ExtArgs>>): Prisma__FilterMediaClient<$Result.GetResult<Prisma.$FilterMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FilterMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterMediaFindFirstOrThrowArgs} args - Arguments to find a FilterMedia
     * @example
     * // Get one FilterMedia
     * const filterMedia = await prisma.filterMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilterMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, FilterMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilterMediaClient<$Result.GetResult<Prisma.$FilterMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FilterMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FilterMedias
     * const filterMedias = await prisma.filterMedia.findMany()
     * 
     * // Get first 10 FilterMedias
     * const filterMedias = await prisma.filterMedia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filterMediaWithIdOnly = await prisma.filterMedia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilterMediaFindManyArgs>(args?: SelectSubset<T, FilterMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FilterMedia.
     * @param {FilterMediaCreateArgs} args - Arguments to create a FilterMedia.
     * @example
     * // Create one FilterMedia
     * const FilterMedia = await prisma.filterMedia.create({
     *   data: {
     *     // ... data to create a FilterMedia
     *   }
     * })
     * 
     */
    create<T extends FilterMediaCreateArgs>(args: SelectSubset<T, FilterMediaCreateArgs<ExtArgs>>): Prisma__FilterMediaClient<$Result.GetResult<Prisma.$FilterMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FilterMedias.
     * @param {FilterMediaCreateManyArgs} args - Arguments to create many FilterMedias.
     * @example
     * // Create many FilterMedias
     * const filterMedia = await prisma.filterMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilterMediaCreateManyArgs>(args?: SelectSubset<T, FilterMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FilterMedias and returns the data saved in the database.
     * @param {FilterMediaCreateManyAndReturnArgs} args - Arguments to create many FilterMedias.
     * @example
     * // Create many FilterMedias
     * const filterMedia = await prisma.filterMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FilterMedias and only return the `id`
     * const filterMediaWithIdOnly = await prisma.filterMedia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FilterMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, FilterMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterMediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FilterMedia.
     * @param {FilterMediaDeleteArgs} args - Arguments to delete one FilterMedia.
     * @example
     * // Delete one FilterMedia
     * const FilterMedia = await prisma.filterMedia.delete({
     *   where: {
     *     // ... filter to delete one FilterMedia
     *   }
     * })
     * 
     */
    delete<T extends FilterMediaDeleteArgs>(args: SelectSubset<T, FilterMediaDeleteArgs<ExtArgs>>): Prisma__FilterMediaClient<$Result.GetResult<Prisma.$FilterMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FilterMedia.
     * @param {FilterMediaUpdateArgs} args - Arguments to update one FilterMedia.
     * @example
     * // Update one FilterMedia
     * const filterMedia = await prisma.filterMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilterMediaUpdateArgs>(args: SelectSubset<T, FilterMediaUpdateArgs<ExtArgs>>): Prisma__FilterMediaClient<$Result.GetResult<Prisma.$FilterMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FilterMedias.
     * @param {FilterMediaDeleteManyArgs} args - Arguments to filter FilterMedias to delete.
     * @example
     * // Delete a few FilterMedias
     * const { count } = await prisma.filterMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilterMediaDeleteManyArgs>(args?: SelectSubset<T, FilterMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FilterMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FilterMedias
     * const filterMedia = await prisma.filterMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilterMediaUpdateManyArgs>(args: SelectSubset<T, FilterMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FilterMedias and returns the data updated in the database.
     * @param {FilterMediaUpdateManyAndReturnArgs} args - Arguments to update many FilterMedias.
     * @example
     * // Update many FilterMedias
     * const filterMedia = await prisma.filterMedia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FilterMedias and only return the `id`
     * const filterMediaWithIdOnly = await prisma.filterMedia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FilterMediaUpdateManyAndReturnArgs>(args: SelectSubset<T, FilterMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterMediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FilterMedia.
     * @param {FilterMediaUpsertArgs} args - Arguments to update or create a FilterMedia.
     * @example
     * // Update or create a FilterMedia
     * const filterMedia = await prisma.filterMedia.upsert({
     *   create: {
     *     // ... data to create a FilterMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FilterMedia we want to update
     *   }
     * })
     */
    upsert<T extends FilterMediaUpsertArgs>(args: SelectSubset<T, FilterMediaUpsertArgs<ExtArgs>>): Prisma__FilterMediaClient<$Result.GetResult<Prisma.$FilterMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FilterMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterMediaCountArgs} args - Arguments to filter FilterMedias to count.
     * @example
     * // Count the number of FilterMedias
     * const count = await prisma.filterMedia.count({
     *   where: {
     *     // ... the filter for the FilterMedias we want to count
     *   }
     * })
    **/
    count<T extends FilterMediaCountArgs>(
      args?: Subset<T, FilterMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilterMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FilterMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FilterMediaAggregateArgs>(args: Subset<T, FilterMediaAggregateArgs>): Prisma.PrismaPromise<GetFilterMediaAggregateType<T>>

    /**
     * Group by FilterMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterMediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FilterMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilterMediaGroupByArgs['orderBy'] }
        : { orderBy?: FilterMediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FilterMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilterMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FilterMedia model
   */
  readonly fields: FilterMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FilterMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilterMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    system<T extends SystemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SystemDefaultArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FilterMedia model
   */
  interface FilterMediaFieldRefs {
    readonly id: FieldRef<"FilterMedia", 'Int'>
    readonly name: FieldRef<"FilterMedia", 'String'>
    readonly addedAt: FieldRef<"FilterMedia", 'DateTime'>
    readonly lastReplacedAt: FieldRef<"FilterMedia", 'DateTime'>
    readonly createdAt: FieldRef<"FilterMedia", 'DateTime'>
    readonly updatedAt: FieldRef<"FilterMedia", 'DateTime'>
    readonly systemId: FieldRef<"FilterMedia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FilterMedia findUnique
   */
  export type FilterMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterMedia
     */
    select?: FilterMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterMedia
     */
    omit?: FilterMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterMediaInclude<ExtArgs> | null
    /**
     * Filter, which FilterMedia to fetch.
     */
    where: FilterMediaWhereUniqueInput
  }

  /**
   * FilterMedia findUniqueOrThrow
   */
  export type FilterMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterMedia
     */
    select?: FilterMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterMedia
     */
    omit?: FilterMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterMediaInclude<ExtArgs> | null
    /**
     * Filter, which FilterMedia to fetch.
     */
    where: FilterMediaWhereUniqueInput
  }

  /**
   * FilterMedia findFirst
   */
  export type FilterMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterMedia
     */
    select?: FilterMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterMedia
     */
    omit?: FilterMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterMediaInclude<ExtArgs> | null
    /**
     * Filter, which FilterMedia to fetch.
     */
    where?: FilterMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilterMedias to fetch.
     */
    orderBy?: FilterMediaOrderByWithRelationInput | FilterMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilterMedias.
     */
    cursor?: FilterMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilterMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilterMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilterMedias.
     */
    distinct?: FilterMediaScalarFieldEnum | FilterMediaScalarFieldEnum[]
  }

  /**
   * FilterMedia findFirstOrThrow
   */
  export type FilterMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterMedia
     */
    select?: FilterMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterMedia
     */
    omit?: FilterMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterMediaInclude<ExtArgs> | null
    /**
     * Filter, which FilterMedia to fetch.
     */
    where?: FilterMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilterMedias to fetch.
     */
    orderBy?: FilterMediaOrderByWithRelationInput | FilterMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilterMedias.
     */
    cursor?: FilterMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilterMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilterMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilterMedias.
     */
    distinct?: FilterMediaScalarFieldEnum | FilterMediaScalarFieldEnum[]
  }

  /**
   * FilterMedia findMany
   */
  export type FilterMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterMedia
     */
    select?: FilterMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterMedia
     */
    omit?: FilterMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterMediaInclude<ExtArgs> | null
    /**
     * Filter, which FilterMedias to fetch.
     */
    where?: FilterMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilterMedias to fetch.
     */
    orderBy?: FilterMediaOrderByWithRelationInput | FilterMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FilterMedias.
     */
    cursor?: FilterMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilterMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilterMedias.
     */
    skip?: number
    distinct?: FilterMediaScalarFieldEnum | FilterMediaScalarFieldEnum[]
  }

  /**
   * FilterMedia create
   */
  export type FilterMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterMedia
     */
    select?: FilterMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterMedia
     */
    omit?: FilterMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a FilterMedia.
     */
    data: XOR<FilterMediaCreateInput, FilterMediaUncheckedCreateInput>
  }

  /**
   * FilterMedia createMany
   */
  export type FilterMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FilterMedias.
     */
    data: FilterMediaCreateManyInput | FilterMediaCreateManyInput[]
  }

  /**
   * FilterMedia createManyAndReturn
   */
  export type FilterMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterMedia
     */
    select?: FilterMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FilterMedia
     */
    omit?: FilterMediaOmit<ExtArgs> | null
    /**
     * The data used to create many FilterMedias.
     */
    data: FilterMediaCreateManyInput | FilterMediaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FilterMedia update
   */
  export type FilterMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterMedia
     */
    select?: FilterMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterMedia
     */
    omit?: FilterMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a FilterMedia.
     */
    data: XOR<FilterMediaUpdateInput, FilterMediaUncheckedUpdateInput>
    /**
     * Choose, which FilterMedia to update.
     */
    where: FilterMediaWhereUniqueInput
  }

  /**
   * FilterMedia updateMany
   */
  export type FilterMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FilterMedias.
     */
    data: XOR<FilterMediaUpdateManyMutationInput, FilterMediaUncheckedUpdateManyInput>
    /**
     * Filter which FilterMedias to update
     */
    where?: FilterMediaWhereInput
    /**
     * Limit how many FilterMedias to update.
     */
    limit?: number
  }

  /**
   * FilterMedia updateManyAndReturn
   */
  export type FilterMediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterMedia
     */
    select?: FilterMediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FilterMedia
     */
    omit?: FilterMediaOmit<ExtArgs> | null
    /**
     * The data used to update FilterMedias.
     */
    data: XOR<FilterMediaUpdateManyMutationInput, FilterMediaUncheckedUpdateManyInput>
    /**
     * Filter which FilterMedias to update
     */
    where?: FilterMediaWhereInput
    /**
     * Limit how many FilterMedias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterMediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FilterMedia upsert
   */
  export type FilterMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterMedia
     */
    select?: FilterMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterMedia
     */
    omit?: FilterMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the FilterMedia to update in case it exists.
     */
    where: FilterMediaWhereUniqueInput
    /**
     * In case the FilterMedia found by the `where` argument doesn't exist, create a new FilterMedia with this data.
     */
    create: XOR<FilterMediaCreateInput, FilterMediaUncheckedCreateInput>
    /**
     * In case the FilterMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilterMediaUpdateInput, FilterMediaUncheckedUpdateInput>
  }

  /**
   * FilterMedia delete
   */
  export type FilterMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterMedia
     */
    select?: FilterMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterMedia
     */
    omit?: FilterMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterMediaInclude<ExtArgs> | null
    /**
     * Filter which FilterMedia to delete.
     */
    where: FilterMediaWhereUniqueInput
  }

  /**
   * FilterMedia deleteMany
   */
  export type FilterMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilterMedias to delete
     */
    where?: FilterMediaWhereInput
    /**
     * Limit how many FilterMedias to delete.
     */
    limit?: number
  }

  /**
   * FilterMedia without action
   */
  export type FilterMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterMedia
     */
    select?: FilterMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterMedia
     */
    omit?: FilterMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterMediaInclude<ExtArgs> | null
  }


  /**
   * Model SystemActivity
   */

  export type AggregateSystemActivity = {
    _count: SystemActivityCountAggregateOutputType | null
    _avg: SystemActivityAvgAggregateOutputType | null
    _sum: SystemActivitySumAggregateOutputType | null
    _min: SystemActivityMinAggregateOutputType | null
    _max: SystemActivityMaxAggregateOutputType | null
  }

  export type SystemActivityAvgAggregateOutputType = {
    id: number | null
    value: number | null
    parameterId: number | null
  }

  export type SystemActivitySumAggregateOutputType = {
    id: number | null
    value: number | null
    parameterId: number | null
  }

  export type SystemActivityMinAggregateOutputType = {
    id: number | null
    type: $Enums.SystemActivityType | null
    createdAt: Date | null
    loggedAt: Date | null
    value: number | null
    note: string | null
    unit: string | null
    product: string | null
    systemId: string | null
    parameterId: number | null
  }

  export type SystemActivityMaxAggregateOutputType = {
    id: number | null
    type: $Enums.SystemActivityType | null
    createdAt: Date | null
    loggedAt: Date | null
    value: number | null
    note: string | null
    unit: string | null
    product: string | null
    systemId: string | null
    parameterId: number | null
  }

  export type SystemActivityCountAggregateOutputType = {
    id: number
    type: number
    createdAt: number
    loggedAt: number
    value: number
    note: number
    unit: number
    product: number
    systemId: number
    parameterId: number
    _all: number
  }


  export type SystemActivityAvgAggregateInputType = {
    id?: true
    value?: true
    parameterId?: true
  }

  export type SystemActivitySumAggregateInputType = {
    id?: true
    value?: true
    parameterId?: true
  }

  export type SystemActivityMinAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
    loggedAt?: true
    value?: true
    note?: true
    unit?: true
    product?: true
    systemId?: true
    parameterId?: true
  }

  export type SystemActivityMaxAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
    loggedAt?: true
    value?: true
    note?: true
    unit?: true
    product?: true
    systemId?: true
    parameterId?: true
  }

  export type SystemActivityCountAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
    loggedAt?: true
    value?: true
    note?: true
    unit?: true
    product?: true
    systemId?: true
    parameterId?: true
    _all?: true
  }

  export type SystemActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemActivity to aggregate.
     */
    where?: SystemActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemActivities to fetch.
     */
    orderBy?: SystemActivityOrderByWithRelationInput | SystemActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemActivities
    **/
    _count?: true | SystemActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemActivityMaxAggregateInputType
  }

  export type GetSystemActivityAggregateType<T extends SystemActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemActivity[P]>
      : GetScalarType<T[P], AggregateSystemActivity[P]>
  }




  export type SystemActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemActivityWhereInput
    orderBy?: SystemActivityOrderByWithAggregationInput | SystemActivityOrderByWithAggregationInput[]
    by: SystemActivityScalarFieldEnum[] | SystemActivityScalarFieldEnum
    having?: SystemActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemActivityCountAggregateInputType | true
    _avg?: SystemActivityAvgAggregateInputType
    _sum?: SystemActivitySumAggregateInputType
    _min?: SystemActivityMinAggregateInputType
    _max?: SystemActivityMaxAggregateInputType
  }

  export type SystemActivityGroupByOutputType = {
    id: number
    type: $Enums.SystemActivityType
    createdAt: Date
    loggedAt: Date | null
    value: number | null
    note: string | null
    unit: string | null
    product: string | null
    systemId: string
    parameterId: number | null
    _count: SystemActivityCountAggregateOutputType | null
    _avg: SystemActivityAvgAggregateOutputType | null
    _sum: SystemActivitySumAggregateOutputType | null
    _min: SystemActivityMinAggregateOutputType | null
    _max: SystemActivityMaxAggregateOutputType | null
  }

  type GetSystemActivityGroupByPayload<T extends SystemActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemActivityGroupByOutputType[P]>
            : GetScalarType<T[P], SystemActivityGroupByOutputType[P]>
        }
      >
    >


  export type SystemActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    createdAt?: boolean
    loggedAt?: boolean
    value?: boolean
    note?: boolean
    unit?: boolean
    product?: boolean
    systemId?: boolean
    parameterId?: boolean
    system?: boolean | SystemDefaultArgs<ExtArgs>
    parameter?: boolean | SystemActivity$parameterArgs<ExtArgs>
  }, ExtArgs["result"]["systemActivity"]>

  export type SystemActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    createdAt?: boolean
    loggedAt?: boolean
    value?: boolean
    note?: boolean
    unit?: boolean
    product?: boolean
    systemId?: boolean
    parameterId?: boolean
    system?: boolean | SystemDefaultArgs<ExtArgs>
    parameter?: boolean | SystemActivity$parameterArgs<ExtArgs>
  }, ExtArgs["result"]["systemActivity"]>

  export type SystemActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    createdAt?: boolean
    loggedAt?: boolean
    value?: boolean
    note?: boolean
    unit?: boolean
    product?: boolean
    systemId?: boolean
    parameterId?: boolean
    system?: boolean | SystemDefaultArgs<ExtArgs>
    parameter?: boolean | SystemActivity$parameterArgs<ExtArgs>
  }, ExtArgs["result"]["systemActivity"]>

  export type SystemActivitySelectScalar = {
    id?: boolean
    type?: boolean
    createdAt?: boolean
    loggedAt?: boolean
    value?: boolean
    note?: boolean
    unit?: boolean
    product?: boolean
    systemId?: boolean
    parameterId?: boolean
  }

  export type SystemActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "createdAt" | "loggedAt" | "value" | "note" | "unit" | "product" | "systemId" | "parameterId", ExtArgs["result"]["systemActivity"]>
  export type SystemActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    system?: boolean | SystemDefaultArgs<ExtArgs>
    parameter?: boolean | SystemActivity$parameterArgs<ExtArgs>
  }
  export type SystemActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    system?: boolean | SystemDefaultArgs<ExtArgs>
    parameter?: boolean | SystemActivity$parameterArgs<ExtArgs>
  }
  export type SystemActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    system?: boolean | SystemDefaultArgs<ExtArgs>
    parameter?: boolean | SystemActivity$parameterArgs<ExtArgs>
  }

  export type $SystemActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemActivity"
    objects: {
      system: Prisma.$SystemPayload<ExtArgs>
      parameter: Prisma.$SystemParameterPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.SystemActivityType
      createdAt: Date
      loggedAt: Date | null
      value: number | null
      note: string | null
      unit: string | null
      product: string | null
      systemId: string
      parameterId: number | null
    }, ExtArgs["result"]["systemActivity"]>
    composites: {}
  }

  type SystemActivityGetPayload<S extends boolean | null | undefined | SystemActivityDefaultArgs> = $Result.GetResult<Prisma.$SystemActivityPayload, S>

  type SystemActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemActivityCountAggregateInputType | true
    }

  export interface SystemActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemActivity'], meta: { name: 'SystemActivity' } }
    /**
     * Find zero or one SystemActivity that matches the filter.
     * @param {SystemActivityFindUniqueArgs} args - Arguments to find a SystemActivity
     * @example
     * // Get one SystemActivity
     * const systemActivity = await prisma.systemActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemActivityFindUniqueArgs>(args: SelectSubset<T, SystemActivityFindUniqueArgs<ExtArgs>>): Prisma__SystemActivityClient<$Result.GetResult<Prisma.$SystemActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemActivityFindUniqueOrThrowArgs} args - Arguments to find a SystemActivity
     * @example
     * // Get one SystemActivity
     * const systemActivity = await prisma.systemActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemActivityClient<$Result.GetResult<Prisma.$SystemActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemActivityFindFirstArgs} args - Arguments to find a SystemActivity
     * @example
     * // Get one SystemActivity
     * const systemActivity = await prisma.systemActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemActivityFindFirstArgs>(args?: SelectSubset<T, SystemActivityFindFirstArgs<ExtArgs>>): Prisma__SystemActivityClient<$Result.GetResult<Prisma.$SystemActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemActivityFindFirstOrThrowArgs} args - Arguments to find a SystemActivity
     * @example
     * // Get one SystemActivity
     * const systemActivity = await prisma.systemActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemActivityClient<$Result.GetResult<Prisma.$SystemActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemActivities
     * const systemActivities = await prisma.systemActivity.findMany()
     * 
     * // Get first 10 SystemActivities
     * const systemActivities = await prisma.systemActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemActivityWithIdOnly = await prisma.systemActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemActivityFindManyArgs>(args?: SelectSubset<T, SystemActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemActivity.
     * @param {SystemActivityCreateArgs} args - Arguments to create a SystemActivity.
     * @example
     * // Create one SystemActivity
     * const SystemActivity = await prisma.systemActivity.create({
     *   data: {
     *     // ... data to create a SystemActivity
     *   }
     * })
     * 
     */
    create<T extends SystemActivityCreateArgs>(args: SelectSubset<T, SystemActivityCreateArgs<ExtArgs>>): Prisma__SystemActivityClient<$Result.GetResult<Prisma.$SystemActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemActivities.
     * @param {SystemActivityCreateManyArgs} args - Arguments to create many SystemActivities.
     * @example
     * // Create many SystemActivities
     * const systemActivity = await prisma.systemActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemActivityCreateManyArgs>(args?: SelectSubset<T, SystemActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemActivities and returns the data saved in the database.
     * @param {SystemActivityCreateManyAndReturnArgs} args - Arguments to create many SystemActivities.
     * @example
     * // Create many SystemActivities
     * const systemActivity = await prisma.systemActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemActivities and only return the `id`
     * const systemActivityWithIdOnly = await prisma.systemActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemActivity.
     * @param {SystemActivityDeleteArgs} args - Arguments to delete one SystemActivity.
     * @example
     * // Delete one SystemActivity
     * const SystemActivity = await prisma.systemActivity.delete({
     *   where: {
     *     // ... filter to delete one SystemActivity
     *   }
     * })
     * 
     */
    delete<T extends SystemActivityDeleteArgs>(args: SelectSubset<T, SystemActivityDeleteArgs<ExtArgs>>): Prisma__SystemActivityClient<$Result.GetResult<Prisma.$SystemActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemActivity.
     * @param {SystemActivityUpdateArgs} args - Arguments to update one SystemActivity.
     * @example
     * // Update one SystemActivity
     * const systemActivity = await prisma.systemActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemActivityUpdateArgs>(args: SelectSubset<T, SystemActivityUpdateArgs<ExtArgs>>): Prisma__SystemActivityClient<$Result.GetResult<Prisma.$SystemActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemActivities.
     * @param {SystemActivityDeleteManyArgs} args - Arguments to filter SystemActivities to delete.
     * @example
     * // Delete a few SystemActivities
     * const { count } = await prisma.systemActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemActivityDeleteManyArgs>(args?: SelectSubset<T, SystemActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemActivities
     * const systemActivity = await prisma.systemActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemActivityUpdateManyArgs>(args: SelectSubset<T, SystemActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemActivities and returns the data updated in the database.
     * @param {SystemActivityUpdateManyAndReturnArgs} args - Arguments to update many SystemActivities.
     * @example
     * // Update many SystemActivities
     * const systemActivity = await prisma.systemActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemActivities and only return the `id`
     * const systemActivityWithIdOnly = await prisma.systemActivity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SystemActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemActivity.
     * @param {SystemActivityUpsertArgs} args - Arguments to update or create a SystemActivity.
     * @example
     * // Update or create a SystemActivity
     * const systemActivity = await prisma.systemActivity.upsert({
     *   create: {
     *     // ... data to create a SystemActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemActivity we want to update
     *   }
     * })
     */
    upsert<T extends SystemActivityUpsertArgs>(args: SelectSubset<T, SystemActivityUpsertArgs<ExtArgs>>): Prisma__SystemActivityClient<$Result.GetResult<Prisma.$SystemActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemActivityCountArgs} args - Arguments to filter SystemActivities to count.
     * @example
     * // Count the number of SystemActivities
     * const count = await prisma.systemActivity.count({
     *   where: {
     *     // ... the filter for the SystemActivities we want to count
     *   }
     * })
    **/
    count<T extends SystemActivityCountArgs>(
      args?: Subset<T, SystemActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemActivityAggregateArgs>(args: Subset<T, SystemActivityAggregateArgs>): Prisma.PrismaPromise<GetSystemActivityAggregateType<T>>

    /**
     * Group by SystemActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemActivityGroupByArgs['orderBy'] }
        : { orderBy?: SystemActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemActivity model
   */
  readonly fields: SystemActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    system<T extends SystemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SystemDefaultArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parameter<T extends SystemActivity$parameterArgs<ExtArgs> = {}>(args?: Subset<T, SystemActivity$parameterArgs<ExtArgs>>): Prisma__SystemParameterClient<$Result.GetResult<Prisma.$SystemParameterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemActivity model
   */
  interface SystemActivityFieldRefs {
    readonly id: FieldRef<"SystemActivity", 'Int'>
    readonly type: FieldRef<"SystemActivity", 'SystemActivityType'>
    readonly createdAt: FieldRef<"SystemActivity", 'DateTime'>
    readonly loggedAt: FieldRef<"SystemActivity", 'DateTime'>
    readonly value: FieldRef<"SystemActivity", 'Float'>
    readonly note: FieldRef<"SystemActivity", 'String'>
    readonly unit: FieldRef<"SystemActivity", 'String'>
    readonly product: FieldRef<"SystemActivity", 'String'>
    readonly systemId: FieldRef<"SystemActivity", 'String'>
    readonly parameterId: FieldRef<"SystemActivity", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SystemActivity findUnique
   */
  export type SystemActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemActivity
     */
    select?: SystemActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemActivity
     */
    omit?: SystemActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemActivityInclude<ExtArgs> | null
    /**
     * Filter, which SystemActivity to fetch.
     */
    where: SystemActivityWhereUniqueInput
  }

  /**
   * SystemActivity findUniqueOrThrow
   */
  export type SystemActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemActivity
     */
    select?: SystemActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemActivity
     */
    omit?: SystemActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemActivityInclude<ExtArgs> | null
    /**
     * Filter, which SystemActivity to fetch.
     */
    where: SystemActivityWhereUniqueInput
  }

  /**
   * SystemActivity findFirst
   */
  export type SystemActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemActivity
     */
    select?: SystemActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemActivity
     */
    omit?: SystemActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemActivityInclude<ExtArgs> | null
    /**
     * Filter, which SystemActivity to fetch.
     */
    where?: SystemActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemActivities to fetch.
     */
    orderBy?: SystemActivityOrderByWithRelationInput | SystemActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemActivities.
     */
    cursor?: SystemActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemActivities.
     */
    distinct?: SystemActivityScalarFieldEnum | SystemActivityScalarFieldEnum[]
  }

  /**
   * SystemActivity findFirstOrThrow
   */
  export type SystemActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemActivity
     */
    select?: SystemActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemActivity
     */
    omit?: SystemActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemActivityInclude<ExtArgs> | null
    /**
     * Filter, which SystemActivity to fetch.
     */
    where?: SystemActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemActivities to fetch.
     */
    orderBy?: SystemActivityOrderByWithRelationInput | SystemActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemActivities.
     */
    cursor?: SystemActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemActivities.
     */
    distinct?: SystemActivityScalarFieldEnum | SystemActivityScalarFieldEnum[]
  }

  /**
   * SystemActivity findMany
   */
  export type SystemActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemActivity
     */
    select?: SystemActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemActivity
     */
    omit?: SystemActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemActivityInclude<ExtArgs> | null
    /**
     * Filter, which SystemActivities to fetch.
     */
    where?: SystemActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemActivities to fetch.
     */
    orderBy?: SystemActivityOrderByWithRelationInput | SystemActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemActivities.
     */
    cursor?: SystemActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemActivities.
     */
    skip?: number
    distinct?: SystemActivityScalarFieldEnum | SystemActivityScalarFieldEnum[]
  }

  /**
   * SystemActivity create
   */
  export type SystemActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemActivity
     */
    select?: SystemActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemActivity
     */
    omit?: SystemActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a SystemActivity.
     */
    data: XOR<SystemActivityCreateInput, SystemActivityUncheckedCreateInput>
  }

  /**
   * SystemActivity createMany
   */
  export type SystemActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemActivities.
     */
    data: SystemActivityCreateManyInput | SystemActivityCreateManyInput[]
  }

  /**
   * SystemActivity createManyAndReturn
   */
  export type SystemActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemActivity
     */
    select?: SystemActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemActivity
     */
    omit?: SystemActivityOmit<ExtArgs> | null
    /**
     * The data used to create many SystemActivities.
     */
    data: SystemActivityCreateManyInput | SystemActivityCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SystemActivity update
   */
  export type SystemActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemActivity
     */
    select?: SystemActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemActivity
     */
    omit?: SystemActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a SystemActivity.
     */
    data: XOR<SystemActivityUpdateInput, SystemActivityUncheckedUpdateInput>
    /**
     * Choose, which SystemActivity to update.
     */
    where: SystemActivityWhereUniqueInput
  }

  /**
   * SystemActivity updateMany
   */
  export type SystemActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemActivities.
     */
    data: XOR<SystemActivityUpdateManyMutationInput, SystemActivityUncheckedUpdateManyInput>
    /**
     * Filter which SystemActivities to update
     */
    where?: SystemActivityWhereInput
    /**
     * Limit how many SystemActivities to update.
     */
    limit?: number
  }

  /**
   * SystemActivity updateManyAndReturn
   */
  export type SystemActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemActivity
     */
    select?: SystemActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemActivity
     */
    omit?: SystemActivityOmit<ExtArgs> | null
    /**
     * The data used to update SystemActivities.
     */
    data: XOR<SystemActivityUpdateManyMutationInput, SystemActivityUncheckedUpdateManyInput>
    /**
     * Filter which SystemActivities to update
     */
    where?: SystemActivityWhereInput
    /**
     * Limit how many SystemActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SystemActivity upsert
   */
  export type SystemActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemActivity
     */
    select?: SystemActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemActivity
     */
    omit?: SystemActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the SystemActivity to update in case it exists.
     */
    where: SystemActivityWhereUniqueInput
    /**
     * In case the SystemActivity found by the `where` argument doesn't exist, create a new SystemActivity with this data.
     */
    create: XOR<SystemActivityCreateInput, SystemActivityUncheckedCreateInput>
    /**
     * In case the SystemActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemActivityUpdateInput, SystemActivityUncheckedUpdateInput>
  }

  /**
   * SystemActivity delete
   */
  export type SystemActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemActivity
     */
    select?: SystemActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemActivity
     */
    omit?: SystemActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemActivityInclude<ExtArgs> | null
    /**
     * Filter which SystemActivity to delete.
     */
    where: SystemActivityWhereUniqueInput
  }

  /**
   * SystemActivity deleteMany
   */
  export type SystemActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemActivities to delete
     */
    where?: SystemActivityWhereInput
    /**
     * Limit how many SystemActivities to delete.
     */
    limit?: number
  }

  /**
   * SystemActivity.parameter
   */
  export type SystemActivity$parameterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterInclude<ExtArgs> | null
    where?: SystemParameterWhereInput
  }

  /**
   * SystemActivity without action
   */
  export type SystemActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemActivity
     */
    select?: SystemActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemActivity
     */
    omit?: SystemActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemActivityInclude<ExtArgs> | null
  }


  /**
   * Model SystemParameter
   */

  export type AggregateSystemParameter = {
    _count: SystemParameterCountAggregateOutputType | null
    _avg: SystemParameterAvgAggregateOutputType | null
    _sum: SystemParameterSumAggregateOutputType | null
    _min: SystemParameterMinAggregateOutputType | null
    _max: SystemParameterMaxAggregateOutputType | null
  }

  export type SystemParameterAvgAggregateOutputType = {
    id: number | null
    displayDecimals: number | null
    lowerBound: number | null
    upperBound: number | null
    displayOrder: number | null
  }

  export type SystemParameterSumAggregateOutputType = {
    id: number | null
    displayDecimals: number | null
    lowerBound: number | null
    upperBound: number | null
    displayOrder: number | null
  }

  export type SystemParameterMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    abbreviatedName: string | null
    unit: string | null
    displayDecimals: number | null
    lowerBound: number | null
    upperBound: number | null
    displayOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
    systemId: string | null
  }

  export type SystemParameterMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    abbreviatedName: string | null
    unit: string | null
    displayDecimals: number | null
    lowerBound: number | null
    upperBound: number | null
    displayOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
    systemId: string | null
  }

  export type SystemParameterCountAggregateOutputType = {
    id: number
    fullName: number
    abbreviatedName: number
    unit: number
    displayDecimals: number
    lowerBound: number
    upperBound: number
    displayOrder: number
    createdAt: number
    updatedAt: number
    systemId: number
    _all: number
  }


  export type SystemParameterAvgAggregateInputType = {
    id?: true
    displayDecimals?: true
    lowerBound?: true
    upperBound?: true
    displayOrder?: true
  }

  export type SystemParameterSumAggregateInputType = {
    id?: true
    displayDecimals?: true
    lowerBound?: true
    upperBound?: true
    displayOrder?: true
  }

  export type SystemParameterMinAggregateInputType = {
    id?: true
    fullName?: true
    abbreviatedName?: true
    unit?: true
    displayDecimals?: true
    lowerBound?: true
    upperBound?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
    systemId?: true
  }

  export type SystemParameterMaxAggregateInputType = {
    id?: true
    fullName?: true
    abbreviatedName?: true
    unit?: true
    displayDecimals?: true
    lowerBound?: true
    upperBound?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
    systemId?: true
  }

  export type SystemParameterCountAggregateInputType = {
    id?: true
    fullName?: true
    abbreviatedName?: true
    unit?: true
    displayDecimals?: true
    lowerBound?: true
    upperBound?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
    systemId?: true
    _all?: true
  }

  export type SystemParameterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemParameter to aggregate.
     */
    where?: SystemParameterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemParameters to fetch.
     */
    orderBy?: SystemParameterOrderByWithRelationInput | SystemParameterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemParameterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemParameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemParameters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemParameters
    **/
    _count?: true | SystemParameterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemParameterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemParameterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemParameterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemParameterMaxAggregateInputType
  }

  export type GetSystemParameterAggregateType<T extends SystemParameterAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemParameter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemParameter[P]>
      : GetScalarType<T[P], AggregateSystemParameter[P]>
  }




  export type SystemParameterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemParameterWhereInput
    orderBy?: SystemParameterOrderByWithAggregationInput | SystemParameterOrderByWithAggregationInput[]
    by: SystemParameterScalarFieldEnum[] | SystemParameterScalarFieldEnum
    having?: SystemParameterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemParameterCountAggregateInputType | true
    _avg?: SystemParameterAvgAggregateInputType
    _sum?: SystemParameterSumAggregateInputType
    _min?: SystemParameterMinAggregateInputType
    _max?: SystemParameterMaxAggregateInputType
  }

  export type SystemParameterGroupByOutputType = {
    id: number
    fullName: string
    abbreviatedName: string
    unit: string
    displayDecimals: number
    lowerBound: number
    upperBound: number
    displayOrder: number
    createdAt: Date
    updatedAt: Date
    systemId: string
    _count: SystemParameterCountAggregateOutputType | null
    _avg: SystemParameterAvgAggregateOutputType | null
    _sum: SystemParameterSumAggregateOutputType | null
    _min: SystemParameterMinAggregateOutputType | null
    _max: SystemParameterMaxAggregateOutputType | null
  }

  type GetSystemParameterGroupByPayload<T extends SystemParameterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemParameterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemParameterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemParameterGroupByOutputType[P]>
            : GetScalarType<T[P], SystemParameterGroupByOutputType[P]>
        }
      >
    >


  export type SystemParameterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    abbreviatedName?: boolean
    unit?: boolean
    displayDecimals?: boolean
    lowerBound?: boolean
    upperBound?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    systemId?: boolean
    system?: boolean | SystemDefaultArgs<ExtArgs>
    logs?: boolean | SystemParameter$logsArgs<ExtArgs>
    systemActivities?: boolean | SystemParameter$systemActivitiesArgs<ExtArgs>
    _count?: boolean | SystemParameterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["systemParameter"]>

  export type SystemParameterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    abbreviatedName?: boolean
    unit?: boolean
    displayDecimals?: boolean
    lowerBound?: boolean
    upperBound?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    systemId?: boolean
    system?: boolean | SystemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["systemParameter"]>

  export type SystemParameterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    abbreviatedName?: boolean
    unit?: boolean
    displayDecimals?: boolean
    lowerBound?: boolean
    upperBound?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    systemId?: boolean
    system?: boolean | SystemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["systemParameter"]>

  export type SystemParameterSelectScalar = {
    id?: boolean
    fullName?: boolean
    abbreviatedName?: boolean
    unit?: boolean
    displayDecimals?: boolean
    lowerBound?: boolean
    upperBound?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    systemId?: boolean
  }

  export type SystemParameterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "abbreviatedName" | "unit" | "displayDecimals" | "lowerBound" | "upperBound" | "displayOrder" | "createdAt" | "updatedAt" | "systemId", ExtArgs["result"]["systemParameter"]>
  export type SystemParameterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    system?: boolean | SystemDefaultArgs<ExtArgs>
    logs?: boolean | SystemParameter$logsArgs<ExtArgs>
    systemActivities?: boolean | SystemParameter$systemActivitiesArgs<ExtArgs>
    _count?: boolean | SystemParameterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SystemParameterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    system?: boolean | SystemDefaultArgs<ExtArgs>
  }
  export type SystemParameterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    system?: boolean | SystemDefaultArgs<ExtArgs>
  }

  export type $SystemParameterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemParameter"
    objects: {
      system: Prisma.$SystemPayload<ExtArgs>
      logs: Prisma.$SystemParameterLogPayload<ExtArgs>[]
      systemActivities: Prisma.$SystemActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      abbreviatedName: string
      unit: string
      displayDecimals: number
      lowerBound: number
      upperBound: number
      displayOrder: number
      createdAt: Date
      updatedAt: Date
      systemId: string
    }, ExtArgs["result"]["systemParameter"]>
    composites: {}
  }

  type SystemParameterGetPayload<S extends boolean | null | undefined | SystemParameterDefaultArgs> = $Result.GetResult<Prisma.$SystemParameterPayload, S>

  type SystemParameterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemParameterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemParameterCountAggregateInputType | true
    }

  export interface SystemParameterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemParameter'], meta: { name: 'SystemParameter' } }
    /**
     * Find zero or one SystemParameter that matches the filter.
     * @param {SystemParameterFindUniqueArgs} args - Arguments to find a SystemParameter
     * @example
     * // Get one SystemParameter
     * const systemParameter = await prisma.systemParameter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemParameterFindUniqueArgs>(args: SelectSubset<T, SystemParameterFindUniqueArgs<ExtArgs>>): Prisma__SystemParameterClient<$Result.GetResult<Prisma.$SystemParameterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemParameter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemParameterFindUniqueOrThrowArgs} args - Arguments to find a SystemParameter
     * @example
     * // Get one SystemParameter
     * const systemParameter = await prisma.systemParameter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemParameterFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemParameterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemParameterClient<$Result.GetResult<Prisma.$SystemParameterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemParameter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemParameterFindFirstArgs} args - Arguments to find a SystemParameter
     * @example
     * // Get one SystemParameter
     * const systemParameter = await prisma.systemParameter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemParameterFindFirstArgs>(args?: SelectSubset<T, SystemParameterFindFirstArgs<ExtArgs>>): Prisma__SystemParameterClient<$Result.GetResult<Prisma.$SystemParameterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemParameter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemParameterFindFirstOrThrowArgs} args - Arguments to find a SystemParameter
     * @example
     * // Get one SystemParameter
     * const systemParameter = await prisma.systemParameter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemParameterFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemParameterFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemParameterClient<$Result.GetResult<Prisma.$SystemParameterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemParameters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemParameterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemParameters
     * const systemParameters = await prisma.systemParameter.findMany()
     * 
     * // Get first 10 SystemParameters
     * const systemParameters = await prisma.systemParameter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemParameterWithIdOnly = await prisma.systemParameter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemParameterFindManyArgs>(args?: SelectSubset<T, SystemParameterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemParameterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemParameter.
     * @param {SystemParameterCreateArgs} args - Arguments to create a SystemParameter.
     * @example
     * // Create one SystemParameter
     * const SystemParameter = await prisma.systemParameter.create({
     *   data: {
     *     // ... data to create a SystemParameter
     *   }
     * })
     * 
     */
    create<T extends SystemParameterCreateArgs>(args: SelectSubset<T, SystemParameterCreateArgs<ExtArgs>>): Prisma__SystemParameterClient<$Result.GetResult<Prisma.$SystemParameterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemParameters.
     * @param {SystemParameterCreateManyArgs} args - Arguments to create many SystemParameters.
     * @example
     * // Create many SystemParameters
     * const systemParameter = await prisma.systemParameter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemParameterCreateManyArgs>(args?: SelectSubset<T, SystemParameterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemParameters and returns the data saved in the database.
     * @param {SystemParameterCreateManyAndReturnArgs} args - Arguments to create many SystemParameters.
     * @example
     * // Create many SystemParameters
     * const systemParameter = await prisma.systemParameter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemParameters and only return the `id`
     * const systemParameterWithIdOnly = await prisma.systemParameter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemParameterCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemParameterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemParameterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemParameter.
     * @param {SystemParameterDeleteArgs} args - Arguments to delete one SystemParameter.
     * @example
     * // Delete one SystemParameter
     * const SystemParameter = await prisma.systemParameter.delete({
     *   where: {
     *     // ... filter to delete one SystemParameter
     *   }
     * })
     * 
     */
    delete<T extends SystemParameterDeleteArgs>(args: SelectSubset<T, SystemParameterDeleteArgs<ExtArgs>>): Prisma__SystemParameterClient<$Result.GetResult<Prisma.$SystemParameterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemParameter.
     * @param {SystemParameterUpdateArgs} args - Arguments to update one SystemParameter.
     * @example
     * // Update one SystemParameter
     * const systemParameter = await prisma.systemParameter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemParameterUpdateArgs>(args: SelectSubset<T, SystemParameterUpdateArgs<ExtArgs>>): Prisma__SystemParameterClient<$Result.GetResult<Prisma.$SystemParameterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemParameters.
     * @param {SystemParameterDeleteManyArgs} args - Arguments to filter SystemParameters to delete.
     * @example
     * // Delete a few SystemParameters
     * const { count } = await prisma.systemParameter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemParameterDeleteManyArgs>(args?: SelectSubset<T, SystemParameterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemParameters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemParameterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemParameters
     * const systemParameter = await prisma.systemParameter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemParameterUpdateManyArgs>(args: SelectSubset<T, SystemParameterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemParameters and returns the data updated in the database.
     * @param {SystemParameterUpdateManyAndReturnArgs} args - Arguments to update many SystemParameters.
     * @example
     * // Update many SystemParameters
     * const systemParameter = await prisma.systemParameter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemParameters and only return the `id`
     * const systemParameterWithIdOnly = await prisma.systemParameter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SystemParameterUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemParameterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemParameterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemParameter.
     * @param {SystemParameterUpsertArgs} args - Arguments to update or create a SystemParameter.
     * @example
     * // Update or create a SystemParameter
     * const systemParameter = await prisma.systemParameter.upsert({
     *   create: {
     *     // ... data to create a SystemParameter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemParameter we want to update
     *   }
     * })
     */
    upsert<T extends SystemParameterUpsertArgs>(args: SelectSubset<T, SystemParameterUpsertArgs<ExtArgs>>): Prisma__SystemParameterClient<$Result.GetResult<Prisma.$SystemParameterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemParameters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemParameterCountArgs} args - Arguments to filter SystemParameters to count.
     * @example
     * // Count the number of SystemParameters
     * const count = await prisma.systemParameter.count({
     *   where: {
     *     // ... the filter for the SystemParameters we want to count
     *   }
     * })
    **/
    count<T extends SystemParameterCountArgs>(
      args?: Subset<T, SystemParameterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemParameterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemParameter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemParameterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemParameterAggregateArgs>(args: Subset<T, SystemParameterAggregateArgs>): Prisma.PrismaPromise<GetSystemParameterAggregateType<T>>

    /**
     * Group by SystemParameter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemParameterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemParameterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemParameterGroupByArgs['orderBy'] }
        : { orderBy?: SystemParameterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemParameterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemParameterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemParameter model
   */
  readonly fields: SystemParameterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemParameter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemParameterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    system<T extends SystemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SystemDefaultArgs<ExtArgs>>): Prisma__SystemClient<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    logs<T extends SystemParameter$logsArgs<ExtArgs> = {}>(args?: Subset<T, SystemParameter$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemParameterLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    systemActivities<T extends SystemParameter$systemActivitiesArgs<ExtArgs> = {}>(args?: Subset<T, SystemParameter$systemActivitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemParameter model
   */
  interface SystemParameterFieldRefs {
    readonly id: FieldRef<"SystemParameter", 'Int'>
    readonly fullName: FieldRef<"SystemParameter", 'String'>
    readonly abbreviatedName: FieldRef<"SystemParameter", 'String'>
    readonly unit: FieldRef<"SystemParameter", 'String'>
    readonly displayDecimals: FieldRef<"SystemParameter", 'Int'>
    readonly lowerBound: FieldRef<"SystemParameter", 'Float'>
    readonly upperBound: FieldRef<"SystemParameter", 'Float'>
    readonly displayOrder: FieldRef<"SystemParameter", 'Int'>
    readonly createdAt: FieldRef<"SystemParameter", 'DateTime'>
    readonly updatedAt: FieldRef<"SystemParameter", 'DateTime'>
    readonly systemId: FieldRef<"SystemParameter", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SystemParameter findUnique
   */
  export type SystemParameterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterInclude<ExtArgs> | null
    /**
     * Filter, which SystemParameter to fetch.
     */
    where: SystemParameterWhereUniqueInput
  }

  /**
   * SystemParameter findUniqueOrThrow
   */
  export type SystemParameterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterInclude<ExtArgs> | null
    /**
     * Filter, which SystemParameter to fetch.
     */
    where: SystemParameterWhereUniqueInput
  }

  /**
   * SystemParameter findFirst
   */
  export type SystemParameterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterInclude<ExtArgs> | null
    /**
     * Filter, which SystemParameter to fetch.
     */
    where?: SystemParameterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemParameters to fetch.
     */
    orderBy?: SystemParameterOrderByWithRelationInput | SystemParameterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemParameters.
     */
    cursor?: SystemParameterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemParameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemParameters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemParameters.
     */
    distinct?: SystemParameterScalarFieldEnum | SystemParameterScalarFieldEnum[]
  }

  /**
   * SystemParameter findFirstOrThrow
   */
  export type SystemParameterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterInclude<ExtArgs> | null
    /**
     * Filter, which SystemParameter to fetch.
     */
    where?: SystemParameterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemParameters to fetch.
     */
    orderBy?: SystemParameterOrderByWithRelationInput | SystemParameterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemParameters.
     */
    cursor?: SystemParameterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemParameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemParameters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemParameters.
     */
    distinct?: SystemParameterScalarFieldEnum | SystemParameterScalarFieldEnum[]
  }

  /**
   * SystemParameter findMany
   */
  export type SystemParameterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterInclude<ExtArgs> | null
    /**
     * Filter, which SystemParameters to fetch.
     */
    where?: SystemParameterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemParameters to fetch.
     */
    orderBy?: SystemParameterOrderByWithRelationInput | SystemParameterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemParameters.
     */
    cursor?: SystemParameterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemParameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemParameters.
     */
    skip?: number
    distinct?: SystemParameterScalarFieldEnum | SystemParameterScalarFieldEnum[]
  }

  /**
   * SystemParameter create
   */
  export type SystemParameterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterInclude<ExtArgs> | null
    /**
     * The data needed to create a SystemParameter.
     */
    data: XOR<SystemParameterCreateInput, SystemParameterUncheckedCreateInput>
  }

  /**
   * SystemParameter createMany
   */
  export type SystemParameterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemParameters.
     */
    data: SystemParameterCreateManyInput | SystemParameterCreateManyInput[]
  }

  /**
   * SystemParameter createManyAndReturn
   */
  export type SystemParameterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * The data used to create many SystemParameters.
     */
    data: SystemParameterCreateManyInput | SystemParameterCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SystemParameter update
   */
  export type SystemParameterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterInclude<ExtArgs> | null
    /**
     * The data needed to update a SystemParameter.
     */
    data: XOR<SystemParameterUpdateInput, SystemParameterUncheckedUpdateInput>
    /**
     * Choose, which SystemParameter to update.
     */
    where: SystemParameterWhereUniqueInput
  }

  /**
   * SystemParameter updateMany
   */
  export type SystemParameterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemParameters.
     */
    data: XOR<SystemParameterUpdateManyMutationInput, SystemParameterUncheckedUpdateManyInput>
    /**
     * Filter which SystemParameters to update
     */
    where?: SystemParameterWhereInput
    /**
     * Limit how many SystemParameters to update.
     */
    limit?: number
  }

  /**
   * SystemParameter updateManyAndReturn
   */
  export type SystemParameterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * The data used to update SystemParameters.
     */
    data: XOR<SystemParameterUpdateManyMutationInput, SystemParameterUncheckedUpdateManyInput>
    /**
     * Filter which SystemParameters to update
     */
    where?: SystemParameterWhereInput
    /**
     * Limit how many SystemParameters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SystemParameter upsert
   */
  export type SystemParameterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterInclude<ExtArgs> | null
    /**
     * The filter to search for the SystemParameter to update in case it exists.
     */
    where: SystemParameterWhereUniqueInput
    /**
     * In case the SystemParameter found by the `where` argument doesn't exist, create a new SystemParameter with this data.
     */
    create: XOR<SystemParameterCreateInput, SystemParameterUncheckedCreateInput>
    /**
     * In case the SystemParameter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemParameterUpdateInput, SystemParameterUncheckedUpdateInput>
  }

  /**
   * SystemParameter delete
   */
  export type SystemParameterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterInclude<ExtArgs> | null
    /**
     * Filter which SystemParameter to delete.
     */
    where: SystemParameterWhereUniqueInput
  }

  /**
   * SystemParameter deleteMany
   */
  export type SystemParameterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemParameters to delete
     */
    where?: SystemParameterWhereInput
    /**
     * Limit how many SystemParameters to delete.
     */
    limit?: number
  }

  /**
   * SystemParameter.logs
   */
  export type SystemParameter$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameterLog
     */
    select?: SystemParameterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameterLog
     */
    omit?: SystemParameterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterLogInclude<ExtArgs> | null
    where?: SystemParameterLogWhereInput
    orderBy?: SystemParameterLogOrderByWithRelationInput | SystemParameterLogOrderByWithRelationInput[]
    cursor?: SystemParameterLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SystemParameterLogScalarFieldEnum | SystemParameterLogScalarFieldEnum[]
  }

  /**
   * SystemParameter.systemActivities
   */
  export type SystemParameter$systemActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemActivity
     */
    select?: SystemActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemActivity
     */
    omit?: SystemActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemActivityInclude<ExtArgs> | null
    where?: SystemActivityWhereInput
    orderBy?: SystemActivityOrderByWithRelationInput | SystemActivityOrderByWithRelationInput[]
    cursor?: SystemActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SystemActivityScalarFieldEnum | SystemActivityScalarFieldEnum[]
  }

  /**
   * SystemParameter without action
   */
  export type SystemParameterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterInclude<ExtArgs> | null
  }


  /**
   * Model SystemParameterLog
   */

  export type AggregateSystemParameterLog = {
    _count: SystemParameterLogCountAggregateOutputType | null
    _avg: SystemParameterLogAvgAggregateOutputType | null
    _sum: SystemParameterLogSumAggregateOutputType | null
    _min: SystemParameterLogMinAggregateOutputType | null
    _max: SystemParameterLogMaxAggregateOutputType | null
  }

  export type SystemParameterLogAvgAggregateOutputType = {
    id: number | null
    value: number | null
    parameterId: number | null
  }

  export type SystemParameterLogSumAggregateOutputType = {
    id: number | null
    value: number | null
    parameterId: number | null
  }

  export type SystemParameterLogMinAggregateOutputType = {
    id: number | null
    value: number | null
    loggedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    parameterId: number | null
  }

  export type SystemParameterLogMaxAggregateOutputType = {
    id: number | null
    value: number | null
    loggedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    parameterId: number | null
  }

  export type SystemParameterLogCountAggregateOutputType = {
    id: number
    value: number
    loggedAt: number
    createdAt: number
    updatedAt: number
    parameterId: number
    _all: number
  }


  export type SystemParameterLogAvgAggregateInputType = {
    id?: true
    value?: true
    parameterId?: true
  }

  export type SystemParameterLogSumAggregateInputType = {
    id?: true
    value?: true
    parameterId?: true
  }

  export type SystemParameterLogMinAggregateInputType = {
    id?: true
    value?: true
    loggedAt?: true
    createdAt?: true
    updatedAt?: true
    parameterId?: true
  }

  export type SystemParameterLogMaxAggregateInputType = {
    id?: true
    value?: true
    loggedAt?: true
    createdAt?: true
    updatedAt?: true
    parameterId?: true
  }

  export type SystemParameterLogCountAggregateInputType = {
    id?: true
    value?: true
    loggedAt?: true
    createdAt?: true
    updatedAt?: true
    parameterId?: true
    _all?: true
  }

  export type SystemParameterLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemParameterLog to aggregate.
     */
    where?: SystemParameterLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemParameterLogs to fetch.
     */
    orderBy?: SystemParameterLogOrderByWithRelationInput | SystemParameterLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemParameterLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemParameterLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemParameterLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemParameterLogs
    **/
    _count?: true | SystemParameterLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemParameterLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemParameterLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemParameterLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemParameterLogMaxAggregateInputType
  }

  export type GetSystemParameterLogAggregateType<T extends SystemParameterLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemParameterLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemParameterLog[P]>
      : GetScalarType<T[P], AggregateSystemParameterLog[P]>
  }




  export type SystemParameterLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemParameterLogWhereInput
    orderBy?: SystemParameterLogOrderByWithAggregationInput | SystemParameterLogOrderByWithAggregationInput[]
    by: SystemParameterLogScalarFieldEnum[] | SystemParameterLogScalarFieldEnum
    having?: SystemParameterLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemParameterLogCountAggregateInputType | true
    _avg?: SystemParameterLogAvgAggregateInputType
    _sum?: SystemParameterLogSumAggregateInputType
    _min?: SystemParameterLogMinAggregateInputType
    _max?: SystemParameterLogMaxAggregateInputType
  }

  export type SystemParameterLogGroupByOutputType = {
    id: number
    value: number
    loggedAt: Date
    createdAt: Date
    updatedAt: Date
    parameterId: number
    _count: SystemParameterLogCountAggregateOutputType | null
    _avg: SystemParameterLogAvgAggregateOutputType | null
    _sum: SystemParameterLogSumAggregateOutputType | null
    _min: SystemParameterLogMinAggregateOutputType | null
    _max: SystemParameterLogMaxAggregateOutputType | null
  }

  type GetSystemParameterLogGroupByPayload<T extends SystemParameterLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemParameterLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemParameterLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemParameterLogGroupByOutputType[P]>
            : GetScalarType<T[P], SystemParameterLogGroupByOutputType[P]>
        }
      >
    >


  export type SystemParameterLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    loggedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parameterId?: boolean
    parameter?: boolean | SystemParameterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["systemParameterLog"]>

  export type SystemParameterLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    loggedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parameterId?: boolean
    parameter?: boolean | SystemParameterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["systemParameterLog"]>

  export type SystemParameterLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    loggedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parameterId?: boolean
    parameter?: boolean | SystemParameterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["systemParameterLog"]>

  export type SystemParameterLogSelectScalar = {
    id?: boolean
    value?: boolean
    loggedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parameterId?: boolean
  }

  export type SystemParameterLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "loggedAt" | "createdAt" | "updatedAt" | "parameterId", ExtArgs["result"]["systemParameterLog"]>
  export type SystemParameterLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parameter?: boolean | SystemParameterDefaultArgs<ExtArgs>
  }
  export type SystemParameterLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parameter?: boolean | SystemParameterDefaultArgs<ExtArgs>
  }
  export type SystemParameterLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parameter?: boolean | SystemParameterDefaultArgs<ExtArgs>
  }

  export type $SystemParameterLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemParameterLog"
    objects: {
      parameter: Prisma.$SystemParameterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      value: number
      loggedAt: Date
      createdAt: Date
      updatedAt: Date
      parameterId: number
    }, ExtArgs["result"]["systemParameterLog"]>
    composites: {}
  }

  type SystemParameterLogGetPayload<S extends boolean | null | undefined | SystemParameterLogDefaultArgs> = $Result.GetResult<Prisma.$SystemParameterLogPayload, S>

  type SystemParameterLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemParameterLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemParameterLogCountAggregateInputType | true
    }

  export interface SystemParameterLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemParameterLog'], meta: { name: 'SystemParameterLog' } }
    /**
     * Find zero or one SystemParameterLog that matches the filter.
     * @param {SystemParameterLogFindUniqueArgs} args - Arguments to find a SystemParameterLog
     * @example
     * // Get one SystemParameterLog
     * const systemParameterLog = await prisma.systemParameterLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemParameterLogFindUniqueArgs>(args: SelectSubset<T, SystemParameterLogFindUniqueArgs<ExtArgs>>): Prisma__SystemParameterLogClient<$Result.GetResult<Prisma.$SystemParameterLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemParameterLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemParameterLogFindUniqueOrThrowArgs} args - Arguments to find a SystemParameterLog
     * @example
     * // Get one SystemParameterLog
     * const systemParameterLog = await prisma.systemParameterLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemParameterLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemParameterLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemParameterLogClient<$Result.GetResult<Prisma.$SystemParameterLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemParameterLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemParameterLogFindFirstArgs} args - Arguments to find a SystemParameterLog
     * @example
     * // Get one SystemParameterLog
     * const systemParameterLog = await prisma.systemParameterLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemParameterLogFindFirstArgs>(args?: SelectSubset<T, SystemParameterLogFindFirstArgs<ExtArgs>>): Prisma__SystemParameterLogClient<$Result.GetResult<Prisma.$SystemParameterLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemParameterLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemParameterLogFindFirstOrThrowArgs} args - Arguments to find a SystemParameterLog
     * @example
     * // Get one SystemParameterLog
     * const systemParameterLog = await prisma.systemParameterLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemParameterLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemParameterLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemParameterLogClient<$Result.GetResult<Prisma.$SystemParameterLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemParameterLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemParameterLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemParameterLogs
     * const systemParameterLogs = await prisma.systemParameterLog.findMany()
     * 
     * // Get first 10 SystemParameterLogs
     * const systemParameterLogs = await prisma.systemParameterLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemParameterLogWithIdOnly = await prisma.systemParameterLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemParameterLogFindManyArgs>(args?: SelectSubset<T, SystemParameterLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemParameterLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemParameterLog.
     * @param {SystemParameterLogCreateArgs} args - Arguments to create a SystemParameterLog.
     * @example
     * // Create one SystemParameterLog
     * const SystemParameterLog = await prisma.systemParameterLog.create({
     *   data: {
     *     // ... data to create a SystemParameterLog
     *   }
     * })
     * 
     */
    create<T extends SystemParameterLogCreateArgs>(args: SelectSubset<T, SystemParameterLogCreateArgs<ExtArgs>>): Prisma__SystemParameterLogClient<$Result.GetResult<Prisma.$SystemParameterLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemParameterLogs.
     * @param {SystemParameterLogCreateManyArgs} args - Arguments to create many SystemParameterLogs.
     * @example
     * // Create many SystemParameterLogs
     * const systemParameterLog = await prisma.systemParameterLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemParameterLogCreateManyArgs>(args?: SelectSubset<T, SystemParameterLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemParameterLogs and returns the data saved in the database.
     * @param {SystemParameterLogCreateManyAndReturnArgs} args - Arguments to create many SystemParameterLogs.
     * @example
     * // Create many SystemParameterLogs
     * const systemParameterLog = await prisma.systemParameterLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemParameterLogs and only return the `id`
     * const systemParameterLogWithIdOnly = await prisma.systemParameterLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemParameterLogCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemParameterLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemParameterLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemParameterLog.
     * @param {SystemParameterLogDeleteArgs} args - Arguments to delete one SystemParameterLog.
     * @example
     * // Delete one SystemParameterLog
     * const SystemParameterLog = await prisma.systemParameterLog.delete({
     *   where: {
     *     // ... filter to delete one SystemParameterLog
     *   }
     * })
     * 
     */
    delete<T extends SystemParameterLogDeleteArgs>(args: SelectSubset<T, SystemParameterLogDeleteArgs<ExtArgs>>): Prisma__SystemParameterLogClient<$Result.GetResult<Prisma.$SystemParameterLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemParameterLog.
     * @param {SystemParameterLogUpdateArgs} args - Arguments to update one SystemParameterLog.
     * @example
     * // Update one SystemParameterLog
     * const systemParameterLog = await prisma.systemParameterLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemParameterLogUpdateArgs>(args: SelectSubset<T, SystemParameterLogUpdateArgs<ExtArgs>>): Prisma__SystemParameterLogClient<$Result.GetResult<Prisma.$SystemParameterLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemParameterLogs.
     * @param {SystemParameterLogDeleteManyArgs} args - Arguments to filter SystemParameterLogs to delete.
     * @example
     * // Delete a few SystemParameterLogs
     * const { count } = await prisma.systemParameterLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemParameterLogDeleteManyArgs>(args?: SelectSubset<T, SystemParameterLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemParameterLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemParameterLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemParameterLogs
     * const systemParameterLog = await prisma.systemParameterLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemParameterLogUpdateManyArgs>(args: SelectSubset<T, SystemParameterLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemParameterLogs and returns the data updated in the database.
     * @param {SystemParameterLogUpdateManyAndReturnArgs} args - Arguments to update many SystemParameterLogs.
     * @example
     * // Update many SystemParameterLogs
     * const systemParameterLog = await prisma.systemParameterLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemParameterLogs and only return the `id`
     * const systemParameterLogWithIdOnly = await prisma.systemParameterLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SystemParameterLogUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemParameterLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemParameterLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemParameterLog.
     * @param {SystemParameterLogUpsertArgs} args - Arguments to update or create a SystemParameterLog.
     * @example
     * // Update or create a SystemParameterLog
     * const systemParameterLog = await prisma.systemParameterLog.upsert({
     *   create: {
     *     // ... data to create a SystemParameterLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemParameterLog we want to update
     *   }
     * })
     */
    upsert<T extends SystemParameterLogUpsertArgs>(args: SelectSubset<T, SystemParameterLogUpsertArgs<ExtArgs>>): Prisma__SystemParameterLogClient<$Result.GetResult<Prisma.$SystemParameterLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemParameterLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemParameterLogCountArgs} args - Arguments to filter SystemParameterLogs to count.
     * @example
     * // Count the number of SystemParameterLogs
     * const count = await prisma.systemParameterLog.count({
     *   where: {
     *     // ... the filter for the SystemParameterLogs we want to count
     *   }
     * })
    **/
    count<T extends SystemParameterLogCountArgs>(
      args?: Subset<T, SystemParameterLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemParameterLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemParameterLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemParameterLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemParameterLogAggregateArgs>(args: Subset<T, SystemParameterLogAggregateArgs>): Prisma.PrismaPromise<GetSystemParameterLogAggregateType<T>>

    /**
     * Group by SystemParameterLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemParameterLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemParameterLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemParameterLogGroupByArgs['orderBy'] }
        : { orderBy?: SystemParameterLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemParameterLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemParameterLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemParameterLog model
   */
  readonly fields: SystemParameterLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemParameterLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemParameterLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parameter<T extends SystemParameterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SystemParameterDefaultArgs<ExtArgs>>): Prisma__SystemParameterClient<$Result.GetResult<Prisma.$SystemParameterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemParameterLog model
   */
  interface SystemParameterLogFieldRefs {
    readonly id: FieldRef<"SystemParameterLog", 'Int'>
    readonly value: FieldRef<"SystemParameterLog", 'Float'>
    readonly loggedAt: FieldRef<"SystemParameterLog", 'DateTime'>
    readonly createdAt: FieldRef<"SystemParameterLog", 'DateTime'>
    readonly updatedAt: FieldRef<"SystemParameterLog", 'DateTime'>
    readonly parameterId: FieldRef<"SystemParameterLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SystemParameterLog findUnique
   */
  export type SystemParameterLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameterLog
     */
    select?: SystemParameterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameterLog
     */
    omit?: SystemParameterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterLogInclude<ExtArgs> | null
    /**
     * Filter, which SystemParameterLog to fetch.
     */
    where: SystemParameterLogWhereUniqueInput
  }

  /**
   * SystemParameterLog findUniqueOrThrow
   */
  export type SystemParameterLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameterLog
     */
    select?: SystemParameterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameterLog
     */
    omit?: SystemParameterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterLogInclude<ExtArgs> | null
    /**
     * Filter, which SystemParameterLog to fetch.
     */
    where: SystemParameterLogWhereUniqueInput
  }

  /**
   * SystemParameterLog findFirst
   */
  export type SystemParameterLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameterLog
     */
    select?: SystemParameterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameterLog
     */
    omit?: SystemParameterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterLogInclude<ExtArgs> | null
    /**
     * Filter, which SystemParameterLog to fetch.
     */
    where?: SystemParameterLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemParameterLogs to fetch.
     */
    orderBy?: SystemParameterLogOrderByWithRelationInput | SystemParameterLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemParameterLogs.
     */
    cursor?: SystemParameterLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemParameterLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemParameterLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemParameterLogs.
     */
    distinct?: SystemParameterLogScalarFieldEnum | SystemParameterLogScalarFieldEnum[]
  }

  /**
   * SystemParameterLog findFirstOrThrow
   */
  export type SystemParameterLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameterLog
     */
    select?: SystemParameterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameterLog
     */
    omit?: SystemParameterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterLogInclude<ExtArgs> | null
    /**
     * Filter, which SystemParameterLog to fetch.
     */
    where?: SystemParameterLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemParameterLogs to fetch.
     */
    orderBy?: SystemParameterLogOrderByWithRelationInput | SystemParameterLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemParameterLogs.
     */
    cursor?: SystemParameterLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemParameterLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemParameterLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemParameterLogs.
     */
    distinct?: SystemParameterLogScalarFieldEnum | SystemParameterLogScalarFieldEnum[]
  }

  /**
   * SystemParameterLog findMany
   */
  export type SystemParameterLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameterLog
     */
    select?: SystemParameterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameterLog
     */
    omit?: SystemParameterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterLogInclude<ExtArgs> | null
    /**
     * Filter, which SystemParameterLogs to fetch.
     */
    where?: SystemParameterLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemParameterLogs to fetch.
     */
    orderBy?: SystemParameterLogOrderByWithRelationInput | SystemParameterLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemParameterLogs.
     */
    cursor?: SystemParameterLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemParameterLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemParameterLogs.
     */
    skip?: number
    distinct?: SystemParameterLogScalarFieldEnum | SystemParameterLogScalarFieldEnum[]
  }

  /**
   * SystemParameterLog create
   */
  export type SystemParameterLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameterLog
     */
    select?: SystemParameterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameterLog
     */
    omit?: SystemParameterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterLogInclude<ExtArgs> | null
    /**
     * The data needed to create a SystemParameterLog.
     */
    data: XOR<SystemParameterLogCreateInput, SystemParameterLogUncheckedCreateInput>
  }

  /**
   * SystemParameterLog createMany
   */
  export type SystemParameterLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemParameterLogs.
     */
    data: SystemParameterLogCreateManyInput | SystemParameterLogCreateManyInput[]
  }

  /**
   * SystemParameterLog createManyAndReturn
   */
  export type SystemParameterLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameterLog
     */
    select?: SystemParameterLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameterLog
     */
    omit?: SystemParameterLogOmit<ExtArgs> | null
    /**
     * The data used to create many SystemParameterLogs.
     */
    data: SystemParameterLogCreateManyInput | SystemParameterLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SystemParameterLog update
   */
  export type SystemParameterLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameterLog
     */
    select?: SystemParameterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameterLog
     */
    omit?: SystemParameterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterLogInclude<ExtArgs> | null
    /**
     * The data needed to update a SystemParameterLog.
     */
    data: XOR<SystemParameterLogUpdateInput, SystemParameterLogUncheckedUpdateInput>
    /**
     * Choose, which SystemParameterLog to update.
     */
    where: SystemParameterLogWhereUniqueInput
  }

  /**
   * SystemParameterLog updateMany
   */
  export type SystemParameterLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemParameterLogs.
     */
    data: XOR<SystemParameterLogUpdateManyMutationInput, SystemParameterLogUncheckedUpdateManyInput>
    /**
     * Filter which SystemParameterLogs to update
     */
    where?: SystemParameterLogWhereInput
    /**
     * Limit how many SystemParameterLogs to update.
     */
    limit?: number
  }

  /**
   * SystemParameterLog updateManyAndReturn
   */
  export type SystemParameterLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameterLog
     */
    select?: SystemParameterLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameterLog
     */
    omit?: SystemParameterLogOmit<ExtArgs> | null
    /**
     * The data used to update SystemParameterLogs.
     */
    data: XOR<SystemParameterLogUpdateManyMutationInput, SystemParameterLogUncheckedUpdateManyInput>
    /**
     * Filter which SystemParameterLogs to update
     */
    where?: SystemParameterLogWhereInput
    /**
     * Limit how many SystemParameterLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SystemParameterLog upsert
   */
  export type SystemParameterLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameterLog
     */
    select?: SystemParameterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameterLog
     */
    omit?: SystemParameterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterLogInclude<ExtArgs> | null
    /**
     * The filter to search for the SystemParameterLog to update in case it exists.
     */
    where: SystemParameterLogWhereUniqueInput
    /**
     * In case the SystemParameterLog found by the `where` argument doesn't exist, create a new SystemParameterLog with this data.
     */
    create: XOR<SystemParameterLogCreateInput, SystemParameterLogUncheckedCreateInput>
    /**
     * In case the SystemParameterLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemParameterLogUpdateInput, SystemParameterLogUncheckedUpdateInput>
  }

  /**
   * SystemParameterLog delete
   */
  export type SystemParameterLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameterLog
     */
    select?: SystemParameterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameterLog
     */
    omit?: SystemParameterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterLogInclude<ExtArgs> | null
    /**
     * Filter which SystemParameterLog to delete.
     */
    where: SystemParameterLogWhereUniqueInput
  }

  /**
   * SystemParameterLog deleteMany
   */
  export type SystemParameterLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemParameterLogs to delete
     */
    where?: SystemParameterLogWhereInput
    /**
     * Limit how many SystemParameterLogs to delete.
     */
    limit?: number
  }

  /**
   * SystemParameterLog without action
   */
  export type SystemParameterLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameterLog
     */
    select?: SystemParameterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameterLog
     */
    omit?: SystemParameterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterLogInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    refresh_token_expires_in: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "refresh_token_expires_in", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      refresh_token_expires_in: number | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly refresh_token_expires_in: FieldRef<"Account", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    systems?: boolean | User$systemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    systems?: boolean | User$systemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      systems: Prisma.$SystemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    systems<T extends User$systemsArgs<ExtArgs> = {}>(args?: Subset<T, User$systemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.systems
   */
  export type User$systemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System
     */
    select?: SystemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System
     */
    omit?: SystemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemInclude<ExtArgs> | null
    where?: SystemWhereInput
    orderBy?: SystemOrderByWithRelationInput | SystemOrderByWithRelationInput[]
    cursor?: SystemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SystemScalarFieldEnum | SystemScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SystemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type SystemScalarFieldEnum = (typeof SystemScalarFieldEnum)[keyof typeof SystemScalarFieldEnum]


  export const FilterMediaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    addedAt: 'addedAt',
    lastReplacedAt: 'lastReplacedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    systemId: 'systemId'
  };

  export type FilterMediaScalarFieldEnum = (typeof FilterMediaScalarFieldEnum)[keyof typeof FilterMediaScalarFieldEnum]


  export const SystemActivityScalarFieldEnum: {
    id: 'id',
    type: 'type',
    createdAt: 'createdAt',
    loggedAt: 'loggedAt',
    value: 'value',
    note: 'note',
    unit: 'unit',
    product: 'product',
    systemId: 'systemId',
    parameterId: 'parameterId'
  };

  export type SystemActivityScalarFieldEnum = (typeof SystemActivityScalarFieldEnum)[keyof typeof SystemActivityScalarFieldEnum]


  export const SystemParameterScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    abbreviatedName: 'abbreviatedName',
    unit: 'unit',
    displayDecimals: 'displayDecimals',
    lowerBound: 'lowerBound',
    upperBound: 'upperBound',
    displayOrder: 'displayOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    systemId: 'systemId'
  };

  export type SystemParameterScalarFieldEnum = (typeof SystemParameterScalarFieldEnum)[keyof typeof SystemParameterScalarFieldEnum]


  export const SystemParameterLogScalarFieldEnum: {
    id: 'id',
    value: 'value',
    loggedAt: 'loggedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    parameterId: 'parameterId'
  };

  export type SystemParameterLogScalarFieldEnum = (typeof SystemParameterLogScalarFieldEnum)[keyof typeof SystemParameterLogScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    refresh_token_expires_in: 'refresh_token_expires_in'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'SystemActivityType'
   */
  export type EnumSystemActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SystemActivityType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type SystemWhereInput = {
    AND?: SystemWhereInput | SystemWhereInput[]
    OR?: SystemWhereInput[]
    NOT?: SystemWhereInput | SystemWhereInput[]
    id?: StringFilter<"System"> | string
    name?: StringFilter<"System"> | string
    createdAt?: DateTimeFilter<"System"> | Date | string
    updatedAt?: DateTimeFilter<"System"> | Date | string
    createdById?: StringFilter<"System"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    parameters?: SystemParameterListRelationFilter
    activities?: SystemActivityListRelationFilter
    filterMedia?: FilterMediaListRelationFilter
  }

  export type SystemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    parameters?: SystemParameterOrderByRelationAggregateInput
    activities?: SystemActivityOrderByRelationAggregateInput
    filterMedia?: FilterMediaOrderByRelationAggregateInput
  }

  export type SystemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SystemWhereInput | SystemWhereInput[]
    OR?: SystemWhereInput[]
    NOT?: SystemWhereInput | SystemWhereInput[]
    name?: StringFilter<"System"> | string
    createdAt?: DateTimeFilter<"System"> | Date | string
    updatedAt?: DateTimeFilter<"System"> | Date | string
    createdById?: StringFilter<"System"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    parameters?: SystemParameterListRelationFilter
    activities?: SystemActivityListRelationFilter
    filterMedia?: FilterMediaListRelationFilter
  }, "id">

  export type SystemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: SystemCountOrderByAggregateInput
    _max?: SystemMaxOrderByAggregateInput
    _min?: SystemMinOrderByAggregateInput
  }

  export type SystemScalarWhereWithAggregatesInput = {
    AND?: SystemScalarWhereWithAggregatesInput | SystemScalarWhereWithAggregatesInput[]
    OR?: SystemScalarWhereWithAggregatesInput[]
    NOT?: SystemScalarWhereWithAggregatesInput | SystemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"System"> | string
    name?: StringWithAggregatesFilter<"System"> | string
    createdAt?: DateTimeWithAggregatesFilter<"System"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"System"> | Date | string
    createdById?: StringWithAggregatesFilter<"System"> | string
  }

  export type FilterMediaWhereInput = {
    AND?: FilterMediaWhereInput | FilterMediaWhereInput[]
    OR?: FilterMediaWhereInput[]
    NOT?: FilterMediaWhereInput | FilterMediaWhereInput[]
    id?: IntFilter<"FilterMedia"> | number
    name?: StringFilter<"FilterMedia"> | string
    addedAt?: DateTimeFilter<"FilterMedia"> | Date | string
    lastReplacedAt?: DateTimeNullableFilter<"FilterMedia"> | Date | string | null
    createdAt?: DateTimeFilter<"FilterMedia"> | Date | string
    updatedAt?: DateTimeFilter<"FilterMedia"> | Date | string
    systemId?: StringFilter<"FilterMedia"> | string
    system?: XOR<SystemScalarRelationFilter, SystemWhereInput>
  }

  export type FilterMediaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    addedAt?: SortOrder
    lastReplacedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    systemId?: SortOrder
    system?: SystemOrderByWithRelationInput
  }

  export type FilterMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FilterMediaWhereInput | FilterMediaWhereInput[]
    OR?: FilterMediaWhereInput[]
    NOT?: FilterMediaWhereInput | FilterMediaWhereInput[]
    name?: StringFilter<"FilterMedia"> | string
    addedAt?: DateTimeFilter<"FilterMedia"> | Date | string
    lastReplacedAt?: DateTimeNullableFilter<"FilterMedia"> | Date | string | null
    createdAt?: DateTimeFilter<"FilterMedia"> | Date | string
    updatedAt?: DateTimeFilter<"FilterMedia"> | Date | string
    systemId?: StringFilter<"FilterMedia"> | string
    system?: XOR<SystemScalarRelationFilter, SystemWhereInput>
  }, "id">

  export type FilterMediaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    addedAt?: SortOrder
    lastReplacedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    systemId?: SortOrder
    _count?: FilterMediaCountOrderByAggregateInput
    _avg?: FilterMediaAvgOrderByAggregateInput
    _max?: FilterMediaMaxOrderByAggregateInput
    _min?: FilterMediaMinOrderByAggregateInput
    _sum?: FilterMediaSumOrderByAggregateInput
  }

  export type FilterMediaScalarWhereWithAggregatesInput = {
    AND?: FilterMediaScalarWhereWithAggregatesInput | FilterMediaScalarWhereWithAggregatesInput[]
    OR?: FilterMediaScalarWhereWithAggregatesInput[]
    NOT?: FilterMediaScalarWhereWithAggregatesInput | FilterMediaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FilterMedia"> | number
    name?: StringWithAggregatesFilter<"FilterMedia"> | string
    addedAt?: DateTimeWithAggregatesFilter<"FilterMedia"> | Date | string
    lastReplacedAt?: DateTimeNullableWithAggregatesFilter<"FilterMedia"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FilterMedia"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FilterMedia"> | Date | string
    systemId?: StringWithAggregatesFilter<"FilterMedia"> | string
  }

  export type SystemActivityWhereInput = {
    AND?: SystemActivityWhereInput | SystemActivityWhereInput[]
    OR?: SystemActivityWhereInput[]
    NOT?: SystemActivityWhereInput | SystemActivityWhereInput[]
    id?: IntFilter<"SystemActivity"> | number
    type?: EnumSystemActivityTypeFilter<"SystemActivity"> | $Enums.SystemActivityType
    createdAt?: DateTimeFilter<"SystemActivity"> | Date | string
    loggedAt?: DateTimeNullableFilter<"SystemActivity"> | Date | string | null
    value?: FloatNullableFilter<"SystemActivity"> | number | null
    note?: StringNullableFilter<"SystemActivity"> | string | null
    unit?: StringNullableFilter<"SystemActivity"> | string | null
    product?: StringNullableFilter<"SystemActivity"> | string | null
    systemId?: StringFilter<"SystemActivity"> | string
    parameterId?: IntNullableFilter<"SystemActivity"> | number | null
    system?: XOR<SystemScalarRelationFilter, SystemWhereInput>
    parameter?: XOR<SystemParameterNullableScalarRelationFilter, SystemParameterWhereInput> | null
  }

  export type SystemActivityOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    loggedAt?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    product?: SortOrderInput | SortOrder
    systemId?: SortOrder
    parameterId?: SortOrderInput | SortOrder
    system?: SystemOrderByWithRelationInput
    parameter?: SystemParameterOrderByWithRelationInput
  }

  export type SystemActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SystemActivityWhereInput | SystemActivityWhereInput[]
    OR?: SystemActivityWhereInput[]
    NOT?: SystemActivityWhereInput | SystemActivityWhereInput[]
    type?: EnumSystemActivityTypeFilter<"SystemActivity"> | $Enums.SystemActivityType
    createdAt?: DateTimeFilter<"SystemActivity"> | Date | string
    loggedAt?: DateTimeNullableFilter<"SystemActivity"> | Date | string | null
    value?: FloatNullableFilter<"SystemActivity"> | number | null
    note?: StringNullableFilter<"SystemActivity"> | string | null
    unit?: StringNullableFilter<"SystemActivity"> | string | null
    product?: StringNullableFilter<"SystemActivity"> | string | null
    systemId?: StringFilter<"SystemActivity"> | string
    parameterId?: IntNullableFilter<"SystemActivity"> | number | null
    system?: XOR<SystemScalarRelationFilter, SystemWhereInput>
    parameter?: XOR<SystemParameterNullableScalarRelationFilter, SystemParameterWhereInput> | null
  }, "id">

  export type SystemActivityOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    loggedAt?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    product?: SortOrderInput | SortOrder
    systemId?: SortOrder
    parameterId?: SortOrderInput | SortOrder
    _count?: SystemActivityCountOrderByAggregateInput
    _avg?: SystemActivityAvgOrderByAggregateInput
    _max?: SystemActivityMaxOrderByAggregateInput
    _min?: SystemActivityMinOrderByAggregateInput
    _sum?: SystemActivitySumOrderByAggregateInput
  }

  export type SystemActivityScalarWhereWithAggregatesInput = {
    AND?: SystemActivityScalarWhereWithAggregatesInput | SystemActivityScalarWhereWithAggregatesInput[]
    OR?: SystemActivityScalarWhereWithAggregatesInput[]
    NOT?: SystemActivityScalarWhereWithAggregatesInput | SystemActivityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SystemActivity"> | number
    type?: EnumSystemActivityTypeWithAggregatesFilter<"SystemActivity"> | $Enums.SystemActivityType
    createdAt?: DateTimeWithAggregatesFilter<"SystemActivity"> | Date | string
    loggedAt?: DateTimeNullableWithAggregatesFilter<"SystemActivity"> | Date | string | null
    value?: FloatNullableWithAggregatesFilter<"SystemActivity"> | number | null
    note?: StringNullableWithAggregatesFilter<"SystemActivity"> | string | null
    unit?: StringNullableWithAggregatesFilter<"SystemActivity"> | string | null
    product?: StringNullableWithAggregatesFilter<"SystemActivity"> | string | null
    systemId?: StringWithAggregatesFilter<"SystemActivity"> | string
    parameterId?: IntNullableWithAggregatesFilter<"SystemActivity"> | number | null
  }

  export type SystemParameterWhereInput = {
    AND?: SystemParameterWhereInput | SystemParameterWhereInput[]
    OR?: SystemParameterWhereInput[]
    NOT?: SystemParameterWhereInput | SystemParameterWhereInput[]
    id?: IntFilter<"SystemParameter"> | number
    fullName?: StringFilter<"SystemParameter"> | string
    abbreviatedName?: StringFilter<"SystemParameter"> | string
    unit?: StringFilter<"SystemParameter"> | string
    displayDecimals?: IntFilter<"SystemParameter"> | number
    lowerBound?: FloatFilter<"SystemParameter"> | number
    upperBound?: FloatFilter<"SystemParameter"> | number
    displayOrder?: IntFilter<"SystemParameter"> | number
    createdAt?: DateTimeFilter<"SystemParameter"> | Date | string
    updatedAt?: DateTimeFilter<"SystemParameter"> | Date | string
    systemId?: StringFilter<"SystemParameter"> | string
    system?: XOR<SystemScalarRelationFilter, SystemWhereInput>
    logs?: SystemParameterLogListRelationFilter
    systemActivities?: SystemActivityListRelationFilter
  }

  export type SystemParameterOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    abbreviatedName?: SortOrder
    unit?: SortOrder
    displayDecimals?: SortOrder
    lowerBound?: SortOrder
    upperBound?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    systemId?: SortOrder
    system?: SystemOrderByWithRelationInput
    logs?: SystemParameterLogOrderByRelationAggregateInput
    systemActivities?: SystemActivityOrderByRelationAggregateInput
  }

  export type SystemParameterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    systemId_abbreviatedName?: SystemParameterSystemIdAbbreviatedNameCompoundUniqueInput
    AND?: SystemParameterWhereInput | SystemParameterWhereInput[]
    OR?: SystemParameterWhereInput[]
    NOT?: SystemParameterWhereInput | SystemParameterWhereInput[]
    fullName?: StringFilter<"SystemParameter"> | string
    abbreviatedName?: StringFilter<"SystemParameter"> | string
    unit?: StringFilter<"SystemParameter"> | string
    displayDecimals?: IntFilter<"SystemParameter"> | number
    lowerBound?: FloatFilter<"SystemParameter"> | number
    upperBound?: FloatFilter<"SystemParameter"> | number
    displayOrder?: IntFilter<"SystemParameter"> | number
    createdAt?: DateTimeFilter<"SystemParameter"> | Date | string
    updatedAt?: DateTimeFilter<"SystemParameter"> | Date | string
    systemId?: StringFilter<"SystemParameter"> | string
    system?: XOR<SystemScalarRelationFilter, SystemWhereInput>
    logs?: SystemParameterLogListRelationFilter
    systemActivities?: SystemActivityListRelationFilter
  }, "id" | "systemId_abbreviatedName">

  export type SystemParameterOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    abbreviatedName?: SortOrder
    unit?: SortOrder
    displayDecimals?: SortOrder
    lowerBound?: SortOrder
    upperBound?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    systemId?: SortOrder
    _count?: SystemParameterCountOrderByAggregateInput
    _avg?: SystemParameterAvgOrderByAggregateInput
    _max?: SystemParameterMaxOrderByAggregateInput
    _min?: SystemParameterMinOrderByAggregateInput
    _sum?: SystemParameterSumOrderByAggregateInput
  }

  export type SystemParameterScalarWhereWithAggregatesInput = {
    AND?: SystemParameterScalarWhereWithAggregatesInput | SystemParameterScalarWhereWithAggregatesInput[]
    OR?: SystemParameterScalarWhereWithAggregatesInput[]
    NOT?: SystemParameterScalarWhereWithAggregatesInput | SystemParameterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SystemParameter"> | number
    fullName?: StringWithAggregatesFilter<"SystemParameter"> | string
    abbreviatedName?: StringWithAggregatesFilter<"SystemParameter"> | string
    unit?: StringWithAggregatesFilter<"SystemParameter"> | string
    displayDecimals?: IntWithAggregatesFilter<"SystemParameter"> | number
    lowerBound?: FloatWithAggregatesFilter<"SystemParameter"> | number
    upperBound?: FloatWithAggregatesFilter<"SystemParameter"> | number
    displayOrder?: IntWithAggregatesFilter<"SystemParameter"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SystemParameter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SystemParameter"> | Date | string
    systemId?: StringWithAggregatesFilter<"SystemParameter"> | string
  }

  export type SystemParameterLogWhereInput = {
    AND?: SystemParameterLogWhereInput | SystemParameterLogWhereInput[]
    OR?: SystemParameterLogWhereInput[]
    NOT?: SystemParameterLogWhereInput | SystemParameterLogWhereInput[]
    id?: IntFilter<"SystemParameterLog"> | number
    value?: FloatFilter<"SystemParameterLog"> | number
    loggedAt?: DateTimeFilter<"SystemParameterLog"> | Date | string
    createdAt?: DateTimeFilter<"SystemParameterLog"> | Date | string
    updatedAt?: DateTimeFilter<"SystemParameterLog"> | Date | string
    parameterId?: IntFilter<"SystemParameterLog"> | number
    parameter?: XOR<SystemParameterScalarRelationFilter, SystemParameterWhereInput>
  }

  export type SystemParameterLogOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    loggedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parameterId?: SortOrder
    parameter?: SystemParameterOrderByWithRelationInput
  }

  export type SystemParameterLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SystemParameterLogWhereInput | SystemParameterLogWhereInput[]
    OR?: SystemParameterLogWhereInput[]
    NOT?: SystemParameterLogWhereInput | SystemParameterLogWhereInput[]
    value?: FloatFilter<"SystemParameterLog"> | number
    loggedAt?: DateTimeFilter<"SystemParameterLog"> | Date | string
    createdAt?: DateTimeFilter<"SystemParameterLog"> | Date | string
    updatedAt?: DateTimeFilter<"SystemParameterLog"> | Date | string
    parameterId?: IntFilter<"SystemParameterLog"> | number
    parameter?: XOR<SystemParameterScalarRelationFilter, SystemParameterWhereInput>
  }, "id">

  export type SystemParameterLogOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    loggedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parameterId?: SortOrder
    _count?: SystemParameterLogCountOrderByAggregateInput
    _avg?: SystemParameterLogAvgOrderByAggregateInput
    _max?: SystemParameterLogMaxOrderByAggregateInput
    _min?: SystemParameterLogMinOrderByAggregateInput
    _sum?: SystemParameterLogSumOrderByAggregateInput
  }

  export type SystemParameterLogScalarWhereWithAggregatesInput = {
    AND?: SystemParameterLogScalarWhereWithAggregatesInput | SystemParameterLogScalarWhereWithAggregatesInput[]
    OR?: SystemParameterLogScalarWhereWithAggregatesInput[]
    NOT?: SystemParameterLogScalarWhereWithAggregatesInput | SystemParameterLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SystemParameterLog"> | number
    value?: FloatWithAggregatesFilter<"SystemParameterLog"> | number
    loggedAt?: DateTimeWithAggregatesFilter<"SystemParameterLog"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"SystemParameterLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SystemParameterLog"> | Date | string
    parameterId?: IntWithAggregatesFilter<"SystemParameterLog"> | number
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableWithAggregatesFilter<"Account"> | number | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    systems?: SystemListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    systems?: SystemOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    systems?: SystemListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type SystemCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutSystemsInput
    parameters?: SystemParameterCreateNestedManyWithoutSystemInput
    activities?: SystemActivityCreateNestedManyWithoutSystemInput
    filterMedia?: FilterMediaCreateNestedManyWithoutSystemInput
  }

  export type SystemUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    parameters?: SystemParameterUncheckedCreateNestedManyWithoutSystemInput
    activities?: SystemActivityUncheckedCreateNestedManyWithoutSystemInput
    filterMedia?: FilterMediaUncheckedCreateNestedManyWithoutSystemInput
  }

  export type SystemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutSystemsNestedInput
    parameters?: SystemParameterUpdateManyWithoutSystemNestedInput
    activities?: SystemActivityUpdateManyWithoutSystemNestedInput
    filterMedia?: FilterMediaUpdateManyWithoutSystemNestedInput
  }

  export type SystemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    parameters?: SystemParameterUncheckedUpdateManyWithoutSystemNestedInput
    activities?: SystemActivityUncheckedUpdateManyWithoutSystemNestedInput
    filterMedia?: FilterMediaUncheckedUpdateManyWithoutSystemNestedInput
  }

  export type SystemCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type SystemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type FilterMediaCreateInput = {
    name: string
    addedAt: Date | string
    lastReplacedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    system: SystemCreateNestedOneWithoutFilterMediaInput
  }

  export type FilterMediaUncheckedCreateInput = {
    id?: number
    name: string
    addedAt: Date | string
    lastReplacedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    systemId: string
  }

  export type FilterMediaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastReplacedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    system?: SystemUpdateOneRequiredWithoutFilterMediaNestedInput
  }

  export type FilterMediaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastReplacedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    systemId?: StringFieldUpdateOperationsInput | string
  }

  export type FilterMediaCreateManyInput = {
    id?: number
    name: string
    addedAt: Date | string
    lastReplacedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    systemId: string
  }

  export type FilterMediaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastReplacedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilterMediaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastReplacedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    systemId?: StringFieldUpdateOperationsInput | string
  }

  export type SystemActivityCreateInput = {
    type: $Enums.SystemActivityType
    createdAt?: Date | string
    loggedAt?: Date | string | null
    value?: number | null
    note?: string | null
    unit?: string | null
    product?: string | null
    system: SystemCreateNestedOneWithoutActivitiesInput
    parameter?: SystemParameterCreateNestedOneWithoutSystemActivitiesInput
  }

  export type SystemActivityUncheckedCreateInput = {
    id?: number
    type: $Enums.SystemActivityType
    createdAt?: Date | string
    loggedAt?: Date | string | null
    value?: number | null
    note?: string | null
    unit?: string | null
    product?: string | null
    systemId: string
    parameterId?: number | null
  }

  export type SystemActivityUpdateInput = {
    type?: EnumSystemActivityTypeFieldUpdateOperationsInput | $Enums.SystemActivityType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    product?: NullableStringFieldUpdateOperationsInput | string | null
    system?: SystemUpdateOneRequiredWithoutActivitiesNestedInput
    parameter?: SystemParameterUpdateOneWithoutSystemActivitiesNestedInput
  }

  export type SystemActivityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumSystemActivityTypeFieldUpdateOperationsInput | $Enums.SystemActivityType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    product?: NullableStringFieldUpdateOperationsInput | string | null
    systemId?: StringFieldUpdateOperationsInput | string
    parameterId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SystemActivityCreateManyInput = {
    id?: number
    type: $Enums.SystemActivityType
    createdAt?: Date | string
    loggedAt?: Date | string | null
    value?: number | null
    note?: string | null
    unit?: string | null
    product?: string | null
    systemId: string
    parameterId?: number | null
  }

  export type SystemActivityUpdateManyMutationInput = {
    type?: EnumSystemActivityTypeFieldUpdateOperationsInput | $Enums.SystemActivityType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    product?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SystemActivityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumSystemActivityTypeFieldUpdateOperationsInput | $Enums.SystemActivityType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    product?: NullableStringFieldUpdateOperationsInput | string | null
    systemId?: StringFieldUpdateOperationsInput | string
    parameterId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SystemParameterCreateInput = {
    fullName: string
    abbreviatedName: string
    unit: string
    displayDecimals?: number
    lowerBound: number
    upperBound: number
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    system: SystemCreateNestedOneWithoutParametersInput
    logs?: SystemParameterLogCreateNestedManyWithoutParameterInput
    systemActivities?: SystemActivityCreateNestedManyWithoutParameterInput
  }

  export type SystemParameterUncheckedCreateInput = {
    id?: number
    fullName: string
    abbreviatedName: string
    unit: string
    displayDecimals?: number
    lowerBound: number
    upperBound: number
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    systemId: string
    logs?: SystemParameterLogUncheckedCreateNestedManyWithoutParameterInput
    systemActivities?: SystemActivityUncheckedCreateNestedManyWithoutParameterInput
  }

  export type SystemParameterUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    abbreviatedName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    displayDecimals?: IntFieldUpdateOperationsInput | number
    lowerBound?: FloatFieldUpdateOperationsInput | number
    upperBound?: FloatFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    system?: SystemUpdateOneRequiredWithoutParametersNestedInput
    logs?: SystemParameterLogUpdateManyWithoutParameterNestedInput
    systemActivities?: SystemActivityUpdateManyWithoutParameterNestedInput
  }

  export type SystemParameterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    abbreviatedName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    displayDecimals?: IntFieldUpdateOperationsInput | number
    lowerBound?: FloatFieldUpdateOperationsInput | number
    upperBound?: FloatFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    systemId?: StringFieldUpdateOperationsInput | string
    logs?: SystemParameterLogUncheckedUpdateManyWithoutParameterNestedInput
    systemActivities?: SystemActivityUncheckedUpdateManyWithoutParameterNestedInput
  }

  export type SystemParameterCreateManyInput = {
    id?: number
    fullName: string
    abbreviatedName: string
    unit: string
    displayDecimals?: number
    lowerBound: number
    upperBound: number
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    systemId: string
  }

  export type SystemParameterUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    abbreviatedName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    displayDecimals?: IntFieldUpdateOperationsInput | number
    lowerBound?: FloatFieldUpdateOperationsInput | number
    upperBound?: FloatFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemParameterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    abbreviatedName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    displayDecimals?: IntFieldUpdateOperationsInput | number
    lowerBound?: FloatFieldUpdateOperationsInput | number
    upperBound?: FloatFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    systemId?: StringFieldUpdateOperationsInput | string
  }

  export type SystemParameterLogCreateInput = {
    value: number
    loggedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    parameter: SystemParameterCreateNestedOneWithoutLogsInput
  }

  export type SystemParameterLogUncheckedCreateInput = {
    id?: number
    value: number
    loggedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    parameterId: number
  }

  export type SystemParameterLogUpdateInput = {
    value?: FloatFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parameter?: SystemParameterUpdateOneRequiredWithoutLogsNestedInput
  }

  export type SystemParameterLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parameterId?: IntFieldUpdateOperationsInput | number
  }

  export type SystemParameterLogCreateManyInput = {
    id?: number
    value: number
    loggedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    parameterId: number
  }

  export type SystemParameterLogUpdateManyMutationInput = {
    value?: FloatFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemParameterLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parameterId?: IntFieldUpdateOperationsInput | number
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    systems?: SystemCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    systems?: SystemUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    systems?: SystemUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    systems?: SystemUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SystemParameterListRelationFilter = {
    every?: SystemParameterWhereInput
    some?: SystemParameterWhereInput
    none?: SystemParameterWhereInput
  }

  export type SystemActivityListRelationFilter = {
    every?: SystemActivityWhereInput
    some?: SystemActivityWhereInput
    none?: SystemActivityWhereInput
  }

  export type FilterMediaListRelationFilter = {
    every?: FilterMediaWhereInput
    some?: FilterMediaWhereInput
    none?: FilterMediaWhereInput
  }

  export type SystemParameterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SystemActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FilterMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SystemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type SystemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type SystemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SystemScalarRelationFilter = {
    is?: SystemWhereInput
    isNot?: SystemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FilterMediaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    addedAt?: SortOrder
    lastReplacedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    systemId?: SortOrder
  }

  export type FilterMediaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FilterMediaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    addedAt?: SortOrder
    lastReplacedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    systemId?: SortOrder
  }

  export type FilterMediaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    addedAt?: SortOrder
    lastReplacedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    systemId?: SortOrder
  }

  export type FilterMediaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumSystemActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemActivityType | EnumSystemActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SystemActivityType[]
    notIn?: $Enums.SystemActivityType[]
    not?: NestedEnumSystemActivityTypeFilter<$PrismaModel> | $Enums.SystemActivityType
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SystemParameterNullableScalarRelationFilter = {
    is?: SystemParameterWhereInput | null
    isNot?: SystemParameterWhereInput | null
  }

  export type SystemActivityCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    loggedAt?: SortOrder
    value?: SortOrder
    note?: SortOrder
    unit?: SortOrder
    product?: SortOrder
    systemId?: SortOrder
    parameterId?: SortOrder
  }

  export type SystemActivityAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    parameterId?: SortOrder
  }

  export type SystemActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    loggedAt?: SortOrder
    value?: SortOrder
    note?: SortOrder
    unit?: SortOrder
    product?: SortOrder
    systemId?: SortOrder
    parameterId?: SortOrder
  }

  export type SystemActivityMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    loggedAt?: SortOrder
    value?: SortOrder
    note?: SortOrder
    unit?: SortOrder
    product?: SortOrder
    systemId?: SortOrder
    parameterId?: SortOrder
  }

  export type SystemActivitySumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    parameterId?: SortOrder
  }

  export type EnumSystemActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemActivityType | EnumSystemActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SystemActivityType[]
    notIn?: $Enums.SystemActivityType[]
    not?: NestedEnumSystemActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.SystemActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSystemActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumSystemActivityTypeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SystemParameterLogListRelationFilter = {
    every?: SystemParameterLogWhereInput
    some?: SystemParameterLogWhereInput
    none?: SystemParameterLogWhereInput
  }

  export type SystemParameterLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SystemParameterSystemIdAbbreviatedNameCompoundUniqueInput = {
    systemId: string
    abbreviatedName: string
  }

  export type SystemParameterCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    abbreviatedName?: SortOrder
    unit?: SortOrder
    displayDecimals?: SortOrder
    lowerBound?: SortOrder
    upperBound?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    systemId?: SortOrder
  }

  export type SystemParameterAvgOrderByAggregateInput = {
    id?: SortOrder
    displayDecimals?: SortOrder
    lowerBound?: SortOrder
    upperBound?: SortOrder
    displayOrder?: SortOrder
  }

  export type SystemParameterMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    abbreviatedName?: SortOrder
    unit?: SortOrder
    displayDecimals?: SortOrder
    lowerBound?: SortOrder
    upperBound?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    systemId?: SortOrder
  }

  export type SystemParameterMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    abbreviatedName?: SortOrder
    unit?: SortOrder
    displayDecimals?: SortOrder
    lowerBound?: SortOrder
    upperBound?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    systemId?: SortOrder
  }

  export type SystemParameterSumOrderByAggregateInput = {
    id?: SortOrder
    displayDecimals?: SortOrder
    lowerBound?: SortOrder
    upperBound?: SortOrder
    displayOrder?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SystemParameterScalarRelationFilter = {
    is?: SystemParameterWhereInput
    isNot?: SystemParameterWhereInput
  }

  export type SystemParameterLogCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    loggedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parameterId?: SortOrder
  }

  export type SystemParameterLogAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    parameterId?: SortOrder
  }

  export type SystemParameterLogMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    loggedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parameterId?: SortOrder
  }

  export type SystemParameterLogMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    loggedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parameterId?: SortOrder
  }

  export type SystemParameterLogSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    parameterId?: SortOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SystemListRelationFilter = {
    every?: SystemWhereInput
    some?: SystemWhereInput
    none?: SystemWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SystemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type UserCreateNestedOneWithoutSystemsInput = {
    create?: XOR<UserCreateWithoutSystemsInput, UserUncheckedCreateWithoutSystemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSystemsInput
    connect?: UserWhereUniqueInput
  }

  export type SystemParameterCreateNestedManyWithoutSystemInput = {
    create?: XOR<SystemParameterCreateWithoutSystemInput, SystemParameterUncheckedCreateWithoutSystemInput> | SystemParameterCreateWithoutSystemInput[] | SystemParameterUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: SystemParameterCreateOrConnectWithoutSystemInput | SystemParameterCreateOrConnectWithoutSystemInput[]
    createMany?: SystemParameterCreateManySystemInputEnvelope
    connect?: SystemParameterWhereUniqueInput | SystemParameterWhereUniqueInput[]
  }

  export type SystemActivityCreateNestedManyWithoutSystemInput = {
    create?: XOR<SystemActivityCreateWithoutSystemInput, SystemActivityUncheckedCreateWithoutSystemInput> | SystemActivityCreateWithoutSystemInput[] | SystemActivityUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: SystemActivityCreateOrConnectWithoutSystemInput | SystemActivityCreateOrConnectWithoutSystemInput[]
    createMany?: SystemActivityCreateManySystemInputEnvelope
    connect?: SystemActivityWhereUniqueInput | SystemActivityWhereUniqueInput[]
  }

  export type FilterMediaCreateNestedManyWithoutSystemInput = {
    create?: XOR<FilterMediaCreateWithoutSystemInput, FilterMediaUncheckedCreateWithoutSystemInput> | FilterMediaCreateWithoutSystemInput[] | FilterMediaUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: FilterMediaCreateOrConnectWithoutSystemInput | FilterMediaCreateOrConnectWithoutSystemInput[]
    createMany?: FilterMediaCreateManySystemInputEnvelope
    connect?: FilterMediaWhereUniqueInput | FilterMediaWhereUniqueInput[]
  }

  export type SystemParameterUncheckedCreateNestedManyWithoutSystemInput = {
    create?: XOR<SystemParameterCreateWithoutSystemInput, SystemParameterUncheckedCreateWithoutSystemInput> | SystemParameterCreateWithoutSystemInput[] | SystemParameterUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: SystemParameterCreateOrConnectWithoutSystemInput | SystemParameterCreateOrConnectWithoutSystemInput[]
    createMany?: SystemParameterCreateManySystemInputEnvelope
    connect?: SystemParameterWhereUniqueInput | SystemParameterWhereUniqueInput[]
  }

  export type SystemActivityUncheckedCreateNestedManyWithoutSystemInput = {
    create?: XOR<SystemActivityCreateWithoutSystemInput, SystemActivityUncheckedCreateWithoutSystemInput> | SystemActivityCreateWithoutSystemInput[] | SystemActivityUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: SystemActivityCreateOrConnectWithoutSystemInput | SystemActivityCreateOrConnectWithoutSystemInput[]
    createMany?: SystemActivityCreateManySystemInputEnvelope
    connect?: SystemActivityWhereUniqueInput | SystemActivityWhereUniqueInput[]
  }

  export type FilterMediaUncheckedCreateNestedManyWithoutSystemInput = {
    create?: XOR<FilterMediaCreateWithoutSystemInput, FilterMediaUncheckedCreateWithoutSystemInput> | FilterMediaCreateWithoutSystemInput[] | FilterMediaUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: FilterMediaCreateOrConnectWithoutSystemInput | FilterMediaCreateOrConnectWithoutSystemInput[]
    createMany?: FilterMediaCreateManySystemInputEnvelope
    connect?: FilterMediaWhereUniqueInput | FilterMediaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSystemsNestedInput = {
    create?: XOR<UserCreateWithoutSystemsInput, UserUncheckedCreateWithoutSystemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSystemsInput
    upsert?: UserUpsertWithoutSystemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSystemsInput, UserUpdateWithoutSystemsInput>, UserUncheckedUpdateWithoutSystemsInput>
  }

  export type SystemParameterUpdateManyWithoutSystemNestedInput = {
    create?: XOR<SystemParameterCreateWithoutSystemInput, SystemParameterUncheckedCreateWithoutSystemInput> | SystemParameterCreateWithoutSystemInput[] | SystemParameterUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: SystemParameterCreateOrConnectWithoutSystemInput | SystemParameterCreateOrConnectWithoutSystemInput[]
    upsert?: SystemParameterUpsertWithWhereUniqueWithoutSystemInput | SystemParameterUpsertWithWhereUniqueWithoutSystemInput[]
    createMany?: SystemParameterCreateManySystemInputEnvelope
    set?: SystemParameterWhereUniqueInput | SystemParameterWhereUniqueInput[]
    disconnect?: SystemParameterWhereUniqueInput | SystemParameterWhereUniqueInput[]
    delete?: SystemParameterWhereUniqueInput | SystemParameterWhereUniqueInput[]
    connect?: SystemParameterWhereUniqueInput | SystemParameterWhereUniqueInput[]
    update?: SystemParameterUpdateWithWhereUniqueWithoutSystemInput | SystemParameterUpdateWithWhereUniqueWithoutSystemInput[]
    updateMany?: SystemParameterUpdateManyWithWhereWithoutSystemInput | SystemParameterUpdateManyWithWhereWithoutSystemInput[]
    deleteMany?: SystemParameterScalarWhereInput | SystemParameterScalarWhereInput[]
  }

  export type SystemActivityUpdateManyWithoutSystemNestedInput = {
    create?: XOR<SystemActivityCreateWithoutSystemInput, SystemActivityUncheckedCreateWithoutSystemInput> | SystemActivityCreateWithoutSystemInput[] | SystemActivityUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: SystemActivityCreateOrConnectWithoutSystemInput | SystemActivityCreateOrConnectWithoutSystemInput[]
    upsert?: SystemActivityUpsertWithWhereUniqueWithoutSystemInput | SystemActivityUpsertWithWhereUniqueWithoutSystemInput[]
    createMany?: SystemActivityCreateManySystemInputEnvelope
    set?: SystemActivityWhereUniqueInput | SystemActivityWhereUniqueInput[]
    disconnect?: SystemActivityWhereUniqueInput | SystemActivityWhereUniqueInput[]
    delete?: SystemActivityWhereUniqueInput | SystemActivityWhereUniqueInput[]
    connect?: SystemActivityWhereUniqueInput | SystemActivityWhereUniqueInput[]
    update?: SystemActivityUpdateWithWhereUniqueWithoutSystemInput | SystemActivityUpdateWithWhereUniqueWithoutSystemInput[]
    updateMany?: SystemActivityUpdateManyWithWhereWithoutSystemInput | SystemActivityUpdateManyWithWhereWithoutSystemInput[]
    deleteMany?: SystemActivityScalarWhereInput | SystemActivityScalarWhereInput[]
  }

  export type FilterMediaUpdateManyWithoutSystemNestedInput = {
    create?: XOR<FilterMediaCreateWithoutSystemInput, FilterMediaUncheckedCreateWithoutSystemInput> | FilterMediaCreateWithoutSystemInput[] | FilterMediaUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: FilterMediaCreateOrConnectWithoutSystemInput | FilterMediaCreateOrConnectWithoutSystemInput[]
    upsert?: FilterMediaUpsertWithWhereUniqueWithoutSystemInput | FilterMediaUpsertWithWhereUniqueWithoutSystemInput[]
    createMany?: FilterMediaCreateManySystemInputEnvelope
    set?: FilterMediaWhereUniqueInput | FilterMediaWhereUniqueInput[]
    disconnect?: FilterMediaWhereUniqueInput | FilterMediaWhereUniqueInput[]
    delete?: FilterMediaWhereUniqueInput | FilterMediaWhereUniqueInput[]
    connect?: FilterMediaWhereUniqueInput | FilterMediaWhereUniqueInput[]
    update?: FilterMediaUpdateWithWhereUniqueWithoutSystemInput | FilterMediaUpdateWithWhereUniqueWithoutSystemInput[]
    updateMany?: FilterMediaUpdateManyWithWhereWithoutSystemInput | FilterMediaUpdateManyWithWhereWithoutSystemInput[]
    deleteMany?: FilterMediaScalarWhereInput | FilterMediaScalarWhereInput[]
  }

  export type SystemParameterUncheckedUpdateManyWithoutSystemNestedInput = {
    create?: XOR<SystemParameterCreateWithoutSystemInput, SystemParameterUncheckedCreateWithoutSystemInput> | SystemParameterCreateWithoutSystemInput[] | SystemParameterUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: SystemParameterCreateOrConnectWithoutSystemInput | SystemParameterCreateOrConnectWithoutSystemInput[]
    upsert?: SystemParameterUpsertWithWhereUniqueWithoutSystemInput | SystemParameterUpsertWithWhereUniqueWithoutSystemInput[]
    createMany?: SystemParameterCreateManySystemInputEnvelope
    set?: SystemParameterWhereUniqueInput | SystemParameterWhereUniqueInput[]
    disconnect?: SystemParameterWhereUniqueInput | SystemParameterWhereUniqueInput[]
    delete?: SystemParameterWhereUniqueInput | SystemParameterWhereUniqueInput[]
    connect?: SystemParameterWhereUniqueInput | SystemParameterWhereUniqueInput[]
    update?: SystemParameterUpdateWithWhereUniqueWithoutSystemInput | SystemParameterUpdateWithWhereUniqueWithoutSystemInput[]
    updateMany?: SystemParameterUpdateManyWithWhereWithoutSystemInput | SystemParameterUpdateManyWithWhereWithoutSystemInput[]
    deleteMany?: SystemParameterScalarWhereInput | SystemParameterScalarWhereInput[]
  }

  export type SystemActivityUncheckedUpdateManyWithoutSystemNestedInput = {
    create?: XOR<SystemActivityCreateWithoutSystemInput, SystemActivityUncheckedCreateWithoutSystemInput> | SystemActivityCreateWithoutSystemInput[] | SystemActivityUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: SystemActivityCreateOrConnectWithoutSystemInput | SystemActivityCreateOrConnectWithoutSystemInput[]
    upsert?: SystemActivityUpsertWithWhereUniqueWithoutSystemInput | SystemActivityUpsertWithWhereUniqueWithoutSystemInput[]
    createMany?: SystemActivityCreateManySystemInputEnvelope
    set?: SystemActivityWhereUniqueInput | SystemActivityWhereUniqueInput[]
    disconnect?: SystemActivityWhereUniqueInput | SystemActivityWhereUniqueInput[]
    delete?: SystemActivityWhereUniqueInput | SystemActivityWhereUniqueInput[]
    connect?: SystemActivityWhereUniqueInput | SystemActivityWhereUniqueInput[]
    update?: SystemActivityUpdateWithWhereUniqueWithoutSystemInput | SystemActivityUpdateWithWhereUniqueWithoutSystemInput[]
    updateMany?: SystemActivityUpdateManyWithWhereWithoutSystemInput | SystemActivityUpdateManyWithWhereWithoutSystemInput[]
    deleteMany?: SystemActivityScalarWhereInput | SystemActivityScalarWhereInput[]
  }

  export type FilterMediaUncheckedUpdateManyWithoutSystemNestedInput = {
    create?: XOR<FilterMediaCreateWithoutSystemInput, FilterMediaUncheckedCreateWithoutSystemInput> | FilterMediaCreateWithoutSystemInput[] | FilterMediaUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: FilterMediaCreateOrConnectWithoutSystemInput | FilterMediaCreateOrConnectWithoutSystemInput[]
    upsert?: FilterMediaUpsertWithWhereUniqueWithoutSystemInput | FilterMediaUpsertWithWhereUniqueWithoutSystemInput[]
    createMany?: FilterMediaCreateManySystemInputEnvelope
    set?: FilterMediaWhereUniqueInput | FilterMediaWhereUniqueInput[]
    disconnect?: FilterMediaWhereUniqueInput | FilterMediaWhereUniqueInput[]
    delete?: FilterMediaWhereUniqueInput | FilterMediaWhereUniqueInput[]
    connect?: FilterMediaWhereUniqueInput | FilterMediaWhereUniqueInput[]
    update?: FilterMediaUpdateWithWhereUniqueWithoutSystemInput | FilterMediaUpdateWithWhereUniqueWithoutSystemInput[]
    updateMany?: FilterMediaUpdateManyWithWhereWithoutSystemInput | FilterMediaUpdateManyWithWhereWithoutSystemInput[]
    deleteMany?: FilterMediaScalarWhereInput | FilterMediaScalarWhereInput[]
  }

  export type SystemCreateNestedOneWithoutFilterMediaInput = {
    create?: XOR<SystemCreateWithoutFilterMediaInput, SystemUncheckedCreateWithoutFilterMediaInput>
    connectOrCreate?: SystemCreateOrConnectWithoutFilterMediaInput
    connect?: SystemWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SystemUpdateOneRequiredWithoutFilterMediaNestedInput = {
    create?: XOR<SystemCreateWithoutFilterMediaInput, SystemUncheckedCreateWithoutFilterMediaInput>
    connectOrCreate?: SystemCreateOrConnectWithoutFilterMediaInput
    upsert?: SystemUpsertWithoutFilterMediaInput
    connect?: SystemWhereUniqueInput
    update?: XOR<XOR<SystemUpdateToOneWithWhereWithoutFilterMediaInput, SystemUpdateWithoutFilterMediaInput>, SystemUncheckedUpdateWithoutFilterMediaInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SystemCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<SystemCreateWithoutActivitiesInput, SystemUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: SystemCreateOrConnectWithoutActivitiesInput
    connect?: SystemWhereUniqueInput
  }

  export type SystemParameterCreateNestedOneWithoutSystemActivitiesInput = {
    create?: XOR<SystemParameterCreateWithoutSystemActivitiesInput, SystemParameterUncheckedCreateWithoutSystemActivitiesInput>
    connectOrCreate?: SystemParameterCreateOrConnectWithoutSystemActivitiesInput
    connect?: SystemParameterWhereUniqueInput
  }

  export type EnumSystemActivityTypeFieldUpdateOperationsInput = {
    set?: $Enums.SystemActivityType
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SystemUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<SystemCreateWithoutActivitiesInput, SystemUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: SystemCreateOrConnectWithoutActivitiesInput
    upsert?: SystemUpsertWithoutActivitiesInput
    connect?: SystemWhereUniqueInput
    update?: XOR<XOR<SystemUpdateToOneWithWhereWithoutActivitiesInput, SystemUpdateWithoutActivitiesInput>, SystemUncheckedUpdateWithoutActivitiesInput>
  }

  export type SystemParameterUpdateOneWithoutSystemActivitiesNestedInput = {
    create?: XOR<SystemParameterCreateWithoutSystemActivitiesInput, SystemParameterUncheckedCreateWithoutSystemActivitiesInput>
    connectOrCreate?: SystemParameterCreateOrConnectWithoutSystemActivitiesInput
    upsert?: SystemParameterUpsertWithoutSystemActivitiesInput
    disconnect?: SystemParameterWhereInput | boolean
    delete?: SystemParameterWhereInput | boolean
    connect?: SystemParameterWhereUniqueInput
    update?: XOR<XOR<SystemParameterUpdateToOneWithWhereWithoutSystemActivitiesInput, SystemParameterUpdateWithoutSystemActivitiesInput>, SystemParameterUncheckedUpdateWithoutSystemActivitiesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SystemCreateNestedOneWithoutParametersInput = {
    create?: XOR<SystemCreateWithoutParametersInput, SystemUncheckedCreateWithoutParametersInput>
    connectOrCreate?: SystemCreateOrConnectWithoutParametersInput
    connect?: SystemWhereUniqueInput
  }

  export type SystemParameterLogCreateNestedManyWithoutParameterInput = {
    create?: XOR<SystemParameterLogCreateWithoutParameterInput, SystemParameterLogUncheckedCreateWithoutParameterInput> | SystemParameterLogCreateWithoutParameterInput[] | SystemParameterLogUncheckedCreateWithoutParameterInput[]
    connectOrCreate?: SystemParameterLogCreateOrConnectWithoutParameterInput | SystemParameterLogCreateOrConnectWithoutParameterInput[]
    createMany?: SystemParameterLogCreateManyParameterInputEnvelope
    connect?: SystemParameterLogWhereUniqueInput | SystemParameterLogWhereUniqueInput[]
  }

  export type SystemActivityCreateNestedManyWithoutParameterInput = {
    create?: XOR<SystemActivityCreateWithoutParameterInput, SystemActivityUncheckedCreateWithoutParameterInput> | SystemActivityCreateWithoutParameterInput[] | SystemActivityUncheckedCreateWithoutParameterInput[]
    connectOrCreate?: SystemActivityCreateOrConnectWithoutParameterInput | SystemActivityCreateOrConnectWithoutParameterInput[]
    createMany?: SystemActivityCreateManyParameterInputEnvelope
    connect?: SystemActivityWhereUniqueInput | SystemActivityWhereUniqueInput[]
  }

  export type SystemParameterLogUncheckedCreateNestedManyWithoutParameterInput = {
    create?: XOR<SystemParameterLogCreateWithoutParameterInput, SystemParameterLogUncheckedCreateWithoutParameterInput> | SystemParameterLogCreateWithoutParameterInput[] | SystemParameterLogUncheckedCreateWithoutParameterInput[]
    connectOrCreate?: SystemParameterLogCreateOrConnectWithoutParameterInput | SystemParameterLogCreateOrConnectWithoutParameterInput[]
    createMany?: SystemParameterLogCreateManyParameterInputEnvelope
    connect?: SystemParameterLogWhereUniqueInput | SystemParameterLogWhereUniqueInput[]
  }

  export type SystemActivityUncheckedCreateNestedManyWithoutParameterInput = {
    create?: XOR<SystemActivityCreateWithoutParameterInput, SystemActivityUncheckedCreateWithoutParameterInput> | SystemActivityCreateWithoutParameterInput[] | SystemActivityUncheckedCreateWithoutParameterInput[]
    connectOrCreate?: SystemActivityCreateOrConnectWithoutParameterInput | SystemActivityCreateOrConnectWithoutParameterInput[]
    createMany?: SystemActivityCreateManyParameterInputEnvelope
    connect?: SystemActivityWhereUniqueInput | SystemActivityWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SystemUpdateOneRequiredWithoutParametersNestedInput = {
    create?: XOR<SystemCreateWithoutParametersInput, SystemUncheckedCreateWithoutParametersInput>
    connectOrCreate?: SystemCreateOrConnectWithoutParametersInput
    upsert?: SystemUpsertWithoutParametersInput
    connect?: SystemWhereUniqueInput
    update?: XOR<XOR<SystemUpdateToOneWithWhereWithoutParametersInput, SystemUpdateWithoutParametersInput>, SystemUncheckedUpdateWithoutParametersInput>
  }

  export type SystemParameterLogUpdateManyWithoutParameterNestedInput = {
    create?: XOR<SystemParameterLogCreateWithoutParameterInput, SystemParameterLogUncheckedCreateWithoutParameterInput> | SystemParameterLogCreateWithoutParameterInput[] | SystemParameterLogUncheckedCreateWithoutParameterInput[]
    connectOrCreate?: SystemParameterLogCreateOrConnectWithoutParameterInput | SystemParameterLogCreateOrConnectWithoutParameterInput[]
    upsert?: SystemParameterLogUpsertWithWhereUniqueWithoutParameterInput | SystemParameterLogUpsertWithWhereUniqueWithoutParameterInput[]
    createMany?: SystemParameterLogCreateManyParameterInputEnvelope
    set?: SystemParameterLogWhereUniqueInput | SystemParameterLogWhereUniqueInput[]
    disconnect?: SystemParameterLogWhereUniqueInput | SystemParameterLogWhereUniqueInput[]
    delete?: SystemParameterLogWhereUniqueInput | SystemParameterLogWhereUniqueInput[]
    connect?: SystemParameterLogWhereUniqueInput | SystemParameterLogWhereUniqueInput[]
    update?: SystemParameterLogUpdateWithWhereUniqueWithoutParameterInput | SystemParameterLogUpdateWithWhereUniqueWithoutParameterInput[]
    updateMany?: SystemParameterLogUpdateManyWithWhereWithoutParameterInput | SystemParameterLogUpdateManyWithWhereWithoutParameterInput[]
    deleteMany?: SystemParameterLogScalarWhereInput | SystemParameterLogScalarWhereInput[]
  }

  export type SystemActivityUpdateManyWithoutParameterNestedInput = {
    create?: XOR<SystemActivityCreateWithoutParameterInput, SystemActivityUncheckedCreateWithoutParameterInput> | SystemActivityCreateWithoutParameterInput[] | SystemActivityUncheckedCreateWithoutParameterInput[]
    connectOrCreate?: SystemActivityCreateOrConnectWithoutParameterInput | SystemActivityCreateOrConnectWithoutParameterInput[]
    upsert?: SystemActivityUpsertWithWhereUniqueWithoutParameterInput | SystemActivityUpsertWithWhereUniqueWithoutParameterInput[]
    createMany?: SystemActivityCreateManyParameterInputEnvelope
    set?: SystemActivityWhereUniqueInput | SystemActivityWhereUniqueInput[]
    disconnect?: SystemActivityWhereUniqueInput | SystemActivityWhereUniqueInput[]
    delete?: SystemActivityWhereUniqueInput | SystemActivityWhereUniqueInput[]
    connect?: SystemActivityWhereUniqueInput | SystemActivityWhereUniqueInput[]
    update?: SystemActivityUpdateWithWhereUniqueWithoutParameterInput | SystemActivityUpdateWithWhereUniqueWithoutParameterInput[]
    updateMany?: SystemActivityUpdateManyWithWhereWithoutParameterInput | SystemActivityUpdateManyWithWhereWithoutParameterInput[]
    deleteMany?: SystemActivityScalarWhereInput | SystemActivityScalarWhereInput[]
  }

  export type SystemParameterLogUncheckedUpdateManyWithoutParameterNestedInput = {
    create?: XOR<SystemParameterLogCreateWithoutParameterInput, SystemParameterLogUncheckedCreateWithoutParameterInput> | SystemParameterLogCreateWithoutParameterInput[] | SystemParameterLogUncheckedCreateWithoutParameterInput[]
    connectOrCreate?: SystemParameterLogCreateOrConnectWithoutParameterInput | SystemParameterLogCreateOrConnectWithoutParameterInput[]
    upsert?: SystemParameterLogUpsertWithWhereUniqueWithoutParameterInput | SystemParameterLogUpsertWithWhereUniqueWithoutParameterInput[]
    createMany?: SystemParameterLogCreateManyParameterInputEnvelope
    set?: SystemParameterLogWhereUniqueInput | SystemParameterLogWhereUniqueInput[]
    disconnect?: SystemParameterLogWhereUniqueInput | SystemParameterLogWhereUniqueInput[]
    delete?: SystemParameterLogWhereUniqueInput | SystemParameterLogWhereUniqueInput[]
    connect?: SystemParameterLogWhereUniqueInput | SystemParameterLogWhereUniqueInput[]
    update?: SystemParameterLogUpdateWithWhereUniqueWithoutParameterInput | SystemParameterLogUpdateWithWhereUniqueWithoutParameterInput[]
    updateMany?: SystemParameterLogUpdateManyWithWhereWithoutParameterInput | SystemParameterLogUpdateManyWithWhereWithoutParameterInput[]
    deleteMany?: SystemParameterLogScalarWhereInput | SystemParameterLogScalarWhereInput[]
  }

  export type SystemActivityUncheckedUpdateManyWithoutParameterNestedInput = {
    create?: XOR<SystemActivityCreateWithoutParameterInput, SystemActivityUncheckedCreateWithoutParameterInput> | SystemActivityCreateWithoutParameterInput[] | SystemActivityUncheckedCreateWithoutParameterInput[]
    connectOrCreate?: SystemActivityCreateOrConnectWithoutParameterInput | SystemActivityCreateOrConnectWithoutParameterInput[]
    upsert?: SystemActivityUpsertWithWhereUniqueWithoutParameterInput | SystemActivityUpsertWithWhereUniqueWithoutParameterInput[]
    createMany?: SystemActivityCreateManyParameterInputEnvelope
    set?: SystemActivityWhereUniqueInput | SystemActivityWhereUniqueInput[]
    disconnect?: SystemActivityWhereUniqueInput | SystemActivityWhereUniqueInput[]
    delete?: SystemActivityWhereUniqueInput | SystemActivityWhereUniqueInput[]
    connect?: SystemActivityWhereUniqueInput | SystemActivityWhereUniqueInput[]
    update?: SystemActivityUpdateWithWhereUniqueWithoutParameterInput | SystemActivityUpdateWithWhereUniqueWithoutParameterInput[]
    updateMany?: SystemActivityUpdateManyWithWhereWithoutParameterInput | SystemActivityUpdateManyWithWhereWithoutParameterInput[]
    deleteMany?: SystemActivityScalarWhereInput | SystemActivityScalarWhereInput[]
  }

  export type SystemParameterCreateNestedOneWithoutLogsInput = {
    create?: XOR<SystemParameterCreateWithoutLogsInput, SystemParameterUncheckedCreateWithoutLogsInput>
    connectOrCreate?: SystemParameterCreateOrConnectWithoutLogsInput
    connect?: SystemParameterWhereUniqueInput
  }

  export type SystemParameterUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<SystemParameterCreateWithoutLogsInput, SystemParameterUncheckedCreateWithoutLogsInput>
    connectOrCreate?: SystemParameterCreateOrConnectWithoutLogsInput
    upsert?: SystemParameterUpsertWithoutLogsInput
    connect?: SystemParameterWhereUniqueInput
    update?: XOR<XOR<SystemParameterUpdateToOneWithWhereWithoutLogsInput, SystemParameterUpdateWithoutLogsInput>, SystemParameterUncheckedUpdateWithoutLogsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SystemCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<SystemCreateWithoutCreatedByInput, SystemUncheckedCreateWithoutCreatedByInput> | SystemCreateWithoutCreatedByInput[] | SystemUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SystemCreateOrConnectWithoutCreatedByInput | SystemCreateOrConnectWithoutCreatedByInput[]
    createMany?: SystemCreateManyCreatedByInputEnvelope
    connect?: SystemWhereUniqueInput | SystemWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SystemUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<SystemCreateWithoutCreatedByInput, SystemUncheckedCreateWithoutCreatedByInput> | SystemCreateWithoutCreatedByInput[] | SystemUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SystemCreateOrConnectWithoutCreatedByInput | SystemCreateOrConnectWithoutCreatedByInput[]
    createMany?: SystemCreateManyCreatedByInputEnvelope
    connect?: SystemWhereUniqueInput | SystemWhereUniqueInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SystemUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<SystemCreateWithoutCreatedByInput, SystemUncheckedCreateWithoutCreatedByInput> | SystemCreateWithoutCreatedByInput[] | SystemUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SystemCreateOrConnectWithoutCreatedByInput | SystemCreateOrConnectWithoutCreatedByInput[]
    upsert?: SystemUpsertWithWhereUniqueWithoutCreatedByInput | SystemUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: SystemCreateManyCreatedByInputEnvelope
    set?: SystemWhereUniqueInput | SystemWhereUniqueInput[]
    disconnect?: SystemWhereUniqueInput | SystemWhereUniqueInput[]
    delete?: SystemWhereUniqueInput | SystemWhereUniqueInput[]
    connect?: SystemWhereUniqueInput | SystemWhereUniqueInput[]
    update?: SystemUpdateWithWhereUniqueWithoutCreatedByInput | SystemUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: SystemUpdateManyWithWhereWithoutCreatedByInput | SystemUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: SystemScalarWhereInput | SystemScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SystemUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<SystemCreateWithoutCreatedByInput, SystemUncheckedCreateWithoutCreatedByInput> | SystemCreateWithoutCreatedByInput[] | SystemUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SystemCreateOrConnectWithoutCreatedByInput | SystemCreateOrConnectWithoutCreatedByInput[]
    upsert?: SystemUpsertWithWhereUniqueWithoutCreatedByInput | SystemUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: SystemCreateManyCreatedByInputEnvelope
    set?: SystemWhereUniqueInput | SystemWhereUniqueInput[]
    disconnect?: SystemWhereUniqueInput | SystemWhereUniqueInput[]
    delete?: SystemWhereUniqueInput | SystemWhereUniqueInput[]
    connect?: SystemWhereUniqueInput | SystemWhereUniqueInput[]
    update?: SystemUpdateWithWhereUniqueWithoutCreatedByInput | SystemUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: SystemUpdateManyWithWhereWithoutCreatedByInput | SystemUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: SystemScalarWhereInput | SystemScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSystemActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemActivityType | EnumSystemActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SystemActivityType[]
    notIn?: $Enums.SystemActivityType[]
    not?: NestedEnumSystemActivityTypeFilter<$PrismaModel> | $Enums.SystemActivityType
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumSystemActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemActivityType | EnumSystemActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SystemActivityType[]
    notIn?: $Enums.SystemActivityType[]
    not?: NestedEnumSystemActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.SystemActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSystemActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumSystemActivityTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserCreateWithoutSystemsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSystemsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSystemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSystemsInput, UserUncheckedCreateWithoutSystemsInput>
  }

  export type SystemParameterCreateWithoutSystemInput = {
    fullName: string
    abbreviatedName: string
    unit: string
    displayDecimals?: number
    lowerBound: number
    upperBound: number
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: SystemParameterLogCreateNestedManyWithoutParameterInput
    systemActivities?: SystemActivityCreateNestedManyWithoutParameterInput
  }

  export type SystemParameterUncheckedCreateWithoutSystemInput = {
    id?: number
    fullName: string
    abbreviatedName: string
    unit: string
    displayDecimals?: number
    lowerBound: number
    upperBound: number
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: SystemParameterLogUncheckedCreateNestedManyWithoutParameterInput
    systemActivities?: SystemActivityUncheckedCreateNestedManyWithoutParameterInput
  }

  export type SystemParameterCreateOrConnectWithoutSystemInput = {
    where: SystemParameterWhereUniqueInput
    create: XOR<SystemParameterCreateWithoutSystemInput, SystemParameterUncheckedCreateWithoutSystemInput>
  }

  export type SystemParameterCreateManySystemInputEnvelope = {
    data: SystemParameterCreateManySystemInput | SystemParameterCreateManySystemInput[]
  }

  export type SystemActivityCreateWithoutSystemInput = {
    type: $Enums.SystemActivityType
    createdAt?: Date | string
    loggedAt?: Date | string | null
    value?: number | null
    note?: string | null
    unit?: string | null
    product?: string | null
    parameter?: SystemParameterCreateNestedOneWithoutSystemActivitiesInput
  }

  export type SystemActivityUncheckedCreateWithoutSystemInput = {
    id?: number
    type: $Enums.SystemActivityType
    createdAt?: Date | string
    loggedAt?: Date | string | null
    value?: number | null
    note?: string | null
    unit?: string | null
    product?: string | null
    parameterId?: number | null
  }

  export type SystemActivityCreateOrConnectWithoutSystemInput = {
    where: SystemActivityWhereUniqueInput
    create: XOR<SystemActivityCreateWithoutSystemInput, SystemActivityUncheckedCreateWithoutSystemInput>
  }

  export type SystemActivityCreateManySystemInputEnvelope = {
    data: SystemActivityCreateManySystemInput | SystemActivityCreateManySystemInput[]
  }

  export type FilterMediaCreateWithoutSystemInput = {
    name: string
    addedAt: Date | string
    lastReplacedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FilterMediaUncheckedCreateWithoutSystemInput = {
    id?: number
    name: string
    addedAt: Date | string
    lastReplacedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FilterMediaCreateOrConnectWithoutSystemInput = {
    where: FilterMediaWhereUniqueInput
    create: XOR<FilterMediaCreateWithoutSystemInput, FilterMediaUncheckedCreateWithoutSystemInput>
  }

  export type FilterMediaCreateManySystemInputEnvelope = {
    data: FilterMediaCreateManySystemInput | FilterMediaCreateManySystemInput[]
  }

  export type UserUpsertWithoutSystemsInput = {
    update: XOR<UserUpdateWithoutSystemsInput, UserUncheckedUpdateWithoutSystemsInput>
    create: XOR<UserCreateWithoutSystemsInput, UserUncheckedCreateWithoutSystemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSystemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSystemsInput, UserUncheckedUpdateWithoutSystemsInput>
  }

  export type UserUpdateWithoutSystemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSystemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SystemParameterUpsertWithWhereUniqueWithoutSystemInput = {
    where: SystemParameterWhereUniqueInput
    update: XOR<SystemParameterUpdateWithoutSystemInput, SystemParameterUncheckedUpdateWithoutSystemInput>
    create: XOR<SystemParameterCreateWithoutSystemInput, SystemParameterUncheckedCreateWithoutSystemInput>
  }

  export type SystemParameterUpdateWithWhereUniqueWithoutSystemInput = {
    where: SystemParameterWhereUniqueInput
    data: XOR<SystemParameterUpdateWithoutSystemInput, SystemParameterUncheckedUpdateWithoutSystemInput>
  }

  export type SystemParameterUpdateManyWithWhereWithoutSystemInput = {
    where: SystemParameterScalarWhereInput
    data: XOR<SystemParameterUpdateManyMutationInput, SystemParameterUncheckedUpdateManyWithoutSystemInput>
  }

  export type SystemParameterScalarWhereInput = {
    AND?: SystemParameterScalarWhereInput | SystemParameterScalarWhereInput[]
    OR?: SystemParameterScalarWhereInput[]
    NOT?: SystemParameterScalarWhereInput | SystemParameterScalarWhereInput[]
    id?: IntFilter<"SystemParameter"> | number
    fullName?: StringFilter<"SystemParameter"> | string
    abbreviatedName?: StringFilter<"SystemParameter"> | string
    unit?: StringFilter<"SystemParameter"> | string
    displayDecimals?: IntFilter<"SystemParameter"> | number
    lowerBound?: FloatFilter<"SystemParameter"> | number
    upperBound?: FloatFilter<"SystemParameter"> | number
    displayOrder?: IntFilter<"SystemParameter"> | number
    createdAt?: DateTimeFilter<"SystemParameter"> | Date | string
    updatedAt?: DateTimeFilter<"SystemParameter"> | Date | string
    systemId?: StringFilter<"SystemParameter"> | string
  }

  export type SystemActivityUpsertWithWhereUniqueWithoutSystemInput = {
    where: SystemActivityWhereUniqueInput
    update: XOR<SystemActivityUpdateWithoutSystemInput, SystemActivityUncheckedUpdateWithoutSystemInput>
    create: XOR<SystemActivityCreateWithoutSystemInput, SystemActivityUncheckedCreateWithoutSystemInput>
  }

  export type SystemActivityUpdateWithWhereUniqueWithoutSystemInput = {
    where: SystemActivityWhereUniqueInput
    data: XOR<SystemActivityUpdateWithoutSystemInput, SystemActivityUncheckedUpdateWithoutSystemInput>
  }

  export type SystemActivityUpdateManyWithWhereWithoutSystemInput = {
    where: SystemActivityScalarWhereInput
    data: XOR<SystemActivityUpdateManyMutationInput, SystemActivityUncheckedUpdateManyWithoutSystemInput>
  }

  export type SystemActivityScalarWhereInput = {
    AND?: SystemActivityScalarWhereInput | SystemActivityScalarWhereInput[]
    OR?: SystemActivityScalarWhereInput[]
    NOT?: SystemActivityScalarWhereInput | SystemActivityScalarWhereInput[]
    id?: IntFilter<"SystemActivity"> | number
    type?: EnumSystemActivityTypeFilter<"SystemActivity"> | $Enums.SystemActivityType
    createdAt?: DateTimeFilter<"SystemActivity"> | Date | string
    loggedAt?: DateTimeNullableFilter<"SystemActivity"> | Date | string | null
    value?: FloatNullableFilter<"SystemActivity"> | number | null
    note?: StringNullableFilter<"SystemActivity"> | string | null
    unit?: StringNullableFilter<"SystemActivity"> | string | null
    product?: StringNullableFilter<"SystemActivity"> | string | null
    systemId?: StringFilter<"SystemActivity"> | string
    parameterId?: IntNullableFilter<"SystemActivity"> | number | null
  }

  export type FilterMediaUpsertWithWhereUniqueWithoutSystemInput = {
    where: FilterMediaWhereUniqueInput
    update: XOR<FilterMediaUpdateWithoutSystemInput, FilterMediaUncheckedUpdateWithoutSystemInput>
    create: XOR<FilterMediaCreateWithoutSystemInput, FilterMediaUncheckedCreateWithoutSystemInput>
  }

  export type FilterMediaUpdateWithWhereUniqueWithoutSystemInput = {
    where: FilterMediaWhereUniqueInput
    data: XOR<FilterMediaUpdateWithoutSystemInput, FilterMediaUncheckedUpdateWithoutSystemInput>
  }

  export type FilterMediaUpdateManyWithWhereWithoutSystemInput = {
    where: FilterMediaScalarWhereInput
    data: XOR<FilterMediaUpdateManyMutationInput, FilterMediaUncheckedUpdateManyWithoutSystemInput>
  }

  export type FilterMediaScalarWhereInput = {
    AND?: FilterMediaScalarWhereInput | FilterMediaScalarWhereInput[]
    OR?: FilterMediaScalarWhereInput[]
    NOT?: FilterMediaScalarWhereInput | FilterMediaScalarWhereInput[]
    id?: IntFilter<"FilterMedia"> | number
    name?: StringFilter<"FilterMedia"> | string
    addedAt?: DateTimeFilter<"FilterMedia"> | Date | string
    lastReplacedAt?: DateTimeNullableFilter<"FilterMedia"> | Date | string | null
    createdAt?: DateTimeFilter<"FilterMedia"> | Date | string
    updatedAt?: DateTimeFilter<"FilterMedia"> | Date | string
    systemId?: StringFilter<"FilterMedia"> | string
  }

  export type SystemCreateWithoutFilterMediaInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutSystemsInput
    parameters?: SystemParameterCreateNestedManyWithoutSystemInput
    activities?: SystemActivityCreateNestedManyWithoutSystemInput
  }

  export type SystemUncheckedCreateWithoutFilterMediaInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    parameters?: SystemParameterUncheckedCreateNestedManyWithoutSystemInput
    activities?: SystemActivityUncheckedCreateNestedManyWithoutSystemInput
  }

  export type SystemCreateOrConnectWithoutFilterMediaInput = {
    where: SystemWhereUniqueInput
    create: XOR<SystemCreateWithoutFilterMediaInput, SystemUncheckedCreateWithoutFilterMediaInput>
  }

  export type SystemUpsertWithoutFilterMediaInput = {
    update: XOR<SystemUpdateWithoutFilterMediaInput, SystemUncheckedUpdateWithoutFilterMediaInput>
    create: XOR<SystemCreateWithoutFilterMediaInput, SystemUncheckedCreateWithoutFilterMediaInput>
    where?: SystemWhereInput
  }

  export type SystemUpdateToOneWithWhereWithoutFilterMediaInput = {
    where?: SystemWhereInput
    data: XOR<SystemUpdateWithoutFilterMediaInput, SystemUncheckedUpdateWithoutFilterMediaInput>
  }

  export type SystemUpdateWithoutFilterMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutSystemsNestedInput
    parameters?: SystemParameterUpdateManyWithoutSystemNestedInput
    activities?: SystemActivityUpdateManyWithoutSystemNestedInput
  }

  export type SystemUncheckedUpdateWithoutFilterMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    parameters?: SystemParameterUncheckedUpdateManyWithoutSystemNestedInput
    activities?: SystemActivityUncheckedUpdateManyWithoutSystemNestedInput
  }

  export type SystemCreateWithoutActivitiesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutSystemsInput
    parameters?: SystemParameterCreateNestedManyWithoutSystemInput
    filterMedia?: FilterMediaCreateNestedManyWithoutSystemInput
  }

  export type SystemUncheckedCreateWithoutActivitiesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    parameters?: SystemParameterUncheckedCreateNestedManyWithoutSystemInput
    filterMedia?: FilterMediaUncheckedCreateNestedManyWithoutSystemInput
  }

  export type SystemCreateOrConnectWithoutActivitiesInput = {
    where: SystemWhereUniqueInput
    create: XOR<SystemCreateWithoutActivitiesInput, SystemUncheckedCreateWithoutActivitiesInput>
  }

  export type SystemParameterCreateWithoutSystemActivitiesInput = {
    fullName: string
    abbreviatedName: string
    unit: string
    displayDecimals?: number
    lowerBound: number
    upperBound: number
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    system: SystemCreateNestedOneWithoutParametersInput
    logs?: SystemParameterLogCreateNestedManyWithoutParameterInput
  }

  export type SystemParameterUncheckedCreateWithoutSystemActivitiesInput = {
    id?: number
    fullName: string
    abbreviatedName: string
    unit: string
    displayDecimals?: number
    lowerBound: number
    upperBound: number
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    systemId: string
    logs?: SystemParameterLogUncheckedCreateNestedManyWithoutParameterInput
  }

  export type SystemParameterCreateOrConnectWithoutSystemActivitiesInput = {
    where: SystemParameterWhereUniqueInput
    create: XOR<SystemParameterCreateWithoutSystemActivitiesInput, SystemParameterUncheckedCreateWithoutSystemActivitiesInput>
  }

  export type SystemUpsertWithoutActivitiesInput = {
    update: XOR<SystemUpdateWithoutActivitiesInput, SystemUncheckedUpdateWithoutActivitiesInput>
    create: XOR<SystemCreateWithoutActivitiesInput, SystemUncheckedCreateWithoutActivitiesInput>
    where?: SystemWhereInput
  }

  export type SystemUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: SystemWhereInput
    data: XOR<SystemUpdateWithoutActivitiesInput, SystemUncheckedUpdateWithoutActivitiesInput>
  }

  export type SystemUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutSystemsNestedInput
    parameters?: SystemParameterUpdateManyWithoutSystemNestedInput
    filterMedia?: FilterMediaUpdateManyWithoutSystemNestedInput
  }

  export type SystemUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    parameters?: SystemParameterUncheckedUpdateManyWithoutSystemNestedInput
    filterMedia?: FilterMediaUncheckedUpdateManyWithoutSystemNestedInput
  }

  export type SystemParameterUpsertWithoutSystemActivitiesInput = {
    update: XOR<SystemParameterUpdateWithoutSystemActivitiesInput, SystemParameterUncheckedUpdateWithoutSystemActivitiesInput>
    create: XOR<SystemParameterCreateWithoutSystemActivitiesInput, SystemParameterUncheckedCreateWithoutSystemActivitiesInput>
    where?: SystemParameterWhereInput
  }

  export type SystemParameterUpdateToOneWithWhereWithoutSystemActivitiesInput = {
    where?: SystemParameterWhereInput
    data: XOR<SystemParameterUpdateWithoutSystemActivitiesInput, SystemParameterUncheckedUpdateWithoutSystemActivitiesInput>
  }

  export type SystemParameterUpdateWithoutSystemActivitiesInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    abbreviatedName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    displayDecimals?: IntFieldUpdateOperationsInput | number
    lowerBound?: FloatFieldUpdateOperationsInput | number
    upperBound?: FloatFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    system?: SystemUpdateOneRequiredWithoutParametersNestedInput
    logs?: SystemParameterLogUpdateManyWithoutParameterNestedInput
  }

  export type SystemParameterUncheckedUpdateWithoutSystemActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    abbreviatedName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    displayDecimals?: IntFieldUpdateOperationsInput | number
    lowerBound?: FloatFieldUpdateOperationsInput | number
    upperBound?: FloatFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    systemId?: StringFieldUpdateOperationsInput | string
    logs?: SystemParameterLogUncheckedUpdateManyWithoutParameterNestedInput
  }

  export type SystemCreateWithoutParametersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutSystemsInput
    activities?: SystemActivityCreateNestedManyWithoutSystemInput
    filterMedia?: FilterMediaCreateNestedManyWithoutSystemInput
  }

  export type SystemUncheckedCreateWithoutParametersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
    activities?: SystemActivityUncheckedCreateNestedManyWithoutSystemInput
    filterMedia?: FilterMediaUncheckedCreateNestedManyWithoutSystemInput
  }

  export type SystemCreateOrConnectWithoutParametersInput = {
    where: SystemWhereUniqueInput
    create: XOR<SystemCreateWithoutParametersInput, SystemUncheckedCreateWithoutParametersInput>
  }

  export type SystemParameterLogCreateWithoutParameterInput = {
    value: number
    loggedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemParameterLogUncheckedCreateWithoutParameterInput = {
    id?: number
    value: number
    loggedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemParameterLogCreateOrConnectWithoutParameterInput = {
    where: SystemParameterLogWhereUniqueInput
    create: XOR<SystemParameterLogCreateWithoutParameterInput, SystemParameterLogUncheckedCreateWithoutParameterInput>
  }

  export type SystemParameterLogCreateManyParameterInputEnvelope = {
    data: SystemParameterLogCreateManyParameterInput | SystemParameterLogCreateManyParameterInput[]
  }

  export type SystemActivityCreateWithoutParameterInput = {
    type: $Enums.SystemActivityType
    createdAt?: Date | string
    loggedAt?: Date | string | null
    value?: number | null
    note?: string | null
    unit?: string | null
    product?: string | null
    system: SystemCreateNestedOneWithoutActivitiesInput
  }

  export type SystemActivityUncheckedCreateWithoutParameterInput = {
    id?: number
    type: $Enums.SystemActivityType
    createdAt?: Date | string
    loggedAt?: Date | string | null
    value?: number | null
    note?: string | null
    unit?: string | null
    product?: string | null
    systemId: string
  }

  export type SystemActivityCreateOrConnectWithoutParameterInput = {
    where: SystemActivityWhereUniqueInput
    create: XOR<SystemActivityCreateWithoutParameterInput, SystemActivityUncheckedCreateWithoutParameterInput>
  }

  export type SystemActivityCreateManyParameterInputEnvelope = {
    data: SystemActivityCreateManyParameterInput | SystemActivityCreateManyParameterInput[]
  }

  export type SystemUpsertWithoutParametersInput = {
    update: XOR<SystemUpdateWithoutParametersInput, SystemUncheckedUpdateWithoutParametersInput>
    create: XOR<SystemCreateWithoutParametersInput, SystemUncheckedCreateWithoutParametersInput>
    where?: SystemWhereInput
  }

  export type SystemUpdateToOneWithWhereWithoutParametersInput = {
    where?: SystemWhereInput
    data: XOR<SystemUpdateWithoutParametersInput, SystemUncheckedUpdateWithoutParametersInput>
  }

  export type SystemUpdateWithoutParametersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutSystemsNestedInput
    activities?: SystemActivityUpdateManyWithoutSystemNestedInput
    filterMedia?: FilterMediaUpdateManyWithoutSystemNestedInput
  }

  export type SystemUncheckedUpdateWithoutParametersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    activities?: SystemActivityUncheckedUpdateManyWithoutSystemNestedInput
    filterMedia?: FilterMediaUncheckedUpdateManyWithoutSystemNestedInput
  }

  export type SystemParameterLogUpsertWithWhereUniqueWithoutParameterInput = {
    where: SystemParameterLogWhereUniqueInput
    update: XOR<SystemParameterLogUpdateWithoutParameterInput, SystemParameterLogUncheckedUpdateWithoutParameterInput>
    create: XOR<SystemParameterLogCreateWithoutParameterInput, SystemParameterLogUncheckedCreateWithoutParameterInput>
  }

  export type SystemParameterLogUpdateWithWhereUniqueWithoutParameterInput = {
    where: SystemParameterLogWhereUniqueInput
    data: XOR<SystemParameterLogUpdateWithoutParameterInput, SystemParameterLogUncheckedUpdateWithoutParameterInput>
  }

  export type SystemParameterLogUpdateManyWithWhereWithoutParameterInput = {
    where: SystemParameterLogScalarWhereInput
    data: XOR<SystemParameterLogUpdateManyMutationInput, SystemParameterLogUncheckedUpdateManyWithoutParameterInput>
  }

  export type SystemParameterLogScalarWhereInput = {
    AND?: SystemParameterLogScalarWhereInput | SystemParameterLogScalarWhereInput[]
    OR?: SystemParameterLogScalarWhereInput[]
    NOT?: SystemParameterLogScalarWhereInput | SystemParameterLogScalarWhereInput[]
    id?: IntFilter<"SystemParameterLog"> | number
    value?: FloatFilter<"SystemParameterLog"> | number
    loggedAt?: DateTimeFilter<"SystemParameterLog"> | Date | string
    createdAt?: DateTimeFilter<"SystemParameterLog"> | Date | string
    updatedAt?: DateTimeFilter<"SystemParameterLog"> | Date | string
    parameterId?: IntFilter<"SystemParameterLog"> | number
  }

  export type SystemActivityUpsertWithWhereUniqueWithoutParameterInput = {
    where: SystemActivityWhereUniqueInput
    update: XOR<SystemActivityUpdateWithoutParameterInput, SystemActivityUncheckedUpdateWithoutParameterInput>
    create: XOR<SystemActivityCreateWithoutParameterInput, SystemActivityUncheckedCreateWithoutParameterInput>
  }

  export type SystemActivityUpdateWithWhereUniqueWithoutParameterInput = {
    where: SystemActivityWhereUniqueInput
    data: XOR<SystemActivityUpdateWithoutParameterInput, SystemActivityUncheckedUpdateWithoutParameterInput>
  }

  export type SystemActivityUpdateManyWithWhereWithoutParameterInput = {
    where: SystemActivityScalarWhereInput
    data: XOR<SystemActivityUpdateManyMutationInput, SystemActivityUncheckedUpdateManyWithoutParameterInput>
  }

  export type SystemParameterCreateWithoutLogsInput = {
    fullName: string
    abbreviatedName: string
    unit: string
    displayDecimals?: number
    lowerBound: number
    upperBound: number
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    system: SystemCreateNestedOneWithoutParametersInput
    systemActivities?: SystemActivityCreateNestedManyWithoutParameterInput
  }

  export type SystemParameterUncheckedCreateWithoutLogsInput = {
    id?: number
    fullName: string
    abbreviatedName: string
    unit: string
    displayDecimals?: number
    lowerBound: number
    upperBound: number
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    systemId: string
    systemActivities?: SystemActivityUncheckedCreateNestedManyWithoutParameterInput
  }

  export type SystemParameterCreateOrConnectWithoutLogsInput = {
    where: SystemParameterWhereUniqueInput
    create: XOR<SystemParameterCreateWithoutLogsInput, SystemParameterUncheckedCreateWithoutLogsInput>
  }

  export type SystemParameterUpsertWithoutLogsInput = {
    update: XOR<SystemParameterUpdateWithoutLogsInput, SystemParameterUncheckedUpdateWithoutLogsInput>
    create: XOR<SystemParameterCreateWithoutLogsInput, SystemParameterUncheckedCreateWithoutLogsInput>
    where?: SystemParameterWhereInput
  }

  export type SystemParameterUpdateToOneWithWhereWithoutLogsInput = {
    where?: SystemParameterWhereInput
    data: XOR<SystemParameterUpdateWithoutLogsInput, SystemParameterUncheckedUpdateWithoutLogsInput>
  }

  export type SystemParameterUpdateWithoutLogsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    abbreviatedName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    displayDecimals?: IntFieldUpdateOperationsInput | number
    lowerBound?: FloatFieldUpdateOperationsInput | number
    upperBound?: FloatFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    system?: SystemUpdateOneRequiredWithoutParametersNestedInput
    systemActivities?: SystemActivityUpdateManyWithoutParameterNestedInput
  }

  export type SystemParameterUncheckedUpdateWithoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    abbreviatedName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    displayDecimals?: IntFieldUpdateOperationsInput | number
    lowerBound?: FloatFieldUpdateOperationsInput | number
    upperBound?: FloatFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    systemId?: StringFieldUpdateOperationsInput | string
    systemActivities?: SystemActivityUncheckedUpdateManyWithoutParameterNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    systems?: SystemCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    systems?: SystemUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    systems?: SystemUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    systems?: SystemUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    systems?: SystemCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    systems?: SystemUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    systems?: SystemUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    systems?: SystemUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type SystemCreateWithoutCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parameters?: SystemParameterCreateNestedManyWithoutSystemInput
    activities?: SystemActivityCreateNestedManyWithoutSystemInput
    filterMedia?: FilterMediaCreateNestedManyWithoutSystemInput
  }

  export type SystemUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parameters?: SystemParameterUncheckedCreateNestedManyWithoutSystemInput
    activities?: SystemActivityUncheckedCreateNestedManyWithoutSystemInput
    filterMedia?: FilterMediaUncheckedCreateNestedManyWithoutSystemInput
  }

  export type SystemCreateOrConnectWithoutCreatedByInput = {
    where: SystemWhereUniqueInput
    create: XOR<SystemCreateWithoutCreatedByInput, SystemUncheckedCreateWithoutCreatedByInput>
  }

  export type SystemCreateManyCreatedByInputEnvelope = {
    data: SystemCreateManyCreatedByInput | SystemCreateManyCreatedByInput[]
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type SystemUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: SystemWhereUniqueInput
    update: XOR<SystemUpdateWithoutCreatedByInput, SystemUncheckedUpdateWithoutCreatedByInput>
    create: XOR<SystemCreateWithoutCreatedByInput, SystemUncheckedCreateWithoutCreatedByInput>
  }

  export type SystemUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: SystemWhereUniqueInput
    data: XOR<SystemUpdateWithoutCreatedByInput, SystemUncheckedUpdateWithoutCreatedByInput>
  }

  export type SystemUpdateManyWithWhereWithoutCreatedByInput = {
    where: SystemScalarWhereInput
    data: XOR<SystemUpdateManyMutationInput, SystemUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type SystemScalarWhereInput = {
    AND?: SystemScalarWhereInput | SystemScalarWhereInput[]
    OR?: SystemScalarWhereInput[]
    NOT?: SystemScalarWhereInput | SystemScalarWhereInput[]
    id?: StringFilter<"System"> | string
    name?: StringFilter<"System"> | string
    createdAt?: DateTimeFilter<"System"> | Date | string
    updatedAt?: DateTimeFilter<"System"> | Date | string
    createdById?: StringFilter<"System"> | string
  }

  export type SystemParameterCreateManySystemInput = {
    id?: number
    fullName: string
    abbreviatedName: string
    unit: string
    displayDecimals?: number
    lowerBound: number
    upperBound: number
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemActivityCreateManySystemInput = {
    id?: number
    type: $Enums.SystemActivityType
    createdAt?: Date | string
    loggedAt?: Date | string | null
    value?: number | null
    note?: string | null
    unit?: string | null
    product?: string | null
    parameterId?: number | null
  }

  export type FilterMediaCreateManySystemInput = {
    id?: number
    name: string
    addedAt: Date | string
    lastReplacedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemParameterUpdateWithoutSystemInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    abbreviatedName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    displayDecimals?: IntFieldUpdateOperationsInput | number
    lowerBound?: FloatFieldUpdateOperationsInput | number
    upperBound?: FloatFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: SystemParameterLogUpdateManyWithoutParameterNestedInput
    systemActivities?: SystemActivityUpdateManyWithoutParameterNestedInput
  }

  export type SystemParameterUncheckedUpdateWithoutSystemInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    abbreviatedName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    displayDecimals?: IntFieldUpdateOperationsInput | number
    lowerBound?: FloatFieldUpdateOperationsInput | number
    upperBound?: FloatFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: SystemParameterLogUncheckedUpdateManyWithoutParameterNestedInput
    systemActivities?: SystemActivityUncheckedUpdateManyWithoutParameterNestedInput
  }

  export type SystemParameterUncheckedUpdateManyWithoutSystemInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    abbreviatedName?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    displayDecimals?: IntFieldUpdateOperationsInput | number
    lowerBound?: FloatFieldUpdateOperationsInput | number
    upperBound?: FloatFieldUpdateOperationsInput | number
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemActivityUpdateWithoutSystemInput = {
    type?: EnumSystemActivityTypeFieldUpdateOperationsInput | $Enums.SystemActivityType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    product?: NullableStringFieldUpdateOperationsInput | string | null
    parameter?: SystemParameterUpdateOneWithoutSystemActivitiesNestedInput
  }

  export type SystemActivityUncheckedUpdateWithoutSystemInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumSystemActivityTypeFieldUpdateOperationsInput | $Enums.SystemActivityType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    product?: NullableStringFieldUpdateOperationsInput | string | null
    parameterId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SystemActivityUncheckedUpdateManyWithoutSystemInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumSystemActivityTypeFieldUpdateOperationsInput | $Enums.SystemActivityType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    product?: NullableStringFieldUpdateOperationsInput | string | null
    parameterId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FilterMediaUpdateWithoutSystemInput = {
    name?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastReplacedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilterMediaUncheckedUpdateWithoutSystemInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastReplacedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilterMediaUncheckedUpdateManyWithoutSystemInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastReplacedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemParameterLogCreateManyParameterInput = {
    id?: number
    value: number
    loggedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemActivityCreateManyParameterInput = {
    id?: number
    type: $Enums.SystemActivityType
    createdAt?: Date | string
    loggedAt?: Date | string | null
    value?: number | null
    note?: string | null
    unit?: string | null
    product?: string | null
    systemId: string
  }

  export type SystemParameterLogUpdateWithoutParameterInput = {
    value?: FloatFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemParameterLogUncheckedUpdateWithoutParameterInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemParameterLogUncheckedUpdateManyWithoutParameterInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemActivityUpdateWithoutParameterInput = {
    type?: EnumSystemActivityTypeFieldUpdateOperationsInput | $Enums.SystemActivityType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    product?: NullableStringFieldUpdateOperationsInput | string | null
    system?: SystemUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type SystemActivityUncheckedUpdateWithoutParameterInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumSystemActivityTypeFieldUpdateOperationsInput | $Enums.SystemActivityType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    product?: NullableStringFieldUpdateOperationsInput | string | null
    systemId?: StringFieldUpdateOperationsInput | string
  }

  export type SystemActivityUncheckedUpdateManyWithoutParameterInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumSystemActivityTypeFieldUpdateOperationsInput | $Enums.SystemActivityType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loggedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    product?: NullableStringFieldUpdateOperationsInput | string | null
    systemId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SystemCreateManyCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parameters?: SystemParameterUpdateManyWithoutSystemNestedInput
    activities?: SystemActivityUpdateManyWithoutSystemNestedInput
    filterMedia?: FilterMediaUpdateManyWithoutSystemNestedInput
  }

  export type SystemUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parameters?: SystemParameterUncheckedUpdateManyWithoutSystemNestedInput
    activities?: SystemActivityUncheckedUpdateManyWithoutSystemNestedInput
    filterMedia?: FilterMediaUncheckedUpdateManyWithoutSystemNestedInput
  }

  export type SystemUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}