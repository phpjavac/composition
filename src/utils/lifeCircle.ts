import { getCurrentInstance, onMounted } from 'vue';

/**
 * 等待dom挂载完毕后再执行函数
 * @param hook 需要执行的钩子
 */
export function safeOnMounted(hook?: () => void) {
    const instance = getCurrentInstance();
    
    if (instance.isMounted) {
      hook();
    } else {
      console.log(instance);

      onMounted(hook);
    }
  }
