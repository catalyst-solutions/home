<template>
  <header class="bg-white flex py-2 items-center">
    <Wrapper class="flex items-center">
      <img src="/logo.svg" style="height: 40px" />

      <div class="ml-auto flex gap-12 items-center text-center text-black">
        <TextLink>
          <div
            class="flex gap-2 items-center opacity-70 hover:opacity-100 cursor-pointer"
          >
            Services
          </div>
        </TextLink>
        <TextLink>
          <div
            class="flex gap-2 items-center opacity-70 hover:opacity-100 cursor-pointer"
          >
            Prior Work
          </div>
        </TextLink>
        <TextLink>
          <div
            class="flex gap-2 items-center opacity-70 hover:opacity-100 cursor-pointer"
          >
            <Icon icon="email" fontSize="25px"></Icon>
            <div>Contact</div>
          </div>
        </TextLink>
      </div>
    </Wrapper>
  </header>
</template>
