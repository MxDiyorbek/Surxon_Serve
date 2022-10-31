<template>
  <TheNavbar />
  <router-view/>
  <TheFooter />
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: { TheNavbar, TheFooter }
}
</script>
<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Poppins:100,200,300,500,600,700,800,900);
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', 'Philosopher' sans-serif;
    scroll-behavior: smooth;
    user-select: none;
    list-style: none;
    text-decoration: none;
    
}

</style>