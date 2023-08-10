<template>
  <div
    class="bg-slate-100 animate__animated animate__fadeOut animate__infinite relative block"
    :style="'width:' + width + ';height:' + height"
  ></div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100%",
    },
  },
};
</script>
