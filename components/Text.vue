<template>
  <div class="text-8xl font-black" v-if="size == 'xl-title'">
    <slot />
  </div>
  <div class="text-6xl font-normal" v-if="size == 'title'">
    <slot />
  </div>
  <div class="text-6xl font-normal text-slate-500" v-if="size == 'subtitle'">
    <slot />
  </div>

  <div class="text-2xl font-normal" v-if="size == 'default'">
    <slot />
  </div>

  <div class="text-xl font-normal" v-if="size == 'small'">
    <slot />
  </div>

  <div class="text-2xl font-normal text-slate-500" v-if="size == 'dimmed'">
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
