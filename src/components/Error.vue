<template>
  <div class="error">
    <p class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: {
    errorMessage: {
      type: String,
      default: 'Ocorreu um erro inesperado. Tente novamente mais tarde!'
    }
  }
}
</script>

<style>
.error {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
}

.error-message {
  font-size: 18px;
}
</style>
