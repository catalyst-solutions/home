<template>
  <div class="text-8xl font-semibold leading-tight" v-if="size == 'title'">
    <slot />
  </div>

  <div
    class="text-8xl font-semibold text-slate-400 leading-tight"
    v-if="size == 'title-gray'"
  >
    <slot />
  </div>

  <div class="text-6xl font-semibold leading-tight" v-if="size == 'subtitle'">
    <slot />
  </div>

  <div
    class="text-6xl font-semibold text-slate-400 leading-tight"
    v-if="size == 'subtitle-gray'"
  >
    <slot />
  </div>

  <div class="text-2xl font-bold" v-if="size == 'heading'">
    <slot />
  </div>

  <div class="text-xl font-normal leading-normal" v-if="size == 'default'">
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
