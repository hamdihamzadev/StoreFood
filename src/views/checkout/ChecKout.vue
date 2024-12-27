<template>
    <section id="ChecKout">

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
                                    <b-form-input v-model="form.firstName" :class="{'border-danger': error.firstName===false}" type="text" class="h-input mt-2" id="input-2" placeholder="First Name" required>
                                    </b-form-input>
                                    <span v-show="error.firstName===false" class="text-danger">Please enter a valid text (no numbers allowed).</span>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12" md="6">
                                <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
                                    <b-form-input v-model="form.lastName" :class="{'border-danger': error.lastName===false}" type="text" class="h-input mt-2" id="input-2" placeholder="Last Name" required>
                                    </b-form-input>
                                    <span v-show="error.lastName===false" class="text-danger">Please enter a valid text (no numbers allowed).</span>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12" md="6">
                                <b-form-group id="input-group-2" label="Phone:" label-for="input-2">
                                    <b-form-input v-model="form.phone" :class="{'border-danger': error.phone===false}" type="tel" class="h-input mt-2" id="input-2" placeholder="Phone" required>
                                    </b-form-input>
                                    <span v-show="error.phone===false" class="text-danger">Please enter a valid phone number.</span>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12" md="6">
                                <b-form-group id="input-group-2" label="Country:" label-for="input-2">
                                    <b-form-input v-model="form.country" :class="{'border-danger': error.country===false}" type="text" class="h-input mt-2" id="input-2" placeholder="Country" required>
                                    </b-form-input>
                                    <span v-show="error.country===false" class="text-danger">Please enter a valid text (no numbers allowed).</span>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12">
                                <b-form-group id="input-group-2" label="City:" label-for="input-2">
                                    <b-form-input v-model="form.city" :class="{'border-danger': error.city===false}" type="text" class="h-input mt-2" id="input-2" placeholder="City" required>
                                    </b-form-input>
                                    <span v-show="error.city===false" class="text-danger">Please enter a valid text (no numbers allowed).</span>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12">
                                <b-form-group class="mb-3" id="input-group-2" label="Address:" label-for="input-2">
                                    <b-form-input v-model="form.address" type="text" class="h-input mt-2" id="input-2" placeholder="Address" required>
                                    </b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col lg="12">
                                <b-form-group id="input-group-2" label="Notes" label-for="input-2">
                                    <b-form-textarea v-model="form.notes" id="input-2" class="h-input mt-2" placeholder="Enter something..."
                                        rows="3" max-rows="6"></b-form-textarea>
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-button id="btn-placeOrder" class="fw-bold w-100 p-3" type="submit"><strong>PLACE ORDER</strong></b-button>
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
                       


                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
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
                error:{
                    firstName: null,
                    lastName: null,
                    phone: null,
                    country: null,
                    city: null,
                }
            };
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
              Object.values(this.error).some(err=>err===false)? console.log('error'): console.log('success');
            },
            GetCoupon() {
                // Handle coupon logic
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