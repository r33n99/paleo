<template>
  <div>
    <template v-if="$device.isDesktop">
      <parcel-desktop />
    </template>

    <template v-if="$device.isMobileOrTablet">
      <parcel-mobile />
    </template>
  </div>
</template>

<script setup>

</script>


<style scoped></style>