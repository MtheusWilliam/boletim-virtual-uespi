<template>
  <v-container>
    <v-row style="margin-top: 3%;">
      <v-col cols="12">
        <h1>Boletim Virtual Uespi 2020</h1>
      </v-col>
      <v-dialog
        v-model="dialog"
        width="1200"
      >
        <v-card>
          <v-toolbar
            flat
            class="degrade"
            dark
          >
            <v-toolbar-title>{{dialogCity.title}}</v-toolbar-title>
          </v-toolbar>
          <component v-if="dialogCity.component" v-bind:is="dialogCity.component"></component>   
        </v-card>
      </v-dialog>
      <v-col cols="12">
          <v-img :src="require('../assets/piaui_mapa.png')" class="my-3" contain max-height="600">
            <v-row>
              <v-col cols="12" class="mt-2" style="margin-left: 90px;">
                <v-tooltip color="white" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      @click="changeDialogCity('ParnaibaDialog', 'TERRITÓRIO: PLANÍCIE LITORÂNEA', 'CAMPUS PROF. ALEXANDRE ALVES DE OLIVEIRA / PARNAÍBA')"
                      small
                      elevation="2"
                      fab
                    >
                    </v-btn>
                  </template>
                  <span style="color:  rgb(0,119,189)"><strong>Parnaíba</strong></span>
                </v-tooltip>
              </v-col>
              <v-col cols="12" class="mt-1" style="margin-left: 110px;" >
                <v-tooltip color="white" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      @click="changeDialogCity('PiripiriDialog', 'TERRITÓRIO: COCAIS', 'CAMPUS PROF. ANTÔNIO GIOVANNI ALVES DE SOUSA / PIRIPIRI')"
                      small
                      elevation="2"
                      fab
                    >
                    </v-btn>
                  </template>
                  <span style="color:  rgb(0,119,189)"><strong>Piripiri</strong></span>
                </v-tooltip>
              </v-col>
              <v-col cols="12" style="margin-left: 60px; margin-top: -30px">
                <v-tooltip color="white" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      class="ml-5"
                      v-on="on"
                      @click="changeDialogCity('BarrasDialog', 'TERRITÓRIO: COCAIS', 'CAMPUS BARRAS')"
                      small
                      elevation="2"
                      fab
                    >
                    </v-btn>
                  </template>
                  <span style="color:  rgb(0,119,189)"><strong>Barras</strong></span>
                </v-tooltip>
                <v-tooltip color="white" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="ml-2 mt-4"
                      v-bind="attrs"
                      v-on="on"
                      @click="changeDialogCity('CampoMaiorDialog', 'TERRITÓRIO: CARNAÚBAIS', 'CAMPUS HERÓIS DO JENIPAPO/CAMPO MAIOR')"
                      small
                      elevation="2"
                      fab
                    >
                    </v-btn>
                  </template>
                  <span style="color:  rgb(0,119,189)"><strong>Campo Maior</strong></span>
                </v-tooltip>
              </v-col>
              <v-col cols="12" style="margin-top: -20px;" class="ml-5">
                <v-tooltip color="white" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      small
                      elevation="2"
                      fab
                    >
                    </v-btn>
                  </template>
                  <span style="color:  rgb(0,119,189)"><strong>Teresina</strong></span>
                </v-tooltip>
              </v-col>
              <!-- TRÍADE FLORIANO-OEIRAS-PICOS -->
              <v-col cols="12" class="mt-8 ml-6">
                <v-tooltip color="white" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      @click="changeDialogCity('FlorianoDialog', 'TERRITÓRIO: VALE DOS RIOS PIAUÍ ITAUEIRA', 'CAMPUS DRA. JOSEFINA DEMES / FLORIANO')"
                      class="ml-12"
                      small
                      elevation="2"
                      fab
                    >
                    </v-btn>
                  </template>
                  <span style="color:  rgb(0,119,189)"><strong>Floriano</strong></span>
                </v-tooltip>
                <v-tooltip color="white" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      @click="changeDialogCity('OeirasDialog', 'TERRITÓRIO: VALE DO CANINDÉ', 'CAMPUS POSSIDÔNIO QUEIROZ/OEIRAS')"
                      class="ml-2 mt-6"
                      small
                      elevation="2"
                      fab
                    >
                    </v-btn>
                  </template>
                  <span style="color:  rgb(0,119,189)"><strong>Oeiras</strong></span>
                </v-tooltip>
                <v-tooltip color="white" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      @click="changeDialogCity('PicosDialog', 'TERRITÓRIO: VALE DO RIO GUARIBAS', 'CAMPUS PROF. BARROS DE ARAÚJO / PICOS')"
                      class="ml-2"
                      small
                      elevation="2"
                      fab
                    >
                    </v-btn>
                  </template>
                  <span style="color:  rgb(0,119,189)"><strong>Picos</strong></span>
                </v-tooltip>
              </v-col>
              <v-col cols="12" style="padding-right: 320px;" class="mt-10">
                <v-tooltip color="white" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      @click="changeDialogCity('UrucuiDialog', 'TERRITÓRIO: TABULEIROS DO ALTO PARNAÍBA', 'CERRADO DO ALTO DO PARNAÍBA/CAMPUS URUCUÍ')"
                      class="ml-2"
                      small
                      elevation="2"
                      fab
                    >
                    </v-btn>
                  </template>
                  <span style="color:  rgb(0,119,189)"><strong>Uruçuí</strong></span>
                </v-tooltip>
              </v-col>
              <v-col cols="12" style="padding-right: 100px; margin-top: -10px;">
                <v-tooltip color="white" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      @click="changeDialogCity('BomJesusDialog', 'TERRITÓRIO: CHAPADA DA MANGABEIRA', 'CAMPUS DOM JOSÉ DE VÁSQUEZ DIAZ/BOM JESUS')"
                      small
                      style=" margin-right: 50px;"
                      elevation="2"
                      fab
                    >
                    </v-btn>
                  </template>
                  <span style="color:  rgb(0,119,189)"><strong>Bom Jesus</strong></span>
                </v-tooltip>
                <v-tooltip color="white" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      style="margin-top: -30px"
                      v-bind="attrs"
                      v-on="on"
                      @click="changeDialogCity('SaoRaimundoNonatoDialog', 'TERRITÓRIO: SERRA DA CAPIVARA', 'CAMPUS PROF. ARISTON DIAS LIMA/SÃO RAIMUNDO NONATO')"
                      small
                      elevation="2"
                      fab
                    >
                    </v-btn>
                  </template>
                  <span style="color:  rgb(0,119,189)"><strong>São Raimundo Nonato</strong></span>
                </v-tooltip>
              </v-col>
              <v-col cols="12" style="padding-right: 300px;">
                <v-tooltip color="white" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      @click="changeDialogCity('CorrenteDialog', 'TERRITÓRIO: CHAPADA DA MANGABEIRA', 'CAMPUS DEP. JESUALDO CAVALCANTI BARROS/CORRENTE')"
                      small
                      elevation="2"
                      fab
                    >
                    </v-btn>
                  </template>
                  <span style="color:  rgb(0,119,189)"><strong>Corrente</strong></span>
                </v-tooltip>
              </v-col>
            </v-row>
          </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ParnaibaDialog from './Cities_Contents/ParnaibaDialog'
