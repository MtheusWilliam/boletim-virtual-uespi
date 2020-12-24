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
      <v-tab>
        <v-icon left> mdi-information </v-icon>
        <span class="leftSpan">Serviço de Psicologia</span>
        <v-spacer></v-spacer>
      </v-tab>
      <v-tab>
        <v-icon left>  mdi-information </v-icon>
        <span class="leftSpan">Bolsa Trabalho</span>
        <v-spacer></v-spacer>
      </v-tab>
      <v-tab>
        <v-icon left>  mdi-information </v-icon>
        <span class="leftSpan">Auxílio Moradia</span>
        <v-spacer></v-spacer>
      </v-tab>
      <v-tab>
        <v-icon left>  mdi-information </v-icon>
        <span class="leftSpan">Estágio Não Obrigatório</span>
        <v-spacer></v-spacer>
      </v-tab>
      <v-tab>
        <v-icon left>  mdi-information </v-icon>
        <span class="leftSpan">Apoio Pedagógico</span>
        <v-spacer></v-spacer>
      </v-tab>
      <v-tab>
        <v-icon left>  mdi-information </v-icon>
        <span class="leftSpan">Auxílio Alimentação</span>
        <v-spacer></v-spacer>
      </v-tab>
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
      <!-- SERVIÇO DE PSICOLOGIA -->
      <v-tab-item>
        <v-card flat>
          <v-data-table
            :headers="headers_07"
            :items="cityDialogContent.content.servicoDePsicologia"
            :items-per-page="5"
            class="elevation-0"
          ></v-data-table>
          <v-row class="pl-6 pr-4 pt-2">
            <span style="font-size: 0.7em; text-align: left;"><strong>*Campus Atendidos:</strong>
                    Campus Poeta Torquato Neto – Teresina <strong>|</strong>  
                    Campus Clóvis Moura – Teresina <strong>|</strong>  
                    Campus Alexandre Alves de Oliveira – Parnaíba <strong>|</strong> 
                    Campus Dra. Josefina Demes – Floriano <strong>|</strong> 
                    Campus Heróis do Jenipapo – Campo Maior <strong>|</strong> 
                    Campus de Uruçuí – Uruçuí <strong>|</strong> 
                    Campus Prof. Possidônio Queiroz – Oeiras <strong>|</strong> 
                    Campus Prof. Antônio Giovanni Alves de Sousa – Piripiri <strong>|</strong> 
                    Campus Rio Maratoan - Barras <strong>|</strong> 
            </span>
            <v-spacer></v-spacer>
          </v-row>
          <v-divider class="mt-4 mb-6"></v-divider>
          <span><strong>RELATÓRIO DE ATENDIMENTOS – PSICOTERAPIA E ACONSELHAMENTO PSICOLÓGICO</strong></span>
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="8">
              <v-carousel
                class="mb-8"
                height="360"
                cycle
                hide-delimiters
                show-arrows-on-hover
              >
                <v-carousel-item
                  v-for="(slide, i) in slides"
                  :key="i"
                  
                >
                  <v-row style="color: black">
                    <v-spacer></v-spacer>
                    {{slide.title_01}} <br>
                    {{slide.title_02}}
                    <v-spacer></v-spacer>
                  </v-row>
                  <v-row>
                    <v-img class="mt-2 ml-12" :src="slide.src" max-width="500"></v-img>
                  </v-row>
                </v-carousel-item>
            </v-carousel>
            </v-col>
            <v-spacer></v-spacer>
            <span class="ml-6 mr-4 mb-8" style="font-size: 0.7em; text-align: left;"><strong>OBS.:</strong>Comunidade Externa se refere a estudantes de outras instituições e comunidade geral que solicitaram atendimento e a equipe do Serviço de Psicologia disponibilizou contatos da Rede de Suporte Psicológico do Piauí que estão oferecendo atendimentos voluntários à comunidade em geral.
            Além destes, alguns contatos não disponibilizaram os dados solicitados para que fosse iniciado atendimento ou envio de informações pela equipe. 
            </span>
          </v-row>
        </v-card>
      </v-tab-item>
      <!-- <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="myDataSource">
    </fusioncharts> -->

      <!-- LEVANTAMENTO DE BOLSAS -->
      <!-- BOLSA TRABALHO -->
      <v-tab-item>
        <v-card flat>
            <v-simple-table class="mb-4">
              <template v-slot:default>
                <thead style="background-color: #ededed;">
                  <tr>
                    <th
                      class="text-left"
                      v-for="(header, index) in headers_08"
                      :key="index"
                    >
                      {{ header.text }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <!-- CAPITAL -->
                  <v-row class="pl-7 pt-2 pb-2">
                    <span><strong>CAPITAL</strong></span>
                    <v-spacer></v-spacer>
                  </v-row>
                  <tr
                    v-for="(item, index) in cityDialogContent.content
                      .levantamentoBolsas.bolsaTrabalho.capital"
                    :key="index"
                  >
                    <td class="text-left">{{ item.campus }}</td>
                    <td class="text-left">{{ item.contemplados }}</td>
                  </tr>

                  <!-- DEMAIS CAMPI -->
                  <v-row class="pl-7 pt-2 pb-2">
                    <span><strong>DEMAIS CAMPI</strong></span>
                    <v-spacer></v-spacer>
                  </v-row>
                  <tr
                    v-for="(item, index) in cityDialogContent.content
                      .levantamentoBolsas.bolsaTrabalho.demaisCampi"
                    :key="index"
                  >
                    <td class="text-left">{{ item.campus }}</td>
                    <td class="text-left">{{ item.contemplados }}</td>
                  </tr>

                  <!-- GERAL -->
                  <v-row class="pl-7 pt-2 pb-2">
                    <span><strong>GERAL</strong></span>
                    <v-spacer></v-spacer>
                  </v-row>
                  <tr
                    v-for="(item, index) in cityDialogContent.content
                      .levantamentoBolsas.bolsaTrabalho.geral"
                    :key="index"
                  >
                    <td class="text-left">{{ item.campus }}</td>
                    <td class="text-left">{{ item.contemplados }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
        </v-card>
      </v-tab-item>

      <!-- AUXÍLIO MORADIA -->
      <v-tab-item>
        <v-card flat>
            <v-simple-table class="mb-4">
              <template v-slot:default>
                <thead style="background-color: #ededed;">
                  <tr>
                    <th
                      class="text-left"
                      v-for="(header, index) in headers_08"
                      :key="index"
                    >
                      {{ header.text }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <!-- CAPITAL -->
                  <v-row class="pl-7 pt-2 pb-2">
                    <span><strong>CAPITAL</strong></span>
                    <v-spacer></v-spacer>
                  </v-row>
                  <tr
                    v-for="(item, index) in cityDialogContent.content
                      .levantamentoBolsas.auxilioMoradia.capital"
                    :key="index"
                  >
                    <td class="text-left">{{ item.campus }}</td>
                    <td class="text-left">{{ item.contemplados }}</td>
                  </tr>

                  <!-- DEMAIS CAMPI -->
                  <v-row class="pl-7 pt-2 pb-2">
                    <span><strong>DEMAIS CAMPI</strong></span>
                    <v-spacer></v-spacer>
                  </v-row>
                  <tr
                    v-for="(item, index) in cityDialogContent.content
                      .levantamentoBolsas.auxilioMoradia.demaisCampi"
                    :key="index"
                  >
                    <td class="text-left">{{ item.campus }}</td>
                    <td class="text-left">{{ item.contemplados }}</td>
                  </tr>

                  <!-- GERAL -->
                  <v-row class="pl-7 pt-2 pb-2">
                    <span><strong>GERAL</strong></span>
                    <v-spacer></v-spacer>
                  </v-row>
                  <tr
                    v-for="(item, index) in cityDialogContent.content
                      .levantamentoBolsas.auxilioMoradia.geral"
                    :key="index"
                  >
                    <td class="text-left">{{ item.campus }}</td>
                    <td class="text-left">{{ item.contemplados }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
        </v-card>
      </v-tab-item>

      <!-- ESTÁGIO NÃO OBRIGATÓRIO -->
      <v-tab-item>
        <v-card flat>
            <v-simple-table class="mb-4">
              <template v-slot:default>
                <thead style="background-color: #ededed;">
                  <tr>
                    <th
                      class="text-left"
                      v-for="(header, index) in headers_08"
                      :key="index"
                    >
                      {{ header.text }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <!-- CAPITAL -->
                  <v-row class="pl-7 pt-2 pb-2">
                    <span><strong>CAPITAL</strong></span>
                    <v-spacer></v-spacer>
                  </v-row>
                  <tr
                    v-for="(item, index) in cityDialogContent.content
                      .levantamentoBolsas.estagioNaoObrigatorio.capital"
                    :key="index"
                  >
                    <td class="text-left">{{ item.campus }}</td>
                    <td class="text-left">{{ item.contemplados }}</td>
                  </tr>

                  <!-- DEMAIS CAMPI -->
                  <v-row class="pl-7 pt-2 pb-2">
                    <span><strong>DEMAIS CAMPI</strong></span>
                    <v-spacer></v-spacer>
                  </v-row>
                  <tr
                    v-for="(item, index) in cityDialogContent.content
                      .levantamentoBolsas.estagioNaoObrigatorio.demaisCampi"
                    :key="index"
                  >
                    <td class="text-left">{{ item.campus }}</td>
                    <td class="text-left">{{ item.contemplados }}</td>
                  </tr>

                  <!-- GERAL -->
                  <v-row class="pl-7 pt-2 pb-2">
                    <span><strong>GERAL</strong></span>
                    <v-spacer></v-spacer>
                  </v-row>
                  <tr
                    v-for="(item, index) in cityDialogContent.content
                      .levantamentoBolsas.estagioNaoObrigatorio.geral"
                    :key="index"
                  >
                    <td class="text-left">{{ item.campus }}</td>
                    <td class="text-left">{{ item.contemplados }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
        </v-card>
      </v-tab-item>

      <!-- APOIO PEDAGÓGICO -->
      <v-tab-item>
        <v-card flat>
            <v-simple-table class="mb-4">
              <template v-slot:default>
                <thead style="background-color: #ededed;">
                  <tr>
                    <th
                      class="text-left"
                      v-for="(header, index) in headers_11"
                      :key="index"
                    >
                      {{ header.text }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <!-- CAPITAL -->
                  <v-row class="pl-7 pt-2 pb-2">
                    <span><strong>CAPITAL</strong></span>
                    <v-spacer></v-spacer>
                  </v-row>
                  <tr
                    v-for="(item, index) in cityDialogContent.content
                      .levantamentoBolsas.apoioPedagogico"
                    :key="index"
                  >
                    <td class="text-left">{{ item.cidade }}</td>
                    <td class="text-left">{{ item.contemplados }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
        </v-card>
      </v-tab-item>

      <!-- AUXÍLIO ALIMENTAÇÃO -->
       <!-- ESTÁGIO NÃO OBRIGATÓRIO -->
      <v-tab-item>
        <v-card flat>
            <v-simple-table class="mb-4">
              <template v-slot:default>
                <thead style="background-color: #ededed;">
                  <tr>
                    <th
                      class="text-left"
                      v-for="(header, index) in headers_08"
                      :key="index"
                    >
                      {{ header.text }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in cityDialogContent.content
                      .levantamentoBolsas.auxilioAlimentacao"
                    :key="index"
                  >
                    <td class="text-left">{{ item.campus }}</td>
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
        type: 'pie2d',
        width: '500',
        height: '300',
        dataFormat: 'json',
        myDataSource: {
          chart: {
              caption: "Recommended Portfolio Split",
              subCaption : "For a net-worth of $1M",
              showValues:"1",
              showPercentInTooltip : "0",
              numberPrefix : "$",
              enableMultiSlicing:"1",
              theme: "fusion"
          },
          data: [{
              label: "Equity",
              value: "300000"
          }, {
              label: "Debt",
              value: "230000"
          }, {
              label: "Bullion",
              value: "180000"
          }, {
              label: "Real-estate",
              value: "270000"
          }, {
              label: "Insurance",
              value: "20000"
          }]
      },
    //AÇÕES EXTENSIONISTAS
    //RELATORIO DE AÇÕES EXTENSIONISTAS
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
    //SERVIÇO DE PSICOLOGIA
    headers_07: [
      {
        text: "Ações",
        align: "start",
        sortable: false,
        value: "acoes",
      },
      { text: "Situação", sortable: false, value: "situacao" },
    ],
    //LEVANTAMENTO DE BOLSAS
    //BOLSA TRABALHO
    headers_08: [
      {
        text: "Campus",
        align: "start",
        sortable: false,
        value: "campus",
      },
      { text: "Contemplados", value: "contemplados" },
    ],
    //APOIO PEDAGÓGICO
    headers_11: [
      {
        text: "Cidade",
        align: "start",
        sortable: false,
        value: "cidade",
      },
      { text: "Contemplados", value: "contemplados" },
    ],
    //PSICOLOGIA RELATÓRIOS
    slides: [
      {
        title_01: 'Gráfico 1 – Atendimentos totais (Psicoterapia e Aconselhamento Psicológico)',
        title_02: 'JULHO– segunda-feira a sexta-feira; 9h – 15h',
        src: require('../assets/graficos_psicologia/grafico_01.png')
      },
      {
        title_01: 'Gráfico 2 – Aconselhamento Psicológico (Julho/2020)',
        title_02: 'segunda-feira a sexta-feira; 9h – 15h',
        src: require('../assets/graficos_psicologia/grafico_02.png')
      }
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
