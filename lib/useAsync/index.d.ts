import { Ref, UnwrapRef } from 'vue';
interface UseAsync<T> {
    error: Ref<string>;
    loading: Ref<boolean>;
    response: Ref<UnwrapRef<T>>;
}
declare const useAsync: <T>(promise: () => Promise<any>, hook?: () => void) => UseAsync<T>;
export default useAsync;
