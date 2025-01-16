<script setup lang="ts"></script>

<template>
  <form>
    <label for="starttime">Starttijd</label><br />
    <input type="datetime-local" id="starttime" name="starttime" /><br />
    <label for="endtime">Eindtijd</label><br />
    <input type="datetime-local" id="endtime" name="endtime" />
    <label for="wholeday">Gehele Dag</label><br />
    <input type="checkbox" id="wholeday" name="wholeday" />
    <label for="leavecategory">Verlofscategorie:</label>
    <select id="leavecategory" name="leavecategory">
      <option value="1"></option>
      <option value="2"></option>
      <option value="3"></option>
      <option value="4"></option>
    </select>
    <label for="reason">Reden:</label><br />
    <textarea name="message" style="width: 200px; height: 600px"> </textarea>
    <label for="submit">AANVRAAG VERSTUREN</label><br />
    <input type="submit" id="submit" name="submit" /><br />
  </form>
</template>

<style scoped>
/* Eventuele specifieke stijlen kunnen hier worden toegevoegd */
</style>
