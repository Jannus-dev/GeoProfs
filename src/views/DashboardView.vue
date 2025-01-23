<script setup lang="ts">

import SideNav from "@/components/SideNav.vue";
import ContentSpace from "@/components/ContentSpace.vue";
import { provide, ref } from 'vue'
import DashboardContent from "@/components/DashboardContent.vue";
import ContentSpaceDash from "@/components/ContentSpaceDash.vue";
import DashboardTopInfo from "@/components/DashboardTopInfo.vue";

provide(/* key */ 'message', /* value */ 'Dashboard')
</script>

<template>
  <div class="flex w-full h-screen bg-background">
    <SideNav />
    <div class="w-5/6">
    <ContentSpaceDash>
      <DashboardTopInfo />
    </ContentSpaceDash>

    <ContentSpaceDash>
      <DashboardContent />
    </ContentSpaceDash>
    </div>
    </div>
</template>

<style scoped>

</style>