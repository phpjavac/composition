import { BasicTarget } from '../utils/dom';
interface Options {
    onEnter?: () => void;
    onLeave?: () => void;
}
export default function useHover(target: BasicTarget, options?: Options): import("vue").Ref<boolean>;
export {};
