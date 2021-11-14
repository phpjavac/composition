import { UnwrapRef } from 'vue';
import { VModelOptions } from './type';
export default function useVModel<O extends object, K extends keyof O, Name extends String>(props: O, key: K, emit: (event: Name, ...args: any[]) => void, options?: VModelOptions): import("vue").Ref<UnwrapRef<O[K]>> | import("vue").WritableComputedRef<O[K]>;
