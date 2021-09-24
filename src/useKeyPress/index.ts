/**
 * 键盘事件
 */
import useEffect from "../useEffect";
// 键码
export type KeyType = KeyboardEvent['key'] | KeyboardEvent['key'][];
// 触发类型
export type keyEvent = 'keydown' | 'keyup' | 'keypress';
/**
 * opt
 * @param events 触发类型
 */
export interface EventOption {
    events?: Array<keyEvent>,
}
// 默认触发类型
const defaultEvent: keyEvent[] = ['keydown'];

// 执行的函数类型
type EventMethod = (event?: KeyboardEvent) => void;

/**
 * 监听键盘事件
 * @param keyCode 键码 / true —— true则都会触发
 * @param method 要执行的函数
 * @param option 配置项 
 */
const useKeyPress = (keyCode: KeyType | true, method:EventMethod, option: EventOption = {}) => {
    const { events: keyEvent = defaultEvent } = option;
    const codeMethod = (event: KeyboardEvent) => {
        const getKeyBoolean = (e: KeyType | true): e is true => typeof e === 'boolean';
        if (getKeyBoolean(keyCode)) {
            if (keyCode) method(event);
        } else {
            const keys = typeof keyCode === 'string' ? [keyCode] : [...keyCode]
            if (keys.includes(event.code)) {
                method(event);
            };
        }
    }
    
    useEffect(() => {
        keyEvent.forEach(kEve => {
            window.addEventListener(kEve, codeMethod);
        });
        return () => {
            keyEvent.forEach(kEve => {
                window.removeEventListener(kEve, codeMethod);
            })
        }
    })
}

export default useKeyPress