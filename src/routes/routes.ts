import HomePage from '../pages/Home.vue'
import WishList from '../pages/WishList.vue'

export const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'Home',
    children: []
  },
  {
    path: '/wish-list',
    component: WishList,
    name: 'Lista de Desejos'
  }
]
