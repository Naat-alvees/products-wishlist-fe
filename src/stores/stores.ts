import { createStore } from 'vuex'

interface Product {
  id: number
  price: number
  name: string
  image: string
}

interface State {
  products: Product[]
  searchFilter: string
}

export default createStore<State>({
  state: {
    products: [
      { id: 1, name: 'Produto 1', price: 19.99, image: 'https://via.placeholder.com/200x200' },
      { id: 2, name: 'Produto 2', price: 29.99, image: 'https://via.placeholder.com/200x200' },
      { id: 3, name: 'Produto 3', price: 39.99, image: 'https://via.placeholder.com/200x200' },
      { id: 4, name: 'Produto 4', price: 49.99, image: 'https://via.placeholder.com/200x200' },
      { id: 5, name: 'Produto 5', price: 59.99, image: 'https://via.placeholder.com/200x200' },
      { id: 6, name: 'Produto 6', price: 69.99, image: 'https://via.placeholder.com/200x200' },
      { id: 7, name: 'Produto 7', price: 79.99, image: 'https://via.placeholder.com/200x200' },
      { id: 8, name: 'Produto 8', price: 89.99, image: 'https://via.placeholder.com/200x200' }
    ],
    searchFilter: ''
  },

  getters: {
    productsFiltereds(state) {
      const newArr = state.products.filter((product: Product) =>
        product.name.toLowerCase().includes(state.searchFilter.toLowerCase())
      )

      return newArr.length ? newArr : state.products
    }
  },
  mutations: {
    setSearchFilter(state, filter: string) {
      state.searchFilter = filter
    }
  },
  actions: {},
  modules: {}
})
