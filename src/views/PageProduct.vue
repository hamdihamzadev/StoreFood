<template>
    <section id="pageProduct" class="mb-4">
        <div class="mb-5">
            <breadCrumb :titlebreadcrumb="PageProduct" />
        </div>
        <b-container>
            <b-row>
                <b-col lg="6">
                    <div class="position-relative">
                        <b-img class="w-100 mb-3" :src="imgSelected"></b-img>
                        <button :disabled="product.availability===false" @click="likeProduct"
                            :class="{'activeLike':activeLike===true,'disabledLike':activeLike===false}"
                            class="d-flex align-items-center p-3 rounded position-absolute">
                            <b-icon class="fw-bold" :icon="activeLike?'suit-heart-fill':'suit-heart'"
                                aria-hidden="true">
                            </b-icon>
                        </button>
                        <b-alert v-model="showBottom" class="position-fixed fixed-top m-0 rounded-0"
                            style="z-index: 2000;" variant="success" dismissible>
                            You are add product to favoirs!
                        </b-alert>
                    </div>
                    <VueSlickCarousel v-bind="settings">
                        <div v-for="item in myProduct.imgs" :key="item.id" class="bg-dark text-white">
                            <b-img id="img-carousel" @click="getImg(item)" class="w-100" :src="item"></b-img>
                        </div>
                    </VueSlickCarousel>
                </b-col>
                <b-col lg="6" class="mt-5 mt-lg-0">
                    <div class="d-flex flex-column justify-content-around" style="height: 632px;">
                        <div>
                            <h1 class="fw-bold mb-3"><strong>{{ myProduct.name }}</strong></h1>
                            <p class="mb-3"><span class="text-danger">
                                    <b-form-rating v-model="Rating" inline no-border variant="warning"></b-form-rating>
                                    ({{ myProduct.reviews.length }} Reviews)
                                </span>
                            </p>
                            <!-- price start -->
                            <p v-if="myProduct.promotion.priceAfter">
                                <strong class="fs-1">{{ myProduct.promotion.priceAfter}}$</strong>
                                <span
                                    class="ms-2 text-danger fs-4 text-decoration-line-through">{{ myProduct.price }}$
                                </span>
                            </p>
                            <p class="fs-1" v-else>
                                <strong>{{ myProduct.price }}$</strong>
                            </p>
                            <!-- price end -->
                            <p class="mt-3" id="para-Product">{{ myProduct.description }}</p>

                        </div>
                        <b-row>
                            <b-col lg="3" class="mb-3 mb-lg-0" style="height: 50px;">
                                <b-form-spinbutton class="h-100" id="InputQuantity" v-model="ValueQuantity" min="1"
                                    max="100">
                                </b-form-spinbutton>
                            </b-col>
                            <b-col lg="9" style="height: 50px;">
                                <b-button :disabled="myProduct.quantity===0" id="btn-addPrd" class="h-100 w-100">
                                    <strong>ADD TO CART</strong>
                                </b-button>
                            </b-col>

                        </b-row>
                        <hr>
                        <div class="d-flex gap-5">
                            <div class="d-flex flex-column gap-2">
                                <p> <strong>Availability</strong> </p>
                                <p> <strong>Share on</strong> </p>
                            </div>
                            <div class="d-flex flex-column gap-2">
                                <p>
                                    <span v-if="myProduct.quantity!==0">In stock</span>
                                    <span v-else>Out of stock</span>
                                </p>
                                <div class="d-flex gap-3">
                                    <a href="">
                                        <b-icon icon="facebook" aria-hidden="true"></b-icon>
                                    </a>
                                    <a href="">
                                        <b-icon icon="instagram" aria-hidden="true"></b-icon>
                                    </a>
                                    <a href="">
                                        <b-icon icon="twitter" aria-hidden="true"></b-icon>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </b-col>
            </b-row>

            <!-- descption product --->

            <b-tabs id="tabs">
                <b-tab title="Description" class="mt-5 px-2" active>
                    <p class="fs-5 mb-2"><strong>Description</strong></p>
                    <b-card-text> {{myProduct.description}}</b-card-text>
                </b-tab>
                <b-tab title="Information" class="mt-5 px-2">
                    <p class="fs-5 mb-2"><strong>Information</strong></p>
                    <b-card-text>{{product.information}}</b-card-text>
                </b-tab>
                <b-tab title="Reviews" class="mt-5 px-2">
                    <p class="fs-5 mb-2"><strong>Reviews</strong></p>

                    <VueSlickCarousel v-bind="settings">
                        <div v-for="item in 6" :key="item.id">
                            <b-card class="p-md-4 ">
                                <div class="d-flex gap-3 mb-4">
                                    <b-img id="profil-customerReview" class="rounded "
                                        :src="require('@/assets/img/featured/feature-6.jpg')"></b-img>
                                    <div>
                                        <p class="fw-bold fs-5">Jean Dupont</p>
                                        <p class="small text-secondary">Publié le 15 juin 2023</p>
                                    </div>
                                </div>
                                <div>
                                    <div class="d-flex gap-3">
                                        <b-form-rating v-model="Rating" inline no-border variant="warning">
                                        </b-form-rating> <span>{{Rating}}.0</span>
                                    </div>
                                    <p class="h6 mb-2"><strong>Excellent smartphone, très satisfait !</strong></p>
                                    <p class="small text-secondary">J'ai acheté ce smartphone il y a un mois et je suis
                                        vraiment impressionné par sa
                                        qualité. L'écran est magnifique, l'appareil photo prend des photos superbes et
                                        la
                                        batterie dure toute la journée. Le service client de la boutique était également
                                        très serviable. Je recommande vivement !</p>
                                </div>

                            </b-card>
                        </div>
                    </VueSlickCarousel>

                </b-tab>
            </b-tabs>

            <!-- Related Product -->
            <div id="RelatedProduct " style="margin-top: 7rem;">
                <h2 id="titleRelatedProduct" class="fw-bold text-center mb-5">Featured Product</h2>
                <ProductItem :products="FeaturedProduct" />
            </div> 


        </b-container>
    </section>
