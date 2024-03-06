<template>
  <div>
    <template v-if="$device.isDesktop">
      <kipish-desktop />
    </template>

    <template v-if="$device.isMobileOrTablet">
      <kipish-mobile />
    </template>
  </div>
</template>

<script setup>
</script>


<style scoped></style>