import { BasicTarget } from '../utils/dom';
interface Options {
    onEnter?: () => void;
    onLeave?: () => void;
}
export declare function useHover(target: BasicTarget, options?: Options): any;
export {};
