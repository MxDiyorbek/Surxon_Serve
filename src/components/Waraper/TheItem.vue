<template>
    <div class="item">
        <img :src="item.img" alt="">
    </div>

</template>
  
<script>
export default {
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

.item:hover::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 409px;
    height: 409px;
    z-index: 2;
    border-radius: 10px;
    background: url(./Eye.png) center no-repeat;
    transition: 1s;

}

.item:hover::after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 409px;
    height: 409px;

    border-radius: 10px;
    background: #000;
    opacity: 0.5;
    transition: 1s;

}
</style>