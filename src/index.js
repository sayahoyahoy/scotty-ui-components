import {createApp} from 'vue'
import App from './app.vue'
import router from './router'

const container = document.createElement('div')
container.id = 'app'

document.body.appendChild(container)

const app = createApp(App)
app.use(router)
app.mount('#app')
