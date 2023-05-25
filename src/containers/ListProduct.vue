<template>
  <div class="product-list">
    <product-card
      v-for="(product, index) in listProduct"
      :key="index"
      :product="product"
      :isWishList="isWishList"
    ></product-card>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'ListProduct',
  props: {
    listProduct: {
      required: true
    },
    isWishList: {
      required: true
    }
  },
  components: {
    ProductCard
  }
}
</script>

<style>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 12px;
  justify-content: space-between;
}
</style>
