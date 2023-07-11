<template>
  <div
    class="text-white w-full bg-black mt-auto h-screen overflow-hidden relative"
  >
    <div
      class="w-full flex flex-col gap-12 relative h-screen relative items-center"
    >
      <div
        style="position: absolute; bottom: 450px"
        class="flex flex-col md:flex-row gap-12 items-center text-center text-white mt-auto pb-6"
      >
        <TextLink color="#fff" to="/"> Home </TextLink>
        <TextLink color="#fff" to="/studies">
          {{ i18n.t("studies") }}
        </TextLink>
        <TextLink color="#fff" to="/imprint">
          {{ i18n.t("imprint") }}
        </TextLink>
        <a class="md:ml-auto" href="mailto:contact@csol.dev">
          <TextLink color="#fff"> contact@csol.dev </TextLink>
        </a>
      </div>

      <img
        src="/logo-light.svg"
        alt="logo"
        style="position: absolute; bottom: 0px; height: 400px; width: auto"
        class="opacity-30 bottom-6 w-full"
      />
    </div>

    <div class="flex flex-col absolute bottom-0 gap-6" style="height: 450px">
      <div class="bg-white h-14 w-screen"></div>
      <div class="bg-white h-12 w-screen"></div>
      <div class="bg-white h-10 w-screen"></div>
      <div class="bg-white h-9 w-screen"></div>
      <div class="bg-white h-7 w-screen"></div>
      <div class="bg-white h-6 w-screen"></div>
      <div class="bg-white h-5 w-screen"></div>

      <div class="bg-white h-4 w-screen"></div>

      <div class="bg-white h-3 w-screen"></div>

      <div class="bg-white h-2 w-screen"></div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from "#i18n";
const i18n = useI18n();
</script>

<i18n lang="json">
{
  "de": {
    "studies": "Fallstudien",
    "imprint": "Impressum"
  },
  "en": {
    "studies": "Case Studies",
    "imprint": "Imprint"
  }
}
</i18n>
