<template>
    <navbar />
    <service />
    <info />
    <footers />
</template>
<script>
import navbar from '@/components/navbar.vue';
import service from '@/components/service.vue';
import info from '@/components/info.vue';
import footers from '@/components/footer.vue';
export default {
    components:{
        navbar,
        service,
        info,
        footers,
    }
    
}
</script>