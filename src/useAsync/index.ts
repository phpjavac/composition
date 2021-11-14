import { Ref, ref, UnwrapRef } from 'vue'



interface UseAsync<T> {
    error: Ref<string>
    loading: Ref<boolean>
    response: Ref<UnwrapRef<T>>
}

const useAsync = <T>(promise: () => Promise<UnwrapRef<T>>, hook?: () => void): UseAsync<T> => {
  const response = ref<T>(null)
  const error = ref('')
  const loading = ref(true)
  console.log(typeof promise);

  promise().then(res => {
    response.value = res;
  }).finally(() => {
    hook && hook();
    loading.value = false;
  }).catch((err) => {
    error.value = err;
  })
  return { error, loading, response }
}
export default useAsync
