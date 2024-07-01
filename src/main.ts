import { createApp } from 'vue'
import './style.css'
import Antd from 'ant-design-vue'
import '@/styles/index.less'
import App from './App.vue'
import 'virtual:windi.css'

createApp(App).use(Antd).mount('#app')
