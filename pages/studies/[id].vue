<template>
  <Wrapper v-if="entry">
    <div class="flex flex-col gap-20">
      <TextLink to="/studies">
        <div class="flex items-center gap-2">
          <Icon icon="arrow_back" />
          Case studies
        </div>
      </TextLink>
      <div class="flex flex-col">
        <Text size="title">
          <span class="animate__animated animate__fadeInDown">
            {{ entry.getField("title") }}
          </span>
        </Text>
        <Text size="title-gray">
          <span class="animate__animated animate__fadeInDown animate__delay-1s">
            {{ entry.getField("subtitle") }}
          </span>
        </Text>

        <div class="flex grid grid-cols-2 mt-20">
          <div class="flex flex-col">
            <Text size="heading">By</Text>
            <Text>Joshua</Text>
          </div>

          <div class="flex flex-col">
            <Text size="heading">Published</Text>
            <Text>7 Jul 2023</Text>
          </div>
        </div>
      </div>

      <Image src="/img/pm1.png"></Image>
      <div class="grid md:grid-cols-2 gap-6 border-b border-slate-200 pb-20">
        <Text size="heading">Identifizieren des Problems</Text>
        <div>
          <Text>
            Die Schwierigkeit beim Ticketverkauf war das festhalten der
            Verkaufszahlen und Informationen nach dem Verkauf, welche für die
            spätere Organisation von Wichtigkeit sind. Die Lösung: Digitale
            Verwaltung der Tickets
          </Text>
        </div>
      </div>
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
                <Badge>1</Badge>
                Hinzufügen eines neuen Tickets nach eindeutiger Ticketnummer
              </div>
              <div class="flex gap-6 items-center">
                <Badge>2</Badge>
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
</template>

<script>
import HudduClient from "huddu-node";
export default {
  data() {
    return {
      client: undefined,
      entry: {},
    };
  },
  async mounted() {
    this.client = new HudduClient({
      token:
        "ot_9875a9188752bd4fa9c5db594f9bf99aff9ee70bd70a2ab61d7c2c5d067f0f13",
      project: "prj_5a4bf284740e436bb16b0af17e566ccc",
      organization: "org_a1f85701a85149caa30e06cddff1f30a",

      environment: "main",
      locale: "en",
    });

    await this.client.init();

    this.entry = await this.client.entries.get();
  },

  methods: {},
};
</script>
