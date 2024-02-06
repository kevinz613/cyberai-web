/*登录用户信息*/
export interface UserInfo {
  //用户
  user: User
  //角色
  roles: String[]
  //token
  token: string
}

export interface User {
  //uid
  id: number
  //用户名
  name: string
  //账号
  account: string
  //手机号
  phone: string
  //邮箱
  mail: string
  //年龄
  age: number
  //性别
  gender: number
  //头像
  avatar: string
}
