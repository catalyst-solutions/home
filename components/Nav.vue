<template>
  <header
    class="flex py-2 z-50 h-screen fixed top-0 pt-10 right-0 hidden lg:block pl-16"
    :class="[mode == 'light' ? 'bg-white' : 'bg-black']"
    style="width: 300px"
  >
    <div
      class="flex flex-col flex gap-2 h-full"
      :class="[mode == 'light' ? 'text-black' : 'text-white']"
    >
      <NuxtLink
        to="/"
        class="text-2xl text-load"
        :class="[$route.name == 'index' ? '' : 'text-gray-400']"
      >
        {{ i18n.t("home") }}
      </NuxtLink>

      <NuxtLink
        to="/studies"
        class="text-2xl text-load"
        :class="[$route.name.includes('studies') ? '' : 'text-gray-400']"
      >
        {{ i18n.t("studies") }}
      </NuxtLink>

      <NuxtLink
        to="/websites"
        class="text-2xl text-load"
        :class="[$route.name.includes('websites') ? '' : 'text-gray-400']"
      >
        {{ i18n.t("websites") }}
      </NuxtLink>

      <NuxtLink
        to="/marketing"
        class="text-2xl text-load"
        :class="[$route.name.includes('marketing') ? '' : 'text-gray-400']"
      >
        {{ i18n.t("marketing") }}
      </NuxtLink>

      <NuxtLink
        to="/contact"
        class="text-2xl text-load"
        :class="[$route.name == 'contact' ? '' : 'text-gray-400']"
      >
        {{ i18n.t("contact") }}
      </NuxtLink>

      <select
        class="text-2xl text-gray-400 mt-20 appearance-none"
        style="background: none"
        v-model="$i18n.locale"
      >
        <option
          v-for="(lang, i) in ['de', 'en']"
          :key="`Lang${i}`"
          :value="lang"
        >
          {{ lang.toUpperCase() }}
        </option>
      </select>

      <NuxtLink class="mt-auto mb-10" to="/">
        <img
          class="w-16 opacity-70"
          :src="mode == 'light' ? '/logo.svg' : '/logo-light.svg'"
          alt="logo"
        />
      </NuxtLink>
    </div>
  </header>
  <header class="block lg:hidden fixed bottom-6 right-6">
    <Drawer>
      <template v-slot:trigger>
        <Button>
          <div class="flex gap-2 items-center"><Icon icon="menu" /> Menu</div>
        </Button>
      </template>
      <Wrapper class="flex flex-col gap-6 items-center">
        <TextLink to="/"> {{ i18n.t("home") }} </TextLink>
        <TextLink to="/websites"> {{ i18n.t("websites") }}</TextLink>
        <TextLink to="/studies"> {{ i18n.t("studies") }}</TextLink>
        <TextLink to="/contact"> {{ i18n.t("contact") }} </TextLink>
        <select
          class="text-xl text-gray-400 mt-10 appearance-none"
          v-model="$i18n.locale"
        >
          <option
            v-for="(lang, i) in ['de', 'en']"
            :key="`Lang${i}`"
            :value="lang"
          >
            {{ lang.toUpperCase() }}
          </option>
        </select>
      </Wrapper>
    </Drawer>
  </header>
</template>

<script setup>
import { useI18n } from "#i18n";
const i18n = useI18n();
</script>
<script>
export default {
  props: ["mode"],
};
</script>
<i18n lang="json">
{
  "en": {
    "home": "Home",
    "websites": "Websites",
    "studies": "Case studies",
    "contact": "Contact"
  },
  "de": {
    "home": "Home",
    "websites": "Webseiten",
    "studies": "Fallstudien",
    "contact": "Kontakt"
  }
}
</i18n>
