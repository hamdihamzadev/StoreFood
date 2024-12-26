<template>
    <section id="shoping-cart">
        <!-- alert -->
        <b-alert id="alert" class="position-absolute bottom-0 d-flex align-items-center gap-3" :show="dismissCountDown"
            dismissible :variant="alertType" @dismissed="dismissCountDown=0" @dismiss-count-down="dismissSecs">
            <p class="mb-0"><strong>{{ alertMessage }}</strong></p>
        </b-alert>
        <b-spinner type="grow" label="Loading..." v-show="showSpinner"></b-spinner>


        <!-- alert -->
        <!-- Modal checkout error -->
        <b-modal  size="xl" id="modalErroToCheckout" title="Availability Products">
            <b-table v-show="showskeletonTable===false" small :per-page="perPage" :current-page="currentPage"
                id="tableOrders" :fields="fieldsModalProductStatus" :items="itemsErrorInGoToCheckout" hover responsive>

                <template #cell(Product)="data">
                    <b-img id="img-product" :src="data.item.Product.img"></b-img>
                    <p>{{ data.item.Product.name }}</p>
                </template>

                <!-- STATUS -->
                <template #cell(Status)="data">
                    <p class="text-danger"
                        v-if="data.item.Product.delete===true || data.item.Product.visibility===false">
                        <b-icon icon="exclamation-triangle" scale="1" variant="danger">
                        </b-icon>
                        This product is not available.
                    </p>
                    <p class="text-danger" v-else-if="data.item.Product.stock===0">
                        Stock out
                    </p>
                    <p class="text-danger" v-else-if="data.item.Product.stock < data.item.Quantity">
                        {{ `Only ${data.item.Product.stock} items are left in stock; please reduce the quantity` }}
                    </p>
                </template>

                <template #cell(Quantity)="data">

                    <div style="height: 100px;" id="spin" class="d-flex align-items-center">
                        <b-form-spinbutton
                            :disabled="data.item.Product.delete===true || data.item.Product.visibility===false || data.item.Product.stock===0"
                            class="text-center w-50 h-50 border"
                            :class="data.item.Quantity>data.item.Product.Quantity?'border border-danger text-danger' : ''"
                            id="InputQuantity" v-model="data.value[0]" min="1"
                            @change="onQuantityChange(data.item.id,data.value[0])">
                        </b-form-spinbutton>
                    </div>

                </template>

                <!-- Colonne isActive -->
                <template #head(delete)>
                    <th class="d-none"></th>
                </template>

                <template #cell(delete)="data">
                    <b-dropdown-item-button @click="deleteItem(data.item.id)">
                        <b-icon :icon="data.item.delete" aria-hidden="true" scale="1" variant="danger"></b-icon>
                    </b-dropdown-item-button>
                </template>

                <template #head(id)>
                    <th class="d-none"></th>
                </template>
                <template #cell(id)="data">
                    <td class="d-none">{{ data.value }}</td>
                </template>

            </b-table>

            <!-- BTN MODAL -->
            <template #modal-footer>
                <b-button @click="saveItems()" id="btn-modal">Save</b-button>
            </template>
        </b-modal>

        <!-- CONTAINER  -->
        <b-container  class="px-lg-5 ">

        <div v-if="itemsInTable.length > 0">
            <b-table v-show="showskeletonTable===false" small :per-page="perPage" :current-page="currentPage"
                id="tableOrders" :items="itemsInTable" hover responsive>
                <template #cell(Product)="data">
                    <div class="d-flex gap-3 align-items-center ">
                        <b-img id="img-product" :src="data.item.Product.img"></b-img>
                        <div class="d-flex flex-column  justify-content-center">
                            <span> {{ data.item.Product.name }}</span>
                            <span>Stock :
                                <span class="text-success">{{ data.value.stock }}</span>
                                <span v-if="data.value.stock > 0 && data.value.stock < data.item.Quantity[0]"
                                    class="text-danger">
                                    Reduce the quantity
                                </span>
                            </span>
                            <span class="text-danger" v-if=" data.value.stock===0">Stock out
                            </span>
                            <span v-else-if=" data.value.delete===true || data.value.visibility===false ">
                                Product not dispo
                            </span>
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
                    <router-link :to="`/${$route.params.storeName}`">
                        <b-button class="d-flex align-items-center justify-content-center gap-2 px-5 py-3 w-100 "
                            id="btn-continuershop">
                            <b-icon icon="bag" aria-hidden="true"></b-icon>
                            <strong class="small">
                                CONTINUE SHOPPING
                            </strong>
                        </b-button>
                    </router-link>
                </b-col>
                <b-col cols="12" lg="6" class="d-flex justify-content-lg-end">
                    <b-button id="btn-updatecart" @click="updateCart()"
                        class="d-flex align-items-center justify-content-center gap-2 px-5 py-3 w-100 ">
                        <b-icon icon="arrow-clockwise" aria-hidden="true"></b-icon>
                        <strong class="small">
                            UPDATE CART
                        </strong>
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
                            <p class="text-subtotal">$ {{ subtotalCart }}</p>
                        </div>
                        <div class="d-flex justify-content-between fw-bold fs-5 mt-3">
                            <p class="text-shipping">Shipping</p>
                            <p class="text-shipping">$ {{ TotalshippingCart }}</p>
                        </div>
                        <hr>
                        <div class="d-flex justify-content-between fw-bold fs-5">
                            <p>Total</p>
                            <p class="text-danger">$ {{ subtotalCart + TotalshippingCart }}</p>
                        </div>
                        <b-button @click="goToCheckout()"
                            class="d-flex align-items-center justify-content-center gap-2 px-5 py-3 w-100 mt-5"
                            id="btn-tocheckout">
                            <strong>PROCEED TO CHECKOUT</strong>
                            <b-icon icon="arrow-right" aria-hidden="true"></b-icon>
                        </b-button>
                    </div>
                </b-col>
            </b-row>
        </div>

        <!-- Login msg -->
        <LoginMsg  v-show="!userConnected" />
        <!-- EmptyCart -->
        <EmptyCart v-if=" userConnected===true && itemsInTable.length===0 " />
            
        </b-container>
    </section>
