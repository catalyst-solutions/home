<template>
  <div class="image">
    <img class="w-full" :src="src" :alt="alt" />
  </div>
</template>

<script>
export default {
  props: {
    alt: {
      type: String,
      default: "An embedded image",
    },
    src: String,
  },
  mounted() {
    let element = document.querySelector(".image");

    let observer = new IntersectionObserver((entries) => {
      element.classList.toggle("animation", entries[0].isIntersecting);
    });

    observer.observe(element);
  },
};
</script>

<style>
.image.animation {
  position: relative;
}
.image.animation::before {
  content: "";
  position: absolute;
  background: white;
  height: 100%;
  width: 0;
  top: 0;
  right: 0;
  animation: image-animation 0.7s ease;
}

@keyframes image-animation {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}
</style>
