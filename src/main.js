import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import router from './router'
import store from './store'
// 导入全局样式
import './styles/index.scss'
// 导入权限控制模块
import './permission'

// 导入 svgIcon
import installIcons from './icons'

const app = createApp(App)

installElementPlus(app)
installIcons(app)

app.use(router).use(store).mount('#app')
