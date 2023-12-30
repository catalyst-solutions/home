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
          <div class="flex items-center justify-left my-0 mb-5">
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
              "≤ 3 Unterseiten inklusive",
              "Schnelle Ladezeiten",
              "Responsive Design",
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
            description: "zum Onlinehandel",
            bulletpoints: [
              "Google Cloud Infrastruktur für maximale Skalierbarkeit",
              "Conversionsstarke Shop-Oberfläche",
              "Zahlungsgateways (z.B. Paypal, Klarna & SEPA)",
              "Digitales Bestandsmanagement",
            ],
            inquire: "#",
          },
        ],

        en: [
          {
            title: "Restaurant Menu",
            description: "perfect for coffee shops & restaurants",
            bulletpoints: [
              "Easy integration of time-limited offers and promotions",
              "Integration of interactive elements and images for each dish",
              "Customers can see your food for themselves in advance",
            ],
            inquire: "#",
          },

          {
            title: "Appointment booking",
            description: "Appointment booking for companies",
            bulletpoints: [
              "Customers can easily book appointments online, regardless of business hours",
              "Confirmation and reminder messages reduce appointment cancellations",
              "Better overview and coordination of work processes",
            ],
            inquire: "#",
          },

          {
            title: "Custom development",
            description: "- the sky's the limit",
            bulletpoints: [
              "Responsive design",
              "SEO-Optimization",
              "User-friendly internal backends (for simple inventory management for instance)",
              "IT security concepts (automatic backups, malewarescans, attack prevention etc.)",
              "and so much more...",
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
    "inquire": "Kostenfreies Erstgespräch",
    "inquireShort": "Erstgespräch",
    "demo": "Demo"
  }
}
</i18n>
