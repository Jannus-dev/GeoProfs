<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useApiConnector } from "@/composables/useApiConnector.ts";

export default defineComponent({
  name: "ApiTester",
  setup() {
    const { get, post } = useApiConnector();
    const response = ref<null | Record<string, any>>(null);
    const error = ref<null | string>(null);

    // Test GET request when the component is mounted
    onMounted(async () => {
      try {
        const res = await get("/login");
        response.value = res.data;
      } catch (err: any) {
        error.value = err.message;
      }
    });

    // Function to handle POST request
    const handlePost = async () => {
      try {
        const res = await post("test-endpoint", { key: "value" });
        response.value = res.data;
      } catch (err: any) {
        error.value = err.message;
      }
    };

    return {
      response,
      error,
      handlePost,
    };
  },
});
</script>

<template>
  <div>
    <h1>API Tester</h1>
    <button @click="handlePost">Test POST Request</button>
    <div>
      <h2>Response:</h2>
      <pre>{{ response }}</pre>
    </div>
    <div v-if="error">
      <h2>Error:</h2>
      <pre>{{ error }}</pre>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 1.5em;
}
button {
  margin: 1em 0;
}
</style>
