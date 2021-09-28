declare type Fn = (...args: any) => any;
interface DebounceOptions {
    wait: number;
    leading: boolean;
    traling: boolean;
}
declare function useDebounceFn<T extends Fn>(Fn: T, options?: DebounceOptions): {
    run: () => void;
    cancel: () => void;
    flush: () => void;
};
export default useDebounceFn;
