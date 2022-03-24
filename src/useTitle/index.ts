import { ref, watch } from 'vue'
// import { isString, MaybeRef } from '../utils'
// import { ConfigurableDocument, defaultDocument } from '../_configurable'
import { isClient, MaybeRef, isString } from '../utils'

const defaultDocument = /* #__PURE__ */ isClient
  ? window.document
  : undefined
// import { useMutationObserver } from '../useMutationObserver'
interface ConfigurableDocument {
  /*
   * Specify a custom `document` instance, e.g. working with iframes or in testing environments.
   */
  document?: Document
}

export interface UseTitleOptions extends ConfigurableDocument {
  /**
   * Observe `document.title` changes using MutationObserve
   *
   * @default false
   */
  observe?: boolean
}

/**
 * Reactive document title.
 *
 * @param newTitle
 * @param options
 */
const useTitle = (
  newTitle: MaybeRef<string | null | undefined> = null,
  options: UseTitleOptions = {},
) => {
  const {
    document = defaultDocument,
    observe = false,
  } = options
  const title = ref(newTitle ?? document?.title ?? null)

  watch(
    title,
    (t, o) => {
      if (isString(t) && t !== o && document)
        document.title = t
    },
    { immediate: true },
  )

  if (observe && document) {
    // useMutationObserver(
    // document.head?.querySelector('title'),
    // () => {
    if (document && document.title !== title.value)
      title.value = document.title
    // },
    // { childList: true },
    // )
  }

  return title
}
export default useTitle