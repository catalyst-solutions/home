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
          v-for="i in products[$i18n.locale]"
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
          <div class="flex flex-wrap gap-4">
            <NuxtLink v-if="i.demo" :to="i.demo">
              <Button> {{ i18n.t("demo") }} </Button>
            </NuxtLink>
            <NuxtLink to="/contact">
              <Button type="primary">
                {{ i18n.t("inquire") }}
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
</script>

<script>
export default {
  data() {
    return {
      products: {
        de: [
          {
            title: "Speisekarte",
            description: "für Cafés & Restaurants",
            bulletpoints: [
              "Einfache Integration von zeitlich begrenzten Angeboten und Aktionen",
              "Einbindung von interaktiven Elementen und Bildern für jedes Gericht",
              "Kunden können sich vorab von Ihren Speisen überzeugen",
            ],
            demo: "#",
          },

          {
            title: "Terminbuchung",
            description: "Terminbuchung für Unternehmen",
            bulletpoints: [
              "Kunden können Termine unabhängig von den Geschäftszeiten bequem online buchen",
              "Bestätigungs- und Erinnerungsnachrichten reduzieren Terminausfälle",
              "Bessere Übersicht und Koordination der Arbeitsabläufe",
            ],
            demo: "#",
          },

          {
            title: "Maßgeschneidere Entwicklung",
            description: "- the sky's the limit",
            bulletpoints: [
              "Responsive Design",
              "SEO-Optimierung",
              "Nutzerfreundliche interne Backend (für einfache Selbstverwaltung von beispielsweise Waaren)",
              "IT-Sicherheitskonzept (automatisierte Backups, Malwarescans etc.)",
              "Und vieles mehr...",
            ],
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
            demo: "#",
          },

          {
            title: "Appointment booking",
            description: "Appointment booking for companies",
            bulletpoints: [
              "Customers can easily book appointments online, regardless of business hours",
              "Confirmation and reminder messages reduce appointment cancellations",
              "Better overview and coordination of work processes",
            ],
            demo: "#",
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
    "heading": "What we have to offer:",
    "inquire": "Let's talk",
    "demo": "View demo"
  },
  "de": {
    "heading": "Wir können...",
    "inquire": "Anfrage stellen",
    "demo": "Interaktive Demo"
  }
}
</i18n>
