import { getCurrentInstance, createApp } from 'vue'
import mitt, { Emitter, EventType } from 'mitt'
import { once } from 'lodash'

export type EventBusConfig = {
  debug: boolean
}

const app = createApp({})

function useEventBus<Events extends Record<EventType, unknown>>() {
  let emitter: Emitter<Events>
  if (!app.config.globalProperties.$emitter){
    app.config.globalProperties.$emitter = mitt<Events>()
  }
  // eslint-disable-next-line prefer-const
  emitter = app.config.globalProperties.$emitter
  
  const style1 = 'padding:4px;border-radius:2x 0 0 2px;background:#00ADB5;color:#EEEEEE;';
  const style2 = 'padding:4px;border-radius:0 2px 2px 0;background:#393E46;color:white;'
  const cache = {
    instance: getCurrentInstance(),
    uid () {
      return cache.instance ? cache.instance.uid : undefined
    },
    componentName() {
      return cache.instance ? cache.instance.proxy.$options.name : cache.uid()
    }
  }

  emitter.on("*", (type, rest) => {
    const handle = emitter.all.get(type)
    if (useEventBus.$config.debug && handle && handle.length) {
      console.log(rest)
      console.log(`%c${cache.componentName() || cache.uid()}📥: %c${String(type)}`, style1, style2)
    }
  })

  emitter.emit = new Proxy(emitter.emit, {
    apply(target, thisArg, argumentsList) {
      if (useEventBus.$config.debug) {
        console.log(`%c${cache.componentName() || cache.uid() }📤: %c${String(argumentsList[0])}`, style1, style2)
      }
      return target.apply(thisArg, argumentsList)
    }
  })
  

  return emitter
}

useEventBus.$config = {
  debug: false,
} as EventBusConfig

useEventBus.config = once((config: EventBusConfig) => {
  useEventBus.$config = config;
  if (config && config.debug) {
    console.warn('useEventBus: debug mode is open.')
  }
  Object.defineProperties(useEventBus, {
    $config: {
      ...Object.getOwnPropertyDescriptors(useEventBus.config),
      writable: false,
    }
  })
})


export { useEventBus }