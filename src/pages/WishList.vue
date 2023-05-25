<template>
  <ListProduct :listProduct="wishList" :isWishList="true" />
</template>

<script>
import { mapState } from 'vuex'

import ListProduct from '../containers/ListProduct.vue'

export default {
  name: 'WishList',
  components: {
    ListProduct
  },
  computed: mapState(['wishList'])
}
</script>
