export interface LoginForm {
  /**
   * 账号
   */
  account: string | null
  /**
   * 密码
   */
  password: string | null
  /**
   * 验证码
   */
  code: string | null
  /**
   * 登录类型
   */
  grantType: string | null
}
