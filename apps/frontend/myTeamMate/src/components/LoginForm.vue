<template>
  <div class="login-form">
    <h1>로그인</h1>
    <form @submit.prevent="handleSubmit">
      <LoginInput
        label="이메일"
        id="email"
        type="email"
        v-model="email"
        placeholder="이메일을 입력하세요"
      />
      <LoginInput
        label="비밀번호"
        id="password"
        type="password"
        v-model="password"
        placeholder="비밀번호를 입력하세요"
      />
      <button type="submit" class="btn-primary">로그인</button>
    </form>
    <SocialLoginButtons />
  </div>
</template>

<script>
import LoginInput from './LoginInput.vue';
import SocialLoginButtons from './SocialLoginButtons.vue';

export default {
  components: { LoginInput, SocialLoginButtons },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleSubmit() {
      if (!this.email || !this.password) {
        alert('이메일과 비밀번호를 입력해주세요.');
        return;
      }
      alert('로그인 성공!');
    },
  },
};
</script>

<style scoped>
/* 로그인 폼의 스타일 */
.login-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}
.btn-primary {
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 1rem;
}
.btn-primary:hover {
  background-color: #0056b3;
}
</style>