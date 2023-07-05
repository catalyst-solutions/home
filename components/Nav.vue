<template>
  <header class="bg-white flex py-2 items-center">
    <Wrapper class="flex items-center">
      <NuxtLink to="/">
        <img src="/logo.svg" style="height: 20px" />
      </NuxtLink>

      <div
        class="hidden md:flex ml-auto gap-12 items-center text-center text-black"
      >
        <TextLink to="/"> Home </TextLink>
        <TextLink to="/studies"> Case Studies </TextLink>

        <NuxtLink to="/contact">
          <Button type="primary"> Contact </Button>
        </NuxtLink>
      </div>

      <div class="block md:hidden ml-auto">
        <Drawer>
          <template v-slot:trigger>
            <Button type="black">
              <Icon icon="menu" />
            </Button>
          </template>
          <Wrapper class="flex flex-col gap-6 items-center">
            <TextLink> Home </TextLink>
            <TextLink> Case Studies </TextLink>
            <Button type="primary">
              <div>Contact</div>
            </Button>
          </Wrapper>
        </Drawer>
      </div>
    </Wrapper>
  </header>
</template>
