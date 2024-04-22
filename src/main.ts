import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import * as Icons from '@element-plus/icons-vue'

import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

// 注册element-icon全局组件
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key])
})
