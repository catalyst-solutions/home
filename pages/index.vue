<template>
  <Wrapper>
    <!-- header-->
    <div class="flex flex-col gap-5 pb-6" style="min-height: 80vh">
      <div class="flex flex-col gap-6">
        <div class="flex flex-col md:mt-20 md:ml-20 mt-10">
          <Text size="title">
            <span>
              Wir sind eine Design Agentur mit <br />
              Fokus auf der Entwicklung von digitalen Unternehmensauftritten<br />
              die Kunden überzeugen
            </span>
          </Text>
          <br />
        </div>
      </div>
    </div>
  </Wrapper>

  <div class="grid md:grid-cols-2">
    <Card
      to="/studies/pm"
      src="https://images.unsplash.com/photo-1635070636690-d887c1a77e7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
      project="Party Manager"
      title="Event Management"
      info="Ein all-in-one System zum management von Tickets"
    />
    <Card />
  </div>

  <div
    class="flex flex-col gap-20 bg-white z-10 border-t relative"
    style="margin-top: 100vh"
  >
    <!-- clients-->

    <!-- prior work-->
    <Wrapper class="flex flex-col gap-12">
      <div class="flex flex-col">
        <Text size="title-gray"> Gutes Design ist schwer </Text>
        <Text size="title"> Wir haben Erfahrung! </Text>
      </div>
      <Image class="w-2/3" src="/img/pm1.png" />
      <TextLink to="/studies/pm">
        <div class="block sm:hidden">
          <Text size="heading">
            Party-Manager eine Komplettlösung <br />
            zur Verwaltung von Tickets für <br />
            ein 600+ Personen Event
          </Text>
        </div>
        <div class="sm:block hidden">
          <Text size="heading">
            Party-Manager eine Komplettlösung zur Verwaltung von Tickets
            <br />
            für ein 600+ Personen Event
          </Text>
        </div>
      </TextLink>
    </Wrapper>

    <!-- how we work-->
    <div>
      <Wrapper>
        <Text size="title-gray"> Gutes Design ist schwer </Text>
        <Text size="title"> Wir haben Erfahrung! </Text>
        <div class="p-10"></div>

        <div class="flex flex-col gap-12">
          <div
            class="grid md:grid-cols-2 border-b border-black pb-12 items-center gap-6"
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
            class="grid md:grid-cols-2 border-b border-black pb-12 items-center gap-6"
          >
            <Badge><Text size="heading"> 02 Evaluation & Design </Text> </Badge>

            <Text>
              Wir machen uns nochmals Gedanken über Ihren Auftrag und
              finalisieren das Konzept. In dieser Phase werden wir auch die
              ersten Design Vorschläge/Prototypen für Ihre Kampagne oder Website
              vorstellen.
            </Text>
          </div>

          <div class="grid md:grid-cols-2 pb-12 items-center gap-6">
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
