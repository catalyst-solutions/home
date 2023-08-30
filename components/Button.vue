<template>
  <button
    class="rounded-full text-xl p-8 py-4 outline"
    @click="$emit('click')"
    v-if="type == 'default'"
    :class="[
      mode == 'light'
        ? 'bg-white text-black hover:outline-black'
        : 'bg-black text-white border-white ',
    ]"
  >
    <slot />
  </button>

  <button
    class="rounded-full text-xl p-8 py-4"
    @click="$emit('click')"
    v-if="type == 'primary'"
    :class="[
      mode == 'light'
        ? 'bg-purple-300 hover:bg-purple-400 text-black '
        : 'bg-purple-300 hover:bg-purple-400 text-black',
    ]"
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
    mode: {
      type: String,
      default: "light",
    },
  },
};
</script>
