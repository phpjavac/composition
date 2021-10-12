import { Fn, MaybeRef } from '../utils';
interface InferEventTarget<Events> {
    addEventListener(event: Events, fn?: any, options?: any): any;
    removeEventListener(event: Events, fn?: any, options?: any): any;
}
export declare type WindowEventName = keyof WindowEventMap;
export declare type DocumentEventName = keyof DocumentEventMap;
export declare type GeneralEventListener<E = Event> = {
    (evt: E): void;
};
/**
 * Register using addEventListener on mounted, and removeEventListener automatically on unmounted.
 *
 * Overload 1: Omitted Window target
 *
 * @param event
 * @param listener
 * @param options
 */
export declare function useEventListener<E extends keyof WindowEventMap>(event: E, listener: (this: Window, ev: WindowEventMap[E]) => any, options?: boolean | AddEventListenerOptions): Fn;
/**
 * Register using addEventListener on mounted, and removeEventListener automatically on unmounted.
 *
 * Overload 2: Explicitly Window target
 *
 * @param target
 * @param event
 * @param listener
 * @param options
 */
export declare function useEventListener<E extends keyof WindowEventMap>(target: Window, event: E, listener: (this: Window, ev: WindowEventMap[E]) => any, options?: boolean | AddEventListenerOptions): Fn;
/**
 * Register using addEventListener on mounted, and removeEventListener automatically on unmounted.
 *
 * Overload 3: Explicitly Document target
 *
 * @param target
 * @param event
 * @param listener
 * @param options
 */
export declare function useEventListener<E extends keyof DocumentEventMap>(target: Document, event: E, listener: (this: Document, ev: DocumentEventMap[E]) => any, options?: boolean | AddEventListenerOptions): Fn;
/**
 * Register using addEventListener on mounted, and removeEventListener automatically on unmounted.
 *
 * Overload 4: Custom event target with event type infer
 *
 * @param target
 * @param event
 * @param listener
 * @param options
 */
export declare function useEventListener<Names extends string, EventType = Event>(target: InferEventTarget<Names>, event: Names, listener: GeneralEventListener<EventType>, options?: boolean | AddEventListenerOptions): Fn;
/**
 * Register using addEventListener on mounted, and removeEventListener automatically on unmounted.
 *
 * Overload 5: Custom event target fallback
 *
 * @param target
 * @param event
 * @param listener
 * @param options
 */
export declare function useEventListener<EventType = Event>(target: MaybeRef<EventTarget | null | undefined>, event: string, listener: GeneralEventListener<EventType>, options?: boolean | AddEventListenerOptions): Fn;
export {};
