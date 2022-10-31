<template>
  <MainView/>
  <ServiceView/>
  <BranchesView/>
  <GoodsView/>
</template>

<script>
import MainView from './MainView.vue';
import ServiceView from './ServiceView.vue';
import BranchesView from './BranchesView.vue';
import GoodsView from '@/views/GoodsView.vue';
export default {
    components: { MainView, ServiceView, BranchesView, GoodsView }
}
</script>

<style>

</style>