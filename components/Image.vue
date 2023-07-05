<template>
  <div class="image" :style="css">
    <img class="w-full" :src="src" :alt="alt" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      css: "",
    };
  },
  props: {
    alt: {
      type: String,
      default: "An embedded image",
    },

    gray: {
      type: Boolean,
      default: false,
    },

    src: String,
  },
  mounted() {
    if (this.gray) {
      this.css = "--img-bg: #f1f5f9";
    } else {
      this.css = "--img-bg: #fff";
    }
    let elements = document.querySelectorAll(".image");

    elements.forEach((element) => {
      let observer = new IntersectionObserver((entries) => {
        element.classList.toggle("animation", entries[0].isIntersecting);
      });

      observer.observe(element);
    });
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
  background: var(--img-bg);
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
