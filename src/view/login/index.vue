<template>
  <div class="view-account">
    <div class="view-account-header"></div>
    <div class="view-account-container">
      <div class="view-account-top">
        <div class="view-account-top-logo">
          <img src="@/assets/logo/logo.svg" alt="" />
        </div>
        <div class="view-account-top-desc">CyberAI 智能平台</div>
      </div>
      <div class="view-account-form">
        <n-card>
          <n-tabs
            class="card-tabs"
            default-value="account-login"
            size="large"
            animated
            pane-wrapper-style="margin: 0 -4px"
            pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
          >
            <n-tab-pane name="account-login" tab="账号登录">
              <n-form ref="formRef" :model="model" :rules="rules">
                <n-form-item label="账号" path="account">
                  <n-input v-model:value="model.account" placeholder="请输入账号" />
                </n-form-item>
                <n-form-item path="password" label="密码">
                  <n-input
                    v-model:value="model.password"
                    type="password"
                    show-password-on="click"
                    placeholder="请输入密码"
                  />
                </n-form-item>
              </n-form>
              <n-button
                type="primary"
                @click="handleAccountSubmit"
                :loading="loading"
                block
                secondary
                strong
              >
                登录/注册
              </n-button>
            </n-tab-pane>
            <n-tab-pane name="code-login" tab="验证码登录">
              <n-form ref="formRef" :model="model" :rules="rules">
                <n-form-item path="phone" label="手机号">
                  <n-input v-model:value="model.phone" placeholder="请输入手机号" />
                </n-form-item>
                <n-form-item path="code" label="验证码">
                  <n-input v-model:value="model.code" placeholder="请输入验证码" />
                </n-form-item>
              </n-form>
              <n-button type="primary" block secondary strong> 登录/注册 </n-button>
            </n-tab-pane>
            <n-tab-pane name="signup" tab="注册">
              <n-form>
                <n-form-item-row label="用户名">
                  <n-input />
                </n-form-item-row>
                <n-form-item-row label="密码">
                  <n-input />
                </n-form-item-row>
                <n-form-item-row label="重复密码">
                  <n-input />
                </n-form-item-row>
              </n-form>
              <n-button type="primary" block secondary strong> 注册 </n-button>
            </n-tab-pane>
          </n-tabs>
        </n-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/*密码登录*/
import { ref } from 'vue'
import { FormInst, FormRules, useMessage } from 'naive-ui'
import { useRoute, useRouter } from 'vue-router'
import useUserStore from '@/store/user'

interface ModelType {
  phone: string | null
  code: string | null
  account: string | null
  password: string | null
}

const formRef = ref<FormInst | null>(null)
const message = useMessage()
const loading = ref(false)
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const modelRef = ref<ModelType>({
  phone: null,
  code: null,
  account: null,
  password: null,
})

const model = ref(modelRef)

const rules: FormRules = {
  account: [
    {
      required: true,
      message: '请输入账号',
      trigger: ['input', 'blur'],
    },
  ],
  phone: [
    {
      required: true,
      message: '请输入手机号',
      trigger: ['input', 'blur'],
    },
  ],
  code: [
    {
      required: true,
      message: '请输入验证码',
      trigger: ['input', 'blur'],
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: ['input', 'blur'],
    },
  ],
}

const handleAccountSubmit = (e: any) => {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      try {
        /*账号登录表单信息*/
        const accountForm = {
          account: model.value.account,
          code: null,
          grantType: 'account',
          password: model.value.password,
        }
        message.loading('登录中...')
        loading.value = true
        //请求登录
        message.destroyAll()
        userStore
          .login(accountForm)
          .then(() => {
            //重定向
            loading.value = false
            const toPath = decodeURIComponent((route.query?.redirect || '/') as string)
            setTimeout(() => {
              message.success('登录成功')
              if (route.name === 'Login') {
                router.replace('/')
              } else {
                router.replace(toPath)
              }
            }, 3100)
          })
          .catch((data) => {
            loading.value = false
            setTimeout(() => {
              message.info(data)
            }, 3100)
          })
      } finally {
        loading.value = false
      }
    } else {
      message.error('请输入正确信息')
    }
  })
}
</script>
<style scoped lang="less">
.view-account {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  &-container {
    flex: 1;
    padding: 32px 0;
    max-width: 500px;
    min-width: 400px;
    margin: 0 auto;
  }

  &-top {
    padding: 32px 0;
    text-align: center;

    &-desc {
      font-size: 14px;
      color: #808695;
    }
  }

  &-other {
    width: 100%;
  }

  .default-color {
    color: #515a6e;

    .ant-checkbox-wrapper {
      color: #515a6e;
    }
  }
}

@media (min-width: 500px) {
  .view-account {
    background-image: url('../../assets/login/login_bg_1.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .page-account-container {
    padding: 32px 0 24px 0;
  }
}
</style>
