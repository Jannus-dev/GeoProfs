<template>
  <a :href="href" class="underline decoration-primary-blue">
    {{ text }}
  </a>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '#',
  },
  text: {
    type: String,
    default: 'Wachtwoord vergeten?',
  },
});
</script>

<style scoped>
/* Eventuele specifieke stijlen kunnen hier worden toegevoegd */
</style>
