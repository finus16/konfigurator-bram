<template>
  <div class="settings">
    <h3>Główne ustawienia</h3>

    <div class="form-group">
      <label for="szerokosc">Szerokość</label>
      <input v-model.lazy.number="value.szerokosc" name="szerokosc" type="text">cm
    </div>

    <div class="form-group">
      <label for="wysokosc">Wysokość</label>
      <input v-model.lazy.number="value.wysokosc" name="wysokosc" type="text">cm
    </div>

    <div class="form-group">
      <label for="montaz">Typ montażu</label>
      <select v-model="value.typ_montazu" name="montaz">
        <option value="">------</option>
        <option v-for="montage in typy_montazu" v-bind:key="montage.id" v-bind:value="montage.id">{{montage.text}}</option>
      </select>
    </div>

    <div class="form-group">
      <label for="obsluga">Obsługa</label>
      <select v-model="value.obsluga" name="obsluga">
        <option value="">-----</option>
        <option v-for="obsluga in rodzaje_obslugi" :key="obsluga.id" :value="obsluga.id">{{obsluga.text}}</option>
      </select>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
      typy_montazu: [
        {
          id: 1,
          text: 'A'
        },
        {
          id: 2,
          text: 'B'
        },
        {
          id: 3,
          text: 'C'
        },
        {
          id: 4,
          text: 'D'
        }
      ],

      rodzaje_obslugi: [
        {
          id: 1,
          text: 'Lewa'
        },
        {
          id: 2,
          text: 'Prawa'
        }
      ]
    }
  }
}
</script>

<style scoped>
  label{
    display: block;
  }
</style>
