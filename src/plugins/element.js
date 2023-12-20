import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from '@/store'
import { en, zhCn } from 'element-plus/es/locale'

export default app => {
  app.use(ElementPlus, {
    locale: store.getters.language === 'en' ? en : zhCn
  })
}
