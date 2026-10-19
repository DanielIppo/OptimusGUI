import { createApp } from 'vue';
import App from './App.vue';
import OptimusGUI from '../src';
import '../src/theme/index.css';

const app = createApp(App);
app.use(OptimusGUI);
app.mount('#app');
