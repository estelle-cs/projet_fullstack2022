<template>
  <div class="loginPage">
    <div class="loginForm">
      <h1>Connexion</h1>
      <LoginForm />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "LoginView",
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
.loginPage {
  background-color: #a803fb;
  padding-top: 50px;
  height: 100vh;
}

h1 {
  margin: 0;
  margin-bottom: 20px;
}

.loginForm {
  background-color: white;
  width: 500px;
  height: auto;
  margin: auto;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 6px 6px 8px #7a02b8;
}
</style>
