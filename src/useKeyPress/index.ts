/**
 * 键盘事件
 */

import { onUnmounted } from "@vue/runtime-core";

export type keyType = KeyboardEvent['key'] | KeyboardEvent['key'][];

// 触发类型
export type keyEvent = 'keydown' | 'keyup' | 'keypress';
const defaultEvent = ['keydown'];
// opt
export interface EventOption {
    events: Array<keyEvent>,
}

// 占位空函数
const nullFun = () => {}

// code-别名
const aliasKeyMap = {
    ctrl: '',
}

const useEffect = (method: void, ) => {

}

const useKeyPress = (keyCode: keyType, method, option?: EventOption) => {
    console.log(222)
    // nullFun;
    const {events: keyEvent = defaultEvent} = option;
    keyEvent.forEach(kEve => {
        window.addEventListener(kEve, method);
    })
    onUnmounted(() => {
        console.log('ddddddddddddddd')
        keyEvent.forEach(kEve => {
            window.removeEventListener(kEve, method);
        })
    })
}

export default useKeyPress