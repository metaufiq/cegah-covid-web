import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import numeral from 'numeral';
import numFormat from 'vue-filter-number-format';

Vue.config.productionTip = false
Vue.filter('numFormat', numFormat(numeral));
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
