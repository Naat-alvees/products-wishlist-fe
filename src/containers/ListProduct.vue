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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
