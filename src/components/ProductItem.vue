<template>
    <section id="products">
        <b-container>
            <b-row class="g-4" id="products">
                <b-col cols="6" md="4" lg="3" v-for="produit in products" :key="produit.id">
                    <b-card class="position-relative">
                        <p v-if="produit.promotion.active" class="bg-danger p-2 position-absolute text-white"
                            style="width: fit-content;">{{ produit.promotion.percentage }}
                        </p>
                        <img class="mb-3 w-100" :src="produit.img" alt="">
                        <b-card-text class="mt-2">
                            <router-link tag="a" to="/">
                                <p class=" mb-1">{{produit.nom}}</p>
                            </router-link>
                            <div class="mb-3">
                                <div class="d-flex align-items-center gap-2">
                                    <p class="fs-5"><strong>{{ produit.prix.toFixed(2) }}€</strong></p>
                                    <p class="text-danger">{{ produit.prix.toFixed(2) }}€</p>
                                </div>
                                <div>
                                    <b-icon v-for="etoile in 5" :key="etoile"
                                        :icon="etoile <= produit.note ? 'star-fill' : 'star'"
                                        :variant="etoile <= produit.note ? 'warning' : 'secondary'">
                                    </b-icon>
                                </div>
                            </div>
                        </b-card-text>

                        <div class="d-flex align-items-center justify-content-between gap-2">
                            <p id="size-stock" :class="['card-text', produit.enStock ? 'text-success' : 'text-danger']">
                                {{ produit.enStock ? 'In stock' : 'Out of stock' }}
                            </p>
                            <span id="size-order" class="ms-2 text-muted">({{ produit.commandes }}
                                Orders)</span>
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