<template>
  <article class="form">
    <h2>Nouveau film ou série :</h2>
    <p id="alerte_doublon" style="color: red; display: none">
      Cette élément existe déjà.
    </p>
    <p id="alerte_miss" style="color: red; display: none">
      Veuillez remplir tous les champs.
    </p>

    <section>
      <div>
        <label for="name">Nom :</label><br />
        <input type="text" id="name_input" v-model="name" />
      </div>
      <div>
        <label for="seasons">Nombre de saisons</label><br />
        <input type="number" min="1" id="seasons_input" v-model="seasons" />
      </div>
      <div>
        <label for="plateform">Plateforme</label><br />
        <select id="plateform_input" v-model="platform">
          <option value="Netflix">Netflix</option>
          <option value="Disney+">Disney+</option>
          <option value="OCS">OCS</option>
          <option value="Canal+">Canal+</option>
          <option value="AmazonPrimeVideo">AmazonPrimeVideo</option>
        </select>
      </div>
      <div>
        <label for="note">Note sur 5</label><br />
        <input type="number" min="1" max="5" id="note_input" v-model="rate" />
      </div>
    </section>

    <button @click="addShow()">Ajouter à ma liste</button>
  </article>
</template>

<script>
export default {
  name: "AddShowList",
  data() {
    return {
      name: "",
      seasons: 1,
      platform: "",
      rate: 0,
    };
  },
  methods: {
    async addShow() {
      const token = localStorage.getItem("token");
      fetch("/addShow", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          seasons: this.seasons,
          platform: this.platform,
          rate: this.rate,
        }),
      }).then(this.$router.push("/about"));
    },
  },
};
</script>

<style scoped>
.form {
  background-color: #a803fb;
  color: white;
  padding: 10px 20px 20px;
  width: 600px;
  margin: auto;
}

section {
  margin-bottom: 30px;
}

div {
  display: inline-block;
  margin-right: 40px;
}

input,
select {
  background-color: #a803fb;
  font-size: 18px;
  color: white;
  border: none;
  border-bottom: 1px solid white;
  outline: none;
  margin-bottom: 30px;
}

button {
  border: none;
  background-color: #fffb59;
  height: 40px;
  width: 160px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
  font-size: 15px;
  color: #2a2a2a;
  box-shadow: 2px 2px 4px #8900cd;
  margin-bottom: 20px;
}

button:hover {
  transform: translate(-2px, -2px);
  background-color: #f4f156;
}
</style>
