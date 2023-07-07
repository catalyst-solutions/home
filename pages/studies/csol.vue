<template>
  <Wrapper>
    <div class="flex flex-col gap-20">
      <TextLink to="/studies">
        <div class="flex items-center gap-2">
          <Icon icon="arrow_back" />
          Alle Case studies
        </div>
      </TextLink>
      <div class="flex flex-col">
        <Text size="title">
          <span class="animate__animated animate__fadeInDown">
            Cathalyst Solutions
          </span>
        </Text>
        <Text size="title-gray">
          <span class="animate__animated animate__fadeInDown animate__delay-1s">
            — das sind wir!
          </span>
        </Text>

        <div class="flex grid grid-cols-2 mt-20">
          <div class="flex flex-col">
            <Text size="heading">Von</Text>
            <Text>Joshua</Text>
          </div>

          <div class="flex flex-col">
            <Text size="heading">Published</Text>
            <Text>7 Jul 2023</Text>
          </div>
        </div>
      </div>

      <Image src="/img/csol_home.png"></Image>
      <div class="grid md:grid-cols-2 gap-6 border-b border-slate-200 pb-20">
        <Text size="heading">Das Problems</Text>
        <div>
          <Text>
            Als neue Unternehmer ist es unglaublich wichtig neue Kunden zu
            erreichen.
          </Text>
        </div>
      </div>
      <div class="grid md:grid-cols-2 gap-6">
        <Text size="heading">Das Ziel</Text>
        <div>
          <Text>
            Für einen gelungenen Auftritt war es nicht nur wichtig eine
            gelungene Website zu haben. Wir mussten für CSOL eine komplette neue
            Brand-Identity aufbauen. Angefangen mit der Farbpalette bis hin zum
            Logo.
          </Text>
        </div>
      </div>
      <Image src="/img/csol_colors.svg"></Image>

      <Text size="title"> Timeframe </Text>

      <div
        class="border border-slate-200 flex-col gap-2 relative hidden md:flex"
      >
        <div class="border-b border-slate-200 p-6 flex items-center">
          <div class="p-6 bg-black text-white" style="width: 23%">
            Planung (3 Tage)
          </div>
        </div>
        <div class="border-b border-slate-200 p-6 flex items-center">
          <div
            class="p-6 bg-black text-white"
            style="margin-left: 23%; width: 73%"
          >
            Entwicklung (10 Tage)
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
