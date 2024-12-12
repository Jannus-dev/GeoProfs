<template>
  <img :src="src" :alt="alt" class="mx-auto w-1/5" />
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: 'Logo',
  },
});
</script>

<style scoped>
/* Eventuele specifieke stijlen kunnen hier worden toegevoegd */
</style>
