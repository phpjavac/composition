interface UseDownloaderOption {
    /**
     * 文件链接
     * @default ""
     */
    url: string;
    /**
     * 文件名
     * @default 从url中提取
     */
    filename?: string;
}
/**
 * 文件下载器
 * @params { url: 文件链接; filename?: 文件名;}
 */
declare const useDownloader: ({ url, filename }: UseDownloaderOption) => {
    downloading: boolean;
    request: Promise<Blob>;
};
export default useDownloader;
