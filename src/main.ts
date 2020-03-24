/* eslint-disable @typescript-eslint/ban-ts-comment */
import Vue, { CreateElement, VNode } from 'vue';
import App from './App.vue';
import WrapperLib from './index';

Vue.use(WrapperLib);

Vue.config.productionTip = false;

new Vue({
  render: (h: CreateElement): VNode => h(App),
}).$mount('#app');
