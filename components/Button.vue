<template>
  <button
    class="text-xl bg-white p-8 py-4 text-black hover:outline-black hover:outline-2 outline-1 outline outline-slate-300 hover:outline-black"
    v-if="type == 'default'"
  >
    <slot />
  </button>
  <button
    class="text-xl bg-black p-8 py-4 text-white hover:bg-slate-800"
    v-if="type == 'black'"
  >
    <slot />
  </button>

  <button
    class="text-xl bg-lime-300 hover:bg-lime-400 p-8 py-4 text-black"
    v-if="type == 'primary'"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "default",
    },
  },
};
</script>
