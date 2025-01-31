<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useApiConnector } from "@/composables/useApiConnector";
import { useAuthStore } from "@/stores/auth";

const { get } = useApiConnector();
const { token } = useAuthStore();

// Reactieve variabelen voor de verlofdata en een laadstatus
const leaveData = ref([]);
const isLoading = ref(true);
const error = ref(null);

console.log("Bearer-token:", token.value);


const fetchLeaveData = async () => {
  try {
    isLoading.value = true;

    const response = await get("leave", {
      params: {
        status: "asc",
        limit: 10,
      },
      headers: {
        Authorization: token.value, // Alleen het token, zonder "Bearer"
      },
    });


    if (response.status === 200) {
      leaveData.value = response.data; // Data opslaan
    } else {
      console.error("Fout bij het ophalen van data:", response.data);
      error.value = response.data.message || "Er is iets misgegaan.";
    }
  } catch (err) {
    console.error("Fout bij het ophalen van data:", err);
    error.value = err.message || "Er is iets misgegaan.";
  } finally {
    isLoading.value = false;
  }
};

// API-aanroep doen bij component mounten
onMounted(fetchLeaveData);
</script>

<template>
  <div>
    <div v-if="isLoading" class="text-center">Laden...</div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
    <div v-else>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right">
          <thead class="dark:text-white">
          <tr>
            <th scope="col" class="px-6 py-3">Datum</th>
            <th scope="col" class="px-6 py-3">Verlof soort</th>
            <th scope="col" class="px-6 py-3">Verlof reden</th>
            <th scope="col" class="px-6 py-3">Status</th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="(leave, index) in leaveData"
              :key="index"
              class="bg-off-white border-b"
          >
            <td class="px-6 py-1">{{ leave.date || "-" }}</td>
            <td class="px-6 py-1">{{ leave.type || "-" }}</td>
            <td class="px-6 py-1">{{ leave.reason || "-" }}</td>
            <td class="px-6 py-1">{{ leave.status || "-" }}</td>
          </tr>
          <tr v-if="leaveData.length === 0">
            <td colspan="4" class="px-6 py-4 text-center">Geen resultaten</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-center {
  text-align: center;
}
.text-red-500 {
  color: #f56565;
}
</style>
