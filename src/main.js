import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import Registration from './components/Registration';
import Todos from './components/Todos';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuelidate);

const routes = [
  { path: '/', component: Todos },
  { path: '/registration', component: Registration }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
