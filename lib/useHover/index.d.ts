interface hoverOptionType {
    target: HTMLElement;
    persistent?: boolean;
    isDebounce?: boolean;
    delay?: number | number[] | undefined;
}
declare const useHover: (options: hoverOptionType, fnF: () => void, fnS: () => void) => void;
export default useHover;
