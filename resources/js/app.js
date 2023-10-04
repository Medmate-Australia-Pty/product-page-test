require("./bootstrap");

import { createApp } from "vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const app = createApp({});

app.use(router);

app.mount("#app");
