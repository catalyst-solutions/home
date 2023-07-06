<template>
  <NuxtLink :to="to" class="relative overflow-hidden card">
    <img :src="src" alt="" />
    <div class="flex flex-col p-6 gap-12 absolute bottom-0 card-text">
      <div class="text-white text-2xl opacity-70">{{ project }}</div>
      <div class="text-white text-4xl">{{ title }}</div>
      <div class="text-white text-2xl">{{ info }}</div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    src: String,
    project: String,
    to: {
      type: String,
      default: "/",
    },
    title: {
      type: String,
      default: "Title",
    },
    info: {
      type: String,
      default: "Title",
    },
  },
};
</script>

<style>
.card-text {
  bottom: -80px;
}
.card:hover .card-text {
  bottom: 0;
}
</style>
