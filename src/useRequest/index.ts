import axios, { AxiosRequestConfig, AxiosResponse, AxiosStatic } from 'axios'
import { Ref, ref, UnwrapRef } from 'vue'

type Method = 'get' | 'post' | 'put' | 'delete'

interface ConfigureOptions {
  url: string
  method: Method
  body?: any
  headers?: any
}

class Request {
  private static instance: AxiosStatic

  public static getInstance(): AxiosStatic {
    if (!Request.instance) {
      Request.instance = axios
    }
    return Request.instance
  }

  /**
   * 设置默认参数
   * @param config -> AxiosRequestConfig
   */
  public static setOption(config: AxiosRequestConfig) {
    const k = Object.keys(config)
    k.forEach((element) => {
      Request.getInstance().defaults[element] = config[element]
    })
  }

  /**
   * 设置请求拦截器
   */
  public static setRequest(
    func: (
      // eslint-disable-next-line no-unused-vars
      arg0: AxiosRequestConfig
    ) => AxiosRequestConfig | Promise<AxiosRequestConfig>,
    // eslint-disable-next-line no-unused-vars
    errorFunc?: (error: any) => any
  ) {
    Request.getInstance().interceptors.request.use(func, errorFunc)
  }

  /**
   * 添加响应拦截器
   */
  public static setResponse(
    func: (
      // eslint-disable-next-line no-unused-vars
      value: AxiosResponse<any>
    ) => AxiosResponse<any> | Promise<AxiosResponse<any>>,
    // eslint-disable-next-line no-unused-vars
    errorFunc?: (error: any) => any
  ) {
    Request.getInstance().interceptors.response.use(func, errorFunc)
  }
}

interface UseRequest<T> {
  error: Ref<string>
  loading: Ref<boolean>
  response: Ref<UnwrapRef<T>>
}

const useRequest = <T>({
  url,
  method,
  body,
  headers,
}: ConfigureOptions): UseRequest<T> => {
  const response = ref<T>(null)
  const error = ref('')
  const loading = ref(true)
  Request.getInstance()
    [method](url, body, { headers })
    .then((result) => {
      response.value = result.data
    })
    .catch((err) => {
      error.value = err
    })
    .finally(() => {
      loading.value = false
    })
  return { error, loading, response }
}

export { useRequest, Request }
