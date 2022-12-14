import { createApp } from 'vue'
import App from './App.vue'
import router from './store'

const app = createApp(App)
app.use(store)
app.mount('#app')