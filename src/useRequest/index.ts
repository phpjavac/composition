import axios, { AxiosRequestConfig, AxiosResponse, AxiosStatic } from "axios";
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

class Axios {
  private static instance: AxiosStatic;

  public static getInstance(): AxiosStatic {
    if (!Axios.instance) {
      Axios.instance = axios;
    }
    return Axios.instance;
  }

  /**
   * 设置默认参数
   * @param config -> AxiosRequestConfig
   */
  public static setOption(config: AxiosRequestConfig) {
    Axios.getInstance().defaults = config;
  }

  /**
   * 设置请求拦截器
   */
  public static setRequest(
    func: (
      // eslint-disable-next-line no-unused-vars
      arg0: AxiosRequestConfig
    ) => AxiosRequestConfig | Promise<AxiosRequestConfig>
  ) {
    Axios.getInstance().interceptors.request.use(func);
  }

  /**
   * 添加响应拦截器
   */
  public static setResponse(
    func: (
      // eslint-disable-next-line no-unused-vars
      value: AxiosResponse<any>
    ) => AxiosResponse<any> | Promise<AxiosResponse<any>>
  ) {
    Axios.getInstance().interceptors.response.use(func);
  }
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
  Axios.getInstance()
    [method](url, body, { headers })
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
