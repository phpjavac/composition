import { Ref } from 'vue';
export declare type BasicTarget<T = HTMLElement> = (() => T | null) | T | null | Ref<T | null | undefined>;
export declare type TargetElement = Element;
export declare function getTargetElement(target?: BasicTarget<TargetElement>, defaultElement?: TargetElement): TargetElement | undefined | null;
