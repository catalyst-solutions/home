<template>
  <span
    :style="'font-size:' + fontSize + '!important; color:' + color"
    class="icon material-symbols-outlined"
    >{{ icon }}</span
  >
</template>
<script>
import "material-symbols";
export default {
  props: {
    icon: {
      type: String,
      default: "face",
    },

    fontSize: {
      type: String,
      default: "20px",
    },

    color: String,
  },
};
</script>

<style scoped>
.icon {
  height: max-content;
  margin: auto 0;
  font-size: calc(var(--text) + 5px) !important;
}
</style>
