<template>
  <img :src="src" :alt="alt" class="w-1/2" />
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: 'Achtergrondafbeelding',
  },
});
</script>

<style scoped>
/* Eventuele specifieke stijlen kunnen hier worden toegevoegd */
</style>
