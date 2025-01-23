<script setup lang="ts">

import Button from "@/stories/Button.vue";
</script>

<template>
  <div class="ml-5 flex justify-around h-20 items-center w-full">
    <div class="text-center">
      <p>Totale vrije tijd:</p>
      <p>[tijd] uur</p>
    </div>
    <div class="text-center">
      <p>Totale gebruikte vrije tijd:</p>
      <p class="text-warning-red-soft">[tijd] uur</p>
    </div>
    <div class="text-center">
      <p>Totale vrije tijd over:</p>
      <p class="text-warning-green">[tijd] uur</p>
    </div>
    <button class="w-40 h-10 border-2 border-primary-100 rounded">Verlof indienen 🕑</button>
  </div>
</template>

<style scoped>

</style>