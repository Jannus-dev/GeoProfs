<script setup lang="ts">
import Logo from "@/components/Logo.vue";
import Separator from "@/components/Separator.vue";
import LoginForm from "@/components/LoginForm.vue";
import BackgroundImage from "@/components/BackgroundImage.vue";
import ForgotPasswordLink from "@/components/ForgotPasswordLink.vue";

</script>

<template>
  <div class="flex w-full h-screen">
    <div class="w-1/2 p-7 bg-background">
      <div class="bg-primary-white w-full h-full rounded-xl">
        <Logo/>
        <Separator />
        <LoginForm />
        <div class="flex justify-center mt-5">
          <ForgotPasswordLink />
        </div>
      </div>
    </div>
    <BackgroundImage/>
  </div>
</template>

<style scoped>
/* Eventuele specifieke stijlen kunnen hier worden toegevoegd */
</style>
