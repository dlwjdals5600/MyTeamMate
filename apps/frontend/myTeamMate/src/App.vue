<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <!-- Vue Router에서 관리되는 화면 렌더링 -->
    <RouterView />
  </div>
</template>

<style scoped>
/* 기본 레이아웃 스타일 */
.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  margin: 0;
}
</style>