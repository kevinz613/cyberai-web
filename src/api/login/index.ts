/*登录*/
import {AxiosPromise} from "axios";
import {Result} from "@/model";
import request from "@/utils/request";
import {LoginForm} from "@/api/login/type.ts";
import {UserInfo} from "@/api/user/type.ts";

/*登录*/
export function login(data: LoginForm): AxiosPromise<Result<UserInfo>> {
  return request({
    url: "/auth/login",
    method: "post",
    data,
  });
}

/*登出*/
export function logout(): AxiosPromise<Result<null>> {
  return request({
    url: "/auth/logout",
    method: "get",
  });
}
