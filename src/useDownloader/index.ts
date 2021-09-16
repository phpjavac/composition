import axios from "axios";
import { saveAs } from "file-saver";
import { reactive } from "vue";

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
const useDownloader = ({ url = "", filename = "" }: UseDownloaderOption) => {
  const urlList = url.split("/");
  const fn = filename || urlList[urlList.length - 1];
  const asyncObj = reactive({
    downloading: false,
    request: {} as Promise<Blob>,
  });
  asyncObj.request = new Promise<Blob>((resolve, reject) => {
    asyncObj.downloading = true;
    axios
      .get(url, { responseType: "blob" })
      .then((res) => {
        saveAs(res.data as Blob, fn);
        resolve(res.data);
      })
      .catch((e) => {
        reject(e);
      })
      .finally(() => {
        asyncObj.downloading = false;
      });
  });
  return asyncObj as { downloading: boolean; request: Promise<Blob> };
};

export default useDownloader;
