export declare type KeyType = KeyboardEvent['key'] | KeyboardEvent['key'][];
export declare type keyEvent = 'keydown' | 'keyup' | 'keypress';
/**
 * opt
 * @param events 触发类型
 */
export interface EventOption {
    events?: Array<keyEvent>;
}
declare type EventMethod = (event?: KeyboardEvent) => void;
/**
 * 监听键盘事件
 * @param keyCode 键码 / true —— true则都会触发
 * @param method 要执行的函数
 * @param option 配置项
 */
declare const useKeyPress: (keyCode: KeyType | true, method: EventMethod, option?: EventOption) => void;
export default useKeyPress;
