<template>
  <div
    class="z-10 relative min-h-screen text-black max-w-screen overflow-x-hidden"
  >
    <div class="flex">
      <div
        class="blur-3xl bg-fuchsia-200 absolute h-60 w-1/3 rounded-full animate__animated animate__fadeIn animate__delay-1s"
        style="top: -100px; left: -100px; z-index: -1"
      ></div>
      <div
        style="width: calc(100vw - 300px - 1rem)"
        class="flex flex-col gap-20 md:block hidden"
      >
        <slot />
      </div>

      <div class="flex flex-col gap-20 block md:hidden">
        <slot />
      </div>
      <Nav />
    </div>

    <Footer class="z-50 relative" />
  </div>
</template>

<script>
import "animate.css";
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
