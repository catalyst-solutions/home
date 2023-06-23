<template>
  <button
    class="text-xl bg-white p-8 py-4 text-black hover:bg-slate-100"
    :class="[active ? 'bg-slate-200' : '']"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
