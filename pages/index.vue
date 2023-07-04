<template>
  <Wrapper>
    <!-- header-->
    <div class="flex flex-col gap-5 min-h-screen">
      <div class="p-10"></div>

      <div class="flex flex-col gap-6">
        <div class="flex flex-col">
          <Text size="title-gray"> Wir entwickeln </Text>

          <div class="flex gap-6 items-center">
            <img
              src="https://i.giphy.com/media/IgtkFApNRmWytkB073/giphy.webp"
              style="height: 80px; width: 200px; object-fit: cover"
            />
            <Text size="title"> umwerfende Lösungen </Text>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>

  <Image
    src="https://64.media.tumblr.com/6bacb3e18d35adb6fce5b081fe5c07ca/tumblr_my2td9HVDf1svfte7o1_500.gif"
  ></Image>
  <!-- prior work-->
  <div class="bg-slate-100">
    <Wrapper>
      <div class="p-10"></div>
      <Text size="subtitle-gray"> Gutes designen ist schwer </Text>
      <Text size="subtitle"> Zum Glück haben wir Erfahrung </Text>
      <div class="p-10"></div>

      <div class="grid grid-cols-2">
        <div class="flex flex-col gap-6">
          <Image
            src="https://64.media.tumblr.com/6bacb3e18d35adb6fce5b081fe5c07ca/tumblr_my2td9HVDf1svfte7o1_500.gif"
          ></Image>

          <div class="p-6 flex flex-col gap-6">
            <Text size="heading">Party Manager</Text>
            <Text
              >Party Manager ist ein Custom-Kompletlösung zum Ticketmanagement
              für ein Event mit über 600 Personen</Text
            >

            <div>
              <Button type="black">Case Study</Button>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <Image
            src="https://i2.wp.com/gifdb.com/images/high/anime-bamboo-forest-background-5rx5lwev45pcnpaf.gif"
          ></Image>

          <div class="p-6 flex flex-col gap-6">
            <Text size="heading">Party Manager</Text>
            <Text
              >Party Manager ist ein Custom-Kompletlösung zum Ticketmanagement
              für ein Event mit über 600 Personen</Text
            >

            <div>
              <Button type="black">Case Study</Button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  </div>
  <div class="p-12"></div>
</template>
