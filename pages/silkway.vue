<template>
  <div>
    <template v-if="windowWidth > 1024 && windowWidth !== null">
      <silk-desktop/>
    </template>
    <template v-if="windowWidth <= 1024 && windowWidth !== null">
      <silk-mobile/>
    </template>
  </div>
</template>

<script setup>
import {useScreenStore} from "~/stores/screen.ts";
import SilkDesktop from "~/components/silkway/silkDesktop.vue";
import SilkMobile from "~/components/silkway/silkMobile.vue";

const store = useScreenStore()
const windowWidth = computed(() => store.screenWidth);

</script>


<style scoped>

</style>