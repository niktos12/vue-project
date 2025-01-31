import "./assets/main.scss";

import { createApp } from "vue";
import Header from "./components/Header.vue";
import App from "./App.vue";
import Presentation from "./components/Presentation.vue";
import Advantages from "./components/Advantages.vue";
import WhyTG from "./components/WhyTG.vue";
import HowItWorks from "./components/HowItWorks.vue";
import Footer from "./components/Footer.vue";
import Experts from "./components/Experts.vue";
const app = createApp(App);
app
  .component("Header", Header)
  .component("Presentation", Presentation)
  .component("Advantages", Advantages)
  .component("WhyTg", WhyTG)
  .component("Experts", Experts)
  .component("HowItWorks", HowItWorks)
  .component("Footer", Footer);
app.mount("#app");
