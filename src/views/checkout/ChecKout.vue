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
                    <b-form @submit.prevent="onSubmit">
                        <b-row class="gy-4">
                            <b-col cols="12" md="6">
                                <b-form-group id="input-group-2" label="First Name:" label-for="input-2">
                                    <b-form-input v-model="form.firstName"
                                        :class="{'border-danger': error.firstName===false}" type="text"
                                        class="h-input mt-2" id="input-2" placeholder="First Name" required>
                                    </b-form-input>
                                    <span v-show="error.firstName===false" class="text-danger">Please enter a valid text
                                        (no numbers allowed).</span>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12" md="6">
                                <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
                                    <b-form-input v-model="form.lastName"
                                        :class="{'border-danger': error.lastName===false}" type="text"
                                        class="h-input mt-2" id="input-2" placeholder="Last Name" required>
                                    </b-form-input>
                                    <span v-show="error.lastName===false" class="text-danger">Please enter a valid text
                                        (no numbers allowed).</span>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12" md="6">
                                <b-form-group id="input-group-2" label="Phone:" label-for="input-2">
                                    <b-form-input v-model="form.phone" :class="{'border-danger': error.phone===false}"
                                        type="tel" class="h-input mt-2" id="input-2" placeholder="Phone" required>
                                    </b-form-input>
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
                                    <span v-show="error.country===false" class="text-danger">Please enter a valid text
                                        (no numbers allowed).</span>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12">
                                <b-form-group id="input-group-2" label="City:" label-for="input-2">
                                    <b-form-input v-model="form.city" :class="{'border-danger': error.city===false}"
                                        type="text" class="h-input mt-2" id="input-2" placeholder="City" required>
                                    </b-form-input>
                                    <span v-show="error.city===false" class="text-danger">Please enter a valid text (no
                                        numbers allowed).</span>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12">
                                <b-form-group class="mb-3" id="input-group-2" label="Address:" label-for="input-2">
                                    <b-form-input v-model="form.address" type="text" class="h-input mt-2" id="input-2"
                                        placeholder="Address" required>
                                    </b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col lg="12">
                                <b-form-group id="input-group-2" label="Notes" label-for="input-2">
                                    <b-form-textarea v-model="form.notes" id="input-2" class="h-input mt-2"
                                        placeholder="Enter something..." rows="3" max-rows="6"></b-form-textarea>
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-button id="btn-placeOrder" class="fw-bold w-100 p-3" type="submit"><strong>PLACE
                                        ORDER</strong></b-button>
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
                        <div class="mb-3">
                            <div class="d-flex justify-content-between mb-1">
                                <p>Vegetable’s Package</p>
                                <p><strong>$75.00</strong></p>
                            </div>
                            <div class="d-flex justify-content-between mb-3">
                                <small>Shipping</small>
                                <small>$7.00</small>
                            </div>
                        </div>
                        <b-skeleton width="100%" class="mb-3" v-if="showskeleton" ></b-skeleton>
                        <b-skeleton width="100%" class="mb-3" v-if="showskeleton" ></b-skeleton>
                        <b-skeleton width="100%" class="mb-3" v-if="showskeleton" ></b-skeleton>
                        <b-skeleton width="100%" class="mb-3" v-if="showskeleton" ></b-skeleton>
                        <hr>
                        <div class="d-flex justify-content-between mb-3">
                            <p class="fw-bold fs-5 ">Total</p>
                            <p class="fw-bold text-succes fs-5"><strong>$225.89</strong></p>
                        </div>
                        <hr class="mb-4 d-block">
                        <p class="mb-4">
                            <b-icon icon="wallet" aria-hidden="true"> </b-icon> Payment on delivery
                        </p>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';

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
                showskeleton:false
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
            onSubmit() {
                this.handlevalidation();
                if (!Object.values(this.error).some(err => err === false)) {
                    Object.keys(this.error).forEach(key => this.error[key] === null)
                    this.dismissCountDown = this.dismissSecs
                    this.alertType = 'success'
                    this.alertMessage = 'Your order has been placed successfully! 🎉'
                }
            },

            async getItems() {
                this.showskeletonTable = true
                const response = await this.$store.dispatch('cart/ac_getItems')
                if (response && response.messageSuccess) {
                    this.showskeletonTable = false
                    this.alertMessage = response.messageSuccess
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

            async getUser(){
                try{
                    const token=localStorage.getItem('token')
                    const nameStore=this.$route.params.storeName
                    const response=await axios.get(`http://localhost:3000/api/customers/CustomerConnected/${nameStore}`,{
                        headers:{
                            Authorization: `Bearer ${token}`
                        }
                    })
                    if(response && response.status===200){
                        console.log('this is user==========>',response.data.customer)
                    }
                }
                catch(err){
                    console.log('errror is ===============>',err)
                }
            }

        },
        mounted() {
            let token = localStorage.getItem('token')
            token? (this.getItems(),this.getUser()) : ''
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
</style>