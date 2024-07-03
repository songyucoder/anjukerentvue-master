import { createApp } from 'vue'
import './style.css'
import Antd from 'ant-design-vue'

import '@/styles/index.less'
import App from './App.vue'
import 'virtual:windi.css'
import zhCN from 'ant-design-vue/es/locale/zh_CN'; // 导入中文语言包


  

createApp(App).use(Antd, {
    locale: zhCN
}).mount('#app')
