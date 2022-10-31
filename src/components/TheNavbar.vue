<template>
   <header :class="{'scrolled-nav':scrolledNav}">
        <nav>
         <div class="branding">
            <h1 class="nick"><router-link class="link" :to="{name: 'home'}">Surxon service</router-link></h1>
         </div>
         <ul v-show="!mobile" class="navigation">
            <li><router-link class="link" :to="{name: 'home'}">Bosh Sahifa</router-link></li>
            <li><router-link class="link" :to="{name: 'about'}">Biz haqimizda</router-link></li>
            <li><router-link class="link" :to="{name: 'management'}">Rahbariyat</router-link></li>
            <li><router-link class="link" :to="{name: 'goods'}">Tovarlar</router-link></li>
            <li><router-link class="link" :to="{name: 'service'}">Xizmatlar va servislar</router-link></li>
            <li><router-link class="link" :to="{name: 'branches'}">Hududiy filiallar</router-link></li>
        </ul>

        <div class="icon">
         <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active':MobileNav}"></i>
        </div>

        <transition name="mobile-nav">
         <ul v-show="mobileNav" class="dropdown-nav">
            <li><router-link class="link" :to="{name: 'home'}">Bosh Sahifa</router-link></li>
            <li><router-link class="link active" :to="{name: 'about'}">Biz haqimizda</router-link></li>
            <li><router-link class="link" :to="{name: 'management'}">Rahbariyat</router-link></li>
            <li><router-link class="link" :to="{name: 'goods'}">Tovarlar</router-link></li>
            <li><router-link class="link" :to="{name: 'service'}">Xizmatlar va servislar</router-link></li>
            <li><router-link class="link" :to="{name: 'branches'}">Hududiy filiallar</router-link></li>
        </ul>
        </transition>
        </nav>
    </header>
</template>

<script>
export default {
   name: "TheNavbar",
   data(){
      return{
         scrolledNav:null,
         mobile:null,
         mobileNav:null,
         windowWidth:null,
   };
},

created(){
   window.addEventListener("resize", this.checkScreen);
   this.checkScreen();
},

mounted() {
   window.addEventListener("scroll", this.updateScroll);
},

methods:{
   toggleMobileNav(){
      this.mobileNav = !this.mobileNav
   },

   updateScroll(){
      const scrollPosition = window.scrollY;
      if(scrollPosition > 50){
         this.scrolledNav = true;
         return;
      }
      this.scrolledNav=false;
   },

   checkScreen(){
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 750){
         this.mobile = true;
         return;
      }
      this.mobile = false;
      this.mobileNav =false;
      return;
   },
},
};
</script>

<style lang="scss" scoped>

header{
   background-color: #fff;
   z-index: 99;
   width: 100%;
   transition: .5s ease all;
   color: #fff;
   display: flex;
   justify-content: center;
   text-align: center;

   nav{
   position: relative;
   display: flex;
   text-align: center;
   flex-direction: center;
   padding-bottom: 0;
   transition: .5s ease all;
   width: 100%;
   height: 80px;
   background-color: #242754;

   ul,
   .link{
      display: flex;
      font-weight: 500;
      font-family: Poppins;
      color: #fff;
      list-style: none;
      text-decoration: none;
   }
   
   li{
      padding: 0 20px;
      transform: 0.5s ease all;
      border-bottom: 1px solid transparent;
      font-size: 16px;
   }

   .branding{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 150px;

      @media (max-width: 750px) {
         margin-left: 50px;
      }

      .nick{
         font-family: 'Poppins';
          font-weight: 600;
      }
   }

   .navigation{
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: center;
   }

   .icon{
      display: flex;
      align-items: center;
      position: absolute;
      right: 50px;
      height: 100%;
      color: #fff;
      
      i{
         cursor: pointer;
         font-size: 24px;
         transition: 1s ease all;
      }
   }

   .icon-active{
      transform: rotate(180deg);
   }

   .dropdown-nav{
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 50%;
      height: 100%;
      min-width: 250px;
      color: #000;
      background-color: #fff;
      
      li{
         margin: 10px;
         
         a{
            color: #000;
         }
         
      }
   }

   .mobile-nav-enter-active,
   .mobile-nav-leave-active{
      transition: 1s ease all;
      z-index: 10000;
   }

   .mobile-nav-enter-from,
   .mobile-nav-leave-to{
      transform: translateX(-250px);
   }

   .mobile-nav-enter-to{
      transform: translateX(0);
   }
}
}
.scrolled-nav{
   background-color: #fff;
   box-shadow: 0 4px 6px -1px rgba(255, 255, 255, 0.8), 0 2px 4px -1px rgba(255, 255, 255, 0.7);

   nav{
      padding: 8px 0;

      .branding{
         img{
            width: 40px;
            box-shadow: 0 4px 6px -1px rgba(255, 255, 255, 0.8), 0 2px 4px -1px rgba(255, 255, 255, 0.7);
         }
      }
      li{
         color: #fff;
      }
   }
}
</style>