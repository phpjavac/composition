import { ref } from "vue";
const useAsync = (promise, hook) => {
  const response = ref(null);
  const error = ref("");
  const loading = ref(true);
  console.log(typeof promise);
  promise().then((res) => {
    response.value = res;
  }).finally(() => {
    hook && hook();
    loading.value = false;
  }).catch((err) => {
    error.value = err;
  });
  return { error, loading, response };
};
export default useAsync;
