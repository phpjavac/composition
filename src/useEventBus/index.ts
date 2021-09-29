import { getCurrentInstance } from 'vue'
import mitt, { EventType } from 'mitt'
import { once } from 'lodash'

export type EventBusConfig = {
  debug: boolean
}


function useEventBus<Events extends Record<EventType, unknown>>() {
  const emitter = mitt<Events>();
  const style1 = 'padding:4px;border-radius:2x 0 0 2px;background:#00ADB5;color:#EEEEEE;';
  const style2 = 'padding:4px;border-radius:0 2px 2px 0;background:#393E46;color:white;'
  const cache = {
    instance: getCurrentInstance(),
    uid: undefined,
  }
  cache.uid = cache.instance.uid

  emitter.on("*", (type, ...rest) => {
    if (useEventBus.$config.debug && emitter.all.get(type).length) {
      console.log(rest)
      console.log(`%c${cache.instance.proxy.$options.name || cache.instance.uid}📥: %c${String(type)}`, style1, style2)
    }
  })

  emitter.emit = new Proxy(emitter.emit, {
    apply(target, thisArg, argumentsList) {
      if (useEventBus.$config.debug) {
        console.log(`%c${cache.instance.proxy.$options.name || cache.instance.uid}📤: %c${String(argumentsList[0])}`, style1, style2)
      }
      return target(argumentsList[0], [...argumentsList.splice(1, arguments.length - 1)] as Events[any])
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