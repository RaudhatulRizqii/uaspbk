import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar } from "quasar";

import "@quasar/extras/material-icons/material-icons.css";

import "quasar/src/css/index.sass";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

app.use(Quasar, {
  plugins: {}, 
});

app.use(pinia);
app.use(router);

// Mount the app
app.mount("#app");
