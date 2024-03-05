<template>
  <div>
    <template v-if="windowWidth > 1024 && windowWidth !== null">
      <home-desktop />
    </template>
    <template v-else-if="windowWidth <= 1024 && windowWidth !== null">
      <home-mobile />
    </template>
  </div>
</template>

<script setup>
import {useScreenStore} from '~/stores/screen.ts'
import HomeDesktop from "~/components/home/homeDesktop.vue";
import HomeMobile from "~/components/home/homeMobile.vue";


const store = useScreenStore()
const windowWidth = computed(() => store.screenWidth);
</script>


<style scoped>

</style>