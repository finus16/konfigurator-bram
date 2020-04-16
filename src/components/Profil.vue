<template>
  <div class="settings">
    <h3>Profil</h3>

    <div class="form-group">
      <label for="profil">Profil</label>
      <select v-model="value.profil" name="profil" @change="profilChanged">
        <option value="">-----</option>
        <option v-for="profil in profile" v-bind:key="profil.id" v-bind:value="profil.id" >{{profil.name}}</option>
      </select>
    </div>

    <div class="form-group">
      <input v-model="value.perforacja" type="checkbox" name="perforacja" id="perforacja" :disabled="perforacja_disabled">
      <label style="display: inline;" for="perforacja"> Perforacja</label>
    </div>

    <div class="form-group">
      <label for="kolor_profila">Kolor profila</label>
      <select v-model="value.kolor_profila" name="kolor_profila">
        <option value="">-----</option>
        <option v-for="kolor in kolory_profila" v-bind:key="kolor.id" v-bind:value="kolor.id">{{kolor.text}}</option>
      </select>
    </div>

    <div class="row">
      <div class="col-6">
        <input v-model="profil_przeszklony" type="checkbox" name="profil_przeszklony" id="profil_przeszklony" :disabled="przeszklony_disabled">
        <label style="display: inline;" for="profil_przeszklony"> Profil przeszkolny</label>
        <div v-if="profil_przeszklony" class="form-group">
          <label for="">Ilość</label>
          <input size="5" type="number" min="0" value="0">
          <label for="">Kolor</label>
          <select name="">
            <option value="">-----</option>
            <option v-for="kolor in kolory_profila" v-bind:key="kolor.id" v-bind:value="kolor.id">{{kolor.text}}</option>
          </select>
          <label for="">Wysokość od dołu (cm)</label>
          <input id="" type="text" size="7">
        </div>
      </div>

      <div class="col-6">
        <input v-model="profil_wentylacyjny" type="checkbox" name="profil_wentylacyjny" id="profil_wentylacyjny" :disabled="wentylacyjny_disabled">
        <label style="display: inline;" for="profil_wentylacyjny"> Profil wentylacyjny</label>
        <div v-if="profil_wentylacyjny" class="form-group">
          <label for="">Ilość</label>
          <input size="5" type="number" min="0" value="0">
          <label for="">Kolor</label>
          <select name="">
            <option value="">-----</option>
            <option v-for="kolor in kolory_profila" v-bind:key="kolor.id" v-bind:value="kolor.id">{{kolor.text}}</option>
          </select>
          <label for="">Wysokość od dołu (cm)</label>
          <input id="" type="text" size="7">
        </div>
      </div>
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

  methods: {
    getProfil: function (id) {
      var ret = null
      for (const profil in this.profile) {
        if (this.profile[profil].id === id) {
          ret = this.profile[profil]
        }
      }
      return ret
    },

    profilChanged: function (event) {
      const profil = this.getProfil(parseInt(event.target.value))
      if (profil) {
        this.kolory_profila = profil.kolory
        var wyczysc = true
        for (let i = 0; i < this.kolory_profila.length; i++) {
          if (this.kolory_profila[i].id === parseInt(this.value.kolor_profila)) {
            wyczysc = false
          }
        }
        if (wyczysc) {
          this.value.kolor_profila = ''
        }

        if (profil.perforacja !== true) {
          this.value.perforacja = false
          this.perforacja_disabled = true
        } else {
          this.perforacja_disabled = false
        }

        if (profil.przeszklony !== true) {
          this.przeszklony_disabled = true
          this.profil_przeszklony = false
        } else {
          this.przeszklony_disabled = false
        }

        if (profil.wentylacyjny !== true) {
          this.wentylacyjny_disabled = true
          this.profil_wentylacyjny = false
        } else {
          this.wentylacyjny_disabled = false
        }
      }
    }
  },

  data: function () {
    return {
      profile: bramy.profile,
      kolory_profila: [],
      perforacja_disabled: false,
      profil_przeszklony: false,
      przeszklony_disabled: true,
      profil_wentylacyjny: false,
      wentylacyjny_disabled: true
    }
  }
}
</script>

<style scoped>

</style>
