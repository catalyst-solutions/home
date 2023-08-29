<template>
  <Wrapper v-if="entry.fields">
    <div class="flex flex-col gap-28">
      <div class="text-white flex flex-col gap-20 h-screen">
        <div
          style="
            min-width: 100vw;
            min-height: 100vh;
            background-size: cover;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
          "
          :style="
            'background-image:url(' +
            entry.fields.header_img.value.asset.source_url +
            ')'
          "
        ></div>

        <TextLink to="/studies" mode="dark">
          <div class="flex items-center gap-2">
            <Icon icon="arrow_back" />
            {{ i18n.t("caseStudies") }}
          </div>
        </TextLink>
        <div class="flex flex-col">
          <Text size="title" mode="dark">
            <span class="animate__animated animate__fadeInDown">
              {{ entry.fields.title[$i18n.locale] }}
            </span>
          </Text>
          <Text size="title-gray" mode="dark">
            <span
              class="animate__animated animate__fadeInDown animate__delay-1s"
            >
              {{ entry.fields.subtitle[$i18n.locale] }}
            </span>
          </Text>
        </div>
        <div class="flex grid md:grid-cols-2 mt-auto mb-20 gap-10">
          <div class="flex flex-col">
            <Text mode="dark" size="heading"> {{ i18n.t("writenBy") }}</Text>
            <Text mode="dark">
              {{ entry.fields.written_by[$i18n.locale] }}</Text
            >
          </div>

          <div class="flex flex-col">
            <Text mode="dark" size="heading"> {{ i18n.t("published") }}</Text>
            <Text mode="dark">
              {{ entry.fields.published_at[$i18n.locale] }}</Text
            >
          </div>
        </div>
      </div>

      <div class="flex grid xl:grid-cols-2 gap-10">
        <Text size="title"> {{ entry.fields.summary[$i18n.locale] }}</Text>
        <div class="flex flex-wrap gap-2">
          <Badge v-for="i in entry.fields.tags[$i18n.locale].split(',')">
            {{ i }}
          </Badge>
        </div>
      </div>

      <div
        v-for="i in entry.fields.sections.entries"
        class="grid xl:grid-cols-2 gap-10"
      >
        <div
          v-if="
            i.entry.fields.image.value &&
            images[i.entry.fields.image.value.asset] &&
            images[i.entry.fields.image.value.asset].source_url
          "
        ></div>

        <div
          class="flex flex-col gap-6 pb-20"
          v-if="i.entry.fields.text[$i18n.locale]"
        >
          <div v-if="i.entry.fields.image.value">
            <div style="display: none">
              {{ getImage(i.entry.fields.image.value.asset) }}
            </div>
          </div>
          <Text size="heading">
            {{ i.entry.fields.title[$i18n.locale] }}
          </Text>
          <Text>
            <div v-html="i.entry.fields.text[$i18n.locale]"></div>
          </Text>
        </div>

        <Image
          v-if="
            i.entry.fields.image.value &&
            images[i.entry.fields.image.value.asset] &&
            images[i.entry.fields.image.value.asset].source_url
          "
          :src="images[i.entry.fields.image.value.asset].source_url"
        ></Image>
      </div>
    </div>
    <div class="p-10"></div>
  </Wrapper>
</template>

<script>
import HudduClient from "huddu-node";
export default {
  data() {
    return {
      client: undefined,
      entry: {},
      images: {},
    };
  },
  methods: {
    async getImage(id) {
      if (!this.images[id]) {
        this.images[id] = await this.client.assets.get({
          filter: {
            id,
          },
        });
      }
      return "";
    },
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

    let filter = {};

    filter["fields.slug.value"] = this.$route.params.id;
    this.entry = await this.client.entries.get({ filter });
  },
};
</script>

<script setup>
import { useI18n } from "#i18n";
const i18n = useI18n();
</script>
<i18n lang="json">
{
  "en": {
    "caseStudies": "Case studies",
    "writenBy": "Writen by",
    "published": "Published on"
  },
  "de": {
    "caseStudies": "Fallstudien",
    "writenBy": "Geschrieben von",
    "published": "Veröffentlicht am"
  }
}
</i18n>
