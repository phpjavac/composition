/**
 * 键盘事件
 */
export declare type keyType = KeyboardEvent['key'] | KeyboardEvent['key'][];
export declare type keyEvent = 'keydown' | 'keyup';
export interface EventOption {
    events: Array<keyEvent>;
}
declare const useKeyPress: (keyCode: keyType, method?: () => void, option?: EventOption) => void;
export default useKeyPress;
