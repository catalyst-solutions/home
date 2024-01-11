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
            <NuxtLink to="https://calendly.com/csol-meeting/30min">
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
            title: "Corporate Site",
            description: "für Unternehmen & Betriebe",
            bulletpoints: [
              "Einheitliche und zielgruppenorientierte und Markenkommunikation",
              "Landingpage zur effektiven Bewerbung von Dienstleistungen oder Produkten",
              "Online-Terminvereinbarung für Zeitersparnis in der Arbeitsorganisation",
              "Sonstige Seiten- und Layoutgestaltung individuell",
            ],
            inquire: "#",
          },

          {
            title: "eCommerce Shop",
            description: "für den Onlinehandel",
            bulletpoints: [
              "Conversionsstarke Shop-Oberfläche",
              "Maximale Betriebssicherheit und Skalierbarkeit",
              "Integriertes Bestell- und Versandsystem",
              "Mehrere Zahlungsmethoden",
              "Kundenbewertungen und Feedback-Management",
            ],
            inquire: "#",
          },

          {
            title: "Performance Hosting",
            description: "für Wordpress-Seiten",
            bulletpoints: [
              "Einrichtung einer leistungsstarken Linux VM auf Google Cloud Servern",
              "Optimierungen für schnellere Ladezeiten von Seiten und Bildern",

              "Automatisierte Backuplösung",
              "24/7 Kundensupport für Hosting-bezogene Anfragen",
            ],
            inquire: "#",
          },
        ],

        en: [
          {
            title: "Corporate Site",
            description: "for companies & businesses",
            bulletpoints: [
              "Consistent and target group-oriented brand communication",
              "Individual page and layout design",
              "Landing page for effective promotion of services or products",
              "Online appointment scheduling for time savings in work organization",
            ],
            inquire: "#",
          },

          {
            title: "eCommerce Shop",
            description: "for online commerce",
            bulletpoints: [
              "Conversion-strong shop interface",
              "Maximum operational safety and scalability",
              "Integrated ordering and shipping system",
              "Multiple payment methods",
              "Customer reviews and feedback management",
            ],
            inquire: "#",
          },

          {
            title: "Performance Hosting",
            description: "for WordPress sites",
            bulletpoints: [
              "Setup of high-performance Linux VM on Google Cloud servers",
              "Optimized loading times for pages and images",
              "Automated backup solution",
              "24/7 customer support for hosting-related inquiries",
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
    "inquire": "→ Inital interview",
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
