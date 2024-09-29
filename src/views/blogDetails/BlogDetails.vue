<template>
<section>
    <breadCrumb :titlebreadcrumb="'Blog Detail'" />
    <b-container class="px-lg-5" >
        hello
    </b-container>
</section>
</template>

<script>
import breadCrumb from '@/components/BreadCrumb.vue'
export default{
    name:'BlogDetail',
    components:{
        breadCrumb
    }
}
</script>

<style scoped>

</style>