<template>
    <section id="shoping-cart">
        <div class="mb-5">
            <breadCrumb :titlebreadcrumb="'Shopping cart'" />
        </div>
        <b-container class="px-lg-5 ">
            <b-table small :per-page="perPage" :current-page="currentPage" id="tableOrders" :items="items" hover
                responsive>
                <template #cell(Product)="data">
                    <div class="d-flex gap-3 align-items-center">
                        <b-img id="img-product" :src="data.item.Product.img"></b-img>
                        <p class="fs-6 fw-normal">{{ data.item.Product.name }}</p>
                    </div>
                </template>
                <template #cell(Quantity)="data">

                    <div style="height: 100px;" id="spin" class="d-flex align-items-center">
                        <b-form-spinbutton class="text-center w-50 h-50" id="InputQuantity" v-model="data.value[0]"
                            min="1" :max="data.value[1]" @change="onQuantityChange(data.item.id , data.value[0])">
                        </b-form-spinbutton>
                    </div>

                </template>

                <template #head(delete)>
                    <th class="d-none"></th>
                </template>

                <template #cell(delete)="data">

                    <b-dropdown-item-button>
                        <b-icon :icon="data.item.delete" aria-hidden="true"></b-icon>
                    </b-dropdown-item-button>

                </template>

                <template #head(id)>
                    <th class="d-none"></th>
                </template>

                <template #cell(id)="data">
                    <td class="d-none">{{ data.value }}</td>
                </template>


            </b-table>
            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="tableOrders">
            </b-pagination> 

            <b-row class="mt-5">
                <b-col cols="12" lg="6">
                    <b-button class="px-5 py-3  w-100 mb-2 mb-lg-" id="btn-updatecart"><strong class="small">CONTINUE
                            SHOPPING</strong>
                    </b-button>
                </b-col>
                <b-col cols="12" lg="6" class="d-flex justify-content-lg-end">
                    <b-button id="btn-continuershop"
                        class="d-flex align-items-center justify-content-center gap-2 px-5 py-3 w-100 ">
                        <b-icon icon="arrow-clockwise" aria-hidden="true"></b-icon> <strong class="small">UPDATE
                            CART</strong>
                    </b-button>
                </b-col>

            </b-row>

            <b-row class="mt-5">
                <!-- discount and  -->
                <b-col cols="12" lg="6" class="pe-lg-5 mb-3 mb-lg-0">
                    <p class="mb-4 fs-5 fw-bold"><strong>Discount Codes</strong></p>

                    <b-form class="d-flex gap-3 flex-column flex-lg-row">
                        <b-form-input id="input-coupon" class="h-100 " placeholder="Enter your coupon">
                        </b-form-input>
                        <b-button class="fw-bold w-100 w-lg-50">APPLY COUPON</b-button>
                    </b-form>
                </b-col>

                <b-col cols="12" lg="6">
                    <div class="p-4 rounded" id="bg-total">
                        <p class="mb-4 fs-4 fw-bold"><strong>Cart Total</strong></p>
                        <div class="d-flex justify-content-between fw-bold fs-5">
                            <p>Subtotal</p>
                            <p class="text-danger">$ {{ totalCart }}</p>
                        </div>
                        <hr>
                        <div class="d-flex justify-content-between fw-bold fs-5">
                            <p>Total</p>
                            <p class="text-danger">$ {{ totalCart }}</p>
                        </div>
                        <b-button class="mt-4 w-100 py-2 fw-bold small " id="btn-tocheckout">PROCEED TO CHECKOUT
                        </b-button>
                    </div>
                </b-col>

            </b-row>

        </b-container>
    </section>
</template>

<script>
    import breadCrumb from "@/components/BreadCrumb.vue"
    import {
        mapState,
        mapActions
    } from "vuex";

    export default {
        name: 'ShopingCart',
        components: {
            breadCrumb
        },
        data() {
            return {
                currentPage: 1,
                perPage: 5,

            }
        },
        computed: {

            ...mapState('cart', {
                cartUser: state => state.cart  
            }),

            items() {
                if(!this.cartUser || !this.cartUser.items  ){
                    return []
                }
              return  this.cartUser.items
                    .map(item => {
                        return {
                            Product: {
                                img: item.product.imgs[0],
                                name: item.product.name,
                            },
                            Price: 
                            item.product.promotion.priceAfter > 0 ? 
                                item.product.promotion.priceAfter : 
                                item.product.price,
                            Quantity: [item.quantity, item.product.quantity],
                            Total: (item.product.promotion.priceAfter > 0 ?
                                item.product.promotion.priceAfter : 
                                item.product.price) * item.quantity,
                            delete: 'x-circle',
                            id: item._id,

                        }
                    })
            },

            totalCart() {
                return this.items.reduce((accu, item) => accu + item.Total, 0)
            },


            rows() {
                return this.items.length
            },

        },

        methods: {

            // GET CART USER
            ...mapActions('cart', {
                getCartUser: 'ac_getCart'
            }),

            ...mapActions('cart', {
                updateQuantityItem: 'ac_updateQuntityItem'
            }),

            onQuantityChange(idItem,newQuantity){
                this.updateQuantityItem({id:idItem,newQuantity})
           
            }

        },

        mounted() {
            this.getCartUser()
        }
    }
</script>

<style lang="scss" scoped>
    #img-product {
        width: 90px;
    }

    ::v-deep .table thead tr th div {
        font-size: 22px;
        font-weight: 800;
    }

    ::v-deep .table tbody tr td {
        font-weight: 800;
        line-height: 100px;


    }

    #btn-updatecart,
    #btn-continuershop {
        background-color: var(--secondary-color);
        border: var(--secondary-color);
        color: #929292;
    }

    #btn-tocheckout {
        background-color: var(--thirday-color);
        border: none;
    }

    #bg-total {
        background-color: var(--secondary-color);
    }

    #input-coupon:focus {
        box-shadow: none;
        border-color: inherit;
    }
</style>