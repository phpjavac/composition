import { MaybeRef } from '../utils';
import { ComputedRef } from 'vue';
import { ConfigurableNavigator } from '../_configurable';
export interface ClipboardOptions<Source> extends ConfigurableNavigator {
    /**
     * Enabled reading for clipboard
     *
     * @default true
     */
    read?: boolean;
    /**
     * Copy source
     */
    source?: Source;
    /**
     * Milliseconds to reset state of `copied` ref
     *
     * @default 1500
     */
    copiedDuring?: number;
}
export interface ClipboardReturn<Optional> {
    isSupported: boolean;
    text: ComputedRef<string>;
    copied: ComputedRef<boolean>;
    copy: Optional extends true ? (text?: string) => Promise<void> : (text: string) => Promise<void>;
}
/**
 * Reactive Clipboard API.
 *
 * @see https://vueuse.org/useClipboard
 * @param options
 */
export declare function useClipboard(options?: ClipboardOptions<undefined>): ClipboardReturn<false>;
export declare function useClipboard(options: ClipboardOptions<MaybeRef<string>>): ClipboardReturn<true>;
