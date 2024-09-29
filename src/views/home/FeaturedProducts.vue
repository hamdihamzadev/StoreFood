<template>
    <section id="featured-products">
        <b-container class="px-lg-5" >
            <div>
                <h2 class="fw-bold text-center" id="title" >Featured Product</h2>
                <div>

                    <b-tabs id="tabs">
                        <b-tab v-for="item in featuredProducts" :key="item.id" :title="item.categoryName" :active="item.activetabs">
                            <b-card-text>
                                <ProductItem :products="item.products" />
                            </b-card-text>
                        </b-tab>
                    </b-tabs>

                </div>
            </div>
        </b-container>

    </section>
</template>

<script>
    import ProductItem from "@/components/ProductItem.vue"
    export default {
        name: 'FeaturedProducts',
        components: {
            ProductItem
        },
        computed: {
            featuredProducts() {
                const products = [
                    {
                        categoryName: 'Fresh Onion',
                        activetabs:true,
                        products: [{
                                id: 1,
                                nom: "Produit 1",
                                prix: 19.99,
                                note: 4,
                                commandes: 120,
                                enStock: true,
                                img: require('@/assets/img/product/product-1.jpg'),
                                promotion:{active:true,priceAfter:25,percentage:'20%'}

                            },
                            {
                                id: 2,
                                nom: "Produit 2",
                                prix: 29.99,
                                note: 3,
                                commandes: 80,
                                enStock: false,
                                img: require('@/assets/img/product/product-2.jpg'),
                                promotion:{active:false,priceAfter:25,percentage:'20%'}

                            },
                            {
                                id: 3,
                                nom: "Produit 3",
                                prix: 39.99,
                                note: 5,
                                commandes: 200,
                                enStock: true,
                                img: require('@/assets/img/product/product-3.jpg'),
                                promotion:{active:true,priceAfter:25,percentage:'20%'}

                            },
                            {
                                id: 4,
                                nom: "Produit 4",
                                prix: 49.99,
                                note: 2,
                                commandes: 50,
                                enStock: true,
                                img: require('@/assets/img/product/product-9.jpg'),
                                promotion:{active:false,priceAfter:25,percentage:'20%'}

                            },
                            {
                                id: 5,
                                nom: "Produit 5",
                                prix: 59.99,
                                note: 4,
                                commandes: 80,
                                enStock: false,
                                img: require('@/assets/img/product/product-5.jpg'),
                                promotion:{active:false,priceAfter:25,percentage:'20%'}

                            },
                            {
                                id: 5,
                                nom: "Produit 5",
                                prix: 59.99,
                                note: 4,
                                commandes: 120,
                                enStock: false,
                                img: require('@/assets/img/product/product-6.jpg'),
                                promotion:{active:true,priceAfter:25,percentage:'20%'}

                            },
                            {
                                id: 5,
                                nom: "Produit 5",
                                prix: 59.99,
                                note: 4,
                                commandes: 150,
                                enStock: false,
                                img: require('@/assets/img/product/product-7.jpg'),
                                promotion:{active:true,priceAfter:25,percentage:'20%'}

                            },
                            {
                                id: 5,
                                nom: "Produit 5",
                                prix: 59.99,
                                note: 4,
                                commandes: 150,
                                enStock: false,
                                img: require('@/assets/img/product/product-8.jpg'),
                                promotion:{active:true,priceAfter:25,percentage:'20%'}

                            },
                        ],
                    },
  
                    {
                        categoryName: 'Vegetables',
                        products: [{
                                id: 1,
                                nom: "Produit 1",
                                prix: 19.99,
                                note: 4,
                                commandes: 120,
                                enStock: true,
                                img: require('@/assets/img/product/product-1.jpg'),
                                promotion:{active:true,priceAfter:25,percentage:'20%'}

                            },
                            {
                                id: 2,
                                nom: "Produit 2",
                                prix: 29.99,
                                note: 3,
                                commandes: 80,
                                enStock: false,
                                img: require('@/assets/img/product/product-2.jpg'),
                                promotion:{active:false,priceAfter:25,percentage:'20%'}

                            },
                            {
                                id: 3,
                                nom: "Produit 3",
                                prix: 39.99,
                                note: 5,
                                commandes: 200,
                                enStock: true,
                                img: require('@/assets/img/product/product-3.jpg'),
                                promotion:{active:true,priceAfter:25,percentage:'20%'}

                            },
                            {
                                id: 4,
                                nom: "Produit 4",
                                prix: 49.99,
                                note: 2,
                                commandes: 50,
                                enStock: true,
                                img: require('@/assets/img/product/product-9.jpg'),
                                promotion:{active:false,priceAfter:25,percentage:'20%'}

                            },
                            {
                                id: 5,
                                nom: "Produit 5",
                                prix: 59.99,
                                note: 4,
                                commandes: 80,
                                enStock: false,
                                img: require('@/assets/img/product/product-5.jpg'),
                                promotion:{active:false,priceAfter:25,percentage:'20%'}

                            },
                            {
                                id: 5,
                                nom: "Produit 5",
                                prix: 59.99,
                                note: 4,
                                commandes: 120,
                                enStock: false,
                                img: require('@/assets/img/product/product-6.jpg'),
                                promotion:{active:true,priceAfter:25,percentage:'20%'}

                            },
                            {
                                id: 5,
                                nom: "Produit 5",
                                prix: 59.99,
                                note: 4,
                                commandes: 150,
                                enStock: false,
                                img: require('@/assets/img/product/product-7.jpg'),
                                promotion:{active:true,priceAfter:25,percentage:'20%'}

                            },
                            {
                                id: 5,
                                nom: "Produit 5",
                                prix: 59.99,
                                note: 4,
                                commandes: 150,
                                enStock: false,
                                img: require('@/assets/img/product/product-8.jpg'),
                                promotion:{active:true,priceAfter:25,percentage:'20%'}

                            },
                        ],
                    },
  
                    {
                        categoryName: 'Fast food',
                        products: [{
                                id: 1,
                                nom: "Produit 1",
                                prix: 19.99,
                                note: 4,
                                commandes: 120,
                                enStock: true,
                                img: require('@/assets/img/product/product-1.jpg'),
                                promotion:{active:true,priceAfter:25,percentage:'20%'}

                            },
                            {
                                id: 2,
                                nom: "Produit 2",
                                prix: 29.99,
                                note: 3,
                                commandes: 80,
                                enStock: false,
                                img: require('@/assets/img/product/product-2.jpg'),
                                promotion:{active:false,priceAfter:25,percentage:'20%'}

                            },
                            {
                                id: 3,
                                nom: "Produit 3",
                                prix: 39.99,
                                note: 5,
                                commandes: 200,
                                enStock: true,
                                img: require('@/assets/img/product/product-3.jpg'),
                                promotion:{active:true,priceAfter:25,percentage:'20%'}

                            },
                            {
                                id: 4,
                                nom: "Produit 4",
                                prix: 49.99,
                                note: 2,
                                commandes: 50,
                                enStock: true,
                                img: require('@/assets/img/product/product-9.jpg'),
                                promotion:{active:false,priceAfter:25,percentage:'20%'}

                            },
                            {
                                id: 5,
                                nom: "Produit 5",
                                prix: 59.99,
                                note: 4,
                                commandes: 80,
                                enStock: false,
                                img: require('@/assets/img/product/product-5.jpg'),
                                promotion:{active:false,priceAfter:25,percentage:'20%'}

                            },
                            {
                                id: 5,
                                nom: "Produit 5",
                                prix: 59.99,
                                note: 4,
                                commandes: 120,
                                enStock: false,
                                img: require('@/assets/img/product/product-6.jpg'),
                                promotion:{active:true,priceAfter:25,percentage:'20%'}

                            },
                            {
                                id: 5,
                                nom: "Produit 5",
                                prix: 59.99,
                                note: 4,
                                commandes: 150,
                                enStock: false,
                                img: require('@/assets/img/product/product-7.jpg'),
                                promotion:{active:true,priceAfter:25,percentage:'20%'}

                            },
                            {
                                id: 5,
                                nom: "Produit 5",
                                prix: 59.99,
                                note: 4,
                                commandes: 150,
                                enStock: false,
                                img: require('@/assets/img/product/product-8.jpg'),
                                promotion:{active:true,priceAfter:25,percentage:'20%'}

                            },
                        ],
                    },
  
                ]
                return products
            }
        },

      
    }
</script>

<style lang="scss" scoped>



 #title::after{
    content: " ";
    width: 7%;
    height: 4px;
    display: block;
    background-color: var(--thirday-color);
    margin: auto;
    margin-top: 10px;
    }
 
    ::v-deep #tabs {
        #tabs__BV_tab_controls_ {
            border: none;
            justify-content: center;
            gap: 20px;

            
            margin-top: 25px;
            margin-bottom: 38px;

        }
    }

    ::v-deep .nav-tabs .nav-link {
        border:none;
        border-bottom: 3px solid transparent;
        &:hover {
            border-bottom: 3px solid var(--thirday-color);
        }
    }

    ::v-deep .nav-tabs .nav-link {
       font-weight: 600;
    }

    ::v-deep .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
        border-bottom: 3px solid var(--thirday-color);
    }
</style>