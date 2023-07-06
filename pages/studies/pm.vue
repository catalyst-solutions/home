<template>
  <Wrapper>
    <div class="flex flex-col gap-20 md:mt-20 md:ml-20 mt-10">
      <TextLink to="/studies">
        <div class="flex items-center gap-2">
          <Icon icon="arrow_back" />
          Alle Case studies
        </div>
      </TextLink>
      <div class="flex flex-col">
        <Text size="title">
          <span class="animate__animated animate__fadeInDown">
            Party Manager
          </span>
        </Text>
        <Text size="title-gray">
          <span class="animate__animated animate__fadeInDown animate__delay-1s">
            — All-in-One Ticketverwaltung
          </span>
        </Text>
      </div>

      <Image src="/img/pm1.png"></Image>
      <div class="grid md:grid-cols-2 gap-6">
        <Text size="heading">Das Ziel</Text>
        <div>
          <Text>
            Das Ziel war das entwerfen eines enfachen Systems zur Verwaltung
            aller Tickets. Party Manager hat hierfür zwei entscheidende
            Funktionen:
            <br />
            <br />
            <div class="flex flex-col gap-6">
              <div class="flex gap-6 items-center">
                <Badge>01</Badge>
                Hinzufügen eines neuen Tickets nach eindeutiger Ticketnummer
              </div>
              <div class="flex gap-6 items-center">
                <Badge>02</Badge>
                Verifizieren eines Tickets durch manuelle Eingabe oder scannen
                der Ticketnummer
              </div>
            </div>
          </Text>
        </div>
      </div>
      <Image src="/img/pm2.png"></Image>

      <Text size="title"> Timeframe </Text>

      <div
        class="border border-slate-200 flex-col gap-2 relative hidden md:flex"
      >
        <div class="border-b border-slate-200 p-6 flex items-center">
          <div class="p-6 bg-black text-white" style="width: 27.8%">
            Planung (5 Tage)
          </div>
        </div>
        <div class="border-b border-slate-200 p-6 flex items-center">
          <div
            class="p-6 bg-black text-white"
            style="margin-left: 27.8%; width: 55%"
          >
            Entwicklung (10 Tage)
          </div>
        </div>

        <div class="border-b border-slate-200 p-6 flex items-center">
          <div
            class="p-6 bg-black text-white"
            style="margin-left: 82%; width: 16%"
          >
            Testen & Übergabe (3 Tage)
          </div>
        </div>
      </div>
      <div class="md:hidden block border border-slate-200">
        <div class="border-b border-slate-200 p-6 flex items-center">
          <div class="p-6 bg-black text-white w-full">Planung (5 Tage)</div>
        </div>
        <div class="border-b border-slate-200 p-6 flex items-center">
          <div class="p-6 bg-black text-white w-full">
            Entwicklung (10 Tage)
          </div>
        </div>

        <div class="border-b border-slate-200 p-6 flex items-center">
          <div class="p-6 bg-black text-white w-full">
            Testen & Übergabe (3 Tage)
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
  <div class="p-10"></div>
</template>
