<template>
  <Wrapper>
    <!-- header-->
    <div
      class="flex flex-col gap-5 pb-6 fixed"
      style="height: calc(100vh - 76px - 5rem)"
    >
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
          <div class="flex gap-2 items-center">
            <img style="height: 20px" src="/logo.svg" />

            ist eine Marketing Agentur mit
          </div>
          <Text size="heading">
            Fokus auf Webdesign und Socialmedia-Marketing
          </Text>
        </Text>
      </div>
    </div>
  </Wrapper>

  <!-- prior work-->
  <div
    class="flex flex-col gap-20 bg-white z-50 relative"
    style="margin-top: 100vh"
  >
    <Wrapper class="flex flex-col gap-12">
      <Image src="/img/pm1.png"></Image>
      <TextLink to="/studies/pm">
        <Text size="heading">
          Party-Manager eine Komplettlösung <br />
          zur Verwaltung von Tickets <br />
          für ein 600+ Personen Event
        </Text>
      </TextLink>
    </Wrapper>

    <!-- how we work-->
    <div>
      <Wrapper>
        <Text size="subtitle-gray"> Gutes Design ist schwer </Text>
        <Text size="subtitle"> Wir haben Erfahrung! </Text>
        <div class="p-10"></div>

        <div class="flex flex-col gap-12">
          <div
            class="grid md:grid-cols-2 border-b border-black pb-12 items-center"
          >
            <div class="w-1/3">
              <Badge><Text size="heading"> 01 Planung </Text> </Badge>
            </div>

            <Text>
              Wir besprechen Ihre Idee kostenlos In-person oder über
              Online-Meetings. In dieser Phase erstellen wir mit ihnen
              kooperativ mood-boards und beraten Sie.
            </Text>
          </div>

          <div
            class="grid md:grid-cols-2 border-b border-black pb-12 items-center"
          >
            <Badge><Text size="heading"> 02 Evaluation & Design </Text> </Badge>

            <Text>
              Wir machen uns nochmals Gedanken über Ihren Auftrag und
              finalisieren das Konzept. In dieser Phase werden wir auch die
              ersten Design Vorschläge/Prototypen für Ihre Kampagne oder Website
              vorstellen.
            </Text>
          </div>

          <div class="grid md:grid-cols-2 pb-12 items-center">
            <Badge><Text size="heading"> 03 Entwicklung </Text> </Badge>

            <Text>
              Let's get to work! Wir machen aus dem Ihnen vorgestellten Prototyp
              Wirklichkeit! Das finale Produkt wird nach Fertigstellung an Sie
              übergeben.
            </Text>
          </div>
        </div>
      </Wrapper>
    </div>
  </div>
</template>
