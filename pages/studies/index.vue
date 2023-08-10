<template>
  <div class="flex flex-col gap-20">
    <Wrapper>
      <Text size="title"> {{ i18n.t("header") }} </Text>
    </Wrapper>
    <input
      v-model="search"
      placeholder="Search..."
      class="bg-transparent border-b focus:border-black focus:outline-none focus:ring-b focus:ring-black p-6"
      @change="getStudies()"
    />

    <div class="grid md:grid-cols-2">
      <Card
        v-for="i in studies.data"
        :src="
          i.fields.header_image[$i18n.locale]
            ? i.fields.header_image[$i18n.locale].source_url
            : ''
        "
        :title="i.fields.title[$i18n.locale]"
        :info="i.fields.subtitle[$i18n.locale]"
        :to="'/studies/' + i.fields.slug[$i18n.locale]"
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
    <div v-if="!studies.length" class="flex">
      <div class="text-center m-auto flex flex-col gap-6 w-80 items-center">
        <Text> {{ i18n.t("noStudies") }}</Text>
        <Button
          @click="
            search = '';
            getStudies();
          "
        >
          {{ i18n.t("noStudiesButton") }}</Button
        >
      </div>
    </div>
    <div class="p-10"></div>
  </div>
</template>

<script setup>
import { useI18n } from "#i18n";
const i18n = useI18n();
</script>

<script>
import HudduClient from "huddu-node";
export default {
  data() {
    return {
      loading: true,
      client: undefined,
      studies: { data: [] },
      search: "",
    };
  },

  async mounted() {
    this.client = new HudduClient({
      token:
        "ot_9875a9188752bd4fa9c5db594f9bf99aff9ee70bd70a2ab61d7c2c5d067f0f13",
      project: "prj_5a4bf284740e436bb16b0af17e566ccc",
      organization: "org_a1f85701a85149caa30e06cddff1f30a",

      environment: "main",
      locale: this.$i18n.locale,
    });

    await this.client.init();
    this.getStudies();
  },
  methods: {
    async getStudies() {
      this.studies.data = [];
      this.loading = true;
      let filter = {};
      let fieldName = `fields.title.${this.$i18n.locale}`;
      filter[fieldName] = {
        $regex: this.search,
      };

      this.studies = await this.client.entries.list({
        filter,
      });
      this.loading = false;
    },
  },
};
</script>

<i18n lang="json">
{
  "en": {
    "header": "Read about our prior work",
    "noStudies": "No studies found for your search. Have another go!",
    "noStudiesButton": "Reset Search"
  },
  "de": {
    "header": "Lesen sie über unsere Projekte",
    "noStudies": "Keine Fallstudien gefunden. Versuchen Sie es nochmal",
    "noStudiesButton": "Suche zurücksetzen"
  }
}
</i18n>
