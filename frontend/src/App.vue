<template>
  <nav>
    <div></div>
    <div class="tabs">
      <router-link v-if="connected" class="tab" to="/about"
        >Liste des shows</router-link
      >
      <span v-if="connected" class="tab" @click="logOut()">Se déconneter</span>
    </div>
  </nav>
  <router-view />
</template>

<script>
import { onMounted } from "vue";

export default {
  name: "App",
  data() {
    return {
      connected: false,
    };
  },
  methods: {
    async logOut() {
      const token = localStorage.getItem("token");
      localStorage.removeItem("token");
      await fetch("/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: token }),
      }).then(this.$router.push("/login"));
    },
  },
  async onMounted() {
    if (localStorage.getItem("token")) {
      this.connected = true;
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

button,
input {
  font-family: "Poppins", sans-serif;
}

body {
  margin: 0;
}

nav {
  background-color: rgb(168, 3, 251);
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: grid;
  grid-template-columns: 40% 60%;
}

.tabs {
  margin-right: 20px;
  text-align: right;
}

.tab {
  margin: 0px 20px;
  color: white;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
}

.tab:hover {
  color: #fffb00;
}

nav a.router-link-exact-active {
  color: #fffb00;
}
</style>
