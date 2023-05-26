<template>
  <div>
    <Loading v-if="loadingProducts" />
    <ListProduct :listProduct="productsFiltereds" :isWishList="false" />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

import ListProduct from '../containers/ListProduct.vue'
import Loading from '../components/Loading.vue'

export default {
  name: 'Home',
  components: {
    ListProduct,
    Loading
  },
  mounted() {
    this.$store.dispatch('loadItems')
  },
  computed: {
    ...mapState(['loadingProducts']),
    ...mapGetters(['productsFiltereds'])
  }
}
</script>
