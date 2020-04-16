<template>
  <div class="settings">
    <h3>Skrzynka</h3>

    <div class="form-group">
      <label for="rozmiar_skrzynki">Rozmiar skrzynki</label>
      <select v-model="value.rozmiar_skrzynki" name="rozmiar_skrzynki" @change="rozmiarChanged">
        <option value="">-----</option>
        <option v-for="rozmiar in rozmiary_skrzynki" v-bind:key="rozmiar.id" v-bind:value="rozmiar.id">{{rozmiar.text}}</option>
      </select>
    </div>

    <div class="form-group">
      <label for="kolor_skrzynki">Kolor skrzynki</label>
      <select v-model="value.kolor_skrzynki" name="kolor_skrzynki">
        <option value="">-----</option>
        <option v-for="kolor in kolory_skrzynki" v-bind:key="kolor.id" v-bind:value="kolor.id">{{kolor.text}}</option>
      </select>
    </div>

    <div class="form-group">
      <label for="wyjscie_awaryjne">Wyjście awaryjne</label>
      <select v-model="value.wyjscie_awaryjne" name="wyjscie_awaryjne">
        <option value="">-----</option>
        <option v-for="wyjscie in wyjscia_awaryjne" :key="wyjscie.id" :value="wyjscie.id">{{wyjscie.text}}</option>
      </select>
    </div>

    <div class="form-group">
      <label for="wyjscie_kabla">Wyjście kabla</label>
      <select v-model="value.wyjscie_kabla" name="wyjscie_kabla">
        <option value="">-----</option>
        <option v-for="wyjscie in wyjscia_kabla" :key="wyjscie.id" :value="wyjscie.id">{{wyjscie.text}}</option>
      </select>
    </div>

    <div class="form-group">
      <label for="kolor_bokow">Kolor boków</label>
      <select v-model="value.kolor_bokow" name="kolor_bokow">
        <option value="">-----</option>
        <option v-for="kolor in kolory_bokow" :key="kolor.id" :value="kolor.id">{{kolor.text}}</option>
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
      rozmiary_skrzynki: bramy.skrzynki,
      kolory_skrzynki: [],
      kolory_bokow: [],
      wyjscia_awaryjne: [],
      wyjscia_kabla: []
    }
  },

  methods: {
    rozmiarChanged: function (event) {
      const rozmiar = parseInt(event.target.value)
      var skrzynka = null
      for (const key in bramy.skrzynki) {
        if (bramy.skrzynki[key].id === rozmiar) {
          skrzynka = bramy.skrzynki[key]
        }
      }
      if (skrzynka) {
        this.kolory_skrzynki = skrzynka.kolory
        this.wyjscia_awaryjne = skrzynka.wyjscia_awaryjne
        this.wyjscia_kabla = skrzynka.wyjscia_kabla
        var wyjscieAwaryjne = true
        var wyjscieKabla = true
        for (let i = 0; i < this.wyjscia_awaryjne.length; i++) {
          if (this.wyjscia_awaryjne[i].id === parseInt(this.value.wyjscie_awaryjne)) {
            wyjscieAwaryjne = false
          }
        }
        for (let i = 0; i < this.wyjscia_kabla.length; i++) {
          if (this.wyjscia_kabla[i].id === parseInt(this.value.wyjscie_kabla)) {
            wyjscieKabla = false
          }
        }
      } else {
        this.kolory_skrzynki = []
        this.wyjscia_awaryjne = []
      }
      if (wyjscieAwaryjne) {
        this.value.wyjscie_awaryjne = ''
      }
      if (wyjscieKabla) {
        this.value.wyjscie_kabla = ''
      }
    }
  }
}
</script>

<style scoped>
</style>
