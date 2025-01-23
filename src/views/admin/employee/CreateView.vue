<script setup lang="ts">
import SideNav from "@/components/SideNav.vue";
import ContentSpace from "@/components/ContentSpace.vue";
import EmployeeCreateForm from "@/components/EmployeeCreateForm.vue";
import { provide, ref } from "vue";

provide(/* key */ "message", /* value */ "Account aanmaken");
</script>

<template>
  <div class="flex w-full h-screen bg-background">
    <SideNav />
    <ContentSpace> <EmployeeCreateForm /></ContentSpace>
  </div>
</template>

<style scoped></style>
