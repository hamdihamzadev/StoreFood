<template>
    <section id="products">
        <b-container>
            <b-row class="g-4" id="products">
                <b-col :cols="displayProducts" md="4" lg="3" v-for="product in products" :key="product.id">
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
        </b-container>
    </section>
</template>

<script>
    export default {
        name: 'ProductItem',
        props: ['products'],

    }
</script>


<style scoped>
    @media (max-width: 768px) {

        #size-stock,
        #size-order {
            font-size: 12px;
        }

    }
</style>