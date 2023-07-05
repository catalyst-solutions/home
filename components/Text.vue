<template>
  <div
    class="md:text-8xl font-medium md:leading-tight text-6xl"
    v-if="size == 'title'"
  >
    <slot />
  </div>

  <div
    class="md:text-8xl text-6xl font-medium text-slate-400 md:leading-tight"
    v-if="size == 'title-gray'"
  >
    <slot />
  </div>

  <div
    class="md:text-6xl text-4xl font-medium md:leading-normal"
    v-if="size == 'subtitle'"
  >
    <slot />
  </div>

  <div
    class="md:text-6xl text-4xl font-medium text-slate-400 md:leading-normal"
    v-if="size == 'subtitle-gray'"
  >
    <slot />
  </div>

  <div
    class="md:text-2xl text-xl font-medium md:leading-normal"
    v-if="size == 'heading'"
  >
    <slot />
  </div>

  <div
    class="md:text-xl text font-medium md:leading-normal"
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
