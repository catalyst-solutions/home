<template>
  <div
    class="text-load md:text-6xl text-4xl md:leading-tight leading-tight"
    v-if="size == 'title'"
  >
    <slot />
  </div>

  <div
    class="text-load md:text-6xl text-4xl md:leading-tight leading-tight text-neutral-400"
    v-if="size == 'title-gray'"
  >
    <slot />
  </div>

  <div
    class="text-load md:text-2xl text-xl font-medium md:leading-normal"
    v-if="size == 'heading'"
  >
    <slot />
  </div>

  <div
    class="text-load md:text-xl text font-medium md:leading-loose leading-loose"
    v-if="size == 'default'"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "default",
    },
  },
};
</script>

<style>
.text-load {
  animation: text-load 1s ease;
  max-width: calc(100% - 40px);
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-word;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
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
