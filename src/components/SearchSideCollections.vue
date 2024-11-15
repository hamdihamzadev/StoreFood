<template>
    <section>
        <b-container class="px-lg-5">
            <b-row class="gy-4 gy-lg-0">
                <b-col lg="3">
                    <div id="sidebar-categories" class="position-relative">
                        <b-button v-b-toggle.collapse-1 variant="primary"
                            class="d-flex align-items-center justify-content-between gap-2 w-100 px-4 border-0  ">
                            <b-icon icon="list" aria-hidden="true"></b-icon>
                            <strong>All departements </strong>
                            <b-icon icon="chevron-down" aria-hidden="true"></b-icon>
                        </b-button>
                        <b-collapse id="collapse-1" class="mt-2 position-absolute z-3 w-100">
                            <b-card class="px-2">
                                <nav class="d-flex flex-column gap-3 ">
                                    <router-link 
                                        v-for="item in linkCategories" 
                                        :key="item.id" 
                                        :to="`/${$route.params.storeName}/Categories/${item.namecategory}/${item.id}`" 
                                        tag="li">
                                        <a href="">{{ item.namecategory }}</a>
                                    </router-link>
                                </nav>
                            </b-card>
                        </b-collapse>
                    </div>
                </b-col>

                <b-col lg="9">
                    <b-row id="top">
                        <b-col lg="9" id="search">
                            <b-form class="d-flex h-100" id="form">
                                <b-form-input class="rounded-0 " id="inline-form-input-name"
                                    placeholder="ENTER YOUR EMAIL"></b-form-input>
                                <b-button id="btn-search" class="rounded-0 border-0" variant="primary">
                                    <strong>SUBSCRIBE</strong></b-button>
                            </b-form>
                        </b-col>
                        <b-col class="mt-4 mt-lg-0" lg="3">
                            <div class="d-flex align-items-center justify-content-lg-end gap-3">
                                <b-icon id="icon-phone" icon="telephone-fill" scale="0.5" class="rounded-circle p-2"
                                    aria-hidden="true"></b-icon>
                                <p class="d-flex flex-column"><strong>+65 11.188.888</strong> <span
                                    class="fs-14">support 24/7 time</span>
                                 </p>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>

            </b-row>
        </b-container>
    </section>
</template>

<script>
    import {
        mapState,
        mapActions
    } from 'vuex';
    export default {
        name: 'SearchSideCollections',

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

        mounted(){
            this.fetchCategories()
            console.log(this.allcategories)
        }
    }
</script>

<style scoped>
    #sidebar-categories {
        button {
            background-color: var(--thirday-color);
            padding-block: 12px;

        }
    }

    #search {
        #form {
            input:focus {
                box-shadow: none;
                border-color: var(--paragraph-color)
            }

            #btn-search {
                background-color: var(--thirday-color);
            }

        }
    }

    #icon-phone {
        background-color: var(--secondary-color);
        color: var(--thirday-color);
        font-size: xxx-large;
    }
</style>