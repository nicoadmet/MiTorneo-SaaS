/**
 * Client
 **/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Organizer
 *
 */
export type Organizer = $Result.DefaultSelection<Prisma.$OrganizerPayload>;
/**
 * Model Tournament
 *
 */
export type Tournament = $Result.DefaultSelection<Prisma.$TournamentPayload>;
/**
 * Model Team
 *
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>;
/**
 * Model Match
 *
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>;
/**
 * Model Standings
 *
 */
export type Standings = $Result.DefaultSelection<Prisma.$StandingsPayload>;
/**
 * Model MatchEvent
 *
 */
export type MatchEvent = $Result.DefaultSelection<Prisma.$MatchEventPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const TournamentFormat: {
    LEAGUE: 'LEAGUE';
    PLAYOFF: 'PLAYOFF';
    GROUP_STAGE: 'GROUP_STAGE';
  };

  export type TournamentFormat =
    (typeof TournamentFormat)[keyof typeof TournamentFormat];

  export const TournamentStatus: {
    UPCOMING: 'UPCOMING';
    IN_PROGRESS: 'IN_PROGRESS';
    FINISHED: 'FINISHED';
  };

  export type TournamentStatus =
    (typeof TournamentStatus)[keyof typeof TournamentStatus];

  export const MatchStatus: {
    SCHEDULED: 'SCHEDULED';
    IN_PROGRESS: 'IN_PROGRESS';
    FINISHED: 'FINISHED';
    SUSPENDED: 'SUSPENDED';
  };

  export type MatchStatus = (typeof MatchStatus)[keyof typeof MatchStatus];

  export const EventType: {
    GOAL: 'GOAL';
    YELLOW_CARD: 'YELLOW_CARD';
    RED_CARD: 'RED_CARD';
    SUSPENSION: 'SUSPENSION';
  };

  export type EventType = (typeof EventType)[keyof typeof EventType];
}

export type TournamentFormat = $Enums.TournamentFormat;

export const TournamentFormat: typeof $Enums.TournamentFormat;

export type TournamentStatus = $Enums.TournamentStatus;

export const TournamentStatus: typeof $Enums.TournamentStatus;

export type MatchStatus = $Enums.MatchStatus;

export const MatchStatus: typeof $Enums.MatchStatus;

export type EventType = $Enums.EventType;

