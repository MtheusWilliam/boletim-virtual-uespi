<template>
  <v-img
    :src="require('../assets/piaui_mapa.png')"
    class="my-3"
    contain
    max-height="600"
  >
    <v-row>
      <v-col cols="12" class="mt-2" style="margin-left: 90px">
        <v-tooltip color="white" top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              @click="changeDialogCity(citiesContents.parnaiba)"
              small
              elevation="2"
              fab
            >
            </v-btn>
          </template>
          <span style="color: rgb(0, 119, 189)"><strong>Parnaíba</strong></span>
        </v-tooltip>
      </v-col>
      <v-col cols="12" class="mt-1" style="margin-left: 110px">
        <v-tooltip color="white" top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              @click="changeDialogCity(citiesContents.piripiri)"
              small
              elevation="2"
              fab
            >
            </v-btn>
          </template>
          <span style="color: rgb(0, 119, 189)"><strong>Piripiri</strong></span>
        </v-tooltip>
      </v-col>
      <v-col cols="12" style="margin-left: 60px; margin-top: -30px">
        <v-tooltip color="white" top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              class="ml-5"
              v-on="on"
              @click="changeDialogCity(citiesContents.barras)"
              small
              elevation="2"
              fab
            >
            </v-btn>
          </template>
          <span style="color: rgb(0, 119, 189)"><strong>Barras</strong></span>
        </v-tooltip>
        <v-tooltip color="white" top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="ml-2 mt-4"
              v-bind="attrs"
              v-on="on"
              @click="changeDialogCity(citiesContents.campoMaior)"
              small
              elevation="2"
              fab
            >
            </v-btn>
          </template>
          <span style="color: rgb(0, 119, 189)"
            ><strong>Campo Maior</strong></span
          >
        </v-tooltip>
      </v-col>
      <v-col cols="12" style="margin-top: -20px" class="ml-5">
        <v-tooltip color="white" top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              elevation="2"
              fab
              v-bind="attrs"
              v-on="on"
              @click="changeDialogCity(citiesContents.teresina)"
            >
            </v-btn>
          </template>
          <span style="color: rgb(0, 119, 189)"><strong>Teresina</strong></span>
        </v-tooltip>
      </v-col>
      <!-- TRÍADE FLORIANO-OEIRAS-PICOS -->
      <v-col cols="12" class="mt-8 ml-6">
        <v-tooltip color="white" top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              @click="changeDialogCity(citiesContents.floriano)"
              class="ml-12"
              small
              elevation="2"
              fab
            >
            </v-btn>
          </template>
          <span style="color: rgb(0, 119, 189)"><strong>Floriano</strong></span>
        </v-tooltip>
        <v-tooltip color="white" top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              @click="changeDialogCity(citiesContents.oeiras)"
              class="ml-2 mt-6"
              small
              elevation="2"
              fab
            >
            </v-btn>
          </template>
          <span style="color: rgb(0, 119, 189)"><strong>Oeiras</strong></span>
        </v-tooltip>
        <v-tooltip color="white" top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              @click="changeDialogCity(citiesContents.picos)"
              class="ml-2"
              small
              elevation="2"
              fab
            >
            </v-btn>
          </template>
          <span style="color: rgb(0, 119, 189)"><strong>Picos</strong></span>
        </v-tooltip>
      </v-col>
      <v-col cols="12" style="padding-right: 320px" class="mt-10">
        <v-tooltip color="white" top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              @click="changeDialogCity(citiesContents.urucui)"
              class="ml-2"
              small
              elevation="2"
              fab
            >
            </v-btn>
          </template>
          <span style="color: rgb(0, 119, 189)"><strong>Uruçuí</strong></span>
        </v-tooltip>
      </v-col>
      <v-col cols="12" style="padding-right: 100px; margin-top: -10px">
        <v-tooltip color="white" top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              @click="changeDialogCity(citiesContents.bomJesus)"
              small
              style="margin-right: 50px"
              elevation="2"
              fab
            >
            </v-btn>
          </template>
          <span style="color: rgb(0, 119, 189)"
            ><strong>Bom Jesus</strong></span
          >
        </v-tooltip>
        <v-tooltip color="white" top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              style="margin-top: -30px"
              v-bind="attrs"
              v-on="on"
              @click="changeDialogCity(citiesContents.saoRaimundoNonato)"
              small
              elevation="2"
              fab
            >
            </v-btn>
          </template>
          <span style="color: rgb(0, 119, 189)"
            ><strong>São Raimundo Nonato</strong></span
          >
        </v-tooltip>
      </v-col>
      <v-col cols="12" style="padding-right: 300px">
        <v-tooltip color="white" top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              @click="changeDialogCity(citiesContents.corrente)"
              small
              elevation="2"
              fab
            >
            </v-btn>
          </template>
          <span style="color: rgb(0, 119, 189)"><strong>Corrente</strong></span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-img>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    dialog: function () {
      return this.$store.state.main.cityDialog;
    },
    citiesContents: function () {
      return this.$store.state.main.citiesContents;
    },
    cityDialogContent: {
      get() {
        return this.$store.getters.CITY_DIALOG_CONTENT;
      },
      set(city) {
        this.$store.commit("SET_CITY_DIALOG_CONTENT", { city: city });
      },
    },
  },
  methods: {
    changeDialogCity(city) {
      this.$store.commit("SHOW_TOGGLE_CITY_DIALOG");
      this.cityDialogContent = city;
    },
  },
};
</script>

<style scoped>
h1 {
  color: white;
}
h3 {
  color: whitesmoke;
}
</style>
