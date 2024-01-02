<template>
  <Layout>
    <Wrapper>
      <div>
        <Text size="title"> {{ i18n.t("heading") }} </Text>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-3 gap-10 mt-10">
        <div
          class="border border-gray-300 p-4 rounded flex flex-col gap-6"
          v-if="i18n.locale"
          v-for="i in websites[$i18n.locale]"
        >
          <div class="flex flex-col gap-2">
            <Text size="heading">{{ i.title }}</Text>
            <Badge>{{ i.description }}</Badge>
          </div>
          <div class="border-b border-slate-300"></div>
          <Text>
            <ul class="list-disc ml-10">
              <li v-for="i in i.bulletpoints">{{ i }}</li>
            </ul>
          </Text>

          <div class="mt-auto"></div>
          <div class="flex items-center justify-center mb-4">
            <NuxtLink to="/contact">
              <Button type="primary">
                {{ isMobile ? i18n.t("inquireShort") : i18n.t("inquire") }}
              </Button>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="p-20"></div>
    </Wrapper>
  </Layout>
</template>

<script setup>
import { useI18n } from "#i18n";
const i18n = useI18n();
const isMobile = process.client && window.innerWidth <= 640; // Breakpoint
</script>

<script>
export default {
  data() {
    return {
      websites: {
        de: [
          {
            title: "Buisness Solo",
            description: "für Einzelunternehmen",
            bulletpoints: [
              "Schnelle Ladezeiten",
              "Responsive Design",
              "Bis zu 3 Unterseiten",
              "Interaktives Kontaktformular",
              "DSGVO-konform",
            ],
            inquire: "csol.dev/contact",
          },

          {
            title: "Corporate",
            description: "für Betriebe & Unternehmen",
            bulletpoints: [
              "Layout- und Seitenkonzept nach Anforderungsanalyse",
              "Zielgruppenorientierte Markenkommunikation",
              "Online-Terminvereinbarung für Zeitersparnis in der Arbeitsorganisation",
            ],
            inquire: "#",
          },

          {
            title: "eCommerce",
            description: "für den Onlinehandel",
            bulletpoints: [
              "Google Cloud Infrastruktur für maximale Skalierbarkeit",
              "Conversionsstarke Shop-Oberfläche",
              "Zahlungsgateways (z.B. Paypal, Klarna & SEPA)",
              "Digitale Inventur",
            ],
            inquire: "#",
          },
        ],

        en: [
          {
            title: "Business Solo",
            description: "for sole proprietors",
            bulletpoints: [
              "Fast Loading Times",
              "Responsive Design",
              "Up to 3 Subpages",
              "Interactive Contact Form",
              "DSGVO Compliant",
            ],
            inquire: "csol.dev/contact",
          },

          {
            title: "Corporate",
            description: "for businesses & enterprises",
            bulletpoints: [
              "Layout and Page Concept based on Requirements Analysis",
              "Target Audience-Oriented Brand Communication",
              "Online Appointment Scheduling for Time Efficiency in Work Organization",
            ],
            inquire: "#",
          },

          {
            title: "eCommerce",
            description: "for online retail",
            bulletpoints: [
              "Google Cloud Infrastructure for Maximum Scalability",
              "High-Converting Shop Interface",
              "Payment Gateways (e.g., Paypal, Klarna & SEPA)",
              "Digital Inventory",
            ],
            inquire: "#",
          },
        ],
      },
    };
  },
};
</script>

<i18n lang="json">
{
  "en": {
    "heading": "Websites",
    "inquire": "Let's talk",
    "demo": "Demo"
  },
  "de": {
    "heading": "Webseiten",
    "inquire": "→  Kostenfreies Erstgespräch",
    "inquireShort": "→  Erstgespräch",
    "demo": "Demo"
  }
}
</i18n>
