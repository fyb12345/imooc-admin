import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'
import { isCheckTimeout } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, timeout: 5000
})

service.interceptors.request.use(config => {
  config.headers.icode = '4CBE53BCEE19F4F2'
  if (store.getters.token) {
    if (isCheckTimeout()) {
      // 登出操作
      store.dispatch('user/logout')
      return Promise.reject(new Error('token 失效'))
    }
    
    // 如果token存在 注入token
    config.headers.Authorization = `Bearer ${store.getters.token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(response => {
  const { success, message, data } = response.data
  // 根据success的成功与否决定下面的操作
  if (success) {
    return data
  } else {
    // 业务错误
    ElMessage.error(message) // 提示错误信息
    return Promise.reject(new Error(message))
  }
}, error => {
  if (
    error.response &&
    error.response.data &&
    error.response.data.code === 401
  ) {
    // token超时
    store.dispatch('user/logout')
  }
  
  ElMessage.error(error.message)// 提示错误信息
  return Promise.reject(error)
})

export default service
