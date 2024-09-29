<template>
    <section id="Featured Collections">
        <b-container class="px-lg-5" >

            <b-row class="g-2 g-md-4 g-lg-5" >

                <b-col md="6" lg="4" v-for="(carousel, colIndex) in carousels" :key="colIndex">
                    <div id="tile-carousel" class="d-flex align-items-center justify-content-between">
                        <h4 class="fw-bold"><strong>{{ carousel.name }}</strong></h4>
                        <div class="d-inline-flex gap-2">
                            <b-button id="btn-carousel" class="d-flex align-items-center justify-content-center p-2"
                                @click="showPrev(colIndex)">
                                <b-icon icon="arrow-left-short" aria-hidden="true"></b-icon>
                            </b-button>
                            <b-button id="btn-carousel" class="d-flex align-items-center justify-content-center p-2"
                                @click="showNext(colIndex)">
                                <b-icon icon="arrow-right-short" aria-hidden="true"></b-icon>
                            </b-button>
                        </div>
                    </div>

                    <VueSlickCarousel v-bind="settings" :ref="'carousel' + colIndex">
                        <div v-for="(product, index) in carousel.products" :key="index" id="slick" class="mb-4">
                            <router-link tag="a" to="/">
                                <div class="d-inline-block" id="container-img">
                                    <b-img :src="product.img" id="img-prd" alt=""></b-img>
                                </div>
                                <div class="d-inline-block ms-4">
                                    <p class="mb-2 fs-5">hamza</p>
                                    <p class="fs-5">
                                        <strong>87$</strong>
                                    </p>
                                </div>
                            </router-link>
                        </div>
                    </VueSlickCarousel>
                </b-col>
            </b-row>

        </b-container>
    </section>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    export default {
        name: 'FeaturedCollections',
        components: {
            VueSlickCarousel
        },
        data() {
            return {
                settings: {
                    "infinite": true,
                    "slidesToShow": 1,
                    "speed": 500,
                    "rows": 3,
                    "slidesPerRow": 1
                },
                carousels: [
                    {
                    name: 'Latest Products',
                    products: [
                        {
                            img: require('@/assets/img/latest-product/lp-1.jpg'),
                            name: 'Chickpeas',
                            price: 54,
                            promotion: {
                                priceAfter: 39,
                                active: true
                            },
                            path: 'Chickpeas',
                            id: '5184893'
                        },
                        {
                            img: require('@/assets/img/latest-product/lp-2.jpg'),
                            name: 'Chickpeas',
                            price: 54,
                            promotion: {
                                priceAfter: 39,
                                active: true
                            },
                            path: 'Chickpeas',
                            id: '5184893'
                        },
                        {
                            img: require('@/assets/img/latest-product/lp-3.jpg'),
                            name: 'Chickpeas',
                            price: 54,
                            promotion: {
                                priceAfter: 39,
                                active: true
                            },
                            path: 'Chickpeas',
                            id: '5184893'
                        },
      
                        {
                            img: require('@/assets/img/latest-product/lp-1.jpg'),
                            name: 'Chickpeas',
                            price: 54,
                            promotion: {
                                priceAfter: 39,
                                active: true
                            },
                            path: 'Chickpeas',
                            id: '5184893'
                        },
                        {
                            img: require('@/assets/img/latest-product/lp-2.jpg'),
                            name: 'Chickpeas',
                            price: 54,
                            promotion: {
                                priceAfter: 39,
                                active: true
                            },
                            path: 'Chickpeas',
                            id: '5184893'
                        },
                        {
                            img: require('@/assets/img/latest-product/lp-3.jpg'),
                            name: 'Chickpeas',
                            price: 54,
                            promotion: {
                                priceAfter: 39,
                                active: true
                            },
                            path: 'Chickpeas',
                            id: '5184893'
                        },
      
                    ]
                },
                    {
                    name: 'Top Review',
                    products: [
                        {
                            img: require('@/assets/img/latest-product/lp-1.jpg'),
                            name: 'Chickpeas',
                            price: 54,
                            promotion: {
                                priceAfter: 39,
                                active: true
                            },
                            path: 'Chickpeas',
                            id: '5184893'
                        },
                        {
                            img: require('@/assets/img/latest-product/lp-2.jpg'),
                            name: 'Chickpeas',
                            price: 54,
                            promotion: {
                                priceAfter: 39,
                                active: true
                            },
                            path: 'Chickpeas',
                            id: '5184893'
                        },
                        {
                            img: require('@/assets/img/latest-product/lp-3.jpg'),
                            name: 'Chickpeas',
                            price: 54,
                            promotion: {
                                priceAfter: 39,
                                active: true
                            },
                            path: 'Chickpeas',
                            id: '5184893'
                        },
      
                        {
                            img: require('@/assets/img/latest-product/lp-1.jpg'),
                            name: 'Chickpeas',
                            price: 54,
                            promotion: {
                                priceAfter: 39,
                                active: true
                            },
                            path: 'Chickpeas',
                            id: '5184893'
                        },
                        {
                            img: require('@/assets/img/latest-product/lp-2.jpg'),
                            name: 'Chickpeas',
                            price: 54,
                            promotion: {
                                priceAfter: 39,
                                active: true
                            },
                            path: 'Chickpeas',
                            id: '5184893'
                        },
                        {
                            img: require('@/assets/img/latest-product/lp-3.jpg'),
                            name: 'Chickpeas',
                            price: 54,
                            promotion: {
                                priceAfter: 39,
                                active: true
                            },
                            path: 'Chickpeas',
                            id: '5184893'
                        },
      
                    ]
                },
                    {
                    name: 'Top product',
                    products: [
                        {
                            img: require('@/assets/img/latest-product/lp-1.jpg'),
                            name: 'Chickpeas',
                            price: 54,
                            promotion: {
                                priceAfter: 39,
                                active: true
                            },
                            path: 'Chickpeas',
                            id: '5184893'
                        },
                        {
                            img: require('@/assets/img/latest-product/lp-2.jpg'),
                            name: 'Chickpeas',
                            price: 54,
                            promotion: {
                                priceAfter: 39,
                                active: true
                            },
                            path: 'Chickpeas',
                            id: '5184893'
                        },
                        {
                            img: require('@/assets/img/latest-product/lp-3.jpg'),
                            name: 'Chickpeas',
                            price: 54,
                            promotion: {
                                priceAfter: 39,
                                active: true
                            },
                            path: 'Chickpeas',
                            id: '5184893'
                        },
      
                        {
                            img: require('@/assets/img/latest-product/lp-1.jpg'),
                            name: 'Chickpeas',
                            price: 54,
                            promotion: {
                                priceAfter: 39,
                                active: true
                            },
                            path: 'Chickpeas',
                            id: '5184893'
                        },
                        {
                            img: require('@/assets/img/latest-product/lp-2.jpg'),
                            name: 'Chickpeas',
                            price: 54,
                            promotion: {
                                priceAfter: 39,
                                active: true
                            },
                            path: 'Chickpeas',
                            id: '5184893'
                        },
                        {
                            img: require('@/assets/img/latest-product/lp-3.jpg'),
                            name: 'Chickpeas',
                            price: 54,
                            promotion: {
                                priceAfter: 39,
                                active: true
                            },
                            path: 'Chickpeas',
                            id: '5184893'
                        },
      
                    ]
                },
            ]
            }
        },

        methods: {

            showPrev(index) {
                this.$refs['carousel' + index][0].prev();

            },
            showNext(index) {
                this.$refs['carousel' + index][0].next();

            },

        },


    }
</script>


<style scoped>
    #tile-carousel {
        height: 116px;
    }

    ::v-deep .slick-track {
        display: flex !important;
    }

    ::v-deep .slick-prev.slick-disabled:before,
    .slick-next.slick-disabled:before {
        opacity: 8;
    }


    ::v-deep .slick-prev {
        display: none
    }

    ::v-deep .slick-next {
        display: none
    }

    .slick-initialized .slick-slide {
        display: inline-block;
        width: 0px;
    }

    #btn-carousel {
        background-color: var(--secondary-color);
        color: var(--paragraph-color);
        border: 1px solid #e6e6e6;
    }

    #container-img {
        width: 125px;

        img {
            width: -webkit-fill-available;
        }
    }
</style>