</template>

<script>
    import EmptyCart from "@/views/EmptyCart.vue"
    import LoginMsg from "@/views/LoginMsg.vue"

    import {
        mapState,
    } from "vuex";

    export default {
        name: 'ShopingCart',
        components: {
            EmptyCart,
            LoginMsg
        },
        data() {
            return {
                currentPage: 1,
                perPage: 5,

                // alert
                dismissCountDown: 0,
                dismissSecs: 4,
                alertType: '',
                alertMessage: '',

                showSpinner: false,
                showskeletonTable: false,

                // MODAL 
                fieldsModalProductStatus: ['Product', 'Status', 'Price', 'Quantity', 'Total', 'Delete']
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

            itemsErrorInGoToCheckout() {
                if (!this.items) {
                    return []
                }
                return this.items
                .filter(item => item.Product.delete === true || item.Product.visibility === false || item.Product.stock === 0 || item.Product.stock < item.Quantity)
            },

            subtotalCart() {
                return this.items.reduce((accu, item) => accu + item.Total, 0)
            },

            TotalshippingCart() {
                return this.items.reduce((accu, item) => accu + item.Product.shipping, 0)
            },

            rows() {
                return this.items.length
            },

            userConnected(){
                let token=localStorage.getItem('tokenCustomer')
                return token? true : false
            }
        },

        methods: {

            async deleteItem(itemId) {
                this.showskeletonTable = true
                const confirme = confirm('Are you sure you want to delete this item ?')
                if (confirme) {
                    const response = await this.$store.dispatch('cart/ac_deleteItem', itemId)
                    if (response && response.messageSuccess) {

                        this.alertMessage = response.messageSuccess
                        this.alertType = 'success'
                        this.dismissCountDown = this.dismissSecs

                    } else if (response && (response.messageError || response.messageErrorServe)) {

                        this.alertMessage = response.messageError || response.messageErrorServe
                        this.alertType = 'danger'
                        this.dismissCountDown = this.dismissSecs
                    } else {
                        this.alertMessage = 'An unexpected error occurred. Please try again.'
                        this.alertTypeColor = 'danger';
                        this.dismissCountDown = this.dismissSecs;
                    }

                    this.showskeletonTable = false
                } else {
                    this.showskeletonTable = false
                }

            },

            async onQuantityChange(id, newQuantity) {

                this.showskeletonTable = true

                const response = await this.$store.dispatch('cart/ac_updateQuntityItem', {
                    id,
                    newQuantity
                })

                if (response && response.messageSuccess) {

                    this.alertMessage = response.messageSuccess
                    this.alertType = 'success'
                    this.dismissCountDown = this.dismissSecs

                } else if (response && (response.messageError || response.messageErrorServe)) {

                    this.alertMessage = response.messageError || response.messageErrorServe
                    this.alertType = 'danger'
                    this.dismissCountDown = this.dismissSecs
                } else {
                    this.alertMessage = 'An unexpected error occurred. Please try again.'
                    this.alertTypeColor = 'danger';
                    this.dismissCountDown = this.dismissSecs

                }

                this.showskeletonTable = false

            },

            async getItems() {
                this.showskeletonTable = true
                const response = await this.$store.dispatch('cart/ac_getItems')
                if (response && response.messageSuccess) {
                    this.showskeletonTable = false
                    this.alertMessage=response.messageSuccess
                } else if (response && response.messageError) {
                    this.alertMessage = response.messageError
                    this.alertType = 'danger'
                    this.dismissCountDown = this.dismissSecs
                } else {
                    this.alertMessage = 'An unexpected error occurred. Please try again.'
                    this.alertType = 'danger'
                    this.dismissCountDown = this.dismissSecs
                }
            },

            async updateCart() {
                const confirme = confirm('Are you sure you want to update your cart?')
                if (confirme) {
                    this.showskeletonTable = true
                    const response = await this.$store.dispatch('cart/ac_deleteAllItems')
                    if (response && response.messageSuccess) {

                        this.alertMessage = response.messageSuccess
                        this.alertType = 'success'
                        this.dismissCountDown = this.dismissSecs

                    } else if (response && (response.messageError || response.messageErrorServe)) {

                        this.alertMessage = response.messageError || response.messageErrorServe
                        this.alertType = 'danger'
                        this.dismissCountDown = this.dismissSecs

                    } else {
                        this.alertMessage = 'An unexpected error occurred. Please try again .'
                        this.alertType = 'danger'
                        this.dismissCountDown = this.dismissSecs
                    }
                    this.showskeletonTable = false
                }
            },

            async goToCheckout() {
                await this.getItems()
                this.itemsErrorInGoToCheckout = this.itemsInTable
                    .filter(item => item.Product.delete === true || item.Product.visibility === false || item
                        .Product.stock === 0 || item.Product.stock < item.Quantity)
                this.itemsErrorInGoToCheckout.length > 0 ? this.$bvModal.show('modalErroToCheckout') : this.$router.push(`/${this.$route.params.storeName}/ChecKout`)
            },

            async saveItems(){
                await this.getItems()
                this.itemsErrorInGoToCheckout = this.itemsInTable
                    .filter(item => item.Product.delete === true || item.Product.visibility === false || item
                        .Product.stock === 0 || item.Product.stock < item.Quantity)
                this.itemsErrorInGoToCheckout.length > 0 ? this.$bvModal.show('modalErroToCheckout') : this.$bvModal.hide('modalErroToCheckout')
            }

        },

        watch: {
            itemsErrorInGoToCheckout(newVal){
                if(newVal.length===0){
                    this.$bvModal.hide('modalErroToCheckout')
                }
            }
        },

        mounted() {
            let token = localStorage.getItem('token')
            token? this.getItems() : ''
        }

    }
</script>

<style lang="scss" scoped>
    p {
        margin-bottom: 0px;
    }

    #img-product {
        width: 90px;
    }

    ::v-deep .table thead tr th div {
        font-size: 20px;
        font-weight: 600;
    }

    ::v-deep .table tbody tr td {
        font-weight: 400;
        vertical-align: middle;

    }

    // BTN TABLE

    #btn-updatecart {
        background-color: var(--primary-color);
        color: var(--thirday-color);
        border: 1px solid var(--thirday-color);
        transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
    }

    #btn-updatecart:hover {
        background-color: var(--thirday-color);
        color: var(--primary-color);
    }

    #btn-continuershop {
        background-color: var(--thirday-color);
        color: var(--primary-color);
        border: 1px solid var(--thirday-color);
        transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
    }

    #btn-continuershop:hover {
        background-color: var(--primary-color);
        color: var(--thirday-color);
    }

    // BTN CHECKOUT
    #btn-tocheckout {
        background-color: var(--thirday-color);
        color: var(--primary-color);
        border: 1px solid var(--thirday-color);
        transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
    }

    #btn-tocheckout:hover {
        background-color: var(--primary-color);
        color: var(--thirday-color);
    }

    #bg-total {
        background-color: var(--secondary-color);
    }

    .text-shipping {
        color: var(--paragraph-color);
        font-weight: lighter;
    }

    .text-subtotal {
        color: var(--thirday-color);
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

    // MODAL
    #btn-modal {
        background-color: var(--thirday-color);
        width: 20%;
        padding-block: 6px;
    }
</style>