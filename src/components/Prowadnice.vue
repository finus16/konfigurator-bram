<template>
  <div class="settings">
    <h3>Prowadnice</h3>

    <div class="form-group">
      <label for="kolor_prowadnic">Kolor prowadnic</label>
      <select name="kolor_prowadnic">
        <option value="">-----</option>
        <option v-for="kolor in prowadnice.kolory" :key="kolor.id" :value="kolor.id">{{kolor.text}}</option>
      </select>
    </div>

    <div class="form-group">
      <label for="wiercenie_prowadnic">Wiercenie prowadnic</label>
      <select name="wiercenie_prowadnic">
        <option value="">-----</option>
        <option v-for="wiercenie in prowadnice.wiercenia" :key="wiercenie.id" :value="wiercenie.id">{{wiercenie.text}}</option>
      </select>
    </div>

  </div>
</template>

<script>
import bramy from '../parametry'
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },

  data: function () {
    return {
      prowadnice: bramy.prowadnice
    }
  }
}
</script>

<style scoped>

</style>
