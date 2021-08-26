import axios from "axios";
import { ref } from "vue";

type Method = "get" | "post" | "put" | "delete";

interface ConfigureOptions {
  url: string;
  method: Method;
  body?: any;
  headers?: any;
}
const useRequest = ({ url, method, body, headers }: ConfigureOptions) => {
  const response = ref(null);
  const error = ref("");
  const loading = ref(true);
  axios[method](url, body, headers)
    .then((result) => {
      response.value = result.data;
    })
    .catch((err) => {
      error.value = err;
    })
    .finally(() => {
      loading.value = false;
    });
};

export default useRequest;
