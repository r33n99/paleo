<template>
  <div>
    <template v-if="$device.isDesktop">
      <home-desktop />
    </template>

    <template v-if="$device.isMobileOrTablet">
      <home-mobile />
    </template>
  </div>
</template>

<script setup>

</script>


<style scoped></style>