import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import store from './stores/store';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import '@mdi/font/css/materialdesignicons.css'
import Charts from 'fusioncharts/fusioncharts.charts'

Vue.config.productionTip = false
Vue.use(VueFusionCharts, FusionCharts, Charts);

new Vue({
  vuetify,
  store: store,
  render: h => h(App),
}).$mount('#app')

