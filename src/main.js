import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
 import store from './store' 
// import './permission'
import App from './App.vue'
import moment from 'moment'
// import {Expand} from '@element-plus/icons'

const app = createApp(App)
.use(store)
.use(router)
.use(ElementPlus)
// .component('expand', Expand)

app.config.globalProperties.$filters = {
    'formatDate': value =>{
        if (value) {
            return moment(String(value)).format('YYYY/MM/DD hh:mm')
        }
    }
}

app.mount('#app')

