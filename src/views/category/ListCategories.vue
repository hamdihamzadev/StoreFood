<template>
    <section>
        <b-container>
            <div class="px-lg-5">
                <h1 class="mb-5" ><strong>Categories</strong></h1>
                <b-row class="gy-4" >
                <b-col cols="3" v-for="item in linkCategories" :key="item.id">
                    <div class="overflow-hidden border border-black">
                        <img id="img-category" class="img-fluid" :src="item.img" alt="">
                        <div id="content" class="p-3" >
                            <h5 class="mb-3" ><strong>{{ item.namecategory }}</strong></h5>
                            <router-link 
                                tag="small" 
                                :to="`/${$route.params.storeName}/Categories/${item.namecategory}/${item.id}`">
                                See products
                            </router-link>
                        </div>
                    </div>
                </b-col>
                
            </b-row>
            </div>

        </b-container>
    </section>
</template>

<script>
    import {
        mapState,
        mapActions
    } from 'vuex';

    mapState
    export default {
        name: 'ListCategories',
        computed: {
            ...mapState('category', {
                linkCategories: state => state.categories
            }),
        },

        methods: {
            ...mapActions("category", {
                fetchCategories: 'ac_getCategories'
            })
        },

        mounted() {
            this.fetchCategories()
        }
    }
</script>


<style lang="scss" scoped>
    #img-category {
        height: 250px;
        width: 355px;
        object-fit: fill;

    }

    #content{
        background-color:black;
        color: white;
    }


</style>


