import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/normalize.css';
import './assets/css/bootstrap.min.css';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-blue/theme.css';

createApp(App).mount('#app')
App.use(PrimeVue);
