<template>
  <Layout>
    <Wrapper class="flex flex-col gap-20">
      <Text size="title"> {{ i18n.t("header") }} </Text>

      <div class="flex flex-col">
        <input
          v-model="search"
          placeholder="Search..."
          class="bg-transparent border focus:border-black focus:outline-none focus:ring-b focus:ring-black p-6"
          @change="getStudies()"
        />

        <div class="grid border-r border-l">
          <NuxtLink
            :to="'/studies/' + i.fields.slug.value"
            v-for="i in studies.data"
          >
            <div
              class="studies-table border-b p-4 flex flex-col md:flex-row md:gap-10 gap-2 md:items-center"
            >
              <Text :mode="mode">{{ i.fields.title[$i18n.locale] }}</Text>
              <div class="relative hidden md:block" style="width: 200px">
                <img :src="i.fields.header_img.value.asset.source_url" />
              </div>
              <div class="md:ml-auto flex flex-wrap gap-2">
                <Badge
                  :mode="mode"
                  v-for="i in i.fields.tags[$i18n.locale]
                    .split(',')
                    .slice(0, 3)"
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
    </Wrapper>
    <div class="p-10"></div>
  </Layout>
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
      project: "prj_d16a58832d3c4541926e1b7de6e67812",
      organization: "org_a1f85701a85149caa30e06cddff1f30a",

      environment: "env_5dcd02ed243a47d8b6b2219a87a3dfe5",
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
        $options: "i",
      };
      filter.model = "mdl_fe00465f441d47e196a15b42f64be6de";

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
