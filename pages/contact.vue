<template>
  <Wrapper>
    <div>
      <Text size="title">
        <span class="animate__animated animate__fadeInDown">
          Schreiben Sie uns
        </span>
      </Text>
      <div class="p-10"></div>
    </div>
    <div class="flex flex-col gap-12">
      <div class="flex flex-col gap-6">
        <Text size="heading">Schreiben wir</Text>

        <div class="flex gap-6 flex-col md:flex-row">
          <Button type="primary"> Via Fragebogen </Button>
          <Button type="black"> Via Email </Button>
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <Text size="heading">Reden wir</Text>

        <div class="flex flex-col gap-2">
          <div class="flex border-b border-slate-200">
            <Text type="heading"> Joshua Köck </Text>

            <div class="ml-auto">23857982735987237895</div>
          </div>
          <div class="flex border-b border-slate-200">
            <Text type="heading"> Noah Cofie </Text>
            <div class="ml-auto">23857982735987237895</div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-10"></div>
  </Wrapper>
</template>
