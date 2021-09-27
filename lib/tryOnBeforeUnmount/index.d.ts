import { Fn } from '../utils';
/**
 * Call onBeforeUnmount() if it's inside a component lifecycle, if not, do nothing
 *
 * @param fn
 */
export declare function tryOnBeforeUnmount(fn: Fn): void;
