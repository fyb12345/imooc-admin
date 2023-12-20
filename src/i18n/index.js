import { createI18n } from 'vue-i18n'
import mEnLocale from '@/i18n/lang/en'
import mZhLocale from '@/i18n/lang/zh'
import store from '@/store'
import { getItem } from '@/utils/storage'
import { LANG } from '@/constant'

const messages = {
  en: {
    msg: {
      ...mEnLocale
    }
  },
  zh: {
    msg: {
      ...mZhLocale
    }
  }
}

/**
 * 返回当前 lang
 */
function getLanguage () {
  return store && store.getters && store.getters.language
}

const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale: getLanguage() || getItem(LANG),
  messages
})

export default i18n
