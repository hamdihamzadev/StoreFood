<template>
    <section id="shoping-cart">
        <div class="mb-5">
            <breadCrumb :titlebreadcrumb="'Shopping cart'" />
        </div>

        <!-- alert -->
        <b-alert id="alert" class="position-absolute bottom-0 d-flex align-items-center gap-3" :show="dismissCountDown"
            dismissible :variant="alertType" @dismissed="dismissCountDown=0" @dismiss-count-down="dismissSecs">
            <p class="mb-0"><strong>{{ alertMessage }}</strong></p>
        </b-alert>
        <b-spinner type="grow" label="Loading..." v-show="showSpinner"></b-spinner>
        <!-- alert -->
        <b-container class="px-lg-5 ">
            <b-table v-show="showskeletonTable===false" small :per-page="perPage" :current-page="currentPage"
                id="tableOrders" :items="itemsInTable" hover responsive>
                <template #cell(Product)="data">
                    <div class="d-flex gap-3 align-items-center ">
                        <b-img id="img-product" :src="data.item.Product.img"></b-img>
                        <div class="d-flex flex-column  justify-content-center">
                            <span> {{ data.item.Product.name }}</span>
                            <span>Stock :
                                <span class="text-success">{{ data.value.stock }}</span>
                                <span v-if="data.value.stock<data.item.Quantity[0]" class="text-danger">Reduce the
                                    quantity to {{ data.value.stock }}.</span>
                            </span>
                            <span v-if=" data.value.stock===0">Stock out</span>
                            <span v-else-if=" data.value.delete===true || data.value.visibility===false ">Product not
                                dispo</span>
                        </div>
                    </div>
                </template>
                <template #cell(Quantity)="data">

                    <div style="height: 100px;" id="spin" class="d-flex align-items-center">
                        <b-form-spinbutton
                            :disabled="data.item.Product.delete===true || data.item.Product.visibility===false || data.item.Product.stock===0"
                            class="text-center w-50 h-50" id="InputQuantity" v-model="data.value[0]" min="1"
                            @change="onQuantityChange(data.item.id,data.value[0])">
                        </b-form-spinbutton>
                    </div>

                </template>
                <!-- Colonne isActive -->
                <template #cell(isActive)="data">
                    <div class="text-center">
                        <b-badge v-if="data.value" variant="success">Active</b-badge>
                        <b-badge v-else variant="secondary">Inactive</b-badge>
                    </div>
                </template>

                <template #head(delete)>
                    <th class="d-none"></th>
                </template>

                <template #cell(delete)="data">

                    <b-dropdown-item-button @click="deleteItem(data.item.id)">
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

            <b-skeleton-table v-show="showskeletonTable" :rows="5" :columns="4"
                :table-props="{ bordered: true, striped: true }">
            </b-skeleton-table>

            <b-pagination v-if="!showskeletonTable || items.length > 0" v-model="currentPage" :total-rows="rows"
                :per-page="perPage" aria-controls="tableOrders">
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
    import axios from "axios";

    import {
        mapState,
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

                // alert
                dismissCountDown: 0,
                dismissSecs: 2,
                alertType: '',
                alertMessage: '',

                showSpinner: false,
                showskeletonTable: false

            }
        },

        computed: {

            ...mapState('cart', {
                items: state => state.items
            }),

            itemsInTable() {
                if (!this.items) {
                    return []
                }
                return this.items
            },

            totalCart() {
                return this.items.reduce((accu, item) => accu + item.Total, 0)
            },

            rows() {
                return this.items.length
            },

        },

        methods: {

            async deleteItem(itemId) {
                this.showskeletonTable = true
                try {
                    const confirme = confirm('Are you sure you want to delete this item ?')
                    if (confirme) {
                        await this.$store.dispatch('cart/ac_deleteItem', itemId)
                        this.alertMessage = 'Item is deleted with success'
                        this.alertType = 'success'
                        this.dismissCountDown = this.dismissSecs
                        this.showskeletonTable = false
                    }
                } catch (error) {
                    this.alertMessage = 'A problem has occurred on the server. Please try again later.'
                    this.alertType = 'danger'
                    this.dismissCountDown = this.dismissSecs
                    this.showskeletonTable = false
                }
            },


            async onQuantityChange(id, newQuantity) {
                this.showskeletonTable = true
                try {
                    const cartId = localStorage.getItem('cartUser')
                    const token = localStorage.getItem('tokenCustomer')
                    const response = await axios.put(
                        `http://localhost:3000/api/cart/UpdateQuantity/${cartId}/${id}`, {
                            newQuantity
                        }, {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            }
                        })

                    await this.createObjectItemInTable(response.data.cartUpdate.items) 
                    this.showskeletonTable = false
                    this.alertMessage = response.data.message
                    this.alertType = 'success'
                    this.dismissCountDown = this.dismissSecs


                } catch (error) {
                    if (error.response && error.response.data && error.response.data.message) {
                        this.alertMessage = error.response.data.message
                        if (this.alertMessage === 'Stock out') {

                            await this.createObjectItemInTable(error.response.data.cartUpdate.items) 
                            this.alertType = 'warning'
                            this.dismissCountDown = this.dismissSecs
                            this.showskeletonTable = false

                        } else if (this.alertMessage === 'The product is no longer available in the store') {

                            await this.createObjectItemInTable(error.response.data.cartUpdate.items) 
                            this.alertType = 'danger'
                            this.dismissCountDown = this.dismissSecs
                            this.showskeletonTable = false

                        } else if (this.alertMessage.startsWith('Only')) {

                            await this.createObjectItemInTable(error.response.data.cartUpdate.items) 
                            this.alertType = 'info'
                            this.dismissCountDown = this.dismissSecs
                            this.showskeletonTable = false
                        }
                    }
                    this.alertMessage = 'A problem has occurred on the server. Please try again later.'
                    this.alertType = 'danger'
                    this.dismissCountDown = this.dismissSecs
                    this.showskeletonTable = false

                }
            },

            async getItems(){
                this.showskeletonTable = true
               const response = await this.$store.dispatch('cart/ac_getItems')
               if(response.messageError){
                    this.alertMessage = response.messageError
                    this.alertType = 'danger'
                    this.dismissCountDown = this.dismissSecs
               }else if(response.messageSuccess){
                this.showskeletonTable = false
                
               }
            }
        },

        mounted() {
            this.getItems()
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

    .bg-success {
        background-color: #28a745 !important;
    }

    .bg-light {
        background-color: #f8f9fa !important;
    }

    .disabled-row {
        pointer-events: none;
        /* Désactiver les interactions */
        opacity: 0.6;
        /* Rendre la ligne moins visible */
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