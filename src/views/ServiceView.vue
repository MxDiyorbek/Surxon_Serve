<template>
  <section class="about">
    <h1 class="text">Xizmat kursatish turlari</h1>
    <div class="container">
      <div class="items">

        <TheItem v-for="(item, idx) in item" :key="idx" :index="idx" :item="item" @click="is_Cliekd = idx"
          :class="{ 'active': (is_Cliekd == idx) }" />
      </div>
    </div>
  </section>
</template>

<script>
import TheItem from '../components/Waraper/TheItem.vue';

export default {
  components: { TheItem },
  data() {
    return {

      is_Cliekd: null,
      item: [
        {
          img: require('../assets/images/komp.jpg')
        },
        {
          img: require('../assets/images/card.png')
        },
        {
          img: require('../assets/images/img.jpg')
        },
        {
          img: require('../assets/images/bloc.png')
        },
        {
          img: require('../assets/images/img1.jpeg')
        },
        {
          img: require('../assets/images/img3.jpg')
        },
        {
          img: require('../assets/images/img4.jpg')
        },
        {
          img: require('../assets/images/img6.jpg')
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.about {
  max-width: 2000px;
  width: 100%;
  margin: 0 auto;

  .container {
    max-width: 1800px;
    width: 100%;
    margin: 0 auto;

    .items {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
       margin-left: 0 auto;
      margin-bottom: 34px;

      .item {
        width: 409px;
        height: 409px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }

        :hover {
          transform: rotate(1deg);
          scale: (1.01);
          transition: 1s;
        }
      }
    }
  }
}
</style>