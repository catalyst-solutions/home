<template>
  <Wrapper v-if="entry">
    <div class="flex flex-col gap-20">
      <TextLink to="/studies">
        <div class="flex items-center gap-2">
          <Icon icon="arrow_back" />
          Case studies
        </div>
      </TextLink>
      <div class="flex flex-col">
        <Text size="title">
          <span class="animate__animated animate__fadeInDown">
            {{ entry.getField("title") }}
          </span>
        </Text>
        <Text size="title-gray">
          <span class="animate__animated animate__fadeInDown animate__delay-1s">
            {{ entry.getField("subtitle") }}
          </span>
        </Text>

        <div class="flex grid grid-cols-2 mt-20">
          <div class="flex flex-col">
            <Text size="heading">Written by</Text>
            <Text> {{ entry.getField("published_by") }}</Text>
          </div>

          <div class="flex flex-col">
            <Text size="heading">Published</Text>
            <Text> {{ entry.getField("published_at") }}</Text>
          </div>
        </div>
      </div>

      <Image :src="entry.getField('header_image').source_url"></Image>
      <div v-for="i in entry.fields.sections.entries">
        <Image
          v-if="i.fields.image[$i18n.locale]"
          :src="i.fields.image[$i18n.locale].source_url"
        ></Image>
        <div
          class="grid grid-cols-2 border-b pb-20"
          v-if="i.fields.text[$i18n.locale]"
        >
          <Text size="heading">
            {{ i.fields.title[$i18n.locale] }}
          </Text>
          <Text>
            {{ i.fields.text[$i18n.locale] }}
          </Text>
        </div>
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
      entry: undefined,
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

    this.entry = await this.client.entries.get();
  },

  methods: {},
};
</script>
