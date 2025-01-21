<script setup lang="ts">

import SideNav from "@/components/SideNav.vue";
import ContentSpace from "@/components/ContentSpace.vue";
import { provide, ref } from 'vue'

provide(/* key */ 'message', /* value */ 'Dashboard')
</script>

<template>
  <div class="flex w-full h-screen bg-background">
    <SideNav />
    <ContentSpace />
  </div>
</template>

<style scoped>

</style>