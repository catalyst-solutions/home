<template>
  <Wrapper>
    <!-- header-->
    <div class="flex flex-col gap-5 pb-6" style="min-height: 80vh">
      <div class="flex flex-col gap-6">
        <div class="flex flex-col" style="max-width: 1200px">
          <Text size="title">
            {{ i18n.t("header") }}
          </Text>
        </div>
      </div>
    </div>
  </Wrapper>

  <div class="grid md:grid-cols-2">
    <Card
      to="/studies/pm"
      src="https://images.unsplash.com/photo-1635070636690-d887c1a77e7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
      :project="i18n.t('cards.pm.project')"
      :title="i18n.t('cards.pm.title')"
      :info="i18n.t('cards.pm.info')"
    />
    <Card
      to="/studies/csol"
      src="/img/csol.svg"
      :project="i18n.t('cards.csol.project')"
      :title="i18n.t('cards.csol.title')"
      :info="i18n.t('cards.csol.info')"
    />
  </div>

  <!-- how we work-->
  <div>
    <Wrapper>
      <Text size="title-gray"> {{ i18n.t("csolWay.heading1") }} </Text>
      <Text size="title"> {{ i18n.t("csolWay.heading2") }}</Text>
      <div class="p-10"></div>

      <div class="flex flex-col gap-12">
        <div
          class="grid lg:grid-cols-2 border-b border-slate-200 pb-12 items-center gap-6"
        >
          <div class="w-1/3">
            <Badge
              ><div class="text-2xl">
                {{ i18n.t("csolWay.steps.step1.title") }}
              </div>
            </Badge>
          </div>

          <Text>
            {{ i18n.t("csolWay.steps.step1.text") }}
          </Text>
        </div>

        <div
          class="grid lg:grid-cols-2 border-b border-slate-200 pb-12 items-center gap-6"
        >
          <Badge
            ><div class="text-2xl">
              {{ i18n.t("csolWay.steps.step2.title") }}
            </div>
          </Badge>

          <Text>
            {{ i18n.t("csolWay.steps.step2.text") }}
          </Text>
        </div>

        <div class="grid lg:grid-cols-2 pb-12 items-center gap-6">
          <Badge
            ><div class="text-2xl">
              {{ i18n.t("csolWay.steps.step3.title") }}
            </div>
          </Badge>

          <Text>
            {{ i18n.t("csolWay.steps.step1.text") }}
          </Text>
        </div>
      </div>
    </Wrapper>
  </div>
</template>
<script setup>
import { useI18n } from "#i18n";
const i18n = useI18n();
</script>

<i18n lang="json">
{
  "en": {
    "header": "Wir sind eine Design Agentur mit Fokus auf der Entwicklung von digitalen Unternehmensauftritten die Kunden überzeugen",
    "cards": {
      "pm": {
        "project": "Party Manager",
        "title": "Event Management",
        "info": "Ein all-in-one System zum management von Tickets"
      },
      "csol": {
        "project": "CSOL Homepage",
        "title": "Sie sind hier!",
        "info": "Eine moderne Website für unsere Agentur"
      }
    },
    "csolWay": {
      "heading1": "Gutes Design ist schwer",
      "heading2": "Wir haben Erfahrung!",
      "steps": {
        "step1": {
          "title": "01 Planung",
          "text": "Wir besprechen Ihre Idee kostenlos In-person oder über Online-Meetings. In dieser Phase erstellen wir mit ihnen kooperativ mood-boards und beraten Sie."
        },
        "step2": {
          "title": "02 Evaluation & Design",
          "text": "Wir machen uns nochmals Gedanken über Ihren Auftrag und finalisieren das Konzept. In dieser Phase werden wir auch die ersten Design Vorschläge/Prototypen für Ihre Kampagne oder Website vorstellen."
        },

        "step3": {
          "title": "03 Entwicklung",
          "text": "Let's get to work! Wir machen aus dem Ihnen vorgestellten Prototyp Wirklichkeit! Das finale Produkt wird nach Fertigstellung an Sie übergeben."
        }
      }
    }
  },
  "de": {
    "header": "We are a design agency focusing on developing digital corporate appearances that clients love"
  }
}
</i18n>
