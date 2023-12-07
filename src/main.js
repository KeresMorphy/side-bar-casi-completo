import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';  // Corregir la importación
import App from './App.vue';
import deportes from './components/DeportesPage.vue'
import HelloWorldVue from './components/HelloWorld.vue'
import nike from './components/NikePage.vue'
import login from'./components/LoginPage.vue'
import register from './components/RegisterPage.vue'
import pop from './components/PopUpPage.vue'

// Componentes

// Definir rutas -- configuración
const routes = [
  {
    path: '/deportes',
    component: deportes,
  },
  {
    path: '/home',
    component: HelloWorldVue,
  },
  {
    path: '/nike',
    component: nike,
  },
  {
    path: '/login',
    component: login,
  },
  {
    path: '/register',
    component: register,
  },
  {
    path: '/pop',
    component: pop,
  }
];

// Crear objeto rutas de vue router -- objeto vue router
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// Instancia de vue
const app = createApp(App);

app.use(router);

app.mount('#app');
