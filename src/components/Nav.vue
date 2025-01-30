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
        class="size-6"
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
      <router-link to="/admin/employee/create">
        <div class="py-1 px-3 hover:bg-primary-100 cursor-pointer rounded">
          Medewerker aanmaken
        </div>
      </router-link>
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
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "SidebarNavigation",
  setup() {
    // Reactieve status voor dropdowns
    const dropdowns = reactive([false, false, false, false]);

    // Functie om dropdownstatus te toggelen
    const toggleDropdown = (index: number) => {
      dropdowns[index] = !dropdowns[index];
    };

    return {
      dropdowns,
      toggleDropdown,
    };
  },
});
</script>

<style scoped></style>
