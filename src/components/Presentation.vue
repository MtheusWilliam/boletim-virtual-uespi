<template>
  <v-container>
    <v-row style="margin-top: 15%;">
      <v-col cols="12">
        <h1>Boletim Virtual Uespi 2020</h1>
      </v-col>
      <v-col cols="12">
          <v-img @click="showContent" :src="require('../assets/logo_uespi.png')" class="my-3" contain max-height="300" />
      </v-col>
      <v-col cols="12">
        <h3>Clique na Logo para Interagir</h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    changeContent: {}
  },
  methods:{
    showContent(){
      console.log('tizil')
      this.changeContent();
    }
  }
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
