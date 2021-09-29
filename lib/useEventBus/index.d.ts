import { EventType } from 'mitt';
export declare type EventBusConfig = {
    debug: boolean;
};
declare function useEventBus<Events extends Record<EventType, unknown>>(): import("mitt").Emitter<Events>;
declare namespace useEventBus {
    var $config: EventBusConfig;
    var config: (config: EventBusConfig) => void;
}
export { useEventBus };
