import VueFontAwesome from "./VueFontAwesome.vue";
import { importMap } from "./import.js";
const cameCase = (s) => s.replace(/-./g, (x) => x[1].toUpperCase());

const Config = {
  install(app, icons) {
    app.config.globalProperties.icons = {};
    Object.values(importMap).forEach((type) => {
      app.config.globalProperties.icons[type] = {};
    });
    for (const key in icons) {
      const icon = icons[key];
      if (Object.hasOwnProperty.call(icon, "type")) {
        const name = "fa-" + icon.name;
        const cameCaseName = cameCase(name);
        app.config.globalProperties.icons[icon.type][cameCaseName] = icon;
      } else {
        app.config.globalProperties.icons = icons;
        break;
      }
    }
  },
};
export { Config, importMap, VueFontAwesome };
