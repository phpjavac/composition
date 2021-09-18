/**
 * 键盘事件
 */

export type keyType = KeyboardEvent['key'] | KeyboardEvent['key'][];

// 触发类型
export type keyEvent = 'keydown' | 'keyup';
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

const useKeyPress = (keyCode: keyType, method = nullFun, option?: EventOption) => {
    
}

export default useKeyPress