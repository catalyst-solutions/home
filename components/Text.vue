<template>
  <div
    class="md:text-8xl font-medium leading-tight text-6xl"
    v-if="size == 'title'"
  >
    <slot />
  </div>

  <div
    class="md:text-8xl text-6xl font-medium text-slate-400 leading-tight"
    v-if="size == 'title-gray'"
  >
    <slot />
  </div>

  <div
    class="md:text-6xl text-4xl font-medium leading-tight"
    v-if="size == 'subtitle'"
  >
    <slot />
  </div>

  <div
    class="md:text-6xl text-4xl font-medium text-slate-400 leading-tight"
    v-if="size == 'subtitle-gray'"
  >
    <slot />
  </div>

  <div class="md:text-2xl text-xl font-medium" v-if="size == 'heading'">
    <slot />
  </div>

  <div
    class="md:text-xl text font-medium leading-medium"
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
