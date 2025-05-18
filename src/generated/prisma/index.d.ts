
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Trip
 * 
 */
export type Trip = $Result.DefaultSelection<Prisma.$TripPayload>
/**
 * Model Destination
 * 
 */
export type Destination = $Result.DefaultSelection<Prisma.$DestinationPayload>
/**
 * Model TravelMode
 * 
 */
export type TravelMode = $Result.DefaultSelection<Prisma.$TravelModePayload>
/**
 * Model TripPreference
 * 
 */
export type TripPreference = $Result.DefaultSelection<Prisma.$TripPreferencePayload>
/**
 * Model Itinerary
 * 
 */
export type Itinerary = $Result.DefaultSelection<Prisma.$ItineraryPayload>
/**
 * Model DailyPlan
 * 
 */
export type DailyPlan = $Result.DefaultSelection<Prisma.$DailyPlanPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model Meal
 * 
 */
export type Meal = $Result.DefaultSelection<Prisma.$MealPayload>
/**
 * Model Accommodation
 * 
 */
export type Accommodation = $Result.DefaultSelection<Prisma.$AccommodationPayload>
/**
 * Model Transportation
 * 
 */
export type Transportation = $Result.DefaultSelection<Prisma.$TransportationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trip`: Exposes CRUD operations for the **Trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.TripDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.destination`: Exposes CRUD operations for the **Destination** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Destinations
    * const destinations = await prisma.destination.findMany()
    * ```
    */
  get destination(): Prisma.DestinationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.travelMode`: Exposes CRUD operations for the **TravelMode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TravelModes
    * const travelModes = await prisma.travelMode.findMany()
    * ```
    */
  get travelMode(): Prisma.TravelModeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tripPreference`: Exposes CRUD operations for the **TripPreference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripPreferences
    * const tripPreferences = await prisma.tripPreference.findMany()
    * ```
    */
  get tripPreference(): Prisma.TripPreferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itinerary`: Exposes CRUD operations for the **Itinerary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Itineraries
    * const itineraries = await prisma.itinerary.findMany()
    * ```
    */
  get itinerary(): Prisma.ItineraryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyPlan`: Exposes CRUD operations for the **DailyPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyPlans
    * const dailyPlans = await prisma.dailyPlan.findMany()
    * ```
    */
  get dailyPlan(): Prisma.DailyPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meal`: Exposes CRUD operations for the **Meal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meals
    * const meals = await prisma.meal.findMany()
    * ```
    */
  get meal(): Prisma.MealDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accommodation`: Exposes CRUD operations for the **Accommodation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accommodations
    * const accommodations = await prisma.accommodation.findMany()
    * ```
    */
  get accommodation(): Prisma.AccommodationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transportation`: Exposes CRUD operations for the **Transportation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transportation
    * const transportation = await prisma.transportation.findMany()
    * ```
    */
  get transportation(): Prisma.TransportationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Trip: 'Trip',
    Destination: 'Destination',
    TravelMode: 'TravelMode',
    TripPreference: 'TripPreference',
    Itinerary: 'Itinerary',
    DailyPlan: 'DailyPlan',
    Activity: 'Activity',
    Meal: 'Meal',
    Accommodation: 'Accommodation',
    Transportation: 'Transportation'
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
      modelProps: "user" | "trip" | "destination" | "travelMode" | "tripPreference" | "itinerary" | "dailyPlan" | "activity" | "meal" | "accommodation" | "transportation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Trip: {
        payload: Prisma.$TripPayload<ExtArgs>
        fields: Prisma.TripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findFirst: {
            args: Prisma.TripFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findMany: {
            args: Prisma.TripFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          create: {
            args: Prisma.TripCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          createMany: {
            args: Prisma.TripCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          delete: {
            args: Prisma.TripDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          update: {
            args: Prisma.TripUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          deleteMany: {
            args: Prisma.TripDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          upsert: {
            args: Prisma.TripUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          aggregate: {
            args: Prisma.TripAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrip>
          }
          groupBy: {
            args: Prisma.TripGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripCountArgs<ExtArgs>
            result: $Utils.Optional<TripCountAggregateOutputType> | number
          }
        }
      }
      Destination: {
        payload: Prisma.$DestinationPayload<ExtArgs>
        fields: Prisma.DestinationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DestinationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DestinationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          findFirst: {
            args: Prisma.DestinationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DestinationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          findMany: {
            args: Prisma.DestinationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          create: {
            args: Prisma.DestinationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          createMany: {
            args: Prisma.DestinationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DestinationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          delete: {
            args: Prisma.DestinationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          update: {
            args: Prisma.DestinationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          deleteMany: {
            args: Prisma.DestinationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DestinationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DestinationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          upsert: {
            args: Prisma.DestinationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          aggregate: {
            args: Prisma.DestinationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDestination>
          }
          groupBy: {
            args: Prisma.DestinationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DestinationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DestinationCountArgs<ExtArgs>
            result: $Utils.Optional<DestinationCountAggregateOutputType> | number
          }
        }
      }
      TravelMode: {
        payload: Prisma.$TravelModePayload<ExtArgs>
        fields: Prisma.TravelModeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TravelModeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelModePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TravelModeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelModePayload>
          }
          findFirst: {
            args: Prisma.TravelModeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelModePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TravelModeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelModePayload>
          }
          findMany: {
            args: Prisma.TravelModeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelModePayload>[]
          }
          create: {
            args: Prisma.TravelModeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelModePayload>
          }
          createMany: {
            args: Prisma.TravelModeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TravelModeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelModePayload>[]
          }
          delete: {
            args: Prisma.TravelModeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelModePayload>
          }
          update: {
            args: Prisma.TravelModeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelModePayload>
          }
          deleteMany: {
            args: Prisma.TravelModeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TravelModeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TravelModeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelModePayload>[]
          }
          upsert: {
            args: Prisma.TravelModeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelModePayload>
          }
          aggregate: {
            args: Prisma.TravelModeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTravelMode>
          }
          groupBy: {
            args: Prisma.TravelModeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TravelModeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TravelModeCountArgs<ExtArgs>
            result: $Utils.Optional<TravelModeCountAggregateOutputType> | number
          }
        }
      }
      TripPreference: {
        payload: Prisma.$TripPreferencePayload<ExtArgs>
        fields: Prisma.TripPreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripPreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripPreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPreferencePayload>
          }
          findFirst: {
            args: Prisma.TripPreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripPreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPreferencePayload>
          }
          findMany: {
            args: Prisma.TripPreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPreferencePayload>[]
          }
          create: {
            args: Prisma.TripPreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPreferencePayload>
          }
          createMany: {
            args: Prisma.TripPreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripPreferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPreferencePayload>[]
          }
          delete: {
            args: Prisma.TripPreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPreferencePayload>
          }
          update: {
            args: Prisma.TripPreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPreferencePayload>
          }
          deleteMany: {
            args: Prisma.TripPreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripPreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripPreferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPreferencePayload>[]
          }
          upsert: {
            args: Prisma.TripPreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPreferencePayload>
          }
          aggregate: {
            args: Prisma.TripPreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripPreference>
          }
          groupBy: {
            args: Prisma.TripPreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripPreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripPreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<TripPreferenceCountAggregateOutputType> | number
          }
        }
      }
      Itinerary: {
        payload: Prisma.$ItineraryPayload<ExtArgs>
        fields: Prisma.ItineraryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItineraryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItineraryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload>
          }
          findFirst: {
            args: Prisma.ItineraryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItineraryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload>
          }
          findMany: {
            args: Prisma.ItineraryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload>[]
          }
          create: {
            args: Prisma.ItineraryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload>
          }
          createMany: {
            args: Prisma.ItineraryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItineraryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload>[]
          }
          delete: {
            args: Prisma.ItineraryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload>
          }
          update: {
            args: Prisma.ItineraryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload>
          }
          deleteMany: {
            args: Prisma.ItineraryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItineraryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItineraryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload>[]
          }
          upsert: {
            args: Prisma.ItineraryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItineraryPayload>
          }
          aggregate: {
            args: Prisma.ItineraryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItinerary>
          }
          groupBy: {
            args: Prisma.ItineraryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItineraryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItineraryCountArgs<ExtArgs>
            result: $Utils.Optional<ItineraryCountAggregateOutputType> | number
          }
        }
      }
      DailyPlan: {
        payload: Prisma.$DailyPlanPayload<ExtArgs>
        fields: Prisma.DailyPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanPayload>
          }
          findFirst: {
            args: Prisma.DailyPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanPayload>
          }
          findMany: {
            args: Prisma.DailyPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanPayload>[]
          }
          create: {
            args: Prisma.DailyPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanPayload>
          }
          createMany: {
            args: Prisma.DailyPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanPayload>[]
          }
          delete: {
            args: Prisma.DailyPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanPayload>
          }
          update: {
            args: Prisma.DailyPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanPayload>
          }
          deleteMany: {
            args: Prisma.DailyPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanPayload>[]
          }
          upsert: {
            args: Prisma.DailyPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPlanPayload>
          }
          aggregate: {
            args: Prisma.DailyPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyPlan>
          }
          groupBy: {
            args: Prisma.DailyPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyPlanCountArgs<ExtArgs>
            result: $Utils.Optional<DailyPlanCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      Meal: {
        payload: Prisma.$MealPayload<ExtArgs>
        fields: Prisma.MealFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findFirst: {
            args: Prisma.MealFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findMany: {
            args: Prisma.MealFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          create: {
            args: Prisma.MealCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          createMany: {
            args: Prisma.MealCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          delete: {
            args: Prisma.MealDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          update: {
            args: Prisma.MealUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          deleteMany: {
            args: Prisma.MealDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          upsert: {
            args: Prisma.MealUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          aggregate: {
            args: Prisma.MealAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeal>
          }
          groupBy: {
            args: Prisma.MealGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealCountArgs<ExtArgs>
            result: $Utils.Optional<MealCountAggregateOutputType> | number
          }
        }
      }
      Accommodation: {
        payload: Prisma.$AccommodationPayload<ExtArgs>
        fields: Prisma.AccommodationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccommodationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccommodationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload>
          }
          findFirst: {
            args: Prisma.AccommodationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccommodationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload>
          }
          findMany: {
            args: Prisma.AccommodationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload>[]
          }
          create: {
            args: Prisma.AccommodationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload>
          }
          createMany: {
            args: Prisma.AccommodationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccommodationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload>[]
          }
          delete: {
            args: Prisma.AccommodationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload>
          }
          update: {
            args: Prisma.AccommodationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload>
          }
          deleteMany: {
            args: Prisma.AccommodationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccommodationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccommodationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload>[]
          }
          upsert: {
            args: Prisma.AccommodationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload>
          }
          aggregate: {
            args: Prisma.AccommodationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccommodation>
          }
          groupBy: {
            args: Prisma.AccommodationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccommodationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccommodationCountArgs<ExtArgs>
            result: $Utils.Optional<AccommodationCountAggregateOutputType> | number
          }
        }
      }
      Transportation: {
        payload: Prisma.$TransportationPayload<ExtArgs>
        fields: Prisma.TransportationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransportationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransportationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportationPayload>
          }
          findFirst: {
            args: Prisma.TransportationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransportationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportationPayload>
          }
          findMany: {
            args: Prisma.TransportationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportationPayload>[]
          }
          create: {
            args: Prisma.TransportationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportationPayload>
          }
          createMany: {
            args: Prisma.TransportationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransportationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportationPayload>[]
          }
          delete: {
            args: Prisma.TransportationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportationPayload>
          }
          update: {
            args: Prisma.TransportationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportationPayload>
          }
          deleteMany: {
            args: Prisma.TransportationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransportationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransportationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportationPayload>[]
          }
          upsert: {
            args: Prisma.TransportationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportationPayload>
          }
          aggregate: {
            args: Prisma.TransportationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransportation>
          }
          groupBy: {
            args: Prisma.TransportationGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransportationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransportationCountArgs<ExtArgs>
            result: $Utils.Optional<TransportationCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    trip?: TripOmit
    destination?: DestinationOmit
    travelMode?: TravelModeOmit
    tripPreference?: TripPreferenceOmit
    itinerary?: ItineraryOmit
    dailyPlan?: DailyPlanOmit
    activity?: ActivityOmit
    meal?: MealOmit
    accommodation?: AccommodationOmit
    transportation?: TransportationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    trips: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | UserCountOutputTypeCountTripsArgs
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
  export type UserCountOutputTypeCountTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }


  /**
   * Count Type TripCountOutputType
   */

  export type TripCountOutputType = {
    destinations: number
    travelModes: number
  }

  export type TripCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinations?: boolean | TripCountOutputTypeCountDestinationsArgs
    travelModes?: boolean | TripCountOutputTypeCountTravelModesArgs
  }

  // Custom InputTypes
  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCountOutputType
     */
    select?: TripCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountDestinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountTravelModesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelModeWhereInput
  }


  /**
   * Count Type DestinationCountOutputType
   */

  export type DestinationCountOutputType = {
    dailyPlans: number
  }

  export type DestinationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyPlans?: boolean | DestinationCountOutputTypeCountDailyPlansArgs
  }

  // Custom InputTypes
  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationCountOutputType
     */
    select?: DestinationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeCountDailyPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyPlanWhereInput
  }


  /**
   * Count Type ItineraryCountOutputType
   */

  export type ItineraryCountOutputType = {
    dailyPlans: number
  }

  export type ItineraryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyPlans?: boolean | ItineraryCountOutputTypeCountDailyPlansArgs
  }

  // Custom InputTypes
  /**
   * ItineraryCountOutputType without action
   */
  export type ItineraryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItineraryCountOutputType
     */
    select?: ItineraryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItineraryCountOutputType without action
   */
  export type ItineraryCountOutputTypeCountDailyPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyPlanWhereInput
  }


  /**
   * Count Type DailyPlanCountOutputType
   */

  export type DailyPlanCountOutputType = {
    activities: number
    meals: number
  }

  export type DailyPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | DailyPlanCountOutputTypeCountActivitiesArgs
    meals?: boolean | DailyPlanCountOutputTypeCountMealsArgs
  }

  // Custom InputTypes
  /**
   * DailyPlanCountOutputType without action
   */
  export type DailyPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlanCountOutputType
     */
    select?: DailyPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DailyPlanCountOutputType without action
   */
  export type DailyPlanCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * DailyPlanCountOutputType without action
   */
  export type DailyPlanCountOutputTypeCountMealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
  }


  /**
   * Models
   */

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
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
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
    email: string
    name: string | null
    password: string
    createdAt: Date
    updatedAt: Date
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
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trips?: boolean | User$tripsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | User$tripsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      trips: Prisma.$TripPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      password: string
      createdAt: Date
      updatedAt: Date
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
    trips<T extends User$tripsArgs<ExtArgs> = {}>(args?: Subset<T, User$tripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
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
   * User.trips
   */
  export type User$tripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
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
   * Model Trip
   */

  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripAvgAggregateOutputType = {
    totalBudget: number | null
  }

  export type TripSumAggregateOutputType = {
    totalBudget: number | null
  }

  export type TripMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    totalBudget: number | null
    currency: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    totalBudget: number | null
    currency: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    totalBudget: number
    currency: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TripAvgAggregateInputType = {
    totalBudget?: true
  }

  export type TripSumAggregateInputType = {
    totalBudget?: true
  }

  export type TripMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    totalBudget?: true
    currency?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    totalBudget?: true
    currency?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    totalBudget?: true
    currency?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trip to aggregate.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type TripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
    orderBy?: TripOrderByWithAggregationInput | TripOrderByWithAggregationInput[]
    by: TripScalarFieldEnum[] | TripScalarFieldEnum
    having?: TripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _avg?: TripAvgAggregateInputType
    _sum?: TripSumAggregateInputType
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }

  export type TripGroupByOutputType = {
    id: string
    userId: string
    title: string
    totalBudget: number
    currency: string
    startDate: Date
    endDate: Date
    createdAt: Date
    updatedAt: Date
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends TripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type TripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    totalBudget?: boolean
    currency?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    destinations?: boolean | Trip$destinationsArgs<ExtArgs>
    travelModes?: boolean | Trip$travelModesArgs<ExtArgs>
    preferences?: boolean | Trip$preferencesArgs<ExtArgs>
    itinerary?: boolean | Trip$itineraryArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    totalBudget?: boolean
    currency?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    totalBudget?: boolean
    currency?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    totalBudget?: boolean
    currency?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TripOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "totalBudget" | "currency" | "startDate" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["trip"]>
  export type TripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    destinations?: boolean | Trip$destinationsArgs<ExtArgs>
    travelModes?: boolean | Trip$travelModesArgs<ExtArgs>
    preferences?: boolean | Trip$preferencesArgs<ExtArgs>
    itinerary?: boolean | Trip$itineraryArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TripIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TripIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trip"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      destinations: Prisma.$DestinationPayload<ExtArgs>[]
      travelModes: Prisma.$TravelModePayload<ExtArgs>[]
      preferences: Prisma.$TripPreferencePayload<ExtArgs> | null
      itinerary: Prisma.$ItineraryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      totalBudget: number
      currency: string
      startDate: Date
      endDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trip"]>
    composites: {}
  }

  type TripGetPayload<S extends boolean | null | undefined | TripDefaultArgs> = $Result.GetResult<Prisma.$TripPayload, S>

  type TripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface TripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trip'], meta: { name: 'Trip' } }
    /**
     * Find zero or one Trip that matches the filter.
     * @param {TripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripFindUniqueArgs>(args: SelectSubset<T, TripFindUniqueArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripFindUniqueOrThrowArgs>(args: SelectSubset<T, TripFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripFindFirstArgs>(args?: SelectSubset<T, TripFindFirstArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripFindFirstOrThrowArgs>(args?: SelectSubset<T, TripFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripFindManyArgs>(args?: SelectSubset<T, TripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trip.
     * @param {TripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
     */
    create<T extends TripCreateArgs>(args: SelectSubset<T, TripCreateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trips.
     * @param {TripCreateManyArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripCreateManyArgs>(args?: SelectSubset<T, TripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trips and returns the data saved in the database.
     * @param {TripCreateManyAndReturnArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripCreateManyAndReturnArgs>(args?: SelectSubset<T, TripCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trip.
     * @param {TripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
     */
    delete<T extends TripDeleteArgs>(args: SelectSubset<T, TripDeleteArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trip.
     * @param {TripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripUpdateArgs>(args: SelectSubset<T, TripUpdateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trips.
     * @param {TripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripDeleteManyArgs>(args?: SelectSubset<T, TripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripUpdateManyArgs>(args: SelectSubset<T, TripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips and returns the data updated in the database.
     * @param {TripUpdateManyAndReturnArgs} args - Arguments to update many Trips.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.updateManyAndReturn({
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
    updateManyAndReturn<T extends TripUpdateManyAndReturnArgs>(args: SelectSubset<T, TripUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trip.
     * @param {TripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
     */
    upsert<T extends TripUpsertArgs>(args: SelectSubset<T, TripUpsertArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends TripCountArgs>(
      args?: Subset<T, TripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupByArgs} args - Group by arguments.
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
      T extends TripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trip model
   */
  readonly fields: TripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    destinations<T extends Trip$destinationsArgs<ExtArgs> = {}>(args?: Subset<T, Trip$destinationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    travelModes<T extends Trip$travelModesArgs<ExtArgs> = {}>(args?: Subset<T, Trip$travelModesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelModePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preferences<T extends Trip$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, Trip$preferencesArgs<ExtArgs>>): Prisma__TripPreferenceClient<$Result.GetResult<Prisma.$TripPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    itinerary<T extends Trip$itineraryArgs<ExtArgs> = {}>(args?: Subset<T, Trip$itineraryArgs<ExtArgs>>): Prisma__ItineraryClient<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Trip model
   */
  interface TripFieldRefs {
    readonly id: FieldRef<"Trip", 'String'>
    readonly userId: FieldRef<"Trip", 'String'>
    readonly title: FieldRef<"Trip", 'String'>
    readonly totalBudget: FieldRef<"Trip", 'Float'>
    readonly currency: FieldRef<"Trip", 'String'>
    readonly startDate: FieldRef<"Trip", 'DateTime'>
    readonly endDate: FieldRef<"Trip", 'DateTime'>
    readonly createdAt: FieldRef<"Trip", 'DateTime'>
    readonly updatedAt: FieldRef<"Trip", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trip findUnique
   */
  export type TripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findUniqueOrThrow
   */
  export type TripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findFirst
   */
  export type TripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findFirstOrThrow
   */
  export type TripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findMany
   */
  export type TripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trips to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip create
   */
  export type TripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to create a Trip.
     */
    data: XOR<TripCreateInput, TripUncheckedCreateInput>
  }

  /**
   * Trip createMany
   */
  export type TripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
  }

  /**
   * Trip createManyAndReturn
   */
  export type TripCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trip update
   */
  export type TripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to update a Trip.
     */
    data: XOR<TripUpdateInput, TripUncheckedUpdateInput>
    /**
     * Choose, which Trip to update.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip updateMany
   */
  export type TripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
  }

  /**
   * Trip updateManyAndReturn
   */
  export type TripUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trip upsert
   */
  export type TripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The filter to search for the Trip to update in case it exists.
     */
    where: TripWhereUniqueInput
    /**
     * In case the Trip found by the `where` argument doesn't exist, create a new Trip with this data.
     */
    create: XOR<TripCreateInput, TripUncheckedCreateInput>
    /**
     * In case the Trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripUpdateInput, TripUncheckedUpdateInput>
  }

  /**
   * Trip delete
   */
  export type TripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter which Trip to delete.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip deleteMany
   */
  export type TripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trips to delete
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to delete.
     */
    limit?: number
  }

  /**
   * Trip.destinations
   */
  export type Trip$destinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    where?: DestinationWhereInput
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    cursor?: DestinationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Trip.travelModes
   */
  export type Trip$travelModesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelMode
     */
    select?: TravelModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelMode
     */
    omit?: TravelModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelModeInclude<ExtArgs> | null
    where?: TravelModeWhereInput
    orderBy?: TravelModeOrderByWithRelationInput | TravelModeOrderByWithRelationInput[]
    cursor?: TravelModeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelModeScalarFieldEnum | TravelModeScalarFieldEnum[]
  }

  /**
   * Trip.preferences
   */
  export type Trip$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPreference
     */
    select?: TripPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPreference
     */
    omit?: TripPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPreferenceInclude<ExtArgs> | null
    where?: TripPreferenceWhereInput
  }

  /**
   * Trip.itinerary
   */
  export type Trip$itineraryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Itinerary
     */
    omit?: ItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryInclude<ExtArgs> | null
    where?: ItineraryWhereInput
  }

  /**
   * Trip without action
   */
  export type TripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
  }


  /**
   * Model Destination
   */

  export type AggregateDestination = {
    _count: DestinationCountAggregateOutputType | null
    _avg: DestinationAvgAggregateOutputType | null
    _sum: DestinationSumAggregateOutputType | null
    _min: DestinationMinAggregateOutputType | null
    _max: DestinationMaxAggregateOutputType | null
  }

  export type DestinationAvgAggregateOutputType = {
    duration: number | null
    order: number | null
  }

  export type DestinationSumAggregateOutputType = {
    duration: number | null
    order: number | null
  }

  export type DestinationMinAggregateOutputType = {
    id: string | null
    tripId: string | null
    city: string | null
    duration: number | null
    order: number | null
  }

  export type DestinationMaxAggregateOutputType = {
    id: string | null
    tripId: string | null
    city: string | null
    duration: number | null
    order: number | null
  }

  export type DestinationCountAggregateOutputType = {
    id: number
    tripId: number
    city: number
    duration: number
    order: number
    _all: number
  }


  export type DestinationAvgAggregateInputType = {
    duration?: true
    order?: true
  }

  export type DestinationSumAggregateInputType = {
    duration?: true
    order?: true
  }

  export type DestinationMinAggregateInputType = {
    id?: true
    tripId?: true
    city?: true
    duration?: true
    order?: true
  }

  export type DestinationMaxAggregateInputType = {
    id?: true
    tripId?: true
    city?: true
    duration?: true
    order?: true
  }

  export type DestinationCountAggregateInputType = {
    id?: true
    tripId?: true
    city?: true
    duration?: true
    order?: true
    _all?: true
  }

  export type DestinationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destination to aggregate.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Destinations
    **/
    _count?: true | DestinationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DestinationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DestinationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DestinationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DestinationMaxAggregateInputType
  }

  export type GetDestinationAggregateType<T extends DestinationAggregateArgs> = {
        [P in keyof T & keyof AggregateDestination]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDestination[P]>
      : GetScalarType<T[P], AggregateDestination[P]>
  }




  export type DestinationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationWhereInput
    orderBy?: DestinationOrderByWithAggregationInput | DestinationOrderByWithAggregationInput[]
    by: DestinationScalarFieldEnum[] | DestinationScalarFieldEnum
    having?: DestinationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DestinationCountAggregateInputType | true
    _avg?: DestinationAvgAggregateInputType
    _sum?: DestinationSumAggregateInputType
    _min?: DestinationMinAggregateInputType
    _max?: DestinationMaxAggregateInputType
  }

  export type DestinationGroupByOutputType = {
    id: string
    tripId: string
    city: string
    duration: number
    order: number
    _count: DestinationCountAggregateOutputType | null
    _avg: DestinationAvgAggregateOutputType | null
    _sum: DestinationSumAggregateOutputType | null
    _min: DestinationMinAggregateOutputType | null
    _max: DestinationMaxAggregateOutputType | null
  }

  type GetDestinationGroupByPayload<T extends DestinationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DestinationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DestinationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DestinationGroupByOutputType[P]>
            : GetScalarType<T[P], DestinationGroupByOutputType[P]>
        }
      >
    >


  export type DestinationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    city?: boolean
    duration?: boolean
    order?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    dailyPlans?: boolean | Destination$dailyPlansArgs<ExtArgs>
    _count?: boolean | DestinationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    city?: boolean
    duration?: boolean
    order?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    city?: boolean
    duration?: boolean
    order?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectScalar = {
    id?: boolean
    tripId?: boolean
    city?: boolean
    duration?: boolean
    order?: boolean
  }

  export type DestinationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "city" | "duration" | "order", ExtArgs["result"]["destination"]>
  export type DestinationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    dailyPlans?: boolean | Destination$dailyPlansArgs<ExtArgs>
    _count?: boolean | DestinationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DestinationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type DestinationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $DestinationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Destination"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
      dailyPlans: Prisma.$DailyPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripId: string
      city: string
      duration: number
      order: number
    }, ExtArgs["result"]["destination"]>
    composites: {}
  }

  type DestinationGetPayload<S extends boolean | null | undefined | DestinationDefaultArgs> = $Result.GetResult<Prisma.$DestinationPayload, S>

  type DestinationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DestinationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DestinationCountAggregateInputType | true
    }

  export interface DestinationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Destination'], meta: { name: 'Destination' } }
    /**
     * Find zero or one Destination that matches the filter.
     * @param {DestinationFindUniqueArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DestinationFindUniqueArgs>(args: SelectSubset<T, DestinationFindUniqueArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Destination that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DestinationFindUniqueOrThrowArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DestinationFindUniqueOrThrowArgs>(args: SelectSubset<T, DestinationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destination that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindFirstArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DestinationFindFirstArgs>(args?: SelectSubset<T, DestinationFindFirstArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destination that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindFirstOrThrowArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DestinationFindFirstOrThrowArgs>(args?: SelectSubset<T, DestinationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Destinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Destinations
     * const destinations = await prisma.destination.findMany()
     * 
     * // Get first 10 Destinations
     * const destinations = await prisma.destination.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const destinationWithIdOnly = await prisma.destination.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DestinationFindManyArgs>(args?: SelectSubset<T, DestinationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Destination.
     * @param {DestinationCreateArgs} args - Arguments to create a Destination.
     * @example
     * // Create one Destination
     * const Destination = await prisma.destination.create({
     *   data: {
     *     // ... data to create a Destination
     *   }
     * })
     * 
     */
    create<T extends DestinationCreateArgs>(args: SelectSubset<T, DestinationCreateArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Destinations.
     * @param {DestinationCreateManyArgs} args - Arguments to create many Destinations.
     * @example
     * // Create many Destinations
     * const destination = await prisma.destination.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DestinationCreateManyArgs>(args?: SelectSubset<T, DestinationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Destinations and returns the data saved in the database.
     * @param {DestinationCreateManyAndReturnArgs} args - Arguments to create many Destinations.
     * @example
     * // Create many Destinations
     * const destination = await prisma.destination.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Destinations and only return the `id`
     * const destinationWithIdOnly = await prisma.destination.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DestinationCreateManyAndReturnArgs>(args?: SelectSubset<T, DestinationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Destination.
     * @param {DestinationDeleteArgs} args - Arguments to delete one Destination.
     * @example
     * // Delete one Destination
     * const Destination = await prisma.destination.delete({
     *   where: {
     *     // ... filter to delete one Destination
     *   }
     * })
     * 
     */
    delete<T extends DestinationDeleteArgs>(args: SelectSubset<T, DestinationDeleteArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Destination.
     * @param {DestinationUpdateArgs} args - Arguments to update one Destination.
     * @example
     * // Update one Destination
     * const destination = await prisma.destination.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DestinationUpdateArgs>(args: SelectSubset<T, DestinationUpdateArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Destinations.
     * @param {DestinationDeleteManyArgs} args - Arguments to filter Destinations to delete.
     * @example
     * // Delete a few Destinations
     * const { count } = await prisma.destination.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DestinationDeleteManyArgs>(args?: SelectSubset<T, DestinationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Destinations
     * const destination = await prisma.destination.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DestinationUpdateManyArgs>(args: SelectSubset<T, DestinationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinations and returns the data updated in the database.
     * @param {DestinationUpdateManyAndReturnArgs} args - Arguments to update many Destinations.
     * @example
     * // Update many Destinations
     * const destination = await prisma.destination.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Destinations and only return the `id`
     * const destinationWithIdOnly = await prisma.destination.updateManyAndReturn({
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
    updateManyAndReturn<T extends DestinationUpdateManyAndReturnArgs>(args: SelectSubset<T, DestinationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Destination.
     * @param {DestinationUpsertArgs} args - Arguments to update or create a Destination.
     * @example
     * // Update or create a Destination
     * const destination = await prisma.destination.upsert({
     *   create: {
     *     // ... data to create a Destination
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Destination we want to update
     *   }
     * })
     */
    upsert<T extends DestinationUpsertArgs>(args: SelectSubset<T, DestinationUpsertArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationCountArgs} args - Arguments to filter Destinations to count.
     * @example
     * // Count the number of Destinations
     * const count = await prisma.destination.count({
     *   where: {
     *     // ... the filter for the Destinations we want to count
     *   }
     * })
    **/
    count<T extends DestinationCountArgs>(
      args?: Subset<T, DestinationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DestinationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Destination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DestinationAggregateArgs>(args: Subset<T, DestinationAggregateArgs>): Prisma.PrismaPromise<GetDestinationAggregateType<T>>

    /**
     * Group by Destination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationGroupByArgs} args - Group by arguments.
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
      T extends DestinationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DestinationGroupByArgs['orderBy'] }
        : { orderBy?: DestinationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DestinationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Destination model
   */
  readonly fields: DestinationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Destination.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DestinationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dailyPlans<T extends Destination$dailyPlansArgs<ExtArgs> = {}>(args?: Subset<T, Destination$dailyPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Destination model
   */
  interface DestinationFieldRefs {
    readonly id: FieldRef<"Destination", 'String'>
    readonly tripId: FieldRef<"Destination", 'String'>
    readonly city: FieldRef<"Destination", 'String'>
    readonly duration: FieldRef<"Destination", 'Int'>
    readonly order: FieldRef<"Destination", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Destination findUnique
   */
  export type DestinationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination findUniqueOrThrow
   */
  export type DestinationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination findFirst
   */
  export type DestinationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination findFirstOrThrow
   */
  export type DestinationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination findMany
   */
  export type DestinationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destinations to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination create
   */
  export type DestinationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The data needed to create a Destination.
     */
    data: XOR<DestinationCreateInput, DestinationUncheckedCreateInput>
  }

  /**
   * Destination createMany
   */
  export type DestinationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Destinations.
     */
    data: DestinationCreateManyInput | DestinationCreateManyInput[]
  }

  /**
   * Destination createManyAndReturn
   */
  export type DestinationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * The data used to create many Destinations.
     */
    data: DestinationCreateManyInput | DestinationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Destination update
   */
  export type DestinationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The data needed to update a Destination.
     */
    data: XOR<DestinationUpdateInput, DestinationUncheckedUpdateInput>
    /**
     * Choose, which Destination to update.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination updateMany
   */
  export type DestinationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Destinations.
     */
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyInput>
    /**
     * Filter which Destinations to update
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to update.
     */
    limit?: number
  }

  /**
   * Destination updateManyAndReturn
   */
  export type DestinationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * The data used to update Destinations.
     */
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyInput>
    /**
     * Filter which Destinations to update
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Destination upsert
   */
  export type DestinationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The filter to search for the Destination to update in case it exists.
     */
    where: DestinationWhereUniqueInput
    /**
     * In case the Destination found by the `where` argument doesn't exist, create a new Destination with this data.
     */
    create: XOR<DestinationCreateInput, DestinationUncheckedCreateInput>
    /**
     * In case the Destination was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DestinationUpdateInput, DestinationUncheckedUpdateInput>
  }

  /**
   * Destination delete
   */
  export type DestinationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter which Destination to delete.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination deleteMany
   */
  export type DestinationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destinations to delete
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to delete.
     */
    limit?: number
  }

  /**
   * Destination.dailyPlans
   */
  export type Destination$dailyPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlan
     */
    select?: DailyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlan
     */
    omit?: DailyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanInclude<ExtArgs> | null
    where?: DailyPlanWhereInput
    orderBy?: DailyPlanOrderByWithRelationInput | DailyPlanOrderByWithRelationInput[]
    cursor?: DailyPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyPlanScalarFieldEnum | DailyPlanScalarFieldEnum[]
  }

  /**
   * Destination without action
   */
  export type DestinationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
  }


  /**
   * Model TravelMode
   */

  export type AggregateTravelMode = {
    _count: TravelModeCountAggregateOutputType | null
    _min: TravelModeMinAggregateOutputType | null
    _max: TravelModeMaxAggregateOutputType | null
  }

  export type TravelModeMinAggregateOutputType = {
    id: string | null
    tripId: string | null
    mode: string | null
  }

  export type TravelModeMaxAggregateOutputType = {
    id: string | null
    tripId: string | null
    mode: string | null
  }

  export type TravelModeCountAggregateOutputType = {
    id: number
    tripId: number
    mode: number
    _all: number
  }


  export type TravelModeMinAggregateInputType = {
    id?: true
    tripId?: true
    mode?: true
  }

  export type TravelModeMaxAggregateInputType = {
    id?: true
    tripId?: true
    mode?: true
  }

  export type TravelModeCountAggregateInputType = {
    id?: true
    tripId?: true
    mode?: true
    _all?: true
  }

  export type TravelModeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelMode to aggregate.
     */
    where?: TravelModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelModes to fetch.
     */
    orderBy?: TravelModeOrderByWithRelationInput | TravelModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TravelModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelModes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelModes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TravelModes
    **/
    _count?: true | TravelModeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TravelModeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TravelModeMaxAggregateInputType
  }

  export type GetTravelModeAggregateType<T extends TravelModeAggregateArgs> = {
        [P in keyof T & keyof AggregateTravelMode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTravelMode[P]>
      : GetScalarType<T[P], AggregateTravelMode[P]>
  }




  export type TravelModeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelModeWhereInput
    orderBy?: TravelModeOrderByWithAggregationInput | TravelModeOrderByWithAggregationInput[]
    by: TravelModeScalarFieldEnum[] | TravelModeScalarFieldEnum
    having?: TravelModeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TravelModeCountAggregateInputType | true
    _min?: TravelModeMinAggregateInputType
    _max?: TravelModeMaxAggregateInputType
  }

  export type TravelModeGroupByOutputType = {
    id: string
    tripId: string
    mode: string
    _count: TravelModeCountAggregateOutputType | null
    _min: TravelModeMinAggregateOutputType | null
    _max: TravelModeMaxAggregateOutputType | null
  }

  type GetTravelModeGroupByPayload<T extends TravelModeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TravelModeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TravelModeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TravelModeGroupByOutputType[P]>
            : GetScalarType<T[P], TravelModeGroupByOutputType[P]>
        }
      >
    >


  export type TravelModeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    mode?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelMode"]>

  export type TravelModeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    mode?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelMode"]>

  export type TravelModeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    mode?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelMode"]>

  export type TravelModeSelectScalar = {
    id?: boolean
    tripId?: boolean
    mode?: boolean
  }

  export type TravelModeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "mode", ExtArgs["result"]["travelMode"]>
  export type TravelModeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type TravelModeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type TravelModeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $TravelModePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TravelMode"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripId: string
      mode: string
    }, ExtArgs["result"]["travelMode"]>
    composites: {}
  }

  type TravelModeGetPayload<S extends boolean | null | undefined | TravelModeDefaultArgs> = $Result.GetResult<Prisma.$TravelModePayload, S>

  type TravelModeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TravelModeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TravelModeCountAggregateInputType | true
    }

  export interface TravelModeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TravelMode'], meta: { name: 'TravelMode' } }
    /**
     * Find zero or one TravelMode that matches the filter.
     * @param {TravelModeFindUniqueArgs} args - Arguments to find a TravelMode
     * @example
     * // Get one TravelMode
     * const travelMode = await prisma.travelMode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TravelModeFindUniqueArgs>(args: SelectSubset<T, TravelModeFindUniqueArgs<ExtArgs>>): Prisma__TravelModeClient<$Result.GetResult<Prisma.$TravelModePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TravelMode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TravelModeFindUniqueOrThrowArgs} args - Arguments to find a TravelMode
     * @example
     * // Get one TravelMode
     * const travelMode = await prisma.travelMode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TravelModeFindUniqueOrThrowArgs>(args: SelectSubset<T, TravelModeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TravelModeClient<$Result.GetResult<Prisma.$TravelModePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelMode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelModeFindFirstArgs} args - Arguments to find a TravelMode
     * @example
     * // Get one TravelMode
     * const travelMode = await prisma.travelMode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TravelModeFindFirstArgs>(args?: SelectSubset<T, TravelModeFindFirstArgs<ExtArgs>>): Prisma__TravelModeClient<$Result.GetResult<Prisma.$TravelModePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelMode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelModeFindFirstOrThrowArgs} args - Arguments to find a TravelMode
     * @example
     * // Get one TravelMode
     * const travelMode = await prisma.travelMode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TravelModeFindFirstOrThrowArgs>(args?: SelectSubset<T, TravelModeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TravelModeClient<$Result.GetResult<Prisma.$TravelModePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TravelModes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelModeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TravelModes
     * const travelModes = await prisma.travelMode.findMany()
     * 
     * // Get first 10 TravelModes
     * const travelModes = await prisma.travelMode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const travelModeWithIdOnly = await prisma.travelMode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TravelModeFindManyArgs>(args?: SelectSubset<T, TravelModeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelModePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TravelMode.
     * @param {TravelModeCreateArgs} args - Arguments to create a TravelMode.
     * @example
     * // Create one TravelMode
     * const TravelMode = await prisma.travelMode.create({
     *   data: {
     *     // ... data to create a TravelMode
     *   }
     * })
     * 
     */
    create<T extends TravelModeCreateArgs>(args: SelectSubset<T, TravelModeCreateArgs<ExtArgs>>): Prisma__TravelModeClient<$Result.GetResult<Prisma.$TravelModePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TravelModes.
     * @param {TravelModeCreateManyArgs} args - Arguments to create many TravelModes.
     * @example
     * // Create many TravelModes
     * const travelMode = await prisma.travelMode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TravelModeCreateManyArgs>(args?: SelectSubset<T, TravelModeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TravelModes and returns the data saved in the database.
     * @param {TravelModeCreateManyAndReturnArgs} args - Arguments to create many TravelModes.
     * @example
     * // Create many TravelModes
     * const travelMode = await prisma.travelMode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TravelModes and only return the `id`
     * const travelModeWithIdOnly = await prisma.travelMode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TravelModeCreateManyAndReturnArgs>(args?: SelectSubset<T, TravelModeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelModePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TravelMode.
     * @param {TravelModeDeleteArgs} args - Arguments to delete one TravelMode.
     * @example
     * // Delete one TravelMode
     * const TravelMode = await prisma.travelMode.delete({
     *   where: {
     *     // ... filter to delete one TravelMode
     *   }
     * })
     * 
     */
    delete<T extends TravelModeDeleteArgs>(args: SelectSubset<T, TravelModeDeleteArgs<ExtArgs>>): Prisma__TravelModeClient<$Result.GetResult<Prisma.$TravelModePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TravelMode.
     * @param {TravelModeUpdateArgs} args - Arguments to update one TravelMode.
     * @example
     * // Update one TravelMode
     * const travelMode = await prisma.travelMode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TravelModeUpdateArgs>(args: SelectSubset<T, TravelModeUpdateArgs<ExtArgs>>): Prisma__TravelModeClient<$Result.GetResult<Prisma.$TravelModePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TravelModes.
     * @param {TravelModeDeleteManyArgs} args - Arguments to filter TravelModes to delete.
     * @example
     * // Delete a few TravelModes
     * const { count } = await prisma.travelMode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TravelModeDeleteManyArgs>(args?: SelectSubset<T, TravelModeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelModes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelModeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TravelModes
     * const travelMode = await prisma.travelMode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TravelModeUpdateManyArgs>(args: SelectSubset<T, TravelModeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelModes and returns the data updated in the database.
     * @param {TravelModeUpdateManyAndReturnArgs} args - Arguments to update many TravelModes.
     * @example
     * // Update many TravelModes
     * const travelMode = await prisma.travelMode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TravelModes and only return the `id`
     * const travelModeWithIdOnly = await prisma.travelMode.updateManyAndReturn({
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
    updateManyAndReturn<T extends TravelModeUpdateManyAndReturnArgs>(args: SelectSubset<T, TravelModeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelModePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TravelMode.
     * @param {TravelModeUpsertArgs} args - Arguments to update or create a TravelMode.
     * @example
     * // Update or create a TravelMode
     * const travelMode = await prisma.travelMode.upsert({
     *   create: {
     *     // ... data to create a TravelMode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TravelMode we want to update
     *   }
     * })
     */
    upsert<T extends TravelModeUpsertArgs>(args: SelectSubset<T, TravelModeUpsertArgs<ExtArgs>>): Prisma__TravelModeClient<$Result.GetResult<Prisma.$TravelModePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TravelModes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelModeCountArgs} args - Arguments to filter TravelModes to count.
     * @example
     * // Count the number of TravelModes
     * const count = await prisma.travelMode.count({
     *   where: {
     *     // ... the filter for the TravelModes we want to count
     *   }
     * })
    **/
    count<T extends TravelModeCountArgs>(
      args?: Subset<T, TravelModeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TravelModeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TravelMode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelModeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TravelModeAggregateArgs>(args: Subset<T, TravelModeAggregateArgs>): Prisma.PrismaPromise<GetTravelModeAggregateType<T>>

    /**
     * Group by TravelMode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelModeGroupByArgs} args - Group by arguments.
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
      T extends TravelModeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TravelModeGroupByArgs['orderBy'] }
        : { orderBy?: TravelModeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TravelModeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTravelModeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TravelMode model
   */
  readonly fields: TravelModeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TravelMode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TravelModeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TravelMode model
   */
  interface TravelModeFieldRefs {
    readonly id: FieldRef<"TravelMode", 'String'>
    readonly tripId: FieldRef<"TravelMode", 'String'>
    readonly mode: FieldRef<"TravelMode", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TravelMode findUnique
   */
  export type TravelModeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelMode
     */
    select?: TravelModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelMode
     */
    omit?: TravelModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelModeInclude<ExtArgs> | null
    /**
     * Filter, which TravelMode to fetch.
     */
    where: TravelModeWhereUniqueInput
  }

  /**
   * TravelMode findUniqueOrThrow
   */
  export type TravelModeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelMode
     */
    select?: TravelModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelMode
     */
    omit?: TravelModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelModeInclude<ExtArgs> | null
    /**
     * Filter, which TravelMode to fetch.
     */
    where: TravelModeWhereUniqueInput
  }

  /**
   * TravelMode findFirst
   */
  export type TravelModeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelMode
     */
    select?: TravelModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelMode
     */
    omit?: TravelModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelModeInclude<ExtArgs> | null
    /**
     * Filter, which TravelMode to fetch.
     */
    where?: TravelModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelModes to fetch.
     */
    orderBy?: TravelModeOrderByWithRelationInput | TravelModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelModes.
     */
    cursor?: TravelModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelModes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelModes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelModes.
     */
    distinct?: TravelModeScalarFieldEnum | TravelModeScalarFieldEnum[]
  }

  /**
   * TravelMode findFirstOrThrow
   */
  export type TravelModeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelMode
     */
    select?: TravelModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelMode
     */
    omit?: TravelModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelModeInclude<ExtArgs> | null
    /**
     * Filter, which TravelMode to fetch.
     */
    where?: TravelModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelModes to fetch.
     */
    orderBy?: TravelModeOrderByWithRelationInput | TravelModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelModes.
     */
    cursor?: TravelModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelModes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelModes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelModes.
     */
    distinct?: TravelModeScalarFieldEnum | TravelModeScalarFieldEnum[]
  }

  /**
   * TravelMode findMany
   */
  export type TravelModeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelMode
     */
    select?: TravelModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelMode
     */
    omit?: TravelModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelModeInclude<ExtArgs> | null
    /**
     * Filter, which TravelModes to fetch.
     */
    where?: TravelModeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelModes to fetch.
     */
    orderBy?: TravelModeOrderByWithRelationInput | TravelModeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TravelModes.
     */
    cursor?: TravelModeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelModes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelModes.
     */
    skip?: number
    distinct?: TravelModeScalarFieldEnum | TravelModeScalarFieldEnum[]
  }

  /**
   * TravelMode create
   */
  export type TravelModeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelMode
     */
    select?: TravelModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelMode
     */
    omit?: TravelModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelModeInclude<ExtArgs> | null
    /**
     * The data needed to create a TravelMode.
     */
    data: XOR<TravelModeCreateInput, TravelModeUncheckedCreateInput>
  }

  /**
   * TravelMode createMany
   */
  export type TravelModeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TravelModes.
     */
    data: TravelModeCreateManyInput | TravelModeCreateManyInput[]
  }

  /**
   * TravelMode createManyAndReturn
   */
  export type TravelModeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelMode
     */
    select?: TravelModeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TravelMode
     */
    omit?: TravelModeOmit<ExtArgs> | null
    /**
     * The data used to create many TravelModes.
     */
    data: TravelModeCreateManyInput | TravelModeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelModeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TravelMode update
   */
  export type TravelModeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelMode
     */
    select?: TravelModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelMode
     */
    omit?: TravelModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelModeInclude<ExtArgs> | null
    /**
     * The data needed to update a TravelMode.
     */
    data: XOR<TravelModeUpdateInput, TravelModeUncheckedUpdateInput>
    /**
     * Choose, which TravelMode to update.
     */
    where: TravelModeWhereUniqueInput
  }

  /**
   * TravelMode updateMany
   */
  export type TravelModeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TravelModes.
     */
    data: XOR<TravelModeUpdateManyMutationInput, TravelModeUncheckedUpdateManyInput>
    /**
     * Filter which TravelModes to update
     */
    where?: TravelModeWhereInput
    /**
     * Limit how many TravelModes to update.
     */
    limit?: number
  }

  /**
   * TravelMode updateManyAndReturn
   */
  export type TravelModeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelMode
     */
    select?: TravelModeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TravelMode
     */
    omit?: TravelModeOmit<ExtArgs> | null
    /**
     * The data used to update TravelModes.
     */
    data: XOR<TravelModeUpdateManyMutationInput, TravelModeUncheckedUpdateManyInput>
    /**
     * Filter which TravelModes to update
     */
    where?: TravelModeWhereInput
    /**
     * Limit how many TravelModes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelModeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TravelMode upsert
   */
  export type TravelModeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelMode
     */
    select?: TravelModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelMode
     */
    omit?: TravelModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelModeInclude<ExtArgs> | null
    /**
     * The filter to search for the TravelMode to update in case it exists.
     */
    where: TravelModeWhereUniqueInput
    /**
     * In case the TravelMode found by the `where` argument doesn't exist, create a new TravelMode with this data.
     */
    create: XOR<TravelModeCreateInput, TravelModeUncheckedCreateInput>
    /**
     * In case the TravelMode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TravelModeUpdateInput, TravelModeUncheckedUpdateInput>
  }

  /**
   * TravelMode delete
   */
  export type TravelModeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelMode
     */
    select?: TravelModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelMode
     */
    omit?: TravelModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelModeInclude<ExtArgs> | null
    /**
     * Filter which TravelMode to delete.
     */
    where: TravelModeWhereUniqueInput
  }

  /**
   * TravelMode deleteMany
   */
  export type TravelModeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelModes to delete
     */
    where?: TravelModeWhereInput
    /**
     * Limit how many TravelModes to delete.
     */
    limit?: number
  }

  /**
   * TravelMode without action
   */
  export type TravelModeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelMode
     */
    select?: TravelModeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelMode
     */
    omit?: TravelModeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelModeInclude<ExtArgs> | null
  }


  /**
   * Model TripPreference
   */

  export type AggregateTripPreference = {
    _count: TripPreferenceCountAggregateOutputType | null
    _avg: TripPreferenceAvgAggregateOutputType | null
    _sum: TripPreferenceSumAggregateOutputType | null
    _min: TripPreferenceMinAggregateOutputType | null
    _max: TripPreferenceMaxAggregateOutputType | null
  }

  export type TripPreferenceAvgAggregateOutputType = {
    adults: number | null
    children: number | null
  }

  export type TripPreferenceSumAggregateOutputType = {
    adults: number | null
    children: number | null
  }

  export type TripPreferenceMinAggregateOutputType = {
    id: string | null
    tripId: string | null
    adults: number | null
    children: number | null
    accommodationType: string | null
    mealPlanning: boolean | null
    activityPreferences: string | null
  }

  export type TripPreferenceMaxAggregateOutputType = {
    id: string | null
    tripId: string | null
    adults: number | null
    children: number | null
    accommodationType: string | null
    mealPlanning: boolean | null
    activityPreferences: string | null
  }

  export type TripPreferenceCountAggregateOutputType = {
    id: number
    tripId: number
    adults: number
    children: number
    accommodationType: number
    mealPlanning: number
    activityPreferences: number
    _all: number
  }


  export type TripPreferenceAvgAggregateInputType = {
    adults?: true
    children?: true
  }

  export type TripPreferenceSumAggregateInputType = {
    adults?: true
    children?: true
  }

  export type TripPreferenceMinAggregateInputType = {
    id?: true
    tripId?: true
    adults?: true
    children?: true
    accommodationType?: true
    mealPlanning?: true
    activityPreferences?: true
  }

  export type TripPreferenceMaxAggregateInputType = {
    id?: true
    tripId?: true
    adults?: true
    children?: true
    accommodationType?: true
    mealPlanning?: true
    activityPreferences?: true
  }

  export type TripPreferenceCountAggregateInputType = {
    id?: true
    tripId?: true
    adults?: true
    children?: true
    accommodationType?: true
    mealPlanning?: true
    activityPreferences?: true
    _all?: true
  }

  export type TripPreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripPreference to aggregate.
     */
    where?: TripPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPreferences to fetch.
     */
    orderBy?: TripPreferenceOrderByWithRelationInput | TripPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripPreferences
    **/
    _count?: true | TripPreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripPreferenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripPreferenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripPreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripPreferenceMaxAggregateInputType
  }

  export type GetTripPreferenceAggregateType<T extends TripPreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateTripPreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripPreference[P]>
      : GetScalarType<T[P], AggregateTripPreference[P]>
  }




  export type TripPreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripPreferenceWhereInput
    orderBy?: TripPreferenceOrderByWithAggregationInput | TripPreferenceOrderByWithAggregationInput[]
    by: TripPreferenceScalarFieldEnum[] | TripPreferenceScalarFieldEnum
    having?: TripPreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripPreferenceCountAggregateInputType | true
    _avg?: TripPreferenceAvgAggregateInputType
    _sum?: TripPreferenceSumAggregateInputType
    _min?: TripPreferenceMinAggregateInputType
    _max?: TripPreferenceMaxAggregateInputType
  }

  export type TripPreferenceGroupByOutputType = {
    id: string
    tripId: string
    adults: number
    children: number
    accommodationType: string
    mealPlanning: boolean
    activityPreferences: string
    _count: TripPreferenceCountAggregateOutputType | null
    _avg: TripPreferenceAvgAggregateOutputType | null
    _sum: TripPreferenceSumAggregateOutputType | null
    _min: TripPreferenceMinAggregateOutputType | null
    _max: TripPreferenceMaxAggregateOutputType | null
  }

  type GetTripPreferenceGroupByPayload<T extends TripPreferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripPreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripPreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripPreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], TripPreferenceGroupByOutputType[P]>
        }
      >
    >


  export type TripPreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    adults?: boolean
    children?: boolean
    accommodationType?: boolean
    mealPlanning?: boolean
    activityPreferences?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripPreference"]>

  export type TripPreferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    adults?: boolean
    children?: boolean
    accommodationType?: boolean
    mealPlanning?: boolean
    activityPreferences?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripPreference"]>

  export type TripPreferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    adults?: boolean
    children?: boolean
    accommodationType?: boolean
    mealPlanning?: boolean
    activityPreferences?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripPreference"]>

  export type TripPreferenceSelectScalar = {
    id?: boolean
    tripId?: boolean
    adults?: boolean
    children?: boolean
    accommodationType?: boolean
    mealPlanning?: boolean
    activityPreferences?: boolean
  }

  export type TripPreferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "adults" | "children" | "accommodationType" | "mealPlanning" | "activityPreferences", ExtArgs["result"]["tripPreference"]>
  export type TripPreferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type TripPreferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type TripPreferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $TripPreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripPreference"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripId: string
      adults: number
      children: number
      accommodationType: string
      mealPlanning: boolean
      activityPreferences: string
    }, ExtArgs["result"]["tripPreference"]>
    composites: {}
  }

  type TripPreferenceGetPayload<S extends boolean | null | undefined | TripPreferenceDefaultArgs> = $Result.GetResult<Prisma.$TripPreferencePayload, S>

  type TripPreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripPreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripPreferenceCountAggregateInputType | true
    }

  export interface TripPreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripPreference'], meta: { name: 'TripPreference' } }
    /**
     * Find zero or one TripPreference that matches the filter.
     * @param {TripPreferenceFindUniqueArgs} args - Arguments to find a TripPreference
     * @example
     * // Get one TripPreference
     * const tripPreference = await prisma.tripPreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripPreferenceFindUniqueArgs>(args: SelectSubset<T, TripPreferenceFindUniqueArgs<ExtArgs>>): Prisma__TripPreferenceClient<$Result.GetResult<Prisma.$TripPreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TripPreference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripPreferenceFindUniqueOrThrowArgs} args - Arguments to find a TripPreference
     * @example
     * // Get one TripPreference
     * const tripPreference = await prisma.tripPreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripPreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, TripPreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripPreferenceClient<$Result.GetResult<Prisma.$TripPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripPreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPreferenceFindFirstArgs} args - Arguments to find a TripPreference
     * @example
     * // Get one TripPreference
     * const tripPreference = await prisma.tripPreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripPreferenceFindFirstArgs>(args?: SelectSubset<T, TripPreferenceFindFirstArgs<ExtArgs>>): Prisma__TripPreferenceClient<$Result.GetResult<Prisma.$TripPreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripPreference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPreferenceFindFirstOrThrowArgs} args - Arguments to find a TripPreference
     * @example
     * // Get one TripPreference
     * const tripPreference = await prisma.tripPreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripPreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, TripPreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripPreferenceClient<$Result.GetResult<Prisma.$TripPreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TripPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripPreferences
     * const tripPreferences = await prisma.tripPreference.findMany()
     * 
     * // Get first 10 TripPreferences
     * const tripPreferences = await prisma.tripPreference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripPreferenceWithIdOnly = await prisma.tripPreference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripPreferenceFindManyArgs>(args?: SelectSubset<T, TripPreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TripPreference.
     * @param {TripPreferenceCreateArgs} args - Arguments to create a TripPreference.
     * @example
     * // Create one TripPreference
     * const TripPreference = await prisma.tripPreference.create({
     *   data: {
     *     // ... data to create a TripPreference
     *   }
     * })
     * 
     */
    create<T extends TripPreferenceCreateArgs>(args: SelectSubset<T, TripPreferenceCreateArgs<ExtArgs>>): Prisma__TripPreferenceClient<$Result.GetResult<Prisma.$TripPreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TripPreferences.
     * @param {TripPreferenceCreateManyArgs} args - Arguments to create many TripPreferences.
     * @example
     * // Create many TripPreferences
     * const tripPreference = await prisma.tripPreference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripPreferenceCreateManyArgs>(args?: SelectSubset<T, TripPreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripPreferences and returns the data saved in the database.
     * @param {TripPreferenceCreateManyAndReturnArgs} args - Arguments to create many TripPreferences.
     * @example
     * // Create many TripPreferences
     * const tripPreference = await prisma.tripPreference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripPreferences and only return the `id`
     * const tripPreferenceWithIdOnly = await prisma.tripPreference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripPreferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, TripPreferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPreferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TripPreference.
     * @param {TripPreferenceDeleteArgs} args - Arguments to delete one TripPreference.
     * @example
     * // Delete one TripPreference
     * const TripPreference = await prisma.tripPreference.delete({
     *   where: {
     *     // ... filter to delete one TripPreference
     *   }
     * })
     * 
     */
    delete<T extends TripPreferenceDeleteArgs>(args: SelectSubset<T, TripPreferenceDeleteArgs<ExtArgs>>): Prisma__TripPreferenceClient<$Result.GetResult<Prisma.$TripPreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TripPreference.
     * @param {TripPreferenceUpdateArgs} args - Arguments to update one TripPreference.
     * @example
     * // Update one TripPreference
     * const tripPreference = await prisma.tripPreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripPreferenceUpdateArgs>(args: SelectSubset<T, TripPreferenceUpdateArgs<ExtArgs>>): Prisma__TripPreferenceClient<$Result.GetResult<Prisma.$TripPreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TripPreferences.
     * @param {TripPreferenceDeleteManyArgs} args - Arguments to filter TripPreferences to delete.
     * @example
     * // Delete a few TripPreferences
     * const { count } = await prisma.tripPreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripPreferenceDeleteManyArgs>(args?: SelectSubset<T, TripPreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripPreferences
     * const tripPreference = await prisma.tripPreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripPreferenceUpdateManyArgs>(args: SelectSubset<T, TripPreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripPreferences and returns the data updated in the database.
     * @param {TripPreferenceUpdateManyAndReturnArgs} args - Arguments to update many TripPreferences.
     * @example
     * // Update many TripPreferences
     * const tripPreference = await prisma.tripPreference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TripPreferences and only return the `id`
     * const tripPreferenceWithIdOnly = await prisma.tripPreference.updateManyAndReturn({
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
    updateManyAndReturn<T extends TripPreferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, TripPreferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPreferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TripPreference.
     * @param {TripPreferenceUpsertArgs} args - Arguments to update or create a TripPreference.
     * @example
     * // Update or create a TripPreference
     * const tripPreference = await prisma.tripPreference.upsert({
     *   create: {
     *     // ... data to create a TripPreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripPreference we want to update
     *   }
     * })
     */
    upsert<T extends TripPreferenceUpsertArgs>(args: SelectSubset<T, TripPreferenceUpsertArgs<ExtArgs>>): Prisma__TripPreferenceClient<$Result.GetResult<Prisma.$TripPreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TripPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPreferenceCountArgs} args - Arguments to filter TripPreferences to count.
     * @example
     * // Count the number of TripPreferences
     * const count = await prisma.tripPreference.count({
     *   where: {
     *     // ... the filter for the TripPreferences we want to count
     *   }
     * })
    **/
    count<T extends TripPreferenceCountArgs>(
      args?: Subset<T, TripPreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripPreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripPreferenceAggregateArgs>(args: Subset<T, TripPreferenceAggregateArgs>): Prisma.PrismaPromise<GetTripPreferenceAggregateType<T>>

    /**
     * Group by TripPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPreferenceGroupByArgs} args - Group by arguments.
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
      T extends TripPreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripPreferenceGroupByArgs['orderBy'] }
        : { orderBy?: TripPreferenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TripPreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripPreference model
   */
  readonly fields: TripPreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripPreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripPreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TripPreference model
   */
  interface TripPreferenceFieldRefs {
    readonly id: FieldRef<"TripPreference", 'String'>
    readonly tripId: FieldRef<"TripPreference", 'String'>
    readonly adults: FieldRef<"TripPreference", 'Int'>
    readonly children: FieldRef<"TripPreference", 'Int'>
    readonly accommodationType: FieldRef<"TripPreference", 'String'>
    readonly mealPlanning: FieldRef<"TripPreference", 'Boolean'>
    readonly activityPreferences: FieldRef<"TripPreference", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TripPreference findUnique
   */
  export type TripPreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPreference
     */
    select?: TripPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPreference
     */
    omit?: TripPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which TripPreference to fetch.
     */
    where: TripPreferenceWhereUniqueInput
  }

  /**
   * TripPreference findUniqueOrThrow
   */
  export type TripPreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPreference
     */
    select?: TripPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPreference
     */
    omit?: TripPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which TripPreference to fetch.
     */
    where: TripPreferenceWhereUniqueInput
  }

  /**
   * TripPreference findFirst
   */
  export type TripPreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPreference
     */
    select?: TripPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPreference
     */
    omit?: TripPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which TripPreference to fetch.
     */
    where?: TripPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPreferences to fetch.
     */
    orderBy?: TripPreferenceOrderByWithRelationInput | TripPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripPreferences.
     */
    cursor?: TripPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripPreferences.
     */
    distinct?: TripPreferenceScalarFieldEnum | TripPreferenceScalarFieldEnum[]
  }

  /**
   * TripPreference findFirstOrThrow
   */
  export type TripPreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPreference
     */
    select?: TripPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPreference
     */
    omit?: TripPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which TripPreference to fetch.
     */
    where?: TripPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPreferences to fetch.
     */
    orderBy?: TripPreferenceOrderByWithRelationInput | TripPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripPreferences.
     */
    cursor?: TripPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripPreferences.
     */
    distinct?: TripPreferenceScalarFieldEnum | TripPreferenceScalarFieldEnum[]
  }

  /**
   * TripPreference findMany
   */
  export type TripPreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPreference
     */
    select?: TripPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPreference
     */
    omit?: TripPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which TripPreferences to fetch.
     */
    where?: TripPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPreferences to fetch.
     */
    orderBy?: TripPreferenceOrderByWithRelationInput | TripPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripPreferences.
     */
    cursor?: TripPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPreferences.
     */
    skip?: number
    distinct?: TripPreferenceScalarFieldEnum | TripPreferenceScalarFieldEnum[]
  }

  /**
   * TripPreference create
   */
  export type TripPreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPreference
     */
    select?: TripPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPreference
     */
    omit?: TripPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a TripPreference.
     */
    data: XOR<TripPreferenceCreateInput, TripPreferenceUncheckedCreateInput>
  }

  /**
   * TripPreference createMany
   */
  export type TripPreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripPreferences.
     */
    data: TripPreferenceCreateManyInput | TripPreferenceCreateManyInput[]
  }

  /**
   * TripPreference createManyAndReturn
   */
  export type TripPreferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPreference
     */
    select?: TripPreferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripPreference
     */
    omit?: TripPreferenceOmit<ExtArgs> | null
    /**
     * The data used to create many TripPreferences.
     */
    data: TripPreferenceCreateManyInput | TripPreferenceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPreferenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripPreference update
   */
  export type TripPreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPreference
     */
    select?: TripPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPreference
     */
    omit?: TripPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a TripPreference.
     */
    data: XOR<TripPreferenceUpdateInput, TripPreferenceUncheckedUpdateInput>
    /**
     * Choose, which TripPreference to update.
     */
    where: TripPreferenceWhereUniqueInput
  }

  /**
   * TripPreference updateMany
   */
  export type TripPreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripPreferences.
     */
    data: XOR<TripPreferenceUpdateManyMutationInput, TripPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which TripPreferences to update
     */
    where?: TripPreferenceWhereInput
    /**
     * Limit how many TripPreferences to update.
     */
    limit?: number
  }

  /**
   * TripPreference updateManyAndReturn
   */
  export type TripPreferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPreference
     */
    select?: TripPreferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripPreference
     */
    omit?: TripPreferenceOmit<ExtArgs> | null
    /**
     * The data used to update TripPreferences.
     */
    data: XOR<TripPreferenceUpdateManyMutationInput, TripPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which TripPreferences to update
     */
    where?: TripPreferenceWhereInput
    /**
     * Limit how many TripPreferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPreferenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripPreference upsert
   */
  export type TripPreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPreference
     */
    select?: TripPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPreference
     */
    omit?: TripPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPreferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the TripPreference to update in case it exists.
     */
    where: TripPreferenceWhereUniqueInput
    /**
     * In case the TripPreference found by the `where` argument doesn't exist, create a new TripPreference with this data.
     */
    create: XOR<TripPreferenceCreateInput, TripPreferenceUncheckedCreateInput>
    /**
     * In case the TripPreference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripPreferenceUpdateInput, TripPreferenceUncheckedUpdateInput>
  }

  /**
   * TripPreference delete
   */
  export type TripPreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPreference
     */
    select?: TripPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPreference
     */
    omit?: TripPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPreferenceInclude<ExtArgs> | null
    /**
     * Filter which TripPreference to delete.
     */
    where: TripPreferenceWhereUniqueInput
  }

  /**
   * TripPreference deleteMany
   */
  export type TripPreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripPreferences to delete
     */
    where?: TripPreferenceWhereInput
    /**
     * Limit how many TripPreferences to delete.
     */
    limit?: number
  }

  /**
   * TripPreference without action
   */
  export type TripPreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPreference
     */
    select?: TripPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPreference
     */
    omit?: TripPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPreferenceInclude<ExtArgs> | null
  }


  /**
   * Model Itinerary
   */

  export type AggregateItinerary = {
    _count: ItineraryCountAggregateOutputType | null
    _avg: ItineraryAvgAggregateOutputType | null
    _sum: ItinerarySumAggregateOutputType | null
    _min: ItineraryMinAggregateOutputType | null
    _max: ItineraryMaxAggregateOutputType | null
  }

  export type ItineraryAvgAggregateOutputType = {
    totalCost: number | null
    accommodationCost: number | null
    transportationCost: number | null
    activitiesCost: number | null
    mealsCost: number | null
    otherCost: number | null
  }

  export type ItinerarySumAggregateOutputType = {
    totalCost: number | null
    accommodationCost: number | null
    transportationCost: number | null
    activitiesCost: number | null
    mealsCost: number | null
    otherCost: number | null
  }

  export type ItineraryMinAggregateOutputType = {
    id: string | null
    tripId: string | null
    totalCost: number | null
    accommodationCost: number | null
    transportationCost: number | null
    activitiesCost: number | null
    mealsCost: number | null
    otherCost: number | null
  }

  export type ItineraryMaxAggregateOutputType = {
    id: string | null
    tripId: string | null
    totalCost: number | null
    accommodationCost: number | null
    transportationCost: number | null
    activitiesCost: number | null
    mealsCost: number | null
    otherCost: number | null
  }

  export type ItineraryCountAggregateOutputType = {
    id: number
    tripId: number
    totalCost: number
    accommodationCost: number
    transportationCost: number
    activitiesCost: number
    mealsCost: number
    otherCost: number
    _all: number
  }


  export type ItineraryAvgAggregateInputType = {
    totalCost?: true
    accommodationCost?: true
    transportationCost?: true
    activitiesCost?: true
    mealsCost?: true
    otherCost?: true
  }

  export type ItinerarySumAggregateInputType = {
    totalCost?: true
    accommodationCost?: true
    transportationCost?: true
    activitiesCost?: true
    mealsCost?: true
    otherCost?: true
  }

  export type ItineraryMinAggregateInputType = {
    id?: true
    tripId?: true
    totalCost?: true
    accommodationCost?: true
    transportationCost?: true
    activitiesCost?: true
    mealsCost?: true
    otherCost?: true
  }

  export type ItineraryMaxAggregateInputType = {
    id?: true
    tripId?: true
    totalCost?: true
    accommodationCost?: true
    transportationCost?: true
    activitiesCost?: true
    mealsCost?: true
    otherCost?: true
  }

  export type ItineraryCountAggregateInputType = {
    id?: true
    tripId?: true
    totalCost?: true
    accommodationCost?: true
    transportationCost?: true
    activitiesCost?: true
    mealsCost?: true
    otherCost?: true
    _all?: true
  }

  export type ItineraryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Itinerary to aggregate.
     */
    where?: ItineraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Itineraries to fetch.
     */
    orderBy?: ItineraryOrderByWithRelationInput | ItineraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItineraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Itineraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Itineraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Itineraries
    **/
    _count?: true | ItineraryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItineraryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItinerarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItineraryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItineraryMaxAggregateInputType
  }

  export type GetItineraryAggregateType<T extends ItineraryAggregateArgs> = {
        [P in keyof T & keyof AggregateItinerary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItinerary[P]>
      : GetScalarType<T[P], AggregateItinerary[P]>
  }




  export type ItineraryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItineraryWhereInput
    orderBy?: ItineraryOrderByWithAggregationInput | ItineraryOrderByWithAggregationInput[]
    by: ItineraryScalarFieldEnum[] | ItineraryScalarFieldEnum
    having?: ItineraryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItineraryCountAggregateInputType | true
    _avg?: ItineraryAvgAggregateInputType
    _sum?: ItinerarySumAggregateInputType
    _min?: ItineraryMinAggregateInputType
    _max?: ItineraryMaxAggregateInputType
  }

  export type ItineraryGroupByOutputType = {
    id: string
    tripId: string
    totalCost: number
    accommodationCost: number
    transportationCost: number
    activitiesCost: number
    mealsCost: number
    otherCost: number
    _count: ItineraryCountAggregateOutputType | null
    _avg: ItineraryAvgAggregateOutputType | null
    _sum: ItinerarySumAggregateOutputType | null
    _min: ItineraryMinAggregateOutputType | null
    _max: ItineraryMaxAggregateOutputType | null
  }

  type GetItineraryGroupByPayload<T extends ItineraryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItineraryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItineraryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItineraryGroupByOutputType[P]>
            : GetScalarType<T[P], ItineraryGroupByOutputType[P]>
        }
      >
    >


  export type ItinerarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    totalCost?: boolean
    accommodationCost?: boolean
    transportationCost?: boolean
    activitiesCost?: boolean
    mealsCost?: boolean
    otherCost?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    dailyPlans?: boolean | Itinerary$dailyPlansArgs<ExtArgs>
    _count?: boolean | ItineraryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itinerary"]>

  export type ItinerarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    totalCost?: boolean
    accommodationCost?: boolean
    transportationCost?: boolean
    activitiesCost?: boolean
    mealsCost?: boolean
    otherCost?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itinerary"]>

  export type ItinerarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    totalCost?: boolean
    accommodationCost?: boolean
    transportationCost?: boolean
    activitiesCost?: boolean
    mealsCost?: boolean
    otherCost?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itinerary"]>

  export type ItinerarySelectScalar = {
    id?: boolean
    tripId?: boolean
    totalCost?: boolean
    accommodationCost?: boolean
    transportationCost?: boolean
    activitiesCost?: boolean
    mealsCost?: boolean
    otherCost?: boolean
  }

  export type ItineraryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "totalCost" | "accommodationCost" | "transportationCost" | "activitiesCost" | "mealsCost" | "otherCost", ExtArgs["result"]["itinerary"]>
  export type ItineraryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    dailyPlans?: boolean | Itinerary$dailyPlansArgs<ExtArgs>
    _count?: boolean | ItineraryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItineraryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type ItineraryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $ItineraryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Itinerary"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
      dailyPlans: Prisma.$DailyPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripId: string
      totalCost: number
      accommodationCost: number
      transportationCost: number
      activitiesCost: number
      mealsCost: number
      otherCost: number
    }, ExtArgs["result"]["itinerary"]>
    composites: {}
  }

  type ItineraryGetPayload<S extends boolean | null | undefined | ItineraryDefaultArgs> = $Result.GetResult<Prisma.$ItineraryPayload, S>

  type ItineraryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItineraryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItineraryCountAggregateInputType | true
    }

  export interface ItineraryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Itinerary'], meta: { name: 'Itinerary' } }
    /**
     * Find zero or one Itinerary that matches the filter.
     * @param {ItineraryFindUniqueArgs} args - Arguments to find a Itinerary
     * @example
     * // Get one Itinerary
     * const itinerary = await prisma.itinerary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItineraryFindUniqueArgs>(args: SelectSubset<T, ItineraryFindUniqueArgs<ExtArgs>>): Prisma__ItineraryClient<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Itinerary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItineraryFindUniqueOrThrowArgs} args - Arguments to find a Itinerary
     * @example
     * // Get one Itinerary
     * const itinerary = await prisma.itinerary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItineraryFindUniqueOrThrowArgs>(args: SelectSubset<T, ItineraryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItineraryClient<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Itinerary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryFindFirstArgs} args - Arguments to find a Itinerary
     * @example
     * // Get one Itinerary
     * const itinerary = await prisma.itinerary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItineraryFindFirstArgs>(args?: SelectSubset<T, ItineraryFindFirstArgs<ExtArgs>>): Prisma__ItineraryClient<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Itinerary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryFindFirstOrThrowArgs} args - Arguments to find a Itinerary
     * @example
     * // Get one Itinerary
     * const itinerary = await prisma.itinerary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItineraryFindFirstOrThrowArgs>(args?: SelectSubset<T, ItineraryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItineraryClient<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Itineraries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Itineraries
     * const itineraries = await prisma.itinerary.findMany()
     * 
     * // Get first 10 Itineraries
     * const itineraries = await prisma.itinerary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itineraryWithIdOnly = await prisma.itinerary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItineraryFindManyArgs>(args?: SelectSubset<T, ItineraryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Itinerary.
     * @param {ItineraryCreateArgs} args - Arguments to create a Itinerary.
     * @example
     * // Create one Itinerary
     * const Itinerary = await prisma.itinerary.create({
     *   data: {
     *     // ... data to create a Itinerary
     *   }
     * })
     * 
     */
    create<T extends ItineraryCreateArgs>(args: SelectSubset<T, ItineraryCreateArgs<ExtArgs>>): Prisma__ItineraryClient<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Itineraries.
     * @param {ItineraryCreateManyArgs} args - Arguments to create many Itineraries.
     * @example
     * // Create many Itineraries
     * const itinerary = await prisma.itinerary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItineraryCreateManyArgs>(args?: SelectSubset<T, ItineraryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Itineraries and returns the data saved in the database.
     * @param {ItineraryCreateManyAndReturnArgs} args - Arguments to create many Itineraries.
     * @example
     * // Create many Itineraries
     * const itinerary = await prisma.itinerary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Itineraries and only return the `id`
     * const itineraryWithIdOnly = await prisma.itinerary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItineraryCreateManyAndReturnArgs>(args?: SelectSubset<T, ItineraryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Itinerary.
     * @param {ItineraryDeleteArgs} args - Arguments to delete one Itinerary.
     * @example
     * // Delete one Itinerary
     * const Itinerary = await prisma.itinerary.delete({
     *   where: {
     *     // ... filter to delete one Itinerary
     *   }
     * })
     * 
     */
    delete<T extends ItineraryDeleteArgs>(args: SelectSubset<T, ItineraryDeleteArgs<ExtArgs>>): Prisma__ItineraryClient<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Itinerary.
     * @param {ItineraryUpdateArgs} args - Arguments to update one Itinerary.
     * @example
     * // Update one Itinerary
     * const itinerary = await prisma.itinerary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItineraryUpdateArgs>(args: SelectSubset<T, ItineraryUpdateArgs<ExtArgs>>): Prisma__ItineraryClient<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Itineraries.
     * @param {ItineraryDeleteManyArgs} args - Arguments to filter Itineraries to delete.
     * @example
     * // Delete a few Itineraries
     * const { count } = await prisma.itinerary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItineraryDeleteManyArgs>(args?: SelectSubset<T, ItineraryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Itineraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Itineraries
     * const itinerary = await prisma.itinerary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItineraryUpdateManyArgs>(args: SelectSubset<T, ItineraryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Itineraries and returns the data updated in the database.
     * @param {ItineraryUpdateManyAndReturnArgs} args - Arguments to update many Itineraries.
     * @example
     * // Update many Itineraries
     * const itinerary = await prisma.itinerary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Itineraries and only return the `id`
     * const itineraryWithIdOnly = await prisma.itinerary.updateManyAndReturn({
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
    updateManyAndReturn<T extends ItineraryUpdateManyAndReturnArgs>(args: SelectSubset<T, ItineraryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Itinerary.
     * @param {ItineraryUpsertArgs} args - Arguments to update or create a Itinerary.
     * @example
     * // Update or create a Itinerary
     * const itinerary = await prisma.itinerary.upsert({
     *   create: {
     *     // ... data to create a Itinerary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Itinerary we want to update
     *   }
     * })
     */
    upsert<T extends ItineraryUpsertArgs>(args: SelectSubset<T, ItineraryUpsertArgs<ExtArgs>>): Prisma__ItineraryClient<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Itineraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryCountArgs} args - Arguments to filter Itineraries to count.
     * @example
     * // Count the number of Itineraries
     * const count = await prisma.itinerary.count({
     *   where: {
     *     // ... the filter for the Itineraries we want to count
     *   }
     * })
    **/
    count<T extends ItineraryCountArgs>(
      args?: Subset<T, ItineraryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItineraryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Itinerary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItineraryAggregateArgs>(args: Subset<T, ItineraryAggregateArgs>): Prisma.PrismaPromise<GetItineraryAggregateType<T>>

    /**
     * Group by Itinerary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItineraryGroupByArgs} args - Group by arguments.
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
      T extends ItineraryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItineraryGroupByArgs['orderBy'] }
        : { orderBy?: ItineraryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItineraryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItineraryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Itinerary model
   */
  readonly fields: ItineraryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Itinerary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItineraryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dailyPlans<T extends Itinerary$dailyPlansArgs<ExtArgs> = {}>(args?: Subset<T, Itinerary$dailyPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Itinerary model
   */
  interface ItineraryFieldRefs {
    readonly id: FieldRef<"Itinerary", 'String'>
    readonly tripId: FieldRef<"Itinerary", 'String'>
    readonly totalCost: FieldRef<"Itinerary", 'Float'>
    readonly accommodationCost: FieldRef<"Itinerary", 'Float'>
    readonly transportationCost: FieldRef<"Itinerary", 'Float'>
    readonly activitiesCost: FieldRef<"Itinerary", 'Float'>
    readonly mealsCost: FieldRef<"Itinerary", 'Float'>
    readonly otherCost: FieldRef<"Itinerary", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Itinerary findUnique
   */
  export type ItineraryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Itinerary
     */
    omit?: ItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * Filter, which Itinerary to fetch.
     */
    where: ItineraryWhereUniqueInput
  }

  /**
   * Itinerary findUniqueOrThrow
   */
  export type ItineraryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Itinerary
     */
    omit?: ItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * Filter, which Itinerary to fetch.
     */
    where: ItineraryWhereUniqueInput
  }

  /**
   * Itinerary findFirst
   */
  export type ItineraryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Itinerary
     */
    omit?: ItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * Filter, which Itinerary to fetch.
     */
    where?: ItineraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Itineraries to fetch.
     */
    orderBy?: ItineraryOrderByWithRelationInput | ItineraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Itineraries.
     */
    cursor?: ItineraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Itineraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Itineraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Itineraries.
     */
    distinct?: ItineraryScalarFieldEnum | ItineraryScalarFieldEnum[]
  }

  /**
   * Itinerary findFirstOrThrow
   */
  export type ItineraryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Itinerary
     */
    omit?: ItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * Filter, which Itinerary to fetch.
     */
    where?: ItineraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Itineraries to fetch.
     */
    orderBy?: ItineraryOrderByWithRelationInput | ItineraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Itineraries.
     */
    cursor?: ItineraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Itineraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Itineraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Itineraries.
     */
    distinct?: ItineraryScalarFieldEnum | ItineraryScalarFieldEnum[]
  }

  /**
   * Itinerary findMany
   */
  export type ItineraryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Itinerary
     */
    omit?: ItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * Filter, which Itineraries to fetch.
     */
    where?: ItineraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Itineraries to fetch.
     */
    orderBy?: ItineraryOrderByWithRelationInput | ItineraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Itineraries.
     */
    cursor?: ItineraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Itineraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Itineraries.
     */
    skip?: number
    distinct?: ItineraryScalarFieldEnum | ItineraryScalarFieldEnum[]
  }

  /**
   * Itinerary create
   */
  export type ItineraryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Itinerary
     */
    omit?: ItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * The data needed to create a Itinerary.
     */
    data: XOR<ItineraryCreateInput, ItineraryUncheckedCreateInput>
  }

  /**
   * Itinerary createMany
   */
  export type ItineraryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Itineraries.
     */
    data: ItineraryCreateManyInput | ItineraryCreateManyInput[]
  }

  /**
   * Itinerary createManyAndReturn
   */
  export type ItineraryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Itinerary
     */
    omit?: ItineraryOmit<ExtArgs> | null
    /**
     * The data used to create many Itineraries.
     */
    data: ItineraryCreateManyInput | ItineraryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Itinerary update
   */
  export type ItineraryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Itinerary
     */
    omit?: ItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * The data needed to update a Itinerary.
     */
    data: XOR<ItineraryUpdateInput, ItineraryUncheckedUpdateInput>
    /**
     * Choose, which Itinerary to update.
     */
    where: ItineraryWhereUniqueInput
  }

  /**
   * Itinerary updateMany
   */
  export type ItineraryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Itineraries.
     */
    data: XOR<ItineraryUpdateManyMutationInput, ItineraryUncheckedUpdateManyInput>
    /**
     * Filter which Itineraries to update
     */
    where?: ItineraryWhereInput
    /**
     * Limit how many Itineraries to update.
     */
    limit?: number
  }

  /**
   * Itinerary updateManyAndReturn
   */
  export type ItineraryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Itinerary
     */
    omit?: ItineraryOmit<ExtArgs> | null
    /**
     * The data used to update Itineraries.
     */
    data: XOR<ItineraryUpdateManyMutationInput, ItineraryUncheckedUpdateManyInput>
    /**
     * Filter which Itineraries to update
     */
    where?: ItineraryWhereInput
    /**
     * Limit how many Itineraries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Itinerary upsert
   */
  export type ItineraryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Itinerary
     */
    omit?: ItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * The filter to search for the Itinerary to update in case it exists.
     */
    where: ItineraryWhereUniqueInput
    /**
     * In case the Itinerary found by the `where` argument doesn't exist, create a new Itinerary with this data.
     */
    create: XOR<ItineraryCreateInput, ItineraryUncheckedCreateInput>
    /**
     * In case the Itinerary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItineraryUpdateInput, ItineraryUncheckedUpdateInput>
  }

  /**
   * Itinerary delete
   */
  export type ItineraryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Itinerary
     */
    omit?: ItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryInclude<ExtArgs> | null
    /**
     * Filter which Itinerary to delete.
     */
    where: ItineraryWhereUniqueInput
  }

  /**
   * Itinerary deleteMany
   */
  export type ItineraryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Itineraries to delete
     */
    where?: ItineraryWhereInput
    /**
     * Limit how many Itineraries to delete.
     */
    limit?: number
  }

  /**
   * Itinerary.dailyPlans
   */
  export type Itinerary$dailyPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlan
     */
    select?: DailyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlan
     */
    omit?: DailyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanInclude<ExtArgs> | null
    where?: DailyPlanWhereInput
    orderBy?: DailyPlanOrderByWithRelationInput | DailyPlanOrderByWithRelationInput[]
    cursor?: DailyPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyPlanScalarFieldEnum | DailyPlanScalarFieldEnum[]
  }

  /**
   * Itinerary without action
   */
  export type ItineraryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Itinerary
     */
    select?: ItinerarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Itinerary
     */
    omit?: ItineraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItineraryInclude<ExtArgs> | null
  }


  /**
   * Model DailyPlan
   */

  export type AggregateDailyPlan = {
    _count: DailyPlanCountAggregateOutputType | null
    _min: DailyPlanMinAggregateOutputType | null
    _max: DailyPlanMaxAggregateOutputType | null
  }

  export type DailyPlanMinAggregateOutputType = {
    id: string | null
    itineraryId: string | null
    destinationId: string | null
    date: Date | null
  }

  export type DailyPlanMaxAggregateOutputType = {
    id: string | null
    itineraryId: string | null
    destinationId: string | null
    date: Date | null
  }

  export type DailyPlanCountAggregateOutputType = {
    id: number
    itineraryId: number
    destinationId: number
    date: number
    _all: number
  }


  export type DailyPlanMinAggregateInputType = {
    id?: true
    itineraryId?: true
    destinationId?: true
    date?: true
  }

  export type DailyPlanMaxAggregateInputType = {
    id?: true
    itineraryId?: true
    destinationId?: true
    date?: true
  }

  export type DailyPlanCountAggregateInputType = {
    id?: true
    itineraryId?: true
    destinationId?: true
    date?: true
    _all?: true
  }

  export type DailyPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyPlan to aggregate.
     */
    where?: DailyPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyPlans to fetch.
     */
    orderBy?: DailyPlanOrderByWithRelationInput | DailyPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyPlans
    **/
    _count?: true | DailyPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyPlanMaxAggregateInputType
  }

  export type GetDailyPlanAggregateType<T extends DailyPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyPlan[P]>
      : GetScalarType<T[P], AggregateDailyPlan[P]>
  }




  export type DailyPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyPlanWhereInput
    orderBy?: DailyPlanOrderByWithAggregationInput | DailyPlanOrderByWithAggregationInput[]
    by: DailyPlanScalarFieldEnum[] | DailyPlanScalarFieldEnum
    having?: DailyPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyPlanCountAggregateInputType | true
    _min?: DailyPlanMinAggregateInputType
    _max?: DailyPlanMaxAggregateInputType
  }

  export type DailyPlanGroupByOutputType = {
    id: string
    itineraryId: string
    destinationId: string
    date: Date
    _count: DailyPlanCountAggregateOutputType | null
    _min: DailyPlanMinAggregateOutputType | null
    _max: DailyPlanMaxAggregateOutputType | null
  }

  type GetDailyPlanGroupByPayload<T extends DailyPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyPlanGroupByOutputType[P]>
            : GetScalarType<T[P], DailyPlanGroupByOutputType[P]>
        }
      >
    >


  export type DailyPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itineraryId?: boolean
    destinationId?: boolean
    date?: boolean
    itinerary?: boolean | ItineraryDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
    activities?: boolean | DailyPlan$activitiesArgs<ExtArgs>
    meals?: boolean | DailyPlan$mealsArgs<ExtArgs>
    accommodation?: boolean | DailyPlan$accommodationArgs<ExtArgs>
    transportation?: boolean | DailyPlan$transportationArgs<ExtArgs>
    _count?: boolean | DailyPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyPlan"]>

  export type DailyPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itineraryId?: boolean
    destinationId?: boolean
    date?: boolean
    itinerary?: boolean | ItineraryDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyPlan"]>

  export type DailyPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itineraryId?: boolean
    destinationId?: boolean
    date?: boolean
    itinerary?: boolean | ItineraryDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyPlan"]>

  export type DailyPlanSelectScalar = {
    id?: boolean
    itineraryId?: boolean
    destinationId?: boolean
    date?: boolean
  }

  export type DailyPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "itineraryId" | "destinationId" | "date", ExtArgs["result"]["dailyPlan"]>
  export type DailyPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itinerary?: boolean | ItineraryDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
    activities?: boolean | DailyPlan$activitiesArgs<ExtArgs>
    meals?: boolean | DailyPlan$mealsArgs<ExtArgs>
    accommodation?: boolean | DailyPlan$accommodationArgs<ExtArgs>
    transportation?: boolean | DailyPlan$transportationArgs<ExtArgs>
    _count?: boolean | DailyPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DailyPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itinerary?: boolean | ItineraryDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }
  export type DailyPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itinerary?: boolean | ItineraryDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }

  export type $DailyPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyPlan"
    objects: {
      itinerary: Prisma.$ItineraryPayload<ExtArgs>
      destination: Prisma.$DestinationPayload<ExtArgs>
      activities: Prisma.$ActivityPayload<ExtArgs>[]
      meals: Prisma.$MealPayload<ExtArgs>[]
      accommodation: Prisma.$AccommodationPayload<ExtArgs> | null
      transportation: Prisma.$TransportationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      itineraryId: string
      destinationId: string
      date: Date
    }, ExtArgs["result"]["dailyPlan"]>
    composites: {}
  }

  type DailyPlanGetPayload<S extends boolean | null | undefined | DailyPlanDefaultArgs> = $Result.GetResult<Prisma.$DailyPlanPayload, S>

  type DailyPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyPlanCountAggregateInputType | true
    }

  export interface DailyPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyPlan'], meta: { name: 'DailyPlan' } }
    /**
     * Find zero or one DailyPlan that matches the filter.
     * @param {DailyPlanFindUniqueArgs} args - Arguments to find a DailyPlan
     * @example
     * // Get one DailyPlan
     * const dailyPlan = await prisma.dailyPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyPlanFindUniqueArgs>(args: SelectSubset<T, DailyPlanFindUniqueArgs<ExtArgs>>): Prisma__DailyPlanClient<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyPlanFindUniqueOrThrowArgs} args - Arguments to find a DailyPlan
     * @example
     * // Get one DailyPlan
     * const dailyPlan = await prisma.dailyPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyPlanClient<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPlanFindFirstArgs} args - Arguments to find a DailyPlan
     * @example
     * // Get one DailyPlan
     * const dailyPlan = await prisma.dailyPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyPlanFindFirstArgs>(args?: SelectSubset<T, DailyPlanFindFirstArgs<ExtArgs>>): Prisma__DailyPlanClient<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPlanFindFirstOrThrowArgs} args - Arguments to find a DailyPlan
     * @example
     * // Get one DailyPlan
     * const dailyPlan = await prisma.dailyPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyPlanClient<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyPlans
     * const dailyPlans = await prisma.dailyPlan.findMany()
     * 
     * // Get first 10 DailyPlans
     * const dailyPlans = await prisma.dailyPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyPlanWithIdOnly = await prisma.dailyPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyPlanFindManyArgs>(args?: SelectSubset<T, DailyPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyPlan.
     * @param {DailyPlanCreateArgs} args - Arguments to create a DailyPlan.
     * @example
     * // Create one DailyPlan
     * const DailyPlan = await prisma.dailyPlan.create({
     *   data: {
     *     // ... data to create a DailyPlan
     *   }
     * })
     * 
     */
    create<T extends DailyPlanCreateArgs>(args: SelectSubset<T, DailyPlanCreateArgs<ExtArgs>>): Prisma__DailyPlanClient<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyPlans.
     * @param {DailyPlanCreateManyArgs} args - Arguments to create many DailyPlans.
     * @example
     * // Create many DailyPlans
     * const dailyPlan = await prisma.dailyPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyPlanCreateManyArgs>(args?: SelectSubset<T, DailyPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyPlans and returns the data saved in the database.
     * @param {DailyPlanCreateManyAndReturnArgs} args - Arguments to create many DailyPlans.
     * @example
     * // Create many DailyPlans
     * const dailyPlan = await prisma.dailyPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyPlans and only return the `id`
     * const dailyPlanWithIdOnly = await prisma.dailyPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyPlan.
     * @param {DailyPlanDeleteArgs} args - Arguments to delete one DailyPlan.
     * @example
     * // Delete one DailyPlan
     * const DailyPlan = await prisma.dailyPlan.delete({
     *   where: {
     *     // ... filter to delete one DailyPlan
     *   }
     * })
     * 
     */
    delete<T extends DailyPlanDeleteArgs>(args: SelectSubset<T, DailyPlanDeleteArgs<ExtArgs>>): Prisma__DailyPlanClient<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyPlan.
     * @param {DailyPlanUpdateArgs} args - Arguments to update one DailyPlan.
     * @example
     * // Update one DailyPlan
     * const dailyPlan = await prisma.dailyPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyPlanUpdateArgs>(args: SelectSubset<T, DailyPlanUpdateArgs<ExtArgs>>): Prisma__DailyPlanClient<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyPlans.
     * @param {DailyPlanDeleteManyArgs} args - Arguments to filter DailyPlans to delete.
     * @example
     * // Delete a few DailyPlans
     * const { count } = await prisma.dailyPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyPlanDeleteManyArgs>(args?: SelectSubset<T, DailyPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyPlans
     * const dailyPlan = await prisma.dailyPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyPlanUpdateManyArgs>(args: SelectSubset<T, DailyPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyPlans and returns the data updated in the database.
     * @param {DailyPlanUpdateManyAndReturnArgs} args - Arguments to update many DailyPlans.
     * @example
     * // Update many DailyPlans
     * const dailyPlan = await prisma.dailyPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyPlans and only return the `id`
     * const dailyPlanWithIdOnly = await prisma.dailyPlan.updateManyAndReturn({
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
    updateManyAndReturn<T extends DailyPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyPlan.
     * @param {DailyPlanUpsertArgs} args - Arguments to update or create a DailyPlan.
     * @example
     * // Update or create a DailyPlan
     * const dailyPlan = await prisma.dailyPlan.upsert({
     *   create: {
     *     // ... data to create a DailyPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyPlan we want to update
     *   }
     * })
     */
    upsert<T extends DailyPlanUpsertArgs>(args: SelectSubset<T, DailyPlanUpsertArgs<ExtArgs>>): Prisma__DailyPlanClient<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPlanCountArgs} args - Arguments to filter DailyPlans to count.
     * @example
     * // Count the number of DailyPlans
     * const count = await prisma.dailyPlan.count({
     *   where: {
     *     // ... the filter for the DailyPlans we want to count
     *   }
     * })
    **/
    count<T extends DailyPlanCountArgs>(
      args?: Subset<T, DailyPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyPlanAggregateArgs>(args: Subset<T, DailyPlanAggregateArgs>): Prisma.PrismaPromise<GetDailyPlanAggregateType<T>>

    /**
     * Group by DailyPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPlanGroupByArgs} args - Group by arguments.
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
      T extends DailyPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyPlanGroupByArgs['orderBy'] }
        : { orderBy?: DailyPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyPlan model
   */
  readonly fields: DailyPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itinerary<T extends ItineraryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItineraryDefaultArgs<ExtArgs>>): Prisma__ItineraryClient<$Result.GetResult<Prisma.$ItineraryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    destination<T extends DestinationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DestinationDefaultArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    activities<T extends DailyPlan$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, DailyPlan$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    meals<T extends DailyPlan$mealsArgs<ExtArgs> = {}>(args?: Subset<T, DailyPlan$mealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accommodation<T extends DailyPlan$accommodationArgs<ExtArgs> = {}>(args?: Subset<T, DailyPlan$accommodationArgs<ExtArgs>>): Prisma__AccommodationClient<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transportation<T extends DailyPlan$transportationArgs<ExtArgs> = {}>(args?: Subset<T, DailyPlan$transportationArgs<ExtArgs>>): Prisma__TransportationClient<$Result.GetResult<Prisma.$TransportationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DailyPlan model
   */
  interface DailyPlanFieldRefs {
    readonly id: FieldRef<"DailyPlan", 'String'>
    readonly itineraryId: FieldRef<"DailyPlan", 'String'>
    readonly destinationId: FieldRef<"DailyPlan", 'String'>
    readonly date: FieldRef<"DailyPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyPlan findUnique
   */
  export type DailyPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlan
     */
    select?: DailyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlan
     */
    omit?: DailyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanInclude<ExtArgs> | null
    /**
     * Filter, which DailyPlan to fetch.
     */
    where: DailyPlanWhereUniqueInput
  }

  /**
   * DailyPlan findUniqueOrThrow
   */
  export type DailyPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlan
     */
    select?: DailyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlan
     */
    omit?: DailyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanInclude<ExtArgs> | null
    /**
     * Filter, which DailyPlan to fetch.
     */
    where: DailyPlanWhereUniqueInput
  }

  /**
   * DailyPlan findFirst
   */
  export type DailyPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlan
     */
    select?: DailyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlan
     */
    omit?: DailyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanInclude<ExtArgs> | null
    /**
     * Filter, which DailyPlan to fetch.
     */
    where?: DailyPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyPlans to fetch.
     */
    orderBy?: DailyPlanOrderByWithRelationInput | DailyPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyPlans.
     */
    cursor?: DailyPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyPlans.
     */
    distinct?: DailyPlanScalarFieldEnum | DailyPlanScalarFieldEnum[]
  }

  /**
   * DailyPlan findFirstOrThrow
   */
  export type DailyPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlan
     */
    select?: DailyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlan
     */
    omit?: DailyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanInclude<ExtArgs> | null
    /**
     * Filter, which DailyPlan to fetch.
     */
    where?: DailyPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyPlans to fetch.
     */
    orderBy?: DailyPlanOrderByWithRelationInput | DailyPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyPlans.
     */
    cursor?: DailyPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyPlans.
     */
    distinct?: DailyPlanScalarFieldEnum | DailyPlanScalarFieldEnum[]
  }

  /**
   * DailyPlan findMany
   */
  export type DailyPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlan
     */
    select?: DailyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlan
     */
    omit?: DailyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanInclude<ExtArgs> | null
    /**
     * Filter, which DailyPlans to fetch.
     */
    where?: DailyPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyPlans to fetch.
     */
    orderBy?: DailyPlanOrderByWithRelationInput | DailyPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyPlans.
     */
    cursor?: DailyPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyPlans.
     */
    skip?: number
    distinct?: DailyPlanScalarFieldEnum | DailyPlanScalarFieldEnum[]
  }

  /**
   * DailyPlan create
   */
  export type DailyPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlan
     */
    select?: DailyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlan
     */
    omit?: DailyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyPlan.
     */
    data: XOR<DailyPlanCreateInput, DailyPlanUncheckedCreateInput>
  }

  /**
   * DailyPlan createMany
   */
  export type DailyPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyPlans.
     */
    data: DailyPlanCreateManyInput | DailyPlanCreateManyInput[]
  }

  /**
   * DailyPlan createManyAndReturn
   */
  export type DailyPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlan
     */
    select?: DailyPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlan
     */
    omit?: DailyPlanOmit<ExtArgs> | null
    /**
     * The data used to create many DailyPlans.
     */
    data: DailyPlanCreateManyInput | DailyPlanCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyPlan update
   */
  export type DailyPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlan
     */
    select?: DailyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlan
     */
    omit?: DailyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyPlan.
     */
    data: XOR<DailyPlanUpdateInput, DailyPlanUncheckedUpdateInput>
    /**
     * Choose, which DailyPlan to update.
     */
    where: DailyPlanWhereUniqueInput
  }

  /**
   * DailyPlan updateMany
   */
  export type DailyPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyPlans.
     */
    data: XOR<DailyPlanUpdateManyMutationInput, DailyPlanUncheckedUpdateManyInput>
    /**
     * Filter which DailyPlans to update
     */
    where?: DailyPlanWhereInput
    /**
     * Limit how many DailyPlans to update.
     */
    limit?: number
  }

  /**
   * DailyPlan updateManyAndReturn
   */
  export type DailyPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlan
     */
    select?: DailyPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlan
     */
    omit?: DailyPlanOmit<ExtArgs> | null
    /**
     * The data used to update DailyPlans.
     */
    data: XOR<DailyPlanUpdateManyMutationInput, DailyPlanUncheckedUpdateManyInput>
    /**
     * Filter which DailyPlans to update
     */
    where?: DailyPlanWhereInput
    /**
     * Limit how many DailyPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyPlan upsert
   */
  export type DailyPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlan
     */
    select?: DailyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlan
     */
    omit?: DailyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyPlan to update in case it exists.
     */
    where: DailyPlanWhereUniqueInput
    /**
     * In case the DailyPlan found by the `where` argument doesn't exist, create a new DailyPlan with this data.
     */
    create: XOR<DailyPlanCreateInput, DailyPlanUncheckedCreateInput>
    /**
     * In case the DailyPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyPlanUpdateInput, DailyPlanUncheckedUpdateInput>
  }

  /**
   * DailyPlan delete
   */
  export type DailyPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlan
     */
    select?: DailyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlan
     */
    omit?: DailyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanInclude<ExtArgs> | null
    /**
     * Filter which DailyPlan to delete.
     */
    where: DailyPlanWhereUniqueInput
  }

  /**
   * DailyPlan deleteMany
   */
  export type DailyPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyPlans to delete
     */
    where?: DailyPlanWhereInput
    /**
     * Limit how many DailyPlans to delete.
     */
    limit?: number
  }

  /**
   * DailyPlan.activities
   */
  export type DailyPlan$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * DailyPlan.meals
   */
  export type DailyPlan$mealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    where?: MealWhereInput
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    cursor?: MealWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * DailyPlan.accommodation
   */
  export type DailyPlan$accommodationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    where?: AccommodationWhereInput
  }

  /**
   * DailyPlan.transportation
   */
  export type DailyPlan$transportationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportation
     */
    select?: TransportationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportation
     */
    omit?: TransportationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportationInclude<ExtArgs> | null
    where?: TransportationWhereInput
  }

  /**
   * DailyPlan without action
   */
  export type DailyPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPlan
     */
    select?: DailyPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyPlan
     */
    omit?: DailyPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyPlanInclude<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityAvgAggregateOutputType = {
    duration: number | null
    cost: number | null
  }

  export type ActivitySumAggregateOutputType = {
    duration: number | null
    cost: number | null
  }

  export type ActivityMinAggregateOutputType = {
    id: string | null
    dailyPlanId: string | null
    name: string | null
    duration: number | null
    cost: number | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: string | null
    dailyPlanId: string | null
    name: string | null
    duration: number | null
    cost: number | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    dailyPlanId: number
    name: number
    duration: number
    cost: number
    _all: number
  }


  export type ActivityAvgAggregateInputType = {
    duration?: true
    cost?: true
  }

  export type ActivitySumAggregateInputType = {
    duration?: true
    cost?: true
  }

  export type ActivityMinAggregateInputType = {
    id?: true
    dailyPlanId?: true
    name?: true
    duration?: true
    cost?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    dailyPlanId?: true
    name?: true
    duration?: true
    cost?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    dailyPlanId?: true
    name?: true
    duration?: true
    cost?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _avg?: ActivityAvgAggregateInputType
    _sum?: ActivitySumAggregateInputType
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: string
    dailyPlanId: string
    name: string
    duration: number
    cost: number
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyPlanId?: boolean
    name?: boolean
    duration?: boolean
    cost?: boolean
    dailyPlan?: boolean | DailyPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyPlanId?: boolean
    name?: boolean
    duration?: boolean
    cost?: boolean
    dailyPlan?: boolean | DailyPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyPlanId?: boolean
    name?: boolean
    duration?: boolean
    cost?: boolean
    dailyPlan?: boolean | DailyPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectScalar = {
    id?: boolean
    dailyPlanId?: boolean
    name?: boolean
    duration?: boolean
    cost?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dailyPlanId" | "name" | "duration" | "cost", ExtArgs["result"]["activity"]>
  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyPlan?: boolean | DailyPlanDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyPlan?: boolean | DailyPlanDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyPlan?: boolean | DailyPlanDefaultArgs<ExtArgs>
  }

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      dailyPlan: Prisma.$DailyPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dailyPlanId: string
      name: string
      duration: number
      cost: number
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {ActivityCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities and returns the data updated in the database.
     * @param {ActivityUpdateManyAndReturnArgs} args - Arguments to update many Activities.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
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
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dailyPlan<T extends DailyPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DailyPlanDefaultArgs<ExtArgs>>): Prisma__DailyPlanClient<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'String'>
    readonly dailyPlanId: FieldRef<"Activity", 'String'>
    readonly name: FieldRef<"Activity", 'String'>
    readonly duration: FieldRef<"Activity", 'Int'>
    readonly cost: FieldRef<"Activity", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
  }

  /**
   * Activity createManyAndReturn
   */
  export type ActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity updateManyAndReturn
   */
  export type ActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to delete.
     */
    limit?: number
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model Meal
   */

  export type AggregateMeal = {
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  export type MealAvgAggregateOutputType = {
    cost: number | null
  }

  export type MealSumAggregateOutputType = {
    cost: number | null
  }

  export type MealMinAggregateOutputType = {
    id: string | null
    dailyPlanId: string | null
    type: string | null
    name: string | null
    cost: number | null
  }

  export type MealMaxAggregateOutputType = {
    id: string | null
    dailyPlanId: string | null
    type: string | null
    name: string | null
    cost: number | null
  }

  export type MealCountAggregateOutputType = {
    id: number
    dailyPlanId: number
    type: number
    name: number
    cost: number
    _all: number
  }


  export type MealAvgAggregateInputType = {
    cost?: true
  }

  export type MealSumAggregateInputType = {
    cost?: true
  }

  export type MealMinAggregateInputType = {
    id?: true
    dailyPlanId?: true
    type?: true
    name?: true
    cost?: true
  }

  export type MealMaxAggregateInputType = {
    id?: true
    dailyPlanId?: true
    type?: true
    name?: true
    cost?: true
  }

  export type MealCountAggregateInputType = {
    id?: true
    dailyPlanId?: true
    type?: true
    name?: true
    cost?: true
    _all?: true
  }

  export type MealAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meal to aggregate.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meals
    **/
    _count?: true | MealCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealMaxAggregateInputType
  }

  export type GetMealAggregateType<T extends MealAggregateArgs> = {
        [P in keyof T & keyof AggregateMeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeal[P]>
      : GetScalarType<T[P], AggregateMeal[P]>
  }




  export type MealGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
    orderBy?: MealOrderByWithAggregationInput | MealOrderByWithAggregationInput[]
    by: MealScalarFieldEnum[] | MealScalarFieldEnum
    having?: MealScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealCountAggregateInputType | true
    _avg?: MealAvgAggregateInputType
    _sum?: MealSumAggregateInputType
    _min?: MealMinAggregateInputType
    _max?: MealMaxAggregateInputType
  }

  export type MealGroupByOutputType = {
    id: string
    dailyPlanId: string
    type: string
    name: string
    cost: number
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  type GetMealGroupByPayload<T extends MealGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealGroupByOutputType[P]>
            : GetScalarType<T[P], MealGroupByOutputType[P]>
        }
      >
    >


  export type MealSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyPlanId?: boolean
    type?: boolean
    name?: boolean
    cost?: boolean
    dailyPlan?: boolean | DailyPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyPlanId?: boolean
    type?: boolean
    name?: boolean
    cost?: boolean
    dailyPlan?: boolean | DailyPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyPlanId?: boolean
    type?: boolean
    name?: boolean
    cost?: boolean
    dailyPlan?: boolean | DailyPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectScalar = {
    id?: boolean
    dailyPlanId?: boolean
    type?: boolean
    name?: boolean
    cost?: boolean
  }

  export type MealOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dailyPlanId" | "type" | "name" | "cost", ExtArgs["result"]["meal"]>
  export type MealInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyPlan?: boolean | DailyPlanDefaultArgs<ExtArgs>
  }
  export type MealIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyPlan?: boolean | DailyPlanDefaultArgs<ExtArgs>
  }
  export type MealIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyPlan?: boolean | DailyPlanDefaultArgs<ExtArgs>
  }

  export type $MealPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meal"
    objects: {
      dailyPlan: Prisma.$DailyPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dailyPlanId: string
      type: string
      name: string
      cost: number
    }, ExtArgs["result"]["meal"]>
    composites: {}
  }

  type MealGetPayload<S extends boolean | null | undefined | MealDefaultArgs> = $Result.GetResult<Prisma.$MealPayload, S>

  type MealCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealCountAggregateInputType | true
    }

  export interface MealDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meal'], meta: { name: 'Meal' } }
    /**
     * Find zero or one Meal that matches the filter.
     * @param {MealFindUniqueArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealFindUniqueArgs>(args: SelectSubset<T, MealFindUniqueArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealFindUniqueOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealFindUniqueOrThrowArgs>(args: SelectSubset<T, MealFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealFindFirstArgs>(args?: SelectSubset<T, MealFindFirstArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealFindFirstOrThrowArgs>(args?: SelectSubset<T, MealFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meals
     * const meals = await prisma.meal.findMany()
     * 
     * // Get first 10 Meals
     * const meals = await prisma.meal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealWithIdOnly = await prisma.meal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealFindManyArgs>(args?: SelectSubset<T, MealFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meal.
     * @param {MealCreateArgs} args - Arguments to create a Meal.
     * @example
     * // Create one Meal
     * const Meal = await prisma.meal.create({
     *   data: {
     *     // ... data to create a Meal
     *   }
     * })
     * 
     */
    create<T extends MealCreateArgs>(args: SelectSubset<T, MealCreateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meals.
     * @param {MealCreateManyArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealCreateManyArgs>(args?: SelectSubset<T, MealCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meals and returns the data saved in the database.
     * @param {MealCreateManyAndReturnArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealCreateManyAndReturnArgs>(args?: SelectSubset<T, MealCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meal.
     * @param {MealDeleteArgs} args - Arguments to delete one Meal.
     * @example
     * // Delete one Meal
     * const Meal = await prisma.meal.delete({
     *   where: {
     *     // ... filter to delete one Meal
     *   }
     * })
     * 
     */
    delete<T extends MealDeleteArgs>(args: SelectSubset<T, MealDeleteArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meal.
     * @param {MealUpdateArgs} args - Arguments to update one Meal.
     * @example
     * // Update one Meal
     * const meal = await prisma.meal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealUpdateArgs>(args: SelectSubset<T, MealUpdateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meals.
     * @param {MealDeleteManyArgs} args - Arguments to filter Meals to delete.
     * @example
     * // Delete a few Meals
     * const { count } = await prisma.meal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealDeleteManyArgs>(args?: SelectSubset<T, MealDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealUpdateManyArgs>(args: SelectSubset<T, MealUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals and returns the data updated in the database.
     * @param {MealUpdateManyAndReturnArgs} args - Arguments to update many Meals.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.updateManyAndReturn({
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
    updateManyAndReturn<T extends MealUpdateManyAndReturnArgs>(args: SelectSubset<T, MealUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meal.
     * @param {MealUpsertArgs} args - Arguments to update or create a Meal.
     * @example
     * // Update or create a Meal
     * const meal = await prisma.meal.upsert({
     *   create: {
     *     // ... data to create a Meal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meal we want to update
     *   }
     * })
     */
    upsert<T extends MealUpsertArgs>(args: SelectSubset<T, MealUpsertArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealCountArgs} args - Arguments to filter Meals to count.
     * @example
     * // Count the number of Meals
     * const count = await prisma.meal.count({
     *   where: {
     *     // ... the filter for the Meals we want to count
     *   }
     * })
    **/
    count<T extends MealCountArgs>(
      args?: Subset<T, MealCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MealAggregateArgs>(args: Subset<T, MealAggregateArgs>): Prisma.PrismaPromise<GetMealAggregateType<T>>

    /**
     * Group by Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealGroupByArgs} args - Group by arguments.
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
      T extends MealGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealGroupByArgs['orderBy'] }
        : { orderBy?: MealGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MealGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meal model
   */
  readonly fields: MealFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dailyPlan<T extends DailyPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DailyPlanDefaultArgs<ExtArgs>>): Prisma__DailyPlanClient<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Meal model
   */
  interface MealFieldRefs {
    readonly id: FieldRef<"Meal", 'String'>
    readonly dailyPlanId: FieldRef<"Meal", 'String'>
    readonly type: FieldRef<"Meal", 'String'>
    readonly name: FieldRef<"Meal", 'String'>
    readonly cost: FieldRef<"Meal", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Meal findUnique
   */
  export type MealFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findUniqueOrThrow
   */
  export type MealFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findFirst
   */
  export type MealFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findFirstOrThrow
   */
  export type MealFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findMany
   */
  export type MealFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meals to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal create
   */
  export type MealCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to create a Meal.
     */
    data: XOR<MealCreateInput, MealUncheckedCreateInput>
  }

  /**
   * Meal createMany
   */
  export type MealCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
  }

  /**
   * Meal createManyAndReturn
   */
  export type MealCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meal update
   */
  export type MealUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to update a Meal.
     */
    data: XOR<MealUpdateInput, MealUncheckedUpdateInput>
    /**
     * Choose, which Meal to update.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal updateMany
   */
  export type MealUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to update.
     */
    limit?: number
  }

  /**
   * Meal updateManyAndReturn
   */
  export type MealUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meal upsert
   */
  export type MealUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The filter to search for the Meal to update in case it exists.
     */
    where: MealWhereUniqueInput
    /**
     * In case the Meal found by the `where` argument doesn't exist, create a new Meal with this data.
     */
    create: XOR<MealCreateInput, MealUncheckedCreateInput>
    /**
     * In case the Meal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealUpdateInput, MealUncheckedUpdateInput>
  }

  /**
   * Meal delete
   */
  export type MealDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter which Meal to delete.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal deleteMany
   */
  export type MealDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meals to delete
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to delete.
     */
    limit?: number
  }

  /**
   * Meal without action
   */
  export type MealDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
  }


  /**
   * Model Accommodation
   */

  export type AggregateAccommodation = {
    _count: AccommodationCountAggregateOutputType | null
    _avg: AccommodationAvgAggregateOutputType | null
    _sum: AccommodationSumAggregateOutputType | null
    _min: AccommodationMinAggregateOutputType | null
    _max: AccommodationMaxAggregateOutputType | null
  }

  export type AccommodationAvgAggregateOutputType = {
    cost: number | null
  }

  export type AccommodationSumAggregateOutputType = {
    cost: number | null
  }

  export type AccommodationMinAggregateOutputType = {
    id: string | null
    dailyPlanId: string | null
    name: string | null
    type: string | null
    cost: number | null
  }

  export type AccommodationMaxAggregateOutputType = {
    id: string | null
    dailyPlanId: string | null
    name: string | null
    type: string | null
    cost: number | null
  }

  export type AccommodationCountAggregateOutputType = {
    id: number
    dailyPlanId: number
    name: number
    type: number
    cost: number
    _all: number
  }


  export type AccommodationAvgAggregateInputType = {
    cost?: true
  }

  export type AccommodationSumAggregateInputType = {
    cost?: true
  }

  export type AccommodationMinAggregateInputType = {
    id?: true
    dailyPlanId?: true
    name?: true
    type?: true
    cost?: true
  }

  export type AccommodationMaxAggregateInputType = {
    id?: true
    dailyPlanId?: true
    name?: true
    type?: true
    cost?: true
  }

  export type AccommodationCountAggregateInputType = {
    id?: true
    dailyPlanId?: true
    name?: true
    type?: true
    cost?: true
    _all?: true
  }

  export type AccommodationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accommodation to aggregate.
     */
    where?: AccommodationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accommodations to fetch.
     */
    orderBy?: AccommodationOrderByWithRelationInput | AccommodationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccommodationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accommodations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accommodations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accommodations
    **/
    _count?: true | AccommodationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccommodationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccommodationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccommodationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccommodationMaxAggregateInputType
  }

  export type GetAccommodationAggregateType<T extends AccommodationAggregateArgs> = {
        [P in keyof T & keyof AggregateAccommodation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccommodation[P]>
      : GetScalarType<T[P], AggregateAccommodation[P]>
  }




  export type AccommodationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccommodationWhereInput
    orderBy?: AccommodationOrderByWithAggregationInput | AccommodationOrderByWithAggregationInput[]
    by: AccommodationScalarFieldEnum[] | AccommodationScalarFieldEnum
    having?: AccommodationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccommodationCountAggregateInputType | true
    _avg?: AccommodationAvgAggregateInputType
    _sum?: AccommodationSumAggregateInputType
    _min?: AccommodationMinAggregateInputType
    _max?: AccommodationMaxAggregateInputType
  }

  export type AccommodationGroupByOutputType = {
    id: string
    dailyPlanId: string
    name: string
    type: string
    cost: number
    _count: AccommodationCountAggregateOutputType | null
    _avg: AccommodationAvgAggregateOutputType | null
    _sum: AccommodationSumAggregateOutputType | null
    _min: AccommodationMinAggregateOutputType | null
    _max: AccommodationMaxAggregateOutputType | null
  }

  type GetAccommodationGroupByPayload<T extends AccommodationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccommodationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccommodationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccommodationGroupByOutputType[P]>
            : GetScalarType<T[P], AccommodationGroupByOutputType[P]>
        }
      >
    >


  export type AccommodationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyPlanId?: boolean
    name?: boolean
    type?: boolean
    cost?: boolean
    dailyPlan?: boolean | DailyPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accommodation"]>

  export type AccommodationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyPlanId?: boolean
    name?: boolean
    type?: boolean
    cost?: boolean
    dailyPlan?: boolean | DailyPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accommodation"]>

  export type AccommodationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyPlanId?: boolean
    name?: boolean
    type?: boolean
    cost?: boolean
    dailyPlan?: boolean | DailyPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accommodation"]>

  export type AccommodationSelectScalar = {
    id?: boolean
    dailyPlanId?: boolean
    name?: boolean
    type?: boolean
    cost?: boolean
  }

  export type AccommodationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dailyPlanId" | "name" | "type" | "cost", ExtArgs["result"]["accommodation"]>
  export type AccommodationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyPlan?: boolean | DailyPlanDefaultArgs<ExtArgs>
  }
  export type AccommodationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyPlan?: boolean | DailyPlanDefaultArgs<ExtArgs>
  }
  export type AccommodationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyPlan?: boolean | DailyPlanDefaultArgs<ExtArgs>
  }

  export type $AccommodationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Accommodation"
    objects: {
      dailyPlan: Prisma.$DailyPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dailyPlanId: string
      name: string
      type: string
      cost: number
    }, ExtArgs["result"]["accommodation"]>
    composites: {}
  }

  type AccommodationGetPayload<S extends boolean | null | undefined | AccommodationDefaultArgs> = $Result.GetResult<Prisma.$AccommodationPayload, S>

  type AccommodationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccommodationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccommodationCountAggregateInputType | true
    }

  export interface AccommodationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Accommodation'], meta: { name: 'Accommodation' } }
    /**
     * Find zero or one Accommodation that matches the filter.
     * @param {AccommodationFindUniqueArgs} args - Arguments to find a Accommodation
     * @example
     * // Get one Accommodation
     * const accommodation = await prisma.accommodation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccommodationFindUniqueArgs>(args: SelectSubset<T, AccommodationFindUniqueArgs<ExtArgs>>): Prisma__AccommodationClient<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Accommodation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccommodationFindUniqueOrThrowArgs} args - Arguments to find a Accommodation
     * @example
     * // Get one Accommodation
     * const accommodation = await prisma.accommodation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccommodationFindUniqueOrThrowArgs>(args: SelectSubset<T, AccommodationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccommodationClient<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accommodation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccommodationFindFirstArgs} args - Arguments to find a Accommodation
     * @example
     * // Get one Accommodation
     * const accommodation = await prisma.accommodation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccommodationFindFirstArgs>(args?: SelectSubset<T, AccommodationFindFirstArgs<ExtArgs>>): Prisma__AccommodationClient<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accommodation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccommodationFindFirstOrThrowArgs} args - Arguments to find a Accommodation
     * @example
     * // Get one Accommodation
     * const accommodation = await prisma.accommodation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccommodationFindFirstOrThrowArgs>(args?: SelectSubset<T, AccommodationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccommodationClient<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accommodations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccommodationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accommodations
     * const accommodations = await prisma.accommodation.findMany()
     * 
     * // Get first 10 Accommodations
     * const accommodations = await prisma.accommodation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accommodationWithIdOnly = await prisma.accommodation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccommodationFindManyArgs>(args?: SelectSubset<T, AccommodationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Accommodation.
     * @param {AccommodationCreateArgs} args - Arguments to create a Accommodation.
     * @example
     * // Create one Accommodation
     * const Accommodation = await prisma.accommodation.create({
     *   data: {
     *     // ... data to create a Accommodation
     *   }
     * })
     * 
     */
    create<T extends AccommodationCreateArgs>(args: SelectSubset<T, AccommodationCreateArgs<ExtArgs>>): Prisma__AccommodationClient<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accommodations.
     * @param {AccommodationCreateManyArgs} args - Arguments to create many Accommodations.
     * @example
     * // Create many Accommodations
     * const accommodation = await prisma.accommodation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccommodationCreateManyArgs>(args?: SelectSubset<T, AccommodationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accommodations and returns the data saved in the database.
     * @param {AccommodationCreateManyAndReturnArgs} args - Arguments to create many Accommodations.
     * @example
     * // Create many Accommodations
     * const accommodation = await prisma.accommodation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accommodations and only return the `id`
     * const accommodationWithIdOnly = await prisma.accommodation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccommodationCreateManyAndReturnArgs>(args?: SelectSubset<T, AccommodationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Accommodation.
     * @param {AccommodationDeleteArgs} args - Arguments to delete one Accommodation.
     * @example
     * // Delete one Accommodation
     * const Accommodation = await prisma.accommodation.delete({
     *   where: {
     *     // ... filter to delete one Accommodation
     *   }
     * })
     * 
     */
    delete<T extends AccommodationDeleteArgs>(args: SelectSubset<T, AccommodationDeleteArgs<ExtArgs>>): Prisma__AccommodationClient<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Accommodation.
     * @param {AccommodationUpdateArgs} args - Arguments to update one Accommodation.
     * @example
     * // Update one Accommodation
     * const accommodation = await prisma.accommodation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccommodationUpdateArgs>(args: SelectSubset<T, AccommodationUpdateArgs<ExtArgs>>): Prisma__AccommodationClient<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accommodations.
     * @param {AccommodationDeleteManyArgs} args - Arguments to filter Accommodations to delete.
     * @example
     * // Delete a few Accommodations
     * const { count } = await prisma.accommodation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccommodationDeleteManyArgs>(args?: SelectSubset<T, AccommodationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accommodations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccommodationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accommodations
     * const accommodation = await prisma.accommodation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccommodationUpdateManyArgs>(args: SelectSubset<T, AccommodationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accommodations and returns the data updated in the database.
     * @param {AccommodationUpdateManyAndReturnArgs} args - Arguments to update many Accommodations.
     * @example
     * // Update many Accommodations
     * const accommodation = await prisma.accommodation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accommodations and only return the `id`
     * const accommodationWithIdOnly = await prisma.accommodation.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccommodationUpdateManyAndReturnArgs>(args: SelectSubset<T, AccommodationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Accommodation.
     * @param {AccommodationUpsertArgs} args - Arguments to update or create a Accommodation.
     * @example
     * // Update or create a Accommodation
     * const accommodation = await prisma.accommodation.upsert({
     *   create: {
     *     // ... data to create a Accommodation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accommodation we want to update
     *   }
     * })
     */
    upsert<T extends AccommodationUpsertArgs>(args: SelectSubset<T, AccommodationUpsertArgs<ExtArgs>>): Prisma__AccommodationClient<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accommodations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccommodationCountArgs} args - Arguments to filter Accommodations to count.
     * @example
     * // Count the number of Accommodations
     * const count = await prisma.accommodation.count({
     *   where: {
     *     // ... the filter for the Accommodations we want to count
     *   }
     * })
    **/
    count<T extends AccommodationCountArgs>(
      args?: Subset<T, AccommodationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccommodationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accommodation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccommodationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccommodationAggregateArgs>(args: Subset<T, AccommodationAggregateArgs>): Prisma.PrismaPromise<GetAccommodationAggregateType<T>>

    /**
     * Group by Accommodation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccommodationGroupByArgs} args - Group by arguments.
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
      T extends AccommodationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccommodationGroupByArgs['orderBy'] }
        : { orderBy?: AccommodationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccommodationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccommodationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Accommodation model
   */
  readonly fields: AccommodationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Accommodation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccommodationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dailyPlan<T extends DailyPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DailyPlanDefaultArgs<ExtArgs>>): Prisma__DailyPlanClient<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Accommodation model
   */
  interface AccommodationFieldRefs {
    readonly id: FieldRef<"Accommodation", 'String'>
    readonly dailyPlanId: FieldRef<"Accommodation", 'String'>
    readonly name: FieldRef<"Accommodation", 'String'>
    readonly type: FieldRef<"Accommodation", 'String'>
    readonly cost: FieldRef<"Accommodation", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Accommodation findUnique
   */
  export type AccommodationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * Filter, which Accommodation to fetch.
     */
    where: AccommodationWhereUniqueInput
  }

  /**
   * Accommodation findUniqueOrThrow
   */
  export type AccommodationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * Filter, which Accommodation to fetch.
     */
    where: AccommodationWhereUniqueInput
  }

  /**
   * Accommodation findFirst
   */
  export type AccommodationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * Filter, which Accommodation to fetch.
     */
    where?: AccommodationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accommodations to fetch.
     */
    orderBy?: AccommodationOrderByWithRelationInput | AccommodationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accommodations.
     */
    cursor?: AccommodationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accommodations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accommodations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accommodations.
     */
    distinct?: AccommodationScalarFieldEnum | AccommodationScalarFieldEnum[]
  }

  /**
   * Accommodation findFirstOrThrow
   */
  export type AccommodationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * Filter, which Accommodation to fetch.
     */
    where?: AccommodationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accommodations to fetch.
     */
    orderBy?: AccommodationOrderByWithRelationInput | AccommodationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accommodations.
     */
    cursor?: AccommodationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accommodations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accommodations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accommodations.
     */
    distinct?: AccommodationScalarFieldEnum | AccommodationScalarFieldEnum[]
  }

  /**
   * Accommodation findMany
   */
  export type AccommodationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * Filter, which Accommodations to fetch.
     */
    where?: AccommodationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accommodations to fetch.
     */
    orderBy?: AccommodationOrderByWithRelationInput | AccommodationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accommodations.
     */
    cursor?: AccommodationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accommodations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accommodations.
     */
    skip?: number
    distinct?: AccommodationScalarFieldEnum | AccommodationScalarFieldEnum[]
  }

  /**
   * Accommodation create
   */
  export type AccommodationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * The data needed to create a Accommodation.
     */
    data: XOR<AccommodationCreateInput, AccommodationUncheckedCreateInput>
  }

  /**
   * Accommodation createMany
   */
  export type AccommodationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accommodations.
     */
    data: AccommodationCreateManyInput | AccommodationCreateManyInput[]
  }

  /**
   * Accommodation createManyAndReturn
   */
  export type AccommodationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * The data used to create many Accommodations.
     */
    data: AccommodationCreateManyInput | AccommodationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Accommodation update
   */
  export type AccommodationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * The data needed to update a Accommodation.
     */
    data: XOR<AccommodationUpdateInput, AccommodationUncheckedUpdateInput>
    /**
     * Choose, which Accommodation to update.
     */
    where: AccommodationWhereUniqueInput
  }

  /**
   * Accommodation updateMany
   */
  export type AccommodationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accommodations.
     */
    data: XOR<AccommodationUpdateManyMutationInput, AccommodationUncheckedUpdateManyInput>
    /**
     * Filter which Accommodations to update
     */
    where?: AccommodationWhereInput
    /**
     * Limit how many Accommodations to update.
     */
    limit?: number
  }

  /**
   * Accommodation updateManyAndReturn
   */
  export type AccommodationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * The data used to update Accommodations.
     */
    data: XOR<AccommodationUpdateManyMutationInput, AccommodationUncheckedUpdateManyInput>
    /**
     * Filter which Accommodations to update
     */
    where?: AccommodationWhereInput
    /**
     * Limit how many Accommodations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Accommodation upsert
   */
  export type AccommodationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * The filter to search for the Accommodation to update in case it exists.
     */
    where: AccommodationWhereUniqueInput
    /**
     * In case the Accommodation found by the `where` argument doesn't exist, create a new Accommodation with this data.
     */
    create: XOR<AccommodationCreateInput, AccommodationUncheckedCreateInput>
    /**
     * In case the Accommodation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccommodationUpdateInput, AccommodationUncheckedUpdateInput>
  }

  /**
   * Accommodation delete
   */
  export type AccommodationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * Filter which Accommodation to delete.
     */
    where: AccommodationWhereUniqueInput
  }

  /**
   * Accommodation deleteMany
   */
  export type AccommodationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accommodations to delete
     */
    where?: AccommodationWhereInput
    /**
     * Limit how many Accommodations to delete.
     */
    limit?: number
  }

  /**
   * Accommodation without action
   */
  export type AccommodationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
  }


  /**
   * Model Transportation
   */

  export type AggregateTransportation = {
    _count: TransportationCountAggregateOutputType | null
    _avg: TransportationAvgAggregateOutputType | null
    _sum: TransportationSumAggregateOutputType | null
    _min: TransportationMinAggregateOutputType | null
    _max: TransportationMaxAggregateOutputType | null
  }

  export type TransportationAvgAggregateOutputType = {
    cost: number | null
    duration: number | null
  }

  export type TransportationSumAggregateOutputType = {
    cost: number | null
    duration: number | null
  }

  export type TransportationMinAggregateOutputType = {
    id: string | null
    dailyPlanId: string | null
    mode: string | null
    from: string | null
    to: string | null
    cost: number | null
    duration: number | null
  }

  export type TransportationMaxAggregateOutputType = {
    id: string | null
    dailyPlanId: string | null
    mode: string | null
    from: string | null
    to: string | null
    cost: number | null
    duration: number | null
  }

  export type TransportationCountAggregateOutputType = {
    id: number
    dailyPlanId: number
    mode: number
    from: number
    to: number
    cost: number
    duration: number
    _all: number
  }


  export type TransportationAvgAggregateInputType = {
    cost?: true
    duration?: true
  }

  export type TransportationSumAggregateInputType = {
    cost?: true
    duration?: true
  }

  export type TransportationMinAggregateInputType = {
    id?: true
    dailyPlanId?: true
    mode?: true
    from?: true
    to?: true
    cost?: true
    duration?: true
  }

  export type TransportationMaxAggregateInputType = {
    id?: true
    dailyPlanId?: true
    mode?: true
    from?: true
    to?: true
    cost?: true
    duration?: true
  }

  export type TransportationCountAggregateInputType = {
    id?: true
    dailyPlanId?: true
    mode?: true
    from?: true
    to?: true
    cost?: true
    duration?: true
    _all?: true
  }

  export type TransportationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transportation to aggregate.
     */
    where?: TransportationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transportation to fetch.
     */
    orderBy?: TransportationOrderByWithRelationInput | TransportationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransportationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transportation from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transportation.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transportation
    **/
    _count?: true | TransportationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransportationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransportationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransportationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransportationMaxAggregateInputType
  }

  export type GetTransportationAggregateType<T extends TransportationAggregateArgs> = {
        [P in keyof T & keyof AggregateTransportation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransportation[P]>
      : GetScalarType<T[P], AggregateTransportation[P]>
  }




  export type TransportationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransportationWhereInput
    orderBy?: TransportationOrderByWithAggregationInput | TransportationOrderByWithAggregationInput[]
    by: TransportationScalarFieldEnum[] | TransportationScalarFieldEnum
    having?: TransportationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransportationCountAggregateInputType | true
    _avg?: TransportationAvgAggregateInputType
    _sum?: TransportationSumAggregateInputType
    _min?: TransportationMinAggregateInputType
    _max?: TransportationMaxAggregateInputType
  }

  export type TransportationGroupByOutputType = {
    id: string
    dailyPlanId: string
    mode: string
    from: string
    to: string
    cost: number
    duration: number
    _count: TransportationCountAggregateOutputType | null
    _avg: TransportationAvgAggregateOutputType | null
    _sum: TransportationSumAggregateOutputType | null
    _min: TransportationMinAggregateOutputType | null
    _max: TransportationMaxAggregateOutputType | null
  }

  type GetTransportationGroupByPayload<T extends TransportationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransportationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransportationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransportationGroupByOutputType[P]>
            : GetScalarType<T[P], TransportationGroupByOutputType[P]>
        }
      >
    >


  export type TransportationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyPlanId?: boolean
    mode?: boolean
    from?: boolean
    to?: boolean
    cost?: boolean
    duration?: boolean
    dailyPlan?: boolean | DailyPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transportation"]>

  export type TransportationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyPlanId?: boolean
    mode?: boolean
    from?: boolean
    to?: boolean
    cost?: boolean
    duration?: boolean
    dailyPlan?: boolean | DailyPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transportation"]>

  export type TransportationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dailyPlanId?: boolean
    mode?: boolean
    from?: boolean
    to?: boolean
    cost?: boolean
    duration?: boolean
    dailyPlan?: boolean | DailyPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transportation"]>

  export type TransportationSelectScalar = {
    id?: boolean
    dailyPlanId?: boolean
    mode?: boolean
    from?: boolean
    to?: boolean
    cost?: boolean
    duration?: boolean
  }

  export type TransportationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dailyPlanId" | "mode" | "from" | "to" | "cost" | "duration", ExtArgs["result"]["transportation"]>
  export type TransportationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyPlan?: boolean | DailyPlanDefaultArgs<ExtArgs>
  }
  export type TransportationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyPlan?: boolean | DailyPlanDefaultArgs<ExtArgs>
  }
  export type TransportationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyPlan?: boolean | DailyPlanDefaultArgs<ExtArgs>
  }

  export type $TransportationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transportation"
    objects: {
      dailyPlan: Prisma.$DailyPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dailyPlanId: string
      mode: string
      from: string
      to: string
      cost: number
      duration: number
    }, ExtArgs["result"]["transportation"]>
    composites: {}
  }

  type TransportationGetPayload<S extends boolean | null | undefined | TransportationDefaultArgs> = $Result.GetResult<Prisma.$TransportationPayload, S>

  type TransportationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransportationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransportationCountAggregateInputType | true
    }

  export interface TransportationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transportation'], meta: { name: 'Transportation' } }
    /**
     * Find zero or one Transportation that matches the filter.
     * @param {TransportationFindUniqueArgs} args - Arguments to find a Transportation
     * @example
     * // Get one Transportation
     * const transportation = await prisma.transportation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransportationFindUniqueArgs>(args: SelectSubset<T, TransportationFindUniqueArgs<ExtArgs>>): Prisma__TransportationClient<$Result.GetResult<Prisma.$TransportationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transportation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransportationFindUniqueOrThrowArgs} args - Arguments to find a Transportation
     * @example
     * // Get one Transportation
     * const transportation = await prisma.transportation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransportationFindUniqueOrThrowArgs>(args: SelectSubset<T, TransportationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransportationClient<$Result.GetResult<Prisma.$TransportationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transportation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportationFindFirstArgs} args - Arguments to find a Transportation
     * @example
     * // Get one Transportation
     * const transportation = await prisma.transportation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransportationFindFirstArgs>(args?: SelectSubset<T, TransportationFindFirstArgs<ExtArgs>>): Prisma__TransportationClient<$Result.GetResult<Prisma.$TransportationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transportation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportationFindFirstOrThrowArgs} args - Arguments to find a Transportation
     * @example
     * // Get one Transportation
     * const transportation = await prisma.transportation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransportationFindFirstOrThrowArgs>(args?: SelectSubset<T, TransportationFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransportationClient<$Result.GetResult<Prisma.$TransportationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transportation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transportation
     * const transportation = await prisma.transportation.findMany()
     * 
     * // Get first 10 Transportation
     * const transportation = await prisma.transportation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transportationWithIdOnly = await prisma.transportation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransportationFindManyArgs>(args?: SelectSubset<T, TransportationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transportation.
     * @param {TransportationCreateArgs} args - Arguments to create a Transportation.
     * @example
     * // Create one Transportation
     * const Transportation = await prisma.transportation.create({
     *   data: {
     *     // ... data to create a Transportation
     *   }
     * })
     * 
     */
    create<T extends TransportationCreateArgs>(args: SelectSubset<T, TransportationCreateArgs<ExtArgs>>): Prisma__TransportationClient<$Result.GetResult<Prisma.$TransportationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transportation.
     * @param {TransportationCreateManyArgs} args - Arguments to create many Transportation.
     * @example
     * // Create many Transportation
     * const transportation = await prisma.transportation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransportationCreateManyArgs>(args?: SelectSubset<T, TransportationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transportation and returns the data saved in the database.
     * @param {TransportationCreateManyAndReturnArgs} args - Arguments to create many Transportation.
     * @example
     * // Create many Transportation
     * const transportation = await prisma.transportation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transportation and only return the `id`
     * const transportationWithIdOnly = await prisma.transportation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransportationCreateManyAndReturnArgs>(args?: SelectSubset<T, TransportationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transportation.
     * @param {TransportationDeleteArgs} args - Arguments to delete one Transportation.
     * @example
     * // Delete one Transportation
     * const Transportation = await prisma.transportation.delete({
     *   where: {
     *     // ... filter to delete one Transportation
     *   }
     * })
     * 
     */
    delete<T extends TransportationDeleteArgs>(args: SelectSubset<T, TransportationDeleteArgs<ExtArgs>>): Prisma__TransportationClient<$Result.GetResult<Prisma.$TransportationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transportation.
     * @param {TransportationUpdateArgs} args - Arguments to update one Transportation.
     * @example
     * // Update one Transportation
     * const transportation = await prisma.transportation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransportationUpdateArgs>(args: SelectSubset<T, TransportationUpdateArgs<ExtArgs>>): Prisma__TransportationClient<$Result.GetResult<Prisma.$TransportationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transportation.
     * @param {TransportationDeleteManyArgs} args - Arguments to filter Transportation to delete.
     * @example
     * // Delete a few Transportation
     * const { count } = await prisma.transportation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransportationDeleteManyArgs>(args?: SelectSubset<T, TransportationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transportation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transportation
     * const transportation = await prisma.transportation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransportationUpdateManyArgs>(args: SelectSubset<T, TransportationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transportation and returns the data updated in the database.
     * @param {TransportationUpdateManyAndReturnArgs} args - Arguments to update many Transportation.
     * @example
     * // Update many Transportation
     * const transportation = await prisma.transportation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transportation and only return the `id`
     * const transportationWithIdOnly = await prisma.transportation.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransportationUpdateManyAndReturnArgs>(args: SelectSubset<T, TransportationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transportation.
     * @param {TransportationUpsertArgs} args - Arguments to update or create a Transportation.
     * @example
     * // Update or create a Transportation
     * const transportation = await prisma.transportation.upsert({
     *   create: {
     *     // ... data to create a Transportation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transportation we want to update
     *   }
     * })
     */
    upsert<T extends TransportationUpsertArgs>(args: SelectSubset<T, TransportationUpsertArgs<ExtArgs>>): Prisma__TransportationClient<$Result.GetResult<Prisma.$TransportationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transportation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportationCountArgs} args - Arguments to filter Transportation to count.
     * @example
     * // Count the number of Transportation
     * const count = await prisma.transportation.count({
     *   where: {
     *     // ... the filter for the Transportation we want to count
     *   }
     * })
    **/
    count<T extends TransportationCountArgs>(
      args?: Subset<T, TransportationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransportationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transportation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransportationAggregateArgs>(args: Subset<T, TransportationAggregateArgs>): Prisma.PrismaPromise<GetTransportationAggregateType<T>>

    /**
     * Group by Transportation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportationGroupByArgs} args - Group by arguments.
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
      T extends TransportationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransportationGroupByArgs['orderBy'] }
        : { orderBy?: TransportationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransportationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransportationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transportation model
   */
  readonly fields: TransportationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transportation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransportationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dailyPlan<T extends DailyPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DailyPlanDefaultArgs<ExtArgs>>): Prisma__DailyPlanClient<$Result.GetResult<Prisma.$DailyPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transportation model
   */
  interface TransportationFieldRefs {
    readonly id: FieldRef<"Transportation", 'String'>
    readonly dailyPlanId: FieldRef<"Transportation", 'String'>
    readonly mode: FieldRef<"Transportation", 'String'>
    readonly from: FieldRef<"Transportation", 'String'>
    readonly to: FieldRef<"Transportation", 'String'>
    readonly cost: FieldRef<"Transportation", 'Float'>
    readonly duration: FieldRef<"Transportation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Transportation findUnique
   */
  export type TransportationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportation
     */
    select?: TransportationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportation
     */
    omit?: TransportationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportationInclude<ExtArgs> | null
    /**
     * Filter, which Transportation to fetch.
     */
    where: TransportationWhereUniqueInput
  }

  /**
   * Transportation findUniqueOrThrow
   */
  export type TransportationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportation
     */
    select?: TransportationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportation
     */
    omit?: TransportationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportationInclude<ExtArgs> | null
    /**
     * Filter, which Transportation to fetch.
     */
    where: TransportationWhereUniqueInput
  }

  /**
   * Transportation findFirst
   */
  export type TransportationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportation
     */
    select?: TransportationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportation
     */
    omit?: TransportationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportationInclude<ExtArgs> | null
    /**
     * Filter, which Transportation to fetch.
     */
    where?: TransportationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transportation to fetch.
     */
    orderBy?: TransportationOrderByWithRelationInput | TransportationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transportation.
     */
    cursor?: TransportationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transportation from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transportation.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transportation.
     */
    distinct?: TransportationScalarFieldEnum | TransportationScalarFieldEnum[]
  }

  /**
   * Transportation findFirstOrThrow
   */
  export type TransportationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportation
     */
    select?: TransportationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportation
     */
    omit?: TransportationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportationInclude<ExtArgs> | null
    /**
     * Filter, which Transportation to fetch.
     */
    where?: TransportationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transportation to fetch.
     */
    orderBy?: TransportationOrderByWithRelationInput | TransportationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transportation.
     */
    cursor?: TransportationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transportation from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transportation.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transportation.
     */
    distinct?: TransportationScalarFieldEnum | TransportationScalarFieldEnum[]
  }

  /**
   * Transportation findMany
   */
  export type TransportationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportation
     */
    select?: TransportationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportation
     */
    omit?: TransportationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportationInclude<ExtArgs> | null
    /**
     * Filter, which Transportation to fetch.
     */
    where?: TransportationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transportation to fetch.
     */
    orderBy?: TransportationOrderByWithRelationInput | TransportationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transportation.
     */
    cursor?: TransportationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transportation from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transportation.
     */
    skip?: number
    distinct?: TransportationScalarFieldEnum | TransportationScalarFieldEnum[]
  }

  /**
   * Transportation create
   */
  export type TransportationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportation
     */
    select?: TransportationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportation
     */
    omit?: TransportationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportationInclude<ExtArgs> | null
    /**
     * The data needed to create a Transportation.
     */
    data: XOR<TransportationCreateInput, TransportationUncheckedCreateInput>
  }

  /**
   * Transportation createMany
   */
  export type TransportationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transportation.
     */
    data: TransportationCreateManyInput | TransportationCreateManyInput[]
  }

  /**
   * Transportation createManyAndReturn
   */
  export type TransportationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportation
     */
    select?: TransportationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transportation
     */
    omit?: TransportationOmit<ExtArgs> | null
    /**
     * The data used to create many Transportation.
     */
    data: TransportationCreateManyInput | TransportationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transportation update
   */
  export type TransportationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportation
     */
    select?: TransportationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportation
     */
    omit?: TransportationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportationInclude<ExtArgs> | null
    /**
     * The data needed to update a Transportation.
     */
    data: XOR<TransportationUpdateInput, TransportationUncheckedUpdateInput>
    /**
     * Choose, which Transportation to update.
     */
    where: TransportationWhereUniqueInput
  }

  /**
   * Transportation updateMany
   */
  export type TransportationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transportation.
     */
    data: XOR<TransportationUpdateManyMutationInput, TransportationUncheckedUpdateManyInput>
    /**
     * Filter which Transportation to update
     */
    where?: TransportationWhereInput
    /**
     * Limit how many Transportation to update.
     */
    limit?: number
  }

  /**
   * Transportation updateManyAndReturn
   */
  export type TransportationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportation
     */
    select?: TransportationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transportation
     */
    omit?: TransportationOmit<ExtArgs> | null
    /**
     * The data used to update Transportation.
     */
    data: XOR<TransportationUpdateManyMutationInput, TransportationUncheckedUpdateManyInput>
    /**
     * Filter which Transportation to update
     */
    where?: TransportationWhereInput
    /**
     * Limit how many Transportation to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transportation upsert
   */
  export type TransportationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportation
     */
    select?: TransportationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportation
     */
    omit?: TransportationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportationInclude<ExtArgs> | null
    /**
     * The filter to search for the Transportation to update in case it exists.
     */
    where: TransportationWhereUniqueInput
    /**
     * In case the Transportation found by the `where` argument doesn't exist, create a new Transportation with this data.
     */
    create: XOR<TransportationCreateInput, TransportationUncheckedCreateInput>
    /**
     * In case the Transportation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransportationUpdateInput, TransportationUncheckedUpdateInput>
  }

  /**
   * Transportation delete
   */
  export type TransportationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportation
     */
    select?: TransportationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportation
     */
    omit?: TransportationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportationInclude<ExtArgs> | null
    /**
     * Filter which Transportation to delete.
     */
    where: TransportationWhereUniqueInput
  }

  /**
   * Transportation deleteMany
   */
  export type TransportationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transportation to delete
     */
    where?: TransportationWhereInput
    /**
     * Limit how many Transportation to delete.
     */
    limit?: number
  }

  /**
   * Transportation without action
   */
  export type TransportationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transportation
     */
    select?: TransportationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transportation
     */
    omit?: TransportationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TripScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    totalBudget: 'totalBudget',
    currency: 'currency',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const DestinationScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    city: 'city',
    duration: 'duration',
    order: 'order'
  };

  export type DestinationScalarFieldEnum = (typeof DestinationScalarFieldEnum)[keyof typeof DestinationScalarFieldEnum]


  export const TravelModeScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    mode: 'mode'
  };

  export type TravelModeScalarFieldEnum = (typeof TravelModeScalarFieldEnum)[keyof typeof TravelModeScalarFieldEnum]


  export const TripPreferenceScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    adults: 'adults',
    children: 'children',
    accommodationType: 'accommodationType',
    mealPlanning: 'mealPlanning',
    activityPreferences: 'activityPreferences'
  };

  export type TripPreferenceScalarFieldEnum = (typeof TripPreferenceScalarFieldEnum)[keyof typeof TripPreferenceScalarFieldEnum]


  export const ItineraryScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    totalCost: 'totalCost',
    accommodationCost: 'accommodationCost',
    transportationCost: 'transportationCost',
    activitiesCost: 'activitiesCost',
    mealsCost: 'mealsCost',
    otherCost: 'otherCost'
  };

  export type ItineraryScalarFieldEnum = (typeof ItineraryScalarFieldEnum)[keyof typeof ItineraryScalarFieldEnum]


  export const DailyPlanScalarFieldEnum: {
    id: 'id',
    itineraryId: 'itineraryId',
    destinationId: 'destinationId',
    date: 'date'
  };

  export type DailyPlanScalarFieldEnum = (typeof DailyPlanScalarFieldEnum)[keyof typeof DailyPlanScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    dailyPlanId: 'dailyPlanId',
    name: 'name',
    duration: 'duration',
    cost: 'cost'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const MealScalarFieldEnum: {
    id: 'id',
    dailyPlanId: 'dailyPlanId',
    type: 'type',
    name: 'name',
    cost: 'cost'
  };

  export type MealScalarFieldEnum = (typeof MealScalarFieldEnum)[keyof typeof MealScalarFieldEnum]


  export const AccommodationScalarFieldEnum: {
    id: 'id',
    dailyPlanId: 'dailyPlanId',
    name: 'name',
    type: 'type',
    cost: 'cost'
  };

  export type AccommodationScalarFieldEnum = (typeof AccommodationScalarFieldEnum)[keyof typeof AccommodationScalarFieldEnum]


  export const TransportationScalarFieldEnum: {
    id: 'id',
    dailyPlanId: 'dailyPlanId',
    mode: 'mode',
    from: 'from',
    to: 'to',
    cost: 'cost',
    duration: 'duration'
  };

  export type TransportationScalarFieldEnum = (typeof TransportationScalarFieldEnum)[keyof typeof TransportationScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    trips?: TripListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trips?: TripOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    trips?: TripListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TripWhereInput = {
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    id?: StringFilter<"Trip"> | string
    userId?: StringFilter<"Trip"> | string
    title?: StringFilter<"Trip"> | string
    totalBudget?: FloatFilter<"Trip"> | number
    currency?: StringFilter<"Trip"> | string
    startDate?: DateTimeFilter<"Trip"> | Date | string
    endDate?: DateTimeFilter<"Trip"> | Date | string
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    destinations?: DestinationListRelationFilter
    travelModes?: TravelModeListRelationFilter
    preferences?: XOR<TripPreferenceNullableScalarRelationFilter, TripPreferenceWhereInput> | null
    itinerary?: XOR<ItineraryNullableScalarRelationFilter, ItineraryWhereInput> | null
  }

  export type TripOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    totalBudget?: SortOrder
    currency?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    destinations?: DestinationOrderByRelationAggregateInput
    travelModes?: TravelModeOrderByRelationAggregateInput
    preferences?: TripPreferenceOrderByWithRelationInput
    itinerary?: ItineraryOrderByWithRelationInput
  }

  export type TripWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    userId?: StringFilter<"Trip"> | string
    title?: StringFilter<"Trip"> | string
    totalBudget?: FloatFilter<"Trip"> | number
    currency?: StringFilter<"Trip"> | string
    startDate?: DateTimeFilter<"Trip"> | Date | string
    endDate?: DateTimeFilter<"Trip"> | Date | string
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    destinations?: DestinationListRelationFilter
    travelModes?: TravelModeListRelationFilter
    preferences?: XOR<TripPreferenceNullableScalarRelationFilter, TripPreferenceWhereInput> | null
    itinerary?: XOR<ItineraryNullableScalarRelationFilter, ItineraryWhereInput> | null
  }, "id">

  export type TripOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    totalBudget?: SortOrder
    currency?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TripCountOrderByAggregateInput
    _avg?: TripAvgOrderByAggregateInput
    _max?: TripMaxOrderByAggregateInput
    _min?: TripMinOrderByAggregateInput
    _sum?: TripSumOrderByAggregateInput
  }

  export type TripScalarWhereWithAggregatesInput = {
    AND?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    OR?: TripScalarWhereWithAggregatesInput[]
    NOT?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trip"> | string
    userId?: StringWithAggregatesFilter<"Trip"> | string
    title?: StringWithAggregatesFilter<"Trip"> | string
    totalBudget?: FloatWithAggregatesFilter<"Trip"> | number
    currency?: StringWithAggregatesFilter<"Trip"> | string
    startDate?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
  }

  export type DestinationWhereInput = {
    AND?: DestinationWhereInput | DestinationWhereInput[]
    OR?: DestinationWhereInput[]
    NOT?: DestinationWhereInput | DestinationWhereInput[]
    id?: StringFilter<"Destination"> | string
    tripId?: StringFilter<"Destination"> | string
    city?: StringFilter<"Destination"> | string
    duration?: IntFilter<"Destination"> | number
    order?: IntFilter<"Destination"> | number
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    dailyPlans?: DailyPlanListRelationFilter
  }

  export type DestinationOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    city?: SortOrder
    duration?: SortOrder
    order?: SortOrder
    trip?: TripOrderByWithRelationInput
    dailyPlans?: DailyPlanOrderByRelationAggregateInput
  }

  export type DestinationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DestinationWhereInput | DestinationWhereInput[]
    OR?: DestinationWhereInput[]
    NOT?: DestinationWhereInput | DestinationWhereInput[]
    tripId?: StringFilter<"Destination"> | string
    city?: StringFilter<"Destination"> | string
    duration?: IntFilter<"Destination"> | number
    order?: IntFilter<"Destination"> | number
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    dailyPlans?: DailyPlanListRelationFilter
  }, "id">

  export type DestinationOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    city?: SortOrder
    duration?: SortOrder
    order?: SortOrder
    _count?: DestinationCountOrderByAggregateInput
    _avg?: DestinationAvgOrderByAggregateInput
    _max?: DestinationMaxOrderByAggregateInput
    _min?: DestinationMinOrderByAggregateInput
    _sum?: DestinationSumOrderByAggregateInput
  }

  export type DestinationScalarWhereWithAggregatesInput = {
    AND?: DestinationScalarWhereWithAggregatesInput | DestinationScalarWhereWithAggregatesInput[]
    OR?: DestinationScalarWhereWithAggregatesInput[]
    NOT?: DestinationScalarWhereWithAggregatesInput | DestinationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Destination"> | string
    tripId?: StringWithAggregatesFilter<"Destination"> | string
    city?: StringWithAggregatesFilter<"Destination"> | string
    duration?: IntWithAggregatesFilter<"Destination"> | number
    order?: IntWithAggregatesFilter<"Destination"> | number
  }

  export type TravelModeWhereInput = {
    AND?: TravelModeWhereInput | TravelModeWhereInput[]
    OR?: TravelModeWhereInput[]
    NOT?: TravelModeWhereInput | TravelModeWhereInput[]
    id?: StringFilter<"TravelMode"> | string
    tripId?: StringFilter<"TravelMode"> | string
    mode?: StringFilter<"TravelMode"> | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }

  export type TravelModeOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    mode?: SortOrder
    trip?: TripOrderByWithRelationInput
  }

  export type TravelModeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TravelModeWhereInput | TravelModeWhereInput[]
    OR?: TravelModeWhereInput[]
    NOT?: TravelModeWhereInput | TravelModeWhereInput[]
    tripId?: StringFilter<"TravelMode"> | string
    mode?: StringFilter<"TravelMode"> | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }, "id">

  export type TravelModeOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    mode?: SortOrder
    _count?: TravelModeCountOrderByAggregateInput
    _max?: TravelModeMaxOrderByAggregateInput
    _min?: TravelModeMinOrderByAggregateInput
  }

  export type TravelModeScalarWhereWithAggregatesInput = {
    AND?: TravelModeScalarWhereWithAggregatesInput | TravelModeScalarWhereWithAggregatesInput[]
    OR?: TravelModeScalarWhereWithAggregatesInput[]
    NOT?: TravelModeScalarWhereWithAggregatesInput | TravelModeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TravelMode"> | string
    tripId?: StringWithAggregatesFilter<"TravelMode"> | string
    mode?: StringWithAggregatesFilter<"TravelMode"> | string
  }

  export type TripPreferenceWhereInput = {
    AND?: TripPreferenceWhereInput | TripPreferenceWhereInput[]
    OR?: TripPreferenceWhereInput[]
    NOT?: TripPreferenceWhereInput | TripPreferenceWhereInput[]
    id?: StringFilter<"TripPreference"> | string
    tripId?: StringFilter<"TripPreference"> | string
    adults?: IntFilter<"TripPreference"> | number
    children?: IntFilter<"TripPreference"> | number
    accommodationType?: StringFilter<"TripPreference"> | string
    mealPlanning?: BoolFilter<"TripPreference"> | boolean
    activityPreferences?: StringFilter<"TripPreference"> | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }

  export type TripPreferenceOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    adults?: SortOrder
    children?: SortOrder
    accommodationType?: SortOrder
    mealPlanning?: SortOrder
    activityPreferences?: SortOrder
    trip?: TripOrderByWithRelationInput
  }

  export type TripPreferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tripId?: string
    AND?: TripPreferenceWhereInput | TripPreferenceWhereInput[]
    OR?: TripPreferenceWhereInput[]
    NOT?: TripPreferenceWhereInput | TripPreferenceWhereInput[]
    adults?: IntFilter<"TripPreference"> | number
    children?: IntFilter<"TripPreference"> | number
    accommodationType?: StringFilter<"TripPreference"> | string
    mealPlanning?: BoolFilter<"TripPreference"> | boolean
    activityPreferences?: StringFilter<"TripPreference"> | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }, "id" | "tripId">

  export type TripPreferenceOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    adults?: SortOrder
    children?: SortOrder
    accommodationType?: SortOrder
    mealPlanning?: SortOrder
    activityPreferences?: SortOrder
    _count?: TripPreferenceCountOrderByAggregateInput
    _avg?: TripPreferenceAvgOrderByAggregateInput
    _max?: TripPreferenceMaxOrderByAggregateInput
    _min?: TripPreferenceMinOrderByAggregateInput
    _sum?: TripPreferenceSumOrderByAggregateInput
  }

  export type TripPreferenceScalarWhereWithAggregatesInput = {
    AND?: TripPreferenceScalarWhereWithAggregatesInput | TripPreferenceScalarWhereWithAggregatesInput[]
    OR?: TripPreferenceScalarWhereWithAggregatesInput[]
    NOT?: TripPreferenceScalarWhereWithAggregatesInput | TripPreferenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TripPreference"> | string
    tripId?: StringWithAggregatesFilter<"TripPreference"> | string
    adults?: IntWithAggregatesFilter<"TripPreference"> | number
    children?: IntWithAggregatesFilter<"TripPreference"> | number
    accommodationType?: StringWithAggregatesFilter<"TripPreference"> | string
    mealPlanning?: BoolWithAggregatesFilter<"TripPreference"> | boolean
    activityPreferences?: StringWithAggregatesFilter<"TripPreference"> | string
  }

  export type ItineraryWhereInput = {
    AND?: ItineraryWhereInput | ItineraryWhereInput[]
    OR?: ItineraryWhereInput[]
    NOT?: ItineraryWhereInput | ItineraryWhereInput[]
    id?: StringFilter<"Itinerary"> | string
    tripId?: StringFilter<"Itinerary"> | string
    totalCost?: FloatFilter<"Itinerary"> | number
    accommodationCost?: FloatFilter<"Itinerary"> | number
    transportationCost?: FloatFilter<"Itinerary"> | number
    activitiesCost?: FloatFilter<"Itinerary"> | number
    mealsCost?: FloatFilter<"Itinerary"> | number
    otherCost?: FloatFilter<"Itinerary"> | number
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    dailyPlans?: DailyPlanListRelationFilter
  }

  export type ItineraryOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    totalCost?: SortOrder
    accommodationCost?: SortOrder
    transportationCost?: SortOrder
    activitiesCost?: SortOrder
    mealsCost?: SortOrder
    otherCost?: SortOrder
    trip?: TripOrderByWithRelationInput
    dailyPlans?: DailyPlanOrderByRelationAggregateInput
  }

  export type ItineraryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tripId?: string
    AND?: ItineraryWhereInput | ItineraryWhereInput[]
    OR?: ItineraryWhereInput[]
    NOT?: ItineraryWhereInput | ItineraryWhereInput[]
    totalCost?: FloatFilter<"Itinerary"> | number
    accommodationCost?: FloatFilter<"Itinerary"> | number
    transportationCost?: FloatFilter<"Itinerary"> | number
    activitiesCost?: FloatFilter<"Itinerary"> | number
    mealsCost?: FloatFilter<"Itinerary"> | number
    otherCost?: FloatFilter<"Itinerary"> | number
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    dailyPlans?: DailyPlanListRelationFilter
  }, "id" | "tripId">

  export type ItineraryOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    totalCost?: SortOrder
    accommodationCost?: SortOrder
    transportationCost?: SortOrder
    activitiesCost?: SortOrder
    mealsCost?: SortOrder
    otherCost?: SortOrder
    _count?: ItineraryCountOrderByAggregateInput
    _avg?: ItineraryAvgOrderByAggregateInput
    _max?: ItineraryMaxOrderByAggregateInput
    _min?: ItineraryMinOrderByAggregateInput
    _sum?: ItinerarySumOrderByAggregateInput
  }

  export type ItineraryScalarWhereWithAggregatesInput = {
    AND?: ItineraryScalarWhereWithAggregatesInput | ItineraryScalarWhereWithAggregatesInput[]
    OR?: ItineraryScalarWhereWithAggregatesInput[]
    NOT?: ItineraryScalarWhereWithAggregatesInput | ItineraryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Itinerary"> | string
    tripId?: StringWithAggregatesFilter<"Itinerary"> | string
    totalCost?: FloatWithAggregatesFilter<"Itinerary"> | number
    accommodationCost?: FloatWithAggregatesFilter<"Itinerary"> | number
    transportationCost?: FloatWithAggregatesFilter<"Itinerary"> | number
    activitiesCost?: FloatWithAggregatesFilter<"Itinerary"> | number
    mealsCost?: FloatWithAggregatesFilter<"Itinerary"> | number
    otherCost?: FloatWithAggregatesFilter<"Itinerary"> | number
  }

  export type DailyPlanWhereInput = {
    AND?: DailyPlanWhereInput | DailyPlanWhereInput[]
    OR?: DailyPlanWhereInput[]
    NOT?: DailyPlanWhereInput | DailyPlanWhereInput[]
    id?: StringFilter<"DailyPlan"> | string
    itineraryId?: StringFilter<"DailyPlan"> | string
    destinationId?: StringFilter<"DailyPlan"> | string
    date?: DateTimeFilter<"DailyPlan"> | Date | string
    itinerary?: XOR<ItineraryScalarRelationFilter, ItineraryWhereInput>
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
    activities?: ActivityListRelationFilter
    meals?: MealListRelationFilter
    accommodation?: XOR<AccommodationNullableScalarRelationFilter, AccommodationWhereInput> | null
    transportation?: XOR<TransportationNullableScalarRelationFilter, TransportationWhereInput> | null
  }

  export type DailyPlanOrderByWithRelationInput = {
    id?: SortOrder
    itineraryId?: SortOrder
    destinationId?: SortOrder
    date?: SortOrder
    itinerary?: ItineraryOrderByWithRelationInput
    destination?: DestinationOrderByWithRelationInput
    activities?: ActivityOrderByRelationAggregateInput
    meals?: MealOrderByRelationAggregateInput
    accommodation?: AccommodationOrderByWithRelationInput
    transportation?: TransportationOrderByWithRelationInput
  }

  export type DailyPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DailyPlanWhereInput | DailyPlanWhereInput[]
    OR?: DailyPlanWhereInput[]
    NOT?: DailyPlanWhereInput | DailyPlanWhereInput[]
    itineraryId?: StringFilter<"DailyPlan"> | string
    destinationId?: StringFilter<"DailyPlan"> | string
    date?: DateTimeFilter<"DailyPlan"> | Date | string
    itinerary?: XOR<ItineraryScalarRelationFilter, ItineraryWhereInput>
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
    activities?: ActivityListRelationFilter
    meals?: MealListRelationFilter
    accommodation?: XOR<AccommodationNullableScalarRelationFilter, AccommodationWhereInput> | null
    transportation?: XOR<TransportationNullableScalarRelationFilter, TransportationWhereInput> | null
  }, "id">

  export type DailyPlanOrderByWithAggregationInput = {
    id?: SortOrder
    itineraryId?: SortOrder
    destinationId?: SortOrder
    date?: SortOrder
    _count?: DailyPlanCountOrderByAggregateInput
    _max?: DailyPlanMaxOrderByAggregateInput
    _min?: DailyPlanMinOrderByAggregateInput
  }

  export type DailyPlanScalarWhereWithAggregatesInput = {
    AND?: DailyPlanScalarWhereWithAggregatesInput | DailyPlanScalarWhereWithAggregatesInput[]
    OR?: DailyPlanScalarWhereWithAggregatesInput[]
    NOT?: DailyPlanScalarWhereWithAggregatesInput | DailyPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyPlan"> | string
    itineraryId?: StringWithAggregatesFilter<"DailyPlan"> | string
    destinationId?: StringWithAggregatesFilter<"DailyPlan"> | string
    date?: DateTimeWithAggregatesFilter<"DailyPlan"> | Date | string
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: StringFilter<"Activity"> | string
    dailyPlanId?: StringFilter<"Activity"> | string
    name?: StringFilter<"Activity"> | string
    duration?: IntFilter<"Activity"> | number
    cost?: FloatFilter<"Activity"> | number
    dailyPlan?: XOR<DailyPlanScalarRelationFilter, DailyPlanWhereInput>
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    cost?: SortOrder
    dailyPlan?: DailyPlanOrderByWithRelationInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    dailyPlanId?: StringFilter<"Activity"> | string
    name?: StringFilter<"Activity"> | string
    duration?: IntFilter<"Activity"> | number
    cost?: FloatFilter<"Activity"> | number
    dailyPlan?: XOR<DailyPlanScalarRelationFilter, DailyPlanWhereInput>
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    cost?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _avg?: ActivityAvgOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
    _sum?: ActivitySumOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Activity"> | string
    dailyPlanId?: StringWithAggregatesFilter<"Activity"> | string
    name?: StringWithAggregatesFilter<"Activity"> | string
    duration?: IntWithAggregatesFilter<"Activity"> | number
    cost?: FloatWithAggregatesFilter<"Activity"> | number
  }

  export type MealWhereInput = {
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    id?: StringFilter<"Meal"> | string
    dailyPlanId?: StringFilter<"Meal"> | string
    type?: StringFilter<"Meal"> | string
    name?: StringFilter<"Meal"> | string
    cost?: FloatFilter<"Meal"> | number
    dailyPlan?: XOR<DailyPlanScalarRelationFilter, DailyPlanWhereInput>
  }

  export type MealOrderByWithRelationInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    cost?: SortOrder
    dailyPlan?: DailyPlanOrderByWithRelationInput
  }

  export type MealWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    dailyPlanId?: StringFilter<"Meal"> | string
    type?: StringFilter<"Meal"> | string
    name?: StringFilter<"Meal"> | string
    cost?: FloatFilter<"Meal"> | number
    dailyPlan?: XOR<DailyPlanScalarRelationFilter, DailyPlanWhereInput>
  }, "id">

  export type MealOrderByWithAggregationInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    cost?: SortOrder
    _count?: MealCountOrderByAggregateInput
    _avg?: MealAvgOrderByAggregateInput
    _max?: MealMaxOrderByAggregateInput
    _min?: MealMinOrderByAggregateInput
    _sum?: MealSumOrderByAggregateInput
  }

  export type MealScalarWhereWithAggregatesInput = {
    AND?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    OR?: MealScalarWhereWithAggregatesInput[]
    NOT?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Meal"> | string
    dailyPlanId?: StringWithAggregatesFilter<"Meal"> | string
    type?: StringWithAggregatesFilter<"Meal"> | string
    name?: StringWithAggregatesFilter<"Meal"> | string
    cost?: FloatWithAggregatesFilter<"Meal"> | number
  }

  export type AccommodationWhereInput = {
    AND?: AccommodationWhereInput | AccommodationWhereInput[]
    OR?: AccommodationWhereInput[]
    NOT?: AccommodationWhereInput | AccommodationWhereInput[]
    id?: StringFilter<"Accommodation"> | string
    dailyPlanId?: StringFilter<"Accommodation"> | string
    name?: StringFilter<"Accommodation"> | string
    type?: StringFilter<"Accommodation"> | string
    cost?: FloatFilter<"Accommodation"> | number
    dailyPlan?: XOR<DailyPlanScalarRelationFilter, DailyPlanWhereInput>
  }

  export type AccommodationOrderByWithRelationInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    cost?: SortOrder
    dailyPlan?: DailyPlanOrderByWithRelationInput
  }

  export type AccommodationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dailyPlanId?: string
    AND?: AccommodationWhereInput | AccommodationWhereInput[]
    OR?: AccommodationWhereInput[]
    NOT?: AccommodationWhereInput | AccommodationWhereInput[]
    name?: StringFilter<"Accommodation"> | string
    type?: StringFilter<"Accommodation"> | string
    cost?: FloatFilter<"Accommodation"> | number
    dailyPlan?: XOR<DailyPlanScalarRelationFilter, DailyPlanWhereInput>
  }, "id" | "dailyPlanId">

  export type AccommodationOrderByWithAggregationInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    cost?: SortOrder
    _count?: AccommodationCountOrderByAggregateInput
    _avg?: AccommodationAvgOrderByAggregateInput
    _max?: AccommodationMaxOrderByAggregateInput
    _min?: AccommodationMinOrderByAggregateInput
    _sum?: AccommodationSumOrderByAggregateInput
  }

  export type AccommodationScalarWhereWithAggregatesInput = {
    AND?: AccommodationScalarWhereWithAggregatesInput | AccommodationScalarWhereWithAggregatesInput[]
    OR?: AccommodationScalarWhereWithAggregatesInput[]
    NOT?: AccommodationScalarWhereWithAggregatesInput | AccommodationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Accommodation"> | string
    dailyPlanId?: StringWithAggregatesFilter<"Accommodation"> | string
    name?: StringWithAggregatesFilter<"Accommodation"> | string
    type?: StringWithAggregatesFilter<"Accommodation"> | string
    cost?: FloatWithAggregatesFilter<"Accommodation"> | number
  }

  export type TransportationWhereInput = {
    AND?: TransportationWhereInput | TransportationWhereInput[]
    OR?: TransportationWhereInput[]
    NOT?: TransportationWhereInput | TransportationWhereInput[]
    id?: StringFilter<"Transportation"> | string
    dailyPlanId?: StringFilter<"Transportation"> | string
    mode?: StringFilter<"Transportation"> | string
    from?: StringFilter<"Transportation"> | string
    to?: StringFilter<"Transportation"> | string
    cost?: FloatFilter<"Transportation"> | number
    duration?: IntFilter<"Transportation"> | number
    dailyPlan?: XOR<DailyPlanScalarRelationFilter, DailyPlanWhereInput>
  }

  export type TransportationOrderByWithRelationInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    mode?: SortOrder
    from?: SortOrder
    to?: SortOrder
    cost?: SortOrder
    duration?: SortOrder
    dailyPlan?: DailyPlanOrderByWithRelationInput
  }

  export type TransportationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dailyPlanId?: string
    AND?: TransportationWhereInput | TransportationWhereInput[]
    OR?: TransportationWhereInput[]
    NOT?: TransportationWhereInput | TransportationWhereInput[]
    mode?: StringFilter<"Transportation"> | string
    from?: StringFilter<"Transportation"> | string
    to?: StringFilter<"Transportation"> | string
    cost?: FloatFilter<"Transportation"> | number
    duration?: IntFilter<"Transportation"> | number
    dailyPlan?: XOR<DailyPlanScalarRelationFilter, DailyPlanWhereInput>
  }, "id" | "dailyPlanId">

  export type TransportationOrderByWithAggregationInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    mode?: SortOrder
    from?: SortOrder
    to?: SortOrder
    cost?: SortOrder
    duration?: SortOrder
    _count?: TransportationCountOrderByAggregateInput
    _avg?: TransportationAvgOrderByAggregateInput
    _max?: TransportationMaxOrderByAggregateInput
    _min?: TransportationMinOrderByAggregateInput
    _sum?: TransportationSumOrderByAggregateInput
  }

  export type TransportationScalarWhereWithAggregatesInput = {
    AND?: TransportationScalarWhereWithAggregatesInput | TransportationScalarWhereWithAggregatesInput[]
    OR?: TransportationScalarWhereWithAggregatesInput[]
    NOT?: TransportationScalarWhereWithAggregatesInput | TransportationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transportation"> | string
    dailyPlanId?: StringWithAggregatesFilter<"Transportation"> | string
    mode?: StringWithAggregatesFilter<"Transportation"> | string
    from?: StringWithAggregatesFilter<"Transportation"> | string
    to?: StringWithAggregatesFilter<"Transportation"> | string
    cost?: FloatWithAggregatesFilter<"Transportation"> | number
    duration?: IntWithAggregatesFilter<"Transportation"> | number
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateInput = {
    id?: string
    title: string
    totalBudget: number
    currency?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTripsInput
    destinations?: DestinationCreateNestedManyWithoutTripInput
    travelModes?: TravelModeCreateNestedManyWithoutTripInput
    preferences?: TripPreferenceCreateNestedOneWithoutTripInput
    itinerary?: ItineraryCreateNestedOneWithoutTripInput
  }

  export type TripUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    totalBudget: number
    currency?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    destinations?: DestinationUncheckedCreateNestedManyWithoutTripInput
    travelModes?: TravelModeUncheckedCreateNestedManyWithoutTripInput
    preferences?: TripPreferenceUncheckedCreateNestedOneWithoutTripInput
    itinerary?: ItineraryUncheckedCreateNestedOneWithoutTripInput
  }

  export type TripUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalBudget?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
    destinations?: DestinationUpdateManyWithoutTripNestedInput
    travelModes?: TravelModeUpdateManyWithoutTripNestedInput
    preferences?: TripPreferenceUpdateOneWithoutTripNestedInput
    itinerary?: ItineraryUpdateOneWithoutTripNestedInput
  }

  export type TripUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalBudget?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destinations?: DestinationUncheckedUpdateManyWithoutTripNestedInput
    travelModes?: TravelModeUncheckedUpdateManyWithoutTripNestedInput
    preferences?: TripPreferenceUncheckedUpdateOneWithoutTripNestedInput
    itinerary?: ItineraryUncheckedUpdateOneWithoutTripNestedInput
  }

  export type TripCreateManyInput = {
    id?: string
    userId: string
    title: string
    totalBudget: number
    currency?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalBudget?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalBudget?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationCreateInput = {
    id?: string
    city: string
    duration: number
    order: number
    trip: TripCreateNestedOneWithoutDestinationsInput
    dailyPlans?: DailyPlanCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateInput = {
    id?: string
    tripId: string
    city: string
    duration: number
    order: number
    dailyPlans?: DailyPlanUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    trip?: TripUpdateOneRequiredWithoutDestinationsNestedInput
    dailyPlans?: DailyPlanUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    dailyPlans?: DailyPlanUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationCreateManyInput = {
    id?: string
    tripId: string
    city: string
    duration: number
    order: number
  }

  export type DestinationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type DestinationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TravelModeCreateInput = {
    id?: string
    mode: string
    trip: TripCreateNestedOneWithoutTravelModesInput
  }

  export type TravelModeUncheckedCreateInput = {
    id?: string
    tripId: string
    mode: string
  }

  export type TravelModeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    trip?: TripUpdateOneRequiredWithoutTravelModesNestedInput
  }

  export type TravelModeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
  }

  export type TravelModeCreateManyInput = {
    id?: string
    tripId: string
    mode: string
  }

  export type TravelModeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
  }

  export type TravelModeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
  }

  export type TripPreferenceCreateInput = {
    id?: string
    adults?: number
    children?: number
    accommodationType: string
    mealPlanning?: boolean
    activityPreferences: string
    trip: TripCreateNestedOneWithoutPreferencesInput
  }

  export type TripPreferenceUncheckedCreateInput = {
    id?: string
    tripId: string
    adults?: number
    children?: number
    accommodationType: string
    mealPlanning?: boolean
    activityPreferences: string
  }

  export type TripPreferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    accommodationType?: StringFieldUpdateOperationsInput | string
    mealPlanning?: BoolFieldUpdateOperationsInput | boolean
    activityPreferences?: StringFieldUpdateOperationsInput | string
    trip?: TripUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type TripPreferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    accommodationType?: StringFieldUpdateOperationsInput | string
    mealPlanning?: BoolFieldUpdateOperationsInput | boolean
    activityPreferences?: StringFieldUpdateOperationsInput | string
  }

  export type TripPreferenceCreateManyInput = {
    id?: string
    tripId: string
    adults?: number
    children?: number
    accommodationType: string
    mealPlanning?: boolean
    activityPreferences: string
  }

  export type TripPreferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    accommodationType?: StringFieldUpdateOperationsInput | string
    mealPlanning?: BoolFieldUpdateOperationsInput | boolean
    activityPreferences?: StringFieldUpdateOperationsInput | string
  }

  export type TripPreferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    accommodationType?: StringFieldUpdateOperationsInput | string
    mealPlanning?: BoolFieldUpdateOperationsInput | boolean
    activityPreferences?: StringFieldUpdateOperationsInput | string
  }

  export type ItineraryCreateInput = {
    id?: string
    totalCost: number
    accommodationCost: number
    transportationCost: number
    activitiesCost: number
    mealsCost: number
    otherCost: number
    trip: TripCreateNestedOneWithoutItineraryInput
    dailyPlans?: DailyPlanCreateNestedManyWithoutItineraryInput
  }

  export type ItineraryUncheckedCreateInput = {
    id?: string
    tripId: string
    totalCost: number
    accommodationCost: number
    transportationCost: number
    activitiesCost: number
    mealsCost: number
    otherCost: number
    dailyPlans?: DailyPlanUncheckedCreateNestedManyWithoutItineraryInput
  }

  export type ItineraryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    accommodationCost?: FloatFieldUpdateOperationsInput | number
    transportationCost?: FloatFieldUpdateOperationsInput | number
    activitiesCost?: FloatFieldUpdateOperationsInput | number
    mealsCost?: FloatFieldUpdateOperationsInput | number
    otherCost?: FloatFieldUpdateOperationsInput | number
    trip?: TripUpdateOneRequiredWithoutItineraryNestedInput
    dailyPlans?: DailyPlanUpdateManyWithoutItineraryNestedInput
  }

  export type ItineraryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    accommodationCost?: FloatFieldUpdateOperationsInput | number
    transportationCost?: FloatFieldUpdateOperationsInput | number
    activitiesCost?: FloatFieldUpdateOperationsInput | number
    mealsCost?: FloatFieldUpdateOperationsInput | number
    otherCost?: FloatFieldUpdateOperationsInput | number
    dailyPlans?: DailyPlanUncheckedUpdateManyWithoutItineraryNestedInput
  }

  export type ItineraryCreateManyInput = {
    id?: string
    tripId: string
    totalCost: number
    accommodationCost: number
    transportationCost: number
    activitiesCost: number
    mealsCost: number
    otherCost: number
  }

  export type ItineraryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    accommodationCost?: FloatFieldUpdateOperationsInput | number
    transportationCost?: FloatFieldUpdateOperationsInput | number
    activitiesCost?: FloatFieldUpdateOperationsInput | number
    mealsCost?: FloatFieldUpdateOperationsInput | number
    otherCost?: FloatFieldUpdateOperationsInput | number
  }

  export type ItineraryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    accommodationCost?: FloatFieldUpdateOperationsInput | number
    transportationCost?: FloatFieldUpdateOperationsInput | number
    activitiesCost?: FloatFieldUpdateOperationsInput | number
    mealsCost?: FloatFieldUpdateOperationsInput | number
    otherCost?: FloatFieldUpdateOperationsInput | number
  }

  export type DailyPlanCreateInput = {
    id?: string
    date: Date | string
    itinerary: ItineraryCreateNestedOneWithoutDailyPlansInput
    destination: DestinationCreateNestedOneWithoutDailyPlansInput
    activities?: ActivityCreateNestedManyWithoutDailyPlanInput
    meals?: MealCreateNestedManyWithoutDailyPlanInput
    accommodation?: AccommodationCreateNestedOneWithoutDailyPlanInput
    transportation?: TransportationCreateNestedOneWithoutDailyPlanInput
  }

  export type DailyPlanUncheckedCreateInput = {
    id?: string
    itineraryId: string
    destinationId: string
    date: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutDailyPlanInput
    meals?: MealUncheckedCreateNestedManyWithoutDailyPlanInput
    accommodation?: AccommodationUncheckedCreateNestedOneWithoutDailyPlanInput
    transportation?: TransportationUncheckedCreateNestedOneWithoutDailyPlanInput
  }

  export type DailyPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    itinerary?: ItineraryUpdateOneRequiredWithoutDailyPlansNestedInput
    destination?: DestinationUpdateOneRequiredWithoutDailyPlansNestedInput
    activities?: ActivityUpdateManyWithoutDailyPlanNestedInput
    meals?: MealUpdateManyWithoutDailyPlanNestedInput
    accommodation?: AccommodationUpdateOneWithoutDailyPlanNestedInput
    transportation?: TransportationUpdateOneWithoutDailyPlanNestedInput
  }

  export type DailyPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itineraryId?: StringFieldUpdateOperationsInput | string
    destinationId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutDailyPlanNestedInput
    meals?: MealUncheckedUpdateManyWithoutDailyPlanNestedInput
    accommodation?: AccommodationUncheckedUpdateOneWithoutDailyPlanNestedInput
    transportation?: TransportationUncheckedUpdateOneWithoutDailyPlanNestedInput
  }

  export type DailyPlanCreateManyInput = {
    id?: string
    itineraryId: string
    destinationId: string
    date: Date | string
  }

  export type DailyPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    itineraryId?: StringFieldUpdateOperationsInput | string
    destinationId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateInput = {
    id?: string
    name: string
    duration: number
    cost: number
    dailyPlan: DailyPlanCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: string
    dailyPlanId: string
    name: string
    duration: number
    cost: number
  }

  export type ActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    dailyPlan?: DailyPlanUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyPlanId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type ActivityCreateManyInput = {
    id?: string
    dailyPlanId: string
    name: string
    duration: number
    cost: number
  }

  export type ActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyPlanId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type MealCreateInput = {
    id?: string
    type: string
    name: string
    cost: number
    dailyPlan: DailyPlanCreateNestedOneWithoutMealsInput
  }

  export type MealUncheckedCreateInput = {
    id?: string
    dailyPlanId: string
    type: string
    name: string
    cost: number
  }

  export type MealUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    dailyPlan?: DailyPlanUpdateOneRequiredWithoutMealsNestedInput
  }

  export type MealUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyPlanId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type MealCreateManyInput = {
    id?: string
    dailyPlanId: string
    type: string
    name: string
    cost: number
  }

  export type MealUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type MealUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyPlanId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type AccommodationCreateInput = {
    id?: string
    name: string
    type: string
    cost: number
    dailyPlan: DailyPlanCreateNestedOneWithoutAccommodationInput
  }

  export type AccommodationUncheckedCreateInput = {
    id?: string
    dailyPlanId: string
    name: string
    type: string
    cost: number
  }

  export type AccommodationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    dailyPlan?: DailyPlanUpdateOneRequiredWithoutAccommodationNestedInput
  }

  export type AccommodationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyPlanId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type AccommodationCreateManyInput = {
    id?: string
    dailyPlanId: string
    name: string
    type: string
    cost: number
  }

  export type AccommodationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type AccommodationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyPlanId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type TransportationCreateInput = {
    id?: string
    mode: string
    from: string
    to: string
    cost: number
    duration: number
    dailyPlan: DailyPlanCreateNestedOneWithoutTransportationInput
  }

  export type TransportationUncheckedCreateInput = {
    id?: string
    dailyPlanId: string
    mode: string
    from: string
    to: string
    cost: number
    duration: number
  }

  export type TransportationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    dailyPlan?: DailyPlanUpdateOneRequiredWithoutTransportationNestedInput
  }

  export type TransportationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyPlanId?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type TransportationCreateManyInput = {
    id?: string
    dailyPlanId: string
    mode: string
    from: string
    to: string
    cost: number
    duration: number
  }

  export type TransportationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type TransportationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dailyPlanId?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
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

  export type TripListRelationFilter = {
    every?: TripWhereInput
    some?: TripWhereInput
    none?: TripWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DestinationListRelationFilter = {
    every?: DestinationWhereInput
    some?: DestinationWhereInput
    none?: DestinationWhereInput
  }

  export type TravelModeListRelationFilter = {
    every?: TravelModeWhereInput
    some?: TravelModeWhereInput
    none?: TravelModeWhereInput
  }

  export type TripPreferenceNullableScalarRelationFilter = {
    is?: TripPreferenceWhereInput | null
    isNot?: TripPreferenceWhereInput | null
  }

  export type ItineraryNullableScalarRelationFilter = {
    is?: ItineraryWhereInput | null
    isNot?: ItineraryWhereInput | null
  }

  export type DestinationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TravelModeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    totalBudget?: SortOrder
    currency?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripAvgOrderByAggregateInput = {
    totalBudget?: SortOrder
  }

  export type TripMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    totalBudget?: SortOrder
    currency?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    totalBudget?: SortOrder
    currency?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripSumOrderByAggregateInput = {
    totalBudget?: SortOrder
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

  export type TripScalarRelationFilter = {
    is?: TripWhereInput
    isNot?: TripWhereInput
  }

  export type DailyPlanListRelationFilter = {
    every?: DailyPlanWhereInput
    some?: DailyPlanWhereInput
    none?: DailyPlanWhereInput
  }

  export type DailyPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DestinationCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    city?: SortOrder
    duration?: SortOrder
    order?: SortOrder
  }

  export type DestinationAvgOrderByAggregateInput = {
    duration?: SortOrder
    order?: SortOrder
  }

  export type DestinationMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    city?: SortOrder
    duration?: SortOrder
    order?: SortOrder
  }

  export type DestinationMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    city?: SortOrder
    duration?: SortOrder
    order?: SortOrder
  }

  export type DestinationSumOrderByAggregateInput = {
    duration?: SortOrder
    order?: SortOrder
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

  export type TravelModeCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    mode?: SortOrder
  }

  export type TravelModeMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    mode?: SortOrder
  }

  export type TravelModeMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    mode?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TripPreferenceCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    adults?: SortOrder
    children?: SortOrder
    accommodationType?: SortOrder
    mealPlanning?: SortOrder
    activityPreferences?: SortOrder
  }

  export type TripPreferenceAvgOrderByAggregateInput = {
    adults?: SortOrder
    children?: SortOrder
  }

  export type TripPreferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    adults?: SortOrder
    children?: SortOrder
    accommodationType?: SortOrder
    mealPlanning?: SortOrder
    activityPreferences?: SortOrder
  }

  export type TripPreferenceMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    adults?: SortOrder
    children?: SortOrder
    accommodationType?: SortOrder
    mealPlanning?: SortOrder
    activityPreferences?: SortOrder
  }

  export type TripPreferenceSumOrderByAggregateInput = {
    adults?: SortOrder
    children?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ItineraryCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    totalCost?: SortOrder
    accommodationCost?: SortOrder
    transportationCost?: SortOrder
    activitiesCost?: SortOrder
    mealsCost?: SortOrder
    otherCost?: SortOrder
  }

  export type ItineraryAvgOrderByAggregateInput = {
    totalCost?: SortOrder
    accommodationCost?: SortOrder
    transportationCost?: SortOrder
    activitiesCost?: SortOrder
    mealsCost?: SortOrder
    otherCost?: SortOrder
  }

  export type ItineraryMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    totalCost?: SortOrder
    accommodationCost?: SortOrder
    transportationCost?: SortOrder
    activitiesCost?: SortOrder
    mealsCost?: SortOrder
    otherCost?: SortOrder
  }

  export type ItineraryMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    totalCost?: SortOrder
    accommodationCost?: SortOrder
    transportationCost?: SortOrder
    activitiesCost?: SortOrder
    mealsCost?: SortOrder
    otherCost?: SortOrder
  }

  export type ItinerarySumOrderByAggregateInput = {
    totalCost?: SortOrder
    accommodationCost?: SortOrder
    transportationCost?: SortOrder
    activitiesCost?: SortOrder
    mealsCost?: SortOrder
    otherCost?: SortOrder
  }

  export type ItineraryScalarRelationFilter = {
    is?: ItineraryWhereInput
    isNot?: ItineraryWhereInput
  }

  export type DestinationScalarRelationFilter = {
    is?: DestinationWhereInput
    isNot?: DestinationWhereInput
  }

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
  }

  export type MealListRelationFilter = {
    every?: MealWhereInput
    some?: MealWhereInput
    none?: MealWhereInput
  }

  export type AccommodationNullableScalarRelationFilter = {
    is?: AccommodationWhereInput | null
    isNot?: AccommodationWhereInput | null
  }

  export type TransportationNullableScalarRelationFilter = {
    is?: TransportationWhereInput | null
    isNot?: TransportationWhereInput | null
  }

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyPlanCountOrderByAggregateInput = {
    id?: SortOrder
    itineraryId?: SortOrder
    destinationId?: SortOrder
    date?: SortOrder
  }

  export type DailyPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    itineraryId?: SortOrder
    destinationId?: SortOrder
    date?: SortOrder
  }

  export type DailyPlanMinOrderByAggregateInput = {
    id?: SortOrder
    itineraryId?: SortOrder
    destinationId?: SortOrder
    date?: SortOrder
  }

  export type DailyPlanScalarRelationFilter = {
    is?: DailyPlanWhereInput
    isNot?: DailyPlanWhereInput
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    cost?: SortOrder
  }

  export type ActivityAvgOrderByAggregateInput = {
    duration?: SortOrder
    cost?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    cost?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    cost?: SortOrder
  }

  export type ActivitySumOrderByAggregateInput = {
    duration?: SortOrder
    cost?: SortOrder
  }

  export type MealCountOrderByAggregateInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    cost?: SortOrder
  }

  export type MealAvgOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type MealMaxOrderByAggregateInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    cost?: SortOrder
  }

  export type MealMinOrderByAggregateInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    cost?: SortOrder
  }

  export type MealSumOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type AccommodationCountOrderByAggregateInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    cost?: SortOrder
  }

  export type AccommodationAvgOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type AccommodationMaxOrderByAggregateInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    cost?: SortOrder
  }

  export type AccommodationMinOrderByAggregateInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    cost?: SortOrder
  }

  export type AccommodationSumOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type TransportationCountOrderByAggregateInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    mode?: SortOrder
    from?: SortOrder
    to?: SortOrder
    cost?: SortOrder
    duration?: SortOrder
  }

  export type TransportationAvgOrderByAggregateInput = {
    cost?: SortOrder
    duration?: SortOrder
  }

  export type TransportationMaxOrderByAggregateInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    mode?: SortOrder
    from?: SortOrder
    to?: SortOrder
    cost?: SortOrder
    duration?: SortOrder
  }

  export type TransportationMinOrderByAggregateInput = {
    id?: SortOrder
    dailyPlanId?: SortOrder
    mode?: SortOrder
    from?: SortOrder
    to?: SortOrder
    cost?: SortOrder
    duration?: SortOrder
  }

  export type TransportationSumOrderByAggregateInput = {
    cost?: SortOrder
    duration?: SortOrder
  }

  export type TripCreateNestedManyWithoutUserInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TripUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutUserInput | TripUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutUserInput | TripUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripUpdateManyWithWhereWithoutUserInput | TripUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutUserInput | TripUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutUserInput | TripUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripUpdateManyWithWhereWithoutUserInput | TripUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTripsInput = {
    create?: XOR<UserCreateWithoutTripsInput, UserUncheckedCreateWithoutTripsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripsInput
    connect?: UserWhereUniqueInput
  }

  export type DestinationCreateNestedManyWithoutTripInput = {
    create?: XOR<DestinationCreateWithoutTripInput, DestinationUncheckedCreateWithoutTripInput> | DestinationCreateWithoutTripInput[] | DestinationUncheckedCreateWithoutTripInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutTripInput | DestinationCreateOrConnectWithoutTripInput[]
    createMany?: DestinationCreateManyTripInputEnvelope
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
  }

  export type TravelModeCreateNestedManyWithoutTripInput = {
    create?: XOR<TravelModeCreateWithoutTripInput, TravelModeUncheckedCreateWithoutTripInput> | TravelModeCreateWithoutTripInput[] | TravelModeUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TravelModeCreateOrConnectWithoutTripInput | TravelModeCreateOrConnectWithoutTripInput[]
    createMany?: TravelModeCreateManyTripInputEnvelope
    connect?: TravelModeWhereUniqueInput | TravelModeWhereUniqueInput[]
  }

  export type TripPreferenceCreateNestedOneWithoutTripInput = {
    create?: XOR<TripPreferenceCreateWithoutTripInput, TripPreferenceUncheckedCreateWithoutTripInput>
    connectOrCreate?: TripPreferenceCreateOrConnectWithoutTripInput
    connect?: TripPreferenceWhereUniqueInput
  }

  export type ItineraryCreateNestedOneWithoutTripInput = {
    create?: XOR<ItineraryCreateWithoutTripInput, ItineraryUncheckedCreateWithoutTripInput>
    connectOrCreate?: ItineraryCreateOrConnectWithoutTripInput
    connect?: ItineraryWhereUniqueInput
  }

  export type DestinationUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<DestinationCreateWithoutTripInput, DestinationUncheckedCreateWithoutTripInput> | DestinationCreateWithoutTripInput[] | DestinationUncheckedCreateWithoutTripInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutTripInput | DestinationCreateOrConnectWithoutTripInput[]
    createMany?: DestinationCreateManyTripInputEnvelope
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
  }

  export type TravelModeUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<TravelModeCreateWithoutTripInput, TravelModeUncheckedCreateWithoutTripInput> | TravelModeCreateWithoutTripInput[] | TravelModeUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TravelModeCreateOrConnectWithoutTripInput | TravelModeCreateOrConnectWithoutTripInput[]
    createMany?: TravelModeCreateManyTripInputEnvelope
    connect?: TravelModeWhereUniqueInput | TravelModeWhereUniqueInput[]
  }

  export type TripPreferenceUncheckedCreateNestedOneWithoutTripInput = {
    create?: XOR<TripPreferenceCreateWithoutTripInput, TripPreferenceUncheckedCreateWithoutTripInput>
    connectOrCreate?: TripPreferenceCreateOrConnectWithoutTripInput
    connect?: TripPreferenceWhereUniqueInput
  }

  export type ItineraryUncheckedCreateNestedOneWithoutTripInput = {
    create?: XOR<ItineraryCreateWithoutTripInput, ItineraryUncheckedCreateWithoutTripInput>
    connectOrCreate?: ItineraryCreateOrConnectWithoutTripInput
    connect?: ItineraryWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutTripsNestedInput = {
    create?: XOR<UserCreateWithoutTripsInput, UserUncheckedCreateWithoutTripsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripsInput
    upsert?: UserUpsertWithoutTripsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTripsInput, UserUpdateWithoutTripsInput>, UserUncheckedUpdateWithoutTripsInput>
  }

  export type DestinationUpdateManyWithoutTripNestedInput = {
    create?: XOR<DestinationCreateWithoutTripInput, DestinationUncheckedCreateWithoutTripInput> | DestinationCreateWithoutTripInput[] | DestinationUncheckedCreateWithoutTripInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutTripInput | DestinationCreateOrConnectWithoutTripInput[]
    upsert?: DestinationUpsertWithWhereUniqueWithoutTripInput | DestinationUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: DestinationCreateManyTripInputEnvelope
    set?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    disconnect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    delete?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    update?: DestinationUpdateWithWhereUniqueWithoutTripInput | DestinationUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: DestinationUpdateManyWithWhereWithoutTripInput | DestinationUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: DestinationScalarWhereInput | DestinationScalarWhereInput[]
  }

  export type TravelModeUpdateManyWithoutTripNestedInput = {
    create?: XOR<TravelModeCreateWithoutTripInput, TravelModeUncheckedCreateWithoutTripInput> | TravelModeCreateWithoutTripInput[] | TravelModeUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TravelModeCreateOrConnectWithoutTripInput | TravelModeCreateOrConnectWithoutTripInput[]
    upsert?: TravelModeUpsertWithWhereUniqueWithoutTripInput | TravelModeUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TravelModeCreateManyTripInputEnvelope
    set?: TravelModeWhereUniqueInput | TravelModeWhereUniqueInput[]
    disconnect?: TravelModeWhereUniqueInput | TravelModeWhereUniqueInput[]
    delete?: TravelModeWhereUniqueInput | TravelModeWhereUniqueInput[]
    connect?: TravelModeWhereUniqueInput | TravelModeWhereUniqueInput[]
    update?: TravelModeUpdateWithWhereUniqueWithoutTripInput | TravelModeUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TravelModeUpdateManyWithWhereWithoutTripInput | TravelModeUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TravelModeScalarWhereInput | TravelModeScalarWhereInput[]
  }

  export type TripPreferenceUpdateOneWithoutTripNestedInput = {
    create?: XOR<TripPreferenceCreateWithoutTripInput, TripPreferenceUncheckedCreateWithoutTripInput>
    connectOrCreate?: TripPreferenceCreateOrConnectWithoutTripInput
    upsert?: TripPreferenceUpsertWithoutTripInput
    disconnect?: TripPreferenceWhereInput | boolean
    delete?: TripPreferenceWhereInput | boolean
    connect?: TripPreferenceWhereUniqueInput
    update?: XOR<XOR<TripPreferenceUpdateToOneWithWhereWithoutTripInput, TripPreferenceUpdateWithoutTripInput>, TripPreferenceUncheckedUpdateWithoutTripInput>
  }

  export type ItineraryUpdateOneWithoutTripNestedInput = {
    create?: XOR<ItineraryCreateWithoutTripInput, ItineraryUncheckedCreateWithoutTripInput>
    connectOrCreate?: ItineraryCreateOrConnectWithoutTripInput
    upsert?: ItineraryUpsertWithoutTripInput
    disconnect?: ItineraryWhereInput | boolean
    delete?: ItineraryWhereInput | boolean
    connect?: ItineraryWhereUniqueInput
    update?: XOR<XOR<ItineraryUpdateToOneWithWhereWithoutTripInput, ItineraryUpdateWithoutTripInput>, ItineraryUncheckedUpdateWithoutTripInput>
  }

  export type DestinationUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<DestinationCreateWithoutTripInput, DestinationUncheckedCreateWithoutTripInput> | DestinationCreateWithoutTripInput[] | DestinationUncheckedCreateWithoutTripInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutTripInput | DestinationCreateOrConnectWithoutTripInput[]
    upsert?: DestinationUpsertWithWhereUniqueWithoutTripInput | DestinationUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: DestinationCreateManyTripInputEnvelope
    set?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    disconnect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    delete?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    update?: DestinationUpdateWithWhereUniqueWithoutTripInput | DestinationUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: DestinationUpdateManyWithWhereWithoutTripInput | DestinationUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: DestinationScalarWhereInput | DestinationScalarWhereInput[]
  }

  export type TravelModeUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<TravelModeCreateWithoutTripInput, TravelModeUncheckedCreateWithoutTripInput> | TravelModeCreateWithoutTripInput[] | TravelModeUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TravelModeCreateOrConnectWithoutTripInput | TravelModeCreateOrConnectWithoutTripInput[]
    upsert?: TravelModeUpsertWithWhereUniqueWithoutTripInput | TravelModeUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TravelModeCreateManyTripInputEnvelope
    set?: TravelModeWhereUniqueInput | TravelModeWhereUniqueInput[]
    disconnect?: TravelModeWhereUniqueInput | TravelModeWhereUniqueInput[]
    delete?: TravelModeWhereUniqueInput | TravelModeWhereUniqueInput[]
    connect?: TravelModeWhereUniqueInput | TravelModeWhereUniqueInput[]
    update?: TravelModeUpdateWithWhereUniqueWithoutTripInput | TravelModeUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TravelModeUpdateManyWithWhereWithoutTripInput | TravelModeUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TravelModeScalarWhereInput | TravelModeScalarWhereInput[]
  }

  export type TripPreferenceUncheckedUpdateOneWithoutTripNestedInput = {
    create?: XOR<TripPreferenceCreateWithoutTripInput, TripPreferenceUncheckedCreateWithoutTripInput>
    connectOrCreate?: TripPreferenceCreateOrConnectWithoutTripInput
    upsert?: TripPreferenceUpsertWithoutTripInput
    disconnect?: TripPreferenceWhereInput | boolean
    delete?: TripPreferenceWhereInput | boolean
    connect?: TripPreferenceWhereUniqueInput
    update?: XOR<XOR<TripPreferenceUpdateToOneWithWhereWithoutTripInput, TripPreferenceUpdateWithoutTripInput>, TripPreferenceUncheckedUpdateWithoutTripInput>
  }

  export type ItineraryUncheckedUpdateOneWithoutTripNestedInput = {
    create?: XOR<ItineraryCreateWithoutTripInput, ItineraryUncheckedCreateWithoutTripInput>
    connectOrCreate?: ItineraryCreateOrConnectWithoutTripInput
    upsert?: ItineraryUpsertWithoutTripInput
    disconnect?: ItineraryWhereInput | boolean
    delete?: ItineraryWhereInput | boolean
    connect?: ItineraryWhereUniqueInput
    update?: XOR<XOR<ItineraryUpdateToOneWithWhereWithoutTripInput, ItineraryUpdateWithoutTripInput>, ItineraryUncheckedUpdateWithoutTripInput>
  }

  export type TripCreateNestedOneWithoutDestinationsInput = {
    create?: XOR<TripCreateWithoutDestinationsInput, TripUncheckedCreateWithoutDestinationsInput>
    connectOrCreate?: TripCreateOrConnectWithoutDestinationsInput
    connect?: TripWhereUniqueInput
  }

  export type DailyPlanCreateNestedManyWithoutDestinationInput = {
    create?: XOR<DailyPlanCreateWithoutDestinationInput, DailyPlanUncheckedCreateWithoutDestinationInput> | DailyPlanCreateWithoutDestinationInput[] | DailyPlanUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: DailyPlanCreateOrConnectWithoutDestinationInput | DailyPlanCreateOrConnectWithoutDestinationInput[]
    createMany?: DailyPlanCreateManyDestinationInputEnvelope
    connect?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
  }

  export type DailyPlanUncheckedCreateNestedManyWithoutDestinationInput = {
    create?: XOR<DailyPlanCreateWithoutDestinationInput, DailyPlanUncheckedCreateWithoutDestinationInput> | DailyPlanCreateWithoutDestinationInput[] | DailyPlanUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: DailyPlanCreateOrConnectWithoutDestinationInput | DailyPlanCreateOrConnectWithoutDestinationInput[]
    createMany?: DailyPlanCreateManyDestinationInputEnvelope
    connect?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TripUpdateOneRequiredWithoutDestinationsNestedInput = {
    create?: XOR<TripCreateWithoutDestinationsInput, TripUncheckedCreateWithoutDestinationsInput>
    connectOrCreate?: TripCreateOrConnectWithoutDestinationsInput
    upsert?: TripUpsertWithoutDestinationsInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutDestinationsInput, TripUpdateWithoutDestinationsInput>, TripUncheckedUpdateWithoutDestinationsInput>
  }

  export type DailyPlanUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<DailyPlanCreateWithoutDestinationInput, DailyPlanUncheckedCreateWithoutDestinationInput> | DailyPlanCreateWithoutDestinationInput[] | DailyPlanUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: DailyPlanCreateOrConnectWithoutDestinationInput | DailyPlanCreateOrConnectWithoutDestinationInput[]
    upsert?: DailyPlanUpsertWithWhereUniqueWithoutDestinationInput | DailyPlanUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: DailyPlanCreateManyDestinationInputEnvelope
    set?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
    disconnect?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
    delete?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
    connect?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
    update?: DailyPlanUpdateWithWhereUniqueWithoutDestinationInput | DailyPlanUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: DailyPlanUpdateManyWithWhereWithoutDestinationInput | DailyPlanUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: DailyPlanScalarWhereInput | DailyPlanScalarWhereInput[]
  }

  export type DailyPlanUncheckedUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<DailyPlanCreateWithoutDestinationInput, DailyPlanUncheckedCreateWithoutDestinationInput> | DailyPlanCreateWithoutDestinationInput[] | DailyPlanUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: DailyPlanCreateOrConnectWithoutDestinationInput | DailyPlanCreateOrConnectWithoutDestinationInput[]
    upsert?: DailyPlanUpsertWithWhereUniqueWithoutDestinationInput | DailyPlanUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: DailyPlanCreateManyDestinationInputEnvelope
    set?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
    disconnect?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
    delete?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
    connect?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
    update?: DailyPlanUpdateWithWhereUniqueWithoutDestinationInput | DailyPlanUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: DailyPlanUpdateManyWithWhereWithoutDestinationInput | DailyPlanUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: DailyPlanScalarWhereInput | DailyPlanScalarWhereInput[]
  }

  export type TripCreateNestedOneWithoutTravelModesInput = {
    create?: XOR<TripCreateWithoutTravelModesInput, TripUncheckedCreateWithoutTravelModesInput>
    connectOrCreate?: TripCreateOrConnectWithoutTravelModesInput
    connect?: TripWhereUniqueInput
  }

  export type TripUpdateOneRequiredWithoutTravelModesNestedInput = {
    create?: XOR<TripCreateWithoutTravelModesInput, TripUncheckedCreateWithoutTravelModesInput>
    connectOrCreate?: TripCreateOrConnectWithoutTravelModesInput
    upsert?: TripUpsertWithoutTravelModesInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutTravelModesInput, TripUpdateWithoutTravelModesInput>, TripUncheckedUpdateWithoutTravelModesInput>
  }

  export type TripCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<TripCreateWithoutPreferencesInput, TripUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: TripCreateOrConnectWithoutPreferencesInput
    connect?: TripWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TripUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<TripCreateWithoutPreferencesInput, TripUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: TripCreateOrConnectWithoutPreferencesInput
    upsert?: TripUpsertWithoutPreferencesInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutPreferencesInput, TripUpdateWithoutPreferencesInput>, TripUncheckedUpdateWithoutPreferencesInput>
  }

  export type TripCreateNestedOneWithoutItineraryInput = {
    create?: XOR<TripCreateWithoutItineraryInput, TripUncheckedCreateWithoutItineraryInput>
    connectOrCreate?: TripCreateOrConnectWithoutItineraryInput
    connect?: TripWhereUniqueInput
  }

  export type DailyPlanCreateNestedManyWithoutItineraryInput = {
    create?: XOR<DailyPlanCreateWithoutItineraryInput, DailyPlanUncheckedCreateWithoutItineraryInput> | DailyPlanCreateWithoutItineraryInput[] | DailyPlanUncheckedCreateWithoutItineraryInput[]
    connectOrCreate?: DailyPlanCreateOrConnectWithoutItineraryInput | DailyPlanCreateOrConnectWithoutItineraryInput[]
    createMany?: DailyPlanCreateManyItineraryInputEnvelope
    connect?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
  }

  export type DailyPlanUncheckedCreateNestedManyWithoutItineraryInput = {
    create?: XOR<DailyPlanCreateWithoutItineraryInput, DailyPlanUncheckedCreateWithoutItineraryInput> | DailyPlanCreateWithoutItineraryInput[] | DailyPlanUncheckedCreateWithoutItineraryInput[]
    connectOrCreate?: DailyPlanCreateOrConnectWithoutItineraryInput | DailyPlanCreateOrConnectWithoutItineraryInput[]
    createMany?: DailyPlanCreateManyItineraryInputEnvelope
    connect?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
  }

  export type TripUpdateOneRequiredWithoutItineraryNestedInput = {
    create?: XOR<TripCreateWithoutItineraryInput, TripUncheckedCreateWithoutItineraryInput>
    connectOrCreate?: TripCreateOrConnectWithoutItineraryInput
    upsert?: TripUpsertWithoutItineraryInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutItineraryInput, TripUpdateWithoutItineraryInput>, TripUncheckedUpdateWithoutItineraryInput>
  }

  export type DailyPlanUpdateManyWithoutItineraryNestedInput = {
    create?: XOR<DailyPlanCreateWithoutItineraryInput, DailyPlanUncheckedCreateWithoutItineraryInput> | DailyPlanCreateWithoutItineraryInput[] | DailyPlanUncheckedCreateWithoutItineraryInput[]
    connectOrCreate?: DailyPlanCreateOrConnectWithoutItineraryInput | DailyPlanCreateOrConnectWithoutItineraryInput[]
    upsert?: DailyPlanUpsertWithWhereUniqueWithoutItineraryInput | DailyPlanUpsertWithWhereUniqueWithoutItineraryInput[]
    createMany?: DailyPlanCreateManyItineraryInputEnvelope
    set?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
    disconnect?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
    delete?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
    connect?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
    update?: DailyPlanUpdateWithWhereUniqueWithoutItineraryInput | DailyPlanUpdateWithWhereUniqueWithoutItineraryInput[]
    updateMany?: DailyPlanUpdateManyWithWhereWithoutItineraryInput | DailyPlanUpdateManyWithWhereWithoutItineraryInput[]
    deleteMany?: DailyPlanScalarWhereInput | DailyPlanScalarWhereInput[]
  }

  export type DailyPlanUncheckedUpdateManyWithoutItineraryNestedInput = {
    create?: XOR<DailyPlanCreateWithoutItineraryInput, DailyPlanUncheckedCreateWithoutItineraryInput> | DailyPlanCreateWithoutItineraryInput[] | DailyPlanUncheckedCreateWithoutItineraryInput[]
    connectOrCreate?: DailyPlanCreateOrConnectWithoutItineraryInput | DailyPlanCreateOrConnectWithoutItineraryInput[]
    upsert?: DailyPlanUpsertWithWhereUniqueWithoutItineraryInput | DailyPlanUpsertWithWhereUniqueWithoutItineraryInput[]
    createMany?: DailyPlanCreateManyItineraryInputEnvelope
    set?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
    disconnect?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
    delete?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
    connect?: DailyPlanWhereUniqueInput | DailyPlanWhereUniqueInput[]
    update?: DailyPlanUpdateWithWhereUniqueWithoutItineraryInput | DailyPlanUpdateWithWhereUniqueWithoutItineraryInput[]
    updateMany?: DailyPlanUpdateManyWithWhereWithoutItineraryInput | DailyPlanUpdateManyWithWhereWithoutItineraryInput[]
    deleteMany?: DailyPlanScalarWhereInput | DailyPlanScalarWhereInput[]
  }

  export type ItineraryCreateNestedOneWithoutDailyPlansInput = {
    create?: XOR<ItineraryCreateWithoutDailyPlansInput, ItineraryUncheckedCreateWithoutDailyPlansInput>
    connectOrCreate?: ItineraryCreateOrConnectWithoutDailyPlansInput
    connect?: ItineraryWhereUniqueInput
  }

  export type DestinationCreateNestedOneWithoutDailyPlansInput = {
    create?: XOR<DestinationCreateWithoutDailyPlansInput, DestinationUncheckedCreateWithoutDailyPlansInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutDailyPlansInput
    connect?: DestinationWhereUniqueInput
  }

  export type ActivityCreateNestedManyWithoutDailyPlanInput = {
    create?: XOR<ActivityCreateWithoutDailyPlanInput, ActivityUncheckedCreateWithoutDailyPlanInput> | ActivityCreateWithoutDailyPlanInput[] | ActivityUncheckedCreateWithoutDailyPlanInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutDailyPlanInput | ActivityCreateOrConnectWithoutDailyPlanInput[]
    createMany?: ActivityCreateManyDailyPlanInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type MealCreateNestedManyWithoutDailyPlanInput = {
    create?: XOR<MealCreateWithoutDailyPlanInput, MealUncheckedCreateWithoutDailyPlanInput> | MealCreateWithoutDailyPlanInput[] | MealUncheckedCreateWithoutDailyPlanInput[]
    connectOrCreate?: MealCreateOrConnectWithoutDailyPlanInput | MealCreateOrConnectWithoutDailyPlanInput[]
    createMany?: MealCreateManyDailyPlanInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type AccommodationCreateNestedOneWithoutDailyPlanInput = {
    create?: XOR<AccommodationCreateWithoutDailyPlanInput, AccommodationUncheckedCreateWithoutDailyPlanInput>
    connectOrCreate?: AccommodationCreateOrConnectWithoutDailyPlanInput
    connect?: AccommodationWhereUniqueInput
  }

  export type TransportationCreateNestedOneWithoutDailyPlanInput = {
    create?: XOR<TransportationCreateWithoutDailyPlanInput, TransportationUncheckedCreateWithoutDailyPlanInput>
    connectOrCreate?: TransportationCreateOrConnectWithoutDailyPlanInput
    connect?: TransportationWhereUniqueInput
  }

  export type ActivityUncheckedCreateNestedManyWithoutDailyPlanInput = {
    create?: XOR<ActivityCreateWithoutDailyPlanInput, ActivityUncheckedCreateWithoutDailyPlanInput> | ActivityCreateWithoutDailyPlanInput[] | ActivityUncheckedCreateWithoutDailyPlanInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutDailyPlanInput | ActivityCreateOrConnectWithoutDailyPlanInput[]
    createMany?: ActivityCreateManyDailyPlanInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type MealUncheckedCreateNestedManyWithoutDailyPlanInput = {
    create?: XOR<MealCreateWithoutDailyPlanInput, MealUncheckedCreateWithoutDailyPlanInput> | MealCreateWithoutDailyPlanInput[] | MealUncheckedCreateWithoutDailyPlanInput[]
    connectOrCreate?: MealCreateOrConnectWithoutDailyPlanInput | MealCreateOrConnectWithoutDailyPlanInput[]
    createMany?: MealCreateManyDailyPlanInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type AccommodationUncheckedCreateNestedOneWithoutDailyPlanInput = {
    create?: XOR<AccommodationCreateWithoutDailyPlanInput, AccommodationUncheckedCreateWithoutDailyPlanInput>
    connectOrCreate?: AccommodationCreateOrConnectWithoutDailyPlanInput
    connect?: AccommodationWhereUniqueInput
  }

  export type TransportationUncheckedCreateNestedOneWithoutDailyPlanInput = {
    create?: XOR<TransportationCreateWithoutDailyPlanInput, TransportationUncheckedCreateWithoutDailyPlanInput>
    connectOrCreate?: TransportationCreateOrConnectWithoutDailyPlanInput
    connect?: TransportationWhereUniqueInput
  }

  export type ItineraryUpdateOneRequiredWithoutDailyPlansNestedInput = {
    create?: XOR<ItineraryCreateWithoutDailyPlansInput, ItineraryUncheckedCreateWithoutDailyPlansInput>
    connectOrCreate?: ItineraryCreateOrConnectWithoutDailyPlansInput
    upsert?: ItineraryUpsertWithoutDailyPlansInput
    connect?: ItineraryWhereUniqueInput
    update?: XOR<XOR<ItineraryUpdateToOneWithWhereWithoutDailyPlansInput, ItineraryUpdateWithoutDailyPlansInput>, ItineraryUncheckedUpdateWithoutDailyPlansInput>
  }

  export type DestinationUpdateOneRequiredWithoutDailyPlansNestedInput = {
    create?: XOR<DestinationCreateWithoutDailyPlansInput, DestinationUncheckedCreateWithoutDailyPlansInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutDailyPlansInput
    upsert?: DestinationUpsertWithoutDailyPlansInput
    connect?: DestinationWhereUniqueInput
    update?: XOR<XOR<DestinationUpdateToOneWithWhereWithoutDailyPlansInput, DestinationUpdateWithoutDailyPlansInput>, DestinationUncheckedUpdateWithoutDailyPlansInput>
  }

  export type ActivityUpdateManyWithoutDailyPlanNestedInput = {
    create?: XOR<ActivityCreateWithoutDailyPlanInput, ActivityUncheckedCreateWithoutDailyPlanInput> | ActivityCreateWithoutDailyPlanInput[] | ActivityUncheckedCreateWithoutDailyPlanInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutDailyPlanInput | ActivityCreateOrConnectWithoutDailyPlanInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutDailyPlanInput | ActivityUpsertWithWhereUniqueWithoutDailyPlanInput[]
    createMany?: ActivityCreateManyDailyPlanInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutDailyPlanInput | ActivityUpdateWithWhereUniqueWithoutDailyPlanInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutDailyPlanInput | ActivityUpdateManyWithWhereWithoutDailyPlanInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type MealUpdateManyWithoutDailyPlanNestedInput = {
    create?: XOR<MealCreateWithoutDailyPlanInput, MealUncheckedCreateWithoutDailyPlanInput> | MealCreateWithoutDailyPlanInput[] | MealUncheckedCreateWithoutDailyPlanInput[]
    connectOrCreate?: MealCreateOrConnectWithoutDailyPlanInput | MealCreateOrConnectWithoutDailyPlanInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutDailyPlanInput | MealUpsertWithWhereUniqueWithoutDailyPlanInput[]
    createMany?: MealCreateManyDailyPlanInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutDailyPlanInput | MealUpdateWithWhereUniqueWithoutDailyPlanInput[]
    updateMany?: MealUpdateManyWithWhereWithoutDailyPlanInput | MealUpdateManyWithWhereWithoutDailyPlanInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type AccommodationUpdateOneWithoutDailyPlanNestedInput = {
    create?: XOR<AccommodationCreateWithoutDailyPlanInput, AccommodationUncheckedCreateWithoutDailyPlanInput>
    connectOrCreate?: AccommodationCreateOrConnectWithoutDailyPlanInput
    upsert?: AccommodationUpsertWithoutDailyPlanInput
    disconnect?: AccommodationWhereInput | boolean
    delete?: AccommodationWhereInput | boolean
    connect?: AccommodationWhereUniqueInput
    update?: XOR<XOR<AccommodationUpdateToOneWithWhereWithoutDailyPlanInput, AccommodationUpdateWithoutDailyPlanInput>, AccommodationUncheckedUpdateWithoutDailyPlanInput>
  }

  export type TransportationUpdateOneWithoutDailyPlanNestedInput = {
    create?: XOR<TransportationCreateWithoutDailyPlanInput, TransportationUncheckedCreateWithoutDailyPlanInput>
    connectOrCreate?: TransportationCreateOrConnectWithoutDailyPlanInput
    upsert?: TransportationUpsertWithoutDailyPlanInput
    disconnect?: TransportationWhereInput | boolean
    delete?: TransportationWhereInput | boolean
    connect?: TransportationWhereUniqueInput
    update?: XOR<XOR<TransportationUpdateToOneWithWhereWithoutDailyPlanInput, TransportationUpdateWithoutDailyPlanInput>, TransportationUncheckedUpdateWithoutDailyPlanInput>
  }

  export type ActivityUncheckedUpdateManyWithoutDailyPlanNestedInput = {
    create?: XOR<ActivityCreateWithoutDailyPlanInput, ActivityUncheckedCreateWithoutDailyPlanInput> | ActivityCreateWithoutDailyPlanInput[] | ActivityUncheckedCreateWithoutDailyPlanInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutDailyPlanInput | ActivityCreateOrConnectWithoutDailyPlanInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutDailyPlanInput | ActivityUpsertWithWhereUniqueWithoutDailyPlanInput[]
    createMany?: ActivityCreateManyDailyPlanInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutDailyPlanInput | ActivityUpdateWithWhereUniqueWithoutDailyPlanInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutDailyPlanInput | ActivityUpdateManyWithWhereWithoutDailyPlanInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type MealUncheckedUpdateManyWithoutDailyPlanNestedInput = {
    create?: XOR<MealCreateWithoutDailyPlanInput, MealUncheckedCreateWithoutDailyPlanInput> | MealCreateWithoutDailyPlanInput[] | MealUncheckedCreateWithoutDailyPlanInput[]
    connectOrCreate?: MealCreateOrConnectWithoutDailyPlanInput | MealCreateOrConnectWithoutDailyPlanInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutDailyPlanInput | MealUpsertWithWhereUniqueWithoutDailyPlanInput[]
    createMany?: MealCreateManyDailyPlanInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutDailyPlanInput | MealUpdateWithWhereUniqueWithoutDailyPlanInput[]
    updateMany?: MealUpdateManyWithWhereWithoutDailyPlanInput | MealUpdateManyWithWhereWithoutDailyPlanInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type AccommodationUncheckedUpdateOneWithoutDailyPlanNestedInput = {
    create?: XOR<AccommodationCreateWithoutDailyPlanInput, AccommodationUncheckedCreateWithoutDailyPlanInput>
    connectOrCreate?: AccommodationCreateOrConnectWithoutDailyPlanInput
    upsert?: AccommodationUpsertWithoutDailyPlanInput
    disconnect?: AccommodationWhereInput | boolean
    delete?: AccommodationWhereInput | boolean
    connect?: AccommodationWhereUniqueInput
    update?: XOR<XOR<AccommodationUpdateToOneWithWhereWithoutDailyPlanInput, AccommodationUpdateWithoutDailyPlanInput>, AccommodationUncheckedUpdateWithoutDailyPlanInput>
  }

  export type TransportationUncheckedUpdateOneWithoutDailyPlanNestedInput = {
    create?: XOR<TransportationCreateWithoutDailyPlanInput, TransportationUncheckedCreateWithoutDailyPlanInput>
    connectOrCreate?: TransportationCreateOrConnectWithoutDailyPlanInput
    upsert?: TransportationUpsertWithoutDailyPlanInput
    disconnect?: TransportationWhereInput | boolean
    delete?: TransportationWhereInput | boolean
    connect?: TransportationWhereUniqueInput
    update?: XOR<XOR<TransportationUpdateToOneWithWhereWithoutDailyPlanInput, TransportationUpdateWithoutDailyPlanInput>, TransportationUncheckedUpdateWithoutDailyPlanInput>
  }

  export type DailyPlanCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<DailyPlanCreateWithoutActivitiesInput, DailyPlanUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: DailyPlanCreateOrConnectWithoutActivitiesInput
    connect?: DailyPlanWhereUniqueInput
  }

  export type DailyPlanUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<DailyPlanCreateWithoutActivitiesInput, DailyPlanUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: DailyPlanCreateOrConnectWithoutActivitiesInput
    upsert?: DailyPlanUpsertWithoutActivitiesInput
    connect?: DailyPlanWhereUniqueInput
    update?: XOR<XOR<DailyPlanUpdateToOneWithWhereWithoutActivitiesInput, DailyPlanUpdateWithoutActivitiesInput>, DailyPlanUncheckedUpdateWithoutActivitiesInput>
  }

  export type DailyPlanCreateNestedOneWithoutMealsInput = {
    create?: XOR<DailyPlanCreateWithoutMealsInput, DailyPlanUncheckedCreateWithoutMealsInput>
    connectOrCreate?: DailyPlanCreateOrConnectWithoutMealsInput
    connect?: DailyPlanWhereUniqueInput
  }

  export type DailyPlanUpdateOneRequiredWithoutMealsNestedInput = {
    create?: XOR<DailyPlanCreateWithoutMealsInput, DailyPlanUncheckedCreateWithoutMealsInput>
    connectOrCreate?: DailyPlanCreateOrConnectWithoutMealsInput
    upsert?: DailyPlanUpsertWithoutMealsInput
    connect?: DailyPlanWhereUniqueInput
    update?: XOR<XOR<DailyPlanUpdateToOneWithWhereWithoutMealsInput, DailyPlanUpdateWithoutMealsInput>, DailyPlanUncheckedUpdateWithoutMealsInput>
  }

  export type DailyPlanCreateNestedOneWithoutAccommodationInput = {
    create?: XOR<DailyPlanCreateWithoutAccommodationInput, DailyPlanUncheckedCreateWithoutAccommodationInput>
    connectOrCreate?: DailyPlanCreateOrConnectWithoutAccommodationInput
    connect?: DailyPlanWhereUniqueInput
  }

  export type DailyPlanUpdateOneRequiredWithoutAccommodationNestedInput = {
    create?: XOR<DailyPlanCreateWithoutAccommodationInput, DailyPlanUncheckedCreateWithoutAccommodationInput>
    connectOrCreate?: DailyPlanCreateOrConnectWithoutAccommodationInput
    upsert?: DailyPlanUpsertWithoutAccommodationInput
    connect?: DailyPlanWhereUniqueInput
    update?: XOR<XOR<DailyPlanUpdateToOneWithWhereWithoutAccommodationInput, DailyPlanUpdateWithoutAccommodationInput>, DailyPlanUncheckedUpdateWithoutAccommodationInput>
  }

  export type DailyPlanCreateNestedOneWithoutTransportationInput = {
    create?: XOR<DailyPlanCreateWithoutTransportationInput, DailyPlanUncheckedCreateWithoutTransportationInput>
    connectOrCreate?: DailyPlanCreateOrConnectWithoutTransportationInput
    connect?: DailyPlanWhereUniqueInput
  }

  export type DailyPlanUpdateOneRequiredWithoutTransportationNestedInput = {
    create?: XOR<DailyPlanCreateWithoutTransportationInput, DailyPlanUncheckedCreateWithoutTransportationInput>
    connectOrCreate?: DailyPlanCreateOrConnectWithoutTransportationInput
    upsert?: DailyPlanUpsertWithoutTransportationInput
    connect?: DailyPlanWhereUniqueInput
    update?: XOR<XOR<DailyPlanUpdateToOneWithWhereWithoutTransportationInput, DailyPlanUpdateWithoutTransportationInput>, DailyPlanUncheckedUpdateWithoutTransportationInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TripCreateWithoutUserInput = {
    id?: string
    title: string
    totalBudget: number
    currency?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    destinations?: DestinationCreateNestedManyWithoutTripInput
    travelModes?: TravelModeCreateNestedManyWithoutTripInput
    preferences?: TripPreferenceCreateNestedOneWithoutTripInput
    itinerary?: ItineraryCreateNestedOneWithoutTripInput
  }

  export type TripUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    totalBudget: number
    currency?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    destinations?: DestinationUncheckedCreateNestedManyWithoutTripInput
    travelModes?: TravelModeUncheckedCreateNestedManyWithoutTripInput
    preferences?: TripPreferenceUncheckedCreateNestedOneWithoutTripInput
    itinerary?: ItineraryUncheckedCreateNestedOneWithoutTripInput
  }

  export type TripCreateOrConnectWithoutUserInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput>
  }

  export type TripCreateManyUserInputEnvelope = {
    data: TripCreateManyUserInput | TripCreateManyUserInput[]
  }

  export type TripUpsertWithWhereUniqueWithoutUserInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutUserInput, TripUncheckedUpdateWithoutUserInput>
    create: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput>
  }

  export type TripUpdateWithWhereUniqueWithoutUserInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutUserInput, TripUncheckedUpdateWithoutUserInput>
  }

  export type TripUpdateManyWithWhereWithoutUserInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutUserInput>
  }

  export type TripScalarWhereInput = {
    AND?: TripScalarWhereInput | TripScalarWhereInput[]
    OR?: TripScalarWhereInput[]
    NOT?: TripScalarWhereInput | TripScalarWhereInput[]
    id?: StringFilter<"Trip"> | string
    userId?: StringFilter<"Trip"> | string
    title?: StringFilter<"Trip"> | string
    totalBudget?: FloatFilter<"Trip"> | number
    currency?: StringFilter<"Trip"> | string
    startDate?: DateTimeFilter<"Trip"> | Date | string
    endDate?: DateTimeFilter<"Trip"> | Date | string
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
  }

  export type UserCreateWithoutTripsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutTripsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutTripsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTripsInput, UserUncheckedCreateWithoutTripsInput>
  }

  export type DestinationCreateWithoutTripInput = {
    id?: string
    city: string
    duration: number
    order: number
    dailyPlans?: DailyPlanCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateWithoutTripInput = {
    id?: string
    city: string
    duration: number
    order: number
    dailyPlans?: DailyPlanUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationCreateOrConnectWithoutTripInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutTripInput, DestinationUncheckedCreateWithoutTripInput>
  }

  export type DestinationCreateManyTripInputEnvelope = {
    data: DestinationCreateManyTripInput | DestinationCreateManyTripInput[]
  }

  export type TravelModeCreateWithoutTripInput = {
    id?: string
    mode: string
  }

  export type TravelModeUncheckedCreateWithoutTripInput = {
    id?: string
    mode: string
  }

  export type TravelModeCreateOrConnectWithoutTripInput = {
    where: TravelModeWhereUniqueInput
    create: XOR<TravelModeCreateWithoutTripInput, TravelModeUncheckedCreateWithoutTripInput>
  }

  export type TravelModeCreateManyTripInputEnvelope = {
    data: TravelModeCreateManyTripInput | TravelModeCreateManyTripInput[]
  }

  export type TripPreferenceCreateWithoutTripInput = {
    id?: string
    adults?: number
    children?: number
    accommodationType: string
    mealPlanning?: boolean
    activityPreferences: string
  }

  export type TripPreferenceUncheckedCreateWithoutTripInput = {
    id?: string
    adults?: number
    children?: number
    accommodationType: string
    mealPlanning?: boolean
    activityPreferences: string
  }

  export type TripPreferenceCreateOrConnectWithoutTripInput = {
    where: TripPreferenceWhereUniqueInput
    create: XOR<TripPreferenceCreateWithoutTripInput, TripPreferenceUncheckedCreateWithoutTripInput>
  }

  export type ItineraryCreateWithoutTripInput = {
    id?: string
    totalCost: number
    accommodationCost: number
    transportationCost: number
    activitiesCost: number
    mealsCost: number
    otherCost: number
    dailyPlans?: DailyPlanCreateNestedManyWithoutItineraryInput
  }

  export type ItineraryUncheckedCreateWithoutTripInput = {
    id?: string
    totalCost: number
    accommodationCost: number
    transportationCost: number
    activitiesCost: number
    mealsCost: number
    otherCost: number
    dailyPlans?: DailyPlanUncheckedCreateNestedManyWithoutItineraryInput
  }

  export type ItineraryCreateOrConnectWithoutTripInput = {
    where: ItineraryWhereUniqueInput
    create: XOR<ItineraryCreateWithoutTripInput, ItineraryUncheckedCreateWithoutTripInput>
  }

  export type UserUpsertWithoutTripsInput = {
    update: XOR<UserUpdateWithoutTripsInput, UserUncheckedUpdateWithoutTripsInput>
    create: XOR<UserCreateWithoutTripsInput, UserUncheckedCreateWithoutTripsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTripsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTripsInput, UserUncheckedUpdateWithoutTripsInput>
  }

  export type UserUpdateWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationUpsertWithWhereUniqueWithoutTripInput = {
    where: DestinationWhereUniqueInput
    update: XOR<DestinationUpdateWithoutTripInput, DestinationUncheckedUpdateWithoutTripInput>
    create: XOR<DestinationCreateWithoutTripInput, DestinationUncheckedCreateWithoutTripInput>
  }

  export type DestinationUpdateWithWhereUniqueWithoutTripInput = {
    where: DestinationWhereUniqueInput
    data: XOR<DestinationUpdateWithoutTripInput, DestinationUncheckedUpdateWithoutTripInput>
  }

  export type DestinationUpdateManyWithWhereWithoutTripInput = {
    where: DestinationScalarWhereInput
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyWithoutTripInput>
  }

  export type DestinationScalarWhereInput = {
    AND?: DestinationScalarWhereInput | DestinationScalarWhereInput[]
    OR?: DestinationScalarWhereInput[]
    NOT?: DestinationScalarWhereInput | DestinationScalarWhereInput[]
    id?: StringFilter<"Destination"> | string
    tripId?: StringFilter<"Destination"> | string
    city?: StringFilter<"Destination"> | string
    duration?: IntFilter<"Destination"> | number
    order?: IntFilter<"Destination"> | number
  }

  export type TravelModeUpsertWithWhereUniqueWithoutTripInput = {
    where: TravelModeWhereUniqueInput
    update: XOR<TravelModeUpdateWithoutTripInput, TravelModeUncheckedUpdateWithoutTripInput>
    create: XOR<TravelModeCreateWithoutTripInput, TravelModeUncheckedCreateWithoutTripInput>
  }

  export type TravelModeUpdateWithWhereUniqueWithoutTripInput = {
    where: TravelModeWhereUniqueInput
    data: XOR<TravelModeUpdateWithoutTripInput, TravelModeUncheckedUpdateWithoutTripInput>
  }

  export type TravelModeUpdateManyWithWhereWithoutTripInput = {
    where: TravelModeScalarWhereInput
    data: XOR<TravelModeUpdateManyMutationInput, TravelModeUncheckedUpdateManyWithoutTripInput>
  }

  export type TravelModeScalarWhereInput = {
    AND?: TravelModeScalarWhereInput | TravelModeScalarWhereInput[]
    OR?: TravelModeScalarWhereInput[]
    NOT?: TravelModeScalarWhereInput | TravelModeScalarWhereInput[]
    id?: StringFilter<"TravelMode"> | string
    tripId?: StringFilter<"TravelMode"> | string
    mode?: StringFilter<"TravelMode"> | string
  }

  export type TripPreferenceUpsertWithoutTripInput = {
    update: XOR<TripPreferenceUpdateWithoutTripInput, TripPreferenceUncheckedUpdateWithoutTripInput>
    create: XOR<TripPreferenceCreateWithoutTripInput, TripPreferenceUncheckedCreateWithoutTripInput>
    where?: TripPreferenceWhereInput
  }

  export type TripPreferenceUpdateToOneWithWhereWithoutTripInput = {
    where?: TripPreferenceWhereInput
    data: XOR<TripPreferenceUpdateWithoutTripInput, TripPreferenceUncheckedUpdateWithoutTripInput>
  }

  export type TripPreferenceUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    accommodationType?: StringFieldUpdateOperationsInput | string
    mealPlanning?: BoolFieldUpdateOperationsInput | boolean
    activityPreferences?: StringFieldUpdateOperationsInput | string
  }

  export type TripPreferenceUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    accommodationType?: StringFieldUpdateOperationsInput | string
    mealPlanning?: BoolFieldUpdateOperationsInput | boolean
    activityPreferences?: StringFieldUpdateOperationsInput | string
  }

  export type ItineraryUpsertWithoutTripInput = {
    update: XOR<ItineraryUpdateWithoutTripInput, ItineraryUncheckedUpdateWithoutTripInput>
    create: XOR<ItineraryCreateWithoutTripInput, ItineraryUncheckedCreateWithoutTripInput>
    where?: ItineraryWhereInput
  }

  export type ItineraryUpdateToOneWithWhereWithoutTripInput = {
    where?: ItineraryWhereInput
    data: XOR<ItineraryUpdateWithoutTripInput, ItineraryUncheckedUpdateWithoutTripInput>
  }

  export type ItineraryUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    accommodationCost?: FloatFieldUpdateOperationsInput | number
    transportationCost?: FloatFieldUpdateOperationsInput | number
    activitiesCost?: FloatFieldUpdateOperationsInput | number
    mealsCost?: FloatFieldUpdateOperationsInput | number
    otherCost?: FloatFieldUpdateOperationsInput | number
    dailyPlans?: DailyPlanUpdateManyWithoutItineraryNestedInput
  }

  export type ItineraryUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    accommodationCost?: FloatFieldUpdateOperationsInput | number
    transportationCost?: FloatFieldUpdateOperationsInput | number
    activitiesCost?: FloatFieldUpdateOperationsInput | number
    mealsCost?: FloatFieldUpdateOperationsInput | number
    otherCost?: FloatFieldUpdateOperationsInput | number
    dailyPlans?: DailyPlanUncheckedUpdateManyWithoutItineraryNestedInput
  }

  export type TripCreateWithoutDestinationsInput = {
    id?: string
    title: string
    totalBudget: number
    currency?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTripsInput
    travelModes?: TravelModeCreateNestedManyWithoutTripInput
    preferences?: TripPreferenceCreateNestedOneWithoutTripInput
    itinerary?: ItineraryCreateNestedOneWithoutTripInput
  }

  export type TripUncheckedCreateWithoutDestinationsInput = {
    id?: string
    userId: string
    title: string
    totalBudget: number
    currency?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    travelModes?: TravelModeUncheckedCreateNestedManyWithoutTripInput
    preferences?: TripPreferenceUncheckedCreateNestedOneWithoutTripInput
    itinerary?: ItineraryUncheckedCreateNestedOneWithoutTripInput
  }

  export type TripCreateOrConnectWithoutDestinationsInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutDestinationsInput, TripUncheckedCreateWithoutDestinationsInput>
  }

  export type DailyPlanCreateWithoutDestinationInput = {
    id?: string
    date: Date | string
    itinerary: ItineraryCreateNestedOneWithoutDailyPlansInput
    activities?: ActivityCreateNestedManyWithoutDailyPlanInput
    meals?: MealCreateNestedManyWithoutDailyPlanInput
    accommodation?: AccommodationCreateNestedOneWithoutDailyPlanInput
    transportation?: TransportationCreateNestedOneWithoutDailyPlanInput
  }

  export type DailyPlanUncheckedCreateWithoutDestinationInput = {
    id?: string
    itineraryId: string
    date: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutDailyPlanInput
    meals?: MealUncheckedCreateNestedManyWithoutDailyPlanInput
    accommodation?: AccommodationUncheckedCreateNestedOneWithoutDailyPlanInput
    transportation?: TransportationUncheckedCreateNestedOneWithoutDailyPlanInput
  }

  export type DailyPlanCreateOrConnectWithoutDestinationInput = {
    where: DailyPlanWhereUniqueInput
    create: XOR<DailyPlanCreateWithoutDestinationInput, DailyPlanUncheckedCreateWithoutDestinationInput>
  }

  export type DailyPlanCreateManyDestinationInputEnvelope = {
    data: DailyPlanCreateManyDestinationInput | DailyPlanCreateManyDestinationInput[]
  }

  export type TripUpsertWithoutDestinationsInput = {
    update: XOR<TripUpdateWithoutDestinationsInput, TripUncheckedUpdateWithoutDestinationsInput>
    create: XOR<TripCreateWithoutDestinationsInput, TripUncheckedCreateWithoutDestinationsInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutDestinationsInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutDestinationsInput, TripUncheckedUpdateWithoutDestinationsInput>
  }

  export type TripUpdateWithoutDestinationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalBudget?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
    travelModes?: TravelModeUpdateManyWithoutTripNestedInput
    preferences?: TripPreferenceUpdateOneWithoutTripNestedInput
    itinerary?: ItineraryUpdateOneWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutDestinationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalBudget?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travelModes?: TravelModeUncheckedUpdateManyWithoutTripNestedInput
    preferences?: TripPreferenceUncheckedUpdateOneWithoutTripNestedInput
    itinerary?: ItineraryUncheckedUpdateOneWithoutTripNestedInput
  }

  export type DailyPlanUpsertWithWhereUniqueWithoutDestinationInput = {
    where: DailyPlanWhereUniqueInput
    update: XOR<DailyPlanUpdateWithoutDestinationInput, DailyPlanUncheckedUpdateWithoutDestinationInput>
    create: XOR<DailyPlanCreateWithoutDestinationInput, DailyPlanUncheckedCreateWithoutDestinationInput>
  }

  export type DailyPlanUpdateWithWhereUniqueWithoutDestinationInput = {
    where: DailyPlanWhereUniqueInput
    data: XOR<DailyPlanUpdateWithoutDestinationInput, DailyPlanUncheckedUpdateWithoutDestinationInput>
  }

  export type DailyPlanUpdateManyWithWhereWithoutDestinationInput = {
    where: DailyPlanScalarWhereInput
    data: XOR<DailyPlanUpdateManyMutationInput, DailyPlanUncheckedUpdateManyWithoutDestinationInput>
  }

  export type DailyPlanScalarWhereInput = {
    AND?: DailyPlanScalarWhereInput | DailyPlanScalarWhereInput[]
    OR?: DailyPlanScalarWhereInput[]
    NOT?: DailyPlanScalarWhereInput | DailyPlanScalarWhereInput[]
    id?: StringFilter<"DailyPlan"> | string
    itineraryId?: StringFilter<"DailyPlan"> | string
    destinationId?: StringFilter<"DailyPlan"> | string
    date?: DateTimeFilter<"DailyPlan"> | Date | string
  }

  export type TripCreateWithoutTravelModesInput = {
    id?: string
    title: string
    totalBudget: number
    currency?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTripsInput
    destinations?: DestinationCreateNestedManyWithoutTripInput
    preferences?: TripPreferenceCreateNestedOneWithoutTripInput
    itinerary?: ItineraryCreateNestedOneWithoutTripInput
  }

  export type TripUncheckedCreateWithoutTravelModesInput = {
    id?: string
    userId: string
    title: string
    totalBudget: number
    currency?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    destinations?: DestinationUncheckedCreateNestedManyWithoutTripInput
    preferences?: TripPreferenceUncheckedCreateNestedOneWithoutTripInput
    itinerary?: ItineraryUncheckedCreateNestedOneWithoutTripInput
  }

  export type TripCreateOrConnectWithoutTravelModesInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutTravelModesInput, TripUncheckedCreateWithoutTravelModesInput>
  }

  export type TripUpsertWithoutTravelModesInput = {
    update: XOR<TripUpdateWithoutTravelModesInput, TripUncheckedUpdateWithoutTravelModesInput>
    create: XOR<TripCreateWithoutTravelModesInput, TripUncheckedCreateWithoutTravelModesInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutTravelModesInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutTravelModesInput, TripUncheckedUpdateWithoutTravelModesInput>
  }

  export type TripUpdateWithoutTravelModesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalBudget?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
    destinations?: DestinationUpdateManyWithoutTripNestedInput
    preferences?: TripPreferenceUpdateOneWithoutTripNestedInput
    itinerary?: ItineraryUpdateOneWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutTravelModesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalBudget?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destinations?: DestinationUncheckedUpdateManyWithoutTripNestedInput
    preferences?: TripPreferenceUncheckedUpdateOneWithoutTripNestedInput
    itinerary?: ItineraryUncheckedUpdateOneWithoutTripNestedInput
  }

  export type TripCreateWithoutPreferencesInput = {
    id?: string
    title: string
    totalBudget: number
    currency?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTripsInput
    destinations?: DestinationCreateNestedManyWithoutTripInput
    travelModes?: TravelModeCreateNestedManyWithoutTripInput
    itinerary?: ItineraryCreateNestedOneWithoutTripInput
  }

  export type TripUncheckedCreateWithoutPreferencesInput = {
    id?: string
    userId: string
    title: string
    totalBudget: number
    currency?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    destinations?: DestinationUncheckedCreateNestedManyWithoutTripInput
    travelModes?: TravelModeUncheckedCreateNestedManyWithoutTripInput
    itinerary?: ItineraryUncheckedCreateNestedOneWithoutTripInput
  }

  export type TripCreateOrConnectWithoutPreferencesInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutPreferencesInput, TripUncheckedCreateWithoutPreferencesInput>
  }

  export type TripUpsertWithoutPreferencesInput = {
    update: XOR<TripUpdateWithoutPreferencesInput, TripUncheckedUpdateWithoutPreferencesInput>
    create: XOR<TripCreateWithoutPreferencesInput, TripUncheckedCreateWithoutPreferencesInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutPreferencesInput, TripUncheckedUpdateWithoutPreferencesInput>
  }

  export type TripUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalBudget?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
    destinations?: DestinationUpdateManyWithoutTripNestedInput
    travelModes?: TravelModeUpdateManyWithoutTripNestedInput
    itinerary?: ItineraryUpdateOneWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalBudget?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destinations?: DestinationUncheckedUpdateManyWithoutTripNestedInput
    travelModes?: TravelModeUncheckedUpdateManyWithoutTripNestedInput
    itinerary?: ItineraryUncheckedUpdateOneWithoutTripNestedInput
  }

  export type TripCreateWithoutItineraryInput = {
    id?: string
    title: string
    totalBudget: number
    currency?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTripsInput
    destinations?: DestinationCreateNestedManyWithoutTripInput
    travelModes?: TravelModeCreateNestedManyWithoutTripInput
    preferences?: TripPreferenceCreateNestedOneWithoutTripInput
  }

  export type TripUncheckedCreateWithoutItineraryInput = {
    id?: string
    userId: string
    title: string
    totalBudget: number
    currency?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    destinations?: DestinationUncheckedCreateNestedManyWithoutTripInput
    travelModes?: TravelModeUncheckedCreateNestedManyWithoutTripInput
    preferences?: TripPreferenceUncheckedCreateNestedOneWithoutTripInput
  }

  export type TripCreateOrConnectWithoutItineraryInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutItineraryInput, TripUncheckedCreateWithoutItineraryInput>
  }

  export type DailyPlanCreateWithoutItineraryInput = {
    id?: string
    date: Date | string
    destination: DestinationCreateNestedOneWithoutDailyPlansInput
    activities?: ActivityCreateNestedManyWithoutDailyPlanInput
    meals?: MealCreateNestedManyWithoutDailyPlanInput
    accommodation?: AccommodationCreateNestedOneWithoutDailyPlanInput
    transportation?: TransportationCreateNestedOneWithoutDailyPlanInput
  }

  export type DailyPlanUncheckedCreateWithoutItineraryInput = {
    id?: string
    destinationId: string
    date: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutDailyPlanInput
    meals?: MealUncheckedCreateNestedManyWithoutDailyPlanInput
    accommodation?: AccommodationUncheckedCreateNestedOneWithoutDailyPlanInput
    transportation?: TransportationUncheckedCreateNestedOneWithoutDailyPlanInput
  }

  export type DailyPlanCreateOrConnectWithoutItineraryInput = {
    where: DailyPlanWhereUniqueInput
    create: XOR<DailyPlanCreateWithoutItineraryInput, DailyPlanUncheckedCreateWithoutItineraryInput>
  }

  export type DailyPlanCreateManyItineraryInputEnvelope = {
    data: DailyPlanCreateManyItineraryInput | DailyPlanCreateManyItineraryInput[]
  }

  export type TripUpsertWithoutItineraryInput = {
    update: XOR<TripUpdateWithoutItineraryInput, TripUncheckedUpdateWithoutItineraryInput>
    create: XOR<TripCreateWithoutItineraryInput, TripUncheckedCreateWithoutItineraryInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutItineraryInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutItineraryInput, TripUncheckedUpdateWithoutItineraryInput>
  }

  export type TripUpdateWithoutItineraryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalBudget?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
    destinations?: DestinationUpdateManyWithoutTripNestedInput
    travelModes?: TravelModeUpdateManyWithoutTripNestedInput
    preferences?: TripPreferenceUpdateOneWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutItineraryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalBudget?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destinations?: DestinationUncheckedUpdateManyWithoutTripNestedInput
    travelModes?: TravelModeUncheckedUpdateManyWithoutTripNestedInput
    preferences?: TripPreferenceUncheckedUpdateOneWithoutTripNestedInput
  }

  export type DailyPlanUpsertWithWhereUniqueWithoutItineraryInput = {
    where: DailyPlanWhereUniqueInput
    update: XOR<DailyPlanUpdateWithoutItineraryInput, DailyPlanUncheckedUpdateWithoutItineraryInput>
    create: XOR<DailyPlanCreateWithoutItineraryInput, DailyPlanUncheckedCreateWithoutItineraryInput>
  }

  export type DailyPlanUpdateWithWhereUniqueWithoutItineraryInput = {
    where: DailyPlanWhereUniqueInput
    data: XOR<DailyPlanUpdateWithoutItineraryInput, DailyPlanUncheckedUpdateWithoutItineraryInput>
  }

  export type DailyPlanUpdateManyWithWhereWithoutItineraryInput = {
    where: DailyPlanScalarWhereInput
    data: XOR<DailyPlanUpdateManyMutationInput, DailyPlanUncheckedUpdateManyWithoutItineraryInput>
  }

  export type ItineraryCreateWithoutDailyPlansInput = {
    id?: string
    totalCost: number
    accommodationCost: number
    transportationCost: number
    activitiesCost: number
    mealsCost: number
    otherCost: number
    trip: TripCreateNestedOneWithoutItineraryInput
  }

  export type ItineraryUncheckedCreateWithoutDailyPlansInput = {
    id?: string
    tripId: string
    totalCost: number
    accommodationCost: number
    transportationCost: number
    activitiesCost: number
    mealsCost: number
    otherCost: number
  }

  export type ItineraryCreateOrConnectWithoutDailyPlansInput = {
    where: ItineraryWhereUniqueInput
    create: XOR<ItineraryCreateWithoutDailyPlansInput, ItineraryUncheckedCreateWithoutDailyPlansInput>
  }

  export type DestinationCreateWithoutDailyPlansInput = {
    id?: string
    city: string
    duration: number
    order: number
    trip: TripCreateNestedOneWithoutDestinationsInput
  }

  export type DestinationUncheckedCreateWithoutDailyPlansInput = {
    id?: string
    tripId: string
    city: string
    duration: number
    order: number
  }

  export type DestinationCreateOrConnectWithoutDailyPlansInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutDailyPlansInput, DestinationUncheckedCreateWithoutDailyPlansInput>
  }

  export type ActivityCreateWithoutDailyPlanInput = {
    id?: string
    name: string
    duration: number
    cost: number
  }

  export type ActivityUncheckedCreateWithoutDailyPlanInput = {
    id?: string
    name: string
    duration: number
    cost: number
  }

  export type ActivityCreateOrConnectWithoutDailyPlanInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutDailyPlanInput, ActivityUncheckedCreateWithoutDailyPlanInput>
  }

  export type ActivityCreateManyDailyPlanInputEnvelope = {
    data: ActivityCreateManyDailyPlanInput | ActivityCreateManyDailyPlanInput[]
  }

  export type MealCreateWithoutDailyPlanInput = {
    id?: string
    type: string
    name: string
    cost: number
  }

  export type MealUncheckedCreateWithoutDailyPlanInput = {
    id?: string
    type: string
    name: string
    cost: number
  }

  export type MealCreateOrConnectWithoutDailyPlanInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutDailyPlanInput, MealUncheckedCreateWithoutDailyPlanInput>
  }

  export type MealCreateManyDailyPlanInputEnvelope = {
    data: MealCreateManyDailyPlanInput | MealCreateManyDailyPlanInput[]
  }

  export type AccommodationCreateWithoutDailyPlanInput = {
    id?: string
    name: string
    type: string
    cost: number
  }

  export type AccommodationUncheckedCreateWithoutDailyPlanInput = {
    id?: string
    name: string
    type: string
    cost: number
  }

  export type AccommodationCreateOrConnectWithoutDailyPlanInput = {
    where: AccommodationWhereUniqueInput
    create: XOR<AccommodationCreateWithoutDailyPlanInput, AccommodationUncheckedCreateWithoutDailyPlanInput>
  }

  export type TransportationCreateWithoutDailyPlanInput = {
    id?: string
    mode: string
    from: string
    to: string
    cost: number
    duration: number
  }

  export type TransportationUncheckedCreateWithoutDailyPlanInput = {
    id?: string
    mode: string
    from: string
    to: string
    cost: number
    duration: number
  }

  export type TransportationCreateOrConnectWithoutDailyPlanInput = {
    where: TransportationWhereUniqueInput
    create: XOR<TransportationCreateWithoutDailyPlanInput, TransportationUncheckedCreateWithoutDailyPlanInput>
  }

  export type ItineraryUpsertWithoutDailyPlansInput = {
    update: XOR<ItineraryUpdateWithoutDailyPlansInput, ItineraryUncheckedUpdateWithoutDailyPlansInput>
    create: XOR<ItineraryCreateWithoutDailyPlansInput, ItineraryUncheckedCreateWithoutDailyPlansInput>
    where?: ItineraryWhereInput
  }

  export type ItineraryUpdateToOneWithWhereWithoutDailyPlansInput = {
    where?: ItineraryWhereInput
    data: XOR<ItineraryUpdateWithoutDailyPlansInput, ItineraryUncheckedUpdateWithoutDailyPlansInput>
  }

  export type ItineraryUpdateWithoutDailyPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    accommodationCost?: FloatFieldUpdateOperationsInput | number
    transportationCost?: FloatFieldUpdateOperationsInput | number
    activitiesCost?: FloatFieldUpdateOperationsInput | number
    mealsCost?: FloatFieldUpdateOperationsInput | number
    otherCost?: FloatFieldUpdateOperationsInput | number
    trip?: TripUpdateOneRequiredWithoutItineraryNestedInput
  }

  export type ItineraryUncheckedUpdateWithoutDailyPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    accommodationCost?: FloatFieldUpdateOperationsInput | number
    transportationCost?: FloatFieldUpdateOperationsInput | number
    activitiesCost?: FloatFieldUpdateOperationsInput | number
    mealsCost?: FloatFieldUpdateOperationsInput | number
    otherCost?: FloatFieldUpdateOperationsInput | number
  }

  export type DestinationUpsertWithoutDailyPlansInput = {
    update: XOR<DestinationUpdateWithoutDailyPlansInput, DestinationUncheckedUpdateWithoutDailyPlansInput>
    create: XOR<DestinationCreateWithoutDailyPlansInput, DestinationUncheckedCreateWithoutDailyPlansInput>
    where?: DestinationWhereInput
  }

  export type DestinationUpdateToOneWithWhereWithoutDailyPlansInput = {
    where?: DestinationWhereInput
    data: XOR<DestinationUpdateWithoutDailyPlansInput, DestinationUncheckedUpdateWithoutDailyPlansInput>
  }

  export type DestinationUpdateWithoutDailyPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    trip?: TripUpdateOneRequiredWithoutDestinationsNestedInput
  }

  export type DestinationUncheckedUpdateWithoutDailyPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ActivityUpsertWithWhereUniqueWithoutDailyPlanInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutDailyPlanInput, ActivityUncheckedUpdateWithoutDailyPlanInput>
    create: XOR<ActivityCreateWithoutDailyPlanInput, ActivityUncheckedCreateWithoutDailyPlanInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutDailyPlanInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutDailyPlanInput, ActivityUncheckedUpdateWithoutDailyPlanInput>
  }

  export type ActivityUpdateManyWithWhereWithoutDailyPlanInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutDailyPlanInput>
  }

  export type ActivityScalarWhereInput = {
    AND?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    OR?: ActivityScalarWhereInput[]
    NOT?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    id?: StringFilter<"Activity"> | string
    dailyPlanId?: StringFilter<"Activity"> | string
    name?: StringFilter<"Activity"> | string
    duration?: IntFilter<"Activity"> | number
    cost?: FloatFilter<"Activity"> | number
  }

  export type MealUpsertWithWhereUniqueWithoutDailyPlanInput = {
    where: MealWhereUniqueInput
    update: XOR<MealUpdateWithoutDailyPlanInput, MealUncheckedUpdateWithoutDailyPlanInput>
    create: XOR<MealCreateWithoutDailyPlanInput, MealUncheckedCreateWithoutDailyPlanInput>
  }

  export type MealUpdateWithWhereUniqueWithoutDailyPlanInput = {
    where: MealWhereUniqueInput
    data: XOR<MealUpdateWithoutDailyPlanInput, MealUncheckedUpdateWithoutDailyPlanInput>
  }

  export type MealUpdateManyWithWhereWithoutDailyPlanInput = {
    where: MealScalarWhereInput
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyWithoutDailyPlanInput>
  }

  export type MealScalarWhereInput = {
    AND?: MealScalarWhereInput | MealScalarWhereInput[]
    OR?: MealScalarWhereInput[]
    NOT?: MealScalarWhereInput | MealScalarWhereInput[]
    id?: StringFilter<"Meal"> | string
    dailyPlanId?: StringFilter<"Meal"> | string
    type?: StringFilter<"Meal"> | string
    name?: StringFilter<"Meal"> | string
    cost?: FloatFilter<"Meal"> | number
  }

  export type AccommodationUpsertWithoutDailyPlanInput = {
    update: XOR<AccommodationUpdateWithoutDailyPlanInput, AccommodationUncheckedUpdateWithoutDailyPlanInput>
    create: XOR<AccommodationCreateWithoutDailyPlanInput, AccommodationUncheckedCreateWithoutDailyPlanInput>
    where?: AccommodationWhereInput
  }

  export type AccommodationUpdateToOneWithWhereWithoutDailyPlanInput = {
    where?: AccommodationWhereInput
    data: XOR<AccommodationUpdateWithoutDailyPlanInput, AccommodationUncheckedUpdateWithoutDailyPlanInput>
  }

  export type AccommodationUpdateWithoutDailyPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type AccommodationUncheckedUpdateWithoutDailyPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type TransportationUpsertWithoutDailyPlanInput = {
    update: XOR<TransportationUpdateWithoutDailyPlanInput, TransportationUncheckedUpdateWithoutDailyPlanInput>
    create: XOR<TransportationCreateWithoutDailyPlanInput, TransportationUncheckedCreateWithoutDailyPlanInput>
    where?: TransportationWhereInput
  }

  export type TransportationUpdateToOneWithWhereWithoutDailyPlanInput = {
    where?: TransportationWhereInput
    data: XOR<TransportationUpdateWithoutDailyPlanInput, TransportationUncheckedUpdateWithoutDailyPlanInput>
  }

  export type TransportationUpdateWithoutDailyPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type TransportationUncheckedUpdateWithoutDailyPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type DailyPlanCreateWithoutActivitiesInput = {
    id?: string
    date: Date | string
    itinerary: ItineraryCreateNestedOneWithoutDailyPlansInput
    destination: DestinationCreateNestedOneWithoutDailyPlansInput
    meals?: MealCreateNestedManyWithoutDailyPlanInput
    accommodation?: AccommodationCreateNestedOneWithoutDailyPlanInput
    transportation?: TransportationCreateNestedOneWithoutDailyPlanInput
  }

  export type DailyPlanUncheckedCreateWithoutActivitiesInput = {
    id?: string
    itineraryId: string
    destinationId: string
    date: Date | string
    meals?: MealUncheckedCreateNestedManyWithoutDailyPlanInput
    accommodation?: AccommodationUncheckedCreateNestedOneWithoutDailyPlanInput
    transportation?: TransportationUncheckedCreateNestedOneWithoutDailyPlanInput
  }

  export type DailyPlanCreateOrConnectWithoutActivitiesInput = {
    where: DailyPlanWhereUniqueInput
    create: XOR<DailyPlanCreateWithoutActivitiesInput, DailyPlanUncheckedCreateWithoutActivitiesInput>
  }

  export type DailyPlanUpsertWithoutActivitiesInput = {
    update: XOR<DailyPlanUpdateWithoutActivitiesInput, DailyPlanUncheckedUpdateWithoutActivitiesInput>
    create: XOR<DailyPlanCreateWithoutActivitiesInput, DailyPlanUncheckedCreateWithoutActivitiesInput>
    where?: DailyPlanWhereInput
  }

  export type DailyPlanUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: DailyPlanWhereInput
    data: XOR<DailyPlanUpdateWithoutActivitiesInput, DailyPlanUncheckedUpdateWithoutActivitiesInput>
  }

  export type DailyPlanUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    itinerary?: ItineraryUpdateOneRequiredWithoutDailyPlansNestedInput
    destination?: DestinationUpdateOneRequiredWithoutDailyPlansNestedInput
    meals?: MealUpdateManyWithoutDailyPlanNestedInput
    accommodation?: AccommodationUpdateOneWithoutDailyPlanNestedInput
    transportation?: TransportationUpdateOneWithoutDailyPlanNestedInput
  }

  export type DailyPlanUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    itineraryId?: StringFieldUpdateOperationsInput | string
    destinationId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUncheckedUpdateManyWithoutDailyPlanNestedInput
    accommodation?: AccommodationUncheckedUpdateOneWithoutDailyPlanNestedInput
    transportation?: TransportationUncheckedUpdateOneWithoutDailyPlanNestedInput
  }

  export type DailyPlanCreateWithoutMealsInput = {
    id?: string
    date: Date | string
    itinerary: ItineraryCreateNestedOneWithoutDailyPlansInput
    destination: DestinationCreateNestedOneWithoutDailyPlansInput
    activities?: ActivityCreateNestedManyWithoutDailyPlanInput
    accommodation?: AccommodationCreateNestedOneWithoutDailyPlanInput
    transportation?: TransportationCreateNestedOneWithoutDailyPlanInput
  }

  export type DailyPlanUncheckedCreateWithoutMealsInput = {
    id?: string
    itineraryId: string
    destinationId: string
    date: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutDailyPlanInput
    accommodation?: AccommodationUncheckedCreateNestedOneWithoutDailyPlanInput
    transportation?: TransportationUncheckedCreateNestedOneWithoutDailyPlanInput
  }

  export type DailyPlanCreateOrConnectWithoutMealsInput = {
    where: DailyPlanWhereUniqueInput
    create: XOR<DailyPlanCreateWithoutMealsInput, DailyPlanUncheckedCreateWithoutMealsInput>
  }

  export type DailyPlanUpsertWithoutMealsInput = {
    update: XOR<DailyPlanUpdateWithoutMealsInput, DailyPlanUncheckedUpdateWithoutMealsInput>
    create: XOR<DailyPlanCreateWithoutMealsInput, DailyPlanUncheckedCreateWithoutMealsInput>
    where?: DailyPlanWhereInput
  }

  export type DailyPlanUpdateToOneWithWhereWithoutMealsInput = {
    where?: DailyPlanWhereInput
    data: XOR<DailyPlanUpdateWithoutMealsInput, DailyPlanUncheckedUpdateWithoutMealsInput>
  }

  export type DailyPlanUpdateWithoutMealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    itinerary?: ItineraryUpdateOneRequiredWithoutDailyPlansNestedInput
    destination?: DestinationUpdateOneRequiredWithoutDailyPlansNestedInput
    activities?: ActivityUpdateManyWithoutDailyPlanNestedInput
    accommodation?: AccommodationUpdateOneWithoutDailyPlanNestedInput
    transportation?: TransportationUpdateOneWithoutDailyPlanNestedInput
  }

  export type DailyPlanUncheckedUpdateWithoutMealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    itineraryId?: StringFieldUpdateOperationsInput | string
    destinationId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutDailyPlanNestedInput
    accommodation?: AccommodationUncheckedUpdateOneWithoutDailyPlanNestedInput
    transportation?: TransportationUncheckedUpdateOneWithoutDailyPlanNestedInput
  }

  export type DailyPlanCreateWithoutAccommodationInput = {
    id?: string
    date: Date | string
    itinerary: ItineraryCreateNestedOneWithoutDailyPlansInput
    destination: DestinationCreateNestedOneWithoutDailyPlansInput
    activities?: ActivityCreateNestedManyWithoutDailyPlanInput
    meals?: MealCreateNestedManyWithoutDailyPlanInput
    transportation?: TransportationCreateNestedOneWithoutDailyPlanInput
  }

  export type DailyPlanUncheckedCreateWithoutAccommodationInput = {
    id?: string
    itineraryId: string
    destinationId: string
    date: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutDailyPlanInput
    meals?: MealUncheckedCreateNestedManyWithoutDailyPlanInput
    transportation?: TransportationUncheckedCreateNestedOneWithoutDailyPlanInput
  }

  export type DailyPlanCreateOrConnectWithoutAccommodationInput = {
    where: DailyPlanWhereUniqueInput
    create: XOR<DailyPlanCreateWithoutAccommodationInput, DailyPlanUncheckedCreateWithoutAccommodationInput>
  }

  export type DailyPlanUpsertWithoutAccommodationInput = {
    update: XOR<DailyPlanUpdateWithoutAccommodationInput, DailyPlanUncheckedUpdateWithoutAccommodationInput>
    create: XOR<DailyPlanCreateWithoutAccommodationInput, DailyPlanUncheckedCreateWithoutAccommodationInput>
    where?: DailyPlanWhereInput
  }

  export type DailyPlanUpdateToOneWithWhereWithoutAccommodationInput = {
    where?: DailyPlanWhereInput
    data: XOR<DailyPlanUpdateWithoutAccommodationInput, DailyPlanUncheckedUpdateWithoutAccommodationInput>
  }

  export type DailyPlanUpdateWithoutAccommodationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    itinerary?: ItineraryUpdateOneRequiredWithoutDailyPlansNestedInput
    destination?: DestinationUpdateOneRequiredWithoutDailyPlansNestedInput
    activities?: ActivityUpdateManyWithoutDailyPlanNestedInput
    meals?: MealUpdateManyWithoutDailyPlanNestedInput
    transportation?: TransportationUpdateOneWithoutDailyPlanNestedInput
  }

  export type DailyPlanUncheckedUpdateWithoutAccommodationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itineraryId?: StringFieldUpdateOperationsInput | string
    destinationId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutDailyPlanNestedInput
    meals?: MealUncheckedUpdateManyWithoutDailyPlanNestedInput
    transportation?: TransportationUncheckedUpdateOneWithoutDailyPlanNestedInput
  }

  export type DailyPlanCreateWithoutTransportationInput = {
    id?: string
    date: Date | string
    itinerary: ItineraryCreateNestedOneWithoutDailyPlansInput
    destination: DestinationCreateNestedOneWithoutDailyPlansInput
    activities?: ActivityCreateNestedManyWithoutDailyPlanInput
    meals?: MealCreateNestedManyWithoutDailyPlanInput
    accommodation?: AccommodationCreateNestedOneWithoutDailyPlanInput
  }

  export type DailyPlanUncheckedCreateWithoutTransportationInput = {
    id?: string
    itineraryId: string
    destinationId: string
    date: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutDailyPlanInput
    meals?: MealUncheckedCreateNestedManyWithoutDailyPlanInput
    accommodation?: AccommodationUncheckedCreateNestedOneWithoutDailyPlanInput
  }

  export type DailyPlanCreateOrConnectWithoutTransportationInput = {
    where: DailyPlanWhereUniqueInput
    create: XOR<DailyPlanCreateWithoutTransportationInput, DailyPlanUncheckedCreateWithoutTransportationInput>
  }

  export type DailyPlanUpsertWithoutTransportationInput = {
    update: XOR<DailyPlanUpdateWithoutTransportationInput, DailyPlanUncheckedUpdateWithoutTransportationInput>
    create: XOR<DailyPlanCreateWithoutTransportationInput, DailyPlanUncheckedCreateWithoutTransportationInput>
    where?: DailyPlanWhereInput
  }

  export type DailyPlanUpdateToOneWithWhereWithoutTransportationInput = {
    where?: DailyPlanWhereInput
    data: XOR<DailyPlanUpdateWithoutTransportationInput, DailyPlanUncheckedUpdateWithoutTransportationInput>
  }

  export type DailyPlanUpdateWithoutTransportationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    itinerary?: ItineraryUpdateOneRequiredWithoutDailyPlansNestedInput
    destination?: DestinationUpdateOneRequiredWithoutDailyPlansNestedInput
    activities?: ActivityUpdateManyWithoutDailyPlanNestedInput
    meals?: MealUpdateManyWithoutDailyPlanNestedInput
    accommodation?: AccommodationUpdateOneWithoutDailyPlanNestedInput
  }

  export type DailyPlanUncheckedUpdateWithoutTransportationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itineraryId?: StringFieldUpdateOperationsInput | string
    destinationId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutDailyPlanNestedInput
    meals?: MealUncheckedUpdateManyWithoutDailyPlanNestedInput
    accommodation?: AccommodationUncheckedUpdateOneWithoutDailyPlanNestedInput
  }

  export type TripCreateManyUserInput = {
    id?: string
    title: string
    totalBudget: number
    currency?: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalBudget?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destinations?: DestinationUpdateManyWithoutTripNestedInput
    travelModes?: TravelModeUpdateManyWithoutTripNestedInput
    preferences?: TripPreferenceUpdateOneWithoutTripNestedInput
    itinerary?: ItineraryUpdateOneWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalBudget?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destinations?: DestinationUncheckedUpdateManyWithoutTripNestedInput
    travelModes?: TravelModeUncheckedUpdateManyWithoutTripNestedInput
    preferences?: TripPreferenceUncheckedUpdateOneWithoutTripNestedInput
    itinerary?: ItineraryUncheckedUpdateOneWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalBudget?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationCreateManyTripInput = {
    id?: string
    city: string
    duration: number
    order: number
  }

  export type TravelModeCreateManyTripInput = {
    id?: string
    mode: string
  }

  export type DestinationUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    dailyPlans?: DailyPlanUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    dailyPlans?: DailyPlanUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type TravelModeUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
  }

  export type TravelModeUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
  }

  export type TravelModeUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
  }

  export type DailyPlanCreateManyDestinationInput = {
    id?: string
    itineraryId: string
    date: Date | string
  }

  export type DailyPlanUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    itinerary?: ItineraryUpdateOneRequiredWithoutDailyPlansNestedInput
    activities?: ActivityUpdateManyWithoutDailyPlanNestedInput
    meals?: MealUpdateManyWithoutDailyPlanNestedInput
    accommodation?: AccommodationUpdateOneWithoutDailyPlanNestedInput
    transportation?: TransportationUpdateOneWithoutDailyPlanNestedInput
  }

  export type DailyPlanUncheckedUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itineraryId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutDailyPlanNestedInput
    meals?: MealUncheckedUpdateManyWithoutDailyPlanNestedInput
    accommodation?: AccommodationUncheckedUpdateOneWithoutDailyPlanNestedInput
    transportation?: TransportationUncheckedUpdateOneWithoutDailyPlanNestedInput
  }

  export type DailyPlanUncheckedUpdateManyWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itineraryId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyPlanCreateManyItineraryInput = {
    id?: string
    destinationId: string
    date: Date | string
  }

  export type DailyPlanUpdateWithoutItineraryInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: DestinationUpdateOneRequiredWithoutDailyPlansNestedInput
    activities?: ActivityUpdateManyWithoutDailyPlanNestedInput
    meals?: MealUpdateManyWithoutDailyPlanNestedInput
    accommodation?: AccommodationUpdateOneWithoutDailyPlanNestedInput
    transportation?: TransportationUpdateOneWithoutDailyPlanNestedInput
  }

  export type DailyPlanUncheckedUpdateWithoutItineraryInput = {
    id?: StringFieldUpdateOperationsInput | string
    destinationId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutDailyPlanNestedInput
    meals?: MealUncheckedUpdateManyWithoutDailyPlanNestedInput
    accommodation?: AccommodationUncheckedUpdateOneWithoutDailyPlanNestedInput
    transportation?: TransportationUncheckedUpdateOneWithoutDailyPlanNestedInput
  }

  export type DailyPlanUncheckedUpdateManyWithoutItineraryInput = {
    id?: StringFieldUpdateOperationsInput | string
    destinationId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateManyDailyPlanInput = {
    id?: string
    name: string
    duration: number
    cost: number
  }

  export type MealCreateManyDailyPlanInput = {
    id?: string
    type: string
    name: string
    cost: number
  }

  export type ActivityUpdateWithoutDailyPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type ActivityUncheckedUpdateWithoutDailyPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type ActivityUncheckedUpdateManyWithoutDailyPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type MealUpdateWithoutDailyPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type MealUncheckedUpdateWithoutDailyPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
  }

  export type MealUncheckedUpdateManyWithoutDailyPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
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