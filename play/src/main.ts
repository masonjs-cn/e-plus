import { createApp } from "vue";
import App from "./App.vue";
import "@e-plus/theme-chalk/src/index.scss";
import EIcon from "@e-plus/components/icon";

const app = createApp(App);
app.use(EIcon);
app.mount("#app");
