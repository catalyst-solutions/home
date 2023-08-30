<template>
  <div
    class="border text rounded-full w-max h-max px-6 py-2 w-max"
    :class="[
      mode == 'light'
        ? 'text-black border-gray-300'
        : 'text-white border-gray-300',
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: "light",
    },
  },
};
</script>
