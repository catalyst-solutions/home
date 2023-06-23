<template>
  <header class="bg-black flex py-0">
    <Wrapper class="flex">
      <img src="/logo.svg" style="height: 60px" />

      <div class="mx-auto flex gap-20 items-center text-center text-white">
        <NuxtLink
          class="hover:cursor-pointer border-black border-b-2 hover:border-white"
        >
          <Text type="small"> Services </Text>
        </NuxtLink>
        <NuxtLink
          class="hover:cursor-pointer border-black border-b-2 hover:border-white"
        >
          <Text type="small"> Prior Work </Text>
        </NuxtLink>
      </div>
      <NuxtLink>
        <Button type="black"> Contact Us! </Button>
      </NuxtLink>
    </Wrapper>
  </header>
</template>
