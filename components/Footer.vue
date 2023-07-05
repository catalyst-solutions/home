<template>
  <div class="text-white w-full bg-black mt-auto h-screen overflow-hidden">
    <Wrapper class="w-full flex flex-col gap-12 relative h-screen">
      <div
        class="flex flex-col md:flex-row gap-12 items-center text-center text-white mt-auto border-b border-white pb-6"
      >
        <TextLink color="#fff" to="/"> Home </TextLink>
        <TextLink color="#fff" to="/studies"> Case Studies </TextLink>
        <TextLink color="#fff" to="/privacy-policy"> Privacy Policy </TextLink>
        <a class="md:ml-auto" href="mailto:contact@csol.app.com">
          <TextLink color="#fff"> contact@csol.app </TextLink>
        </a>
      </div>

      <img src="/logo-light.svg" class="opacity-30 bottom-6 w-full" />
    </Wrapper>
  </div>
</template>
