<template>
  <div class="product-list">
    <product-card
      v-for="(product, index) in productsFiltereds"
      :key="index"
      :product="product"
    ></product-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'Home',
  components: {
    ProductCard
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['productsFiltereds'])
  }
}
</script>

<style>
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
