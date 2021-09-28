import axios from "axios";
import { ref } from "vue";
class Request {
  static getInstance() {
    if (!Request.instance) {
      Request.instance = axios;
    }
    return Request.instance;
  }
  static setOption(config) {
    const k = Object.keys(config);
    k.forEach((element) => {
      Request.getInstance().defaults[element] = config[element];
    });
  }
  static setRequest(func, errorFunc) {
    Request.getInstance().interceptors.request.use(func, errorFunc);
  }
  static setResponse(func, errorFunc) {
    Request.getInstance().interceptors.response.use(func, errorFunc);
  }
}
const useRequest = ({
  url,
  method,
  body,
  headers
}) => {
  const response = ref(null);
  const error = ref("");
  const loading = ref(true);
  Request.getInstance()[method](url, body, { headers }).then((result) => {
    response.value = result.data;
  }).catch((err) => {
    error.value = err;
  }).finally(() => {
    loading.value = false;
  });
  return { error, loading, response };
};
export { useRequest, Request };
