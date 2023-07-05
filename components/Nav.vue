<template>
  <header class="bg-white flex py-2 items-center">
    <Wrapper class="flex items-center">
      <img src="/logo.svg" style="height: 20px" />

      <div
        class="hidden md:flex ml-auto gap-12 items-center text-center text-black"
      >
        <TextLink>
          <div
            class="flex gap-2 items-center opacity-70 hover:opacity-100 cursor-pointer"
          >
            Home
          </div>
        </TextLink>
        <TextLink>
          <div
            class="flex gap-2 items-center opacity-70 hover:opacity-100 cursor-pointer"
          >
            Case Studies
          </div>
        </TextLink>

        <Button
          type="primary"
          class="flex gap-2 items-center opacity-70 hover:opacity-100 cursor-pointer"
        >
          <div>Contact</div>
        </Button>
      </div>

      <div class="block md:hidden ml-auto">
        <Drawer>
          <template v-slot:trigger>
            <Button type="black">
              <Icon icon="menu" />
            </Button>
          </template>
          <Wrapper class="flex flex-col gap-6 items-center">
            <TextLink>
              <div
                class="flex gap-2 items-center opacity-70 hover:opacity-100 cursor-pointer"
              >
                Home
              </div>
            </TextLink>
            <TextLink>
              <div
                class="flex gap-2 items-center opacity-70 hover:opacity-100 cursor-pointer"
              >
                Case Studies
              </div>
            </TextLink>
            <Button
              type="primary"
              class="flex gap-2 items-center opacity-70 hover:opacity-100 cursor-pointer"
            >
              <div>Contact</div>
            </Button>
          </Wrapper>
        </Drawer>
      </div>
    </Wrapper>
  </header>
</template>
