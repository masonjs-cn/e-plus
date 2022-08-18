import { createApp } from "vue";
import App from "./App.vue";
import EIcon from "@e-plus/components/icon";
const app = createApp(App);
app.use(EIcon);
app.mount("#app");
