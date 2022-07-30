<template>
  <div @click="handlerTest()">
    <VueFontAwesome :icon="icon" ref="test" class="icon" />
    <div class="fa-secondary">gagaa</div>
  </div>
</template>
<style>
.icon {
  width: 20px;
}
</style>
<script>
export default {
  data() {
    return {
      icons: [
        "fa-solid fa-0",
        "fa-solid fa-1",
        "fa-regular fa-1",
        "fa-regular fa-2",
        "fa-regular fa-3",
        "fa-light fa-1",
        "fa-light fa-2",
        "fa-light fa-3",
        "fa-thin fa-1",
        "fa-thin fa-2",
        "fa-thin fa-3",
        "fa-duotone fa-1",
        "fa-duotone fa-2",
        "fa-duotone fa-3",
      ],
      index: 0,
    };
  },
  computed: {
    icon() {
      return this.icons[this.index];
    },
  },
  methods: {
    handlerTest() {
      this.index++;
    },
  },
};
</script>