export const EventType: typeof $Enums.EventType;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Organizers
 * const organizers = await prisma.organizer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Organizers
   * const organizers = await prisma.organizer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.organizer`: Exposes CRUD operations for the **Organizer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Organizers
   * const organizers = await prisma.organizer.findMany()
   * ```
   */
  get organizer(): Prisma.OrganizerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tournament`: Exposes CRUD operations for the **Tournament** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tournaments
   * const tournaments = await prisma.tournament.findMany()
   * ```
   */
  get tournament(): Prisma.TournamentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Teams
   * const teams = await prisma.team.findMany()
   * ```
   */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Matches
   * const matches = await prisma.match.findMany()
   * ```
   */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.standings`: Exposes CRUD operations for the **Standings** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Standings
   * const standings = await prisma.standings.findMany()
   * ```
   */
  get standings(): Prisma.StandingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matchEvent`: Exposes CRUD operations for the **MatchEvent** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more MatchEvents
   * const matchEvents = await prisma.matchEvent.findMany()
   * ```
   */
  get matchEvent(): Prisma.MatchEventDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string;
    engine: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Organizer: 'Organizer';
    Tournament: 'Tournament';
    Team: 'Team';
    Match: 'Match';
    Standings: 'Standings';
    MatchEvent: 'MatchEvent';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'organizer'
        | 'tournament'
        | 'team'
        | 'match'
        | 'standings'
        | 'matchEvent';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Organizer: {
        payload: Prisma.$OrganizerPayload<ExtArgs>;
        fields: Prisma.OrganizerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OrganizerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OrganizerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>;
          };
          findFirst: {
            args: Prisma.OrganizerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OrganizerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>;
          };
          findMany: {
            args: Prisma.OrganizerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>[];
          };
          create: {
            args: Prisma.OrganizerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>;
          };
          createMany: {
            args: Prisma.OrganizerCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.OrganizerCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>[];
          };
          delete: {
            args: Prisma.OrganizerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>;
          };
          update: {
            args: Prisma.OrganizerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>;
          };
          deleteMany: {
            args: Prisma.OrganizerDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.OrganizerUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.OrganizerUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>[];
          };
          upsert: {
            args: Prisma.OrganizerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizerPayload>;
          };
          aggregate: {
            args: Prisma.OrganizerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganizer>;
          };
          groupBy: {
            args: Prisma.OrganizerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizerGroupByOutputType>[];
          };
          count: {
            args: Prisma.OrganizerCountArgs<ExtArgs>;
            result: $Utils.Optional<OrganizerCountAggregateOutputType> | number;
          };
        };
      };
      Tournament: {
        payload: Prisma.$TournamentPayload<ExtArgs>;
        fields: Prisma.TournamentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TournamentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TournamentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>;
          };
          findFirst: {
            args: Prisma.TournamentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TournamentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>;
          };
          findMany: {
            args: Prisma.TournamentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[];
          };
          create: {
            args: Prisma.TournamentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>;
          };
          createMany: {
            args: Prisma.TournamentCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TournamentCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[];
          };
          delete: {
            args: Prisma.TournamentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>;
          };
          update: {
            args: Prisma.TournamentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>;
          };
          deleteMany: {
            args: Prisma.TournamentDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TournamentUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TournamentUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[];
          };
          upsert: {
            args: Prisma.TournamentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>;
          };
          aggregate: {
            args: Prisma.TournamentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTournament>;
          };
          groupBy: {
            args: Prisma.TournamentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TournamentGroupByOutputType>[];
          };
          count: {
            args: Prisma.TournamentCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<TournamentCountAggregateOutputType>
              | number;
          };
        };
      };
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>;
        fields: Prisma.TeamFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>;
          };
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>;
          };
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[];
          };
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>;
          };
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[];
          };
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>;
          };
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>;
          };
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[];
          };
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>;
          };
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTeam>;
          };
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TeamGroupByOutputType>[];
          };
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>;
            result: $Utils.Optional<TeamCountAggregateOutputType> | number;
          };
        };
      };
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>;
        fields: Prisma.MatchFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>;
          };
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>;
          };
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[];
          };
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>;
          };
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[];
          };
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>;
          };
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>;
          };
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[];
          };
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>;
          };
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMatch>;
          };
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MatchGroupByOutputType>[];
          };
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>;
            result: $Utils.Optional<MatchCountAggregateOutputType> | number;
          };
        };
      };
      Standings: {
        payload: Prisma.$StandingsPayload<ExtArgs>;
        fields: Prisma.StandingsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.StandingsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StandingsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.StandingsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StandingsPayload>;
          };
          findFirst: {
            args: Prisma.StandingsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StandingsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.StandingsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StandingsPayload>;
          };
          findMany: {
            args: Prisma.StandingsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StandingsPayload>[];
          };
          create: {
            args: Prisma.StandingsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StandingsPayload>;
          };
          createMany: {
            args: Prisma.StandingsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.StandingsCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StandingsPayload>[];
          };
          delete: {
            args: Prisma.StandingsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StandingsPayload>;
          };
          update: {
            args: Prisma.StandingsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StandingsPayload>;
          };
          deleteMany: {
            args: Prisma.StandingsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.StandingsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.StandingsUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StandingsPayload>[];
          };
          upsert: {
            args: Prisma.StandingsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$StandingsPayload>;
          };
          aggregate: {
            args: Prisma.StandingsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateStandings>;
          };
          groupBy: {
            args: Prisma.StandingsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<StandingsGroupByOutputType>[];
          };
          count: {
            args: Prisma.StandingsCountArgs<ExtArgs>;
            result: $Utils.Optional<StandingsCountAggregateOutputType> | number;
          };
        };
      };
      MatchEvent: {
        payload: Prisma.$MatchEventPayload<ExtArgs>;
        fields: Prisma.MatchEventFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MatchEventFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchEventPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MatchEventFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchEventPayload>;
          };
          findFirst: {
            args: Prisma.MatchEventFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchEventPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MatchEventFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchEventPayload>;
          };
          findMany: {
            args: Prisma.MatchEventFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchEventPayload>[];
          };
          create: {
            args: Prisma.MatchEventCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchEventPayload>;
          };
          createMany: {
            args: Prisma.MatchEventCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.MatchEventCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchEventPayload>[];
          };
          delete: {
            args: Prisma.MatchEventDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchEventPayload>;
          };
          update: {
            args: Prisma.MatchEventUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchEventPayload>;
          };
          deleteMany: {
            args: Prisma.MatchEventDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.MatchEventUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.MatchEventUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchEventPayload>[];
          };
          upsert: {
            args: Prisma.MatchEventUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchEventPayload>;
          };
          aggregate: {
            args: Prisma.MatchEventAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMatchEvent>;
          };
          groupBy: {
            args: Prisma.MatchEventGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MatchEventGroupByOutputType>[];
          };
          count: {
            args: Prisma.MatchEventCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<MatchEventCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory;
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string;
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
    omit?: Prisma.GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
  }
  export type GlobalOmitConfig = {
    organizer?: OrganizerOmit;
    tournament?: TournamentOmit;
    team?: TeamOmit;
    match?: MatchOmit;
    standings?: StandingsOmit;
    matchEvent?: MatchEventOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
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
    | 'groupBy';

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type OrganizerCountOutputType
   */

  export type OrganizerCountOutputType = {
    tournaments: number;
  };

  export type OrganizerCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tournaments?: boolean | OrganizerCountOutputTypeCountTournamentsArgs;
  };

  // Custom InputTypes
  /**
   * OrganizerCountOutputType without action
   */
  export type OrganizerCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizerCountOutputType
     */
    select?: OrganizerCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrganizerCountOutputType without action
   */
  export type OrganizerCountOutputTypeCountTournamentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TournamentWhereInput;
  };

  /**
   * Count Type TournamentCountOutputType
   */

  export type TournamentCountOutputType = {
    teams: number;
    matches: number;
    standings: number;
    match_events: number;
  };

  export type TournamentCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    teams?: boolean | TournamentCountOutputTypeCountTeamsArgs;
    matches?: boolean | TournamentCountOutputTypeCountMatchesArgs;
    standings?: boolean | TournamentCountOutputTypeCountStandingsArgs;
    match_events?: boolean | TournamentCountOutputTypeCountMatch_eventsArgs;
  };

  // Custom InputTypes
  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TournamentCountOutputType
     */
    select?: TournamentCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountTeamsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TeamWhereInput;
  };

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountMatchesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MatchWhereInput;
  };

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountStandingsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: StandingsWhereInput;
  };

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountMatch_eventsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MatchEventWhereInput;
  };

  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    standings: number;
    match_events: number;
    matches_as_team_a: number;
    matches_as_team_b: number;
  };

  export type TeamCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    standings?: boolean | TeamCountOutputTypeCountStandingsArgs;
    match_events?: boolean | TeamCountOutputTypeCountMatch_eventsArgs;
    matches_as_team_a?: boolean | TeamCountOutputTypeCountMatches_as_team_aArgs;
    matches_as_team_b?: boolean | TeamCountOutputTypeCountMatches_as_team_bArgs;
  };

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountStandingsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: StandingsWhereInput;
  };

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMatch_eventsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MatchEventWhereInput;
  };

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMatches_as_team_aArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MatchWhereInput;
  };

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMatches_as_team_bArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MatchWhereInput;
  };

  /**
   * Count Type MatchCountOutputType
   */

  export type MatchCountOutputType = {
    events: number;
  };

  export type MatchCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    events?: boolean | MatchCountOutputTypeCountEventsArgs;
  };

  // Custom InputTypes
  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MatchCountOutputType
     */
    select?: MatchCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountEventsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MatchEventWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Organizer
   */

  export type AggregateOrganizer = {
    _count: OrganizerCountAggregateOutputType | null;
    _min: OrganizerMinAggregateOutputType | null;
    _max: OrganizerMaxAggregateOutputType | null;
  };

  export type OrganizerMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OrganizerMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OrganizerCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    password: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type OrganizerMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OrganizerMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OrganizerCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type OrganizerAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Organizer to aggregate.
     */
    where?: OrganizerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organizers to fetch.
     */
    orderBy?:
      | OrganizerOrderByWithRelationInput
      | OrganizerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OrganizerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organizers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organizers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Organizers
     **/
    _count?: true | OrganizerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizerMaxAggregateInputType;
  };

  export type GetOrganizerAggregateType<T extends OrganizerAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganizer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizer[P]>
      : GetScalarType<T[P], AggregateOrganizer[P]>;
  };

  export type OrganizerGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrganizerWhereInput;
    orderBy?:
      | OrganizerOrderByWithAggregationInput
      | OrganizerOrderByWithAggregationInput[];
    by: OrganizerScalarFieldEnum[] | OrganizerScalarFieldEnum;
    having?: OrganizerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizerCountAggregateInputType | true;
    _min?: OrganizerMinAggregateInputType;
    _max?: OrganizerMaxAggregateInputType;
  };

  export type OrganizerGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    _count: OrganizerCountAggregateOutputType | null;
    _min: OrganizerMinAggregateOutputType | null;
    _max: OrganizerMaxAggregateOutputType | null;
  };

  type GetOrganizerGroupByPayload<T extends OrganizerGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<OrganizerGroupByOutputType, T['by']> & {
          [P in keyof T & keyof OrganizerGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizerGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizerGroupByOutputType[P]>;
        }
      >
    >;

  export type OrganizerSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tournaments?: boolean | Organizer$tournamentsArgs<ExtArgs>;
      _count?: boolean | OrganizerCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['organizer']
  >;

  export type OrganizerSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['organizer']
  >;

  export type OrganizerSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['organizer']
  >;

  export type OrganizerSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type OrganizerOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'email' | 'password' | 'created_at' | 'updated_at',
    ExtArgs['result']['organizer']
  >;
  export type OrganizerInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tournaments?: boolean | Organizer$tournamentsArgs<ExtArgs>;
    _count?: boolean | OrganizerCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type OrganizerIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type OrganizerIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $OrganizerPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Organizer';
    objects: {
      tournaments: Prisma.$TournamentPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        email: string;
        password: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['organizer']
    >;
    composites: {};
  };

  type OrganizerGetPayload<
    S extends boolean | null | undefined | OrganizerDefaultArgs,
  > = $Result.GetResult<Prisma.$OrganizerPayload, S>;

  type OrganizerCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    OrganizerFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: OrganizerCountAggregateInputType | true;
  };

  export interface OrganizerDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Organizer'];
      meta: { name: 'Organizer' };
    };
    /**
     * Find zero or one Organizer that matches the filter.
     * @param {OrganizerFindUniqueArgs} args - Arguments to find a Organizer
     * @example
     * // Get one Organizer
     * const organizer = await prisma.organizer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizerFindUniqueArgs>(
      args: SelectSubset<T, OrganizerFindUniqueArgs<ExtArgs>>,
    ): Prisma__OrganizerClient<
      $Result.GetResult<
        Prisma.$OrganizerPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Organizer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizerFindUniqueOrThrowArgs} args - Arguments to find a Organizer
     * @example
     * // Get one Organizer
     * const organizer = await prisma.organizer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizerFindUniqueOrThrowArgs>(
      args: SelectSubset<T, OrganizerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__OrganizerClient<
      $Result.GetResult<
        Prisma.$OrganizerPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Organizer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerFindFirstArgs} args - Arguments to find a Organizer
     * @example
     * // Get one Organizer
     * const organizer = await prisma.organizer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizerFindFirstArgs>(
      args?: SelectSubset<T, OrganizerFindFirstArgs<ExtArgs>>,
    ): Prisma__OrganizerClient<
      $Result.GetResult<
        Prisma.$OrganizerPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Organizer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerFindFirstOrThrowArgs} args - Arguments to find a Organizer
     * @example
     * // Get one Organizer
     * const organizer = await prisma.organizer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrganizerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__OrganizerClient<
      $Result.GetResult<
        Prisma.$OrganizerPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Organizers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizers
     * const organizers = await prisma.organizer.findMany()
     *
     * // Get first 10 Organizers
     * const organizers = await prisma.organizer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organizerWithIdOnly = await prisma.organizer.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OrganizerFindManyArgs>(
      args?: SelectSubset<T, OrganizerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrganizerPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Organizer.
     * @param {OrganizerCreateArgs} args - Arguments to create a Organizer.
     * @example
     * // Create one Organizer
     * const Organizer = await prisma.organizer.create({
     *   data: {
     *     // ... data to create a Organizer
     *   }
     * })
     *
     */
    create<T extends OrganizerCreateArgs>(
      args: SelectSubset<T, OrganizerCreateArgs<ExtArgs>>,
    ): Prisma__OrganizerClient<
      $Result.GetResult<
        Prisma.$OrganizerPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Organizers.
     * @param {OrganizerCreateManyArgs} args - Arguments to create many Organizers.
     * @example
     * // Create many Organizers
     * const organizer = await prisma.organizer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OrganizerCreateManyArgs>(
      args?: SelectSubset<T, OrganizerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Organizers and returns the data saved in the database.
     * @param {OrganizerCreateManyAndReturnArgs} args - Arguments to create many Organizers.
     * @example
     * // Create many Organizers
     * const organizer = await prisma.organizer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Organizers and only return the `id`
     * const organizerWithIdOnly = await prisma.organizer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OrganizerCreateManyAndReturnArgs>(
      args?: SelectSubset<T, OrganizerCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrganizerPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Organizer.
     * @param {OrganizerDeleteArgs} args - Arguments to delete one Organizer.
     * @example
     * // Delete one Organizer
     * const Organizer = await prisma.organizer.delete({
     *   where: {
     *     // ... filter to delete one Organizer
     *   }
     * })
     *
     */
    delete<T extends OrganizerDeleteArgs>(
      args: SelectSubset<T, OrganizerDeleteArgs<ExtArgs>>,
    ): Prisma__OrganizerClient<
      $Result.GetResult<
        Prisma.$OrganizerPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Organizer.
     * @param {OrganizerUpdateArgs} args - Arguments to update one Organizer.
     * @example
     * // Update one Organizer
     * const organizer = await prisma.organizer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OrganizerUpdateArgs>(
      args: SelectSubset<T, OrganizerUpdateArgs<ExtArgs>>,
    ): Prisma__OrganizerClient<
      $Result.GetResult<
        Prisma.$OrganizerPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Organizers.
     * @param {OrganizerDeleteManyArgs} args - Arguments to filter Organizers to delete.
     * @example
     * // Delete a few Organizers
     * const { count } = await prisma.organizer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OrganizerDeleteManyArgs>(
      args?: SelectSubset<T, OrganizerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizers
     * const organizer = await prisma.organizer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OrganizerUpdateManyArgs>(
      args: SelectSubset<T, OrganizerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizers and returns the data updated in the database.
     * @param {OrganizerUpdateManyAndReturnArgs} args - Arguments to update many Organizers.
     * @example
     * // Update many Organizers
     * const organizer = await prisma.organizer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Organizers and only return the `id`
     * const organizerWithIdOnly = await prisma.organizer.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrganizerUpdateManyAndReturnArgs>(
      args: SelectSubset<T, OrganizerUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrganizerPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Organizer.
     * @param {OrganizerUpsertArgs} args - Arguments to update or create a Organizer.
     * @example
     * // Update or create a Organizer
     * const organizer = await prisma.organizer.upsert({
     *   create: {
     *     // ... data to create a Organizer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organizer we want to update
     *   }
     * })
     */
    upsert<T extends OrganizerUpsertArgs>(
      args: SelectSubset<T, OrganizerUpsertArgs<ExtArgs>>,
    ): Prisma__OrganizerClient<
      $Result.GetResult<
        Prisma.$OrganizerPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Organizers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerCountArgs} args - Arguments to filter Organizers to count.
     * @example
     * // Count the number of Organizers
     * const count = await prisma.organizer.count({
     *   where: {
     *     // ... the filter for the Organizers we want to count
     *   }
     * })
     **/
    count<T extends OrganizerCountArgs>(
      args?: Subset<T, OrganizerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Organizer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizerAggregateArgs>(
      args: Subset<T, OrganizerAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizerAggregateType<T>>;

    /**
     * Group by Organizer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizerGroupByArgs} args - Group by arguments.
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
      T extends OrganizerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizerGroupByArgs['orderBy'] }
        : { orderBy?: OrganizerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, OrganizerGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetOrganizerGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Organizer model
     */
    readonly fields: OrganizerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organizer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    tournaments<T extends Organizer$tournamentsArgs<ExtArgs> = {}>(
      args?: Subset<T, Organizer$tournamentsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$TournamentPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Organizer model
   */
  interface OrganizerFieldRefs {
    readonly id: FieldRef<'Organizer', 'String'>;
    readonly name: FieldRef<'Organizer', 'String'>;
    readonly email: FieldRef<'Organizer', 'String'>;
    readonly password: FieldRef<'Organizer', 'String'>;
    readonly created_at: FieldRef<'Organizer', 'DateTime'>;
    readonly updated_at: FieldRef<'Organizer', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Organizer findUnique
   */
  export type OrganizerFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organizer
     */
    omit?: OrganizerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null;
    /**
     * Filter, which Organizer to fetch.
     */
    where: OrganizerWhereUniqueInput;
  };

  /**
   * Organizer findUniqueOrThrow
   */
  export type OrganizerFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organizer
     */
    omit?: OrganizerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null;
    /**
     * Filter, which Organizer to fetch.
     */
    where: OrganizerWhereUniqueInput;
  };

  /**
   * Organizer findFirst
   */
  export type OrganizerFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organizer
     */
    omit?: OrganizerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null;
    /**
     * Filter, which Organizer to fetch.
     */
    where?: OrganizerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organizers to fetch.
     */
    orderBy?:
      | OrganizerOrderByWithRelationInput
      | OrganizerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Organizers.
     */
    cursor?: OrganizerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organizers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organizers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Organizers.
     */
    distinct?: OrganizerScalarFieldEnum | OrganizerScalarFieldEnum[];
  };

  /**
   * Organizer findFirstOrThrow
   */
  export type OrganizerFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organizer
     */
    omit?: OrganizerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null;
    /**
     * Filter, which Organizer to fetch.
     */
    where?: OrganizerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organizers to fetch.
     */
    orderBy?:
      | OrganizerOrderByWithRelationInput
      | OrganizerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Organizers.
     */
    cursor?: OrganizerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organizers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organizers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Organizers.
     */
    distinct?: OrganizerScalarFieldEnum | OrganizerScalarFieldEnum[];
  };

  /**
   * Organizer findMany
   */
  export type OrganizerFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organizer
     */
    omit?: OrganizerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null;
    /**
     * Filter, which Organizers to fetch.
     */
    where?: OrganizerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organizers to fetch.
     */
    orderBy?:
      | OrganizerOrderByWithRelationInput
      | OrganizerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Organizers.
     */
    cursor?: OrganizerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organizers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organizers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Organizers.
     */
    distinct?: OrganizerScalarFieldEnum | OrganizerScalarFieldEnum[];
  };

  /**
   * Organizer create
   */
  export type OrganizerCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organizer
     */
    omit?: OrganizerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null;
    /**
     * The data needed to create a Organizer.
     */
    data: XOR<OrganizerCreateInput, OrganizerUncheckedCreateInput>;
  };

  /**
   * Organizer createMany
   */
  export type OrganizerCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Organizers.
     */
    data: OrganizerCreateManyInput | OrganizerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Organizer createManyAndReturn
   */
  export type OrganizerCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Organizer
     */
    omit?: OrganizerOmit<ExtArgs> | null;
    /**
     * The data used to create many Organizers.
     */
    data: OrganizerCreateManyInput | OrganizerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Organizer update
   */
  export type OrganizerUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organizer
     */
    omit?: OrganizerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null;
    /**
     * The data needed to update a Organizer.
     */
    data: XOR<OrganizerUpdateInput, OrganizerUncheckedUpdateInput>;
    /**
     * Choose, which Organizer to update.
     */
    where: OrganizerWhereUniqueInput;
  };

  /**
   * Organizer updateMany
   */
  export type OrganizerUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Organizers.
     */
    data: XOR<
      OrganizerUpdateManyMutationInput,
      OrganizerUncheckedUpdateManyInput
    >;
    /**
     * Filter which Organizers to update
     */
    where?: OrganizerWhereInput;
    /**
     * Limit how many Organizers to update.
     */
    limit?: number;
  };

  /**
   * Organizer updateManyAndReturn
   */
  export type OrganizerUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Organizer
     */
    omit?: OrganizerOmit<ExtArgs> | null;
    /**
     * The data used to update Organizers.
     */
    data: XOR<
      OrganizerUpdateManyMutationInput,
      OrganizerUncheckedUpdateManyInput
    >;
    /**
     * Filter which Organizers to update
     */
    where?: OrganizerWhereInput;
    /**
     * Limit how many Organizers to update.
     */
    limit?: number;
  };

  /**
   * Organizer upsert
   */
  export type OrganizerUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organizer
     */
    omit?: OrganizerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null;
    /**
     * The filter to search for the Organizer to update in case it exists.
     */
    where: OrganizerWhereUniqueInput;
    /**
     * In case the Organizer found by the `where` argument doesn't exist, create a new Organizer with this data.
     */
    create: XOR<OrganizerCreateInput, OrganizerUncheckedCreateInput>;
    /**
     * In case the Organizer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizerUpdateInput, OrganizerUncheckedUpdateInput>;
  };

  /**
   * Organizer delete
   */
  export type OrganizerDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organizer
     */
    omit?: OrganizerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null;
    /**
     * Filter which Organizer to delete.
     */
    where: OrganizerWhereUniqueInput;
  };

  /**
   * Organizer deleteMany
   */
  export type OrganizerDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Organizers to delete
     */
    where?: OrganizerWhereInput;
    /**
     * Limit how many Organizers to delete.
     */
    limit?: number;
  };

  /**
   * Organizer.tournaments
   */
  export type Organizer$tournamentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null;
    where?: TournamentWhereInput;
    orderBy?:
      | TournamentOrderByWithRelationInput
      | TournamentOrderByWithRelationInput[];
    cursor?: TournamentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[];
  };

  /**
   * Organizer without action
   */
  export type OrganizerDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organizer
     */
    select?: OrganizerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organizer
     */
    omit?: OrganizerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizerInclude<ExtArgs> | null;
  };

  /**
   * Model Tournament
   */

  export type AggregateTournament = {
    _count: TournamentCountAggregateOutputType | null;
    _avg: TournamentAvgAggregateOutputType | null;
    _sum: TournamentSumAggregateOutputType | null;
    _min: TournamentMinAggregateOutputType | null;
    _max: TournamentMaxAggregateOutputType | null;
  };

  export type TournamentAvgAggregateOutputType = {
    points_win: number | null;
    points_draw: number | null;
    points_loss: number | null;
    playoff_teams: number | null;
  };

  export type TournamentSumAggregateOutputType = {
    points_win: number | null;
    points_draw: number | null;
    points_loss: number | null;
    playoff_teams: number | null;
  };

  export type TournamentMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    rules: string | null;
    format: $Enums.TournamentFormat | null;
    status: $Enums.TournamentStatus | null;
    points_win: number | null;
    points_draw: number | null;
    points_loss: number | null;
    playoff_teams: number | null;
    organizer_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TournamentMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    rules: string | null;
    format: $Enums.TournamentFormat | null;
    status: $Enums.TournamentStatus | null;
    points_win: number | null;
    points_draw: number | null;
    points_loss: number | null;
    playoff_teams: number | null;
    organizer_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TournamentCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    rules: number;
    format: number;
    status: number;
    points_win: number;
    points_draw: number;
    points_loss: number;
    playoff_teams: number;
    organizer_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TournamentAvgAggregateInputType = {
    points_win?: true;
    points_draw?: true;
    points_loss?: true;
    playoff_teams?: true;
  };

  export type TournamentSumAggregateInputType = {
    points_win?: true;
    points_draw?: true;
    points_loss?: true;
    playoff_teams?: true;
  };

  export type TournamentMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    rules?: true;
    format?: true;
    status?: true;
    points_win?: true;
    points_draw?: true;
    points_loss?: true;
    playoff_teams?: true;
    organizer_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TournamentMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    rules?: true;
    format?: true;
    status?: true;
    points_win?: true;
    points_draw?: true;
    points_loss?: true;
    playoff_teams?: true;
    organizer_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TournamentCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    rules?: true;
    format?: true;
    status?: true;
    points_win?: true;
    points_draw?: true;
    points_loss?: true;
    playoff_teams?: true;
    organizer_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TournamentAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Tournament to aggregate.
     */
    where?: TournamentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tournaments to fetch.
     */
    orderBy?:
      | TournamentOrderByWithRelationInput
      | TournamentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TournamentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tournaments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Tournaments
     **/
    _count?: true | TournamentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TournamentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TournamentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TournamentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TournamentMaxAggregateInputType;
  };

  export type GetTournamentAggregateType<T extends TournamentAggregateArgs> = {
    [P in keyof T & keyof AggregateTournament]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournament[P]>
      : GetScalarType<T[P], AggregateTournament[P]>;
  };

  export type TournamentGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TournamentWhereInput;
    orderBy?:
      | TournamentOrderByWithAggregationInput
      | TournamentOrderByWithAggregationInput[];
    by: TournamentScalarFieldEnum[] | TournamentScalarFieldEnum;
    having?: TournamentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TournamentCountAggregateInputType | true;
    _avg?: TournamentAvgAggregateInputType;
    _sum?: TournamentSumAggregateInputType;
    _min?: TournamentMinAggregateInputType;
    _max?: TournamentMaxAggregateInputType;
  };

  export type TournamentGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    rules: string | null;
    format: $Enums.TournamentFormat;
    status: $Enums.TournamentStatus;
    points_win: number;
    points_draw: number;
    points_loss: number;
    playoff_teams: number | null;
    organizer_id: string;
    created_at: Date;
    updated_at: Date;
    _count: TournamentCountAggregateOutputType | null;
    _avg: TournamentAvgAggregateOutputType | null;
    _sum: TournamentSumAggregateOutputType | null;
    _min: TournamentMinAggregateOutputType | null;
    _max: TournamentMaxAggregateOutputType | null;
  };

  type GetTournamentGroupByPayload<T extends TournamentGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<TournamentGroupByOutputType, T['by']> & {
          [P in keyof T & keyof TournamentGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentGroupByOutputType[P]>;
        }
      >
    >;

  export type TournamentSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      rules?: boolean;
      format?: boolean;
      status?: boolean;
      points_win?: boolean;
      points_draw?: boolean;
      points_loss?: boolean;
      playoff_teams?: boolean;
      organizer_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      organizer?: boolean | OrganizerDefaultArgs<ExtArgs>;
      teams?: boolean | Tournament$teamsArgs<ExtArgs>;
      matches?: boolean | Tournament$matchesArgs<ExtArgs>;
      standings?: boolean | Tournament$standingsArgs<ExtArgs>;
      match_events?: boolean | Tournament$match_eventsArgs<ExtArgs>;
      _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['tournament']
  >;

  export type TournamentSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      rules?: boolean;
      format?: boolean;
      status?: boolean;
      points_win?: boolean;
      points_draw?: boolean;
      points_loss?: boolean;
      playoff_teams?: boolean;
      organizer_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      organizer?: boolean | OrganizerDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['tournament']
  >;

  export type TournamentSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      rules?: boolean;
      format?: boolean;
      status?: boolean;
      points_win?: boolean;
      points_draw?: boolean;
      points_loss?: boolean;
      playoff_teams?: boolean;
      organizer_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      organizer?: boolean | OrganizerDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['tournament']
  >;

  export type TournamentSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    rules?: boolean;
    format?: boolean;
    status?: boolean;
    points_win?: boolean;
    points_draw?: boolean;
    points_loss?: boolean;
    playoff_teams?: boolean;
    organizer_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type TournamentOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'name'
    | 'description'
    | 'rules'
    | 'format'
    | 'status'
    | 'points_win'
    | 'points_draw'
    | 'points_loss'
    | 'playoff_teams'
    | 'organizer_id'
    | 'created_at'
    | 'updated_at',
    ExtArgs['result']['tournament']
  >;
  export type TournamentInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organizer?: boolean | OrganizerDefaultArgs<ExtArgs>;
    teams?: boolean | Tournament$teamsArgs<ExtArgs>;
    matches?: boolean | Tournament$matchesArgs<ExtArgs>;
    standings?: boolean | Tournament$standingsArgs<ExtArgs>;
    match_events?: boolean | Tournament$match_eventsArgs<ExtArgs>;
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type TournamentIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organizer?: boolean | OrganizerDefaultArgs<ExtArgs>;
  };
  export type TournamentIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organizer?: boolean | OrganizerDefaultArgs<ExtArgs>;
  };

  export type $TournamentPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Tournament';
    objects: {
      organizer: Prisma.$OrganizerPayload<ExtArgs>;
      teams: Prisma.$TeamPayload<ExtArgs>[];
      matches: Prisma.$MatchPayload<ExtArgs>[];
      standings: Prisma.$StandingsPayload<ExtArgs>[];
      match_events: Prisma.$MatchEventPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        rules: string | null;
        format: $Enums.TournamentFormat;
        status: $Enums.TournamentStatus;
        points_win: number;
        points_draw: number;
        points_loss: number;
        playoff_teams: number | null;
        organizer_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['tournament']
    >;
    composites: {};
  };

  type TournamentGetPayload<
    S extends boolean | null | undefined | TournamentDefaultArgs,
  > = $Result.GetResult<Prisma.$TournamentPayload, S>;

  type TournamentCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    TournamentFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: TournamentCountAggregateInputType | true;
  };

  export interface TournamentDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Tournament'];
      meta: { name: 'Tournament' };
    };
    /**
     * Find zero or one Tournament that matches the filter.
     * @param {TournamentFindUniqueArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentFindUniqueArgs>(
      args: SelectSubset<T, TournamentFindUniqueArgs<ExtArgs>>,
    ): Prisma__TournamentClient<
      $Result.GetResult<
        Prisma.$TournamentPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Tournament that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentFindUniqueOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TournamentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__TournamentClient<
      $Result.GetResult<
        Prisma.$TournamentPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Tournament that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentFindFirstArgs>(
      args?: SelectSubset<T, TournamentFindFirstArgs<ExtArgs>>,
    ): Prisma__TournamentClient<
      $Result.GetResult<
        Prisma.$TournamentPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Tournament that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TournamentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__TournamentClient<
      $Result.GetResult<
        Prisma.$TournamentPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Tournaments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tournaments
     * const tournaments = await prisma.tournament.findMany()
     *
     * // Get first 10 Tournaments
     * const tournaments = await prisma.tournament.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tournamentWithIdOnly = await prisma.tournament.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TournamentFindManyArgs>(
      args?: SelectSubset<T, TournamentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TournamentPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Tournament.
     * @param {TournamentCreateArgs} args - Arguments to create a Tournament.
     * @example
     * // Create one Tournament
     * const Tournament = await prisma.tournament.create({
     *   data: {
     *     // ... data to create a Tournament
     *   }
     * })
     *
     */
    create<T extends TournamentCreateArgs>(
      args: SelectSubset<T, TournamentCreateArgs<ExtArgs>>,
    ): Prisma__TournamentClient<
      $Result.GetResult<
        Prisma.$TournamentPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Tournaments.
     * @param {TournamentCreateManyArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TournamentCreateManyArgs>(
      args?: SelectSubset<T, TournamentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Tournaments and returns the data saved in the database.
     * @param {TournamentCreateManyAndReturnArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TournamentCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TournamentCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TournamentPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Tournament.
     * @param {TournamentDeleteArgs} args - Arguments to delete one Tournament.
     * @example
     * // Delete one Tournament
     * const Tournament = await prisma.tournament.delete({
     *   where: {
     *     // ... filter to delete one Tournament
     *   }
     * })
     *
     */
    delete<T extends TournamentDeleteArgs>(
      args: SelectSubset<T, TournamentDeleteArgs<ExtArgs>>,
    ): Prisma__TournamentClient<
      $Result.GetResult<
        Prisma.$TournamentPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Tournament.
     * @param {TournamentUpdateArgs} args - Arguments to update one Tournament.
     * @example
     * // Update one Tournament
     * const tournament = await prisma.tournament.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TournamentUpdateArgs>(
      args: SelectSubset<T, TournamentUpdateArgs<ExtArgs>>,
    ): Prisma__TournamentClient<
      $Result.GetResult<
        Prisma.$TournamentPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Tournaments.
     * @param {TournamentDeleteManyArgs} args - Arguments to filter Tournaments to delete.
     * @example
     * // Delete a few Tournaments
     * const { count } = await prisma.tournament.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TournamentDeleteManyArgs>(
      args?: SelectSubset<T, TournamentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TournamentUpdateManyArgs>(
      args: SelectSubset<T, TournamentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tournaments and returns the data updated in the database.
     * @param {TournamentUpdateManyAndReturnArgs} args - Arguments to update many Tournaments.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.updateManyAndReturn({
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
    updateManyAndReturn<T extends TournamentUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TournamentUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TournamentPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Tournament.
     * @param {TournamentUpsertArgs} args - Arguments to update or create a Tournament.
     * @example
     * // Update or create a Tournament
     * const tournament = await prisma.tournament.upsert({
     *   create: {
     *     // ... data to create a Tournament
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tournament we want to update
     *   }
     * })
     */
    upsert<T extends TournamentUpsertArgs>(
      args: SelectSubset<T, TournamentUpsertArgs<ExtArgs>>,
    ): Prisma__TournamentClient<
      $Result.GetResult<
        Prisma.$TournamentPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentCountArgs} args - Arguments to filter Tournaments to count.
     * @example
     * // Count the number of Tournaments
     * const count = await prisma.tournament.count({
     *   where: {
     *     // ... the filter for the Tournaments we want to count
     *   }
     * })
     **/
    count<T extends TournamentCountArgs>(
      args?: Subset<T, TournamentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TournamentAggregateArgs>(
      args: Subset<T, TournamentAggregateArgs>,
    ): Prisma.PrismaPromise<GetTournamentAggregateType<T>>;

    /**
     * Group by Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGroupByArgs} args - Group by arguments.
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
      T extends TournamentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentGroupByArgs['orderBy'] }
        : { orderBy?: TournamentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TournamentGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetTournamentGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Tournament model
     */
    readonly fields: TournamentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tournament.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    organizer<T extends OrganizerDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, OrganizerDefaultArgs<ExtArgs>>,
    ): Prisma__OrganizerClient<
      | $Result.GetResult<
          Prisma.$OrganizerPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    teams<T extends Tournament$teamsArgs<ExtArgs> = {}>(
      args?: Subset<T, Tournament$teamsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$TeamPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    matches<T extends Tournament$matchesArgs<ExtArgs> = {}>(
      args?: Subset<T, Tournament$matchesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MatchPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    standings<T extends Tournament$standingsArgs<ExtArgs> = {}>(
      args?: Subset<T, Tournament$standingsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$StandingsPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    match_events<T extends Tournament$match_eventsArgs<ExtArgs> = {}>(
      args?: Subset<T, Tournament$match_eventsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MatchEventPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Tournament model
   */
  interface TournamentFieldRefs {
    readonly id: FieldRef<'Tournament', 'String'>;
    readonly name: FieldRef<'Tournament', 'String'>;
    readonly description: FieldRef<'Tournament', 'String'>;
    readonly rules: FieldRef<'Tournament', 'String'>;
    readonly format: FieldRef<'Tournament', 'TournamentFormat'>;
    readonly status: FieldRef<'Tournament', 'TournamentStatus'>;
    readonly points_win: FieldRef<'Tournament', 'Int'>;
    readonly points_draw: FieldRef<'Tournament', 'Int'>;
    readonly points_loss: FieldRef<'Tournament', 'Int'>;
    readonly playoff_teams: FieldRef<'Tournament', 'Int'>;
    readonly organizer_id: FieldRef<'Tournament', 'String'>;
    readonly created_at: FieldRef<'Tournament', 'DateTime'>;
    readonly updated_at: FieldRef<'Tournament', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Tournament findUnique
   */
  export type TournamentFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null;
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput;
  };

  /**
   * Tournament findUniqueOrThrow
   */
  export type TournamentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null;
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput;
  };

  /**
   * Tournament findFirst
   */
  export type TournamentFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null;
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tournaments to fetch.
     */
    orderBy?:
      | TournamentOrderByWithRelationInput
      | TournamentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tournaments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[];
  };

  /**
   * Tournament findFirstOrThrow
   */
  export type TournamentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null;
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tournaments to fetch.
     */
    orderBy?:
      | TournamentOrderByWithRelationInput
      | TournamentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tournaments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[];
  };

  /**
   * Tournament findMany
   */
  export type TournamentFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null;
    /**
     * Filter, which Tournaments to fetch.
     */
    where?: TournamentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tournaments to fetch.
     */
    orderBy?:
      | TournamentOrderByWithRelationInput
      | TournamentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Tournaments.
     */
    cursor?: TournamentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tournaments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[];
  };

  /**
   * Tournament create
   */
  export type TournamentCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null;
    /**
     * The data needed to create a Tournament.
     */
    data: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>;
  };

  /**
   * Tournament createMany
   */
  export type TournamentCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Tournament createManyAndReturn
   */
  export type TournamentCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null;
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Tournament update
   */
  export type TournamentUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null;
    /**
     * The data needed to update a Tournament.
     */
    data: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>;
    /**
     * Choose, which Tournament to update.
     */
    where: TournamentWhereUniqueInput;
  };

  /**
   * Tournament updateMany
   */
  export type TournamentUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Tournaments.
     */
    data: XOR<
      TournamentUpdateManyMutationInput,
      TournamentUncheckedUpdateManyInput
    >;
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput;
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number;
  };

  /**
   * Tournament updateManyAndReturn
   */
  export type TournamentUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null;
    /**
     * The data used to update Tournaments.
     */
    data: XOR<
      TournamentUpdateManyMutationInput,
      TournamentUncheckedUpdateManyInput
    >;
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput;
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Tournament upsert
   */
  export type TournamentUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null;
    /**
     * The filter to search for the Tournament to update in case it exists.
     */
    where: TournamentWhereUniqueInput;
    /**
     * In case the Tournament found by the `where` argument doesn't exist, create a new Tournament with this data.
     */
    create: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>;
    /**
     * In case the Tournament was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>;
  };

  /**
   * Tournament delete
   */
  export type TournamentDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null;
    /**
     * Filter which Tournament to delete.
     */
    where: TournamentWhereUniqueInput;
  };

  /**
   * Tournament deleteMany
   */
  export type TournamentDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Tournaments to delete
     */
    where?: TournamentWhereInput;
    /**
     * Limit how many Tournaments to delete.
     */
    limit?: number;
  };

  /**
   * Tournament.teams
   */
  export type Tournament$teamsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    where?: TeamWhereInput;
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[];
    cursor?: TeamWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * Tournament.matches
   */
  export type Tournament$matchesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null;
    where?: MatchWhereInput;
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[];
    cursor?: MatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[];
  };

  /**
   * Tournament.standings
   */
  export type Tournament$standingsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Standings
     */
    select?: StandingsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Standings
     */
    omit?: StandingsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandingsInclude<ExtArgs> | null;
    where?: StandingsWhereInput;
    orderBy?:
      | StandingsOrderByWithRelationInput
      | StandingsOrderByWithRelationInput[];
    cursor?: StandingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: StandingsScalarFieldEnum | StandingsScalarFieldEnum[];
  };

  /**
   * Tournament.match_events
   */
  export type Tournament$match_eventsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatchEvent
     */
    omit?: MatchEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventInclude<ExtArgs> | null;
    where?: MatchEventWhereInput;
    orderBy?:
      | MatchEventOrderByWithRelationInput
      | MatchEventOrderByWithRelationInput[];
    cursor?: MatchEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MatchEventScalarFieldEnum | MatchEventScalarFieldEnum[];
  };

  /**
   * Tournament without action
   */
  export type TournamentDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null;
  };

  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null;
    _min: TeamMinAggregateOutputType | null;
    _max: TeamMaxAggregateOutputType | null;
  };

  export type TeamMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    logo_url: string | null;
    tournament_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TeamMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    logo_url: string | null;
    tournament_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TeamCountAggregateOutputType = {
    id: number;
    name: number;
    logo_url: number;
    tournament_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TeamMinAggregateInputType = {
    id?: true;
    name?: true;
    logo_url?: true;
    tournament_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TeamMaxAggregateInputType = {
    id?: true;
    name?: true;
    logo_url?: true;
    tournament_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TeamCountAggregateInputType = {
    id?: true;
    name?: true;
    logo_url?: true;
    tournament_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TeamAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Teams
     **/
    _count?: true | TeamCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TeamMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TeamMaxAggregateInputType;
  };

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
    [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>;
  };

  export type TeamGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TeamWhereInput;
    orderBy?:
      | TeamOrderByWithAggregationInput
      | TeamOrderByWithAggregationInput[];
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum;
    having?: TeamScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeamCountAggregateInputType | true;
    _min?: TeamMinAggregateInputType;
    _max?: TeamMaxAggregateInputType;
  };

  export type TeamGroupByOutputType = {
    id: string;
    name: string;
    logo_url: string | null;
    tournament_id: string;
    created_at: Date;
    updated_at: Date;
    _count: TeamCountAggregateOutputType | null;
    _min: TeamMinAggregateOutputType | null;
    _max: TeamMaxAggregateOutputType | null;
  };

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TeamGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
          : GetScalarType<T[P], TeamGroupByOutputType[P]>;
      }
    >
  >;

  export type TeamSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      logo_url?: boolean;
      tournament_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tournament?: boolean | TournamentDefaultArgs<ExtArgs>;
      standings?: boolean | Team$standingsArgs<ExtArgs>;
      match_events?: boolean | Team$match_eventsArgs<ExtArgs>;
      matches_as_team_a?: boolean | Team$matches_as_team_aArgs<ExtArgs>;
      matches_as_team_b?: boolean | Team$matches_as_team_bArgs<ExtArgs>;
      _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['team']
  >;

  export type TeamSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      logo_url?: boolean;
      tournament_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tournament?: boolean | TournamentDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['team']
  >;

  export type TeamSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      logo_url?: boolean;
      tournament_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tournament?: boolean | TournamentDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['team']
  >;

  export type TeamSelectScalar = {
    id?: boolean;
    name?: boolean;
    logo_url?: boolean;
    tournament_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type TeamOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'logo_url' | 'tournament_id' | 'created_at' | 'updated_at',
    ExtArgs['result']['team']
  >;
  export type TeamInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>;
    standings?: boolean | Team$standingsArgs<ExtArgs>;
    match_events?: boolean | Team$match_eventsArgs<ExtArgs>;
    matches_as_team_a?: boolean | Team$matches_as_team_aArgs<ExtArgs>;
    matches_as_team_b?: boolean | Team$matches_as_team_bArgs<ExtArgs>;
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type TeamIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>;
  };
  export type TeamIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>;
  };

  export type $TeamPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Team';
    objects: {
      tournament: Prisma.$TournamentPayload<ExtArgs>;
      standings: Prisma.$StandingsPayload<ExtArgs>[];
      match_events: Prisma.$MatchEventPayload<ExtArgs>[];
      matches_as_team_a: Prisma.$MatchPayload<ExtArgs>[];
      matches_as_team_b: Prisma.$MatchPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        logo_url: string | null;
        tournament_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['team']
    >;
    composites: {};
  };

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> =
    $Result.GetResult<Prisma.$TeamPayload, S>;

  type TeamCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TeamCountAggregateInputType | true;
  };

  export interface TeamDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Team'];
      meta: { name: 'Team' };
    };
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(
      args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>,
    ): Prisma__TeamClient<
      $Result.GetResult<
        Prisma.$TeamPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__TeamClient<
      $Result.GetResult<
        Prisma.$TeamPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(
      args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>,
    ): Prisma__TeamClient<
      $Result.GetResult<
        Prisma.$TeamPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__TeamClient<
      $Result.GetResult<
        Prisma.$TeamPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     *
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TeamFindManyArgs>(
      args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TeamPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     *
     */
    create<T extends TeamCreateArgs>(
      args: SelectSubset<T, TeamCreateArgs<ExtArgs>>,
    ): Prisma__TeamClient<
      $Result.GetResult<
        Prisma.$TeamPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TeamCreateManyArgs>(
      args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TeamPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     *
     */
    delete<T extends TeamDeleteArgs>(
      args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>,
    ): Prisma__TeamClient<
      $Result.GetResult<
        Prisma.$TeamPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TeamUpdateArgs>(
      args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>,
    ): Prisma__TeamClient<
      $Result.GetResult<
        Prisma.$TeamPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TeamDeleteManyArgs>(
      args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TeamUpdateManyArgs>(
      args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TeamPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(
      args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>,
    ): Prisma__TeamClient<
      $Result.GetResult<
        Prisma.$TeamPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
     **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(
      args: Subset<T, TeamAggregateArgs>,
    ): Prisma.PrismaPromise<GetTeamAggregateType<T>>;

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
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
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetTeamGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Team model
     */
    readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    tournament<T extends TournamentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TournamentDefaultArgs<ExtArgs>>,
    ): Prisma__TournamentClient<
      | $Result.GetResult<
          Prisma.$TournamentPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    standings<T extends Team$standingsArgs<ExtArgs> = {}>(
      args?: Subset<T, Team$standingsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$StandingsPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    match_events<T extends Team$match_eventsArgs<ExtArgs> = {}>(
      args?: Subset<T, Team$match_eventsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MatchEventPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    matches_as_team_a<T extends Team$matches_as_team_aArgs<ExtArgs> = {}>(
      args?: Subset<T, Team$matches_as_team_aArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MatchPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    matches_as_team_b<T extends Team$matches_as_team_bArgs<ExtArgs> = {}>(
      args?: Subset<T, Team$matches_as_team_bArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MatchPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<'Team', 'String'>;
    readonly name: FieldRef<'Team', 'String'>;
    readonly logo_url: FieldRef<'Team', 'String'>;
    readonly tournament_id: FieldRef<'Team', 'String'>;
    readonly created_at: FieldRef<'Team', 'DateTime'>;
    readonly updated_at: FieldRef<'Team', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput;
  };

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput;
  };

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * Team create
   */
  export type TeamCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>;
  };

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Team update
   */
  export type TeamUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>;
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput;
  };

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>;
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput;
    /**
     * Limit how many Teams to update.
     */
    limit?: number;
  };

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>;
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput;
    /**
     * Limit how many Teams to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput;
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>;
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>;
  };

  /**
   * Team delete
   */
  export type TeamDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput;
  };

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput;
    /**
     * Limit how many Teams to delete.
     */
    limit?: number;
  };

  /**
   * Team.standings
   */
  export type Team$standingsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Standings
     */
    select?: StandingsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Standings
     */
    omit?: StandingsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandingsInclude<ExtArgs> | null;
    where?: StandingsWhereInput;
    orderBy?:
      | StandingsOrderByWithRelationInput
      | StandingsOrderByWithRelationInput[];
    cursor?: StandingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: StandingsScalarFieldEnum | StandingsScalarFieldEnum[];
  };

  /**
   * Team.match_events
   */
  export type Team$match_eventsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatchEvent
     */
    omit?: MatchEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventInclude<ExtArgs> | null;
    where?: MatchEventWhereInput;
    orderBy?:
      | MatchEventOrderByWithRelationInput
      | MatchEventOrderByWithRelationInput[];
    cursor?: MatchEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MatchEventScalarFieldEnum | MatchEventScalarFieldEnum[];
  };

  /**
   * Team.matches_as_team_a
   */
  export type Team$matches_as_team_aArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null;
    where?: MatchWhereInput;
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[];
    cursor?: MatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[];
  };

  /**
   * Team.matches_as_team_b
   */
  export type Team$matches_as_team_bArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null;
    where?: MatchWhereInput;
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[];
    cursor?: MatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[];
  };

  /**
   * Team without action
   */
  export type TeamDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null;
  };

  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null;
    _avg: MatchAvgAggregateOutputType | null;
    _sum: MatchSumAggregateOutputType | null;
    _min: MatchMinAggregateOutputType | null;
    _max: MatchMaxAggregateOutputType | null;
  };

  export type MatchAvgAggregateOutputType = {
    team_a_score: number | null;
    team_b_score: number | null;
  };

  export type MatchSumAggregateOutputType = {
    team_a_score: number | null;
    team_b_score: number | null;
  };

  export type MatchMinAggregateOutputType = {
    id: string | null;
    tournament_id: string | null;
    team_a_id: string | null;
    team_b_id: string | null;
    team_a_score: number | null;
    team_b_score: number | null;
    match_date: Date | null;
    status: $Enums.MatchStatus | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type MatchMaxAggregateOutputType = {
    id: string | null;
    tournament_id: string | null;
    team_a_id: string | null;
    team_b_id: string | null;
    team_a_score: number | null;
    team_b_score: number | null;
    match_date: Date | null;
    status: $Enums.MatchStatus | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type MatchCountAggregateOutputType = {
    id: number;
    tournament_id: number;
    team_a_id: number;
    team_b_id: number;
    team_a_score: number;
    team_b_score: number;
    match_date: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type MatchAvgAggregateInputType = {
    team_a_score?: true;
    team_b_score?: true;
  };

  export type MatchSumAggregateInputType = {
    team_a_score?: true;
    team_b_score?: true;
  };

  export type MatchMinAggregateInputType = {
    id?: true;
    tournament_id?: true;
    team_a_id?: true;
    team_b_id?: true;
    team_a_score?: true;
    team_b_score?: true;
    match_date?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type MatchMaxAggregateInputType = {
    id?: true;
    tournament_id?: true;
    team_a_id?: true;
    team_b_id?: true;
    team_a_score?: true;
    team_b_score?: true;
    match_date?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type MatchCountAggregateInputType = {
    id?: true;
    tournament_id?: true;
    team_a_id?: true;
    team_b_id?: true;
    team_a_score?: true;
    team_b_score?: true;
    match_date?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type MatchAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Matches.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Matches
     **/
    _count?: true | MatchCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MatchAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MatchSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MatchMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MatchMaxAggregateInputType;
  };

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
    [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>;
  };

  export type MatchGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MatchWhereInput;
    orderBy?:
      | MatchOrderByWithAggregationInput
      | MatchOrderByWithAggregationInput[];
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum;
    having?: MatchScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MatchCountAggregateInputType | true;
    _avg?: MatchAvgAggregateInputType;
    _sum?: MatchSumAggregateInputType;
    _min?: MatchMinAggregateInputType;
    _max?: MatchMaxAggregateInputType;
  };

  export type MatchGroupByOutputType = {
    id: string;
    tournament_id: string;
    team_a_id: string;
    team_b_id: string;
    team_a_score: number;
    team_b_score: number;
    match_date: Date;
    status: $Enums.MatchStatus;
    created_at: Date;
    updated_at: Date;
    _count: MatchCountAggregateOutputType | null;
    _avg: MatchAvgAggregateOutputType | null;
    _sum: MatchSumAggregateOutputType | null;
    _min: MatchMinAggregateOutputType | null;
    _max: MatchMaxAggregateOutputType | null;
  };

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<MatchGroupByOutputType, T['by']> & {
          [P in keyof T & keyof MatchGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>;
        }
      >
    >;

  export type MatchSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      tournament_id?: boolean;
      team_a_id?: boolean;
      team_b_id?: boolean;
      team_a_score?: boolean;
      team_b_score?: boolean;
      match_date?: boolean;
      status?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tournament?: boolean | TournamentDefaultArgs<ExtArgs>;
      team_a?: boolean | TeamDefaultArgs<ExtArgs>;
      team_b?: boolean | TeamDefaultArgs<ExtArgs>;
      events?: boolean | Match$eventsArgs<ExtArgs>;
      _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['match']
  >;

  export type MatchSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      tournament_id?: boolean;
      team_a_id?: boolean;
      team_b_id?: boolean;
      team_a_score?: boolean;
      team_b_score?: boolean;
      match_date?: boolean;
      status?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tournament?: boolean | TournamentDefaultArgs<ExtArgs>;
      team_a?: boolean | TeamDefaultArgs<ExtArgs>;
      team_b?: boolean | TeamDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['match']
  >;

  export type MatchSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      tournament_id?: boolean;
      team_a_id?: boolean;
      team_b_id?: boolean;
      team_a_score?: boolean;
      team_b_score?: boolean;
      match_date?: boolean;
      status?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tournament?: boolean | TournamentDefaultArgs<ExtArgs>;
      team_a?: boolean | TeamDefaultArgs<ExtArgs>;
      team_b?: boolean | TeamDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['match']
  >;

  export type MatchSelectScalar = {
    id?: boolean;
    tournament_id?: boolean;
    team_a_id?: boolean;
    team_b_id?: boolean;
    team_a_score?: boolean;
    team_b_score?: boolean;
    match_date?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type MatchOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'tournament_id'
    | 'team_a_id'
    | 'team_b_id'
    | 'team_a_score'
    | 'team_b_score'
    | 'match_date'
    | 'status'
    | 'created_at'
    | 'updated_at',
    ExtArgs['result']['match']
  >;
  export type MatchInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>;
    team_a?: boolean | TeamDefaultArgs<ExtArgs>;
    team_b?: boolean | TeamDefaultArgs<ExtArgs>;
    events?: boolean | Match$eventsArgs<ExtArgs>;
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type MatchIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>;
    team_a?: boolean | TeamDefaultArgs<ExtArgs>;
    team_b?: boolean | TeamDefaultArgs<ExtArgs>;
  };
  export type MatchIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>;
    team_a?: boolean | TeamDefaultArgs<ExtArgs>;
    team_b?: boolean | TeamDefaultArgs<ExtArgs>;
  };

  export type $MatchPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Match';
    objects: {
      tournament: Prisma.$TournamentPayload<ExtArgs>;
      team_a: Prisma.$TeamPayload<ExtArgs>;
      team_b: Prisma.$TeamPayload<ExtArgs>;
      events: Prisma.$MatchEventPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        tournament_id: string;
        team_a_id: string;
        team_b_id: string;
        team_a_score: number;
        team_b_score: number;
        match_date: Date;
        status: $Enums.MatchStatus;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['match']
    >;
    composites: {};
  };

  type MatchGetPayload<
    S extends boolean | null | undefined | MatchDefaultArgs,
  > = $Result.GetResult<Prisma.$MatchPayload, S>;

  type MatchCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MatchCountAggregateInputType | true;
  };

  export interface MatchDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Match'];
      meta: { name: 'Match' };
    };
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(
      args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>,
    ): Prisma__MatchClient<
      $Result.GetResult<
        Prisma.$MatchPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__MatchClient<
      $Result.GetResult<
        Prisma.$MatchPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(
      args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>,
    ): Prisma__MatchClient<
      $Result.GetResult<
        Prisma.$MatchPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__MatchClient<
      $Result.GetResult<
        Prisma.$MatchPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     *
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MatchFindManyArgs>(
      args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MatchPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     *
     */
    create<T extends MatchCreateArgs>(
      args: SelectSubset<T, MatchCreateArgs<ExtArgs>>,
    ): Prisma__MatchClient<
      $Result.GetResult<
        Prisma.$MatchPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MatchCreateManyArgs>(
      args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(
      args?: SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MatchPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     *
     */
    delete<T extends MatchDeleteArgs>(
      args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>,
    ): Prisma__MatchClient<
      $Result.GetResult<
        Prisma.$MatchPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MatchUpdateArgs>(
      args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>,
    ): Prisma__MatchClient<
      $Result.GetResult<
        Prisma.$MatchPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MatchDeleteManyArgs>(
      args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MatchUpdateManyArgs>(
      args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.updateManyAndReturn({
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
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(
      args: SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MatchPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(
      args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>,
    ): Prisma__MatchClient<
      $Result.GetResult<
        Prisma.$MatchPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
     **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchAggregateArgs>(
      args: Subset<T, MatchAggregateArgs>,
    ): Prisma.PrismaPromise<GetMatchAggregateType<T>>;

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
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
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetMatchGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Match model
     */
    readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    tournament<T extends TournamentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TournamentDefaultArgs<ExtArgs>>,
    ): Prisma__TournamentClient<
      | $Result.GetResult<
          Prisma.$TournamentPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    team_a<T extends TeamDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TeamDefaultArgs<ExtArgs>>,
    ): Prisma__TeamClient<
      | $Result.GetResult<
          Prisma.$TeamPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    team_b<T extends TeamDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TeamDefaultArgs<ExtArgs>>,
    ): Prisma__TeamClient<
      | $Result.GetResult<
          Prisma.$TeamPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    events<T extends Match$eventsArgs<ExtArgs> = {}>(
      args?: Subset<T, Match$eventsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MatchEventPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Match model
   */
  interface MatchFieldRefs {
    readonly id: FieldRef<'Match', 'String'>;
    readonly tournament_id: FieldRef<'Match', 'String'>;
    readonly team_a_id: FieldRef<'Match', 'String'>;
    readonly team_b_id: FieldRef<'Match', 'String'>;
    readonly team_a_score: FieldRef<'Match', 'Int'>;
    readonly team_b_score: FieldRef<'Match', 'Int'>;
    readonly match_date: FieldRef<'Match', 'DateTime'>;
    readonly status: FieldRef<'Match', 'MatchStatus'>;
    readonly created_at: FieldRef<'Match', 'DateTime'>;
    readonly updated_at: FieldRef<'Match', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null;
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput;
  };

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null;
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput;
  };

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null;
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Matches.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[];
  };

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null;
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Matches.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[];
  };

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null;
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Matches.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[];
  };

  /**
   * Match create
   */
  export type MatchCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null;
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>;
  };

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Match createManyAndReturn
   */
  export type MatchCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null;
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Match update
   */
  export type MatchUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null;
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>;
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput;
  };

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>;
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput;
    /**
     * Limit how many Matches to update.
     */
    limit?: number;
  };

  /**
   * Match updateManyAndReturn
   */
  export type MatchUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null;
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>;
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput;
    /**
     * Limit how many Matches to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null;
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput;
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>;
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>;
  };

  /**
   * Match delete
   */
  export type MatchDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null;
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput;
  };

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput;
    /**
     * Limit how many Matches to delete.
     */
    limit?: number;
  };

  /**
   * Match.events
   */
  export type Match$eventsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatchEvent
     */
    omit?: MatchEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventInclude<ExtArgs> | null;
    where?: MatchEventWhereInput;
    orderBy?:
      | MatchEventOrderByWithRelationInput
      | MatchEventOrderByWithRelationInput[];
    cursor?: MatchEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MatchEventScalarFieldEnum | MatchEventScalarFieldEnum[];
  };

  /**
   * Match without action
   */
  export type MatchDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null;
  };

  /**
   * Model Standings
   */

  export type AggregateStandings = {
    _count: StandingsCountAggregateOutputType | null;
    _avg: StandingsAvgAggregateOutputType | null;
    _sum: StandingsSumAggregateOutputType | null;
    _min: StandingsMinAggregateOutputType | null;
    _max: StandingsMaxAggregateOutputType | null;
  };

  export type StandingsAvgAggregateOutputType = {
    played: number | null;
    wins: number | null;
    draws: number | null;
    losses: number | null;
    goals_for: number | null;
    goals_against: number | null;
    goal_difference: number | null;
    points: number | null;
  };

  export type StandingsSumAggregateOutputType = {
    played: number | null;
    wins: number | null;
    draws: number | null;
    losses: number | null;
    goals_for: number | null;
    goals_against: number | null;
    goal_difference: number | null;
    points: number | null;
  };

  export type StandingsMinAggregateOutputType = {
    id: string | null;
    tournament_id: string | null;
    team_id: string | null;
    played: number | null;
    wins: number | null;
    draws: number | null;
    losses: number | null;
    goals_for: number | null;
    goals_against: number | null;
    goal_difference: number | null;
    points: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type StandingsMaxAggregateOutputType = {
    id: string | null;
    tournament_id: string | null;
    team_id: string | null;
    played: number | null;
    wins: number | null;
    draws: number | null;
    losses: number | null;
    goals_for: number | null;
    goals_against: number | null;
    goal_difference: number | null;
    points: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type StandingsCountAggregateOutputType = {
    id: number;
    tournament_id: number;
    team_id: number;
    played: number;
    wins: number;
    draws: number;
    losses: number;
    goals_for: number;
    goals_against: number;
    goal_difference: number;
    points: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type StandingsAvgAggregateInputType = {
    played?: true;
    wins?: true;
    draws?: true;
    losses?: true;
    goals_for?: true;
    goals_against?: true;
    goal_difference?: true;
    points?: true;
  };

  export type StandingsSumAggregateInputType = {
    played?: true;
    wins?: true;
    draws?: true;
    losses?: true;
    goals_for?: true;
    goals_against?: true;
    goal_difference?: true;
    points?: true;
  };

  export type StandingsMinAggregateInputType = {
    id?: true;
    tournament_id?: true;
    team_id?: true;
    played?: true;
    wins?: true;
    draws?: true;
    losses?: true;
    goals_for?: true;
    goals_against?: true;
    goal_difference?: true;
    points?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type StandingsMaxAggregateInputType = {
    id?: true;
    tournament_id?: true;
    team_id?: true;
    played?: true;
    wins?: true;
    draws?: true;
    losses?: true;
    goals_for?: true;
    goals_against?: true;
    goal_difference?: true;
    points?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type StandingsCountAggregateInputType = {
    id?: true;
    tournament_id?: true;
    team_id?: true;
    played?: true;
    wins?: true;
    draws?: true;
    losses?: true;
    goals_for?: true;
    goals_against?: true;
    goal_difference?: true;
    points?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type StandingsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Standings to aggregate.
     */
    where?: StandingsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Standings to fetch.
     */
    orderBy?:
      | StandingsOrderByWithRelationInput
      | StandingsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: StandingsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Standings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Standings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Standings
     **/
    _count?: true | StandingsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: StandingsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: StandingsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: StandingsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: StandingsMaxAggregateInputType;
  };

  export type GetStandingsAggregateType<T extends StandingsAggregateArgs> = {
    [P in keyof T & keyof AggregateStandings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStandings[P]>
      : GetScalarType<T[P], AggregateStandings[P]>;
  };

  export type StandingsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: StandingsWhereInput;
    orderBy?:
      | StandingsOrderByWithAggregationInput
      | StandingsOrderByWithAggregationInput[];
    by: StandingsScalarFieldEnum[] | StandingsScalarFieldEnum;
    having?: StandingsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StandingsCountAggregateInputType | true;
    _avg?: StandingsAvgAggregateInputType;
    _sum?: StandingsSumAggregateInputType;
    _min?: StandingsMinAggregateInputType;
    _max?: StandingsMaxAggregateInputType;
  };

  export type StandingsGroupByOutputType = {
    id: string;
    tournament_id: string;
    team_id: string;
    played: number;
    wins: number;
    draws: number;
    losses: number;
    goals_for: number;
    goals_against: number;
    goal_difference: number;
    points: number;
    created_at: Date;
    updated_at: Date;
    _count: StandingsCountAggregateOutputType | null;
    _avg: StandingsAvgAggregateOutputType | null;
    _sum: StandingsSumAggregateOutputType | null;
    _min: StandingsMinAggregateOutputType | null;
    _max: StandingsMaxAggregateOutputType | null;
  };

  type GetStandingsGroupByPayload<T extends StandingsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<StandingsGroupByOutputType, T['by']> & {
          [P in keyof T & keyof StandingsGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StandingsGroupByOutputType[P]>
            : GetScalarType<T[P], StandingsGroupByOutputType[P]>;
        }
      >
    >;

  export type StandingsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      tournament_id?: boolean;
      team_id?: boolean;
      played?: boolean;
      wins?: boolean;
      draws?: boolean;
      losses?: boolean;
      goals_for?: boolean;
      goals_against?: boolean;
      goal_difference?: boolean;
      points?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tournament?: boolean | TournamentDefaultArgs<ExtArgs>;
      team?: boolean | TeamDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['standings']
  >;

  export type StandingsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      tournament_id?: boolean;
      team_id?: boolean;
      played?: boolean;
      wins?: boolean;
      draws?: boolean;
      losses?: boolean;
      goals_for?: boolean;
      goals_against?: boolean;
      goal_difference?: boolean;
      points?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tournament?: boolean | TournamentDefaultArgs<ExtArgs>;
      team?: boolean | TeamDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['standings']
  >;

  export type StandingsSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      tournament_id?: boolean;
      team_id?: boolean;
      played?: boolean;
      wins?: boolean;
      draws?: boolean;
      losses?: boolean;
      goals_for?: boolean;
      goals_against?: boolean;
      goal_difference?: boolean;
      points?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tournament?: boolean | TournamentDefaultArgs<ExtArgs>;
      team?: boolean | TeamDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['standings']
  >;

  export type StandingsSelectScalar = {
    id?: boolean;
    tournament_id?: boolean;
    team_id?: boolean;
    played?: boolean;
    wins?: boolean;
    draws?: boolean;
    losses?: boolean;
    goals_for?: boolean;
    goals_against?: boolean;
    goal_difference?: boolean;
    points?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type StandingsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'tournament_id'
    | 'team_id'
    | 'played'
    | 'wins'
    | 'draws'
    | 'losses'
    | 'goals_for'
    | 'goals_against'
    | 'goal_difference'
    | 'points'
    | 'created_at'
    | 'updated_at',
    ExtArgs['result']['standings']
  >;
  export type StandingsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>;
    team?: boolean | TeamDefaultArgs<ExtArgs>;
  };
  export type StandingsIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>;
    team?: boolean | TeamDefaultArgs<ExtArgs>;
  };
  export type StandingsIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>;
    team?: boolean | TeamDefaultArgs<ExtArgs>;
  };

  export type $StandingsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Standings';
    objects: {
      tournament: Prisma.$TournamentPayload<ExtArgs>;
      team: Prisma.$TeamPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        tournament_id: string;
        team_id: string;
        played: number;
        wins: number;
        draws: number;
        losses: number;
        goals_for: number;
        goals_against: number;
        goal_difference: number;
        points: number;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['standings']
    >;
    composites: {};
  };

  type StandingsGetPayload<
    S extends boolean | null | undefined | StandingsDefaultArgs,
  > = $Result.GetResult<Prisma.$StandingsPayload, S>;

  type StandingsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    StandingsFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: StandingsCountAggregateInputType | true;
  };

  export interface StandingsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Standings'];
      meta: { name: 'Standings' };
    };
    /**
     * Find zero or one Standings that matches the filter.
     * @param {StandingsFindUniqueArgs} args - Arguments to find a Standings
     * @example
     * // Get one Standings
     * const standings = await prisma.standings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StandingsFindUniqueArgs>(
      args: SelectSubset<T, StandingsFindUniqueArgs<ExtArgs>>,
    ): Prisma__StandingsClient<
      $Result.GetResult<
        Prisma.$StandingsPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Standings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StandingsFindUniqueOrThrowArgs} args - Arguments to find a Standings
     * @example
     * // Get one Standings
     * const standings = await prisma.standings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StandingsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, StandingsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__StandingsClient<
      $Result.GetResult<
        Prisma.$StandingsPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Standings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandingsFindFirstArgs} args - Arguments to find a Standings
     * @example
     * // Get one Standings
     * const standings = await prisma.standings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StandingsFindFirstArgs>(
      args?: SelectSubset<T, StandingsFindFirstArgs<ExtArgs>>,
    ): Prisma__StandingsClient<
      $Result.GetResult<
        Prisma.$StandingsPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Standings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandingsFindFirstOrThrowArgs} args - Arguments to find a Standings
     * @example
     * // Get one Standings
     * const standings = await prisma.standings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StandingsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StandingsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__StandingsClient<
      $Result.GetResult<
        Prisma.$StandingsPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Standings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Standings
     * const standings = await prisma.standings.findMany()
     *
     * // Get first 10 Standings
     * const standings = await prisma.standings.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const standingsWithIdOnly = await prisma.standings.findMany({ select: { id: true } })
     *
     */
    findMany<T extends StandingsFindManyArgs>(
      args?: SelectSubset<T, StandingsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$StandingsPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Standings.
     * @param {StandingsCreateArgs} args - Arguments to create a Standings.
     * @example
     * // Create one Standings
     * const Standings = await prisma.standings.create({
     *   data: {
     *     // ... data to create a Standings
     *   }
     * })
     *
     */
    create<T extends StandingsCreateArgs>(
      args: SelectSubset<T, StandingsCreateArgs<ExtArgs>>,
    ): Prisma__StandingsClient<
      $Result.GetResult<
        Prisma.$StandingsPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Standings.
     * @param {StandingsCreateManyArgs} args - Arguments to create many Standings.
     * @example
     * // Create many Standings
     * const standings = await prisma.standings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends StandingsCreateManyArgs>(
      args?: SelectSubset<T, StandingsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Standings and returns the data saved in the database.
     * @param {StandingsCreateManyAndReturnArgs} args - Arguments to create many Standings.
     * @example
     * // Create many Standings
     * const standings = await prisma.standings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Standings and only return the `id`
     * const standingsWithIdOnly = await prisma.standings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends StandingsCreateManyAndReturnArgs>(
      args?: SelectSubset<T, StandingsCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$StandingsPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Standings.
     * @param {StandingsDeleteArgs} args - Arguments to delete one Standings.
     * @example
     * // Delete one Standings
     * const Standings = await prisma.standings.delete({
     *   where: {
     *     // ... filter to delete one Standings
     *   }
     * })
     *
     */
    delete<T extends StandingsDeleteArgs>(
      args: SelectSubset<T, StandingsDeleteArgs<ExtArgs>>,
    ): Prisma__StandingsClient<
      $Result.GetResult<
        Prisma.$StandingsPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Standings.
     * @param {StandingsUpdateArgs} args - Arguments to update one Standings.
     * @example
     * // Update one Standings
     * const standings = await prisma.standings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends StandingsUpdateArgs>(
      args: SelectSubset<T, StandingsUpdateArgs<ExtArgs>>,
    ): Prisma__StandingsClient<
      $Result.GetResult<
        Prisma.$StandingsPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Standings.
     * @param {StandingsDeleteManyArgs} args - Arguments to filter Standings to delete.
     * @example
     * // Delete a few Standings
     * const { count } = await prisma.standings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends StandingsDeleteManyArgs>(
      args?: SelectSubset<T, StandingsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Standings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Standings
     * const standings = await prisma.standings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends StandingsUpdateManyArgs>(
      args: SelectSubset<T, StandingsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Standings and returns the data updated in the database.
     * @param {StandingsUpdateManyAndReturnArgs} args - Arguments to update many Standings.
     * @example
     * // Update many Standings
     * const standings = await prisma.standings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Standings and only return the `id`
     * const standingsWithIdOnly = await prisma.standings.updateManyAndReturn({
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
    updateManyAndReturn<T extends StandingsUpdateManyAndReturnArgs>(
      args: SelectSubset<T, StandingsUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$StandingsPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Standings.
     * @param {StandingsUpsertArgs} args - Arguments to update or create a Standings.
     * @example
     * // Update or create a Standings
     * const standings = await prisma.standings.upsert({
     *   create: {
     *     // ... data to create a Standings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Standings we want to update
     *   }
     * })
     */
    upsert<T extends StandingsUpsertArgs>(
      args: SelectSubset<T, StandingsUpsertArgs<ExtArgs>>,
    ): Prisma__StandingsClient<
      $Result.GetResult<
        Prisma.$StandingsPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Standings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandingsCountArgs} args - Arguments to filter Standings to count.
     * @example
     * // Count the number of Standings
     * const count = await prisma.standings.count({
     *   where: {
     *     // ... the filter for the Standings we want to count
     *   }
     * })
     **/
    count<T extends StandingsCountArgs>(
      args?: Subset<T, StandingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StandingsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Standings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StandingsAggregateArgs>(
      args: Subset<T, StandingsAggregateArgs>,
    ): Prisma.PrismaPromise<GetStandingsAggregateType<T>>;

    /**
     * Group by Standings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandingsGroupByArgs} args - Group by arguments.
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
      T extends StandingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StandingsGroupByArgs['orderBy'] }
        : { orderBy?: StandingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, StandingsGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetStandingsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Standings model
     */
    readonly fields: StandingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Standings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StandingsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    tournament<T extends TournamentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TournamentDefaultArgs<ExtArgs>>,
    ): Prisma__TournamentClient<
      | $Result.GetResult<
          Prisma.$TournamentPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TeamDefaultArgs<ExtArgs>>,
    ): Prisma__TeamClient<
      | $Result.GetResult<
          Prisma.$TeamPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Standings model
   */
  interface StandingsFieldRefs {
    readonly id: FieldRef<'Standings', 'String'>;
    readonly tournament_id: FieldRef<'Standings', 'String'>;
    readonly team_id: FieldRef<'Standings', 'String'>;
    readonly played: FieldRef<'Standings', 'Int'>;
    readonly wins: FieldRef<'Standings', 'Int'>;
    readonly draws: FieldRef<'Standings', 'Int'>;
    readonly losses: FieldRef<'Standings', 'Int'>;
    readonly goals_for: FieldRef<'Standings', 'Int'>;
    readonly goals_against: FieldRef<'Standings', 'Int'>;
    readonly goal_difference: FieldRef<'Standings', 'Int'>;
    readonly points: FieldRef<'Standings', 'Int'>;
    readonly created_at: FieldRef<'Standings', 'DateTime'>;
    readonly updated_at: FieldRef<'Standings', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Standings findUnique
   */
  export type StandingsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Standings
     */
    select?: StandingsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Standings
     */
    omit?: StandingsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandingsInclude<ExtArgs> | null;
    /**
     * Filter, which Standings to fetch.
     */
    where: StandingsWhereUniqueInput;
  };

  /**
   * Standings findUniqueOrThrow
   */
  export type StandingsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Standings
     */
    select?: StandingsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Standings
     */
    omit?: StandingsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandingsInclude<ExtArgs> | null;
    /**
     * Filter, which Standings to fetch.
     */
    where: StandingsWhereUniqueInput;
  };

  /**
   * Standings findFirst
   */
  export type StandingsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Standings
     */
    select?: StandingsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Standings
     */
    omit?: StandingsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandingsInclude<ExtArgs> | null;
    /**
     * Filter, which Standings to fetch.
     */
    where?: StandingsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Standings to fetch.
     */
    orderBy?:
      | StandingsOrderByWithRelationInput
      | StandingsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Standings.
     */
    cursor?: StandingsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Standings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Standings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Standings.
     */
    distinct?: StandingsScalarFieldEnum | StandingsScalarFieldEnum[];
  };

  /**
   * Standings findFirstOrThrow
   */
  export type StandingsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Standings
     */
    select?: StandingsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Standings
     */
    omit?: StandingsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandingsInclude<ExtArgs> | null;
    /**
     * Filter, which Standings to fetch.
     */
    where?: StandingsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Standings to fetch.
     */
    orderBy?:
      | StandingsOrderByWithRelationInput
      | StandingsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Standings.
     */
    cursor?: StandingsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Standings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Standings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Standings.
     */
    distinct?: StandingsScalarFieldEnum | StandingsScalarFieldEnum[];
  };

  /**
   * Standings findMany
   */
  export type StandingsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Standings
     */
    select?: StandingsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Standings
     */
    omit?: StandingsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandingsInclude<ExtArgs> | null;
    /**
     * Filter, which Standings to fetch.
     */
    where?: StandingsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Standings to fetch.
     */
    orderBy?:
      | StandingsOrderByWithRelationInput
      | StandingsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Standings.
     */
    cursor?: StandingsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Standings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Standings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Standings.
     */
    distinct?: StandingsScalarFieldEnum | StandingsScalarFieldEnum[];
  };

  /**
   * Standings create
   */
  export type StandingsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Standings
     */
    select?: StandingsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Standings
     */
    omit?: StandingsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandingsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Standings.
     */
    data: XOR<StandingsCreateInput, StandingsUncheckedCreateInput>;
  };

  /**
   * Standings createMany
   */
  export type StandingsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Standings.
     */
    data: StandingsCreateManyInput | StandingsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Standings createManyAndReturn
   */
  export type StandingsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Standings
     */
    select?: StandingsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Standings
     */
    omit?: StandingsOmit<ExtArgs> | null;
    /**
     * The data used to create many Standings.
     */
    data: StandingsCreateManyInput | StandingsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandingsIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Standings update
   */
  export type StandingsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Standings
     */
    select?: StandingsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Standings
     */
    omit?: StandingsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandingsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Standings.
     */
    data: XOR<StandingsUpdateInput, StandingsUncheckedUpdateInput>;
    /**
     * Choose, which Standings to update.
     */
    where: StandingsWhereUniqueInput;
  };

  /**
   * Standings updateMany
   */
  export type StandingsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Standings.
     */
    data: XOR<
      StandingsUpdateManyMutationInput,
      StandingsUncheckedUpdateManyInput
    >;
    /**
     * Filter which Standings to update
     */
    where?: StandingsWhereInput;
    /**
     * Limit how many Standings to update.
     */
    limit?: number;
  };

  /**
   * Standings updateManyAndReturn
   */
  export type StandingsUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Standings
     */
    select?: StandingsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Standings
     */
    omit?: StandingsOmit<ExtArgs> | null;
    /**
     * The data used to update Standings.
     */
    data: XOR<
      StandingsUpdateManyMutationInput,
      StandingsUncheckedUpdateManyInput
    >;
    /**
     * Filter which Standings to update
     */
    where?: StandingsWhereInput;
    /**
     * Limit how many Standings to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandingsIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Standings upsert
   */
  export type StandingsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Standings
     */
    select?: StandingsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Standings
     */
    omit?: StandingsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandingsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Standings to update in case it exists.
     */
    where: StandingsWhereUniqueInput;
    /**
     * In case the Standings found by the `where` argument doesn't exist, create a new Standings with this data.
     */
    create: XOR<StandingsCreateInput, StandingsUncheckedCreateInput>;
    /**
     * In case the Standings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StandingsUpdateInput, StandingsUncheckedUpdateInput>;
  };

  /**
   * Standings delete
   */
  export type StandingsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Standings
     */
    select?: StandingsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Standings
     */
    omit?: StandingsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandingsInclude<ExtArgs> | null;
    /**
     * Filter which Standings to delete.
     */
    where: StandingsWhereUniqueInput;
  };

  /**
   * Standings deleteMany
   */
  export type StandingsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Standings to delete
     */
    where?: StandingsWhereInput;
    /**
     * Limit how many Standings to delete.
     */
    limit?: number;
  };

  /**
   * Standings without action
   */
  export type StandingsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Standings
     */
    select?: StandingsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Standings
     */
    omit?: StandingsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StandingsInclude<ExtArgs> | null;
  };

  /**
   * Model MatchEvent
   */

  export type AggregateMatchEvent = {
    _count: MatchEventCountAggregateOutputType | null;
    _min: MatchEventMinAggregateOutputType | null;
    _max: MatchEventMaxAggregateOutputType | null;
  };

  export type MatchEventMinAggregateOutputType = {
    id: string | null;
    match_id: string | null;
    tournament_id: string | null;
    team_id: string | null;
    type: $Enums.EventType | null;
    player_name: string | null;
    created_at: Date | null;
  };

  export type MatchEventMaxAggregateOutputType = {
    id: string | null;
    match_id: string | null;
    tournament_id: string | null;
    team_id: string | null;
    type: $Enums.EventType | null;
    player_name: string | null;
    created_at: Date | null;
  };

  export type MatchEventCountAggregateOutputType = {
    id: number;
    match_id: number;
    tournament_id: number;
    team_id: number;
    type: number;
    player_name: number;
    created_at: number;
    _all: number;
  };

  export type MatchEventMinAggregateInputType = {
    id?: true;
    match_id?: true;
    tournament_id?: true;
    team_id?: true;
    type?: true;
    player_name?: true;
    created_at?: true;
  };

  export type MatchEventMaxAggregateInputType = {
    id?: true;
    match_id?: true;
    tournament_id?: true;
    team_id?: true;
    type?: true;
    player_name?: true;
    created_at?: true;
  };

  export type MatchEventCountAggregateInputType = {
    id?: true;
    match_id?: true;
    tournament_id?: true;
    team_id?: true;
    type?: true;
    player_name?: true;
    created_at?: true;
    _all?: true;
  };

  export type MatchEventAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which MatchEvent to aggregate.
     */
    where?: MatchEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MatchEvents to fetch.
     */
    orderBy?:
      | MatchEventOrderByWithRelationInput
      | MatchEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MatchEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MatchEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MatchEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MatchEvents
     **/
    _count?: true | MatchEventCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MatchEventMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MatchEventMaxAggregateInputType;
  };

  export type GetMatchEventAggregateType<T extends MatchEventAggregateArgs> = {
    [P in keyof T & keyof AggregateMatchEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchEvent[P]>
      : GetScalarType<T[P], AggregateMatchEvent[P]>;
  };

  export type MatchEventGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MatchEventWhereInput;
    orderBy?:
      | MatchEventOrderByWithAggregationInput
      | MatchEventOrderByWithAggregationInput[];
    by: MatchEventScalarFieldEnum[] | MatchEventScalarFieldEnum;
    having?: MatchEventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MatchEventCountAggregateInputType | true;
    _min?: MatchEventMinAggregateInputType;
    _max?: MatchEventMaxAggregateInputType;
  };

  export type MatchEventGroupByOutputType = {
    id: string;
    match_id: string;
    tournament_id: string;
    team_id: string;
    type: $Enums.EventType;
    player_name: string;
    created_at: Date;
    _count: MatchEventCountAggregateOutputType | null;
    _min: MatchEventMinAggregateOutputType | null;
    _max: MatchEventMaxAggregateOutputType | null;
  };

  type GetMatchEventGroupByPayload<T extends MatchEventGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<MatchEventGroupByOutputType, T['by']> & {
          [P in keyof T & keyof MatchEventGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchEventGroupByOutputType[P]>
            : GetScalarType<T[P], MatchEventGroupByOutputType[P]>;
        }
      >
    >;

  export type MatchEventSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      match_id?: boolean;
      tournament_id?: boolean;
      team_id?: boolean;
      type?: boolean;
      player_name?: boolean;
      created_at?: boolean;
      match?: boolean | MatchDefaultArgs<ExtArgs>;
      tournament?: boolean | TournamentDefaultArgs<ExtArgs>;
      team?: boolean | TeamDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['matchEvent']
  >;

  export type MatchEventSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      match_id?: boolean;
      tournament_id?: boolean;
      team_id?: boolean;
      type?: boolean;
      player_name?: boolean;
      created_at?: boolean;
      match?: boolean | MatchDefaultArgs<ExtArgs>;
      tournament?: boolean | TournamentDefaultArgs<ExtArgs>;
      team?: boolean | TeamDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['matchEvent']
  >;

  export type MatchEventSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      match_id?: boolean;
      tournament_id?: boolean;
      team_id?: boolean;
      type?: boolean;
      player_name?: boolean;
      created_at?: boolean;
      match?: boolean | MatchDefaultArgs<ExtArgs>;
      tournament?: boolean | TournamentDefaultArgs<ExtArgs>;
      team?: boolean | TeamDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['matchEvent']
  >;

  export type MatchEventSelectScalar = {
    id?: boolean;
    match_id?: boolean;
    tournament_id?: boolean;
    team_id?: boolean;
    type?: boolean;
    player_name?: boolean;
    created_at?: boolean;
  };

  export type MatchEventOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'match_id'
    | 'tournament_id'
    | 'team_id'
    | 'type'
    | 'player_name'
    | 'created_at',
    ExtArgs['result']['matchEvent']
  >;
  export type MatchEventInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    match?: boolean | MatchDefaultArgs<ExtArgs>;
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>;
    team?: boolean | TeamDefaultArgs<ExtArgs>;
  };
  export type MatchEventIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    match?: boolean | MatchDefaultArgs<ExtArgs>;
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>;
    team?: boolean | TeamDefaultArgs<ExtArgs>;
  };
  export type MatchEventIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    match?: boolean | MatchDefaultArgs<ExtArgs>;
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>;
    team?: boolean | TeamDefaultArgs<ExtArgs>;
  };

  export type $MatchEventPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'MatchEvent';
    objects: {
      match: Prisma.$MatchPayload<ExtArgs>;
      tournament: Prisma.$TournamentPayload<ExtArgs>;
      team: Prisma.$TeamPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        match_id: string;
        tournament_id: string;
        team_id: string;
        type: $Enums.EventType;
        player_name: string;
        created_at: Date;
      },
      ExtArgs['result']['matchEvent']
    >;
    composites: {};
  };

  type MatchEventGetPayload<
    S extends boolean | null | undefined | MatchEventDefaultArgs,
  > = $Result.GetResult<Prisma.$MatchEventPayload, S>;

  type MatchEventCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    MatchEventFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: MatchEventCountAggregateInputType | true;
  };

  export interface MatchEventDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['MatchEvent'];
      meta: { name: 'MatchEvent' };
    };
    /**
     * Find zero or one MatchEvent that matches the filter.
     * @param {MatchEventFindUniqueArgs} args - Arguments to find a MatchEvent
     * @example
     * // Get one MatchEvent
     * const matchEvent = await prisma.matchEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchEventFindUniqueArgs>(
      args: SelectSubset<T, MatchEventFindUniqueArgs<ExtArgs>>,
    ): Prisma__MatchEventClient<
      $Result.GetResult<
        Prisma.$MatchEventPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one MatchEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchEventFindUniqueOrThrowArgs} args - Arguments to find a MatchEvent
     * @example
     * // Get one MatchEvent
     * const matchEvent = await prisma.matchEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchEventFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MatchEventFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__MatchEventClient<
      $Result.GetResult<
        Prisma.$MatchEventPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first MatchEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchEventFindFirstArgs} args - Arguments to find a MatchEvent
     * @example
     * // Get one MatchEvent
     * const matchEvent = await prisma.matchEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchEventFindFirstArgs>(
      args?: SelectSubset<T, MatchEventFindFirstArgs<ExtArgs>>,
    ): Prisma__MatchEventClient<
      $Result.GetResult<
        Prisma.$MatchEventPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first MatchEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchEventFindFirstOrThrowArgs} args - Arguments to find a MatchEvent
     * @example
     * // Get one MatchEvent
     * const matchEvent = await prisma.matchEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchEventFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MatchEventFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__MatchEventClient<
      $Result.GetResult<
        Prisma.$MatchEventPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more MatchEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchEvents
     * const matchEvents = await prisma.matchEvent.findMany()
     *
     * // Get first 10 MatchEvents
     * const matchEvents = await prisma.matchEvent.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const matchEventWithIdOnly = await prisma.matchEvent.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MatchEventFindManyArgs>(
      args?: SelectSubset<T, MatchEventFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MatchEventPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a MatchEvent.
     * @param {MatchEventCreateArgs} args - Arguments to create a MatchEvent.
     * @example
     * // Create one MatchEvent
     * const MatchEvent = await prisma.matchEvent.create({
     *   data: {
     *     // ... data to create a MatchEvent
     *   }
     * })
     *
     */
    create<T extends MatchEventCreateArgs>(
      args: SelectSubset<T, MatchEventCreateArgs<ExtArgs>>,
    ): Prisma__MatchEventClient<
      $Result.GetResult<
        Prisma.$MatchEventPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many MatchEvents.
     * @param {MatchEventCreateManyArgs} args - Arguments to create many MatchEvents.
     * @example
     * // Create many MatchEvents
     * const matchEvent = await prisma.matchEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MatchEventCreateManyArgs>(
      args?: SelectSubset<T, MatchEventCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many MatchEvents and returns the data saved in the database.
     * @param {MatchEventCreateManyAndReturnArgs} args - Arguments to create many MatchEvents.
     * @example
     * // Create many MatchEvents
     * const matchEvent = await prisma.matchEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MatchEvents and only return the `id`
     * const matchEventWithIdOnly = await prisma.matchEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MatchEventCreateManyAndReturnArgs>(
      args?: SelectSubset<T, MatchEventCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MatchEventPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a MatchEvent.
     * @param {MatchEventDeleteArgs} args - Arguments to delete one MatchEvent.
     * @example
     * // Delete one MatchEvent
     * const MatchEvent = await prisma.matchEvent.delete({
     *   where: {
     *     // ... filter to delete one MatchEvent
     *   }
     * })
     *
     */
    delete<T extends MatchEventDeleteArgs>(
      args: SelectSubset<T, MatchEventDeleteArgs<ExtArgs>>,
    ): Prisma__MatchEventClient<
      $Result.GetResult<
        Prisma.$MatchEventPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one MatchEvent.
     * @param {MatchEventUpdateArgs} args - Arguments to update one MatchEvent.
     * @example
     * // Update one MatchEvent
     * const matchEvent = await prisma.matchEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MatchEventUpdateArgs>(
      args: SelectSubset<T, MatchEventUpdateArgs<ExtArgs>>,
    ): Prisma__MatchEventClient<
      $Result.GetResult<
        Prisma.$MatchEventPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more MatchEvents.
     * @param {MatchEventDeleteManyArgs} args - Arguments to filter MatchEvents to delete.
     * @example
     * // Delete a few MatchEvents
     * const { count } = await prisma.matchEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MatchEventDeleteManyArgs>(
      args?: SelectSubset<T, MatchEventDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more MatchEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchEvents
     * const matchEvent = await prisma.matchEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MatchEventUpdateManyArgs>(
      args: SelectSubset<T, MatchEventUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more MatchEvents and returns the data updated in the database.
     * @param {MatchEventUpdateManyAndReturnArgs} args - Arguments to update many MatchEvents.
     * @example
     * // Update many MatchEvents
     * const matchEvent = await prisma.matchEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MatchEvents and only return the `id`
     * const matchEventWithIdOnly = await prisma.matchEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends MatchEventUpdateManyAndReturnArgs>(
      args: SelectSubset<T, MatchEventUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MatchEventPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one MatchEvent.
     * @param {MatchEventUpsertArgs} args - Arguments to update or create a MatchEvent.
     * @example
     * // Update or create a MatchEvent
     * const matchEvent = await prisma.matchEvent.upsert({
     *   create: {
     *     // ... data to create a MatchEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchEvent we want to update
     *   }
     * })
     */
    upsert<T extends MatchEventUpsertArgs>(
      args: SelectSubset<T, MatchEventUpsertArgs<ExtArgs>>,
    ): Prisma__MatchEventClient<
      $Result.GetResult<
        Prisma.$MatchEventPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of MatchEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchEventCountArgs} args - Arguments to filter MatchEvents to count.
     * @example
     * // Count the number of MatchEvents
     * const count = await prisma.matchEvent.count({
     *   where: {
     *     // ... the filter for the MatchEvents we want to count
     *   }
     * })
     **/
    count<T extends MatchEventCountArgs>(
      args?: Subset<T, MatchEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchEventCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a MatchEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchEventAggregateArgs>(
      args: Subset<T, MatchEventAggregateArgs>,
    ): Prisma.PrismaPromise<GetMatchEventAggregateType<T>>;

    /**
     * Group by MatchEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchEventGroupByArgs} args - Group by arguments.
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
      T extends MatchEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchEventGroupByArgs['orderBy'] }
        : { orderBy?: MatchEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, MatchEventGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetMatchEventGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MatchEvent model
     */
    readonly fields: MatchEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchEventClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    match<T extends MatchDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, MatchDefaultArgs<ExtArgs>>,
    ): Prisma__MatchClient<
      | $Result.GetResult<
          Prisma.$MatchPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    tournament<T extends TournamentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TournamentDefaultArgs<ExtArgs>>,
    ): Prisma__TournamentClient<
      | $Result.GetResult<
          Prisma.$TournamentPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TeamDefaultArgs<ExtArgs>>,
    ): Prisma__TeamClient<
      | $Result.GetResult<
          Prisma.$TeamPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the MatchEvent model
   */
  interface MatchEventFieldRefs {
    readonly id: FieldRef<'MatchEvent', 'String'>;
    readonly match_id: FieldRef<'MatchEvent', 'String'>;
    readonly tournament_id: FieldRef<'MatchEvent', 'String'>;
    readonly team_id: FieldRef<'MatchEvent', 'String'>;
    readonly type: FieldRef<'MatchEvent', 'EventType'>;
    readonly player_name: FieldRef<'MatchEvent', 'String'>;
    readonly created_at: FieldRef<'MatchEvent', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * MatchEvent findUnique
   */
  export type MatchEventFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatchEvent
     */
    omit?: MatchEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventInclude<ExtArgs> | null;
    /**
     * Filter, which MatchEvent to fetch.
     */
    where: MatchEventWhereUniqueInput;
  };

  /**
   * MatchEvent findUniqueOrThrow
   */
  export type MatchEventFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatchEvent
     */
    omit?: MatchEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventInclude<ExtArgs> | null;
    /**
     * Filter, which MatchEvent to fetch.
     */
    where: MatchEventWhereUniqueInput;
  };

  /**
   * MatchEvent findFirst
   */
  export type MatchEventFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatchEvent
     */
    omit?: MatchEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventInclude<ExtArgs> | null;
    /**
     * Filter, which MatchEvent to fetch.
     */
    where?: MatchEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MatchEvents to fetch.
     */
    orderBy?:
      | MatchEventOrderByWithRelationInput
      | MatchEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MatchEvents.
     */
    cursor?: MatchEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MatchEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MatchEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MatchEvents.
     */
    distinct?: MatchEventScalarFieldEnum | MatchEventScalarFieldEnum[];
  };

  /**
   * MatchEvent findFirstOrThrow
   */
  export type MatchEventFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatchEvent
     */
    omit?: MatchEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventInclude<ExtArgs> | null;
    /**
     * Filter, which MatchEvent to fetch.
     */
    where?: MatchEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MatchEvents to fetch.
     */
    orderBy?:
      | MatchEventOrderByWithRelationInput
      | MatchEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MatchEvents.
     */
    cursor?: MatchEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MatchEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MatchEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MatchEvents.
     */
    distinct?: MatchEventScalarFieldEnum | MatchEventScalarFieldEnum[];
  };

  /**
   * MatchEvent findMany
   */
  export type MatchEventFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatchEvent
     */
    omit?: MatchEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventInclude<ExtArgs> | null;
    /**
     * Filter, which MatchEvents to fetch.
     */
    where?: MatchEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MatchEvents to fetch.
     */
    orderBy?:
      | MatchEventOrderByWithRelationInput
      | MatchEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MatchEvents.
     */
    cursor?: MatchEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MatchEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MatchEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MatchEvents.
     */
    distinct?: MatchEventScalarFieldEnum | MatchEventScalarFieldEnum[];
  };

  /**
   * MatchEvent create
   */
  export type MatchEventCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatchEvent
     */
    omit?: MatchEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventInclude<ExtArgs> | null;
    /**
     * The data needed to create a MatchEvent.
     */
    data: XOR<MatchEventCreateInput, MatchEventUncheckedCreateInput>;
  };

  /**
   * MatchEvent createMany
   */
  export type MatchEventCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many MatchEvents.
     */
    data: MatchEventCreateManyInput | MatchEventCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * MatchEvent createManyAndReturn
   */
  export type MatchEventCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MatchEvent
     */
    omit?: MatchEventOmit<ExtArgs> | null;
    /**
     * The data used to create many MatchEvents.
     */
    data: MatchEventCreateManyInput | MatchEventCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * MatchEvent update
   */
  export type MatchEventUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatchEvent
     */
    omit?: MatchEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventInclude<ExtArgs> | null;
    /**
     * The data needed to update a MatchEvent.
     */
    data: XOR<MatchEventUpdateInput, MatchEventUncheckedUpdateInput>;
    /**
     * Choose, which MatchEvent to update.
     */
    where: MatchEventWhereUniqueInput;
  };

  /**
   * MatchEvent updateMany
   */
  export type MatchEventUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update MatchEvents.
     */
    data: XOR<
      MatchEventUpdateManyMutationInput,
      MatchEventUncheckedUpdateManyInput
    >;
    /**
     * Filter which MatchEvents to update
     */
    where?: MatchEventWhereInput;
    /**
     * Limit how many MatchEvents to update.
     */
    limit?: number;
  };

  /**
   * MatchEvent updateManyAndReturn
   */
  export type MatchEventUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MatchEvent
     */
    omit?: MatchEventOmit<ExtArgs> | null;
    /**
     * The data used to update MatchEvents.
     */
    data: XOR<
      MatchEventUpdateManyMutationInput,
      MatchEventUncheckedUpdateManyInput
    >;
    /**
     * Filter which MatchEvents to update
     */
    where?: MatchEventWhereInput;
    /**
     * Limit how many MatchEvents to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * MatchEvent upsert
   */
  export type MatchEventUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatchEvent
     */
    omit?: MatchEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventInclude<ExtArgs> | null;
    /**
     * The filter to search for the MatchEvent to update in case it exists.
     */
    where: MatchEventWhereUniqueInput;
    /**
     * In case the MatchEvent found by the `where` argument doesn't exist, create a new MatchEvent with this data.
     */
    create: XOR<MatchEventCreateInput, MatchEventUncheckedCreateInput>;
    /**
     * In case the MatchEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchEventUpdateInput, MatchEventUncheckedUpdateInput>;
  };

  /**
   * MatchEvent delete
   */
  export type MatchEventDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatchEvent
     */
    omit?: MatchEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventInclude<ExtArgs> | null;
    /**
     * Filter which MatchEvent to delete.
     */
    where: MatchEventWhereUniqueInput;
  };

  /**
   * MatchEvent deleteMany
   */
  export type MatchEventDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which MatchEvents to delete
     */
    where?: MatchEventWhereInput;
    /**
     * Limit how many MatchEvents to delete.
     */
    limit?: number;
  };

  /**
   * MatchEvent without action
   */
  export type MatchEventDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MatchEvent
     */
    select?: MatchEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MatchEvent
     */
    omit?: MatchEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchEventInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const OrganizerScalarFieldEnum: {
    id: 'id';
    name: 'name';
    email: 'email';
    password: 'password';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type OrganizerScalarFieldEnum =
    (typeof OrganizerScalarFieldEnum)[keyof typeof OrganizerScalarFieldEnum];

  export const TournamentScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    rules: 'rules';
    format: 'format';
    status: 'status';
    points_win: 'points_win';
    points_draw: 'points_draw';
    points_loss: 'points_loss';
    playoff_teams: 'playoff_teams';
    organizer_id: 'organizer_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TournamentScalarFieldEnum =
    (typeof TournamentScalarFieldEnum)[keyof typeof TournamentScalarFieldEnum];

  export const TeamScalarFieldEnum: {
    id: 'id';
    name: 'name';
    logo_url: 'logo_url';
    tournament_id: 'tournament_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TeamScalarFieldEnum =
    (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum];

  export const MatchScalarFieldEnum: {
    id: 'id';
    tournament_id: 'tournament_id';
    team_a_id: 'team_a_id';
    team_b_id: 'team_b_id';
    team_a_score: 'team_a_score';
    team_b_score: 'team_b_score';
    match_date: 'match_date';
    status: 'status';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type MatchScalarFieldEnum =
    (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum];

  export const StandingsScalarFieldEnum: {
    id: 'id';
    tournament_id: 'tournament_id';
    team_id: 'team_id';
    played: 'played';
    wins: 'wins';
    draws: 'draws';
    losses: 'losses';
    goals_for: 'goals_for';
    goals_against: 'goals_against';
    goal_difference: 'goal_difference';
    points: 'points';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type StandingsScalarFieldEnum =
    (typeof StandingsScalarFieldEnum)[keyof typeof StandingsScalarFieldEnum];

  export const MatchEventScalarFieldEnum: {
    id: 'id';
    match_id: 'match_id';
    tournament_id: 'tournament_id';
    team_id: 'team_id';
    type: 'type';
    player_name: 'player_name';
    created_at: 'created_at';
  };

  export type MatchEventScalarFieldEnum =
    (typeof MatchEventScalarFieldEnum)[keyof typeof MatchEventScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'TournamentFormat'
   */
  export type EnumTournamentFormatFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'TournamentFormat'>;

  /**
   * Reference to a field of type 'TournamentFormat[]'
   */
  export type ListEnumTournamentFormatFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'TournamentFormat[]'>;

  /**
   * Reference to a field of type 'TournamentStatus'
   */
  export type EnumTournamentStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'TournamentStatus'>;

  /**
   * Reference to a field of type 'TournamentStatus[]'
   */
  export type ListEnumTournamentStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'TournamentStatus[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'MatchStatus'
   */
  export type EnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'MatchStatus'
  >;

  /**
   * Reference to a field of type 'MatchStatus[]'
   */
  export type ListEnumMatchStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'MatchStatus[]'>;

  /**
   * Reference to a field of type 'EventType'
   */
  export type EnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'EventType'
  >;

  /**
   * Reference to a field of type 'EventType[]'
   */
  export type ListEnumEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'EventType[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type OrganizerWhereInput = {
    AND?: OrganizerWhereInput | OrganizerWhereInput[];
    OR?: OrganizerWhereInput[];
    NOT?: OrganizerWhereInput | OrganizerWhereInput[];
    id?: StringFilter<'Organizer'> | string;
    name?: StringFilter<'Organizer'> | string;
    email?: StringFilter<'Organizer'> | string;
    password?: StringFilter<'Organizer'> | string;
    created_at?: DateTimeFilter<'Organizer'> | Date | string;
    updated_at?: DateTimeFilter<'Organizer'> | Date | string;
    tournaments?: TournamentListRelationFilter;
  };

  export type OrganizerOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tournaments?: TournamentOrderByRelationAggregateInput;
  };

  export type OrganizerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: OrganizerWhereInput | OrganizerWhereInput[];
      OR?: OrganizerWhereInput[];
      NOT?: OrganizerWhereInput | OrganizerWhereInput[];
      name?: StringFilter<'Organizer'> | string;
      password?: StringFilter<'Organizer'> | string;
      created_at?: DateTimeFilter<'Organizer'> | Date | string;
      updated_at?: DateTimeFilter<'Organizer'> | Date | string;
      tournaments?: TournamentListRelationFilter;
    },
    'id' | 'email'
  >;

  export type OrganizerOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: OrganizerCountOrderByAggregateInput;
    _max?: OrganizerMaxOrderByAggregateInput;
    _min?: OrganizerMinOrderByAggregateInput;
  };

  export type OrganizerScalarWhereWithAggregatesInput = {
    AND?:
      | OrganizerScalarWhereWithAggregatesInput
      | OrganizerScalarWhereWithAggregatesInput[];
    OR?: OrganizerScalarWhereWithAggregatesInput[];
    NOT?:
      | OrganizerScalarWhereWithAggregatesInput
      | OrganizerScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Organizer'> | string;
    name?: StringWithAggregatesFilter<'Organizer'> | string;
    email?: StringWithAggregatesFilter<'Organizer'> | string;
    password?: StringWithAggregatesFilter<'Organizer'> | string;
    created_at?: DateTimeWithAggregatesFilter<'Organizer'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Organizer'> | Date | string;
  };

  export type TournamentWhereInput = {
    AND?: TournamentWhereInput | TournamentWhereInput[];
    OR?: TournamentWhereInput[];
    NOT?: TournamentWhereInput | TournamentWhereInput[];
    id?: StringFilter<'Tournament'> | string;
    name?: StringFilter<'Tournament'> | string;
    description?: StringNullableFilter<'Tournament'> | string | null;
    rules?: StringNullableFilter<'Tournament'> | string | null;
    format?: EnumTournamentFormatFilter<'Tournament'> | $Enums.TournamentFormat;
    status?: EnumTournamentStatusFilter<'Tournament'> | $Enums.TournamentStatus;
    points_win?: IntFilter<'Tournament'> | number;
    points_draw?: IntFilter<'Tournament'> | number;
    points_loss?: IntFilter<'Tournament'> | number;
    playoff_teams?: IntNullableFilter<'Tournament'> | number | null;
    organizer_id?: StringFilter<'Tournament'> | string;
    created_at?: DateTimeFilter<'Tournament'> | Date | string;
    updated_at?: DateTimeFilter<'Tournament'> | Date | string;
    organizer?: XOR<OrganizerScalarRelationFilter, OrganizerWhereInput>;
    teams?: TeamListRelationFilter;
    matches?: MatchListRelationFilter;
    standings?: StandingsListRelationFilter;
    match_events?: MatchEventListRelationFilter;
  };

  export type TournamentOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    rules?: SortOrderInput | SortOrder;
    format?: SortOrder;
    status?: SortOrder;
    points_win?: SortOrder;
    points_draw?: SortOrder;
    points_loss?: SortOrder;
    playoff_teams?: SortOrderInput | SortOrder;
    organizer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    organizer?: OrganizerOrderByWithRelationInput;
    teams?: TeamOrderByRelationAggregateInput;
    matches?: MatchOrderByRelationAggregateInput;
    standings?: StandingsOrderByRelationAggregateInput;
    match_events?: MatchEventOrderByRelationAggregateInput;
  };

  export type TournamentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: TournamentWhereInput | TournamentWhereInput[];
      OR?: TournamentWhereInput[];
      NOT?: TournamentWhereInput | TournamentWhereInput[];
      name?: StringFilter<'Tournament'> | string;
      description?: StringNullableFilter<'Tournament'> | string | null;
      rules?: StringNullableFilter<'Tournament'> | string | null;
      format?:
        | EnumTournamentFormatFilter<'Tournament'>
        | $Enums.TournamentFormat;
      status?:
        | EnumTournamentStatusFilter<'Tournament'>
        | $Enums.TournamentStatus;
      points_win?: IntFilter<'Tournament'> | number;
      points_draw?: IntFilter<'Tournament'> | number;
      points_loss?: IntFilter<'Tournament'> | number;
      playoff_teams?: IntNullableFilter<'Tournament'> | number | null;
      organizer_id?: StringFilter<'Tournament'> | string;
      created_at?: DateTimeFilter<'Tournament'> | Date | string;
      updated_at?: DateTimeFilter<'Tournament'> | Date | string;
      organizer?: XOR<OrganizerScalarRelationFilter, OrganizerWhereInput>;
      teams?: TeamListRelationFilter;
      matches?: MatchListRelationFilter;
      standings?: StandingsListRelationFilter;
      match_events?: MatchEventListRelationFilter;
    },
    'id'
  >;

  export type TournamentOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    rules?: SortOrderInput | SortOrder;
    format?: SortOrder;
    status?: SortOrder;
    points_win?: SortOrder;
    points_draw?: SortOrder;
    points_loss?: SortOrder;
    playoff_teams?: SortOrderInput | SortOrder;
    organizer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: TournamentCountOrderByAggregateInput;
    _avg?: TournamentAvgOrderByAggregateInput;
    _max?: TournamentMaxOrderByAggregateInput;
    _min?: TournamentMinOrderByAggregateInput;
    _sum?: TournamentSumOrderByAggregateInput;
  };

  export type TournamentScalarWhereWithAggregatesInput = {
    AND?:
      | TournamentScalarWhereWithAggregatesInput
      | TournamentScalarWhereWithAggregatesInput[];
    OR?: TournamentScalarWhereWithAggregatesInput[];
    NOT?:
      | TournamentScalarWhereWithAggregatesInput
      | TournamentScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Tournament'> | string;
    name?: StringWithAggregatesFilter<'Tournament'> | string;
    description?:
      | StringNullableWithAggregatesFilter<'Tournament'>
      | string
      | null;
    rules?: StringNullableWithAggregatesFilter<'Tournament'> | string | null;
    format?:
      | EnumTournamentFormatWithAggregatesFilter<'Tournament'>
      | $Enums.TournamentFormat;
    status?:
      | EnumTournamentStatusWithAggregatesFilter<'Tournament'>
      | $Enums.TournamentStatus;
    points_win?: IntWithAggregatesFilter<'Tournament'> | number;
    points_draw?: IntWithAggregatesFilter<'Tournament'> | number;
    points_loss?: IntWithAggregatesFilter<'Tournament'> | number;
    playoff_teams?:
      | IntNullableWithAggregatesFilter<'Tournament'>
      | number
      | null;
    organizer_id?: StringWithAggregatesFilter<'Tournament'> | string;
    created_at?: DateTimeWithAggregatesFilter<'Tournament'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Tournament'> | Date | string;
  };

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[];
    OR?: TeamWhereInput[];
    NOT?: TeamWhereInput | TeamWhereInput[];
    id?: StringFilter<'Team'> | string;
    name?: StringFilter<'Team'> | string;
    logo_url?: StringNullableFilter<'Team'> | string | null;
    tournament_id?: StringFilter<'Team'> | string;
    created_at?: DateTimeFilter<'Team'> | Date | string;
    updated_at?: DateTimeFilter<'Team'> | Date | string;
    tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>;
    standings?: StandingsListRelationFilter;
    match_events?: MatchEventListRelationFilter;
    matches_as_team_a?: MatchListRelationFilter;
    matches_as_team_b?: MatchListRelationFilter;
  };

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    logo_url?: SortOrderInput | SortOrder;
    tournament_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tournament?: TournamentOrderByWithRelationInput;
    standings?: StandingsOrderByRelationAggregateInput;
    match_events?: MatchEventOrderByRelationAggregateInput;
    matches_as_team_a?: MatchOrderByRelationAggregateInput;
    matches_as_team_b?: MatchOrderByRelationAggregateInput;
  };

  export type TeamWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: TeamWhereInput | TeamWhereInput[];
      OR?: TeamWhereInput[];
      NOT?: TeamWhereInput | TeamWhereInput[];
      name?: StringFilter<'Team'> | string;
      logo_url?: StringNullableFilter<'Team'> | string | null;
      tournament_id?: StringFilter<'Team'> | string;
      created_at?: DateTimeFilter<'Team'> | Date | string;
      updated_at?: DateTimeFilter<'Team'> | Date | string;
      tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>;
      standings?: StandingsListRelationFilter;
      match_events?: MatchEventListRelationFilter;
      matches_as_team_a?: MatchListRelationFilter;
      matches_as_team_b?: MatchListRelationFilter;
    },
    'id'
  >;

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    logo_url?: SortOrderInput | SortOrder;
    tournament_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: TeamCountOrderByAggregateInput;
    _max?: TeamMaxOrderByAggregateInput;
    _min?: TeamMinOrderByAggregateInput;
  };

  export type TeamScalarWhereWithAggregatesInput = {
    AND?:
      | TeamScalarWhereWithAggregatesInput
      | TeamScalarWhereWithAggregatesInput[];
    OR?: TeamScalarWhereWithAggregatesInput[];
    NOT?:
      | TeamScalarWhereWithAggregatesInput
      | TeamScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Team'> | string;
    name?: StringWithAggregatesFilter<'Team'> | string;
    logo_url?: StringNullableWithAggregatesFilter<'Team'> | string | null;
    tournament_id?: StringWithAggregatesFilter<'Team'> | string;
    created_at?: DateTimeWithAggregatesFilter<'Team'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Team'> | Date | string;
  };

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[];
    OR?: MatchWhereInput[];
    NOT?: MatchWhereInput | MatchWhereInput[];
    id?: StringFilter<'Match'> | string;
    tournament_id?: StringFilter<'Match'> | string;
    team_a_id?: StringFilter<'Match'> | string;
    team_b_id?: StringFilter<'Match'> | string;
    team_a_score?: IntFilter<'Match'> | number;
    team_b_score?: IntFilter<'Match'> | number;
    match_date?: DateTimeFilter<'Match'> | Date | string;
    status?: EnumMatchStatusFilter<'Match'> | $Enums.MatchStatus;
    created_at?: DateTimeFilter<'Match'> | Date | string;
    updated_at?: DateTimeFilter<'Match'> | Date | string;
    tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>;
    team_a?: XOR<TeamScalarRelationFilter, TeamWhereInput>;
    team_b?: XOR<TeamScalarRelationFilter, TeamWhereInput>;
    events?: MatchEventListRelationFilter;
  };

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder;
    tournament_id?: SortOrder;
    team_a_id?: SortOrder;
    team_b_id?: SortOrder;
    team_a_score?: SortOrder;
    team_b_score?: SortOrder;
    match_date?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tournament?: TournamentOrderByWithRelationInput;
    team_a?: TeamOrderByWithRelationInput;
    team_b?: TeamOrderByWithRelationInput;
    events?: MatchEventOrderByRelationAggregateInput;
  };

  export type MatchWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: MatchWhereInput | MatchWhereInput[];
      OR?: MatchWhereInput[];
      NOT?: MatchWhereInput | MatchWhereInput[];
      tournament_id?: StringFilter<'Match'> | string;
      team_a_id?: StringFilter<'Match'> | string;
      team_b_id?: StringFilter<'Match'> | string;
      team_a_score?: IntFilter<'Match'> | number;
      team_b_score?: IntFilter<'Match'> | number;
      match_date?: DateTimeFilter<'Match'> | Date | string;
      status?: EnumMatchStatusFilter<'Match'> | $Enums.MatchStatus;
      created_at?: DateTimeFilter<'Match'> | Date | string;
      updated_at?: DateTimeFilter<'Match'> | Date | string;
      tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>;
      team_a?: XOR<TeamScalarRelationFilter, TeamWhereInput>;
      team_b?: XOR<TeamScalarRelationFilter, TeamWhereInput>;
      events?: MatchEventListRelationFilter;
    },
    'id'
  >;

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder;
    tournament_id?: SortOrder;
    team_a_id?: SortOrder;
    team_b_id?: SortOrder;
    team_a_score?: SortOrder;
    team_b_score?: SortOrder;
    match_date?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: MatchCountOrderByAggregateInput;
    _avg?: MatchAvgOrderByAggregateInput;
    _max?: MatchMaxOrderByAggregateInput;
    _min?: MatchMinOrderByAggregateInput;
    _sum?: MatchSumOrderByAggregateInput;
  };

  export type MatchScalarWhereWithAggregatesInput = {
    AND?:
      | MatchScalarWhereWithAggregatesInput
      | MatchScalarWhereWithAggregatesInput[];
    OR?: MatchScalarWhereWithAggregatesInput[];
    NOT?:
      | MatchScalarWhereWithAggregatesInput
      | MatchScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Match'> | string;
    tournament_id?: StringWithAggregatesFilter<'Match'> | string;
    team_a_id?: StringWithAggregatesFilter<'Match'> | string;
    team_b_id?: StringWithAggregatesFilter<'Match'> | string;
    team_a_score?: IntWithAggregatesFilter<'Match'> | number;
    team_b_score?: IntWithAggregatesFilter<'Match'> | number;
    match_date?: DateTimeWithAggregatesFilter<'Match'> | Date | string;
    status?: EnumMatchStatusWithAggregatesFilter<'Match'> | $Enums.MatchStatus;
    created_at?: DateTimeWithAggregatesFilter<'Match'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Match'> | Date | string;
  };

  export type StandingsWhereInput = {
    AND?: StandingsWhereInput | StandingsWhereInput[];
    OR?: StandingsWhereInput[];
    NOT?: StandingsWhereInput | StandingsWhereInput[];
    id?: StringFilter<'Standings'> | string;
    tournament_id?: StringFilter<'Standings'> | string;
    team_id?: StringFilter<'Standings'> | string;
    played?: IntFilter<'Standings'> | number;
    wins?: IntFilter<'Standings'> | number;
    draws?: IntFilter<'Standings'> | number;
    losses?: IntFilter<'Standings'> | number;
    goals_for?: IntFilter<'Standings'> | number;
    goals_against?: IntFilter<'Standings'> | number;
    goal_difference?: IntFilter<'Standings'> | number;
    points?: IntFilter<'Standings'> | number;
    created_at?: DateTimeFilter<'Standings'> | Date | string;
    updated_at?: DateTimeFilter<'Standings'> | Date | string;
    tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>;
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>;
  };

  export type StandingsOrderByWithRelationInput = {
    id?: SortOrder;
    tournament_id?: SortOrder;
    team_id?: SortOrder;
    played?: SortOrder;
    wins?: SortOrder;
    draws?: SortOrder;
    losses?: SortOrder;
    goals_for?: SortOrder;
    goals_against?: SortOrder;
    goal_difference?: SortOrder;
    points?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tournament?: TournamentOrderByWithRelationInput;
    team?: TeamOrderByWithRelationInput;
  };

  export type StandingsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: StandingsWhereInput | StandingsWhereInput[];
      OR?: StandingsWhereInput[];
      NOT?: StandingsWhereInput | StandingsWhereInput[];
      tournament_id?: StringFilter<'Standings'> | string;
      team_id?: StringFilter<'Standings'> | string;
      played?: IntFilter<'Standings'> | number;
      wins?: IntFilter<'Standings'> | number;
      draws?: IntFilter<'Standings'> | number;
      losses?: IntFilter<'Standings'> | number;
      goals_for?: IntFilter<'Standings'> | number;
      goals_against?: IntFilter<'Standings'> | number;
      goal_difference?: IntFilter<'Standings'> | number;
      points?: IntFilter<'Standings'> | number;
      created_at?: DateTimeFilter<'Standings'> | Date | string;
      updated_at?: DateTimeFilter<'Standings'> | Date | string;
      tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>;
      team?: XOR<TeamScalarRelationFilter, TeamWhereInput>;
    },
    'id'
  >;

  export type StandingsOrderByWithAggregationInput = {
    id?: SortOrder;
    tournament_id?: SortOrder;
    team_id?: SortOrder;
    played?: SortOrder;
    wins?: SortOrder;
    draws?: SortOrder;
    losses?: SortOrder;
    goals_for?: SortOrder;
    goals_against?: SortOrder;
    goal_difference?: SortOrder;
    points?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: StandingsCountOrderByAggregateInput;
    _avg?: StandingsAvgOrderByAggregateInput;
    _max?: StandingsMaxOrderByAggregateInput;
    _min?: StandingsMinOrderByAggregateInput;
    _sum?: StandingsSumOrderByAggregateInput;
  };

  export type StandingsScalarWhereWithAggregatesInput = {
    AND?:
      | StandingsScalarWhereWithAggregatesInput
      | StandingsScalarWhereWithAggregatesInput[];
    OR?: StandingsScalarWhereWithAggregatesInput[];
    NOT?:
      | StandingsScalarWhereWithAggregatesInput
      | StandingsScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Standings'> | string;
    tournament_id?: StringWithAggregatesFilter<'Standings'> | string;
    team_id?: StringWithAggregatesFilter<'Standings'> | string;
    played?: IntWithAggregatesFilter<'Standings'> | number;
    wins?: IntWithAggregatesFilter<'Standings'> | number;
    draws?: IntWithAggregatesFilter<'Standings'> | number;
    losses?: IntWithAggregatesFilter<'Standings'> | number;
    goals_for?: IntWithAggregatesFilter<'Standings'> | number;
    goals_against?: IntWithAggregatesFilter<'Standings'> | number;
    goal_difference?: IntWithAggregatesFilter<'Standings'> | number;
    points?: IntWithAggregatesFilter<'Standings'> | number;
    created_at?: DateTimeWithAggregatesFilter<'Standings'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Standings'> | Date | string;
  };

  export type MatchEventWhereInput = {
    AND?: MatchEventWhereInput | MatchEventWhereInput[];
    OR?: MatchEventWhereInput[];
    NOT?: MatchEventWhereInput | MatchEventWhereInput[];
    id?: StringFilter<'MatchEvent'> | string;
    match_id?: StringFilter<'MatchEvent'> | string;
    tournament_id?: StringFilter<'MatchEvent'> | string;
    team_id?: StringFilter<'MatchEvent'> | string;
    type?: EnumEventTypeFilter<'MatchEvent'> | $Enums.EventType;
    player_name?: StringFilter<'MatchEvent'> | string;
    created_at?: DateTimeFilter<'MatchEvent'> | Date | string;
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>;
    tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>;
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>;
  };

  export type MatchEventOrderByWithRelationInput = {
    id?: SortOrder;
    match_id?: SortOrder;
    tournament_id?: SortOrder;
    team_id?: SortOrder;
    type?: SortOrder;
    player_name?: SortOrder;
    created_at?: SortOrder;
    match?: MatchOrderByWithRelationInput;
    tournament?: TournamentOrderByWithRelationInput;
    team?: TeamOrderByWithRelationInput;
  };

  export type MatchEventWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: MatchEventWhereInput | MatchEventWhereInput[];
      OR?: MatchEventWhereInput[];
      NOT?: MatchEventWhereInput | MatchEventWhereInput[];
      match_id?: StringFilter<'MatchEvent'> | string;
      tournament_id?: StringFilter<'MatchEvent'> | string;
      team_id?: StringFilter<'MatchEvent'> | string;
      type?: EnumEventTypeFilter<'MatchEvent'> | $Enums.EventType;
      player_name?: StringFilter<'MatchEvent'> | string;
      created_at?: DateTimeFilter<'MatchEvent'> | Date | string;
      match?: XOR<MatchScalarRelationFilter, MatchWhereInput>;
      tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>;
      team?: XOR<TeamScalarRelationFilter, TeamWhereInput>;
    },
    'id'
  >;

  export type MatchEventOrderByWithAggregationInput = {
    id?: SortOrder;
    match_id?: SortOrder;
    tournament_id?: SortOrder;
    team_id?: SortOrder;
    type?: SortOrder;
    player_name?: SortOrder;
    created_at?: SortOrder;
    _count?: MatchEventCountOrderByAggregateInput;
    _max?: MatchEventMaxOrderByAggregateInput;
    _min?: MatchEventMinOrderByAggregateInput;
  };

  export type MatchEventScalarWhereWithAggregatesInput = {
    AND?:
      | MatchEventScalarWhereWithAggregatesInput
      | MatchEventScalarWhereWithAggregatesInput[];
    OR?: MatchEventScalarWhereWithAggregatesInput[];
    NOT?:
      | MatchEventScalarWhereWithAggregatesInput
      | MatchEventScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'MatchEvent'> | string;
    match_id?: StringWithAggregatesFilter<'MatchEvent'> | string;
    tournament_id?: StringWithAggregatesFilter<'MatchEvent'> | string;
    team_id?: StringWithAggregatesFilter<'MatchEvent'> | string;
    type?: EnumEventTypeWithAggregatesFilter<'MatchEvent'> | $Enums.EventType;
    player_name?: StringWithAggregatesFilter<'MatchEvent'> | string;
    created_at?: DateTimeWithAggregatesFilter<'MatchEvent'> | Date | string;
  };

  export type OrganizerCreateInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tournaments?: TournamentCreateNestedManyWithoutOrganizerInput;
  };

  export type OrganizerUncheckedCreateInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tournaments?: TournamentUncheckedCreateNestedManyWithoutOrganizerInput;
  };

  export type OrganizerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tournaments?: TournamentUpdateManyWithoutOrganizerNestedInput;
  };

  export type OrganizerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tournaments?: TournamentUncheckedUpdateManyWithoutOrganizerNestedInput;
  };

  export type OrganizerCreateManyInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type OrganizerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TournamentCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    rules?: string | null;
    format: $Enums.TournamentFormat;
    status?: $Enums.TournamentStatus;
    points_win?: number;
    points_draw?: number;
    points_loss?: number;
    playoff_teams?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organizer: OrganizerCreateNestedOneWithoutTournamentsInput;
    teams?: TeamCreateNestedManyWithoutTournamentInput;
    matches?: MatchCreateNestedManyWithoutTournamentInput;
    standings?: StandingsCreateNestedManyWithoutTournamentInput;
    match_events?: MatchEventCreateNestedManyWithoutTournamentInput;
  };

  export type TournamentUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    rules?: string | null;
    format: $Enums.TournamentFormat;
    status?: $Enums.TournamentStatus;
    points_win?: number;
    points_draw?: number;
    points_loss?: number;
    playoff_teams?: number | null;
    organizer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    teams?: TeamUncheckedCreateNestedManyWithoutTournamentInput;
    matches?: MatchUncheckedCreateNestedManyWithoutTournamentInput;
    standings?: StandingsUncheckedCreateNestedManyWithoutTournamentInput;
    match_events?: MatchEventUncheckedCreateNestedManyWithoutTournamentInput;
  };

  export type TournamentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    rules?: NullableStringFieldUpdateOperationsInput | string | null;
    format?:
      | EnumTournamentFormatFieldUpdateOperationsInput
      | $Enums.TournamentFormat;
    status?:
      | EnumTournamentStatusFieldUpdateOperationsInput
      | $Enums.TournamentStatus;
    points_win?: IntFieldUpdateOperationsInput | number;
    points_draw?: IntFieldUpdateOperationsInput | number;
    points_loss?: IntFieldUpdateOperationsInput | number;
    playoff_teams?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organizer?: OrganizerUpdateOneRequiredWithoutTournamentsNestedInput;
    teams?: TeamUpdateManyWithoutTournamentNestedInput;
    matches?: MatchUpdateManyWithoutTournamentNestedInput;
    standings?: StandingsUpdateManyWithoutTournamentNestedInput;
    match_events?: MatchEventUpdateManyWithoutTournamentNestedInput;
  };

  export type TournamentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    rules?: NullableStringFieldUpdateOperationsInput | string | null;
    format?:
      | EnumTournamentFormatFieldUpdateOperationsInput
      | $Enums.TournamentFormat;
    status?:
      | EnumTournamentStatusFieldUpdateOperationsInput
      | $Enums.TournamentStatus;
    points_win?: IntFieldUpdateOperationsInput | number;
    points_draw?: IntFieldUpdateOperationsInput | number;
    points_loss?: IntFieldUpdateOperationsInput | number;
    playoff_teams?: NullableIntFieldUpdateOperationsInput | number | null;
    organizer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    teams?: TeamUncheckedUpdateManyWithoutTournamentNestedInput;
    matches?: MatchUncheckedUpdateManyWithoutTournamentNestedInput;
    standings?: StandingsUncheckedUpdateManyWithoutTournamentNestedInput;
    match_events?: MatchEventUncheckedUpdateManyWithoutTournamentNestedInput;
  };

  export type TournamentCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    rules?: string | null;
    format: $Enums.TournamentFormat;
    status?: $Enums.TournamentStatus;
    points_win?: number;
    points_draw?: number;
    points_loss?: number;
    playoff_teams?: number | null;
    organizer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type TournamentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    rules?: NullableStringFieldUpdateOperationsInput | string | null;
    format?:
      | EnumTournamentFormatFieldUpdateOperationsInput
      | $Enums.TournamentFormat;
    status?:
      | EnumTournamentStatusFieldUpdateOperationsInput
      | $Enums.TournamentStatus;
    points_win?: IntFieldUpdateOperationsInput | number;
    points_draw?: IntFieldUpdateOperationsInput | number;
    points_loss?: IntFieldUpdateOperationsInput | number;
    playoff_teams?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TournamentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    rules?: NullableStringFieldUpdateOperationsInput | string | null;
    format?:
      | EnumTournamentFormatFieldUpdateOperationsInput
      | $Enums.TournamentFormat;
    status?:
      | EnumTournamentStatusFieldUpdateOperationsInput
      | $Enums.TournamentStatus;
    points_win?: IntFieldUpdateOperationsInput | number;
    points_draw?: IntFieldUpdateOperationsInput | number;
    points_loss?: IntFieldUpdateOperationsInput | number;
    playoff_teams?: NullableIntFieldUpdateOperationsInput | number | null;
    organizer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TeamCreateInput = {
    id?: string;
    name: string;
    logo_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tournament: TournamentCreateNestedOneWithoutTeamsInput;
    standings?: StandingsCreateNestedManyWithoutTeamInput;
    match_events?: MatchEventCreateNestedManyWithoutTeamInput;
    matches_as_team_a?: MatchCreateNestedManyWithoutTeam_aInput;
    matches_as_team_b?: MatchCreateNestedManyWithoutTeam_bInput;
  };

  export type TeamUncheckedCreateInput = {
    id?: string;
    name: string;
    logo_url?: string | null;
    tournament_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    standings?: StandingsUncheckedCreateNestedManyWithoutTeamInput;
    match_events?: MatchEventUncheckedCreateNestedManyWithoutTeamInput;
    matches_as_team_a?: MatchUncheckedCreateNestedManyWithoutTeam_aInput;
    matches_as_team_b?: MatchUncheckedCreateNestedManyWithoutTeam_bInput;
  };

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: TournamentUpdateOneRequiredWithoutTeamsNestedInput;
    standings?: StandingsUpdateManyWithoutTeamNestedInput;
    match_events?: MatchEventUpdateManyWithoutTeamNestedInput;
    matches_as_team_a?: MatchUpdateManyWithoutTeam_aNestedInput;
    matches_as_team_b?: MatchUpdateManyWithoutTeam_bNestedInput;
  };

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null;
    tournament_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    standings?: StandingsUncheckedUpdateManyWithoutTeamNestedInput;
    match_events?: MatchEventUncheckedUpdateManyWithoutTeamNestedInput;
    matches_as_team_a?: MatchUncheckedUpdateManyWithoutTeam_aNestedInput;
    matches_as_team_b?: MatchUncheckedUpdateManyWithoutTeam_bNestedInput;
  };

  export type TeamCreateManyInput = {
    id?: string;
    name: string;
    logo_url?: string | null;
    tournament_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null;
    tournament_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MatchCreateInput = {
    id?: string;
    team_a_score?: number;
    team_b_score?: number;
    match_date: Date | string;
    status?: $Enums.MatchStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    tournament: TournamentCreateNestedOneWithoutMatchesInput;
    team_a: TeamCreateNestedOneWithoutMatches_as_team_aInput;
    team_b: TeamCreateNestedOneWithoutMatches_as_team_bInput;
    events?: MatchEventCreateNestedManyWithoutMatchInput;
  };

  export type MatchUncheckedCreateInput = {
    id?: string;
    tournament_id: string;
    team_a_id: string;
    team_b_id: string;
    team_a_score?: number;
    team_b_score?: number;
    match_date: Date | string;
    status?: $Enums.MatchStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    events?: MatchEventUncheckedCreateNestedManyWithoutMatchInput;
  };

  export type MatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    team_a_score?: IntFieldUpdateOperationsInput | number;
    team_b_score?: IntFieldUpdateOperationsInput | number;
    match_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: TournamentUpdateOneRequiredWithoutMatchesNestedInput;
    team_a?: TeamUpdateOneRequiredWithoutMatches_as_team_aNestedInput;
    team_b?: TeamUpdateOneRequiredWithoutMatches_as_team_bNestedInput;
    events?: MatchEventUpdateManyWithoutMatchNestedInput;
  };

  export type MatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tournament_id?: StringFieldUpdateOperationsInput | string;
    team_a_id?: StringFieldUpdateOperationsInput | string;
    team_b_id?: StringFieldUpdateOperationsInput | string;
    team_a_score?: IntFieldUpdateOperationsInput | number;
    team_b_score?: IntFieldUpdateOperationsInput | number;
    match_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    events?: MatchEventUncheckedUpdateManyWithoutMatchNestedInput;
  };

  export type MatchCreateManyInput = {
    id?: string;
    tournament_id: string;
    team_a_id: string;
    team_b_id: string;
    team_a_score?: number;
    team_b_score?: number;
    match_date: Date | string;
    status?: $Enums.MatchStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type MatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    team_a_score?: IntFieldUpdateOperationsInput | number;
    team_b_score?: IntFieldUpdateOperationsInput | number;
    match_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tournament_id?: StringFieldUpdateOperationsInput | string;
    team_a_id?: StringFieldUpdateOperationsInput | string;
    team_b_id?: StringFieldUpdateOperationsInput | string;
    team_a_score?: IntFieldUpdateOperationsInput | number;
    team_b_score?: IntFieldUpdateOperationsInput | number;
    match_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StandingsCreateInput = {
    id?: string;
    played?: number;
    wins?: number;
    draws?: number;
    losses?: number;
    goals_for?: number;
    goals_against?: number;
    goal_difference?: number;
    points?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    tournament: TournamentCreateNestedOneWithoutStandingsInput;
    team: TeamCreateNestedOneWithoutStandingsInput;
  };

  export type StandingsUncheckedCreateInput = {
    id?: string;
    tournament_id: string;
    team_id: string;
    played?: number;
    wins?: number;
    draws?: number;
    losses?: number;
    goals_for?: number;
    goals_against?: number;
    goal_difference?: number;
    points?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type StandingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    played?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    draws?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    goals_for?: IntFieldUpdateOperationsInput | number;
    goals_against?: IntFieldUpdateOperationsInput | number;
    goal_difference?: IntFieldUpdateOperationsInput | number;
    points?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: TournamentUpdateOneRequiredWithoutStandingsNestedInput;
    team?: TeamUpdateOneRequiredWithoutStandingsNestedInput;
  };

  export type StandingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tournament_id?: StringFieldUpdateOperationsInput | string;
    team_id?: StringFieldUpdateOperationsInput | string;
    played?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    draws?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    goals_for?: IntFieldUpdateOperationsInput | number;
    goals_against?: IntFieldUpdateOperationsInput | number;
    goal_difference?: IntFieldUpdateOperationsInput | number;
    points?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StandingsCreateManyInput = {
    id?: string;
    tournament_id: string;
    team_id: string;
    played?: number;
    wins?: number;
    draws?: number;
    losses?: number;
    goals_for?: number;
    goals_against?: number;
    goal_difference?: number;
    points?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type StandingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    played?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    draws?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    goals_for?: IntFieldUpdateOperationsInput | number;
    goals_against?: IntFieldUpdateOperationsInput | number;
    goal_difference?: IntFieldUpdateOperationsInput | number;
    points?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StandingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tournament_id?: StringFieldUpdateOperationsInput | string;
    team_id?: StringFieldUpdateOperationsInput | string;
    played?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    draws?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    goals_for?: IntFieldUpdateOperationsInput | number;
    goals_against?: IntFieldUpdateOperationsInput | number;
    goal_difference?: IntFieldUpdateOperationsInput | number;
    points?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MatchEventCreateInput = {
    id?: string;
    type: $Enums.EventType;
    player_name: string;
    created_at?: Date | string;
    match: MatchCreateNestedOneWithoutEventsInput;
    tournament: TournamentCreateNestedOneWithoutMatch_eventsInput;
    team: TeamCreateNestedOneWithoutMatch_eventsInput;
  };

  export type MatchEventUncheckedCreateInput = {
    id?: string;
    match_id: string;
    tournament_id: string;
    team_id: string;
    type: $Enums.EventType;
    player_name: string;
    created_at?: Date | string;
  };

  export type MatchEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    player_name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    match?: MatchUpdateOneRequiredWithoutEventsNestedInput;
    tournament?: TournamentUpdateOneRequiredWithoutMatch_eventsNestedInput;
    team?: TeamUpdateOneRequiredWithoutMatch_eventsNestedInput;
  };

  export type MatchEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    match_id?: StringFieldUpdateOperationsInput | string;
    tournament_id?: StringFieldUpdateOperationsInput | string;
    team_id?: StringFieldUpdateOperationsInput | string;
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    player_name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MatchEventCreateManyInput = {
    id?: string;
    match_id: string;
    tournament_id: string;
    team_id: string;
    type: $Enums.EventType;
    player_name: string;
    created_at?: Date | string;
  };

  export type MatchEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    player_name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MatchEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    match_id?: StringFieldUpdateOperationsInput | string;
    tournament_id?: StringFieldUpdateOperationsInput | string;
    team_id?: StringFieldUpdateOperationsInput | string;
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    player_name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type TournamentListRelationFilter = {
    every?: TournamentWhereInput;
    some?: TournamentWhereInput;
    none?: TournamentWhereInput;
  };

  export type TournamentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type OrganizerCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type OrganizerMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type OrganizerMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type EnumTournamentFormatFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TournamentFormat
      | EnumTournamentFormatFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TournamentFormat[]
      | ListEnumTournamentFormatFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TournamentFormat[]
      | ListEnumTournamentFormatFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTournamentFormatFilter<$PrismaModel>
      | $Enums.TournamentFormat;
  };

  export type EnumTournamentStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TournamentStatus
      | EnumTournamentStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TournamentStatus[]
      | ListEnumTournamentStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TournamentStatus[]
      | ListEnumTournamentStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTournamentStatusFilter<$PrismaModel>
      | $Enums.TournamentStatus;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type OrganizerScalarRelationFilter = {
    is?: OrganizerWhereInput;
    isNot?: OrganizerWhereInput;
  };

  export type TeamListRelationFilter = {
    every?: TeamWhereInput;
    some?: TeamWhereInput;
    none?: TeamWhereInput;
  };

  export type MatchListRelationFilter = {
    every?: MatchWhereInput;
    some?: MatchWhereInput;
    none?: MatchWhereInput;
  };

  export type StandingsListRelationFilter = {
    every?: StandingsWhereInput;
    some?: StandingsWhereInput;
    none?: StandingsWhereInput;
  };

  export type MatchEventListRelationFilter = {
    every?: MatchEventWhereInput;
    some?: MatchEventWhereInput;
    none?: MatchEventWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type StandingsOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type MatchEventOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type TournamentCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    rules?: SortOrder;
    format?: SortOrder;
    status?: SortOrder;
    points_win?: SortOrder;
    points_draw?: SortOrder;
    points_loss?: SortOrder;
    playoff_teams?: SortOrder;
    organizer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type TournamentAvgOrderByAggregateInput = {
    points_win?: SortOrder;
    points_draw?: SortOrder;
    points_loss?: SortOrder;
    playoff_teams?: SortOrder;
  };

  export type TournamentMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    rules?: SortOrder;
    format?: SortOrder;
    status?: SortOrder;
    points_win?: SortOrder;
    points_draw?: SortOrder;
    points_loss?: SortOrder;
    playoff_teams?: SortOrder;
    organizer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type TournamentMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    rules?: SortOrder;
    format?: SortOrder;
    status?: SortOrder;
    points_win?: SortOrder;
    points_draw?: SortOrder;
    points_loss?: SortOrder;
    playoff_teams?: SortOrder;
    organizer_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type TournamentSumOrderByAggregateInput = {
    points_win?: SortOrder;
    points_draw?: SortOrder;
    points_loss?: SortOrder;
    playoff_teams?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type EnumTournamentFormatWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TournamentFormat
      | EnumTournamentFormatFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TournamentFormat[]
      | ListEnumTournamentFormatFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TournamentFormat[]
      | ListEnumTournamentFormatFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTournamentFormatWithAggregatesFilter<$PrismaModel>
      | $Enums.TournamentFormat;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTournamentFormatFilter<$PrismaModel>;
    _max?: NestedEnumTournamentFormatFilter<$PrismaModel>;
  };

  export type EnumTournamentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TournamentStatus
      | EnumTournamentStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TournamentStatus[]
      | ListEnumTournamentStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TournamentStatus[]
      | ListEnumTournamentStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTournamentStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.TournamentStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTournamentStatusFilter<$PrismaModel>;
    _max?: NestedEnumTournamentStatusFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type TournamentScalarRelationFilter = {
    is?: TournamentWhereInput;
    isNot?: TournamentWhereInput;
  };

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    logo_url?: SortOrder;
    tournament_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    logo_url?: SortOrder;
    tournament_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    logo_url?: SortOrder;
    tournament_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type EnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.MatchStatus[]
      | ListEnumMatchStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus;
  };

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput;
    isNot?: TeamWhereInput;
  };

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder;
    tournament_id?: SortOrder;
    team_a_id?: SortOrder;
    team_b_id?: SortOrder;
    team_a_score?: SortOrder;
    team_b_score?: SortOrder;
    match_date?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type MatchAvgOrderByAggregateInput = {
    team_a_score?: SortOrder;
    team_b_score?: SortOrder;
  };

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder;
    tournament_id?: SortOrder;
    team_a_id?: SortOrder;
    team_b_id?: SortOrder;
    team_a_score?: SortOrder;
    team_b_score?: SortOrder;
    match_date?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder;
    tournament_id?: SortOrder;
    team_a_id?: SortOrder;
    team_b_id?: SortOrder;
    team_a_score?: SortOrder;
    team_b_score?: SortOrder;
    match_date?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type MatchSumOrderByAggregateInput = {
    team_a_score?: SortOrder;
    team_b_score?: SortOrder;
  };

  export type EnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.MatchStatus[]
      | ListEnumMatchStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.MatchStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumMatchStatusFilter<$PrismaModel>;
    _max?: NestedEnumMatchStatusFilter<$PrismaModel>;
  };

  export type StandingsCountOrderByAggregateInput = {
    id?: SortOrder;
    tournament_id?: SortOrder;
    team_id?: SortOrder;
    played?: SortOrder;
    wins?: SortOrder;
    draws?: SortOrder;
    losses?: SortOrder;
    goals_for?: SortOrder;
    goals_against?: SortOrder;
    goal_difference?: SortOrder;
    points?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StandingsAvgOrderByAggregateInput = {
    played?: SortOrder;
    wins?: SortOrder;
    draws?: SortOrder;
    losses?: SortOrder;
    goals_for?: SortOrder;
    goals_against?: SortOrder;
    goal_difference?: SortOrder;
    points?: SortOrder;
  };

  export type StandingsMaxOrderByAggregateInput = {
    id?: SortOrder;
    tournament_id?: SortOrder;
    team_id?: SortOrder;
    played?: SortOrder;
    wins?: SortOrder;
    draws?: SortOrder;
    losses?: SortOrder;
    goals_for?: SortOrder;
    goals_against?: SortOrder;
    goal_difference?: SortOrder;
    points?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StandingsMinOrderByAggregateInput = {
    id?: SortOrder;
    tournament_id?: SortOrder;
    team_id?: SortOrder;
    played?: SortOrder;
    wins?: SortOrder;
    draws?: SortOrder;
    losses?: SortOrder;
    goals_for?: SortOrder;
    goals_against?: SortOrder;
    goal_difference?: SortOrder;
    points?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StandingsSumOrderByAggregateInput = {
    played?: SortOrder;
    wins?: SortOrder;
    draws?: SortOrder;
    losses?: SortOrder;
    goals_for?: SortOrder;
    goals_against?: SortOrder;
    goal_difference?: SortOrder;
    points?: SortOrder;
  };

  export type EnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType;
  };

  export type MatchScalarRelationFilter = {
    is?: MatchWhereInput;
    isNot?: MatchWhereInput;
  };

  export type MatchEventCountOrderByAggregateInput = {
    id?: SortOrder;
    match_id?: SortOrder;
    tournament_id?: SortOrder;
    team_id?: SortOrder;
    type?: SortOrder;
    player_name?: SortOrder;
    created_at?: SortOrder;
  };

  export type MatchEventMaxOrderByAggregateInput = {
    id?: SortOrder;
    match_id?: SortOrder;
    tournament_id?: SortOrder;
    team_id?: SortOrder;
    type?: SortOrder;
    player_name?: SortOrder;
    created_at?: SortOrder;
  };

  export type MatchEventMinOrderByAggregateInput = {
    id?: SortOrder;
    match_id?: SortOrder;
    tournament_id?: SortOrder;
    team_id?: SortOrder;
    type?: SortOrder;
    player_name?: SortOrder;
    created_at?: SortOrder;
  };

  export type EnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumEventTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.EventType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumEventTypeFilter<$PrismaModel>;
    _max?: NestedEnumEventTypeFilter<$PrismaModel>;
  };

  export type TournamentCreateNestedManyWithoutOrganizerInput = {
    create?:
      | XOR<
          TournamentCreateWithoutOrganizerInput,
          TournamentUncheckedCreateWithoutOrganizerInput
        >
      | TournamentCreateWithoutOrganizerInput[]
      | TournamentUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?:
      | TournamentCreateOrConnectWithoutOrganizerInput
      | TournamentCreateOrConnectWithoutOrganizerInput[];
    createMany?: TournamentCreateManyOrganizerInputEnvelope;
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[];
  };

  export type TournamentUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?:
      | XOR<
          TournamentCreateWithoutOrganizerInput,
          TournamentUncheckedCreateWithoutOrganizerInput
        >
      | TournamentCreateWithoutOrganizerInput[]
      | TournamentUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?:
      | TournamentCreateOrConnectWithoutOrganizerInput
      | TournamentCreateOrConnectWithoutOrganizerInput[];
    createMany?: TournamentCreateManyOrganizerInputEnvelope;
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type TournamentUpdateManyWithoutOrganizerNestedInput = {
    create?:
      | XOR<
          TournamentCreateWithoutOrganizerInput,
          TournamentUncheckedCreateWithoutOrganizerInput
        >
      | TournamentCreateWithoutOrganizerInput[]
      | TournamentUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?:
      | TournamentCreateOrConnectWithoutOrganizerInput
      | TournamentCreateOrConnectWithoutOrganizerInput[];
    upsert?:
      | TournamentUpsertWithWhereUniqueWithoutOrganizerInput
      | TournamentUpsertWithWhereUniqueWithoutOrganizerInput[];
    createMany?: TournamentCreateManyOrganizerInputEnvelope;
    set?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[];
    disconnect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[];
    delete?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[];
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[];
    update?:
      | TournamentUpdateWithWhereUniqueWithoutOrganizerInput
      | TournamentUpdateWithWhereUniqueWithoutOrganizerInput[];
    updateMany?:
      | TournamentUpdateManyWithWhereWithoutOrganizerInput
      | TournamentUpdateManyWithWhereWithoutOrganizerInput[];
    deleteMany?: TournamentScalarWhereInput | TournamentScalarWhereInput[];
  };

  export type TournamentUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?:
      | XOR<
          TournamentCreateWithoutOrganizerInput,
          TournamentUncheckedCreateWithoutOrganizerInput
        >
      | TournamentCreateWithoutOrganizerInput[]
      | TournamentUncheckedCreateWithoutOrganizerInput[];
    connectOrCreate?:
      | TournamentCreateOrConnectWithoutOrganizerInput
      | TournamentCreateOrConnectWithoutOrganizerInput[];
    upsert?:
      | TournamentUpsertWithWhereUniqueWithoutOrganizerInput
      | TournamentUpsertWithWhereUniqueWithoutOrganizerInput[];
    createMany?: TournamentCreateManyOrganizerInputEnvelope;
    set?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[];
    disconnect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[];
    delete?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[];
    connect?: TournamentWhereUniqueInput | TournamentWhereUniqueInput[];
    update?:
      | TournamentUpdateWithWhereUniqueWithoutOrganizerInput
      | TournamentUpdateWithWhereUniqueWithoutOrganizerInput[];
    updateMany?:
      | TournamentUpdateManyWithWhereWithoutOrganizerInput
      | TournamentUpdateManyWithWhereWithoutOrganizerInput[];
    deleteMany?: TournamentScalarWhereInput | TournamentScalarWhereInput[];
  };

  export type OrganizerCreateNestedOneWithoutTournamentsInput = {
    create?: XOR<
      OrganizerCreateWithoutTournamentsInput,
      OrganizerUncheckedCreateWithoutTournamentsInput
    >;
    connectOrCreate?: OrganizerCreateOrConnectWithoutTournamentsInput;
    connect?: OrganizerWhereUniqueInput;
  };

  export type TeamCreateNestedManyWithoutTournamentInput = {
    create?:
      | XOR<
          TeamCreateWithoutTournamentInput,
          TeamUncheckedCreateWithoutTournamentInput
        >
      | TeamCreateWithoutTournamentInput[]
      | TeamUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?:
      | TeamCreateOrConnectWithoutTournamentInput
      | TeamCreateOrConnectWithoutTournamentInput[];
    createMany?: TeamCreateManyTournamentInputEnvelope;
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[];
  };

  export type MatchCreateNestedManyWithoutTournamentInput = {
    create?:
      | XOR<
          MatchCreateWithoutTournamentInput,
          MatchUncheckedCreateWithoutTournamentInput
        >
      | MatchCreateWithoutTournamentInput[]
      | MatchUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?:
      | MatchCreateOrConnectWithoutTournamentInput
      | MatchCreateOrConnectWithoutTournamentInput[];
    createMany?: MatchCreateManyTournamentInputEnvelope;
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
  };

  export type StandingsCreateNestedManyWithoutTournamentInput = {
    create?:
      | XOR<
          StandingsCreateWithoutTournamentInput,
          StandingsUncheckedCreateWithoutTournamentInput
        >
      | StandingsCreateWithoutTournamentInput[]
      | StandingsUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?:
      | StandingsCreateOrConnectWithoutTournamentInput
      | StandingsCreateOrConnectWithoutTournamentInput[];
    createMany?: StandingsCreateManyTournamentInputEnvelope;
    connect?: StandingsWhereUniqueInput | StandingsWhereUniqueInput[];
  };

  export type MatchEventCreateNestedManyWithoutTournamentInput = {
    create?:
      | XOR<
          MatchEventCreateWithoutTournamentInput,
          MatchEventUncheckedCreateWithoutTournamentInput
        >
      | MatchEventCreateWithoutTournamentInput[]
      | MatchEventUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?:
      | MatchEventCreateOrConnectWithoutTournamentInput
      | MatchEventCreateOrConnectWithoutTournamentInput[];
    createMany?: MatchEventCreateManyTournamentInputEnvelope;
    connect?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
  };

  export type TeamUncheckedCreateNestedManyWithoutTournamentInput = {
    create?:
      | XOR<
          TeamCreateWithoutTournamentInput,
          TeamUncheckedCreateWithoutTournamentInput
        >
      | TeamCreateWithoutTournamentInput[]
      | TeamUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?:
      | TeamCreateOrConnectWithoutTournamentInput
      | TeamCreateOrConnectWithoutTournamentInput[];
    createMany?: TeamCreateManyTournamentInputEnvelope;
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[];
  };

  export type MatchUncheckedCreateNestedManyWithoutTournamentInput = {
    create?:
      | XOR<
          MatchCreateWithoutTournamentInput,
          MatchUncheckedCreateWithoutTournamentInput
        >
      | MatchCreateWithoutTournamentInput[]
      | MatchUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?:
      | MatchCreateOrConnectWithoutTournamentInput
      | MatchCreateOrConnectWithoutTournamentInput[];
    createMany?: MatchCreateManyTournamentInputEnvelope;
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
  };

  export type StandingsUncheckedCreateNestedManyWithoutTournamentInput = {
    create?:
      | XOR<
          StandingsCreateWithoutTournamentInput,
          StandingsUncheckedCreateWithoutTournamentInput
        >
      | StandingsCreateWithoutTournamentInput[]
      | StandingsUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?:
      | StandingsCreateOrConnectWithoutTournamentInput
      | StandingsCreateOrConnectWithoutTournamentInput[];
    createMany?: StandingsCreateManyTournamentInputEnvelope;
    connect?: StandingsWhereUniqueInput | StandingsWhereUniqueInput[];
  };

  export type MatchEventUncheckedCreateNestedManyWithoutTournamentInput = {
    create?:
      | XOR<
          MatchEventCreateWithoutTournamentInput,
          MatchEventUncheckedCreateWithoutTournamentInput
        >
      | MatchEventCreateWithoutTournamentInput[]
      | MatchEventUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?:
      | MatchEventCreateOrConnectWithoutTournamentInput
      | MatchEventCreateOrConnectWithoutTournamentInput[];
    createMany?: MatchEventCreateManyTournamentInputEnvelope;
    connect?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type EnumTournamentFormatFieldUpdateOperationsInput = {
    set?: $Enums.TournamentFormat;
  };

  export type EnumTournamentStatusFieldUpdateOperationsInput = {
    set?: $Enums.TournamentStatus;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type OrganizerUpdateOneRequiredWithoutTournamentsNestedInput = {
    create?: XOR<
      OrganizerCreateWithoutTournamentsInput,
      OrganizerUncheckedCreateWithoutTournamentsInput
    >;
    connectOrCreate?: OrganizerCreateOrConnectWithoutTournamentsInput;
    upsert?: OrganizerUpsertWithoutTournamentsInput;
    connect?: OrganizerWhereUniqueInput;
    update?: XOR<
      XOR<
        OrganizerUpdateToOneWithWhereWithoutTournamentsInput,
        OrganizerUpdateWithoutTournamentsInput
      >,
      OrganizerUncheckedUpdateWithoutTournamentsInput
    >;
  };

  export type TeamUpdateManyWithoutTournamentNestedInput = {
    create?:
      | XOR<
          TeamCreateWithoutTournamentInput,
          TeamUncheckedCreateWithoutTournamentInput
        >
      | TeamCreateWithoutTournamentInput[]
      | TeamUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?:
      | TeamCreateOrConnectWithoutTournamentInput
      | TeamCreateOrConnectWithoutTournamentInput[];
    upsert?:
      | TeamUpsertWithWhereUniqueWithoutTournamentInput
      | TeamUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: TeamCreateManyTournamentInputEnvelope;
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[];
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[];
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[];
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[];
    update?:
      | TeamUpdateWithWhereUniqueWithoutTournamentInput
      | TeamUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?:
      | TeamUpdateManyWithWhereWithoutTournamentInput
      | TeamUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[];
  };

  export type MatchUpdateManyWithoutTournamentNestedInput = {
    create?:
      | XOR<
          MatchCreateWithoutTournamentInput,
          MatchUncheckedCreateWithoutTournamentInput
        >
      | MatchCreateWithoutTournamentInput[]
      | MatchUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?:
      | MatchCreateOrConnectWithoutTournamentInput
      | MatchCreateOrConnectWithoutTournamentInput[];
    upsert?:
      | MatchUpsertWithWhereUniqueWithoutTournamentInput
      | MatchUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: MatchCreateManyTournamentInputEnvelope;
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
    update?:
      | MatchUpdateWithWhereUniqueWithoutTournamentInput
      | MatchUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?:
      | MatchUpdateManyWithWhereWithoutTournamentInput
      | MatchUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[];
  };

  export type StandingsUpdateManyWithoutTournamentNestedInput = {
    create?:
      | XOR<
          StandingsCreateWithoutTournamentInput,
          StandingsUncheckedCreateWithoutTournamentInput
        >
      | StandingsCreateWithoutTournamentInput[]
      | StandingsUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?:
      | StandingsCreateOrConnectWithoutTournamentInput
      | StandingsCreateOrConnectWithoutTournamentInput[];
    upsert?:
      | StandingsUpsertWithWhereUniqueWithoutTournamentInput
      | StandingsUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: StandingsCreateManyTournamentInputEnvelope;
    set?: StandingsWhereUniqueInput | StandingsWhereUniqueInput[];
    disconnect?: StandingsWhereUniqueInput | StandingsWhereUniqueInput[];
    delete?: StandingsWhereUniqueInput | StandingsWhereUniqueInput[];
    connect?: StandingsWhereUniqueInput | StandingsWhereUniqueInput[];
    update?:
      | StandingsUpdateWithWhereUniqueWithoutTournamentInput
      | StandingsUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?:
      | StandingsUpdateManyWithWhereWithoutTournamentInput
      | StandingsUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: StandingsScalarWhereInput | StandingsScalarWhereInput[];
  };

  export type MatchEventUpdateManyWithoutTournamentNestedInput = {
    create?:
      | XOR<
          MatchEventCreateWithoutTournamentInput,
          MatchEventUncheckedCreateWithoutTournamentInput
        >
      | MatchEventCreateWithoutTournamentInput[]
      | MatchEventUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?:
      | MatchEventCreateOrConnectWithoutTournamentInput
      | MatchEventCreateOrConnectWithoutTournamentInput[];
    upsert?:
      | MatchEventUpsertWithWhereUniqueWithoutTournamentInput
      | MatchEventUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: MatchEventCreateManyTournamentInputEnvelope;
    set?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
    disconnect?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
    delete?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
    connect?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
    update?:
      | MatchEventUpdateWithWhereUniqueWithoutTournamentInput
      | MatchEventUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?:
      | MatchEventUpdateManyWithWhereWithoutTournamentInput
      | MatchEventUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: MatchEventScalarWhereInput | MatchEventScalarWhereInput[];
  };

  export type TeamUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?:
      | XOR<
          TeamCreateWithoutTournamentInput,
          TeamUncheckedCreateWithoutTournamentInput
        >
      | TeamCreateWithoutTournamentInput[]
      | TeamUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?:
      | TeamCreateOrConnectWithoutTournamentInput
      | TeamCreateOrConnectWithoutTournamentInput[];
    upsert?:
      | TeamUpsertWithWhereUniqueWithoutTournamentInput
      | TeamUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: TeamCreateManyTournamentInputEnvelope;
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[];
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[];
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[];
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[];
    update?:
      | TeamUpdateWithWhereUniqueWithoutTournamentInput
      | TeamUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?:
      | TeamUpdateManyWithWhereWithoutTournamentInput
      | TeamUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[];
  };

  export type MatchUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?:
      | XOR<
          MatchCreateWithoutTournamentInput,
          MatchUncheckedCreateWithoutTournamentInput
        >
      | MatchCreateWithoutTournamentInput[]
      | MatchUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?:
      | MatchCreateOrConnectWithoutTournamentInput
      | MatchCreateOrConnectWithoutTournamentInput[];
    upsert?:
      | MatchUpsertWithWhereUniqueWithoutTournamentInput
      | MatchUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: MatchCreateManyTournamentInputEnvelope;
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
    update?:
      | MatchUpdateWithWhereUniqueWithoutTournamentInput
      | MatchUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?:
      | MatchUpdateManyWithWhereWithoutTournamentInput
      | MatchUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[];
  };

  export type StandingsUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?:
      | XOR<
          StandingsCreateWithoutTournamentInput,
          StandingsUncheckedCreateWithoutTournamentInput
        >
      | StandingsCreateWithoutTournamentInput[]
      | StandingsUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?:
      | StandingsCreateOrConnectWithoutTournamentInput
      | StandingsCreateOrConnectWithoutTournamentInput[];
    upsert?:
      | StandingsUpsertWithWhereUniqueWithoutTournamentInput
      | StandingsUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: StandingsCreateManyTournamentInputEnvelope;
    set?: StandingsWhereUniqueInput | StandingsWhereUniqueInput[];
    disconnect?: StandingsWhereUniqueInput | StandingsWhereUniqueInput[];
    delete?: StandingsWhereUniqueInput | StandingsWhereUniqueInput[];
    connect?: StandingsWhereUniqueInput | StandingsWhereUniqueInput[];
    update?:
      | StandingsUpdateWithWhereUniqueWithoutTournamentInput
      | StandingsUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?:
      | StandingsUpdateManyWithWhereWithoutTournamentInput
      | StandingsUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: StandingsScalarWhereInput | StandingsScalarWhereInput[];
  };

  export type MatchEventUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?:
      | XOR<
          MatchEventCreateWithoutTournamentInput,
          MatchEventUncheckedCreateWithoutTournamentInput
        >
      | MatchEventCreateWithoutTournamentInput[]
      | MatchEventUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?:
      | MatchEventCreateOrConnectWithoutTournamentInput
      | MatchEventCreateOrConnectWithoutTournamentInput[];
    upsert?:
      | MatchEventUpsertWithWhereUniqueWithoutTournamentInput
      | MatchEventUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: MatchEventCreateManyTournamentInputEnvelope;
    set?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
    disconnect?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
    delete?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
    connect?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
    update?:
      | MatchEventUpdateWithWhereUniqueWithoutTournamentInput
      | MatchEventUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?:
      | MatchEventUpdateManyWithWhereWithoutTournamentInput
      | MatchEventUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: MatchEventScalarWhereInput | MatchEventScalarWhereInput[];
  };

  export type TournamentCreateNestedOneWithoutTeamsInput = {
    create?: XOR<
      TournamentCreateWithoutTeamsInput,
      TournamentUncheckedCreateWithoutTeamsInput
    >;
    connectOrCreate?: TournamentCreateOrConnectWithoutTeamsInput;
    connect?: TournamentWhereUniqueInput;
  };

  export type StandingsCreateNestedManyWithoutTeamInput = {
    create?:
      | XOR<
          StandingsCreateWithoutTeamInput,
          StandingsUncheckedCreateWithoutTeamInput
        >
      | StandingsCreateWithoutTeamInput[]
      | StandingsUncheckedCreateWithoutTeamInput[];
    connectOrCreate?:
      | StandingsCreateOrConnectWithoutTeamInput
      | StandingsCreateOrConnectWithoutTeamInput[];
    createMany?: StandingsCreateManyTeamInputEnvelope;
    connect?: StandingsWhereUniqueInput | StandingsWhereUniqueInput[];
  };

  export type MatchEventCreateNestedManyWithoutTeamInput = {
    create?:
      | XOR<
          MatchEventCreateWithoutTeamInput,
          MatchEventUncheckedCreateWithoutTeamInput
        >
      | MatchEventCreateWithoutTeamInput[]
      | MatchEventUncheckedCreateWithoutTeamInput[];
    connectOrCreate?:
      | MatchEventCreateOrConnectWithoutTeamInput
      | MatchEventCreateOrConnectWithoutTeamInput[];
    createMany?: MatchEventCreateManyTeamInputEnvelope;
    connect?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
  };

  export type MatchCreateNestedManyWithoutTeam_aInput = {
    create?:
      | XOR<
          MatchCreateWithoutTeam_aInput,
          MatchUncheckedCreateWithoutTeam_aInput
        >
      | MatchCreateWithoutTeam_aInput[]
      | MatchUncheckedCreateWithoutTeam_aInput[];
    connectOrCreate?:
      | MatchCreateOrConnectWithoutTeam_aInput
      | MatchCreateOrConnectWithoutTeam_aInput[];
    createMany?: MatchCreateManyTeam_aInputEnvelope;
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
  };

  export type MatchCreateNestedManyWithoutTeam_bInput = {
    create?:
      | XOR<
          MatchCreateWithoutTeam_bInput,
          MatchUncheckedCreateWithoutTeam_bInput
        >
      | MatchCreateWithoutTeam_bInput[]
      | MatchUncheckedCreateWithoutTeam_bInput[];
    connectOrCreate?:
      | MatchCreateOrConnectWithoutTeam_bInput
      | MatchCreateOrConnectWithoutTeam_bInput[];
    createMany?: MatchCreateManyTeam_bInputEnvelope;
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
  };

  export type StandingsUncheckedCreateNestedManyWithoutTeamInput = {
    create?:
      | XOR<
          StandingsCreateWithoutTeamInput,
          StandingsUncheckedCreateWithoutTeamInput
        >
      | StandingsCreateWithoutTeamInput[]
      | StandingsUncheckedCreateWithoutTeamInput[];
    connectOrCreate?:
      | StandingsCreateOrConnectWithoutTeamInput
      | StandingsCreateOrConnectWithoutTeamInput[];
    createMany?: StandingsCreateManyTeamInputEnvelope;
    connect?: StandingsWhereUniqueInput | StandingsWhereUniqueInput[];
  };

  export type MatchEventUncheckedCreateNestedManyWithoutTeamInput = {
    create?:
      | XOR<
          MatchEventCreateWithoutTeamInput,
          MatchEventUncheckedCreateWithoutTeamInput
        >
      | MatchEventCreateWithoutTeamInput[]
      | MatchEventUncheckedCreateWithoutTeamInput[];
    connectOrCreate?:
      | MatchEventCreateOrConnectWithoutTeamInput
      | MatchEventCreateOrConnectWithoutTeamInput[];
    createMany?: MatchEventCreateManyTeamInputEnvelope;
    connect?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
  };

  export type MatchUncheckedCreateNestedManyWithoutTeam_aInput = {
    create?:
      | XOR<
          MatchCreateWithoutTeam_aInput,
          MatchUncheckedCreateWithoutTeam_aInput
        >
      | MatchCreateWithoutTeam_aInput[]
      | MatchUncheckedCreateWithoutTeam_aInput[];
    connectOrCreate?:
      | MatchCreateOrConnectWithoutTeam_aInput
      | MatchCreateOrConnectWithoutTeam_aInput[];
    createMany?: MatchCreateManyTeam_aInputEnvelope;
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
  };

  export type MatchUncheckedCreateNestedManyWithoutTeam_bInput = {
    create?:
      | XOR<
          MatchCreateWithoutTeam_bInput,
          MatchUncheckedCreateWithoutTeam_bInput
        >
      | MatchCreateWithoutTeam_bInput[]
      | MatchUncheckedCreateWithoutTeam_bInput[];
    connectOrCreate?:
      | MatchCreateOrConnectWithoutTeam_bInput
      | MatchCreateOrConnectWithoutTeam_bInput[];
    createMany?: MatchCreateManyTeam_bInputEnvelope;
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
  };

  export type TournamentUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<
      TournamentCreateWithoutTeamsInput,
      TournamentUncheckedCreateWithoutTeamsInput
    >;
    connectOrCreate?: TournamentCreateOrConnectWithoutTeamsInput;
    upsert?: TournamentUpsertWithoutTeamsInput;
    connect?: TournamentWhereUniqueInput;
    update?: XOR<
      XOR<
        TournamentUpdateToOneWithWhereWithoutTeamsInput,
        TournamentUpdateWithoutTeamsInput
      >,
      TournamentUncheckedUpdateWithoutTeamsInput
    >;
  };

  export type StandingsUpdateManyWithoutTeamNestedInput = {
    create?:
      | XOR<
          StandingsCreateWithoutTeamInput,
          StandingsUncheckedCreateWithoutTeamInput
        >
      | StandingsCreateWithoutTeamInput[]
      | StandingsUncheckedCreateWithoutTeamInput[];
    connectOrCreate?:
      | StandingsCreateOrConnectWithoutTeamInput
      | StandingsCreateOrConnectWithoutTeamInput[];
    upsert?:
      | StandingsUpsertWithWhereUniqueWithoutTeamInput
      | StandingsUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: StandingsCreateManyTeamInputEnvelope;
    set?: StandingsWhereUniqueInput | StandingsWhereUniqueInput[];
    disconnect?: StandingsWhereUniqueInput | StandingsWhereUniqueInput[];
    delete?: StandingsWhereUniqueInput | StandingsWhereUniqueInput[];
    connect?: StandingsWhereUniqueInput | StandingsWhereUniqueInput[];
    update?:
      | StandingsUpdateWithWhereUniqueWithoutTeamInput
      | StandingsUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?:
      | StandingsUpdateManyWithWhereWithoutTeamInput
      | StandingsUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: StandingsScalarWhereInput | StandingsScalarWhereInput[];
  };

  export type MatchEventUpdateManyWithoutTeamNestedInput = {
    create?:
      | XOR<
          MatchEventCreateWithoutTeamInput,
          MatchEventUncheckedCreateWithoutTeamInput
        >
      | MatchEventCreateWithoutTeamInput[]
      | MatchEventUncheckedCreateWithoutTeamInput[];
    connectOrCreate?:
      | MatchEventCreateOrConnectWithoutTeamInput
      | MatchEventCreateOrConnectWithoutTeamInput[];
    upsert?:
      | MatchEventUpsertWithWhereUniqueWithoutTeamInput
      | MatchEventUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: MatchEventCreateManyTeamInputEnvelope;
    set?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
    disconnect?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
    delete?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
    connect?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
    update?:
      | MatchEventUpdateWithWhereUniqueWithoutTeamInput
      | MatchEventUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?:
      | MatchEventUpdateManyWithWhereWithoutTeamInput
      | MatchEventUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: MatchEventScalarWhereInput | MatchEventScalarWhereInput[];
  };

  export type MatchUpdateManyWithoutTeam_aNestedInput = {
    create?:
      | XOR<
          MatchCreateWithoutTeam_aInput,
          MatchUncheckedCreateWithoutTeam_aInput
        >
      | MatchCreateWithoutTeam_aInput[]
      | MatchUncheckedCreateWithoutTeam_aInput[];
    connectOrCreate?:
      | MatchCreateOrConnectWithoutTeam_aInput
      | MatchCreateOrConnectWithoutTeam_aInput[];
    upsert?:
      | MatchUpsertWithWhereUniqueWithoutTeam_aInput
      | MatchUpsertWithWhereUniqueWithoutTeam_aInput[];
    createMany?: MatchCreateManyTeam_aInputEnvelope;
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
    update?:
      | MatchUpdateWithWhereUniqueWithoutTeam_aInput
      | MatchUpdateWithWhereUniqueWithoutTeam_aInput[];
    updateMany?:
      | MatchUpdateManyWithWhereWithoutTeam_aInput
      | MatchUpdateManyWithWhereWithoutTeam_aInput[];
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[];
  };

  export type MatchUpdateManyWithoutTeam_bNestedInput = {
    create?:
      | XOR<
          MatchCreateWithoutTeam_bInput,
          MatchUncheckedCreateWithoutTeam_bInput
        >
      | MatchCreateWithoutTeam_bInput[]
      | MatchUncheckedCreateWithoutTeam_bInput[];
    connectOrCreate?:
      | MatchCreateOrConnectWithoutTeam_bInput
      | MatchCreateOrConnectWithoutTeam_bInput[];
    upsert?:
      | MatchUpsertWithWhereUniqueWithoutTeam_bInput
      | MatchUpsertWithWhereUniqueWithoutTeam_bInput[];
    createMany?: MatchCreateManyTeam_bInputEnvelope;
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
    update?:
      | MatchUpdateWithWhereUniqueWithoutTeam_bInput
      | MatchUpdateWithWhereUniqueWithoutTeam_bInput[];
    updateMany?:
      | MatchUpdateManyWithWhereWithoutTeam_bInput
      | MatchUpdateManyWithWhereWithoutTeam_bInput[];
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[];
  };

  export type StandingsUncheckedUpdateManyWithoutTeamNestedInput = {
    create?:
      | XOR<
          StandingsCreateWithoutTeamInput,
          StandingsUncheckedCreateWithoutTeamInput
        >
      | StandingsCreateWithoutTeamInput[]
      | StandingsUncheckedCreateWithoutTeamInput[];
    connectOrCreate?:
      | StandingsCreateOrConnectWithoutTeamInput
      | StandingsCreateOrConnectWithoutTeamInput[];
    upsert?:
      | StandingsUpsertWithWhereUniqueWithoutTeamInput
      | StandingsUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: StandingsCreateManyTeamInputEnvelope;
    set?: StandingsWhereUniqueInput | StandingsWhereUniqueInput[];
    disconnect?: StandingsWhereUniqueInput | StandingsWhereUniqueInput[];
    delete?: StandingsWhereUniqueInput | StandingsWhereUniqueInput[];
    connect?: StandingsWhereUniqueInput | StandingsWhereUniqueInput[];
    update?:
      | StandingsUpdateWithWhereUniqueWithoutTeamInput
      | StandingsUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?:
      | StandingsUpdateManyWithWhereWithoutTeamInput
      | StandingsUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: StandingsScalarWhereInput | StandingsScalarWhereInput[];
  };

  export type MatchEventUncheckedUpdateManyWithoutTeamNestedInput = {
    create?:
      | XOR<
          MatchEventCreateWithoutTeamInput,
          MatchEventUncheckedCreateWithoutTeamInput
        >
      | MatchEventCreateWithoutTeamInput[]
      | MatchEventUncheckedCreateWithoutTeamInput[];
    connectOrCreate?:
      | MatchEventCreateOrConnectWithoutTeamInput
      | MatchEventCreateOrConnectWithoutTeamInput[];
    upsert?:
      | MatchEventUpsertWithWhereUniqueWithoutTeamInput
      | MatchEventUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: MatchEventCreateManyTeamInputEnvelope;
    set?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
    disconnect?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
    delete?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
    connect?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
    update?:
      | MatchEventUpdateWithWhereUniqueWithoutTeamInput
      | MatchEventUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?:
      | MatchEventUpdateManyWithWhereWithoutTeamInput
      | MatchEventUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: MatchEventScalarWhereInput | MatchEventScalarWhereInput[];
  };

  export type MatchUncheckedUpdateManyWithoutTeam_aNestedInput = {
    create?:
      | XOR<
          MatchCreateWithoutTeam_aInput,
          MatchUncheckedCreateWithoutTeam_aInput
        >
      | MatchCreateWithoutTeam_aInput[]
      | MatchUncheckedCreateWithoutTeam_aInput[];
    connectOrCreate?:
      | MatchCreateOrConnectWithoutTeam_aInput
      | MatchCreateOrConnectWithoutTeam_aInput[];
    upsert?:
      | MatchUpsertWithWhereUniqueWithoutTeam_aInput
      | MatchUpsertWithWhereUniqueWithoutTeam_aInput[];
    createMany?: MatchCreateManyTeam_aInputEnvelope;
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
    update?:
      | MatchUpdateWithWhereUniqueWithoutTeam_aInput
      | MatchUpdateWithWhereUniqueWithoutTeam_aInput[];
    updateMany?:
      | MatchUpdateManyWithWhereWithoutTeam_aInput
      | MatchUpdateManyWithWhereWithoutTeam_aInput[];
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[];
  };

  export type MatchUncheckedUpdateManyWithoutTeam_bNestedInput = {
    create?:
      | XOR<
          MatchCreateWithoutTeam_bInput,
          MatchUncheckedCreateWithoutTeam_bInput
        >
      | MatchCreateWithoutTeam_bInput[]
      | MatchUncheckedCreateWithoutTeam_bInput[];
    connectOrCreate?:
      | MatchCreateOrConnectWithoutTeam_bInput
      | MatchCreateOrConnectWithoutTeam_bInput[];
    upsert?:
      | MatchUpsertWithWhereUniqueWithoutTeam_bInput
      | MatchUpsertWithWhereUniqueWithoutTeam_bInput[];
    createMany?: MatchCreateManyTeam_bInputEnvelope;
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[];
    update?:
      | MatchUpdateWithWhereUniqueWithoutTeam_bInput
      | MatchUpdateWithWhereUniqueWithoutTeam_bInput[];
    updateMany?:
      | MatchUpdateManyWithWhereWithoutTeam_bInput
      | MatchUpdateManyWithWhereWithoutTeam_bInput[];
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[];
  };

  export type TournamentCreateNestedOneWithoutMatchesInput = {
    create?: XOR<
      TournamentCreateWithoutMatchesInput,
      TournamentUncheckedCreateWithoutMatchesInput
    >;
    connectOrCreate?: TournamentCreateOrConnectWithoutMatchesInput;
    connect?: TournamentWhereUniqueInput;
  };

  export type TeamCreateNestedOneWithoutMatches_as_team_aInput = {
    create?: XOR<
      TeamCreateWithoutMatches_as_team_aInput,
      TeamUncheckedCreateWithoutMatches_as_team_aInput
    >;
    connectOrCreate?: TeamCreateOrConnectWithoutMatches_as_team_aInput;
    connect?: TeamWhereUniqueInput;
  };

  export type TeamCreateNestedOneWithoutMatches_as_team_bInput = {
    create?: XOR<
      TeamCreateWithoutMatches_as_team_bInput,
      TeamUncheckedCreateWithoutMatches_as_team_bInput
    >;
    connectOrCreate?: TeamCreateOrConnectWithoutMatches_as_team_bInput;
    connect?: TeamWhereUniqueInput;
  };

  export type MatchEventCreateNestedManyWithoutMatchInput = {
    create?:
      | XOR<
          MatchEventCreateWithoutMatchInput,
          MatchEventUncheckedCreateWithoutMatchInput
        >
      | MatchEventCreateWithoutMatchInput[]
      | MatchEventUncheckedCreateWithoutMatchInput[];
    connectOrCreate?:
      | MatchEventCreateOrConnectWithoutMatchInput
      | MatchEventCreateOrConnectWithoutMatchInput[];
    createMany?: MatchEventCreateManyMatchInputEnvelope;
    connect?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
  };

  export type MatchEventUncheckedCreateNestedManyWithoutMatchInput = {
    create?:
      | XOR<
          MatchEventCreateWithoutMatchInput,
          MatchEventUncheckedCreateWithoutMatchInput
        >
      | MatchEventCreateWithoutMatchInput[]
      | MatchEventUncheckedCreateWithoutMatchInput[];
    connectOrCreate?:
      | MatchEventCreateOrConnectWithoutMatchInput
      | MatchEventCreateOrConnectWithoutMatchInput[];
    createMany?: MatchEventCreateManyMatchInputEnvelope;
    connect?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
  };

  export type EnumMatchStatusFieldUpdateOperationsInput = {
    set?: $Enums.MatchStatus;
  };

  export type TournamentUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: XOR<
      TournamentCreateWithoutMatchesInput,
      TournamentUncheckedCreateWithoutMatchesInput
    >;
    connectOrCreate?: TournamentCreateOrConnectWithoutMatchesInput;
    upsert?: TournamentUpsertWithoutMatchesInput;
    connect?: TournamentWhereUniqueInput;
    update?: XOR<
      XOR<
        TournamentUpdateToOneWithWhereWithoutMatchesInput,
        TournamentUpdateWithoutMatchesInput
      >,
      TournamentUncheckedUpdateWithoutMatchesInput
    >;
  };

  export type TeamUpdateOneRequiredWithoutMatches_as_team_aNestedInput = {
    create?: XOR<
      TeamCreateWithoutMatches_as_team_aInput,
      TeamUncheckedCreateWithoutMatches_as_team_aInput
    >;
    connectOrCreate?: TeamCreateOrConnectWithoutMatches_as_team_aInput;
    upsert?: TeamUpsertWithoutMatches_as_team_aInput;
    connect?: TeamWhereUniqueInput;
    update?: XOR<
      XOR<
        TeamUpdateToOneWithWhereWithoutMatches_as_team_aInput,
        TeamUpdateWithoutMatches_as_team_aInput
      >,
      TeamUncheckedUpdateWithoutMatches_as_team_aInput
    >;
  };

  export type TeamUpdateOneRequiredWithoutMatches_as_team_bNestedInput = {
    create?: XOR<
      TeamCreateWithoutMatches_as_team_bInput,
      TeamUncheckedCreateWithoutMatches_as_team_bInput
    >;
    connectOrCreate?: TeamCreateOrConnectWithoutMatches_as_team_bInput;
    upsert?: TeamUpsertWithoutMatches_as_team_bInput;
    connect?: TeamWhereUniqueInput;
    update?: XOR<
      XOR<
        TeamUpdateToOneWithWhereWithoutMatches_as_team_bInput,
        TeamUpdateWithoutMatches_as_team_bInput
      >,
      TeamUncheckedUpdateWithoutMatches_as_team_bInput
    >;
  };

  export type MatchEventUpdateManyWithoutMatchNestedInput = {
    create?:
      | XOR<
          MatchEventCreateWithoutMatchInput,
          MatchEventUncheckedCreateWithoutMatchInput
        >
      | MatchEventCreateWithoutMatchInput[]
      | MatchEventUncheckedCreateWithoutMatchInput[];
    connectOrCreate?:
      | MatchEventCreateOrConnectWithoutMatchInput
      | MatchEventCreateOrConnectWithoutMatchInput[];
    upsert?:
      | MatchEventUpsertWithWhereUniqueWithoutMatchInput
      | MatchEventUpsertWithWhereUniqueWithoutMatchInput[];
    createMany?: MatchEventCreateManyMatchInputEnvelope;
    set?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
    disconnect?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
    delete?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
    connect?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
    update?:
      | MatchEventUpdateWithWhereUniqueWithoutMatchInput
      | MatchEventUpdateWithWhereUniqueWithoutMatchInput[];
    updateMany?:
      | MatchEventUpdateManyWithWhereWithoutMatchInput
      | MatchEventUpdateManyWithWhereWithoutMatchInput[];
    deleteMany?: MatchEventScalarWhereInput | MatchEventScalarWhereInput[];
  };

  export type MatchEventUncheckedUpdateManyWithoutMatchNestedInput = {
    create?:
      | XOR<
          MatchEventCreateWithoutMatchInput,
          MatchEventUncheckedCreateWithoutMatchInput
        >
      | MatchEventCreateWithoutMatchInput[]
      | MatchEventUncheckedCreateWithoutMatchInput[];
    connectOrCreate?:
      | MatchEventCreateOrConnectWithoutMatchInput
      | MatchEventCreateOrConnectWithoutMatchInput[];
    upsert?:
      | MatchEventUpsertWithWhereUniqueWithoutMatchInput
      | MatchEventUpsertWithWhereUniqueWithoutMatchInput[];
    createMany?: MatchEventCreateManyMatchInputEnvelope;
    set?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
    disconnect?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
    delete?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
    connect?: MatchEventWhereUniqueInput | MatchEventWhereUniqueInput[];
    update?:
      | MatchEventUpdateWithWhereUniqueWithoutMatchInput
      | MatchEventUpdateWithWhereUniqueWithoutMatchInput[];
    updateMany?:
      | MatchEventUpdateManyWithWhereWithoutMatchInput
      | MatchEventUpdateManyWithWhereWithoutMatchInput[];
    deleteMany?: MatchEventScalarWhereInput | MatchEventScalarWhereInput[];
  };

  export type TournamentCreateNestedOneWithoutStandingsInput = {
    create?: XOR<
      TournamentCreateWithoutStandingsInput,
      TournamentUncheckedCreateWithoutStandingsInput
    >;
    connectOrCreate?: TournamentCreateOrConnectWithoutStandingsInput;
    connect?: TournamentWhereUniqueInput;
  };

  export type TeamCreateNestedOneWithoutStandingsInput = {
    create?: XOR<
      TeamCreateWithoutStandingsInput,
      TeamUncheckedCreateWithoutStandingsInput
    >;
    connectOrCreate?: TeamCreateOrConnectWithoutStandingsInput;
    connect?: TeamWhereUniqueInput;
  };

  export type TournamentUpdateOneRequiredWithoutStandingsNestedInput = {
    create?: XOR<
      TournamentCreateWithoutStandingsInput,
      TournamentUncheckedCreateWithoutStandingsInput
    >;
    connectOrCreate?: TournamentCreateOrConnectWithoutStandingsInput;
    upsert?: TournamentUpsertWithoutStandingsInput;
    connect?: TournamentWhereUniqueInput;
    update?: XOR<
      XOR<
        TournamentUpdateToOneWithWhereWithoutStandingsInput,
        TournamentUpdateWithoutStandingsInput
      >,
      TournamentUncheckedUpdateWithoutStandingsInput
    >;
  };

  export type TeamUpdateOneRequiredWithoutStandingsNestedInput = {
    create?: XOR<
      TeamCreateWithoutStandingsInput,
      TeamUncheckedCreateWithoutStandingsInput
    >;
    connectOrCreate?: TeamCreateOrConnectWithoutStandingsInput;
    upsert?: TeamUpsertWithoutStandingsInput;
    connect?: TeamWhereUniqueInput;
    update?: XOR<
      XOR<
        TeamUpdateToOneWithWhereWithoutStandingsInput,
        TeamUpdateWithoutStandingsInput
      >,
      TeamUncheckedUpdateWithoutStandingsInput
    >;
  };

  export type MatchCreateNestedOneWithoutEventsInput = {
    create?: XOR<
      MatchCreateWithoutEventsInput,
      MatchUncheckedCreateWithoutEventsInput
    >;
    connectOrCreate?: MatchCreateOrConnectWithoutEventsInput;
    connect?: MatchWhereUniqueInput;
  };

  export type TournamentCreateNestedOneWithoutMatch_eventsInput = {
    create?: XOR<
      TournamentCreateWithoutMatch_eventsInput,
      TournamentUncheckedCreateWithoutMatch_eventsInput
    >;
    connectOrCreate?: TournamentCreateOrConnectWithoutMatch_eventsInput;
    connect?: TournamentWhereUniqueInput;
  };

  export type TeamCreateNestedOneWithoutMatch_eventsInput = {
    create?: XOR<
      TeamCreateWithoutMatch_eventsInput,
      TeamUncheckedCreateWithoutMatch_eventsInput
    >;
    connectOrCreate?: TeamCreateOrConnectWithoutMatch_eventsInput;
    connect?: TeamWhereUniqueInput;
  };

  export type EnumEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventType;
  };

  export type MatchUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<
      MatchCreateWithoutEventsInput,
      MatchUncheckedCreateWithoutEventsInput
    >;
    connectOrCreate?: MatchCreateOrConnectWithoutEventsInput;
    upsert?: MatchUpsertWithoutEventsInput;
    connect?: MatchWhereUniqueInput;
    update?: XOR<
      XOR<
        MatchUpdateToOneWithWhereWithoutEventsInput,
        MatchUpdateWithoutEventsInput
      >,
      MatchUncheckedUpdateWithoutEventsInput
    >;
  };

  export type TournamentUpdateOneRequiredWithoutMatch_eventsNestedInput = {
    create?: XOR<
      TournamentCreateWithoutMatch_eventsInput,
      TournamentUncheckedCreateWithoutMatch_eventsInput
    >;
    connectOrCreate?: TournamentCreateOrConnectWithoutMatch_eventsInput;
    upsert?: TournamentUpsertWithoutMatch_eventsInput;
    connect?: TournamentWhereUniqueInput;
    update?: XOR<
      XOR<
        TournamentUpdateToOneWithWhereWithoutMatch_eventsInput,
        TournamentUpdateWithoutMatch_eventsInput
      >,
      TournamentUncheckedUpdateWithoutMatch_eventsInput
    >;
  };

  export type TeamUpdateOneRequiredWithoutMatch_eventsNestedInput = {
    create?: XOR<
      TeamCreateWithoutMatch_eventsInput,
      TeamUncheckedCreateWithoutMatch_eventsInput
    >;
    connectOrCreate?: TeamCreateOrConnectWithoutMatch_eventsInput;
    upsert?: TeamUpsertWithoutMatch_eventsInput;
    connect?: TeamWhereUniqueInput;
    update?: XOR<
      XOR<
        TeamUpdateToOneWithWhereWithoutMatch_eventsInput,
        TeamUpdateWithoutMatch_eventsInput
      >,
      TeamUncheckedUpdateWithoutMatch_eventsInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedEnumTournamentFormatFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TournamentFormat
      | EnumTournamentFormatFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TournamentFormat[]
      | ListEnumTournamentFormatFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TournamentFormat[]
      | ListEnumTournamentFormatFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTournamentFormatFilter<$PrismaModel>
      | $Enums.TournamentFormat;
  };

  export type NestedEnumTournamentStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TournamentStatus
      | EnumTournamentStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TournamentStatus[]
      | ListEnumTournamentStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TournamentStatus[]
      | ListEnumTournamentStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTournamentStatusFilter<$PrismaModel>
      | $Enums.TournamentStatus;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedEnumTournamentFormatWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.TournamentFormat
      | EnumTournamentFormatFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TournamentFormat[]
      | ListEnumTournamentFormatFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TournamentFormat[]
      | ListEnumTournamentFormatFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTournamentFormatWithAggregatesFilter<$PrismaModel>
      | $Enums.TournamentFormat;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTournamentFormatFilter<$PrismaModel>;
    _max?: NestedEnumTournamentFormatFilter<$PrismaModel>;
  };

  export type NestedEnumTournamentStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.TournamentStatus
      | EnumTournamentStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TournamentStatus[]
      | ListEnumTournamentStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TournamentStatus[]
      | ListEnumTournamentStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTournamentStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.TournamentStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTournamentStatusFilter<$PrismaModel>;
    _max?: NestedEnumTournamentStatusFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedEnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.MatchStatus[] | ListEnumMatchStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.MatchStatus[]
      | ListEnumMatchStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus;
  };

  export type NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.MatchStatus[]
        | ListEnumMatchStatusFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.MatchStatus[]
        | ListEnumMatchStatusFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel>
        | $Enums.MatchStatus;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumMatchStatusFilter<$PrismaModel>;
      _max?: NestedEnumMatchStatusFilter<$PrismaModel>;
    };

  export type NestedEnumEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumEventTypeFilter<$PrismaModel> | $Enums.EventType;
  };

  export type NestedEnumEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventType | EnumEventTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EventType[] | ListEnumEventTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumEventTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.EventType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumEventTypeFilter<$PrismaModel>;
    _max?: NestedEnumEventTypeFilter<$PrismaModel>;
  };

  export type TournamentCreateWithoutOrganizerInput = {
    id?: string;
    name: string;
    description?: string | null;
    rules?: string | null;
    format: $Enums.TournamentFormat;
    status?: $Enums.TournamentStatus;
    points_win?: number;
    points_draw?: number;
    points_loss?: number;
    playoff_teams?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    teams?: TeamCreateNestedManyWithoutTournamentInput;
    matches?: MatchCreateNestedManyWithoutTournamentInput;
    standings?: StandingsCreateNestedManyWithoutTournamentInput;
    match_events?: MatchEventCreateNestedManyWithoutTournamentInput;
  };

  export type TournamentUncheckedCreateWithoutOrganizerInput = {
    id?: string;
    name: string;
    description?: string | null;
    rules?: string | null;
    format: $Enums.TournamentFormat;
    status?: $Enums.TournamentStatus;
    points_win?: number;
    points_draw?: number;
    points_loss?: number;
    playoff_teams?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    teams?: TeamUncheckedCreateNestedManyWithoutTournamentInput;
    matches?: MatchUncheckedCreateNestedManyWithoutTournamentInput;
    standings?: StandingsUncheckedCreateNestedManyWithoutTournamentInput;
    match_events?: MatchEventUncheckedCreateNestedManyWithoutTournamentInput;
  };

  export type TournamentCreateOrConnectWithoutOrganizerInput = {
    where: TournamentWhereUniqueInput;
    create: XOR<
      TournamentCreateWithoutOrganizerInput,
      TournamentUncheckedCreateWithoutOrganizerInput
    >;
  };

  export type TournamentCreateManyOrganizerInputEnvelope = {
    data:
      | TournamentCreateManyOrganizerInput
      | TournamentCreateManyOrganizerInput[];
    skipDuplicates?: boolean;
  };

  export type TournamentUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: TournamentWhereUniqueInput;
    update: XOR<
      TournamentUpdateWithoutOrganizerInput,
      TournamentUncheckedUpdateWithoutOrganizerInput
    >;
    create: XOR<
      TournamentCreateWithoutOrganizerInput,
      TournamentUncheckedCreateWithoutOrganizerInput
    >;
  };

  export type TournamentUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: TournamentWhereUniqueInput;
    data: XOR<
      TournamentUpdateWithoutOrganizerInput,
      TournamentUncheckedUpdateWithoutOrganizerInput
    >;
  };

  export type TournamentUpdateManyWithWhereWithoutOrganizerInput = {
    where: TournamentScalarWhereInput;
    data: XOR<
      TournamentUpdateManyMutationInput,
      TournamentUncheckedUpdateManyWithoutOrganizerInput
    >;
  };

  export type TournamentScalarWhereInput = {
    AND?: TournamentScalarWhereInput | TournamentScalarWhereInput[];
    OR?: TournamentScalarWhereInput[];
    NOT?: TournamentScalarWhereInput | TournamentScalarWhereInput[];
    id?: StringFilter<'Tournament'> | string;
    name?: StringFilter<'Tournament'> | string;
    description?: StringNullableFilter<'Tournament'> | string | null;
    rules?: StringNullableFilter<'Tournament'> | string | null;
    format?: EnumTournamentFormatFilter<'Tournament'> | $Enums.TournamentFormat;
    status?: EnumTournamentStatusFilter<'Tournament'> | $Enums.TournamentStatus;
    points_win?: IntFilter<'Tournament'> | number;
    points_draw?: IntFilter<'Tournament'> | number;
    points_loss?: IntFilter<'Tournament'> | number;
    playoff_teams?: IntNullableFilter<'Tournament'> | number | null;
    organizer_id?: StringFilter<'Tournament'> | string;
    created_at?: DateTimeFilter<'Tournament'> | Date | string;
    updated_at?: DateTimeFilter<'Tournament'> | Date | string;
  };

  export type OrganizerCreateWithoutTournamentsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type OrganizerUncheckedCreateWithoutTournamentsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type OrganizerCreateOrConnectWithoutTournamentsInput = {
    where: OrganizerWhereUniqueInput;
    create: XOR<
      OrganizerCreateWithoutTournamentsInput,
      OrganizerUncheckedCreateWithoutTournamentsInput
    >;
  };

  export type TeamCreateWithoutTournamentInput = {
    id?: string;
    name: string;
    logo_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    standings?: StandingsCreateNestedManyWithoutTeamInput;
    match_events?: MatchEventCreateNestedManyWithoutTeamInput;
    matches_as_team_a?: MatchCreateNestedManyWithoutTeam_aInput;
    matches_as_team_b?: MatchCreateNestedManyWithoutTeam_bInput;
  };

  export type TeamUncheckedCreateWithoutTournamentInput = {
    id?: string;
    name: string;
    logo_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    standings?: StandingsUncheckedCreateNestedManyWithoutTeamInput;
    match_events?: MatchEventUncheckedCreateNestedManyWithoutTeamInput;
    matches_as_team_a?: MatchUncheckedCreateNestedManyWithoutTeam_aInput;
    matches_as_team_b?: MatchUncheckedCreateNestedManyWithoutTeam_bInput;
  };

  export type TeamCreateOrConnectWithoutTournamentInput = {
    where: TeamWhereUniqueInput;
    create: XOR<
      TeamCreateWithoutTournamentInput,
      TeamUncheckedCreateWithoutTournamentInput
    >;
  };

  export type TeamCreateManyTournamentInputEnvelope = {
    data: TeamCreateManyTournamentInput | TeamCreateManyTournamentInput[];
    skipDuplicates?: boolean;
  };

  export type MatchCreateWithoutTournamentInput = {
    id?: string;
    team_a_score?: number;
    team_b_score?: number;
    match_date: Date | string;
    status?: $Enums.MatchStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    team_a: TeamCreateNestedOneWithoutMatches_as_team_aInput;
    team_b: TeamCreateNestedOneWithoutMatches_as_team_bInput;
    events?: MatchEventCreateNestedManyWithoutMatchInput;
  };

  export type MatchUncheckedCreateWithoutTournamentInput = {
    id?: string;
    team_a_id: string;
    team_b_id: string;
    team_a_score?: number;
    team_b_score?: number;
    match_date: Date | string;
    status?: $Enums.MatchStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    events?: MatchEventUncheckedCreateNestedManyWithoutMatchInput;
  };

  export type MatchCreateOrConnectWithoutTournamentInput = {
    where: MatchWhereUniqueInput;
    create: XOR<
      MatchCreateWithoutTournamentInput,
      MatchUncheckedCreateWithoutTournamentInput
    >;
  };

  export type MatchCreateManyTournamentInputEnvelope = {
    data: MatchCreateManyTournamentInput | MatchCreateManyTournamentInput[];
    skipDuplicates?: boolean;
  };

  export type StandingsCreateWithoutTournamentInput = {
    id?: string;
    played?: number;
    wins?: number;
    draws?: number;
    losses?: number;
    goals_for?: number;
    goals_against?: number;
    goal_difference?: number;
    points?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    team: TeamCreateNestedOneWithoutStandingsInput;
  };

  export type StandingsUncheckedCreateWithoutTournamentInput = {
    id?: string;
    team_id: string;
    played?: number;
    wins?: number;
    draws?: number;
    losses?: number;
    goals_for?: number;
    goals_against?: number;
    goal_difference?: number;
    points?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type StandingsCreateOrConnectWithoutTournamentInput = {
    where: StandingsWhereUniqueInput;
    create: XOR<
      StandingsCreateWithoutTournamentInput,
      StandingsUncheckedCreateWithoutTournamentInput
    >;
  };

  export type StandingsCreateManyTournamentInputEnvelope = {
    data:
      | StandingsCreateManyTournamentInput
      | StandingsCreateManyTournamentInput[];
    skipDuplicates?: boolean;
  };

  export type MatchEventCreateWithoutTournamentInput = {
    id?: string;
    type: $Enums.EventType;
    player_name: string;
    created_at?: Date | string;
    match: MatchCreateNestedOneWithoutEventsInput;
    team: TeamCreateNestedOneWithoutMatch_eventsInput;
  };

  export type MatchEventUncheckedCreateWithoutTournamentInput = {
    id?: string;
    match_id: string;
    team_id: string;
    type: $Enums.EventType;
    player_name: string;
    created_at?: Date | string;
  };

  export type MatchEventCreateOrConnectWithoutTournamentInput = {
    where: MatchEventWhereUniqueInput;
    create: XOR<
      MatchEventCreateWithoutTournamentInput,
      MatchEventUncheckedCreateWithoutTournamentInput
    >;
  };

  export type MatchEventCreateManyTournamentInputEnvelope = {
    data:
      | MatchEventCreateManyTournamentInput
      | MatchEventCreateManyTournamentInput[];
    skipDuplicates?: boolean;
  };

  export type OrganizerUpsertWithoutTournamentsInput = {
    update: XOR<
      OrganizerUpdateWithoutTournamentsInput,
      OrganizerUncheckedUpdateWithoutTournamentsInput
    >;
    create: XOR<
      OrganizerCreateWithoutTournamentsInput,
      OrganizerUncheckedCreateWithoutTournamentsInput
    >;
    where?: OrganizerWhereInput;
  };

  export type OrganizerUpdateToOneWithWhereWithoutTournamentsInput = {
    where?: OrganizerWhereInput;
    data: XOR<
      OrganizerUpdateWithoutTournamentsInput,
      OrganizerUncheckedUpdateWithoutTournamentsInput
    >;
  };

  export type OrganizerUpdateWithoutTournamentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizerUncheckedUpdateWithoutTournamentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TeamUpsertWithWhereUniqueWithoutTournamentInput = {
    where: TeamWhereUniqueInput;
    update: XOR<
      TeamUpdateWithoutTournamentInput,
      TeamUncheckedUpdateWithoutTournamentInput
    >;
    create: XOR<
      TeamCreateWithoutTournamentInput,
      TeamUncheckedCreateWithoutTournamentInput
    >;
  };

  export type TeamUpdateWithWhereUniqueWithoutTournamentInput = {
    where: TeamWhereUniqueInput;
    data: XOR<
      TeamUpdateWithoutTournamentInput,
      TeamUncheckedUpdateWithoutTournamentInput
    >;
  };

  export type TeamUpdateManyWithWhereWithoutTournamentInput = {
    where: TeamScalarWhereInput;
    data: XOR<
      TeamUpdateManyMutationInput,
      TeamUncheckedUpdateManyWithoutTournamentInput
    >;
  };

  export type TeamScalarWhereInput = {
    AND?: TeamScalarWhereInput | TeamScalarWhereInput[];
    OR?: TeamScalarWhereInput[];
    NOT?: TeamScalarWhereInput | TeamScalarWhereInput[];
    id?: StringFilter<'Team'> | string;
    name?: StringFilter<'Team'> | string;
    logo_url?: StringNullableFilter<'Team'> | string | null;
    tournament_id?: StringFilter<'Team'> | string;
    created_at?: DateTimeFilter<'Team'> | Date | string;
    updated_at?: DateTimeFilter<'Team'> | Date | string;
  };

  export type MatchUpsertWithWhereUniqueWithoutTournamentInput = {
    where: MatchWhereUniqueInput;
    update: XOR<
      MatchUpdateWithoutTournamentInput,
      MatchUncheckedUpdateWithoutTournamentInput
    >;
    create: XOR<
      MatchCreateWithoutTournamentInput,
      MatchUncheckedCreateWithoutTournamentInput
    >;
  };

  export type MatchUpdateWithWhereUniqueWithoutTournamentInput = {
    where: MatchWhereUniqueInput;
    data: XOR<
      MatchUpdateWithoutTournamentInput,
      MatchUncheckedUpdateWithoutTournamentInput
    >;
  };

  export type MatchUpdateManyWithWhereWithoutTournamentInput = {
    where: MatchScalarWhereInput;
    data: XOR<
      MatchUpdateManyMutationInput,
      MatchUncheckedUpdateManyWithoutTournamentInput
    >;
  };

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[];
    OR?: MatchScalarWhereInput[];
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[];
    id?: StringFilter<'Match'> | string;
    tournament_id?: StringFilter<'Match'> | string;
    team_a_id?: StringFilter<'Match'> | string;
    team_b_id?: StringFilter<'Match'> | string;
    team_a_score?: IntFilter<'Match'> | number;
    team_b_score?: IntFilter<'Match'> | number;
    match_date?: DateTimeFilter<'Match'> | Date | string;
    status?: EnumMatchStatusFilter<'Match'> | $Enums.MatchStatus;
    created_at?: DateTimeFilter<'Match'> | Date | string;
    updated_at?: DateTimeFilter<'Match'> | Date | string;
  };

  export type StandingsUpsertWithWhereUniqueWithoutTournamentInput = {
    where: StandingsWhereUniqueInput;
    update: XOR<
      StandingsUpdateWithoutTournamentInput,
      StandingsUncheckedUpdateWithoutTournamentInput
    >;
    create: XOR<
      StandingsCreateWithoutTournamentInput,
      StandingsUncheckedCreateWithoutTournamentInput
    >;
  };

  export type StandingsUpdateWithWhereUniqueWithoutTournamentInput = {
    where: StandingsWhereUniqueInput;
    data: XOR<
      StandingsUpdateWithoutTournamentInput,
      StandingsUncheckedUpdateWithoutTournamentInput
    >;
  };

  export type StandingsUpdateManyWithWhereWithoutTournamentInput = {
    where: StandingsScalarWhereInput;
    data: XOR<
      StandingsUpdateManyMutationInput,
      StandingsUncheckedUpdateManyWithoutTournamentInput
    >;
  };

  export type StandingsScalarWhereInput = {
    AND?: StandingsScalarWhereInput | StandingsScalarWhereInput[];
    OR?: StandingsScalarWhereInput[];
    NOT?: StandingsScalarWhereInput | StandingsScalarWhereInput[];
    id?: StringFilter<'Standings'> | string;
    tournament_id?: StringFilter<'Standings'> | string;
    team_id?: StringFilter<'Standings'> | string;
    played?: IntFilter<'Standings'> | number;
    wins?: IntFilter<'Standings'> | number;
    draws?: IntFilter<'Standings'> | number;
    losses?: IntFilter<'Standings'> | number;
    goals_for?: IntFilter<'Standings'> | number;
    goals_against?: IntFilter<'Standings'> | number;
    goal_difference?: IntFilter<'Standings'> | number;
    points?: IntFilter<'Standings'> | number;
    created_at?: DateTimeFilter<'Standings'> | Date | string;
    updated_at?: DateTimeFilter<'Standings'> | Date | string;
  };

  export type MatchEventUpsertWithWhereUniqueWithoutTournamentInput = {
    where: MatchEventWhereUniqueInput;
    update: XOR<
      MatchEventUpdateWithoutTournamentInput,
      MatchEventUncheckedUpdateWithoutTournamentInput
    >;
    create: XOR<
      MatchEventCreateWithoutTournamentInput,
      MatchEventUncheckedCreateWithoutTournamentInput
    >;
  };

  export type MatchEventUpdateWithWhereUniqueWithoutTournamentInput = {
    where: MatchEventWhereUniqueInput;
    data: XOR<
      MatchEventUpdateWithoutTournamentInput,
      MatchEventUncheckedUpdateWithoutTournamentInput
    >;
  };

  export type MatchEventUpdateManyWithWhereWithoutTournamentInput = {
    where: MatchEventScalarWhereInput;
    data: XOR<
      MatchEventUpdateManyMutationInput,
      MatchEventUncheckedUpdateManyWithoutTournamentInput
    >;
  };

  export type MatchEventScalarWhereInput = {
    AND?: MatchEventScalarWhereInput | MatchEventScalarWhereInput[];
    OR?: MatchEventScalarWhereInput[];
    NOT?: MatchEventScalarWhereInput | MatchEventScalarWhereInput[];
    id?: StringFilter<'MatchEvent'> | string;
    match_id?: StringFilter<'MatchEvent'> | string;
    tournament_id?: StringFilter<'MatchEvent'> | string;
    team_id?: StringFilter<'MatchEvent'> | string;
    type?: EnumEventTypeFilter<'MatchEvent'> | $Enums.EventType;
    player_name?: StringFilter<'MatchEvent'> | string;
    created_at?: DateTimeFilter<'MatchEvent'> | Date | string;
  };

  export type TournamentCreateWithoutTeamsInput = {
    id?: string;
    name: string;
    description?: string | null;
    rules?: string | null;
    format: $Enums.TournamentFormat;
    status?: $Enums.TournamentStatus;
    points_win?: number;
    points_draw?: number;
    points_loss?: number;
    playoff_teams?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organizer: OrganizerCreateNestedOneWithoutTournamentsInput;
    matches?: MatchCreateNestedManyWithoutTournamentInput;
    standings?: StandingsCreateNestedManyWithoutTournamentInput;
    match_events?: MatchEventCreateNestedManyWithoutTournamentInput;
  };

  export type TournamentUncheckedCreateWithoutTeamsInput = {
    id?: string;
    name: string;
    description?: string | null;
    rules?: string | null;
    format: $Enums.TournamentFormat;
    status?: $Enums.TournamentStatus;
    points_win?: number;
    points_draw?: number;
    points_loss?: number;
    playoff_teams?: number | null;
    organizer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    matches?: MatchUncheckedCreateNestedManyWithoutTournamentInput;
    standings?: StandingsUncheckedCreateNestedManyWithoutTournamentInput;
    match_events?: MatchEventUncheckedCreateNestedManyWithoutTournamentInput;
  };

  export type TournamentCreateOrConnectWithoutTeamsInput = {
    where: TournamentWhereUniqueInput;
    create: XOR<
      TournamentCreateWithoutTeamsInput,
      TournamentUncheckedCreateWithoutTeamsInput
    >;
  };

  export type StandingsCreateWithoutTeamInput = {
    id?: string;
    played?: number;
    wins?: number;
    draws?: number;
    losses?: number;
    goals_for?: number;
    goals_against?: number;
    goal_difference?: number;
    points?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    tournament: TournamentCreateNestedOneWithoutStandingsInput;
  };

  export type StandingsUncheckedCreateWithoutTeamInput = {
    id?: string;
    tournament_id: string;
    played?: number;
    wins?: number;
    draws?: number;
    losses?: number;
    goals_for?: number;
    goals_against?: number;
    goal_difference?: number;
    points?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type StandingsCreateOrConnectWithoutTeamInput = {
    where: StandingsWhereUniqueInput;
    create: XOR<
      StandingsCreateWithoutTeamInput,
      StandingsUncheckedCreateWithoutTeamInput
    >;
  };

  export type StandingsCreateManyTeamInputEnvelope = {
    data: StandingsCreateManyTeamInput | StandingsCreateManyTeamInput[];
    skipDuplicates?: boolean;
  };

  export type MatchEventCreateWithoutTeamInput = {
    id?: string;
    type: $Enums.EventType;
    player_name: string;
    created_at?: Date | string;
    match: MatchCreateNestedOneWithoutEventsInput;
    tournament: TournamentCreateNestedOneWithoutMatch_eventsInput;
  };

  export type MatchEventUncheckedCreateWithoutTeamInput = {
    id?: string;
    match_id: string;
    tournament_id: string;
    type: $Enums.EventType;
    player_name: string;
    created_at?: Date | string;
  };

  export type MatchEventCreateOrConnectWithoutTeamInput = {
    where: MatchEventWhereUniqueInput;
    create: XOR<
      MatchEventCreateWithoutTeamInput,
      MatchEventUncheckedCreateWithoutTeamInput
    >;
  };

  export type MatchEventCreateManyTeamInputEnvelope = {
    data: MatchEventCreateManyTeamInput | MatchEventCreateManyTeamInput[];
    skipDuplicates?: boolean;
  };

  export type MatchCreateWithoutTeam_aInput = {
    id?: string;
    team_a_score?: number;
    team_b_score?: number;
    match_date: Date | string;
    status?: $Enums.MatchStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    tournament: TournamentCreateNestedOneWithoutMatchesInput;
    team_b: TeamCreateNestedOneWithoutMatches_as_team_bInput;
    events?: MatchEventCreateNestedManyWithoutMatchInput;
  };

  export type MatchUncheckedCreateWithoutTeam_aInput = {
    id?: string;
    tournament_id: string;
    team_b_id: string;
    team_a_score?: number;
    team_b_score?: number;
    match_date: Date | string;
    status?: $Enums.MatchStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    events?: MatchEventUncheckedCreateNestedManyWithoutMatchInput;
  };

  export type MatchCreateOrConnectWithoutTeam_aInput = {
    where: MatchWhereUniqueInput;
    create: XOR<
      MatchCreateWithoutTeam_aInput,
      MatchUncheckedCreateWithoutTeam_aInput
    >;
  };

  export type MatchCreateManyTeam_aInputEnvelope = {
    data: MatchCreateManyTeam_aInput | MatchCreateManyTeam_aInput[];
    skipDuplicates?: boolean;
  };

  export type MatchCreateWithoutTeam_bInput = {
    id?: string;
    team_a_score?: number;
    team_b_score?: number;
    match_date: Date | string;
    status?: $Enums.MatchStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    tournament: TournamentCreateNestedOneWithoutMatchesInput;
    team_a: TeamCreateNestedOneWithoutMatches_as_team_aInput;
    events?: MatchEventCreateNestedManyWithoutMatchInput;
  };

  export type MatchUncheckedCreateWithoutTeam_bInput = {
    id?: string;
    tournament_id: string;
    team_a_id: string;
    team_a_score?: number;
    team_b_score?: number;
    match_date: Date | string;
    status?: $Enums.MatchStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    events?: MatchEventUncheckedCreateNestedManyWithoutMatchInput;
  };

  export type MatchCreateOrConnectWithoutTeam_bInput = {
    where: MatchWhereUniqueInput;
    create: XOR<
      MatchCreateWithoutTeam_bInput,
      MatchUncheckedCreateWithoutTeam_bInput
    >;
  };

  export type MatchCreateManyTeam_bInputEnvelope = {
    data: MatchCreateManyTeam_bInput | MatchCreateManyTeam_bInput[];
    skipDuplicates?: boolean;
  };

  export type TournamentUpsertWithoutTeamsInput = {
    update: XOR<
      TournamentUpdateWithoutTeamsInput,
      TournamentUncheckedUpdateWithoutTeamsInput
    >;
    create: XOR<
      TournamentCreateWithoutTeamsInput,
      TournamentUncheckedCreateWithoutTeamsInput
    >;
    where?: TournamentWhereInput;
  };

  export type TournamentUpdateToOneWithWhereWithoutTeamsInput = {
    where?: TournamentWhereInput;
    data: XOR<
      TournamentUpdateWithoutTeamsInput,
      TournamentUncheckedUpdateWithoutTeamsInput
    >;
  };

  export type TournamentUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    rules?: NullableStringFieldUpdateOperationsInput | string | null;
    format?:
      | EnumTournamentFormatFieldUpdateOperationsInput
      | $Enums.TournamentFormat;
    status?:
      | EnumTournamentStatusFieldUpdateOperationsInput
      | $Enums.TournamentStatus;
    points_win?: IntFieldUpdateOperationsInput | number;
    points_draw?: IntFieldUpdateOperationsInput | number;
    points_loss?: IntFieldUpdateOperationsInput | number;
    playoff_teams?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organizer?: OrganizerUpdateOneRequiredWithoutTournamentsNestedInput;
    matches?: MatchUpdateManyWithoutTournamentNestedInput;
    standings?: StandingsUpdateManyWithoutTournamentNestedInput;
    match_events?: MatchEventUpdateManyWithoutTournamentNestedInput;
  };

  export type TournamentUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    rules?: NullableStringFieldUpdateOperationsInput | string | null;
    format?:
      | EnumTournamentFormatFieldUpdateOperationsInput
      | $Enums.TournamentFormat;
    status?:
      | EnumTournamentStatusFieldUpdateOperationsInput
      | $Enums.TournamentStatus;
    points_win?: IntFieldUpdateOperationsInput | number;
    points_draw?: IntFieldUpdateOperationsInput | number;
    points_loss?: IntFieldUpdateOperationsInput | number;
    playoff_teams?: NullableIntFieldUpdateOperationsInput | number | null;
    organizer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    matches?: MatchUncheckedUpdateManyWithoutTournamentNestedInput;
    standings?: StandingsUncheckedUpdateManyWithoutTournamentNestedInput;
    match_events?: MatchEventUncheckedUpdateManyWithoutTournamentNestedInput;
  };

  export type StandingsUpsertWithWhereUniqueWithoutTeamInput = {
    where: StandingsWhereUniqueInput;
    update: XOR<
      StandingsUpdateWithoutTeamInput,
      StandingsUncheckedUpdateWithoutTeamInput
    >;
    create: XOR<
      StandingsCreateWithoutTeamInput,
      StandingsUncheckedCreateWithoutTeamInput
    >;
  };

  export type StandingsUpdateWithWhereUniqueWithoutTeamInput = {
    where: StandingsWhereUniqueInput;
    data: XOR<
      StandingsUpdateWithoutTeamInput,
      StandingsUncheckedUpdateWithoutTeamInput
    >;
  };

  export type StandingsUpdateManyWithWhereWithoutTeamInput = {
    where: StandingsScalarWhereInput;
    data: XOR<
      StandingsUpdateManyMutationInput,
      StandingsUncheckedUpdateManyWithoutTeamInput
    >;
  };

  export type MatchEventUpsertWithWhereUniqueWithoutTeamInput = {
    where: MatchEventWhereUniqueInput;
    update: XOR<
      MatchEventUpdateWithoutTeamInput,
      MatchEventUncheckedUpdateWithoutTeamInput
    >;
    create: XOR<
      MatchEventCreateWithoutTeamInput,
      MatchEventUncheckedCreateWithoutTeamInput
    >;
  };

  export type MatchEventUpdateWithWhereUniqueWithoutTeamInput = {
    where: MatchEventWhereUniqueInput;
    data: XOR<
      MatchEventUpdateWithoutTeamInput,
      MatchEventUncheckedUpdateWithoutTeamInput
    >;
  };

  export type MatchEventUpdateManyWithWhereWithoutTeamInput = {
    where: MatchEventScalarWhereInput;
    data: XOR<
      MatchEventUpdateManyMutationInput,
      MatchEventUncheckedUpdateManyWithoutTeamInput
    >;
  };

  export type MatchUpsertWithWhereUniqueWithoutTeam_aInput = {
    where: MatchWhereUniqueInput;
    update: XOR<
      MatchUpdateWithoutTeam_aInput,
      MatchUncheckedUpdateWithoutTeam_aInput
    >;
    create: XOR<
      MatchCreateWithoutTeam_aInput,
      MatchUncheckedCreateWithoutTeam_aInput
    >;
  };

  export type MatchUpdateWithWhereUniqueWithoutTeam_aInput = {
    where: MatchWhereUniqueInput;
    data: XOR<
      MatchUpdateWithoutTeam_aInput,
      MatchUncheckedUpdateWithoutTeam_aInput
    >;
  };

  export type MatchUpdateManyWithWhereWithoutTeam_aInput = {
    where: MatchScalarWhereInput;
    data: XOR<
      MatchUpdateManyMutationInput,
      MatchUncheckedUpdateManyWithoutTeam_aInput
    >;
  };

  export type MatchUpsertWithWhereUniqueWithoutTeam_bInput = {
    where: MatchWhereUniqueInput;
    update: XOR<
      MatchUpdateWithoutTeam_bInput,
      MatchUncheckedUpdateWithoutTeam_bInput
    >;
    create: XOR<
      MatchCreateWithoutTeam_bInput,
      MatchUncheckedCreateWithoutTeam_bInput
    >;
  };

  export type MatchUpdateWithWhereUniqueWithoutTeam_bInput = {
    where: MatchWhereUniqueInput;
    data: XOR<
      MatchUpdateWithoutTeam_bInput,
      MatchUncheckedUpdateWithoutTeam_bInput
    >;
  };

  export type MatchUpdateManyWithWhereWithoutTeam_bInput = {
    where: MatchScalarWhereInput;
    data: XOR<
      MatchUpdateManyMutationInput,
      MatchUncheckedUpdateManyWithoutTeam_bInput
    >;
  };

  export type TournamentCreateWithoutMatchesInput = {
    id?: string;
    name: string;
    description?: string | null;
    rules?: string | null;
    format: $Enums.TournamentFormat;
    status?: $Enums.TournamentStatus;
    points_win?: number;
    points_draw?: number;
    points_loss?: number;
    playoff_teams?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organizer: OrganizerCreateNestedOneWithoutTournamentsInput;
    teams?: TeamCreateNestedManyWithoutTournamentInput;
    standings?: StandingsCreateNestedManyWithoutTournamentInput;
    match_events?: MatchEventCreateNestedManyWithoutTournamentInput;
  };

  export type TournamentUncheckedCreateWithoutMatchesInput = {
    id?: string;
    name: string;
    description?: string | null;
    rules?: string | null;
    format: $Enums.TournamentFormat;
    status?: $Enums.TournamentStatus;
    points_win?: number;
    points_draw?: number;
    points_loss?: number;
    playoff_teams?: number | null;
    organizer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    teams?: TeamUncheckedCreateNestedManyWithoutTournamentInput;
    standings?: StandingsUncheckedCreateNestedManyWithoutTournamentInput;
    match_events?: MatchEventUncheckedCreateNestedManyWithoutTournamentInput;
  };

  export type TournamentCreateOrConnectWithoutMatchesInput = {
    where: TournamentWhereUniqueInput;
    create: XOR<
      TournamentCreateWithoutMatchesInput,
      TournamentUncheckedCreateWithoutMatchesInput
    >;
  };

  export type TeamCreateWithoutMatches_as_team_aInput = {
    id?: string;
    name: string;
    logo_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tournament: TournamentCreateNestedOneWithoutTeamsInput;
    standings?: StandingsCreateNestedManyWithoutTeamInput;
    match_events?: MatchEventCreateNestedManyWithoutTeamInput;
    matches_as_team_b?: MatchCreateNestedManyWithoutTeam_bInput;
  };

  export type TeamUncheckedCreateWithoutMatches_as_team_aInput = {
    id?: string;
    name: string;
    logo_url?: string | null;
    tournament_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    standings?: StandingsUncheckedCreateNestedManyWithoutTeamInput;
    match_events?: MatchEventUncheckedCreateNestedManyWithoutTeamInput;
    matches_as_team_b?: MatchUncheckedCreateNestedManyWithoutTeam_bInput;
  };

  export type TeamCreateOrConnectWithoutMatches_as_team_aInput = {
    where: TeamWhereUniqueInput;
    create: XOR<
      TeamCreateWithoutMatches_as_team_aInput,
      TeamUncheckedCreateWithoutMatches_as_team_aInput
    >;
  };

  export type TeamCreateWithoutMatches_as_team_bInput = {
    id?: string;
    name: string;
    logo_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tournament: TournamentCreateNestedOneWithoutTeamsInput;
    standings?: StandingsCreateNestedManyWithoutTeamInput;
    match_events?: MatchEventCreateNestedManyWithoutTeamInput;
    matches_as_team_a?: MatchCreateNestedManyWithoutTeam_aInput;
  };

  export type TeamUncheckedCreateWithoutMatches_as_team_bInput = {
    id?: string;
    name: string;
    logo_url?: string | null;
    tournament_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    standings?: StandingsUncheckedCreateNestedManyWithoutTeamInput;
    match_events?: MatchEventUncheckedCreateNestedManyWithoutTeamInput;
    matches_as_team_a?: MatchUncheckedCreateNestedManyWithoutTeam_aInput;
  };

  export type TeamCreateOrConnectWithoutMatches_as_team_bInput = {
    where: TeamWhereUniqueInput;
    create: XOR<
      TeamCreateWithoutMatches_as_team_bInput,
      TeamUncheckedCreateWithoutMatches_as_team_bInput
    >;
  };

  export type MatchEventCreateWithoutMatchInput = {
    id?: string;
    type: $Enums.EventType;
    player_name: string;
    created_at?: Date | string;
    tournament: TournamentCreateNestedOneWithoutMatch_eventsInput;
    team: TeamCreateNestedOneWithoutMatch_eventsInput;
  };

  export type MatchEventUncheckedCreateWithoutMatchInput = {
    id?: string;
    tournament_id: string;
    team_id: string;
    type: $Enums.EventType;
    player_name: string;
    created_at?: Date | string;
  };

  export type MatchEventCreateOrConnectWithoutMatchInput = {
    where: MatchEventWhereUniqueInput;
    create: XOR<
      MatchEventCreateWithoutMatchInput,
      MatchEventUncheckedCreateWithoutMatchInput
    >;
  };

  export type MatchEventCreateManyMatchInputEnvelope = {
    data: MatchEventCreateManyMatchInput | MatchEventCreateManyMatchInput[];
    skipDuplicates?: boolean;
  };

  export type TournamentUpsertWithoutMatchesInput = {
    update: XOR<
      TournamentUpdateWithoutMatchesInput,
      TournamentUncheckedUpdateWithoutMatchesInput
    >;
    create: XOR<
      TournamentCreateWithoutMatchesInput,
      TournamentUncheckedCreateWithoutMatchesInput
    >;
    where?: TournamentWhereInput;
  };

  export type TournamentUpdateToOneWithWhereWithoutMatchesInput = {
    where?: TournamentWhereInput;
    data: XOR<
      TournamentUpdateWithoutMatchesInput,
      TournamentUncheckedUpdateWithoutMatchesInput
    >;
  };

  export type TournamentUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    rules?: NullableStringFieldUpdateOperationsInput | string | null;
    format?:
      | EnumTournamentFormatFieldUpdateOperationsInput
      | $Enums.TournamentFormat;
    status?:
      | EnumTournamentStatusFieldUpdateOperationsInput
      | $Enums.TournamentStatus;
    points_win?: IntFieldUpdateOperationsInput | number;
    points_draw?: IntFieldUpdateOperationsInput | number;
    points_loss?: IntFieldUpdateOperationsInput | number;
    playoff_teams?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organizer?: OrganizerUpdateOneRequiredWithoutTournamentsNestedInput;
    teams?: TeamUpdateManyWithoutTournamentNestedInput;
    standings?: StandingsUpdateManyWithoutTournamentNestedInput;
    match_events?: MatchEventUpdateManyWithoutTournamentNestedInput;
  };

  export type TournamentUncheckedUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    rules?: NullableStringFieldUpdateOperationsInput | string | null;
    format?:
      | EnumTournamentFormatFieldUpdateOperationsInput
      | $Enums.TournamentFormat;
    status?:
      | EnumTournamentStatusFieldUpdateOperationsInput
      | $Enums.TournamentStatus;
    points_win?: IntFieldUpdateOperationsInput | number;
    points_draw?: IntFieldUpdateOperationsInput | number;
    points_loss?: IntFieldUpdateOperationsInput | number;
    playoff_teams?: NullableIntFieldUpdateOperationsInput | number | null;
    organizer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    teams?: TeamUncheckedUpdateManyWithoutTournamentNestedInput;
    standings?: StandingsUncheckedUpdateManyWithoutTournamentNestedInput;
    match_events?: MatchEventUncheckedUpdateManyWithoutTournamentNestedInput;
  };

  export type TeamUpsertWithoutMatches_as_team_aInput = {
    update: XOR<
      TeamUpdateWithoutMatches_as_team_aInput,
      TeamUncheckedUpdateWithoutMatches_as_team_aInput
    >;
    create: XOR<
      TeamCreateWithoutMatches_as_team_aInput,
      TeamUncheckedCreateWithoutMatches_as_team_aInput
    >;
    where?: TeamWhereInput;
  };

  export type TeamUpdateToOneWithWhereWithoutMatches_as_team_aInput = {
    where?: TeamWhereInput;
    data: XOR<
      TeamUpdateWithoutMatches_as_team_aInput,
      TeamUncheckedUpdateWithoutMatches_as_team_aInput
    >;
  };

  export type TeamUpdateWithoutMatches_as_team_aInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: TournamentUpdateOneRequiredWithoutTeamsNestedInput;
    standings?: StandingsUpdateManyWithoutTeamNestedInput;
    match_events?: MatchEventUpdateManyWithoutTeamNestedInput;
    matches_as_team_b?: MatchUpdateManyWithoutTeam_bNestedInput;
  };

  export type TeamUncheckedUpdateWithoutMatches_as_team_aInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null;
    tournament_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    standings?: StandingsUncheckedUpdateManyWithoutTeamNestedInput;
    match_events?: MatchEventUncheckedUpdateManyWithoutTeamNestedInput;
    matches_as_team_b?: MatchUncheckedUpdateManyWithoutTeam_bNestedInput;
  };

  export type TeamUpsertWithoutMatches_as_team_bInput = {
    update: XOR<
      TeamUpdateWithoutMatches_as_team_bInput,
      TeamUncheckedUpdateWithoutMatches_as_team_bInput
    >;
    create: XOR<
      TeamCreateWithoutMatches_as_team_bInput,
      TeamUncheckedCreateWithoutMatches_as_team_bInput
    >;
    where?: TeamWhereInput;
  };

  export type TeamUpdateToOneWithWhereWithoutMatches_as_team_bInput = {
    where?: TeamWhereInput;
    data: XOR<
      TeamUpdateWithoutMatches_as_team_bInput,
      TeamUncheckedUpdateWithoutMatches_as_team_bInput
    >;
  };

  export type TeamUpdateWithoutMatches_as_team_bInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: TournamentUpdateOneRequiredWithoutTeamsNestedInput;
    standings?: StandingsUpdateManyWithoutTeamNestedInput;
    match_events?: MatchEventUpdateManyWithoutTeamNestedInput;
    matches_as_team_a?: MatchUpdateManyWithoutTeam_aNestedInput;
  };

  export type TeamUncheckedUpdateWithoutMatches_as_team_bInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null;
    tournament_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    standings?: StandingsUncheckedUpdateManyWithoutTeamNestedInput;
    match_events?: MatchEventUncheckedUpdateManyWithoutTeamNestedInput;
    matches_as_team_a?: MatchUncheckedUpdateManyWithoutTeam_aNestedInput;
  };

  export type MatchEventUpsertWithWhereUniqueWithoutMatchInput = {
    where: MatchEventWhereUniqueInput;
    update: XOR<
      MatchEventUpdateWithoutMatchInput,
      MatchEventUncheckedUpdateWithoutMatchInput
    >;
    create: XOR<
      MatchEventCreateWithoutMatchInput,
      MatchEventUncheckedCreateWithoutMatchInput
    >;
  };

  export type MatchEventUpdateWithWhereUniqueWithoutMatchInput = {
    where: MatchEventWhereUniqueInput;
    data: XOR<
      MatchEventUpdateWithoutMatchInput,
      MatchEventUncheckedUpdateWithoutMatchInput
    >;
  };

  export type MatchEventUpdateManyWithWhereWithoutMatchInput = {
    where: MatchEventScalarWhereInput;
    data: XOR<
      MatchEventUpdateManyMutationInput,
      MatchEventUncheckedUpdateManyWithoutMatchInput
    >;
  };

  export type TournamentCreateWithoutStandingsInput = {
    id?: string;
    name: string;
    description?: string | null;
    rules?: string | null;
    format: $Enums.TournamentFormat;
    status?: $Enums.TournamentStatus;
    points_win?: number;
    points_draw?: number;
    points_loss?: number;
    playoff_teams?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organizer: OrganizerCreateNestedOneWithoutTournamentsInput;
    teams?: TeamCreateNestedManyWithoutTournamentInput;
    matches?: MatchCreateNestedManyWithoutTournamentInput;
    match_events?: MatchEventCreateNestedManyWithoutTournamentInput;
  };

  export type TournamentUncheckedCreateWithoutStandingsInput = {
    id?: string;
    name: string;
    description?: string | null;
    rules?: string | null;
    format: $Enums.TournamentFormat;
    status?: $Enums.TournamentStatus;
    points_win?: number;
    points_draw?: number;
    points_loss?: number;
    playoff_teams?: number | null;
    organizer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    teams?: TeamUncheckedCreateNestedManyWithoutTournamentInput;
    matches?: MatchUncheckedCreateNestedManyWithoutTournamentInput;
    match_events?: MatchEventUncheckedCreateNestedManyWithoutTournamentInput;
  };

  export type TournamentCreateOrConnectWithoutStandingsInput = {
    where: TournamentWhereUniqueInput;
    create: XOR<
      TournamentCreateWithoutStandingsInput,
      TournamentUncheckedCreateWithoutStandingsInput
    >;
  };

  export type TeamCreateWithoutStandingsInput = {
    id?: string;
    name: string;
    logo_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tournament: TournamentCreateNestedOneWithoutTeamsInput;
    match_events?: MatchEventCreateNestedManyWithoutTeamInput;
    matches_as_team_a?: MatchCreateNestedManyWithoutTeam_aInput;
    matches_as_team_b?: MatchCreateNestedManyWithoutTeam_bInput;
  };

  export type TeamUncheckedCreateWithoutStandingsInput = {
    id?: string;
    name: string;
    logo_url?: string | null;
    tournament_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    match_events?: MatchEventUncheckedCreateNestedManyWithoutTeamInput;
    matches_as_team_a?: MatchUncheckedCreateNestedManyWithoutTeam_aInput;
    matches_as_team_b?: MatchUncheckedCreateNestedManyWithoutTeam_bInput;
  };

  export type TeamCreateOrConnectWithoutStandingsInput = {
    where: TeamWhereUniqueInput;
    create: XOR<
      TeamCreateWithoutStandingsInput,
      TeamUncheckedCreateWithoutStandingsInput
    >;
  };

  export type TournamentUpsertWithoutStandingsInput = {
    update: XOR<
      TournamentUpdateWithoutStandingsInput,
      TournamentUncheckedUpdateWithoutStandingsInput
    >;
    create: XOR<
      TournamentCreateWithoutStandingsInput,
      TournamentUncheckedCreateWithoutStandingsInput
    >;
    where?: TournamentWhereInput;
  };

  export type TournamentUpdateToOneWithWhereWithoutStandingsInput = {
    where?: TournamentWhereInput;
    data: XOR<
      TournamentUpdateWithoutStandingsInput,
      TournamentUncheckedUpdateWithoutStandingsInput
    >;
  };

  export type TournamentUpdateWithoutStandingsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    rules?: NullableStringFieldUpdateOperationsInput | string | null;
    format?:
      | EnumTournamentFormatFieldUpdateOperationsInput
      | $Enums.TournamentFormat;
    status?:
      | EnumTournamentStatusFieldUpdateOperationsInput
      | $Enums.TournamentStatus;
    points_win?: IntFieldUpdateOperationsInput | number;
    points_draw?: IntFieldUpdateOperationsInput | number;
    points_loss?: IntFieldUpdateOperationsInput | number;
    playoff_teams?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organizer?: OrganizerUpdateOneRequiredWithoutTournamentsNestedInput;
    teams?: TeamUpdateManyWithoutTournamentNestedInput;
    matches?: MatchUpdateManyWithoutTournamentNestedInput;
    match_events?: MatchEventUpdateManyWithoutTournamentNestedInput;
  };

  export type TournamentUncheckedUpdateWithoutStandingsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    rules?: NullableStringFieldUpdateOperationsInput | string | null;
    format?:
      | EnumTournamentFormatFieldUpdateOperationsInput
      | $Enums.TournamentFormat;
    status?:
      | EnumTournamentStatusFieldUpdateOperationsInput
      | $Enums.TournamentStatus;
    points_win?: IntFieldUpdateOperationsInput | number;
    points_draw?: IntFieldUpdateOperationsInput | number;
    points_loss?: IntFieldUpdateOperationsInput | number;
    playoff_teams?: NullableIntFieldUpdateOperationsInput | number | null;
    organizer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    teams?: TeamUncheckedUpdateManyWithoutTournamentNestedInput;
    matches?: MatchUncheckedUpdateManyWithoutTournamentNestedInput;
    match_events?: MatchEventUncheckedUpdateManyWithoutTournamentNestedInput;
  };

  export type TeamUpsertWithoutStandingsInput = {
    update: XOR<
      TeamUpdateWithoutStandingsInput,
      TeamUncheckedUpdateWithoutStandingsInput
    >;
    create: XOR<
      TeamCreateWithoutStandingsInput,
      TeamUncheckedCreateWithoutStandingsInput
    >;
    where?: TeamWhereInput;
  };

  export type TeamUpdateToOneWithWhereWithoutStandingsInput = {
    where?: TeamWhereInput;
    data: XOR<
      TeamUpdateWithoutStandingsInput,
      TeamUncheckedUpdateWithoutStandingsInput
    >;
  };

  export type TeamUpdateWithoutStandingsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: TournamentUpdateOneRequiredWithoutTeamsNestedInput;
    match_events?: MatchEventUpdateManyWithoutTeamNestedInput;
    matches_as_team_a?: MatchUpdateManyWithoutTeam_aNestedInput;
    matches_as_team_b?: MatchUpdateManyWithoutTeam_bNestedInput;
  };

  export type TeamUncheckedUpdateWithoutStandingsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null;
    tournament_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    match_events?: MatchEventUncheckedUpdateManyWithoutTeamNestedInput;
    matches_as_team_a?: MatchUncheckedUpdateManyWithoutTeam_aNestedInput;
    matches_as_team_b?: MatchUncheckedUpdateManyWithoutTeam_bNestedInput;
  };

  export type MatchCreateWithoutEventsInput = {
    id?: string;
    team_a_score?: number;
    team_b_score?: number;
    match_date: Date | string;
    status?: $Enums.MatchStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
    tournament: TournamentCreateNestedOneWithoutMatchesInput;
    team_a: TeamCreateNestedOneWithoutMatches_as_team_aInput;
    team_b: TeamCreateNestedOneWithoutMatches_as_team_bInput;
  };

  export type MatchUncheckedCreateWithoutEventsInput = {
    id?: string;
    tournament_id: string;
    team_a_id: string;
    team_b_id: string;
    team_a_score?: number;
    team_b_score?: number;
    match_date: Date | string;
    status?: $Enums.MatchStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type MatchCreateOrConnectWithoutEventsInput = {
    where: MatchWhereUniqueInput;
    create: XOR<
      MatchCreateWithoutEventsInput,
      MatchUncheckedCreateWithoutEventsInput
    >;
  };

  export type TournamentCreateWithoutMatch_eventsInput = {
    id?: string;
    name: string;
    description?: string | null;
    rules?: string | null;
    format: $Enums.TournamentFormat;
    status?: $Enums.TournamentStatus;
    points_win?: number;
    points_draw?: number;
    points_loss?: number;
    playoff_teams?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organizer: OrganizerCreateNestedOneWithoutTournamentsInput;
    teams?: TeamCreateNestedManyWithoutTournamentInput;
    matches?: MatchCreateNestedManyWithoutTournamentInput;
    standings?: StandingsCreateNestedManyWithoutTournamentInput;
  };

  export type TournamentUncheckedCreateWithoutMatch_eventsInput = {
    id?: string;
    name: string;
    description?: string | null;
    rules?: string | null;
    format: $Enums.TournamentFormat;
    status?: $Enums.TournamentStatus;
    points_win?: number;
    points_draw?: number;
    points_loss?: number;
    playoff_teams?: number | null;
    organizer_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    teams?: TeamUncheckedCreateNestedManyWithoutTournamentInput;
    matches?: MatchUncheckedCreateNestedManyWithoutTournamentInput;
    standings?: StandingsUncheckedCreateNestedManyWithoutTournamentInput;
  };

  export type TournamentCreateOrConnectWithoutMatch_eventsInput = {
    where: TournamentWhereUniqueInput;
    create: XOR<
      TournamentCreateWithoutMatch_eventsInput,
      TournamentUncheckedCreateWithoutMatch_eventsInput
    >;
  };

  export type TeamCreateWithoutMatch_eventsInput = {
    id?: string;
    name: string;
    logo_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tournament: TournamentCreateNestedOneWithoutTeamsInput;
    standings?: StandingsCreateNestedManyWithoutTeamInput;
    matches_as_team_a?: MatchCreateNestedManyWithoutTeam_aInput;
    matches_as_team_b?: MatchCreateNestedManyWithoutTeam_bInput;
  };

  export type TeamUncheckedCreateWithoutMatch_eventsInput = {
    id?: string;
    name: string;
    logo_url?: string | null;
    tournament_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    standings?: StandingsUncheckedCreateNestedManyWithoutTeamInput;
    matches_as_team_a?: MatchUncheckedCreateNestedManyWithoutTeam_aInput;
    matches_as_team_b?: MatchUncheckedCreateNestedManyWithoutTeam_bInput;
  };

  export type TeamCreateOrConnectWithoutMatch_eventsInput = {
    where: TeamWhereUniqueInput;
    create: XOR<
      TeamCreateWithoutMatch_eventsInput,
      TeamUncheckedCreateWithoutMatch_eventsInput
    >;
  };

  export type MatchUpsertWithoutEventsInput = {
    update: XOR<
      MatchUpdateWithoutEventsInput,
      MatchUncheckedUpdateWithoutEventsInput
    >;
    create: XOR<
      MatchCreateWithoutEventsInput,
      MatchUncheckedCreateWithoutEventsInput
    >;
    where?: MatchWhereInput;
  };

  export type MatchUpdateToOneWithWhereWithoutEventsInput = {
    where?: MatchWhereInput;
    data: XOR<
      MatchUpdateWithoutEventsInput,
      MatchUncheckedUpdateWithoutEventsInput
    >;
  };

  export type MatchUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    team_a_score?: IntFieldUpdateOperationsInput | number;
    team_b_score?: IntFieldUpdateOperationsInput | number;
    match_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: TournamentUpdateOneRequiredWithoutMatchesNestedInput;
    team_a?: TeamUpdateOneRequiredWithoutMatches_as_team_aNestedInput;
    team_b?: TeamUpdateOneRequiredWithoutMatches_as_team_bNestedInput;
  };

  export type MatchUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tournament_id?: StringFieldUpdateOperationsInput | string;
    team_a_id?: StringFieldUpdateOperationsInput | string;
    team_b_id?: StringFieldUpdateOperationsInput | string;
    team_a_score?: IntFieldUpdateOperationsInput | number;
    team_b_score?: IntFieldUpdateOperationsInput | number;
    match_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TournamentUpsertWithoutMatch_eventsInput = {
    update: XOR<
      TournamentUpdateWithoutMatch_eventsInput,
      TournamentUncheckedUpdateWithoutMatch_eventsInput
    >;
    create: XOR<
      TournamentCreateWithoutMatch_eventsInput,
      TournamentUncheckedCreateWithoutMatch_eventsInput
    >;
    where?: TournamentWhereInput;
  };

  export type TournamentUpdateToOneWithWhereWithoutMatch_eventsInput = {
    where?: TournamentWhereInput;
    data: XOR<
      TournamentUpdateWithoutMatch_eventsInput,
      TournamentUncheckedUpdateWithoutMatch_eventsInput
    >;
  };

  export type TournamentUpdateWithoutMatch_eventsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    rules?: NullableStringFieldUpdateOperationsInput | string | null;
    format?:
      | EnumTournamentFormatFieldUpdateOperationsInput
      | $Enums.TournamentFormat;
    status?:
      | EnumTournamentStatusFieldUpdateOperationsInput
      | $Enums.TournamentStatus;
    points_win?: IntFieldUpdateOperationsInput | number;
    points_draw?: IntFieldUpdateOperationsInput | number;
    points_loss?: IntFieldUpdateOperationsInput | number;
    playoff_teams?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organizer?: OrganizerUpdateOneRequiredWithoutTournamentsNestedInput;
    teams?: TeamUpdateManyWithoutTournamentNestedInput;
    matches?: MatchUpdateManyWithoutTournamentNestedInput;
    standings?: StandingsUpdateManyWithoutTournamentNestedInput;
  };

  export type TournamentUncheckedUpdateWithoutMatch_eventsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    rules?: NullableStringFieldUpdateOperationsInput | string | null;
    format?:
      | EnumTournamentFormatFieldUpdateOperationsInput
      | $Enums.TournamentFormat;
    status?:
      | EnumTournamentStatusFieldUpdateOperationsInput
      | $Enums.TournamentStatus;
    points_win?: IntFieldUpdateOperationsInput | number;
    points_draw?: IntFieldUpdateOperationsInput | number;
    points_loss?: IntFieldUpdateOperationsInput | number;
    playoff_teams?: NullableIntFieldUpdateOperationsInput | number | null;
    organizer_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    teams?: TeamUncheckedUpdateManyWithoutTournamentNestedInput;
    matches?: MatchUncheckedUpdateManyWithoutTournamentNestedInput;
    standings?: StandingsUncheckedUpdateManyWithoutTournamentNestedInput;
  };

  export type TeamUpsertWithoutMatch_eventsInput = {
    update: XOR<
      TeamUpdateWithoutMatch_eventsInput,
      TeamUncheckedUpdateWithoutMatch_eventsInput
    >;
    create: XOR<
      TeamCreateWithoutMatch_eventsInput,
      TeamUncheckedCreateWithoutMatch_eventsInput
    >;
    where?: TeamWhereInput;
  };

  export type TeamUpdateToOneWithWhereWithoutMatch_eventsInput = {
    where?: TeamWhereInput;
    data: XOR<
      TeamUpdateWithoutMatch_eventsInput,
      TeamUncheckedUpdateWithoutMatch_eventsInput
    >;
  };

  export type TeamUpdateWithoutMatch_eventsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: TournamentUpdateOneRequiredWithoutTeamsNestedInput;
    standings?: StandingsUpdateManyWithoutTeamNestedInput;
    matches_as_team_a?: MatchUpdateManyWithoutTeam_aNestedInput;
    matches_as_team_b?: MatchUpdateManyWithoutTeam_bNestedInput;
  };

  export type TeamUncheckedUpdateWithoutMatch_eventsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null;
    tournament_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    standings?: StandingsUncheckedUpdateManyWithoutTeamNestedInput;
    matches_as_team_a?: MatchUncheckedUpdateManyWithoutTeam_aNestedInput;
    matches_as_team_b?: MatchUncheckedUpdateManyWithoutTeam_bNestedInput;
  };

  export type TournamentCreateManyOrganizerInput = {
    id?: string;
    name: string;
    description?: string | null;
    rules?: string | null;
    format: $Enums.TournamentFormat;
    status?: $Enums.TournamentStatus;
    points_win?: number;
    points_draw?: number;
    points_loss?: number;
    playoff_teams?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type TournamentUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    rules?: NullableStringFieldUpdateOperationsInput | string | null;
    format?:
      | EnumTournamentFormatFieldUpdateOperationsInput
      | $Enums.TournamentFormat;
    status?:
      | EnumTournamentStatusFieldUpdateOperationsInput
      | $Enums.TournamentStatus;
    points_win?: IntFieldUpdateOperationsInput | number;
    points_draw?: IntFieldUpdateOperationsInput | number;
    points_loss?: IntFieldUpdateOperationsInput | number;
    playoff_teams?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    teams?: TeamUpdateManyWithoutTournamentNestedInput;
    matches?: MatchUpdateManyWithoutTournamentNestedInput;
    standings?: StandingsUpdateManyWithoutTournamentNestedInput;
    match_events?: MatchEventUpdateManyWithoutTournamentNestedInput;
  };

  export type TournamentUncheckedUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    rules?: NullableStringFieldUpdateOperationsInput | string | null;
    format?:
      | EnumTournamentFormatFieldUpdateOperationsInput
      | $Enums.TournamentFormat;
    status?:
      | EnumTournamentStatusFieldUpdateOperationsInput
      | $Enums.TournamentStatus;
    points_win?: IntFieldUpdateOperationsInput | number;
    points_draw?: IntFieldUpdateOperationsInput | number;
    points_loss?: IntFieldUpdateOperationsInput | number;
    playoff_teams?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    teams?: TeamUncheckedUpdateManyWithoutTournamentNestedInput;
    matches?: MatchUncheckedUpdateManyWithoutTournamentNestedInput;
    standings?: StandingsUncheckedUpdateManyWithoutTournamentNestedInput;
    match_events?: MatchEventUncheckedUpdateManyWithoutTournamentNestedInput;
  };

  export type TournamentUncheckedUpdateManyWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    rules?: NullableStringFieldUpdateOperationsInput | string | null;
    format?:
      | EnumTournamentFormatFieldUpdateOperationsInput
      | $Enums.TournamentFormat;
    status?:
      | EnumTournamentStatusFieldUpdateOperationsInput
      | $Enums.TournamentStatus;
    points_win?: IntFieldUpdateOperationsInput | number;
    points_draw?: IntFieldUpdateOperationsInput | number;
    points_loss?: IntFieldUpdateOperationsInput | number;
    playoff_teams?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TeamCreateManyTournamentInput = {
    id?: string;
    name: string;
    logo_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type MatchCreateManyTournamentInput = {
    id?: string;
    team_a_id: string;
    team_b_id: string;
    team_a_score?: number;
    team_b_score?: number;
    match_date: Date | string;
    status?: $Enums.MatchStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type StandingsCreateManyTournamentInput = {
    id?: string;
    team_id: string;
    played?: number;
    wins?: number;
    draws?: number;
    losses?: number;
    goals_for?: number;
    goals_against?: number;
    goal_difference?: number;
    points?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type MatchEventCreateManyTournamentInput = {
    id?: string;
    match_id: string;
    team_id: string;
    type: $Enums.EventType;
    player_name: string;
    created_at?: Date | string;
  };

  export type TeamUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    standings?: StandingsUpdateManyWithoutTeamNestedInput;
    match_events?: MatchEventUpdateManyWithoutTeamNestedInput;
    matches_as_team_a?: MatchUpdateManyWithoutTeam_aNestedInput;
    matches_as_team_b?: MatchUpdateManyWithoutTeam_bNestedInput;
  };

  export type TeamUncheckedUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    standings?: StandingsUncheckedUpdateManyWithoutTeamNestedInput;
    match_events?: MatchEventUncheckedUpdateManyWithoutTeamNestedInput;
    matches_as_team_a?: MatchUncheckedUpdateManyWithoutTeam_aNestedInput;
    matches_as_team_b?: MatchUncheckedUpdateManyWithoutTeam_bNestedInput;
  };

  export type TeamUncheckedUpdateManyWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MatchUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    team_a_score?: IntFieldUpdateOperationsInput | number;
    team_b_score?: IntFieldUpdateOperationsInput | number;
    match_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    team_a?: TeamUpdateOneRequiredWithoutMatches_as_team_aNestedInput;
    team_b?: TeamUpdateOneRequiredWithoutMatches_as_team_bNestedInput;
    events?: MatchEventUpdateManyWithoutMatchNestedInput;
  };

  export type MatchUncheckedUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    team_a_id?: StringFieldUpdateOperationsInput | string;
    team_b_id?: StringFieldUpdateOperationsInput | string;
    team_a_score?: IntFieldUpdateOperationsInput | number;
    team_b_score?: IntFieldUpdateOperationsInput | number;
    match_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    events?: MatchEventUncheckedUpdateManyWithoutMatchNestedInput;
  };

  export type MatchUncheckedUpdateManyWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    team_a_id?: StringFieldUpdateOperationsInput | string;
    team_b_id?: StringFieldUpdateOperationsInput | string;
    team_a_score?: IntFieldUpdateOperationsInput | number;
    team_b_score?: IntFieldUpdateOperationsInput | number;
    match_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StandingsUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    played?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    draws?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    goals_for?: IntFieldUpdateOperationsInput | number;
    goals_against?: IntFieldUpdateOperationsInput | number;
    goal_difference?: IntFieldUpdateOperationsInput | number;
    points?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    team?: TeamUpdateOneRequiredWithoutStandingsNestedInput;
  };

  export type StandingsUncheckedUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    team_id?: StringFieldUpdateOperationsInput | string;
    played?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    draws?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    goals_for?: IntFieldUpdateOperationsInput | number;
    goals_against?: IntFieldUpdateOperationsInput | number;
    goal_difference?: IntFieldUpdateOperationsInput | number;
    points?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StandingsUncheckedUpdateManyWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    team_id?: StringFieldUpdateOperationsInput | string;
    played?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    draws?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    goals_for?: IntFieldUpdateOperationsInput | number;
    goals_against?: IntFieldUpdateOperationsInput | number;
    goal_difference?: IntFieldUpdateOperationsInput | number;
    points?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MatchEventUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    player_name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    match?: MatchUpdateOneRequiredWithoutEventsNestedInput;
    team?: TeamUpdateOneRequiredWithoutMatch_eventsNestedInput;
  };

  export type MatchEventUncheckedUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    match_id?: StringFieldUpdateOperationsInput | string;
    team_id?: StringFieldUpdateOperationsInput | string;
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    player_name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MatchEventUncheckedUpdateManyWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    match_id?: StringFieldUpdateOperationsInput | string;
    team_id?: StringFieldUpdateOperationsInput | string;
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    player_name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StandingsCreateManyTeamInput = {
    id?: string;
    tournament_id: string;
    played?: number;
    wins?: number;
    draws?: number;
    losses?: number;
    goals_for?: number;
    goals_against?: number;
    goal_difference?: number;
    points?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type MatchEventCreateManyTeamInput = {
    id?: string;
    match_id: string;
    tournament_id: string;
    type: $Enums.EventType;
    player_name: string;
    created_at?: Date | string;
  };

  export type MatchCreateManyTeam_aInput = {
    id?: string;
    tournament_id: string;
    team_b_id: string;
    team_a_score?: number;
    team_b_score?: number;
    match_date: Date | string;
    status?: $Enums.MatchStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type MatchCreateManyTeam_bInput = {
    id?: string;
    tournament_id: string;
    team_a_id: string;
    team_a_score?: number;
    team_b_score?: number;
    match_date: Date | string;
    status?: $Enums.MatchStatus;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type StandingsUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    played?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    draws?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    goals_for?: IntFieldUpdateOperationsInput | number;
    goals_against?: IntFieldUpdateOperationsInput | number;
    goal_difference?: IntFieldUpdateOperationsInput | number;
    points?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: TournamentUpdateOneRequiredWithoutStandingsNestedInput;
  };

  export type StandingsUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tournament_id?: StringFieldUpdateOperationsInput | string;
    played?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    draws?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    goals_for?: IntFieldUpdateOperationsInput | number;
    goals_against?: IntFieldUpdateOperationsInput | number;
    goal_difference?: IntFieldUpdateOperationsInput | number;
    points?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StandingsUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tournament_id?: StringFieldUpdateOperationsInput | string;
    played?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    draws?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    goals_for?: IntFieldUpdateOperationsInput | number;
    goals_against?: IntFieldUpdateOperationsInput | number;
    goal_difference?: IntFieldUpdateOperationsInput | number;
    points?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MatchEventUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    player_name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    match?: MatchUpdateOneRequiredWithoutEventsNestedInput;
    tournament?: TournamentUpdateOneRequiredWithoutMatch_eventsNestedInput;
  };

  export type MatchEventUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    match_id?: StringFieldUpdateOperationsInput | string;
    tournament_id?: StringFieldUpdateOperationsInput | string;
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    player_name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MatchEventUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    match_id?: StringFieldUpdateOperationsInput | string;
    tournament_id?: StringFieldUpdateOperationsInput | string;
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    player_name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MatchUpdateWithoutTeam_aInput = {
    id?: StringFieldUpdateOperationsInput | string;
    team_a_score?: IntFieldUpdateOperationsInput | number;
    team_b_score?: IntFieldUpdateOperationsInput | number;
    match_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: TournamentUpdateOneRequiredWithoutMatchesNestedInput;
    team_b?: TeamUpdateOneRequiredWithoutMatches_as_team_bNestedInput;
    events?: MatchEventUpdateManyWithoutMatchNestedInput;
  };

  export type MatchUncheckedUpdateWithoutTeam_aInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tournament_id?: StringFieldUpdateOperationsInput | string;
    team_b_id?: StringFieldUpdateOperationsInput | string;
    team_a_score?: IntFieldUpdateOperationsInput | number;
    team_b_score?: IntFieldUpdateOperationsInput | number;
    match_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    events?: MatchEventUncheckedUpdateManyWithoutMatchNestedInput;
  };

  export type MatchUncheckedUpdateManyWithoutTeam_aInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tournament_id?: StringFieldUpdateOperationsInput | string;
    team_b_id?: StringFieldUpdateOperationsInput | string;
    team_a_score?: IntFieldUpdateOperationsInput | number;
    team_b_score?: IntFieldUpdateOperationsInput | number;
    match_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MatchUpdateWithoutTeam_bInput = {
    id?: StringFieldUpdateOperationsInput | string;
    team_a_score?: IntFieldUpdateOperationsInput | number;
    team_b_score?: IntFieldUpdateOperationsInput | number;
    match_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: TournamentUpdateOneRequiredWithoutMatchesNestedInput;
    team_a?: TeamUpdateOneRequiredWithoutMatches_as_team_aNestedInput;
    events?: MatchEventUpdateManyWithoutMatchNestedInput;
  };

  export type MatchUncheckedUpdateWithoutTeam_bInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tournament_id?: StringFieldUpdateOperationsInput | string;
    team_a_id?: StringFieldUpdateOperationsInput | string;
    team_a_score?: IntFieldUpdateOperationsInput | number;
    team_b_score?: IntFieldUpdateOperationsInput | number;
    match_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    events?: MatchEventUncheckedUpdateManyWithoutMatchNestedInput;
  };

  export type MatchUncheckedUpdateManyWithoutTeam_bInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tournament_id?: StringFieldUpdateOperationsInput | string;
    team_a_id?: StringFieldUpdateOperationsInput | string;
    team_a_score?: IntFieldUpdateOperationsInput | number;
    team_b_score?: IntFieldUpdateOperationsInput | number;
    match_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MatchEventCreateManyMatchInput = {
    id?: string;
    tournament_id: string;
    team_id: string;
    type: $Enums.EventType;
    player_name: string;
    created_at?: Date | string;
  };

  export type MatchEventUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    player_name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: TournamentUpdateOneRequiredWithoutMatch_eventsNestedInput;
    team?: TeamUpdateOneRequiredWithoutMatch_eventsNestedInput;
  };

  export type MatchEventUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tournament_id?: StringFieldUpdateOperationsInput | string;
    team_id?: StringFieldUpdateOperationsInput | string;
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    player_name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MatchEventUncheckedUpdateManyWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tournament_id?: StringFieldUpdateOperationsInput | string;
    team_id?: StringFieldUpdateOperationsInput | string;
    type?: EnumEventTypeFieldUpdateOperationsInput | $Enums.EventType;
    player_name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
