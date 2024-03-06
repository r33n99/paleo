<template>
  <div>
    <template v-if="$device.isDesktop">
      <silk-desktop />
    </template>

    <template v-if="$device.isMobileOrTablet">
      <silk-mobile />
    </template>
  </div>
</template>

<script setup>

</script>


<style scoped></style>