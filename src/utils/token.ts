//token key
export const token_key: string = 'access-token'

// token前缀
export let token_prefix = 'Bearer '

//获得token
export function getToken() {
  return localStorage.getItem(token_key)
}

//设置token
export function setToken(token: string) {
  return localStorage.setItem(token_key, token)
}

//去除token
export function removeToken() {
  return localStorage.removeItem(token_key)
}
