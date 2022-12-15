<template>
  <div class="about">
    <h1>Liste des shows</h1>
    <button>
      <router-link class="link" to="/addShow"
        >Ajouter un show</router-link
      ></button
    ><br />
    <ShowList />
  </div>
</template>

<script>
// @ is an alias to /src
import ShowList from "@/components/ShowList.vue";

export default {
  name: "AboutView",
  components: {
    ShowList,
  },
};
</script>

<style scoped>
.about {
  margin: 30px;
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
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  color: #2a2a2a;
}
</style>
