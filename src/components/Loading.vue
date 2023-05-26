<template>
  <div class="loading">
    <div class="loading-spinner"></div>
    <p class="loading-text">Carregando</p>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style>
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.loading-spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
  margin-bottom: 10px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-text {
  color: #555;
  font-size: 16px;
}
</style>
