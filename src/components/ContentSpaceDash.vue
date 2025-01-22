<script setup lang="ts">

import Title from "@/components/Title.vue";
import Separator from "@/components/Separator.vue";
</script>

<template>
  <div class="w-10/12 p-7 h-fit">
    <div class="bg-primary-white w-full h-full rounded-xl p-3">

<!--      Hier komt de content van de pagina-->
      <slot/>

    </div>
  </div>
</template>

<style scoped>

</style>