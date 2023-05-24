import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faLocationDot,
  faPhone,
  faHeart,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import { routes } from './routes/routes'
import store from './stores/stores'

library.add(faLocationDot, faPhone, faHeart, faMagnifyingGlass)

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(store)
app.use(router)
app.mount('#app')
