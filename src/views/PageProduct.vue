<template>
    <section id="pageProduct" class="mb-4">
        <div class="mb-5">
            <breadCrumb :titlebreadcrumb="PageProduct" />
        </div>
        <b-container>
            <b-alert id="alert" class="position-absolute bottom-0 d-flex align-items-center gap-3"
                :show="dismissCountDown" dismissible :variant="errorType" @dismissed="dismissCountDown=0"
                @dismiss-count-down="dismissSecs">
                <p class="mb-0"><strong>{{ errorMessage }}</strong></p>
            </b-alert>
            <b-row>
                <b-col lg="6">
                    <div class="position-relative">
                        <b-img class="w-100 mb-3" :src="imgSelected"></b-img>
                        <button :disabled="myProduct.quantity===0" @click="likeProduct"
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
                                    <!-- <div>
                                        <b-icon v-for="start in 3" :key="start.id"
                                            :icon="start <= product.reviews ? 'star-fill' : 'star'"
                                            :variant="start <= product.reviews ? 'warning' : 'secondary'">
                                        </b-icon>
                                    </div> -->
                                    ({{ myProduct.reviews.length }} Reviews)
                                </span>
                            </p>
                            <!-- price start -->
                            <p v-if="myProduct.promotion.priceAfter">
                                <strong class="fs-1">{{ myProduct.promotion.priceAfter}}$</strong>
                                <span class="ms-2 text-danger fs-4 text-decoration-line-through">{{ myProduct.price }}$
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
                                    :max="myProduct.quantity">
                                </b-form-spinbutton>
                            </b-col>
                            <b-col lg="9" style="height: 50px;">
                                
                                <b-button :disabled="myProduct.quantity===0" @click="addToCart()" id="btn-addPrd"
                                    class="h-100 w-100 d-flex align-items-center justify-content-center gap-3">
                                    <b-icon icon="cart-plus" aria-hidden="true"></b-icon>
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

            <p>{{myProduct}}</p>

            <!-- descption product --->

            <b-tabs id="tabs">
                <b-tab title="Description" class="mt-5 px-2" active>
                    <b-card-text> {{myProduct.description}}</b-card-text>
                </b-tab>

                <b-tab title="Reviews" class="mt-5 px-2">

                    <VueSlickCarousel v-if="myProduct.reviews.length>0" v-bind="settings">
                        <div v-for="review in myProduct.reviews" :key="review.id">
                            <b-card class="p-md-4 ">
                                <div class="d-flex gap-3 mb-4">
                                    <b-img id="profil-customerReview" class="rounded " :src="review.customer.img">
                                    </b-img>
                                    <div>
                                        <p class="fw-bold fs-5">{{ review.customer.name }}</p>
                                        <p class="small text-secondary">Publié le {{ review.date }}</p>
                                    </div>
                                </div>
                                <div>
                                    <div class="d-flex gap-3">
                                        <b-form-rating v-model="review.rating" inline no-border variant="warning">
                                        </b-form-rating> <span>{{ review.rating }}</span>
                                    </div>
                                    <p class="h6 mb-2"><strong>{{ review.customer.name }}</strong></p>
                                    <p class="small text-secondary">
                                        {{ review.comment }}
                                    </p>
                                </div>
                            </b-card>
                        </div>
                    </VueSlickCarousel>
                    <p v-else><strong>There are no product reviews.</strong></p>

                </b-tab>
            </b-tabs>

            <!-- Related Product -->
            <div v-if="FeaturedProduct.length>0" id="RelatedProduct " style="margin-top: 7rem;">
                <h2 id="titleRelatedProduct" class="fw-bold text-center mb-5">Related product</h2>
                <ProductItem :products="FeaturedProduct" />
            </div>



            <!-- modal connecte to account for shopping -->
            <b-modal id="modal-connecte" title="BootstrapVue" hide-header hide-footer>
                <h3><strong>Login required </strong></h3>
                <p class="mb-4">To purchase this product, you must be logged into your account. <br>
                    Please log in or create an account to proceed with your purchase
                </p>


                <div>
                    <router-link :to="`/${$route.params.storeName}/Login`">
                        <b-button id="btn-logInModal" class="me-2 px-4">Log in</b-button>
                    </router-link>
                    <router-link :to="`/${$route.params.storeName}/Signup`">
                        <b-button id="btn-SignupModal" class="px-4">Sign up</b-button>
                    </router-link>
                </div>
            </b-modal>

        </b-container>
    </section>
