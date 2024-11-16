<template>
    <section id="filter-product" class="mt-5 ">
        <b-container class="px-lg-5">
            <b-row>
                <!--  filter laptop start  -->
                <b-col lg="3" class="mb-4 d-none d-lg-block ">
                    <div class="card h-100 w-100 p-2">
                        <div class="card-body">
                            <h3 class="card-title fw-bold mb-4"><strong>Filtres</strong></h3>
                            <div class="mb-3">
                                <div id="sidebar-categories">
                                    <b-button v-b-toggle.collapse-2 id="btn-collpase"
                                        class="d-flex align-items-center justify-content-between gap-2 w-100 px-4 border-0  ">
                                        <b-icon icon="list" aria-hidden="true"></b-icon>
                                        <strong>Categories</strong>
                                        <b-icon icon="chevron-down" aria-hidden="true"></b-icon>
                                    </b-button>
                                    <b-collapse visible id="collapse-2" class="mt-2 w-100">
                                        <b-card class="px-2">

                                            <router-link v-for="item in linkCategories" :key="item.id"
                                                :to="`/${$route.params.storeName}/Categories/${item.namecategory}/${item.id}`"
                                                tag="li">
                                                <a href="" :class="{'fw-bold':item.id===$route.params.id}"
                                                    class="d-block mb-2">
                                                    {{ item.namecategory }}
                                                </a>
                                            </router-link>

                                        </b-card>
                                    </b-collapse>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="prixMin" class="form-label">Prix minimum</label>
                                <input type="range" class="form-range" id="prixMin" v-model="gammePrice[0]" min="0"
                                    max="200">
                                <label for="prixMax" class="form-label">Prix maximum</label>
                                <input type="range" class="form-range" id="prixMax" v-model="gammePrice[1]" min="0"
                                    max="200">
                                <div class="d-flex justify-content-between">
                                    <span>{{ gammePrice[0] }}€</span>
                                    <span>{{ gammePrice[1] }}€</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" v-model="enStock" id="enStock">
                                    <label class="form-check-label" for="enStock">
                                        En stock uniquement
                                    </label>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Note minimale</label>
                                <div class="btn-group" role="group">
                                    <button v-for="note in 5" :key="note" @click="setNoteMinimale(note)"
                                        :class="['btn', note <= noteMinimale ? 'btn-primary' : 'btn-outline-primary']">
                                        {{ note }}
                                    </button>


                                </div>

                            </div>
                            <div class="mb-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" v-model="trierParCommandes"
                                        id="trierParCommandes">
                                    <label class="form-check-label" for="trierParCommandes">
                                        Trier par les plus commandés
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-col>
                <!--  filter laptop end  -->

                <!-- Zone de contenu principal -->
                <b-col lg="9">

                    <b-row class="mb-4 ">
                        <b-col cols="6">
                            <h2 class="fw-bold">
                                <strong id="namecategory"
                                    class="d-block text-black">{{ $route.params.namecategory.toUpperCase() }}</strong>
                            </h2>
                        </b-col>
                        <b-col cols="6" class="d-flex align-items-center justify-content-end">
                            <p class="text-secondary">
                                <strong class="text-dark">
                                    {{ produitsFiltres.length}}
                                </strong>
                                Products found
                            </p>
                        </b-col>
                        <b-col cols="6" class="d-flex align-items-center mt-4 ">
                            <b-button v-b-toggle.sidebarFilter
                                class=" d-lg-none d-flex align-items-center gap-2 h-max-content">Filter<b-icon
                                    icon="filter-square-fill" aria-hidden="true"></b-icon>
                            </b-button>
                        </b-col>
                        <b-col cols="6" class="d-flex align-items-center justify-content-end d-md-none mt-4">
                            <div class="fs-5">
                                <b-button class="p-0 me-2 bg-transparent text-dark border-0"
                                    @click="gridProducts('grid')">
                                    <b-icon icon="grid" aria-hidden="true"></b-icon>
                                </b-button>
                                <b-button class="p-0 bg-transparent text-dark border-0" @click="listProducts('list')">
                                    <b-icon icon="list-ul" aria-hidden="true"></b-icon>
                                </b-button>
                            </div>
                        </b-col>
                    </b-row>

                    <!-- side bar filter in phone and ipad start -->
                    <b-sidebar id="sidebarFilter" shadow>
                        <div class="px-4 py-2 d-flex flex-column ">
                            <div class="card">
                                <div class="card-body">
                                    <h3 class="card-title fw-bold mb-4"><strong>Filtres</strong></h3>
                                    <div class="mb-3">
                                        <div id="sidebar-categories">
                                            <b-button v-b-toggle.collapse-2 variant="primary"
                                                class="d-flex align-items-center justify-content-between gap-2 w-100 px-4 border-0  ">
                                                <b-icon icon="list" aria-hidden="true"></b-icon>
                                                <strong>Categories</strong>
                                                <b-icon icon="chevron-down" aria-hidden="true"></b-icon>
                                            </b-button>
                                            <b-collapse visible id="collapse-2" class="mt-2 w-100">
                                                <b-card class="px-2">
                                                    <nav class="d-flex flex-column gap-3 ">
                                                        <router-link v-for="item in linkCategories" :key="item.id"
                                                            :to="item.path" tag="li">
                                                            <a @click="getPathCategory()" href="">{{ item.text }}</a>
                                                        </router-link>
                                                    </nav>
                                                </b-card>
                                            </b-collapse>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="prixMin" class="form-label">Prix minimum</label>
                                        <input type="range" class="form-range" id="prixMin" v-model="gammePrice[0]"
                                            min="0" max="200">
                                        <label for="prixMax" class="form-label">Prix maximum</label>
                                        <input type="range" class="form-range" id="prixMax" v-model="gammePrice[1]"
                                            min="0" max="200">
                                        <div class="d-flex justify-content-between">
                                            <span>{{ gammePrice[0] }}€</span>
                                            <span>{{ gammePrice[1] }}€</span>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" v-model="enStock"
                                                id="enStock">
                                            <label class="form-check-label" for="enStock">
                                                En stock uniquement
                                            </label>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Note minimale</label>
                                        <div class="btn-group" role="group">
                                            <button v-for="note in 5" :key="note" @click="setNoteMinimale(note)"
                                                :class="['btn', note <= noteMinimale ? 'btn-primary' : 'btn-outline-primary']">
                                                {{ note }}
                                            </button>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" v-model="trierParCommandes"
                                                id="trierParCommandes">
                                            <label class="form-check-label" for="trierParCommandes">
                                                Trier par les plus commandés
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-sidebar>
                    <!-- side bar filter in phone and ipad end -->

