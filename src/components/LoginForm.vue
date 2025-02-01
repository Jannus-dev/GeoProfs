<script setup lang="ts">
import { ref } from 'vue';
import { useApiConnector } from "@/composables/useApiConnector.ts";
import { useAuthStore } from "@/stores/auth.ts";

const { post } = useApiConnector();
const { setAuth } = useAuthStore();

const email = ref('');
const password = ref('');
const rememberMe = ref(false);

const handleSubmit = async () => {
  try {
    const response = await post('login', {
      email: email.value,
      password: password.value,
      remember: rememberMe.value,
    });

    if (response.status === 201) {
      const authToken = response.data.token; // API moet een token teruggeven

      setAuth(authToken, rememberMe.value); // Stel token in

      window.location.href = '/dashboard'; // Redirect na succesvol inloggen
    } else {
      alert(response.data.message || 'Inloggen mislukt');
    }
  } catch (error) {
    console.error('Inloggen mislukt:', error);
    alert('Er is een fout opgetreden. Probeer het opnieuw.');
  }
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