</template>

<script>
    import breadCrumb from '@/components/BreadCrumb.vue';
    import VueSlickCarousel from 'vue-slick-carousel'
    import ProductItem from '../components/ProductItem.vue'
    import axios from 'axios';
    import {
        mapActions
    } from 'vuex';

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
                ValueQuantity: 1,
                imgSelected: {},
                activeLike: false,
                showBottom: false,

                myProduct: {},
                FeaturedProduct: [],
                idCategoryFeaturedProduct: '',

                // alert
                dismissCountDown: 0,
                dismissSecs: 2,
                errorType: '',
                errorMessage: ''

            };
        },

        methods: {
            getImg(item) {
                this.imgSelected = item
            },

            likeProduct() {
                const tokenUser = localStorage.getItem('tokenuser')
                if (!tokenUser) {
                    this.showModalConnect()
                } else {
                    this.activeLike = !this.activeLike
                    this.showBottom = true
                }


            },

            async getProduct(){
                try{
                    const nameStore=this.$route.params.storeName
                    const id=this.$route.params.id
                    const response=await axios.get(`http://localhost:3000/api/product/getOneProduct/${nameStore}/${id}`)
                    this.myProduct=response.data.product
                    this.imgSelected=response.data.product.imgs[0]
                 
                }
                catch(error){
                    console.log('error get product in page product is :',error)
                }
            },

            async getProductsCategory() {
                try {
                    const nameStore = this.$route.params.storeName
                    const response = await axios.get(
                        `http://localhost:3000/api/product/productsCategory/${nameStore}/${this.idCategoryFeaturedProduct}`
                    )
                    this.FeaturedProduct = response.data.products.filter(ele => ele._id !== this.$route.params.id)

                } catch (error) {
                    console.log(`error get all categories is ${error}`)
                }
            },

            showModalConnect() {
                this.$bvModal.show('modal-connecte')
            },

            addToCart() {
                const tokenUser = localStorage.getItem('tokenCustomer')
                if (tokenUser) {
                    this.addItemToCart()
                } else {
                    this.showModalConnect()
                }

            },

            // ADD ITEM TO CART
            async addItemToCart() {
                const formItem = {
                        product: this.$route.params.id,
                        quantity: this.ValueQuantity,
                    }
                    
                try {
                    const response=await this.addItemToCartAction(formItem)
                    this.errorMessage = response.data.message 
                    this.errorType = 'success'
                    this.dismissCountDown = this.dismissSecs
                    

                } catch (error) {

                    if (error.response ?.data ?.message) {
                        let typeerror = error.response.data.message
                        if (typeerror === 'The product is no longer available in the store') {
                            this.errorMessage = typeerror
                            this.errorType = 'danger'
                            this.dismissCountDown = this.dismissSecs

                        } else if (typeerror === 'stock out') {
                            this.errorMessage = typeerror
                            this.errorType = 'warning'
                            this.dismissCountDown = this.dismissSecs

                        } else if (typeerror.startsWith('Only')) {
                            this.errorMessage = typeerror
                            this.errorType = 'info'
                            this.dismissCountDown = this.dismissSecs
                            
                        }

                    } else {
                        this.errorMessage = 'A problem has occurred on the server. Please try again later.'
                        this.errorType = 'danger'
                        this.dismissCountDown = this.dismissSecs

                    }
                   
                }
            },

            // ADD ITEM TO CART
            ...mapActions('cart', {
                addItemToCartAction: 'ac_addItem'
            }),


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
    }
    
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


    /* modal connect  */
    #btn-logInModal {
        background-color: var(--thirday-color)
    }

    #btn-SignupModal {
        border-color: var(--thirday-color);
        background-color: transparent;
        color: var(--thirday-color);
        font-weight: 600;

    }

    /* alert */

    .alert .close {
        height: 24px;
        width: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #a6a4a4;
        border-radius: 4px;
    }

    #alert {
        right: 20px;
    }


    v::deep #__BVID__84 {
        background-color: #313131;
    }

    .fullscreen-spinner {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.8);
        z-index: 9999;
    }
</style>