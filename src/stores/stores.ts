import { ShortProduct } from '@/types/types'
import axios from 'axios'
import { createStore } from 'vuex'

interface State {
  loadingProducts: boolean
  loadingWishList: boolean
  products: ShortProduct[]
  wishList: ShortProduct[]
  searchFilter: string
}

export default createStore<State>({
  state: {
    loadingProducts: false,
    loadingWishList: false,
    products: [],
    wishList: [],
    searchFilter: ''
  },

  getters: {
    productsFiltereds(state: State) {
      const newArr = state.products.filter((product: ShortProduct) =>
        product.title.toLowerCase().includes(state.searchFilter.toLowerCase())
      )

      return newArr.length ? newArr : state.products
    },
    isInWishList: (state: State) => (idProduct: number) => {
      const index = state.wishList.findIndex(product => product.id === idProduct)
      return index !== -1
    }
  },
  mutations: {
    setSearchFilter(state: State, filter: string) {
      state.searchFilter = filter
    },
    setProducts(state, items: ShortProduct[]) {
      state.products = items
    },
    addWishList(state, produc: ShortProduct) {
      state.wishList.push(produc)
    },
    removeWishList(state, idProduct: number) {
      state.wishList = state.wishList.filter(product => product.id !== idProduct)
    }
  },
  actions: {
    async loadItems({ commit }: any) {
      this.state.loadingProducts = true
      const response = await axios.get('http://localhost:3000/products')
      this.state.loadingProducts = false
      commit('setProducts', response.data.products)
    }
  }
})
