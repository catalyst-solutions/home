<template>
  <div
    :lang="lang"
    class="text-load md:text-7xl text-4xl md:leading-tight leading-tight"
    :class="[mode == 'light' ? 'text-gray-800' : 'text-gray-200']"
    v-if="size == 'title'"
  >
    <slot />
  </div>

  <div
    :lang="lang"
    class="text-load md:text-7xl text-4xl md:leading-tight leading-tight"
    v-if="size == 'title-gray'"
    :class="[mode == 'light' ? 'text-neutral-400' : 'text-gray-400']"
  >
    <slot />
  </div>

  <div
    :lang="lang"
    class="text-load md:text-3xl text-2xl md:leading-normal"
    :class="[mode == 'light' ? 'text-gray-800' : 'text-gray-200']"
    v-if="size == 'heading'"
  >
    <slot />
  </div>

  <div
    :lang="lang"
    class="text-load md:text-2xl text md:leading-loose leading-loose"
    :class="[mode == 'light' ? 'text-gray-800' : 'text-gray-200']"
    v-if="size == 'default'"
  >
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: "en",
    };
  },
  mounted() {
    if (localStorage.getItem("lang")) {
      this.lang = localStorage.getItem("lang");
    } else {
      this.lang = "de";
    }
  },
  props: {
    size: {
      type: String,
      default: "default",
    },
    mode: {
      type: String,
      default: "light",
    },
  },
};
</script>

<style>
.text-load {
  animation: text-load 1s ease;
  max-width: calc(100% - 40px);
  text-wrap: balance;
  hyphens: auto;
  word-break: break-word;
}

@keyframes text-load {
  from {
    transform: translate(0, 10px);
    opacity: 0;
  }
  to {
    transform: translate(0, 0);
    opacity: 1;
  }
}
</style>
