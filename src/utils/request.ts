import axios, {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from "axios";
import {getToken, token_key, token_prefix} from "./token";

const requests = axios.create({
  baseURL: "/api",
  timeout: 10000,
  // 请求头
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截器
requests.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 请求带token
    if (getToken() != null) {
      config.headers[token_key] = token_prefix + getToken();
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// 配置响应拦截器
requests.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data.code != '0000'){
      window.$message?.error(response.data.msg);
    }
    return response;
  }, (error: AxiosError) => {
    let {message} = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substring(message.length - 3) + "异常";
    }
    window.$message?.error(message, {duration: 5000});
    return Promise.reject(error);
  }
);

// 对外暴露
export default requests;
