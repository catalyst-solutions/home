<template>
  <Layout :mode="mode">
    <Wrapper>
      <!-- header-->
      <div class="flex flex-col gap-6 pb-6" style="min-height: 100vh">
        <div class="flex flex-col gap-6">
          <div class="flex flex-col" style="max-width: 1200px">
            <Text size="title" :mode="mode">
              {{ i18n.t("header") }}
            </Text>
          </div>
          <div class="flex gap-4">
            <NuxtLink to="/contact">
              <Button :mode="mode" type="primary">{{
                i18n.t("letsTalk")
              }}</Button>
            </NuxtLink>
            <NuxtLink to="/studies">
              <Button :mode="mode">{{ i18n.t("priorProjects") }}</Button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </Wrapper>

    <Wrapper>
      <div id="darkmode-toggle" class="grid">
        <NuxtLink
          :to="'/studies/' + i.fields.slug.value"
          v-for="i in studies.data"
        >
          <div
            class="studies-table border-b py-4 flex flex-col md:flex-row md:gap-10 gap-2 md:items-center"
          >
            <Text :mode="mode">{{ i.fields.title[$i18n.locale] }}</Text>
            <div class="relative hidden md:block" style="width: 200px">
              <img :src="i.fields.header_img.value.asset.source_url" />
            </div>
            <div class="md:ml-auto flex flex-wrap gap-2">
              <Badge
                :mode="mode"
                v-for="i in i.fields.tags[$i18n.locale].split(',').slice(0, 3)"
                >{{ i }}</Badge
              >
            </div>
          </div>
        </NuxtLink>
      </div>
      <div v-if="loading" class="grid gap-2">
        <Loader style="height: 50px; width: 100%"></Loader>
        <Loader style="height: 50px; width: 100%"></Loader>
        <Loader style="height: 50px; width: 100%"></Loader>
        <Loader style="height: 50px; width: 100%"></Loader>

        <Loader style="height: 50px; width: 100%"></Loader>
      </div>

      <!-- how we work-->
      <div class="pt-20">
        <Text :mode="mode" size="title-gray">
          {{ i18n.t("csolWay.heading1") }}
        </Text>
        <Text :mode="mode" size="title"> {{ i18n.t("csolWay.heading2") }}</Text>
        <div class="p-10"></div>

        <div class="flex flex-col gap-12">
          <div
            class="grid lg:grid-cols-2 border-b border-slate-200 pb-12 items-center gap-6"
          >
            <div class="w-1/3">
              <Badge :mode="mode"
                ><div class="text-2xl">
                  {{ i18n.t("csolWay.steps.step1.title") }}
                </div>
              </Badge>
            </div>

            <Text :mode="mode">
              {{ i18n.t("csolWay.steps.step1.text") }}
            </Text>
          </div>

          <div
            class="grid lg:grid-cols-2 border-b border-slate-200 pb-12 items-center gap-6"
          >
            <Badge :mode="mode"
              ><div class="text-2xl">
                {{ i18n.t("csolWay.steps.step2.title") }}
              </div>
            </Badge>

            <Text :mode="mode">
              {{ i18n.t("csolWay.steps.step2.text") }}
            </Text>
          </div>

          <div class="grid lg:grid-cols-2 pb-12 items-center gap-6">
            <Badge :mode="mode"
              ><div class="text-2xl">
                {{ i18n.t("csolWay.steps.step3.title") }}
              </div>
            </Badge>

            <Text :mode="mode">
              {{ i18n.t("csolWay.steps.step3.text") }}
            </Text>
          </div>
        </div>
      </div>
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
    "letsTalk": "Buchen Sie uns",
    "priorProjects": "Unsere Projekte",
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
    "letsTalk": "Let's talk",
    "priorProjects": "Prior projects",
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
      mode: "dark",
    };
  },

  async mounted() {
    this.client = new HudduClient({
      token:
        "ot_9875a9188752bd4fa9c5db594f9bf99aff9ee70bd70a2ab61d7c2c5d067f0f13",
      project: "prj_d16a58832d3c4541926e1b7de6e67812",
      organization: "org_a1f85701a85149caa30e06cddff1f30a",

      environment: "env_5dcd02ed243a47d8b6b2219a87a3dfe5",
    });

    await this.client.init();
    this.getStudies();
    this.checkMode();
  },
  created() {
    if (process.browser) {
      window.addEventListener("scroll", this.checkMode);
    }
  },
  unmounted() {
    window.removeEventListener("scroll", this.checkMode);
  },

  methods: {
    checkMode(_e) {
      let rect = document
        .getElementById("darkmode-toggle")
        .getBoundingClientRect();

      if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      ) {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    },
    async getStudies() {
      this.studies = await this.client.entries.list({
        filter: {
          model: "mdl_fe00465f441d47e196a15b42f64be6de",
        },
      });
      this.loading = false;
    },
  },
};
</script>

<style>
.studies-table img {
  top: -50%;
  transform: translate(0, -50%);
  left: 0;
  position: absolute;

  z-index: 1;
  width: 200px;
  opacity: 0;
  transition: 0.3s ease;
}

.studies-table:hover img {
  transition: 0.3s ease;
  opacity: 0.5 !important;
}
</style>
