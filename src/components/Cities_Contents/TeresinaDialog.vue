<template>
  <v-container>
    <v-row style="margin-top: 7%;">
      <v-col cols="12">
          <v-img :src="require('../assets/piaui_mapa.png')" class="my-3" contain max-height="600">
            <v-row>
              <v-col cols="12" class="mt-2" style="margin-left: 90px;">
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
                  <span style="color:  rgb(0,119,189)"><strong>Parnaíba</strong></span>
                </v-tooltip>
              </v-col>
              <v-col cols="12" class="mt-1" style="margin-left: 110px;" >
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
                  <span style="color:  rgb(0,119,189)"><strong>Piripiri</strong></span>
                </v-tooltip>
              </v-col>
              <v-col cols="12" style="margin-left: 60px; margin-top: -30px">
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
export default {
//cidades
// -Parnaíba OK
// -Piripiri OK
// -Campo Maior OK
// -Teresina OK
// -Floriano OK
// -Oeiras OK
// -Picos OK
// -Uruçuí OK
// -São Raimundo Nonato OK
// -Bom Jesus OK
// -Corrente OK
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    color: white;
  }
  h3{
    color: whitesmoke;
  }
</style>
