import { Ref } from 'vue';
import { PermissionDescriptor } from '../utils';
import { ConfigurableNavigator } from '../_configurable';
declare type DescriptorNamePolyfill = 'clipboard-read' | 'clipboard-write' | 'camera' | 'microphone' | 'speaker';
export declare type GeneralPermissionDescriptor = PermissionDescriptor | {
    name: DescriptorNamePolyfill;
};
export interface UsePermissionOptions<Controls extends boolean> extends ConfigurableNavigator {
    /**
     * Expose more controls
     *
     * @default false
     */
    controls?: Controls;
}
export declare type UsePermissionReturn = Readonly<Ref<PermissionState | undefined>>;
export interface UsePermissionReturnWithControls {
    state: UsePermissionReturn;
    isSupported: boolean;
    query: () => Promise<PermissionStatus | undefined>;
}
/**
 * Reactive Permissions API.
 *
 * @see https://vueuse.org/usePermission
 */
export declare function usePermission(permissionDesc: GeneralPermissionDescriptor | GeneralPermissionDescriptor['name'], options?: UsePermissionOptions<false>): UsePermissionReturn;
export declare function usePermission(permissionDesc: GeneralPermissionDescriptor | GeneralPermissionDescriptor['name'], options: UsePermissionOptions<true>): UsePermissionReturnWithControls;
export {};
