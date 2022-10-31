<template>
  <div class="main-card">
    <img class="main-img" :src="item.img" alt="">

    <button class="card-btn">{{ item.name }}</button>

  </div>
</template>

<script>
export default {
  name: 'TheItem',
  data() {
    return {
    }
  },
  props:
  {
    item:
    {
      type: Object,
      default: {}
    }
  },

}
</script>

<style lang="scss">
.main-card {
  height: 80vh;
  border-radius: 20px;
  margin: 8px;
  cursor: pointer;
  color: #fff;
  flex: 1;
  position: relative;
  transform: scale(0.98);
  transition: all 0.5s ease-in-out;
  position: relative;

  .main-img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    display: block;
    object-fit: cover;



  }

  .card-btn {
    border: none;
    width: 100px;
    height: 60px;
    background: #242754;
    opacity: 0.9;
    color: #fff;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    border-radius: 10px;
    position: relative;
    bottom: 250px;
    left: 0;
    opacity: 1;
  }

}

:hover {
  transform: scale(1);

}

.isActive {
  flex: 8;

  .card-btn {
    opacity: 1;
    width: 200px;
    font-size: 16px;
    line-height: 18px;
  }

}
</style>