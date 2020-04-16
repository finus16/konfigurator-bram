<template>
    <div id="app" class="container-fluid">

        <ErrorBox v-bind:errors="errors"/>

        <div class="row">
            <div class="col">
              <MainParams v-model="zaluzja"/>
            </div>
            <div class="col">
              <Profil v-model="zaluzja"/>
            </div>
            <div class="col">
              <Skrzynka v-model="zaluzja"/>
            </div>
            <div class="col">
              <Prowadnice v-model="zaluzja"/>
            </div>
        </div>

        <!--
        <div class="row mt-3">
          <div class="col">
            <Dodatki/>
          </div>
        </div>
        -->
    </div>
</template>

<script>
import ErrorBox from './components/ErrorBox'
import MainParams from './components/MainParams'
import Skrzynka from './components/Skrzynka'
import Profil from './components/Profil'
import Prowadnice from './components/Prowadnice'
// import Dodatki from './components/Dodatki'
import bramy from './parametry'

export default {
  name: 'App',
  data: function () {
    return {
      errors: [],
      zaluzja: {
        szerokosc: null,
        wysokosc: null,
        typ_montazu: '',
        obsluga: '',
        profil: '',
        kolor_profila: '',
        perforacja: false,
        rozmiar_skrzynki: '',
        kolor_skrzynki: '',
        kolor_bokow: '',
        wyjscie_awaryjne: '',
        wyjscie_kabla: ''
      }
    }
  },

  components: {
    ErrorBox,
    MainParams,
    Skrzynka,
    Profil,
    Prowadnice
  },

  computed: {
    minHeight: function () {
      return 50
    },

    maxHeight: function () {
      if (this.zaluzja.profil) {
        for (const key in bramy.profile) {
          if (bramy.profile[key].id === this.zaluzja.profil) {
            return bramy.profile[key].wys_max
          }
        }
        return 500
      } else {
        let max = 0
        for (const key in bramy.profile) {
          if (bramy.profile[key].wys_max > max) {
            max = bramy.profile[key].wys_max
          }
        }
        return max
      }
    },

    minWidth: function () {
      if (this.zaluzja.profil) {
        for (const key in bramy.profile) {
          if (bramy.profile[key].id === this.zaluzja.profil) {
            return bramy.profile[key].szer_min
          }
        }
        return 0
      } else {
        let min = 500
        for (const key in bramy.profile) {
          if (bramy.profile[key].szer_min < min) {
            min = bramy.profile[key].szer_min
          }
        }
        return min
      }
    },

    maxWidth: function () {
      if (this.zaluzja.profil) {
        for (const key in bramy.profile) {
          if (bramy.profile[key].id === this.zaluzja.profil) {
            return bramy.profile[key].szer_max
          }
        }
        return 500
      } else {
        let max = 0
        for (const key in bramy.profile) {
          if (bramy.profile[key].szer_min > max) {
            max = bramy.profile[key].szer_max
          }
        }
        return max
      }
    }
  },

  methods: {

    validate: function () {
      console.log('rozpoczynam walidacje')
      this.errors = []
      if (this.zaluzja.szerokosc) {
        if (this.zaluzja.szerokosc > this.maxWidth) {
          this.errors.push('Maksymalna szerokość żaluzji to ' + this.maxWidth + 'cm')
        }

        if (this.zaluzja.szerokosc < this.minWidth) {
          this.errors.push('Minimalna szerokość żaluzji to ' + this.minWidth + 'cm')
        }
      }

      if (this.zaluzja.wysokosc) {
        console.log('sprawdzam wysokosc')
        if (this.zaluzja.wysokosc > this.maxHeight) {
          console.log(this.zaluzja.wysokosc + ' ' + this.maxHeight)
          this.errors.push('Maksymalna wysokość żaluzji to ' + this.maxHeight + 'cm')
        }

        if (this.zaluzja.wysokosc < this.minHeight) {
          this.errors.push('Minimalna wysokość żaluzji to ' + this.minHeight + 'cm')
        }
      }
    }
  },

  watch: {
    zaluzja: {
      deep: true,
      handler: function () {
        this.validate()
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
