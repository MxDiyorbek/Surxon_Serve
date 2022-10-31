<template>
  <h1 class="text">
        Sertifikatlar
      </h1>
    <carousel  
    :items-to-show="3">
    
      <slide class="cart" v-for="slide in slides" :key="slide" >
        <img class="img" :src="slide.img">
      </slide>
  
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </template>
  
  <script>
  // If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
  
  export default {
    name: 'App',
    data(){
      return {
          slides: [
              {
                  img: require('../assets/images/doc.png')
              },
              {
                  img: require('../assets/images/doc.png')
              },
              {
                  img: require('../assets/images/doc.png')
              },
              {
                  img: require('../assets/images/doc.png')
              },
              {
                  img: require('../assets/images/doc.png')
              },
              {
                  img: require('../assets/images/doc.png')
              },
              {
                  img: require('../assets/images/doc.png')
              },
              {
                  img: require('../assets/images/doc.png')
              },
              {
                  img: require('../assets/images/doc.png')
              }
          ]
      }
    },
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
  }
  </script>
  <style lang="scss">
  
    .img{
      width:500px;
      border-radius: 20px;
    }
  </style>