import PiripiriDialog from './Cities_Contents/PiripiriDialog'
import BarrasDialog from './Cities_Contents/BarrasDialog'
import CampoMaiorDialog from './Cities_Contents/CampoMaiorDialog'
import TeresinaDialog from './Cities_Contents/TeresinaDialog'
import FlorianoDialog from './Cities_Contents/FlorianoDialog'
import OeirasDialog from './Cities_Contents/OeirasDialog'
import PicosDialog from './Cities_Contents/PicosDialog'
import UrucuiDialog from './Cities_Contents/UrucuiDialog'
import SaoRaimundoNonatoDialog from './Cities_Contents/SaoRaimundoNonatoDialog'
import BomJesusDialog from './Cities_Contents/BomJesusDialog'
import CorrenteDialog from './Cities_Contents/CorrenteDialog'

export default {
//CIDADES
// -Parnaíba OK
// -Piripiri OK
// -Barras OK
// -Campo Maior OK
// -Teresina OK
// -Floriano OK
// -Oeiras OK
// -Picos OK
// -Uruçuí OK
// -São Raimundo Nonato OK
// -Bom Jesus OK
// -Corrente OK
  components: {
    ParnaibaDialog,
    PiripiriDialog,
    BarrasDialog,
    CampoMaiorDialog,
    TeresinaDialog,
    FlorianoDialog,
    OeirasDialog,
    PicosDialog,
    UrucuiDialog,
    SaoRaimundoNonatoDialog,
    BomJesusDialog,
    CorrenteDialog
  },
  data: () => ({
    dialog: false,
    dialogCity: {
      component: '',
      title: '',
      subtitle: ''
    },
  }),
  methods:{
    changeDialogCity(component, subtitle, title){
      this.dialogCity.component = component;
      this.dialogCity.title = title;
      this.dialogCity.subtitle = subtitle;
      this.dialog = true;
    }
  }
}
</script>

<style scoped>
  h1{
    color: white;
  }
  h3{
    color: whitesmoke;
  }
</style>
