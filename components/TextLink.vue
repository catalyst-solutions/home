<template>
  <div class="text-xl font-normal text-black link">
    <NuxtLink :to="to">
      <slot />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    to: String,
  },
};
</script>

<style>
.link {
  position: relative;
  width: max-content;
}
.link::before {
  content: "";
  position: absolute;
  display: block;
  width: 0;
  height: 2px;
  bottom: -10px;
  left: 0;
  background-color: #000;

  transition: 0.3s ease;
}

.link:hover::before {
  width: 100%;
}
</style>
