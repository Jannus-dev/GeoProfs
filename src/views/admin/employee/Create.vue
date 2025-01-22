<template>
  <div class="admin">
    <h1>Voeg nieuwe werknemer toe</h1>
    <form action="/submit" method="post">
      <label for="firstname">Voornaam:</label>
      <input type="text" id="firstname" name="firstname" required /><br /><br />

      <label for="lastname">Achternaam:</label>
      <input type="text" id="lastname" name="lastname" required /><br /><br />

      <label for="middlename">Middelna(a)m(en):</label>
      <input type="text" id="middlename" name="middlename" /><br /><br />

      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" required /><br /><br />

      <label for="street">Straat:</label>
      <input type="text" id="street" name="street" required /><br /><br />

      <label for="street-number">Huisnummer:</label>
      <input
        type="text"
        id="street-number"
        name="street_number"
        required
      /><br /><br />

      <label for="postal-code">Postcode:</label>
      <input
        type="text"
        id="postal-code"
        name="postal_code"
        required
      /><br /><br />

      <label for="city">Woonplaats:</label>
      <input type="text" id="city" name="city" required /><br /><br />

      <label for="contract-type">Contracttype:</label>
      <input
        type="text"
        id="contract-type"
        name="contract_type"
        required
      /><br /><br />

      <label for="work-hours">Werkuren:</label>
      <input
        type="number"
        id="work-hours"
        name="work_hours"
        required
      /><br /><br />

      <label for="hired-at">In dienst sinds:</label>
      <input type="date" id="hired-at" name="hired_at" required /><br /><br />

      <label for="role">Functie:</label>
      <input type="text" id="role" name="role" required /><br /><br />

      <label for="department">Afdeling:</label>
      <input
        type="text"
        id="department"
        name="department"
        required
      /><br /><br />

      <label for="section">Sectie:</label>
      <input type="text" id="section" name="section" /><br /><br />

      <button type="submit">Werknemer toevoegen</button>
    </form>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
