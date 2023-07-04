<template>
  <div class="flex flex-col gap-xl bg-white min-h-screen text-black">
    <Nav />
    <slot />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

* {
  font-family: "Sarabun", sans-serif;
}
</style>
