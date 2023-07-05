<template>
  <div class="text-xl font-normal link" :style="css">
    <NuxtLink :to="to">
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
    color: {
      type: String,
      default: "black",
    },
  },
  mounted() {
    this.css = "--text-color: " + this.color;
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
