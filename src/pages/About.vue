<template>
    <navbar />
    <about />
    <info />
    <footers />
</template>
<script>
import navbar from '@/components/navbar.vue'
import footers from '@/components/footer.vue'
import about from '@/components/about.vue'
import info from '@/components/info.vue'
export default {
    components:{
        navbar,
        footers,
        about,
        info,
    }
}
</script>