<p>{{ produitsFiltres }}</p>

                    <b-row class="g-4" id="products">
                        <b-col :cols="displayProducts" md="4" v-for="product in allProducts" :key="product.id">
                            <b-card class="position-relative">
                                <p 
                                        v-if="product.promotion.priceAfter!==0" 
                                        class="bg-danger p-2 position-absolute text-white"
                                        style="width: fit-content;">
                                        -{{ product.promotion.percentage }}%
                                    </p> 
                                <img class="mb-3 w-100" :src="product.imgs[0]" alt="">
                                <b-card-text class="mt-2">
                                    <!-- NAME -->
                                    <router-link 
                                        tag="a" 
                                        :to="`/${$route.params.storeName}/${product.name}/${product._id}`">
                                        <p class=" mb-1">
                                            <strong>{{product.name}}</strong>
                                        </p>
                                    </router-link>

                                   <!-- PRICE -->
                                    <div class="mb-3">
                                        <div  v-if="product.promotion.priceAfter!==0"  class="d-flex align-items-center gap-2">
                                            <p class="fs-5 text-danger mb-0"><strong>{{ product.promotion.priceAfter  }}€</strong></p>
                                            <p class="mb-0 text-decoration-line-through" >{{ product.price }}€</p>
                                        </div>
                                        <div v-else class="d-flex align-items-center gap-2">
                                            <p class="fs-5 mb-0"><strong>{{ product.price }}€</strong></p>
                                        </div>

                                        <!-- REVIEW -->
                                        <div>
                                            <b-icon v-for="etoile in 5" :key="etoile"
                                                :icon="etoile <= product.reviews ? 'star-fill' : 'star'"
                                                :variant="etoile <= product.reviews ? 'warning' : 'secondary'">
                                            </b-icon>
                                        </div>
                                    </div>
                                </b-card-text>

                              
                                <div class="d-flex align-items-center justify-content-between gap-2">
                                    <!-- STOCK -->
                                    <p id="size-stock"
                                        :class="['card-text', product.quantity!==0 ? 'text-success' : 'text-danger']">
                                        {{ product.quantity!==0 ? 'In stock' : 'Out of stock' }}
                                    </p>
                                    <!-- ORDERS -->
                                    <span id="size-order" class="ms-2 text-muted">
                                        ({{ product.orders }} Orders)

                                    </span>
                                </div>
                            </b-card>

                        </b-col>

                    </b-row>

              

                </b-col>


            </b-row>



        </b-container>
    </section>
