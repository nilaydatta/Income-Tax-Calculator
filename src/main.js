import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/normalize.css';
import './assets/css/bootstrap.min.css';
import './assets/css/styles.css';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-blue/theme.css';
import router from './router';

const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.mount('#app');
