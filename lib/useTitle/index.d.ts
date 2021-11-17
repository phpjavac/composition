import { ConfigurableDocument } from '../_configurable';
export interface UseTitleOptions extends ConfigurableDocument {
    /**
     * Observe `document.title` changes using MutationObserve
     *
     * @default false
     */
    observe?: boolean;
}
/**
 * Reactive document title.
 *
 * @param newTitle
 * @param options
 */
declare const useTitle: (newTitle?: any, options?: UseTitleOptions) => any;
export default useTitle;
