import { createApp } from "vue";
import App from "./App.vue";
import { VueFontAwesome, Config as FaConfig } from "../index.js";
import { fa0, fa1 } from "@ily1606/pro-solid-svg-fontawesome";
import {
  fa1 as reFa1,
  fa2 as reFa2,
  fa3 as reFa3,
} from "@ily1606/pro-regular-svg-fontawesome";

import {
  fa1 as falFa1,
  fa2 as falFa2,
  fa3 as falFa3,
} from "@ily1606/pro-light-svg-fontawesome";

import {
  fa1 as fatFa1,
  fa2 as fatFa2,
  fa3 as fatFa3,
} from "@ily1606/pro-thin-svg-fontawesome";

import {
  fa1 as fadFa1,
  fa2 as fadFa2,
  fa3 as fadFa3,
} from "@ily1606/pro-duotone-svg-fontawesome";

const app = createApp(App);
app.use(FaConfig, {
  fa0,
  fa1,
  reFa1,
  reFa2,
  reFa3,
  falFa1,
  falFa2,
  falFa3,
  fatFa1,
  fatFa2,
  fatFa3,
  fadFa1,
  fadFa2,
  fadFa3,
});
app.component("VueFontAwesome", VueFontAwesome);
app.mount("#app");
