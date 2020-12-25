<template>
  <v-container>
    <v-row style="margin-top: 3%">
      <v-col cols="12">
        <h1>
          Boletim Virtual PREX 2020
          <v-btn @click="showJustificativaDialog" class="mb-2" icon dark
            ><v-icon>mdi-information</v-icon></v-btn
          >
        </h1>
      </v-col>
      <v-col cols="12">
        <v-btn
          @click="changeDialogEstado(citiesContents.piaui)"
          small
          elevation="2"
        >
          Dados de Todo o Estado
        </v-btn>
      </v-col>
      <v-dialog persistent v-model="dialog" width="1200">
        <city-content
          v-if="cityDialogContent.title != 'DADOS DE TODO O ESTADO'"
        ></city-content>
        <city-content-estado v-else></city-content-estado>
      </v-dialog>
      <v-col cols="12">
        <interative-map></interative-map>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import InterativeMap from "./InterativeMap";
import CityContent from "./CityContent";
import { mapGetters } from "vuex";
import CityContentEstado from "./CityContentEstado.vue";

export default {
  components: {
    InterativeMap,
    CityContent,
    CityContentEstado,
  },
  computed: {
    ...mapGetters(["CITY_DIALOG_CONTENT", "JUSTIFICATIVA_DIALOG_CONTENT"]),
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
  data: () => ({
    showDialog: false,
  }),
  methods: {
    changeDialogEstado(piaui) {
      this.$store.commit("SHOW_TOGGLE_CITY_DIALOG");
      this.cityDialogContent = piaui;
    },
    showJustificativaDialog() {
      this.$store.commit("SHOW_TOGGLE_JUSTIFICATIVA_DIALOG");
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
