<template>
    <section>
        <breadCrumb :titlebreadcrumb="'Categories'" />
        <FilterProducts/>
    </section>
</template>

<script>
import breadCrumb from '@/components/BreadCrumb.vue'
import FilterProducts from './ProductsCategory.vue'
export default{
    name:'CategoryView',
    components:{
        breadCrumb,
        FilterProducts
    }
}
</script>