<template>
  <header
    class="bg-white flex py-2 z-50 h-screen fixed top-0 pt-6 right-0 hidden md:block"
    style="width: 300px"
  >
    <div class="flex flex-col flex gap-2 text-black">
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
    </div>
  </header>
  <header class="block md:hidden fixed bottom-6 right-6">
    <Drawer>
      <template v-slot:trigger>
        <Button type="black"> Menu </Button>
      </template>
      <Wrapper class="flex flex-col gap-6 items-center">
        <TextLink to="/"> Home </TextLink>
        <TextLink to="/studies"> Case Studies </TextLink>

        <NuxtLink to="/contact">
          <Button type="primary"> Kontakt </Button>
        </NuxtLink>
      </Wrapper>
    </Drawer>
  </header>
</template>
