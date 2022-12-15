<template>
  <label for="login">Identifiant</label><br />
  <input type="text" name="login" id="login" v-model="login" /><br />
  <label for="mdp">Mot de passe</label><br />
  <input type="text" name="mdp" id="mdp" v-model="mdp" /><br />
  <button type="submit" @click="this.logIn()">Me connecter</button><br />
  <RouterLink class="link" to="/signin"
    >Vous n'avez pas encore de compte ? Inscrivez-vous !</RouterLink
  >
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      login: "",
      mdp: "",
    };
  },
  methods: {
    async logIn() {
      const res = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ login: this.login, mdp: this.mdp }),
      }).then(this.$router.push("/about"));
      const token = await res.text();
      localStorage.setItem("token", token);
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  font-size: 18px;
  padding-bottom: 5px;
}

input {
  margin: 10px 0px 30px 0px;
  width: 200px;
  height: 30px;
  border: none;
  border-bottom: 1px solid;
  font-weight: bold;
  font-size: 17px;
}

button {
  border: none;
  background-color: #fffb59;
  height: 40px;
  width: 140px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
  font-size: 15px;
  color: #2a2a2a;
  box-shadow: 2px 2px 4px lightgrey;
  margin-bottom: 20px;
}

button:hover {
  transform: translate(-2px, -2px);
  background-color: #f4f156;
}

.link {
  font-size: 12px;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
</style>
