<template>
    <navbar />
    <teamCard />
    <footers />
</template>
<script>
import teamCard from '@/components/teamCard.vue';
import navbar from '@/components/navbar.vue';
import footers from '@/components/footer.vue';
export default {
   
    components: {
        navbar,
        teamCard,
        footers,
    }
    
}
</script>