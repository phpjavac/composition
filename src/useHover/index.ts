/*
 * @Author: your name
 * @Date: 2021-09-23 10:16:27
 * @LastEditTime: 2021-09-23 13:41:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zcomposition\src\useHover\index.ts
 */
import { BasicTarget, getTargetElement } from '../utils/dom';
import { onUnmounted,ref } from 'vue';
import { safeOnMounted } from '../utils';

interface Options {
  onEnter?: () => void;
  onLeave?: () => void;
}

export function useHover(target: BasicTarget, options?: Options) {
  const state = ref(false);
  const { onEnter, onLeave } = options ?? {};
  
  function onMouseEnter() {
    // setTrue();
    state.value=true
    onEnter && onEnter();
  }

  function onMouseLeave() {
    // setFalse && setFalse();
    state.value=false
    onLeave && onLeave();
  }

  safeOnMounted(() => {
    const targetElement = getTargetElement(target);
    if (!targetElement) {
      return;
    }
    targetElement.addEventListener('mouseenter', onMouseEnter);
    targetElement.addEventListener('mouseleave', onMouseLeave);
  });

  onUnmounted(() => {
    const targetElement = getTargetElement(target);
    if (targetElement) {
      targetElement.removeEventListener('mouseenter', onMouseEnter);
      targetElement.removeEventListener('mouseleave', onMouseLeave);
    }
  });

  return state;
}