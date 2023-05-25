import HomePage from '../pages/Home.vue'
import WishList from '../pages/WishList.vue'

export const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'Home',
    meta: {
      breadcrumb: [{ name: 'Home' }]
    }
  },
  {
    path: '/wish-list',
    component: WishList,
    name: 'Lista de Desejos',
    meta: {
      breadcrumb: [{ name: 'Home', path: '/' }, { name: 'Lista de Desejos' }]
    }
  }
]
