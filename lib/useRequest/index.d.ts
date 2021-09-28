import { AxiosRequestConfig, AxiosResponse, AxiosStatic } from "axios";
import { Ref, UnwrapRef } from "vue";
declare type Method = "get" | "post" | "put" | "delete";
interface ConfigureOptions {
    url: string;
    method: Method;
    body?: any;
    headers?: any;
}
declare class Request {
    private static instance;
    static getInstance(): AxiosStatic;
    /**
     * 设置默认参数
     * @param config -> AxiosRequestConfig
     */
    static setOption(config: AxiosRequestConfig): void;
    /**
     * 设置请求拦截器
     */
    static setRequest(func: (arg0: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>, errorFunc?: (error: any) => any): void;
    /**
     * 添加响应拦截器
     */
    static setResponse(func: (value: AxiosResponse<any>) => AxiosResponse<any> | Promise<AxiosResponse<any>>, errorFunc?: (error: any) => any): void;
}
interface UseRequest<T> {
    error: Ref<string>;
    loading: Ref<boolean>;
    response: Ref<UnwrapRef<T>>;
}
declare const useRequest: <T>({ url, method, body, headers, }: ConfigureOptions) => UseRequest<T>;
export { useRequest, Request };
