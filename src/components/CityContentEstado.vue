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
        <v-icon left> mdi-information </v-icon>
        <span class="leftSpan">Ações Extensionistas<br />com Bolsas</span>
        <v-spacer></v-spacer>
      </v-tab>
      <v-tab>
        <v-icon left> mdi-information </v-icon>
        <span class="leftSpan">Ações Extensionistas<br />sem Bolsas</span>
        <v-spacer></v-spacer>
      </v-tab>
      <v-tab>
        <v-icon left> mdi-information </v-icon>
        <span class="leftSpan">PROEXT</span>
        <v-spacer></v-spacer>
      </v-tab>
      <v-tab>
        <v-icon left> mdi-information </v-icon>
        <span class="leftSpan">PIBEU</span>
        <v-spacer></v-spacer>
      </v-tab>
      <v-tab>
        <v-icon left> mdi-information </v-icon>
        <span class="leftSpan">Teatro</span>
        <v-spacer></v-spacer>
      </v-tab>
      <v-tab>
        <v-icon left> mdi-information </v-icon>
        <span class="leftSpan">Coral da Uespi</span>
        <v-spacer></v-spacer>
      </v-tab>
      <v-tab>
        <v-icon left> mdi-information </v-icon>
        <span class="leftSpan">UNUTI</span>
        <v-spacer></v-spacer>
      </v-tab>
      <v-tab>
        <v-icon left> mdi-information </v-icon>
        <span class="leftSpan">Assistência Social</span>
        <v-spacer></v-spacer>
      </v-tab>
      <v-tab>
        <v-icon left> mdi-information </v-icon>
        <span class="leftSpan">Assistência Estudantil</span>
        <v-spacer></v-spacer>
      </v-tab>
      <!-- <v-tab>
        <v-icon left>  mdi-information </v-icon>
        <span class="leftSpan">Levantamento<br />de Bolsas</span>
        <v-spacer></v-spacer>
      </v-tab> -->
      <!-- RELATÓRIO DE AÇÕES EXTENSIONISTAS -->
      <v-tab-item>
        <v-card flat>
          <v-data-table
            :headers="headers_02_01"
            :items="
              cityDialogContent.content.relatorioAcoesExtensionistas
                .acoesComBolsas
            "
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
        </v-card>
      </v-tab-item>
      <!-- Ações Extensionistas sem Bolsas -->
      <v-tab-item>
        <v-card flat>
          <v-data-table
            :headers="headers_02_02"
            :items="
              cityDialogContent.content.relatorioAcoesExtensionistas
                .acoesSemBolsas
            "
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
        </v-card>
      </v-tab-item>
      <!-- PROEXT -->
      <v-tab-item>
        <v-card flat>
          <v-data-table
            :headers="headers_02_03"
            :items="
              cityDialogContent.content.relatorioAcoesExtensionistas.proext
            "
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
        </v-card>
      </v-tab-item>
      <!-- PIBEU -->
      <v-tab-item>
        <v-card flat>
          <v-data-table
            :headers="headers_02_04"
            :items="
              cityDialogContent.content.relatorioAcoesExtensionistas.pibeu
            "
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
        </v-card>
      </v-tab-item>
      <!-- TEATRO -->
      <v-tab-item>
        <v-card flat>
          <v-data-table
            :headers="headers_03"
            :items="cityDialogContent.content.teatro"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
        </v-card>
      </v-tab-item>
      <!--Coral-->
      <v-tab-item>
        <v-card flat>
          <v-data-table
            :headers="headers_04"
            :items="cityDialogContent.content.coral"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
        </v-card>
      </v-tab-item>
      <!-- UNUTI-->
      <v-tab-item>
        <v-card flat>
          <v-data-table
            :headers="headers_05"
            :items="cityDialogContent.content.unuti"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
        </v-card>
      </v-tab-item>
      <!-- ASSISTÊNCIA SOCIAL -->
      <v-tab-item>
        <v-card flat>
          <v-data-table
            :headers="headers_03"
            :items="cityDialogContent.content.assistenciaSocial"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
        </v-card>
      </v-tab-item>
      <!-- ASSISTÊNCIA ESTUDANTIL-->
      <v-tab-item>
        <v-card flat>
          <v-data-table
            :headers="headers_03"
            :items="cityDialogContent.content.assistenciaEstudantil"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
        </v-card>
      </v-tab-item>
      <!-- LEVANTAMENTO DE BOLSAS -->
      <!-- <v-tab-item>
        <v-card flat>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th
                    class="text-left"
                    v-for="(header, index) in headers_06"
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
      </v-tab-item> -->
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
    //AÇÕES EXTENSIONISTAS
    //RELATIORIO DE AÇÕES EXTENSIONISTAS
    //AÇÕES CULTURAIS COM BOLSAS
    headers_02_01: [
      {
        text: "Campi",
        align: "start",
        sortable: false,
        value: "campus",
      },
      { text: "Cidade", value: "cidade" },
      { text: "Território", value: "territorio" },
      { text: "Ação", value: "acao" },
    ],
    //AÇÕES EXTENSIONISTAS SEM BOLSAS
    headers_02_02: [
      {
        text: "Campi",
        align: "start",
        sortable: false,
        value: "campus",
      },
      { text: "Cidade", value: "cidade" },
      { text: "Território", value: "territorio" },
      { text: "Ação", value: "acao" },
      { text: "Atividades", value: "atividade" },
    ],
    //PROEXT
    headers_02_03: [
      {
        text: "Campi",
        align: "start",
        sortable: false,
        value: "campus",
      },
      { text: "Cidade", value: "cidade" },
      { text: "Território", value: "territorio" },
      { text: "Coordenador", value: "coordenador" },
      { text: "Projeto", value: "programa" },
    ],
    //PIBEU
    headers_02_04: [
      {
        text: "Campi",
        align: "start",
        sortable: false,
        value: "campus",
      },
      { text: "Cidade", value: "cidade" },
      { text: "Território", value: "territorio" },
      { text: "Centro", value: "centro" },
      { text: "Curso", value: "curso" },
      { text: "Bolsas", value: "bolsas" },
    ],
    //TEATRO
    //ASSISTÊNCIA SOCIAL
    //ASSISTÊNCIA ESTUDANTIL
    headers_03: [
      {
        text: "Ações",
        align: "start",
        sortable: false,
        value: "acao",
      },
      { text: "Situação", value: "situacao" },
    ],
    //CORAL DA UESPI
    headers_04: [
      {
        text: "Mês",
        align: "start",
        sortable: false,
        value: "mes",
      },
      { text: "Ações", value: "acao" },
      { text: "Situação", value: "situacao" },
    ],
    //UNUTI
    headers_05: [
      {
        text: "Data",
        align: "start",
        sortable: false,
        value: "data",
      },
      { text: "Ações", value: "acao" },
      { text: "Situação", value: "situacao" },
    ],
    //LEVANTAMENTO DE BOLSAS
    headers_08: [
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
