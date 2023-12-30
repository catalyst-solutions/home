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
      websites: {
        de: [
          {
            title: "Solo",
            description: "für Einzelunternehmen",
            bulletpoints: [
              "Für Mobilgeräte optimiert",
              "Profil",
              "Referenzen",
              "Kontaktformular",
              "DSGVO-Konformität",
            ],
            demo: "#",
          },

          {
            title: "Corporate",
            description: "für Betriebe & Unternehmen",
            bulletpoints: [
              "Strategische Identitätsbildung",
              "Individuelle Seiten- und Layoutgestaltung",
              "Digitale Terminvereinbarung",
              "Online-Support Automation mittels KI-Chatbot",
              "...",
            ],
            demo: "#",
          },

          {
            title: "eCommerce",
            description: "für den Onlinehandel",
            bulletpoints: [
              "Conversionstarkes Shop-Interface",
              "Warenkorb-Management",
              "Zahlungsgateways (z.B. Paypal & SEPA)",
              "Effizientes Bestandsmanagement",
              "...",
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
    "heading": "Websites",
    "inquire": "Let's talk",
    "demo": "Demo"
  },
  "de": {
    "heading": "Webseiten",
    "inquire": "Anfragen",
    "demo": "Demo"
  }
}
</i18n>
