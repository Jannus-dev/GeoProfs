<script setup lang="ts">
import { inject } from 'vue'
const name = inject('message')
</script>

<template>
  <h1 class="text-2xl font-bold ml-6 mt-6">{{ name }}</h1>
</template>

<style scoped>

</style>