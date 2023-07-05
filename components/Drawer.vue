<template>
  <div @click="open = !open">
    <slot name="trigger"></slot>
  </div>

  <div
    v-if="open"
    @click="open = false"
    class="absolute bottom-0 left-0 w-screen h-screen bg-black z-50 opacity-30"
  />
  <div
    v-if="open"
    class="absolute bottom-0 left-0 w-screen bg-white z-50 py-12"
  >
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return { open: false };
  },
};
</script>
