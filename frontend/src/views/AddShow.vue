<template>
  <div class="addShow">
    <h1>Ajouter un nouveau show à la liste</h1>
    <AddShowList />
  </div>
</template>

<script>
// @ is an alias to /src
import AddShowList from "@/components/AddShowForm.vue";

export default {
  name: "AddShowView",
  components: {
    AddShowList,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.addShow {
  margin: 20px;
}
</style>
