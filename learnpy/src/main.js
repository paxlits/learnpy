import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
