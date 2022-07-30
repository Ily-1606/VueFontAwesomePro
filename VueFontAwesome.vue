<template>
  <svg xmlns="http://www.w3.org/2000/svg" :viewBox="iconData.size">
    <path
      v-for="(path, index) in iconData.path"
      :d="path.d"
      :class="[path.class, iconData.type, `fa-${iconData.name}`]"
      :style="[path.class ? 'opacity:.4' : '']"
      :key="index"
    />
  </svg>
</template>
<script>
import { importMap } from "./import.js";
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      regexIcon: /^fa-(.*) fa-(.*)$/,
      iconLoaded: {},
    };
  },
  computed: {
    isValid() {
      return this.regexIcon.test(this.icon);
    },
    name() {
      if (!this.isValid) {
        return;
      }
      return "fa-" + this.icon.match(this.regexIcon)[2];
    },
    type() {
      if (!this.isValid) {
        return;
      }
      return "fa-" + this.icon.match(this.regexIcon)[1];
    },
    iconData() {
      if (this.name && this.type) {
        if (importMap[this.type]) {
          const type = importMap[this.type];
          const iconName = this.name.replace(/-./g, (x) => x[1].toUpperCase());
          if (this.icons[type][iconName]) {
            return this.icons[type][iconName];
          }
          console.warn(`Not found icon ${this.name} - ${this.type}`);
        } else {
          console.warn(`Not found type: ${this.type}`);
        }
      }
      return false;
    },
    styleHtml() {
      return `<style>${this.iconData.style}</style>`;
    },
  },
};
</script>
