<script setup lang="ts">
import { ref } from 'vue';
import {useApiConnector} from "@/composables/useApiConnector.ts";

const {post} = useApiConnector();

const email = ref('');
const password = ref('');
const rememberMe = ref(false);

const handleSubmit = () => {
  console.log('Inloggen met:', { email: email.value, password: password.value, rememberMe: rememberMe.value });
  post('login', {email: email.value, password: password.value, remember: rememberMe.value})
    .then(response => {
      if (response.status === 201) {
        // Redirect to the dashboard page
        window.location.href = '/dashboard';

      } else {
        // Display an error message
        console.error('Inloggen mislukt:', response.data.message || 'Er is iets misgegaan.');
        alert(response.data.message || 'Er is iets misgegaan.');
      }
    })
    .catch(error => {
      console.error('Fout:', error.message || error);
      alert('Er is een fout opgetreden. Probeer het opnieuw.');
    });
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col w-2/5 mx-auto">
    <input
        v-model="email"
        type="email"
        id="email"
        name="email"
        required
        placeholder="Email"
        class="bg-background mt-5 p-2 border-b-2 border-secondary"
    />
    <input
        v-model="password"
        type="password"
        id="password"
        name="password"
        required
        placeholder="Password"
        class="bg-background mt-5 p-2 border-b-2 border-secondary"
    />
    <div class="flex justify-start">
      <input v-model="rememberMe" type="checkbox" id="remember" name="remember" />
      <label for="remember" class="m-3 font-bold">Onthoud mij</label>
    </div>
    <button type="submit" class="bg-primary-100 h-[3rem] w-4/5 mx-auto text-primary-white rounded">
      Inloggen
    </button>
  </form>
</template>

<style scoped>
/* Eventuele specifieke stijlen kunnen hier worden toegevoegd */
</style>
