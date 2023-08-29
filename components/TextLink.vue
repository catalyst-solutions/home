<template>
  <div class="text-xl font-normal link" :style="css">
    <NuxtLink style="min-width: 100%" :to="to">
      <slot />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      css: "",
    };
  },
  props: {
    to: String,

    mode: {
      type: String,
      default: "light",
    },
  },
  mounted() {
    if (this.mode == "light") {
      this.css = "--text-color: black";
    } else {
      this.css = "--text-color: white";
    }
  },
};
</script>

<style>
.link {
  position: relative;
  width: max-content;
  color: var(--text-color);
}
.link::before {
  content: "";
  position: absolute;
  display: block;
  width: 0;
  height: 2px;
  bottom: -10px;
  left: 0;
  background-color: var(--text-color);

  transition: 0.3s ease;
}

.link:hover::before {
  width: 100%;
}
</style>
