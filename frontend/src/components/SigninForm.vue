<template>
  <span class="alert" v-if="emptyInput">Veuillez remplir tous les champs</span>
  <span class="alert" v-if="wrongMdp" id="wrongMdp"
    >Les mots de passe ne sont pas identiques</span
  >
  <span class="alert" id="wrongEmail" v-if="wrongEmail"
    >L'adresse e-mail n'est pas valide</span
  >
  <span class="alert" id="existingEmail" v-if="existingEmail"
    >Cette adresse e-mail existe déjà</span
  >
  <br />
  <label for="name">Nom</label><br />
  <input type="text" name="name" id="name" v-model="name" /><br />
  <label for="surname">Prénom</label><br />
  <input
    type="text"
    name="surname"
    id="surname"
    v-model="surname"
    required
  /><br />
  <label for="login">Adresse email</label><br />
  <input type="email" name="login" id="login" v-model="login" /><br />
  <label for="mdp">Mot de passe</label><br />
  <input type="password" name="mdp" id="mdp" v-model="mdp" /><br />
  <label for="mdp2">Répétez le mot de passe</label><br />
  <input type="password" name="mdp2" id="mdp2" v-model="mdp2" /><br />
  <button type="submit" @click="this.checkInfos()">S'inscrire</button><br />
  <RouterLink class="link" to="/login"
    >Vous avez déjà un compte ? Connnectez-vous !</RouterLink
  >
</template>

<script>
export default {
  name: "SigninForm",
  data() {
    return {
      name: "",
      surname: "",
      login: "",
      mdp: "",
      mdp2: "",
      emptyInput: false,
      wrongMdp: false,
      wrongEmail: false,
      existingEmail: false,
    };
  },
  methods: {
    async checkInfos() {
      this.emptyInput = false;
      this.wrongMdp = false;
      this.wrongEmail = false;

      if (
        this.name == "" ||
        this.surname == "" ||
        this.login == "" ||
        this.mdp == "" ||
        this.mdp2 == ""
      )
        this.emptyInput = true;

      if (this.mdp != this.mdp2) this.wrongMdp = true;
      let test = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // eslint-disable-line
      if (test.test(this.login) == false) {
        this.wrongEmail = true;
      }
      if (
        this.emptyInput == false &&
        this.wrongMdp == false &&
        this.wrongEmail == false
      ) {
        this.signIn();
      }
    },
    async signIn() {
      fetch("/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.name,
          surname: this.surname,
          login: this.login,
          mdp: this.mdp,
        }),
      }).then((res) => {
        if (res.json().status == 500) {
          this.existingEmail = true;
        } else {
          this.$router.push("/login");
        }
      });
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
