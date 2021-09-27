import { MaybeRef, Stopable } from '../utils';
export interface TimeoutFnOptions {
    /**
     * Start the timer immediate after calling this function
     *
     * @default true
     */
    immediate?: boolean;
}
/**
 * Wrapper for `setTimeout` with controls.
 *
 * @param cb
 * @param interval
 * @param immediate
 */
export declare function useTimeoutFn(cb: (...args: unknown[]) => any, interval: MaybeRef<number>, options?: TimeoutFnOptions): Stopable;
