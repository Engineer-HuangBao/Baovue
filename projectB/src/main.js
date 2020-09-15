import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
// import store from './store'
import router from './router'
import componentsB from "./utils/componentsB.ts"; // 组件引用合集

// const 应用实例
const app = createApp(App)
// 挂载实例上-全局挂载组件
app.use(componentsB)

app.mount('#app')
