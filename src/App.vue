<template>
  <v-app id="app">
    <v-main>
      <Presentation :changeContent="changeContent" v-if="presentationShow"/>
      <Content v-else/>
    </v-main>
  </v-app>
</template>

<script>
import Presentation from './components/Presentation.vue'
import Content from './components/Content.vue'
//#0077BD
//#019CFF

export default {
  name: 'App',
  components: {
    Presentation,
    Content
  },
  data: () => ({
    presentationShow: true
  }),
  methods: {
    changeContent(){
      this.presentationShow = false
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
  background: rgb(0,119,189);
  background: linear-gradient(147deg, rgba(0,119,189,1) 13%, rgba(1,156,255,1) 100%);
}
.degrade{
  background: rgb(0,119,189);
  background: linear-gradient(147deg, rgba(0,119,189,1) 13%, rgba(1,156,255,1) 100%);
}
</style>
