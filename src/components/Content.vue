<template>
  <v-container>
    <v-row style="margin-top: 3%">
      <v-col cols="12">
        <h1>Boletim Virtual PREX 2020</h1>
      </v-col>
      <v-dialog persistent v-model="dialog" width="1200">
        <city-content></city-content>
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

export default {
  components: {
    InterativeMap,
    CityContent,
  },
  computed: {
    dialog: function () {
      return this.$store.state.main.cityDialog;
    },
  },
  data: () => ({}),
  methods: {},
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
