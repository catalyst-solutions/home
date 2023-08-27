<template>
  <Wrapper>
    <!-- header-->
    <div class="flex flex-col gap-6 pb-6" style="min-height: 80vh">
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
      v-for="i in studies.data"
      :src="
        i.fields.header_img.value.asset
          ? i.fields.header_img.value.asset.source_url
          : ''
      "
      :title="i.fields.title[$i18n.locale]"
      :info="i.fields.subtitle[$i18n.locale]"
      :to="'/studies/' + i.fields.slug.value"
    >
    </Card>
  </div>

  <div v-if="loading" class="grid md:grid-cols-2 gap-2">
    <Loader style="min-height: 300px; min-width: 100%"></Loader>
    <Loader style="min-height: 300px; min-width: 100%"></Loader>
    <Loader style="min-height: 300px; min-width: 100%"></Loader>
    <Loader style="min-height: 300px; min-width: 100%"></Loader>

    <Loader style="min-height: 300px; min-width: 100%"></Loader>
  </div>

  <!-- how we work-->
  <div class="pt-10">
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
            {{ i18n.t("csolWay.steps.step3.text") }}
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
  "de": {
    "header": "Wir sind eine Design Agentur mit Fokus auf der Entwicklung von digitalen Unternehmensauftritten, die Kunden überzeugen",
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
  "en": {
    "header": "We are a design agency with a focus on developing digital corporate appearances that your clients will love",

    "csolWay": {
      "heading1": "It's hard to achieve great design",
      "heading2": "Luckily we have experience!",
      "steps": {
        "step1": {
          "title": "01 Planning",
          "text": "We'll talk about your goals via online or in-person meetings. In this phase, it's crucial to outline the scope of the project, so in this phase, we might come up with mood boards for instance."
        },
        "step2": {
          "title": "02 Research & Design",
          "text": "Our team will think about your project and finalize our concept. In this phase, we may show you initial prototypes for the final product."
        },

        "step3": {
          "title": "03 Development",
          "text": "Let's get to work! We will build out the agreed-on prototype. Once development is done we'll hand over the final product and continue to help with maintaining it."
        }
      }
    }
  }
}
</i18n>
<script>
import HudduClient from "huddu-node";
export default {
  data() {
    return {
      loading: true,
      client: undefined,
      studies: { data: [] },
    };
  },

  async mounted() {
    this.client = new HudduClient({
      token:
        "ot_9875a9188752bd4fa9c5db594f9bf99aff9ee70bd70a2ab61d7c2c5d067f0f13",
      project: "prj_d16a58832d3c4541926e1b7de6e67812",
      organization: "org_a1f85701a85149caa30e06cddff1f30a",

      environment: "main",
    });

    await this.client.init();
    this.getStudies();
  },
  methods: {
    async getStudies() {
      this.studies = await this.client.entries.list();
      this.loading = false;
    },
  },
};
</script>
