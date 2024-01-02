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
          v-for="i in marketing[$i18n.locale]"
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
      marketing: {
        de: [
          {
            title: "Branding",
            description: "Identität mit Strategie.",
            bulletpoints: [
              "Entwicklung einer starken Markenidentität",
              "Markenrichtlinien für visuelle Kohärenz",
              "Strategien zur Differenzierung von Wettbewerbern",
              "Sammlung von Logos und Designelementen",
            ],
            inquire: "csol.dev/contact",
          },

          {
            title: "SEO",
            description: "Online besser gefunden werden.",
            bulletpoints: [
              "Website-Audit zur Identifizierung von Stärken und Schwächen",
              "Technische Optimierung für eine bessere Website-Performance",
              "Keyword-Recherchen für relevante Suchbegriffe",
              "Laufendes Monitoring und Anpassung der Strategie ",
            ],
            inquire: "#",
          },

          {
            title: "Werbung",
            description: "Mehr Reichweite, mehr Kunden.",
            bulletpoints: [
              "Social Media Marketing (SMM) für zielgerichtete Kampagnen",
              "Search Engine Advertising (SEA) für sofortige Sichtbarkeit",
              "Kampagnenmanagement für effektive Reichweite und Kundenakquise",
              "Erfolgsmessung und Optimierung",
            ],
            inquire: "#",
          },
        ],

        en: [
          {
            title: "Branding",
            description: "Corporate identity strategy",
            bulletpoints: ["..."],
            inquire: "csol.dev/contact",
          },

          {
            title: "SEO",
            description: "Boost online visibility",
            bulletpoints: ["..."],
            inquire: "#",
          },

          {
            title: "Campaigns",
            description: "Get high-quality leads",
            bulletpoints: ["..."],
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
    "heading": "Marketing",
    "inquire": "→ Let's talk",
    "demo": "Demo"
  },
  "de": {
    "heading": "Marketing",
    "inquire": "→  Kostenfreies Erstgespräch",
    "inquireShort": "→  Erstgespräch",
    "demo": "Demo"
  }
}
</i18n>
