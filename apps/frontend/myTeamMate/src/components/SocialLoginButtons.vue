<template>
  <div class="social-login-buttons">
    <button @click="onLogin('google')" class="google-login">Google 로그인</button>
    <button @click="onLogin('facebook')" class="facebook-login">Facebook 로그인</button>
  </div>
</template>

<script>
export default {
  methods: {
    onLogin(provider) {
      alert(`${provider} 로그인 처리 중...`);
      // 소셜 로그인 로직 추가
    },
  },
};
</script>

<style scoped>
.social-login-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}
button {
  padding: 0.75rem 1rem;
  font-size: 14px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.google-login {
  background-color: #db4437;
}
.google-login:hover {
  background-color: #c23321;
}
.facebook-login {
  background-color: #4267b2;
}
.facebook-login:hover {
  background-color: #365899;
}
</style>