<template>
  <div class="signinPage">
    <div class="signinForm">
      <h1>Inscription</h1>
      <SigninForm />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SigninForm from "@/components/SigninForm.vue";

export default {
  name: "SigninView",
  components: {
    SigninForm,
  },
};
</script>

<style scoped>
.signinPage {
  background-color: #a803fb;
  padding-top: 50px;
  height: 130vh;
}

h1 {
  margin: 0;
  margin-bottom: 20px;
}

.signinForm {
  background-color: white;
  width: 500px;
  height: auto;
  margin: auto;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 6px 6px 8px #7a02b8;
}
</style>
