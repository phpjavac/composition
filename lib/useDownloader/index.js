import axios from "axios";
import { saveAs } from "file-saver";
import { reactive } from "vue";
const useDownloader = ({ url = "", filename = "" }) => {
  const urlList = url.split("/");
  const fn = filename || urlList[urlList.length - 1];
  const asyncObj = reactive({
    downloading: false,
    request: {}
  });
  asyncObj.request = new Promise((resolve, reject) => {
    asyncObj.downloading = true;
    axios.get(url, { responseType: "blob" }).then((res) => {
      saveAs(res.data, fn);
      resolve(res.data);
    }).catch((e) => {
      reject(e);
    }).finally(() => {
      asyncObj.downloading = false;
    });
  });
  return asyncObj;
};
export default useDownloader;
