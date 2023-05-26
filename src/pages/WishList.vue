<template>
  <Loading v-if="loadingWishList" />
  <Error v-if="errorWishList" />
  <p v-if="!wishList.length">Sua lista de desejos está vazia :(</p>
  <ListProduct :listProduct="wishList" :isWishList="true" />
</template>

<script>
import { mapState } from 'vuex'

import Error from '../components/Error.vue'
import ListProduct from '../containers/ListProduct.vue'
import Loading from '../components/Loading.vue'

export default {
  name: 'WishList',
  components: {
    Error,
    ListProduct,
    Loading
  },
  computed: {
    ...mapState(['loadingWishList', 'errorWishList', 'wishList'])
  }
}
</script>