</template>

<script>
    import breadCrumb from '@/components/BreadCrumb.vue';
    import VueSlickCarousel from 'vue-slick-carousel'
    import ProductItem from '../components/ProductItem.vue'
    import axios from 'axios';

    export default {
        name: 'PageProduct',
        components: {
            breadCrumb,
            VueSlickCarousel,
            ProductItem
        },
        data() {

            return {
                Rating: 4,
                PageProduct: '',
                settings: {
                    dots: true,
                    focusOnSelect: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    touchThreshold: 5,
                    responsive: [{
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            },

                        },
                        {
                            breakpoint: 1024, 
                            settings: {
                                slidesToShow: 2, 
                                slidesToScroll: 2,
                            },
                        },
                    ],
                },
                product: {
                    name: "Vegetable's Package",
                    price: 70,
                    promotion: {
                        active: true,
                        priceAfter: 50
                    },
                    imgs: [
                        require('@/assets/img/product/product-1.jpg'),
                        require('@/assets/img/product/product-2.jpg'),
                        require('@/assets/img/product/product-3.jpg'),
                        require('@/assets/img/product/product-5.jpg'),
                        require('@/assets/img/product/product-6.jpg'),
                        require('@/assets/img/product/product-7.jpg'),
                        require('@/assets/img/product/product-8.jpg'),
                    ],
                    availability: true,
                    shipping: '01 day shipping',
                    weight: '0.5 Kg',
                    para: `Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.`,
                    description: `Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.`,
                    information: `Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.`,
                    reviews: [{
                            name: 'hodza',
                            comment: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
                            date: '08/05/2024'
                        },
                        {
                            name: 'hodza',
                            comment: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
                            date: '08/05/2024'
                        },
                        {
                            name: 'hodza',
                            comment: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
                            date: '08/05/2024'
                        },
                    ],
                },
                ValueQuantity: 1,
                imgSelected: require('@/assets/img/product/product-1.jpg'),
                activeLike: false,
                showBottom: false,

                myProduct:{},
                FeaturedProduct:[],
                idCategoryFeaturedProduct:''

            };
        },

        methods: {
            getImg(item) {
                this.imgSelected = item
            },

            likeProduct() {
                this.activeLike = !this.activeLike
                this.showBottom = true
            },

            async getProduct(){
                try{
                    const nameStore=this.$route.params.storeName
                    const id=this.$route.params.id
                    const response=await axios.get(`http://localhost:3000/api/product/getOneProduct/${nameStore}/${id}`)
                    this.myProduct=response.data.product
                    this.imgSelected=this.myProduct.imgs[0]
                    this.idCategoryFeaturedProduct=response.data.product.category
                    await this.getProductsCategory()
                 
                }
                catch(error){
                    console.log('error get product in page product is :',error)
                }
            },

            async getProductsCategory() {
                try {
                    const nameStore = this.$route.params.storeName
                    const response = await axios.get(`http://localhost:3000/api/product/productsCategory/${nameStore}/${this.idCategoryFeaturedProduct}`)
                    this.FeaturedProduct = response.data.products
                    

                } catch (error) {
                    console.log(`error get all categories is ${error}`)
                }
            },

        },

        watch: {
            '$route.path': {
                immediate: true,
                handler() {
                 this.getProduct()
                },
            }
        },

        mounted() {
            this.PageProduct = this.$route.path.slice(1);
            this.getProduct()

        },
    };