</template>

<script>
    import axios from 'axios';
import {
        mapState,
        mapActions
    } from 'vuex';

    export default {
        name: 'FilterProducts',
        data() {
            return {
                allProducts:[],
                categorySelected: {},

                // filter
                gammePrice: [0, 200],
                noteMinimale: 0,
                trierParCommandes: false,
                enStock: false,
                CategorySelected: [],
                namecategory: '',
                typeListingProducts: 'grid',

            }
        },

        computed: {

            ...mapState('category', {
                linkCategories: state => state.categories
            }),

            ...mapState('category', {
                products: state => state.products
            }),

            produitsFiltres() {

                return this.allProducts
                    .filter(product =>
                        product.price >= this.gammePrice[0] &&
                        product.price <= this.gammePrice[1] &&
                        product.reviews >= this.noteMinimale &&
                        (!this.enStock || product.quantity===0?false:true)
                    )
                    .sort((a, b) => this.trierParCommandes ? b.orders - a.orders : 0)

            },

            displayProducts() {
                const display = this.typeListingProducts === 'grid' ? 6 : 12
                return display
            }

        },


        methods: {

            getcategory(item) {
                this.categorySelected = item
            },
            setNoteMinimale(note) {
                this.noteMinimale = note === this.noteMinimale ? 0 : note
            },

            getPathCategory(id, name) {
                this.CategorySelected = this.productsCatgeories.filter(ele => ele.id === id)
                this.namecategory = name
            },
            gridProducts(grid) {
                this.typeListingProducts = grid
            },

            listProducts(list) {
                this.typeListingProducts = list
            },

            async getProductsCategory() {
                try {
                    const nameStore = this.$route.params.storeName
                    const id = this.$route.params.id
                    const response = await axios.get(`http://localhost:3000/api/product/productsCategory/${nameStore}/${id}`)
                    this.allProducts = response.data.products

                } catch (error) {
                    console.log(`error get all categories is ${error}`)
                }
            },

            ...mapActions("category", {
                fetchCategories: 'ac_getCategories'
            }),

        },

        watch: {
            '$route.params.id': {
                immediate: true,
                handler() {
                    this.getProductsCategory()
                },
            }
        },


        mounted() {
            this.fetchCategories()
            this.getProductsCategory()


        }


    }
</script>

<style scoped>
    ::v--deep .b-sidebar {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: auto;
        bottom: 0;
        width: 100%;
        height: 76vh;
        max-height: 100%;
        margin: 0;
        outline: 0;
        transform: translateX(0);
        border-radius: 5px;
    }

    ::v--deep .b-sidebar:not(.b-sidebar-right)>.b-sidebar-header .close {
        margin-left: auto;
        border: 1px solid #e0e0e0;
        border-radius: 3px;
    }

    #namecategory {
        width: max-content;
    }

    #namecategory::after {
        content: " ";
        height: 4px;
        display: block;
        background-color: var(--thirday-color);
        margin: auto;
        margin-top: 10px;
    }

    .card {
        width: 100%;
    }

    .card-body {
        padding: 8px
    }

    #btn-collpase {
        background-color: var(--thirday-color)
    }

    .cursor {
        cursor: pointer;
    }

    #prixMin,
    #prixMax {
        color: var(--thirday-color)
    }

    .h-max-content {
        height: max-content;
        background-color: var(--thirday-color);
    }


    @media (max-width: 768px) {

        #size-stock,
        #size-order {
            font-size: 12px;
        }

    }
</style>