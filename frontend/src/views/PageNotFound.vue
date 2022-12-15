<template>
  <div class="PageNotFound">
    <div class="PageNotFound">
      <h1>La page recherchée n'existe pas</h1>
      <LoginForm />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "PageNotFoundView",
  components: {},
};
</script>

<style scoped>
h1 {
  margin-top: 30px;
  text-align: center;
}
</style>
