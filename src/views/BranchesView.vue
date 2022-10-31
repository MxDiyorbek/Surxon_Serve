<template>
  <h1 class="text">
        Hududiy Filiallar
      </h1>
    <carousel  
    :items-to-show="3">
    
      <slide class="card" v-for="slide in slides" :key="slide" style="magin-left:50px; " >
        <img :src="slide.img">
            <div class="card-content">
  
                  <div class="name-profession">
                    <span class="name">{{slide.name}}</span>
                  </div>
  
                  <div class="card-connect">
                    <a href="#"><i class="fa-solid fa-phone"></i>{{slide.number}}</a>
                    <a href="#"> <i class="fa-solid fa-location-dot"></i> {{slide.locatsia}}</a>
                  </div>
                </div>
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
                  img: require('../assets/images/img.jpg'),
                  name:'Denov filiali',
                  number:'+998912345678',
                  locatsia:'Denov'
              },
              {
                  img: require('../assets/images/img.jpg'),
                  name:'Surxon filiali',
                  number:'+998912345678',
                  locatsia:'Denov'
              },
              {
                  img: require('../assets/images/img.jpg'),
                  name:'Shahrisabz filiali',
                  number:'+998912345678',
                  locatsia:'Denov'
              },
              {
                  img: require('../assets/images/img.jpg'),
                  name:'Kitob filiali',
                  number:'+998912345678',
                  locatsia:'Denov'
              },
              {
                  img: require('../assets/images/img.jpg'),
                  name:'Guliston filiali',
                  number:'+998912345678',
                  locatsia:'Denov'
              },
              {
                  img: require('../assets/images/img.jpg'),
                  name:'Baliqchi filiali',
                  number:'+998912345678',
                  locatsia:'Denov'
              },
              {
                  img: require('../assets/images/img.jpg'),
                  name:'Kattakurgon filiali',
                  number:'+998912345678',
                  locatsia:'Denov'
              },
              {
                  img: require('../assets/images/img.jpg'),
                  name:'Termiz filiali',
                  number:'+998912345678',
                  locatsia:'Denov'
              },
              {
                  img: require('../assets/images/img.jpg'),
                  name:'Qarshi filiali',
                  number:'+998912345678',
                  locatsia:'Denov'
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
  
  .card{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    margin-bottom: 20px;
    
  
    img{
      width:500px;
      height: 335px;
      border-radius: 20px 20px 0 0;
      display: block;
      object-fit: cover;
    }
  
    .card-content{
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    height: 200px;
    width: 500px;
    border-radius: 0 0 20px 20px;
    color: #6c6c6c;
  
    .name-profession{
      margin-top: 40px;
      margin-bottom: 20px;
      font-size: 22px;
      font-family: Poppins;
      font-weight: 500;
    }
    .card-connect{
      display: flex;
      justify-content:space-around;
  
      a{
        color: #6c6c6c;
        font-size: 20px;
  
        i{
          margin-right: 5px;
          font-size: 22px;
        }
      }
  
      :hover{
        color: #242754;
      }
    }
    }
  }
  </style>