import { ShortProduct } from '@/types/types'
import axios from 'axios'
import { createStore } from 'vuex'

interface State {
  loadingProducts: boolean
  errorProducts: boolean
  loadingWishList: boolean
  errorWishList: boolean
  products: ShortProduct[]
  wishList: ShortProduct[]
  searchFilter: string
}

const URL_PRODUCTS = 'http://localhost:3000/products'
const URL_WISHLIST = 'http://localhost:3000/wishList'

export default createStore<State>({
  state: {
    loadingProducts: false,
    errorProducts: false,
    loadingWishList: false,
    errorWishList: false,
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
    addWishList(state, product: ShortProduct) {
      axios
        .post(URL_WISHLIST, product)
        .then(() => {
          state.wishList.push(product)
        })
        .catch(() => {
          state.errorProducts = true
        })
    },
    removeWishList(state, idProduct: number) {
      axios
        .delete(`${URL_WISHLIST}/${idProduct}`)
        .then(() => {
          state.wishList = state.wishList.filter(product => product.id !== idProduct)
        })
        .catch(() => {
          state.errorProducts = true
        })
    }
  },
  actions: {
    async loadItems({ commit }: any) {
      this.state.loadingProducts = true
      this.state.loadingWishList = true

      axios
        .all([axios.get(URL_PRODUCTS), axios.get(URL_WISHLIST)])
        .then(
          axios.spread((responseProduct, responseWishList) => {
            this.state.products = responseProduct.data.products
            this.state.wishList = responseWishList.data.products
          })
        )
        .catch(() => {
          this.state.errorProducts = true
          this.state.errorWishList = true
        })
        .finally(() => {
          this.state.loadingProducts = false
          this.state.loadingWishList = false
        })
    }
  }
})
