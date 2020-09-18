import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueRouter from 'vue-router';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Todos },
  { path: '/add-todo', component: AddTodo }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
