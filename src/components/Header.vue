<template>
  <header class="header">
    <router-link to="/" class="logo"> MagaNets </router-link>
    <div class="actions">
      <nav>
        <ul class="menu">
          <li class="menu-item">
            <span class="menu-item-text">
              <font-awesome-icon icon="fa-solid fa-location-dot" />
              São Paulo
            </span>
          </li>
          <li class="menu-item">
            <a href="#" class="menu-item-text">
              <font-awesome-icon icon="fa-solid fa-phone" />
              Central de atendimento
            </a>
          </li>
          <li class="menu-item">
            <router-link to="/wish-list" class="menu-item-text">
              <font-awesome-icon icon="fa-solid fa-heart" />
              Lista de desejos
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="search">
        <div class="search-container">
          <font-awesome-icon class="search-icon" icon="fa-solid fa-magnifying-glass" />
          <input
            type="text"
            class="search-input"
            placeholder="Busca"
            v-model="searchText"
            @input="handleInputChange"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    handleInputChange() {
      this.$store.commit('setSearchFilter', this.searchText)
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #370f53;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 24px 32px;
  flex-wrap: wrap;
}

.logo {
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.actions {
  width: 60%;
}

.menu {
  list-style: none;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0;
}

.menu-item:last-child {
  margin-right: 0px;
}

.menu-item-text {
  color: white;
  text-decoration: none;
}

.search {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-container {
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  border-radius: 2px;
  padding: 8px;
  width: 100%;
}

.search-icon {
  color: #4c4c4c;
  margin-right: 8px;
}

.search-input {
  border: none;
  background: none;
  width: 100%;
  padding: 4px;
  font-size: 16px;
  outline: none;
}

@media (max-width: 870px) {
  .logo {
    width: 100%;
    margin-bottom: 12px;
  }
  .actions {
    width: 100%;
  }
}
</style>
