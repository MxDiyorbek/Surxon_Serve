<template>
  <section class="main">
    <div class="cards">

      <Card
        v-for="(item, idx) in img_array"
        :key="idx"
        :index="idx"
        :item="item"
        @click="isActive = idx"
        :class="{ 'isActive': (isActive == idx) }"
      />
    </div>
  </section>
</template>

<script>
import Card from "@/components/Card/TheCard.vue";
export default {
  name: "HomeView",
  data() {
    return {
      isActive: null,
      img_array: [
        {
          img: require("../assets/images/img.jpg"),
          name: "Noutbuklar",
        },
        {
          img: require("../assets/images/img1.jpeg"),
          name: "Kompuyuterlar",
        },
        {
          img: require("../assets/images/img8.jpg"),
          name: "Noutbuklar",
        },
        {
          img: require("../assets/images/img7.jpg"),
          name: "Noutbuklar",
        },
      ],
    };
  },
  components: {
    Card,
  },
};
</script>

<style lang="scss" >
.text {
  width: 860px;
  height: 74px;
  background: #242754;
  color: #ffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: none;
  line-height: 46px;
  font-size: 36px;
  margin: 93px auto;
  font-family: 'Poppins', serif;
}

.main {
  max-width: 1900px;
  width: 100%;
  margin: 0 auto;

  .cards {
    width: 100%;
    display: flex;
  }
}
</style>
