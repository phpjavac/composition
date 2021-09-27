export * from './lifeCircle';
export * from './is';
export * from './filters';
export * from './types';
export declare function promiseTimeout(ms: number, throwOnTimeout?: boolean, reason?: string): Promise<void>;
export declare function identity<T>(arg: T): T;
export interface SingletonPromiseReturn<T> {
    (): Promise<T>;
    /**
     * Reset current staled promise.
     * await it to have proper shutdown.
     */
    reset: () => Promise<void>;
}
/**
 * Create singleton promise function
 *
 * @example
 * ```
 * const promise = createSingletonPromise(async () => { ... })
 *
 * await promise()
 * await promise() // all of them will be bind to a single promise instance
 * await promise() // and be resolved together
 * ```
 */
export declare function createSingletonPromise<T>(fn: () => Promise<T>): SingletonPromiseReturn<T>;
export declare function invoke<T>(fn: () => T): T;
export declare function containsProp(obj: object, ...props: string[]): boolean;
/**
 * Increase string a value with unit
 *
 * @example '2px' + 1 = '3px'
 * @example '15em' + (-2) = '13em'
 */
export declare function increaseWithUnit(target: number, delta: number): number;
export declare function increaseWithUnit(target: string, delta: number): string;
export declare function increaseWithUnit(target: string | number, delta: number): string | number;
/**
 * Create a new subset object by giving keys
 *
 * @category Object
 */
export declare function objectPick<O, T extends keyof O>(obj: O, keys: T[], omitUndefined?: boolean): Pick<O, T>;
