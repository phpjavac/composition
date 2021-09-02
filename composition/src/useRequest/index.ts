import axios from "axios";
import { Ref, ref, UnwrapRef } from "vue";

type Method = "get" | "post" | "put" | "delete";

interface ConfigureOptions {
  url: string;
  method: Method;
  body?: any;
  headers?: any;
}

interface UseRequest<T> {
  error: Ref<string>;
  loading: Ref<boolean>;
  response: Ref<UnwrapRef<T>>;
}

const useRequest = <T>({
  url,
  method,
  body,
  headers,
}: ConfigureOptions): UseRequest<T> => {
  const response = ref<T>(null);
  const error = ref("");
  const loading = ref(true);
  console.log(headers, url);
  axios[method](url, body, { headers })
    .then((result) => {
      response.value = result.data;
    })
    .catch((err) => {
      error.value = err;
    })
    .finally(() => {
      loading.value = false;
    });
  return { error, loading, response };
};

export default useRequest;
