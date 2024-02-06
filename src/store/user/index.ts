import { defineStore } from 'pinia'
import { User } from '@/store/user/user.ts'
import { LoginForm } from '@/api/login/type.ts'
import { login, logout } from '@/api/login'
import { removeToken, setToken } from '@/utils/token.ts'

const useUserStore = defineStore('userStore', {
  state: (): User => ({
    id: null,
    avatar: '',
    name: '',
  }),
  actions: {
    login(loginForm: LoginForm) {
      return new Promise((resolve, reject) => {
        login(loginForm)
          .then(({ data }) => {
            //判断是否成功
            if (data.flag) {
              //保存token
              setToken(data.data.token)
              //获取用户信息
              this.id = data.data.user.id
              this.avatar = data.data.user.avatar
              this.name = data.data.user.name
              resolve(data)
            } else {
              reject(data.msg)
            }
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    logout() {
      return new Promise((resolve, reject) => {
        logout()
          .then(() => {
            //将用户信息置空
            this.id = null
            this.avatar = ''
            this.name = ''
            //去除token
            removeToken()
            resolve(null)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
})

export default useUserStore
