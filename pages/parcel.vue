<template>
  <div>
    <template v-if="windowWidth > 1024 && windowWidth !== null">
      <parcel-desktop />
    </template>
    <template v-if="windowWidth <= 1024 && windowWidth !== null">
      <parcel-mobile />
    </template>
  </div>
</template>

<script setup>
import {useScreenStore} from "~/stores/screen.ts";
import ParcelDesktop from "~/components/parcel/parcelDesktop.vue";
import ParcelMobile from "~/components/parcel/parcelMobile.vue";

const store = useScreenStore()
const windowWidth = computed(() => store.screenWidth);

</script>


<style scoped>

</style>