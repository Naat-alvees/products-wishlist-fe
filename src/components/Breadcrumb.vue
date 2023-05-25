<template>
  <nav class="breadcrumb">
    <ul class="breadcrumb-list">
      <li v-for="(route, index) in routes" :key="index">
        <router-link v-if="route.path != null" class="breadcrumb-item" :to="route.path">{{
          route.name
        }}</router-link>
        <span v-if="route.path == null" class="breadcrumb-item">{{ route.name }}</span>
        <span v-if="index < routes.length - 1" class="breadcrumb-separator"> > </span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Breadcrumb',
  computed: {
    routes() {
      return this.$route.meta.breadcrumb
    }
  }
}
</script>

<style>
.breadcrumb-list {
  display: flex;
  list-style: none;
  font-weight: bolder;
  padding: 0;
}

.breadcrumb-item {
  color: black;
  text-decoration: none;
}

.breadcrumb-separator {
  margin-right: 4px;
}
</style>
