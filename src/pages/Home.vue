<template>
    <hero />
    <service />
    <about />
    <why />
    <teamCard />
    <client />
    <info />
   <footers />
  </template>
  <script>
  import hero from '@/components/hero.vue'
  import service from '@/components/service.vue'
  import about from '@/components/about.vue'
  import why from '@/components/why.vue'
  import teamCard from '@/components/teamComponents.vue'
  import client from '@/components/client.vue'
  import info from '@/components/info.vue'
  import footers from '@/components/footer.vue'
  export default {
    components: {
      hero,
      service,
      about,
      why,
      teamCard,
      client,
      info,
      footers,
    }
    
  }
  </script>