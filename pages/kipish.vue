<template>
  <div>
    <template v-if="windowWidth > 1024 && windowWidth !== null">
      <kipish-desktop />
    </template>
    <template v-if="windowWidth <= 1024 && windowWidth !== null">
      <kipish-mobile />
    </template>
  </div>
</template>

<script setup>
import {useScreenStore} from "~/stores/screen.ts";

const store = useScreenStore()
const windowWidth = computed(() => store.screenWidth);

</script>


<style scoped>

</style>