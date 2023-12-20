import { createStore } from 'vuex'
import user from './modules/user'
import getters from '@/store/getters'
import app from './modules/app'
import theme from '@/store/modules/theme'

export default createStore({
  getters,
  modules: {
    user,
    app,
    theme
  }
})