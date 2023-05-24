<template>
  <div class="container">
    <button v-if="!isWishList" class="container-heart" @click="handleEventWishList">
      <font-awesome-icon
        class="container-heart-icon"
        :class="{ 'container-heart-icon-active': activeWishList }"
        icon="fa-solid fa-heart"
      />
    </button>
    <button v-if="isWishList" class="remove-button" @click="removeWishList">
      <span class="remove-icon">x</span>
    </button>
    <div class="container-product">
      <img
        class="container-product-image"
        src="https://picsum.photos/id/237/150/150"
        alt="Imagem"
      />
      <p class="container-product-name">{{ product.name }}</p>
      <p class="container-product-price">R$ 12</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      // type: Object as PropType<object>,
      required: true
    }
  },
  data() {
    return {
      activeWishList: true,
      isWishList: false
    }
  },
  methods: {
    handleEventWishList() {
      this.activeWishList ? this.removeWishList() : this.addWishList()
      this.activeWishList = !this.activeWishList
    },
    addWishList() {
      console.log('add')
    },
    removeWishList() {
      console.log('remove')
    }
  }
}
</script>

<style>
.container {
  position: relative;
  width: 200px;
  height: 300px;
  margin: 12px;
  margin-left: 0;
  box-shadow: 0px 0px 10px #c5c5c5;
  border-radius: 4px;
}

.container-heart {
  position: absolute;
  padding: 4px 0px;
  top: -3px;
  left: 8px;
  width: 24px;
  height: 24px;
  background-color: black;
  border: none;
  cursor: pointer;
  z-index: 2;
}

.container-heart-icon {
  color: white;
  font-size: 14px;
}

.container-heart-icon-active {
  color: red !important;
}

.remove-button {
  position: absolute;
  top: 2px;
  right: 4px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid black;
}

.remove-icon {
  font-size: 14px;
}

.container-heart::after {
  content: '';
  position: absolute;
  z-index: -1;
  top: 24px;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 12px;
  border-color: black transparent transparent transparent;
}

.container-product {
  display: flex;
  align-content: space-around;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}

.container-product-name {
  font-weight: bolder;
}

.container-product-price {
  color: goldenrod;
  font-weight: bolder;
}

.container-product-image {
  width: 150px;
  height: 150px;
}
</style>
