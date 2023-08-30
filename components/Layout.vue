<template>
  <div
    class="z-10 relative min-h-screen text-black max-w-screen overflow-x-hidden"
    :class="[mode == 'light' ? 'bg-white' : 'bg-black']"
  >
    <div class="flex">
      <div
        :class="[mode == 'light' ? 'bg-purple-300' : 'bg-purple-800']"
        class="blur-3xl absolute h-60 w-1/3 rounded-full animate__animated animate__fadeIn animate__delay-1s"
        style="top: -100px; left: -100px; z-index: -1"
      ></div>
      <div
        style="width: calc(100vw - 300px - 1rem)"
        class="min-h-screen flex flex-col gap-20 lg:block hidden"
      >
        <slot />
      </div>

      <div class="min-h-screen flex flex-col gap-20 block lg:hidden">
        <slot />
      </div>
      <Nav :mode="mode" />
    </div>

    <Footer class="z-50 relative" />
  </div>
</template>

<script>
import "animate.css";
useSeoMeta({
  title: "CSOL is a design agency",
  ogTitle: "CSOL is a design agency",
  description:
    "We strave to bring you unique products that impress your clients",
  ogDescription:
    "We strave to bring you unique products that impress your clients",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  charset: "utf-8",

  ogImage: "/logo.svg",
  twitterCard: "/logo.svg",
});

useHead({
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
export default {
  mounted() {
    console.log(
      `%cHey 👋\n\nThere's nothing fancy to find here 😅`,
      "font-size:30px; "
    );
  },
  props: {
    mode: {
      type: String,
      default: "light",
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  font-family: "Noto Sans Display", sans-serif;
  transition: 0.3s ease;
}
*:hover,
*:focus {
  transition: 0.3s ease;
}

*::selection {
  color: white;
  background: #d946ef;
}
</style>
