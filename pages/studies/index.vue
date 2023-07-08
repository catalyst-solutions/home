<template>
  <div class="flex flex-col gap-20">
    <Wrapper>
      <Text size="title"> {{ i18n.t("header") }} </Text>
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
    <div class="p-10"></div>
  </div>
</template>

<script setup>
import { useI18n } from "#i18n";
const i18n = useI18n();
</script>

<i18n lang="json">
{
  "en": {
    "header": "Read about our prior work",
    "cards": {
      "pm": {
        "project": "Party Manager",
        "title": "Event Management",
        "info": "An all-in-one Solution to ticket management"
      },
      "csol": {
        "project": "CSOL Homepage",
        "title": "That's us!",
        "info": "A modern website for our agency"
      }
    }
  },
  "de": {
    "header": "Lesen sie über unsere Projekte",
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
    }
  }
}
</i18n>
