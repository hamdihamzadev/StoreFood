<template>
    <section id="ChecKout">
        <b-alert :show="dismissCountDown" dismissible :variant="alertType" @dismissed="dismissCountDown=0"
            @dismiss-count-down="dismissSecs" id="alert" class="position-fixed w-100" style="top: 0; z-index: 1050;">
            {{ alertMessage }}
        </b-alert>


        <b-container class="px-lg-5">

            <!-- Modal coupon -->
            <div>
                <b-modal id="modal-1" title="Add your coupon" modal-ok="send">
                    <b-form-input class="h-input mt-2" id="input-2" required></b-form-input>
                    <template #modal-footer>
                        <b-button @click="$bvModal.hide('modal-1')">Fermer</b-button>
                        <b-button class="backg-green border-0" @click="GetCoupon">Send</b-button>
                    </template>
                </b-modal>
            </div>

            <!-- Billing Details -->
            <p class="fs-4 fw-bold">Billing Details </p>
            <hr class="mb-5 d-block">
            <!-- form -->
            <b-row>
                <!----------------------- form ----------------------->
                <b-col lg="8" class="mb-5 mb-lg-0">
                    <b-form @submit.prevent="placeOrder">
                        <b-row class="gy-4">
                            <b-col cols="12" md="6">
                                <b-form-group id="input-group-2" label="First Name:" label-for="input-2">
                                    <b-form-input v-model="form.firstName"
                                        :class="{'border-danger': error.firstName===false}" type="text"
                                        class="h-input mt-2" id="input-2" placeholder="First Name" required>
                                    </b-form-input>
                                    <b-skeleton type="input" v-if="form.firstName===''"></b-skeleton>
                                    <span v-show="error.firstName===false" class="text-danger">Please enter a valid text
                                        (no numbers allowed).
                                    </span>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12" md="6">
                                <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
                                    <b-form-input v-model="form.lastName"
                                        :class="{'border-danger': error.lastName===false}" type="text"
                                        class="h-input mt-2" id="input-2" placeholder="Last Name" required>
                                    </b-form-input>
                                    <b-skeleton type="input" v-if="form.firstName===''"></b-skeleton>
                                    <span v-show="error.lastName===false" class="text-danger">Please enter a valid text
                                        (no numbers allowed).
                                    </span>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12" md="6">
                                <b-form-group id="input-group-2" label="Phone:" label-for="input-2">
                                    <b-form-input v-model="form.phone" :class="{'border-danger': error.phone===false}"
                                        type="tel" class="h-input mt-2" id="input-2" placeholder="Phone" required>
                                    </b-form-input>
                                    <b-skeleton type="input" v-if="form.firstName===''"></b-skeleton>
                                    <span v-show="error.phone===false" class="text-danger">Please enter a valid phone
                                        number.</span>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12" md="6">
                                <b-form-group id="input-group-2" label="Country:" label-for="input-2">
                                    <b-form-input v-model="form.country"
                                        :class="{'border-danger': error.country===false}" type="text"
                                        class="h-input mt-2" id="input-2" placeholder="Country" required>
                                    </b-form-input>
                                    <b-skeleton type="input" v-if="form.firstName===''"></b-skeleton>
                                    <span v-show="error.country===false" class="text-danger">Please enter a valid text
                                        (no numbers allowed).</span>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12">
                                <b-form-group id="input-group-2" label="City:" label-for="input-2">
                                    <b-form-input v-model="form.city" :class="{'border-danger': error.city===false}"
                                        type="text" class="h-input mt-2" id="input-2" placeholder="City" required>
                                    </b-form-input>
                                    <b-skeleton type="input" v-if="form.firstName===''"></b-skeleton>
                                    <span v-show="error.city===false" class="text-danger">Please enter a valid text (no
                                        numbers allowed).</span>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12">
                                <b-form-group class="mb-3" id="input-group-2" label="Address:" label-for="input-2">
                                    <b-form-input v-model="form.address" type="text" class="h-input mt-2" id="input-2"
                                        placeholder="Address" required>
                                    </b-form-input>
                                    <b-skeleton type="input" v-if="form.firstName===''"></b-skeleton>
                                </b-form-group>
                            </b-col>
                            <b-col lg="12">
                                <b-form-group id="input-group-2" label="Notes" label-for="input-2">
                                    <b-form-textarea v-model="form.notes" id="input-2" class="h-input mt-2"
                                        placeholder="Enter something..." rows="3" max-rows="6">
                                    </b-form-textarea>
                                    <b-skeleton type="input" height="100px" v-if="form.firstName===''"></b-skeleton>
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-button id="btn-placeOrder" class="fw-bold w-100 p-3" type="submit"><strong>PLACE
                                        ORDER</strong>
                                </b-button>
                                <b-skeleton type="input" v-if="form.firstName===''"></b-skeleton>
                            </b-col>
                        </b-row>
                    </b-form>
                </b-col>

                <!----------------------- Your order ----------------------->
                <b-col lg="4">
                    <div class="bg-body-secondary p-lg-5 p-4 rounded ">
                        <p class="fs-4 fw-bold"><strong>Your Order</strong></p>
                        <hr>
                        <div class="d-flex justify-content-between mb-4">
                            <p class="fw-bold fs-5"><strong>Products</strong></p>
                            <p class="fw-bold fs-5">Total</p>
                        </div>
                        <div class="mb-3" v-for="item in itemsInTable" :key="item.id">
                            <div class="d-flex justify-content-between mb-1">
                                <p><strong>{{ item.Product.name }}</strong></p>
                                <p><strong>${{ item.Total }}</strong></p>
                            </div>
                            <div v-if="item.Product.shipping!==0" class="d-flex justify-content-between mb-3">
                                <small>Shipping</small>
                                <small>${{ item.Product.shipping }}</small>
                            </div>
                        </div>
                        <b-skeleton width="100%" class="mb-3" v-if="itemsInTable.length<0"></b-skeleton>
                        <b-skeleton width="100%" class="mb-3" v-if="itemsInTable.length<0"></b-skeleton>
                        <b-skeleton width="100%" class="mb-3" v-if="itemsInTable.length<0"></b-skeleton>
                        <b-skeleton width="100%" class="mb-3" v-if="itemsInTable.length<0"></b-skeleton>
                        <hr>
                        <b-skeleton width="100%" class="mb-3" v-if="itemsInTable.length<0"></b-skeleton>
                        <div class="d-flex justify-content-between mb-3">
                            <p class="fw-bold fs-5 ">Total</p>
                            <p class="fw-bold text-succes fs-5"><strong>${{ total }}</strong></p>
                        </div>
                        <hr class="mb-4 d-block">
                        <p class="mb-4">
                            <b-icon icon="wallet" aria-hidden="true"> </b-icon> Payment on delivery
                        </p>
                    </div>
                </b-col>
            </b-row>

            <!-- Modal products no availble -->
            <b-modal size="xl" id="modalProductsNoAvailble" title="Availability Products">
                <b-table small :per-page="perPage" :current-page="currentPage" id="tableOrders"
                    :fields="fieldsModalProductNotAvailable" :items="itemsProductNoAvaible" hover responsive>

                    <template #cell(Product)="data">
                        <b-img id="img-product" :src="data.item.Product.img"></b-img>
                        <p>{{ data.item.Product.name }}</p>
                    </template>

                    <!-- STATUS -->
                    <template #cell(Status)="data">
                        <p class="text-danger"
                            v-if="data.item.Product.delete===true || data.item.Product.visibility===false">
                            <b-icon icon="exclamation-triangle" scale="1" variant="danger"></b-icon>
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

            <p>{{ curren }}</p>

        </b-container>
    </section>
