<script setup lang="ts">
import { reactive } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useApiConnector } from "@/composables/useApiConnector";

// API-connector en auth store ophalen
const { post } = useApiConnector();
const { token, logout } = useAuthStore();

// Reactieve status voor dropdowns
const dropdowns = reactive([false, false, false, false]);

// Functie om dropdownstatus te toggelen
const toggleDropdown = (index: number) => {
  dropdowns[index] = !dropdowns[index];
};

// Logout functie
const handleLogout = async () => {
  if (!token.value) {
    console.warn("Geen token gevonden, uitloggen wordt overgeslagen.");
    logout();
    window.location.href = "/";
    return;
  }

  try {
    // Stuur een POST-verzoek naar de API om uit te loggen
    const response = await post("logout", {}, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });

    if (response.status === 200) {
      console.log("Succesvol uitgelogd");
    } else {
      console.warn("Uitloggen mislukt op de server:", response.data);
    }
  } catch (error) {
    console.error("Fout bij uitloggen:", error);
  } finally {
    // Voer altijd de lokale logout-actie uit
    logout();
    window.location.href = "/";
  }
};
</script>

<template>
  <!-- Hoofdopties -->
  <div class="pl-4 pr-4 pt-2">
    <div
        class="py-2 px-4 bg-primary-100 text-primary-white rounded cursor-pointer flex"
        @click="toggleDropdown(0)"
    >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 "
      >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
      <span class="ml-2">Home</span>
    </div>
  </div>
  <div class="pl-4 pr-4">
    <div
        class="py-2 px-4 hover:bg-primary-100 text-primary-white rounded cursor-pointer flex"
        @click="toggleDropdown(1)"
    >
      ✈ Verlof
    </div>
    <div v-if="dropdowns[1]" class="ml-4 space-y-1 text-primary-white">
      <div class="py-1 px-3 hover:bg-primary-100 cursor-pointer rounded">
        Verlof aanvraag
      </div>
      <div class="py-1 px-3 hover:bg-primary-100 cursor-pointer rounded">
        Verlof overzicht
      </div>
      <div class="py-1 px-3 hover:bg-primary-100 cursor-pointer rounded">
        Afdeling overzicht
      </div>
    </div>
  </div>
  <div class="pl-4 pr-4">
    <div
        class="py-2 px-4 hover:bg-primary-100 text-primary-white rounded cursor-pointer flex"
        @click="toggleDropdown(2)"
    >
      🛡️ Admin
    </div>
    <div v-if="dropdowns[2]" class="ml-4 space-y-2 text-primary-white">
      <div class="py-1 px-3 hover:bg-primary-100 cursor-pointer rounded">
        Medewerkers overzict
      </div>
      <div class="py-1 px-3 hover:bg-primary-100 cursor-pointer rounded">
        Verlofcatogorie overzicht
      </div>
      <div class="py-1 px-3 hover:bg-primary-100 cursor-pointer rounded">
        Rollen overzicht
      </div>
    </div>
  </div>
  <div class="pl-4 pr-4">
    <div
        class="py-2 px-4 hover:bg-primary-100 text-primary-white rounded cursor-pointer flex"
        @click="toggleDropdown(3)"
    >
      📋 Administatie
    </div>
    <div v-if="dropdowns[3]" class="ml-4 space-y-2 text-primary-white">
      <div class="py-1 px-3 hover:bg-primary-100 cursor-pointer rounded">
        Verlof overzicht afdeling
      </div>
      <div class="py-1 px-3 hover:bg-primary-100 cursor-pointer rounded">
        Verlofuren downloaden
      </div>
      <div class="py-1 px-3 hover:bg-primary-100 cursor-pointer rounded">
        Verlofaanvraag overzicht
      </div>
    </div>
  </div>
  <div class="pl-4 pr-4">
    <div
        class="py-2 px-4 hover:bg-primary-100 text-primary-white rounded cursor-pointer flex"
        @click="handleLogout"
    >
      🔐 Uitloggen
    </div>
  </div>
</template>

<style scoped>
</style>
