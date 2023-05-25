<template>
  <ListProduct :listProduct="productsFiltereds" :isWishList="false" />
</template>

<script>
import { mapGetters } from 'vuex'

import ListProduct from '../containers/ListProduct.vue'

export default {
  name: 'Home',
  components: {
    ListProduct
  },
  mounted() {
    this.$store.dispatch('loadItems')
  },
  computed: {
    ...mapGetters(['productsFiltereds'])
  }
}
</script>
