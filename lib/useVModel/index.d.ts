import { VModelOptions } from './type';
export default function useVModel<O extends object, K extends keyof O, Name extends String>(props: O, key: K, emit: () => void, options?: VModelOptions): any;
