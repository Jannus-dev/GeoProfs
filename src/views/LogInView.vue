<script setup lang="ts">

</script>

<template>
  <div class="flex w-full h-screen" >
    <div class="w-1/2 p-7 bg-background">
      <div class="bg-primary-white w-full h-full rounded-xl">
        <img src="../assets/img/logo-large.png" alt="Logo" class="mx-auto w-1/5">
        <hr class="w-4/5 h-1 mx-auto my-4 bg-primary-100 border-0 md:my-10 dark:bg-gray-700">
        <form class="flex flex-col w-2/5 mx-auto">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required >
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required>
          <div class="flex justify-start">
            <input type="checkbox" id="remember" name="remember">
            <label for="remember" class="m-3 font-bold">Onthoud mij</label>
          </div>
          <button type="submit" class="bg-primary-100 h-[3rem] text-primary-white rounded">Log In</button>
        </form>
      </div>
    </div>
    <img src="../assets/img/wallpaper.png" alt="wallpaper" class="w-1/2">
  </div>

</template>

<style scoped>

</style>