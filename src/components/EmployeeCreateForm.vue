<script setup lang="ts">
import { ref } from "vue";
import { useApiConnector } from "@/composables/useApiConnector";
const { post } = useApiConnector();
const formData = ref({
  firstname: "",
  middlename: "",
  lastname: "",
  email: "",
  street: "",
  street_number: "",
  postal_code: "",
  city: "",
  contract_type: "",
  work_hours: "",
  hired_at: "",
  role: "",
  department: "",
  section: "",
});
const handleSubmit = async () => {
  try {
    const response = await post("user/create", formData.value);
    console.log("Success:", response);
    // Optionally, redirect or display a success message
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};
</script>

<template>
  <div class="admin bg-off-white m-5 p-5">
    <form
      @submit.prevent="handleSubmit"
      method="post"
      class="flex justify-center gap-[80px]"
    >
      <div class="flex flex-col">
        <label for="firstname">Voornaam:</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          required
          class="border border-solid border-bd-grey mt-2 w-[600px] h-[40px] mb-[-30px]"
        /><br /><br />

        <label for="middlename">Middelna(a)m(en):</label>
        <input
          type="text"
          id="middlename"
          name="middlename"
          class="border border-solid border-bd-grey mt-2 w-[600px] h-[40px] mb-[-30px]"
        /><br /><br />

        <label for="lastname">Achternaam:</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          required
          class="border border-solid border-bd-grey mt-2 w-[600px] h-[40px] mb-[-30px]"
        /><br /><br />

        <label for="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          class="border border-solid border-bd-grey mt-2 w-[600px] h-[40px] mb-[-30px]"
        /><br /><br />

        <label for="street">Straat:</label>
        <input
          type="text"
          id="street"
          name="street"
          required
          class="border border-solid border-bd-grey mt-2 w-[600px] h-[40px] mb-[-30px]"
        /><br /><br />

        <label for="street-number">Huisnummer:</label>
        <input
          type="text"
          id="street-number"
          name="street_number"
          required
          class="border border-solid border-bd-grey mt-2 w-[600px] h-[40px] mb-[-30px]"
        /><br /><br />

        <label for="postal-code">Postcode:</label>
        <input
          type="text"
          id="postal-code"
          name="postal_code"
          required
          class="border border-solid border-bd-grey mt-2 w-[600px] h-[40px] mb-[-30px]"
        /><br /><br />

        <label for="city">Woonplaats:</label>
        <input
          type="text"
          id="city"
          name="city"
          required
          class="border border-solid border-bd-grey mt-2 w-[600px] h-[40px] mb-[-30px]"
        /><br /><br />
      </div>
      <div class="flex flex-col">
        <label for="contract-type">Contracttype:</label>
        <input
          type="text"
          id="contract-type"
          name="contract_type"
          required
          class="border border-solid border-bd-grey mt-2 w-[600px] h-[40px] mb-[-30px]"
        /><br /><br />

        <label for="work-hours">Werkuren:</label>
        <input
          type="number"
          id="work-hours"
          name="work_hours"
          required
          class="border border-solid border-bd-grey mt-2 w-[600px] h-[40px] mb-[-30px]"
        /><br /><br />

        <label for="hired-at">In dienst sinds:</label>
        <input
          type="date"
          id="hired-at"
          name="hired_at"
          required
          class="border border-solid border-bd-grey mt-2 w-[600px] h-[40px] mb-[-30px]"
        /><br /><br />

        <label for="role">Functie:</label>
        <input
          type="text"
          id="role"
          name="role"
          required
          class="border border-solid border-bd-grey mt-2 w-[600px] h-[40px] mb-[-30px]"
        /><br /><br />

        <label for="department">Afdeling:</label>
        <input
          type="text"
          id="department"
          name="department"
          required
          class="border border-solid border-bd-grey mt-2 w-[600px] h-[40px] mb-[-30px]"
        /><br /><br />

        <label for="section">Sectie:</label>
        <input
          type="text"
          id="section"
          name="section"
          required
          class="border border-solid border-bd-grey mt-2 w-[600px] h-[40px] mb-[-30px]"
        /><br /><br />
        <div class="flex justify-end gap-[20px] mt-[10px]">
          <router-link to="/dashboard"
            ><button class="bg-bd-grey w-[150px] h-[40px] text-white font-bold">
              ANNULEREN
            </button>
          </router-link>
          <button
            type="submit"
            class="bg-primary-100 w-[200px] h-[40px] text-white font-bold"
          >
            ACCOUNT MAKEN
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
