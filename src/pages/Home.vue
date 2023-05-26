<template>
  <div>
    <Loading v-if="loadingProducts" />
    <Error v-if="errorProducts" />
    <ListProduct :listProduct="productsFiltereds" :isWishList="false" />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

import Error from '../components/Error.vue'
import ListProduct from '../containers/ListProduct.vue'
import Loading from '../components/Loading.vue'

export default {
  name: 'Home',
  components: {
    Error,
    ListProduct,
    Loading
  },
  mounted() {
    this.$store.dispatch('loadItems')
  },
  computed: {
    ...mapState(['loadingProducts', 'errorProducts']),
    ...mapGetters(['productsFiltereds'])
  }
}
</script>
