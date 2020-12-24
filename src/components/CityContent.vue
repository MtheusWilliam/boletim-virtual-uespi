<template>
  <v-card>
    <v-toolbar height="80px" flat class="degrade" dark>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        {{ cityDialogContent.title }}
        <span class="spanSubtitle"><br />{{ cityDialogContent.subtitle }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="hideDialog" icon large
        ><v-icon>mdi-close-box</v-icon></v-btn
      >
    </v-toolbar>
    <v-tabs vertical>
      <v-tab>
        <v-icon left> mdi-information- </v-icon>
        <span class="leftSpan">Ações<br />Extensionistas</span>
        <v-spacer></v-spacer>
      </v-tab>
      <v-tab v-if="cityDialogContent.key == 'picos'">
        <v-icon left> mdi-information- </v-icon>
        <span class="leftSpan">Corpo<br />de Dança</span>
        <v-spacer></v-spacer>
      </v-tab>
      <v-tab>
        <v-icon left> mdi-information- </v-icon>
        <span class="leftSpan">Levantamento<br />de Bolsas</span>
        <v-spacer></v-spacer>
      </v-tab>
      <v-tab-item>
        <v-card flat>
          <v-data-table
            :headers="
              cityDialogContent.key == 'teresina'
                ? headers_01_teresina
                : headers_01
            "
            :items="cityDialogContent.content.acoesExtensionistas"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
        </v-card>
      </v-tab-item>
      <v-tab-item v-if="cityDialogContent.key == 'picos'">
        <v-card flat>
          <v-data-table
            :headers="headers_danca_picos"
            :items="cityDialogContent.content.corpoDeDanca"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th
                    class="text-left"
                    v-for="(header, index) in headers_02"
                    :key="index"
                  >
                    {{ header.text }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in cityDialogContent.content
                    .levantamentoBolsas"
                  :key="index"
                >
                  <td class="text-left">{{ item.programa }}</td>
                  <td class="text-left">{{ item.contemplados }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["CITY_DIALOG_CONTENT"]),
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
    headers_01: [
      {
        text: "Cursos",
        align: "start",
        sortable: false,
        value: "curso",
      },
      { text: "Áreas Temáticas", value: "areas" },
      { text: "Tipo", value: "tipo" },
      { text: "Programas/Projetos", value: "projetos" },
      { text: "Coordenador(a)", value: "coordenador" },
      { text: "Situação", value: "situacao" },
    ],
    headers_01_teresina: [
      {
        text: "Campus",
        align: "start",
        sortable: true,
        value: "campus",
      },
      { text: "Centro", value: "centro" },
      { text: "Áreas Temáticas", value: "areas" },
      { text: "Tipo", value: "tipo" },
      { text: "Programas/Projetos", value: "projetos" },
      { text: "Coordenador(a)", value: "coordenador" },
      { text: "Situação", value: "situacao" },
    ],
    headers_danca_picos: [
      {
        text: "Mês",
        align: "start",
        sortable: false,
        value: "mes"
      },
      { text: "Ações", sortable: false, value: "acoes" },
      { text: "Situação", sortable: false, value: "situacao" }
    ],
    headers_02: [
      {
        text: "Programa",
        align: "start",
        sortable: false,
        value: "programa",
      },
      { text: "Contemplados", value: "contemplados" },
    ],
  }),
  methods: {
    hideDialog() {
      this.$store.commit("HIDE_TOGGLE_CITY_DIALOG");
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
.leftSpan {
  text-align: left;
}
.spanSubtitle {
  font-size: 0.8em;
}
</style>
