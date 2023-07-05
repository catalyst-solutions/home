<template>
  <Wrapper>
    <div class="flex flex-col gap-20">
      <div class="h-screen">
        <Text size="title">
          <span class="animate__animated animate__fadeInDown">
            Party Manager
          </span>
        </Text>
      </div>

      <Image src="/img/pm1.png"></Image>
      <div class="md:w-1/3 w-2/3">
        <Text size="heading">
          Das Zeil war das entwerfen eines enfachen Systems zur Verwaltung aller
          Tickets. Party Manager hat hierfür zwei entscheidende Funktionen:
          <br />
          <br />
          <div class="flex flex-col gap-6">
            <div class="flex gap-6 items-center">
              <Badge>01</Badge>
              Hinzufügen eines neuen Tickets nach eindeutiger Ticketnummer
            </div>
            <div class="flex gap-6 items-center">
              <Badge>02</Badge>
              Verifizieren eines Tickets durch manuelle Eingabe oder scannen der
              Ticketnummer
            </div>
          </div>
        </Text>
      </div>
      <Image src="/img/pm2.png"></Image>

      <Text size="subtitle"> Timeframe </Text>

      <div class="border border-slate-200 flex flex-col gap-2 relative">
        <div class="border-b border-slate-200 p-6 flex items-center">
          <div class="border-r border-slate-200 mr-6" style="min-width: 200px">
            Planung
          </div>
          <div class="p-6 bg-black text-white" style="width: 27.8%">5 Tage</div>
        </div>
        <div class="border-b border-slate-200 p-6 flex items-center">
          <div class="border-r border-slate-200 mr-6" style="min-width: 200px">
            Entwicklung
          </div>

          <div
            class="p-6 bg-black text-white"
            style="margin-left: 27.8%; width: 55%"
          >
            10 Tage
          </div>
        </div>

        <div class="border-b border-slate-200 p-6 flex items-center">
          <div class="border-r border-slate-200 mr-6" style="min-width: 200px">
            Testen & Einsatz
          </div>
          <div
            class="p-6 bg-black text-white"
            style="margin-left: 82%; width: 16%"
          >
            3 Tage
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
  <div class="p-10"></div>
</template>
