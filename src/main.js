import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';

import Canvas from './helpers/Canvas.mixin';

Vue.config.productionTip = false;
const data = {
  showEdit: false,
};

new Vue({
  render: (h) => h(App),
  mixins: [
    Canvas('canvas'),
  ],
  data() {
    return data;
  },
}).$mount('#app');
