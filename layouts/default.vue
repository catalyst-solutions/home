<template>
  <div class="flex flex-col gap-20 bg-white min-h-screen text-black">
    <Nav />
    <slot />

    <Footer />
  </div>
</template>

<script>
import "animate.css";
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  font-family: "Noto Sans Display", sans-serif;
}
</style>
