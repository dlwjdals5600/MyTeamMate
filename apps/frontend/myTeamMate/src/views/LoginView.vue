<template>
  <div class="login-view">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';

export default {
  components: { LoginForm },
};
</script>

<style scoped>
.login-view {
  width: 100%;
  max-width: 400px;
  text-align: center;
  background-color: #f5f5f5;
}
</style>