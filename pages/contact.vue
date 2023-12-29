<template>
  <Layout>
    <Wrapper>
      <div>
        <Text size="title">
          <span class="animate__animated animate__fadeInDown">
            {{ i18n.t("header") }}
          </span>
        </Text>
        <div class="p-10"></div>
      </div>
      <div class="flex flex-col gap-12">
        <div class="flex flex-col gap-6">
          <Text size="heading">{{ i18n.t("text1") }}</Text>

          <div class="flex gap-6 flex-col md:flex-row">
            <a
              href="https://ik0l1b2fghp.typeform.com/to/rCLm4h5t"
              target="_blank"
            >
              <Button type="primary"> {{ i18n.t("questionnaire") }} </Button>
            </a>
            <a href="mailto:contact@csol.dev">
              <Button> Via Email </Button>
            </a>
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <Text size="heading">{{ i18n.t("text2") }}</Text>

          <div class="flex flex-col gap-2">
            <div class="flex border-b border-slate-200">
              <Text type="heading"> Joshua Köck </Text>

              <div class="ml-auto">+49 1523 8448010</div>
            </div>
            <div class="flex border-b border-slate-200">
              <Text type="heading"> Noah Cofie </Text>
              <div class="ml-auto">+49 171 6140016</div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-10"></div>
    </Wrapper>
  </Layout>
</template>

<script setup>
import { useI18n } from "#i18n";
const i18n = useI18n();
</script>

<i18n lang="json">
{
  "de": {
    "header": "Kontakt",
    "text1": "Schreiben Sie uns",
    "text2": "Sprechen Sie mit uns",
    "questionnaire": "Via Fragebogen"
  },
  "en": {
    "header": "Contact",
    "text1": "Write us",
    "text2": "Let's talk",
    "questionnaire": "Via Questionnaire"
  }
}
</i18n>