</script>

<style scoped>
    /*  slick imgs start*/

    ::v-deep .slick-track[data-v-e4caeaf8] {
        display: flex;
    }

    ::v-deep .slick-track[data-v-e4caeaf8] :first-child {
        margin-left: 0px;
    }

    ::v-deep .slick-track[data-v-e4caeaf8]>div {
        margin-left: 10px
    }

    #img-carousel {
        cursor: pointer;
    }

    #btn-addPrd {
        background-color: var(--thirday-color);
        border: none;
    }

    ::v-deep .b-form-spinbutton {
        background-color: #fafafa;
        border-color: none;
    }

    .form-control:focus {
        border-color: none;
        outline: 0;
        box-shadow: none
    }

    #InputQuantity:focus {
        box-shadow: none;
    }

    .disabledLike {
        background-color: #fafafa;
        border: none;
        color: var(--thirday-color);
        transition: ease 0.3s;
        top: 10px;
        right: 10px;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    }

    .activeLike {
        background-color: var(--thirday-color);
        border: none;
        color: white;
        transition: ease 0.3s;
        top: 10px;
        right: 10px;
        box-shadow: 0 4px 8px var(--thirday-color);
    }

    #para-Product {
        color: #6f6f6f;
    }

    /*  slick imgs start*/

    /* tabs */

    #tabs {
        margin-top: 6rem;
    }

    ::v-deep #tabs {
        #tabs__BV_tab_controls_ {
            border: none;
            justify-content: center;
            gap: 20px;
            margin-top: 25px;
            margin-bottom: 38px;

        }

        ul {
            justify-content: center;
            gap: 30px;
        }
    }

    ::v-deep .nav-tabs .nav-link {
        border: none;
        border-bottom: 3px solid transparent;

        &:hover {
            border-bottom: 3px solid var(--thirday-color);
        }
    }

    ::v-deep .nav-tabs .nav-link {
        font-weight: 600;
    }

    ::v-deep .nav-tabs .nav-link.active,
    .nav-tabs .nav-item.show .nav-link {
        border-bottom: 3px solid var(--thirday-color);
    }

    /* reviews */
    #profil-customerReview {
        width: 60px;
        height: 60px;
    }

    ::v-deep .b-rating {
        padding: 0;
    }

    /* Related Product */
    #titleRelatedProduct::after {
        content: " ";
        width: 7%;
        height: 4px;
        display: block;
        background-color: var(--thirday-color);
        margin: auto;
        margin-top: 10px;
    }
</style>