import { Fn, Pausable, MaybeRef } from './types';
export declare type FunctionArgs<Args extends any[] = any[], Return = void> = (...args: Args) => Return;
export interface FunctionWrapperOptions<Args extends any[] = any[], This = any> {
    fn: FunctionArgs<Args, This>;
    args: Args;
    thisArg: This;
}
export declare type EventFilter<Args extends any[] = any[], This = any> = (invoke: Fn, options: FunctionWrapperOptions<Args, This>) => void;
export interface ConfigurableEventFilter {
    /**
     * Filter for if events should to be received.
     *
     */
    eventFilter?: EventFilter;
}
/**
 * @internal
 */
export declare function createFilterWrapper<T extends FunctionArgs>(filter: EventFilter, fn: T): T;
export declare const bypassFilter: EventFilter;
/**
 * Create an EventFilter that debounce the events
 *
 * @param ms
 */
export declare function debounceFilter(ms: MaybeRef<number>): EventFilter<any[], any>;
/**
 * Create an EventFilter that throttle the events
 *
 * @param ms
 * @param [trailing=true]
 */
export declare function throttleFilter(ms: MaybeRef<number>, trailing?: boolean): EventFilter<any[], any>;
/**
 * EventFilter that gives extra controls to pause and resume the filter
 *
 * @param extendFilter  Extra filter to apply when the PauseableFilter is active, default to none
 *
 */
export declare function pausableFilter(extendFilter?: EventFilter): Pausable & {
    eventFilter: EventFilter;
};
