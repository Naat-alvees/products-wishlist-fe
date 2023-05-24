<template>
  <div id="app">
    <Header />
    <main class="app-main">
      <Breadcrumb />
      <router-view />
    </main>
  </div>
</template>

<script>
import Breadcrumb from './components/Breadcrumb.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
    Breadcrumb
  }
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
}

.app-main {
  padding: 24px 32px;
}
</style>
