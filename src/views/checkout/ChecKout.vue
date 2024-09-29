<template>
    <section id="ChecKout">
        <div class="mb-5">
            <breadCrumb :titlebreadcrumb="'ChecKout'" />
        </div>
        <b-container class="px-lg-5">

            <div class="d-flex align-items-center justify-content-center p-2 border-top border-success text-secondary bg-body-secondary mb-5">
                <div><b-icon icon="tag" aria-hidden="true"> </b-icon> Have a coupon?</div>
                <b-dropdown-item-button  v-b-modal.modal-1 class="text-decoration-underline p-0">Click here</b-dropdown-item-button> 
                <span>to enter your code</span>
            </div>

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
                    <b-form>
                        <b-row class="gy-4">
                            <b-col>
                                <b-form-group id="input-group-2" label="Fist Name:" label-for="input-2">
                                    <b-form-input class="h-input mt-2" id="input-2" placeholder="Fist Name" required>
                                    </b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
                                    <b-form-input class="h-input mt-2" id="input-2" placeholder="Last Name" required>
                                    </b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12">
                                <b-form-group id="input-group-2" label="Contry:" label-for="input-2">
                                    <b-form-input class="h-input mt-2" id="input-2" placeholder="Contry" required>
                                    </b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12">
                                <b-form-group class="mb-3" id="input-group-2" label="Address:" label-for="input-2">
                                    <b-form-input class="h-input mt-2" id="input-2" placeholder="Address" required>
                                    </b-form-input>
                                </b-form-group>
                                <b-form-input class="h-input" id="input-2" placeholder="Address" required>
                                </b-form-input>
                            </b-col>
                            <b-col cols="12">
                                <b-form-group id="input-group-2" label="Country:" label-for="input-2">
                                    <b-form-input class="h-input mt-2" id="input-2" required></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12">
                                <b-form-group id="input-group-2" label="City:" label-for="input-2">
                                    <b-form-input class="h-input mt-2" id="input-2" required></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12">
                                <b-form-group id="input-group-2" label="Postcode / ZIP:" label-for="input-2">
                                    <b-form-input class="h-input mt-2" id="input-2" required></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col lg="6">
                                <b-form-group id="input-group-2" label="Phone" label-for="input-2">
                                    <b-form-input class="h-input mt-2" id="input-2" required></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col lg="6">
                                <b-form-group id="input-group-2" label="Email" label-for="input-2">
                                    <b-form-input class="h-input mt-2" id="input-2" required></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col lg="12">
                                <b-form-group id="input-group-2" label="Order notes" label-for="input-2">
                                    <b-form-input class="h-input mt-2" id="input-2" required></b-form-input>
                                </b-form-group>
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
                        <div class="d-flex justify-content-between mb-3">
                            <p>Vegetable’s Package</p>
                            <p class="fw-bold text-secondary"><strong>$75.00</strong></p>
                        </div>
                        <div class="d-flex justify-content-between mb-3">
                            <p>Fresh Vegetable</p>
                            <p class="fw-bold text-secondary"><strong>$45.00</strong></p>
                        </div>
                        <div class="d-flex justify-content-between mb-4">
                            <p>Organic Bananas</p>
                            <p class="fw-bold text-secondary"><strong>$109.89</strong></p>
                        </div>
                        <hr>
                        <div class="d-flex justify-content-between mb-3">
                            <p class="fw-bold fs-5 "><strong>Discount</strong></p>
                            <p class="fw-bold text-danger fs-5"><strong>$25.99</strong></p>
                        </div>
                        <hr>
                        <div class="d-flex justify-content-between mb-3">
                            <p class="fw-bold fs-5 ">Total</p>
                            <p class="fw-bold text-succes fs-5"><strong>$225.89</strong></p>
                        </div>
                        <hr class="mb-4 d-block">
                        <p class="mb-4">
                            <b-icon icon="wallet" aria-hidden="true"> </b-icon> Payment on delivery
                        </p>
                        <b-button id="btn-placeOrder" class="fw-bold w-100 p-3"><strong>PLACE ORDER</strong></b-button>


                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    import breadCrumb from '@/components/BreadCrumb.vue'
    export default {
        name: 'ChecKout',
        components: {
            breadCrumb
        },

        methods: {
            GetCoupon() {
                this.$bvModal.hide('modal-1')
            }
        }
    }
</script>

<style scoped>

    /* modal start */

    .backg-green {
        background-color: var(--thirday-color)
    }

    ::v-deep .modal-header {
        justify-content: space-between;

        & button{
            border: none;
        }
    }

    ::v-deep button:not(:disabled){
        border: none;

        border-radius: 5px;
    padding: 2px 11px;
    }

    /* modal end */

    .h-input {
        height: 45px;

        &:focus {
            box-shadow: none;
            border-color: black;
        }

        &::placeholder {
            color: var(--para-color);
        }

    }

    #btn-placeOrder {
        background-color: var(--thirday-color);
        border: none;
    }
</style>