</template>

<script>
    import axios from 'axios';
    import {
        mapState
    } from 'vuex';

    export default {
        name: 'ChecKout',
        data() {
            return {
                form: {
                    firstName: '',
                    lastName: '',
                    phone: '',
                    country: '',
                    city: '',
                    address: '',
                    notes: ''
                },
                error: {
                    firstName: null,
                    lastName: null,
                    phone: null,
                    country: null,
                    city: null,
                },
                // alert
                dismissCountDown: 0,
                dismissSecs: 4,
                alertType: '',
                alertMessage: '',

                // Skeleton
                showskeleton: false,

                // modal products no availble
                itemsProductNoAvaible: [],
                fieldsModalProductNotAvailable: ['Product', 'Status', 'Price', 'Quantity', 'Total', 'Delete'],
                currentPage: 1,
                perPage: 5,
            };
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

            curren(){
                if (!this.items) {
                    return []
                }
                return this.itemsInTable.map(item=>({
                        quantity:item.Quantity[1]-item.Quantity[0],
                        id:item.id,
                        qfte:item.Quantity[1]
                    }))
            },


            total() {
                if (!this.items) {
                    return 0
                }
                return this.items.reduce((accu, item) => accu + item.Total + item.Product.shipping, 0)
            },

            rows() {
                return this.items.length
            },
        },
        methods: {
            handlevalidation() {
                const namePattern = /^[A-Za-z\s]+$/;
                this.error.firstName = namePattern.test(this.form.firstName);
                this.error.lastName = namePattern.test(this.form.lastName);
                this.error.phone = /^\d+$/.test(this.form.phone);
                this.error.country = namePattern.test(this.form.country);
                this.error.city = namePattern.test(this.form.city);

            },

            async placeOrder() {
                await this.handlevalidation()
                if (!Object.values(this.error).some(err => err === false)) {
                    await this.getItems()
                    this.itemsProductNoAvaible = this.items
                        .filter(item => item.Product.delete === true || item.Product.visibility === false || item.Product.stock === 0 || item.Product.stock < item.Quantity)
                    if(this.itemsProductNoAvaible.length > 0){
                        this.$bvModal.show('modalProductsNoAvailble')
                    }
                    // await this.changePusrched()
                    await this.reduceQuantityProduct()
                    // this.$router.push(`/${this.$route.params.storeName}/ThankYouPage`)
                }
            },

            async getItems() {
                const response = await this.$store.dispatch('cart/ac_getItems')
                if (response && response.messageSuccess) {
                    this.alertMessage = response.messageSuccess

                } else if (response && response.messageError) {

                    this.itemsProductNoAvaible = this.itemsInTable.filter(item => item.Product.delete === true ||
                        item.Product.visibility === false ||
                        item.Product.stock === 0 || item.Product.stock < item.Quantity)
                    this.itemsProductNoAvaible.length > 0 ? this.$bvModal.show('modalProductsNoAvailble') : null

                } else {
                    this.alertMessage = 'An unexpected error occurred. Please try again.'
                    this.alertType = 'danger'
                    this.dismissCountDown = this.dismissSecs
                }
            },

            async getUserConnected() {
                try {
                    const token = localStorage.getItem('tokenCustomer')
                    const nameStore = this.$route.params.storeName
                    const response = await axios.get(
                        `http://localhost:3000/api/customers/CustomerConnected/${nameStore}`, {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        })
                    if (response && response.status === 200) {
                        this.form.firstName = response.data.customer.firstName
                        this.form.lastName = response.data.customer.lastName
                        this.form.phone = `0${response.data.customer.phone}`
                        this.form.country = response.data.customer.contry
                        this.form.city = response.data.customer.city
                        this.form.address = response.data.customer.adress
                    }
                } catch (err) {
                    console.log('error get user is :', err)
                }
            },

            async changePusrched(){
                try{
                    const cartId = localStorage.getItem('cartUser')
                    const token = localStorage.getItem('tokenCustomer')
                    const items=this.itemsInTable.map(item=>item.id)
                    const nameStore=this.$route.params.storeName
                    const response=axios.put(`http://localhost:3000/api/cart/changePurchased/${nameStore}/${cartId}`,{items},{
                        headers:{
                            Authorization:`Bearer ${token}`
                        }
                    })

                    console.log(response.data.message)
                }
                catch(error){
                    console.error(error)
                }
            },

            async reduceQuantityProduct(){
                try{
                    const nameStore=this.$route.params.storeName
                    const products=this.itemsInTable.map(item=>({
                        quantity:item.Quantity[1]-item.Quantity[0],
                        id:item.Product.id
                    }))
                    const response=await axios.put(`http://localhost:3000/api/product/changeQuantity/${nameStore}`,{products})
                    console.log(response.status)
                }
                catch(error){
                    console.error(error)
                }
            }
        },
        async beforeMount() {
            await this.getUserConnected()
            await this.getItems()
        }
    }
</script>

<style scoped>
    /* alert */
    ::v-deeep #alert {
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
    }

    /* modal start */

    .backg-green {
        background-color: var(--thirday-color)
    }

    ::v-deep .modal-header {
        justify-content: space-between;

        & button {
            border: none;
        }
    }

    ::v-deep button:not(:disabled) {
        border: none;
        border-radius: 5px;
        padding: 2px 11px;

    }

    /* modal end */

    .h-input {
        height: 48px;

        &:focus {
            box-shadow: none;
            border-color: black;
        }

        &::placeholder {
            color: #bbbbbb;
        }

    }

    #btn-placeOrder {
        background-color: var(--thirday-color);
        border: none;
    }

    /* MODAL */
    #btn-modal {
        background-color: var(--thirday-color);
        width: 20%;
        padding-block: 6px;
    }

    #img-product {
        width: 90px;
    }
</style>