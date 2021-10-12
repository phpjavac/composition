import { Fn } from '../utils';
/**
 * Call onScopeDispose() if it's inside a effect scope lifecycle, if not, do nothing
 *
 * @param fn
 */
export default function tryOnScopeDispose(fn: Fn): boolean;
