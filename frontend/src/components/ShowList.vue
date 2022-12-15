<template>
  <article class="content_card">
    <section id="content" v-for="show in shows" :key="show.name">
      <div id="" class="card">
        <img
          v-if="show.platform == 'Netflix'"
          class="img_card"
          src="../assets/Netflix.jpg"
        />
        <img
          v-if="show.platform == 'AmazonPrimeVideo'"
          class="img_card"
          src="../assets/AmazonPrimeVideo.jpg"
        />
        <img
          v-if="show.platform == 'Canal+'"
          class="img_card"
          src="../assets/Canal+.jpg"
        />
        <img
          v-if="show.platform == 'Disney+'"
          class="img_card"
          src="../assets/Disney+.jpg"
        />
        <img
          v-if="show.platform == 'OCS'"
          class="img_card"
          src="../assets/OCS.jpg"
        />

        <div class="description_card">
          <div class="label_infos_card">
            Nom : <br /><span class="infos_card"> {{ show.name }}</span
            ><br />
          </div>
          <div class="label_infos_card">
            Nombre de saisons : <br /><span class="infos_card">
              {{ show.seasons }}</span
            ><br />
          </div>
          <div class="label_infos_card">
            Plateforme : <br /><span class="infos_card">
              {{ show.platform }}</span
            ><br />
          </div>
          <div class="label_infos_card">
            Note : <br /><span class="infos_card"> {{ show.rate }}/5</span
            ><br />
          </div>
        </div>
      </div>

      <div class="svg_line" style="display: block">
        <svg
          class="single_svg"
          @click="deleteShow(show.name)"
          fill="#FF0000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
        >
          <path
            d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"
          />
        </svg>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: "UserList",
  data() {
    return {
      shows: [],
    };
  },
  methods: {
    async deleteShow(name) {
      const token = localStorage.getItem("token");
      await fetch("/deleteShow", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
        }),
      }).then(this.created());
    },

    async created() {
      const response = await fetch("/shows");
      this.shows = await response.json();
    },
  },
  async beforeCreate() {
    const response = await fetch("/shows");
    this.shows = await response.json();
  },
};
</script>

<style scoped>
.content_card {
  display: inline-flex;
}

.card {
  background-color: #e7e7e7;
  width: 200px;
  height: 400px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 3px 3px 5px 1px rgba(54, 54, 54, 0.2);
}

.card_edit {
  background-color: #e7e7e7;
  width: 200px;
  height: 400px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 3px 3px 5px 1px rgba(54, 54, 54, 0.2);
}

.card:hover {
  transform: translateY(-5px) scale(1.005) translateZ(0);
}

.card_edit:hover {
  transform: translateY(-5px) scale(1.005) translateZ(0);
}

.description_card {
  padding: 0px 20px 0px 20px;
}

.img_card {
  width: 200px;
  height: 140px;
  border-radius: 5px 5px 0px 0px;
}

.svg_line {
  text-align: right;
  padding-right: 10px;
}

.single_svg {
  cursor: pointer;
  width: 23px;
}

.label_infos_card {
  margin-bottom: 10px;
}

.infos_card {
  font-weight: 800;
}
</style>
