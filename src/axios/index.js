import axios from "axios";
import Cookies from "js-cookie";
import { ElMessage } from "element-plus";
import router from "../router";

const errorHandle = (status, other) => {
  console.log(status);
  switch (status) {
    case 400:
      ElMessage({
        message: "请求错误(400)",
        type: "error",
      });
      // message.error("请求错误(400)");
      break;
    case 401:
      Cookies.remove("catl-token");
      instance.defaults.headers.token = "";
      router.push("/login");
      ElMessage({
        message: "未授权，请重新登录(401)",
        type: "error",
      });
      // message.destroy();
      // message.error("未授权，请重新登录(401)");
      break;
    case 403:
      ElMessage({
        message: "拒绝访问(403)",
        type: "error",
      });
      // message.error("拒绝访问(403)");
      break;
    case 404:
      ElMessage({
        message: "请求出错(404)",
        type: "error",
      });
      // message.error("请求出错(404)");
      break;
    case 408:
      ElMessage({
        message: "请求超时(408)",
        type: "error",
      });
      // message.error("请求超时(408)");
      break;
    case 500:
      ElMessage({
        message: "服务器错误(500)",
        type: "error",
      });
      // message.error("服务器错误(500)");
      break;
    case 501:
      ElMessage({
        message: "服务未实现(501)",
        type: "error",
      });
      // message.error("服务未实现(501)");
      break;
    case 502:
      ElMessage({
        message: "网络错误(502)",
        type: "error",
      });
      // message.error("网络错误(502)");
      break;
    case 503:
      ElMessage({
        message: "服务不可用(503)",
        type: "error",
      });
      // message.error("服务不可用(503)");
      break;
    case 504:
      ElMessage({
        message: "请求出错(404)",
        type: "error",
      });
      // message.error("请求出错(404)");
      break;
    case 505:
      ElMessage({
        message: "HTTP版本不受支持(505)",
        type: "error",
      });
      // message.error("HTTP版本不受支持(505)");
      break;
    default:
      ElMessage({
        message: other,
        type: "error",
      });
    // message.error(other);
  }
};

const instance = axios.create({
  baseURL: "",
  timeout: 10000,
  withCredentials: false,
  headers: {
    token: Cookies.get("catl-token") || "",
  },
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.error(error)
);

instance.interceptors.response.use(
  (res) => {
    if (res.headers["content-type"] === "application/octet-stream") {
      return Promise.resolve(res);
    } else if (res.status === 200 && res.data?.code === 200) {
      return Promise.resolve(res.data);
    } else if (res.request.responseType === "blob") {
      if (res.headers["content-type"] === "application/json") {
        if (!res.headers.msg || res.headers.msg === "") {
          ElMessage({
            message: "unknown exception, please contact administrator",
            type: "error",
          });
        } else {
          ElMessage({
            message: decodeURIComponent(res.headers.msg),
            type: "error",
          });
        }
        return Promise.reject(res);
      }
      return Promise.resolve(res);
    } else {
      ElMessage({
        message: res.data?.msg || "接口请求出错",
        type: "error",
      });

      return Promise.reject(res);
    }
  },
  (error) => {
    const { response } = error;
    if (response) {
      errorHandle(response.status, response.data.message);
      return Promise.reject(response);
    } else {
      return Promise.reject(error);
    }
  }
);

export default instance;
