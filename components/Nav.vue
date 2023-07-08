<template>
  <header
    class="bg-white flex py-2 z-50 h-screen fixed top-0 pt-10 right-0 hidden lg:block pl-6"
    style="width: 300px"
  >
    <div class="flex flex-col flex gap-2 text-black h-full">
      <NuxtLink
        to="/"
        class="text-xl text-load"
        :class="[$route.name == 'index' ? 'text-black' : 'text-slate-400']"
      >
        Home
      </NuxtLink>
      <NuxtLink
        to="/studies"
        class="text-xl text-load"
        :class="[
          $route.name.includes('studies') ? 'text-black' : 'text-slate-400',
        ]"
      >
        Case Studies
      </NuxtLink>
      <NuxtLink
        to="/contact"
        class="text-xl text-load"
        :class="[$route.name == 'contact' ? 'text-black' : 'text-slate-400']"
      >
        Kontakt
      </NuxtLink>
      <div class="mt-10">
        <Text class="text-black text-xl" v-if="locale.includes('de')">
          <span class="cursor-pointer" @click="locale = 'en'"> English </span>
        </Text>
        <Text class="text-black text-xl" v-if="locale.includes('en')">
          <span class="cursor-pointer" @click="locale = 'de'"> Deutsch </span>
        </Text>
      </div>

      <NuxtLink class="mt-auto mb-10" to="/">
        <img class="w-16 opacity-70" src="/logo.svg" alt="logo" />
      </NuxtLink>
    </div>
  </header>
  <header class="block lg:hidden fixed bottom-6 right-6">
    <Drawer>
      <template v-slot:trigger>
        <Button type="black">
          <div class="flex gap-2 items-center"><Icon icon="menu" /> Menu</div>
        </Button>
      </template>
      <Wrapper class="flex flex-col gap-6 items-center">
        <TextLink to="/"> Home </TextLink>
        <TextLink to="/studies"> Case Studies </TextLink>
        <TextLink to="/contact"> Kontakt </TextLink>
      </Wrapper>
    </Drawer>
  </header>
</template>

<script setup>
const { locale } = useI18n();
</script>
