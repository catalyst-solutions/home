<template>
  <Wrapper>
    <!-- header-->
    <div class="flex flex-col gap-5 pb-6" style="height: calc(100vh - 76px)">
      <div class="p-10"></div>

      <div class="flex flex-col gap-6">
        <div class="flex flex-col">
          <Text size="title-gray">
            <span class="animate__animated animate__fadeInDown">
              Wir entwickeln Lösungen
            </span>
          </Text>

          <div class="flex gap-6 items-center">
            <Text size="title">
              <span
                class="animate__delay-1s animate__animated animate__fadeInDown"
              >
                die Kunden ❤️ werden</span
              >
            </Text>
          </div>
        </div>
      </div>

      <div class="mt-auto animate__delay-2s animate__animated animate__fadeIn">
        <Text size="heading">
          CSOL ist eine Marketing Agentur <br />
          <Text size="heading">
            mit Fokus auf Webdesign und Socialmedia-Marketing
          </Text>
        </Text>
      </div>
    </div>
  </Wrapper>

  <!-- prior work-->
  <div class="bg-slate-100">
    <Wrapper>
      <div class="p-10"></div>
      <Text size="subtitle-gray"> Gutes Design ist schwer </Text>
      <Text size="subtitle"> Wir haben Erfahrung! </Text>
      <div class="p-10"></div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-0">
        <div class="flex flex-col gap-6">
          <Image
            gray
            src="https://64.media.tumblr.com/6bacb3e18d35adb6fce5b081fe5c07ca/tumblr_my2td9HVDf1svfte7o1_500.gif"
          ></Image>

          <Text size="heading"
            >Party Manager ist ein Custom-Kompletlösung zum Ticketmanagement für
            ein Event mit über 600 Personen</Text
          >
        </div>
        <div class="flex flex-col gap-6">
          <Image gray src="/img/csol.png"></Image>

          <div class="p-12">
            <Text size="heading"
              >Das Ziel bei unserer Website war unsere Fähigkeiten bestmöglich
              zu representieren. Dazu kommt das designen unserer
              brand-identity</Text
            >
          </div>
        </div>
      </div>
    </Wrapper>
  </div>
  <div class="p-12"></div>
</template>
