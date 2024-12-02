<template>
    <section id="login" class="vh-100">
        <b-container class="px-lg-5">
            <b-row class="vh-100 py-5 gx-5">
                <b-col class="d-flex  flex-column align-items-baseline justify-content-center">
                    <router-link to="/"><a href="">
                            <b-img class="w-15" :src="require('@/assets/img/logo.png')"></b-img>
                        </a></router-link>
                    <p class="fw-bold fs-5 mb-1 mt-4"><strong>Create your account</strong></p>
                    <p class="mb-5 text-body-secondary">Once registered, you will have access to all our features .</p>
                    <b-form @submit.prevent="loginAccount">
                        <b-row class="g-4">
                            <b-col cols="12">
                                <b-form-group label="Email">
                                    <b-form-input v-model="formLogin.email" required class="h-input" type="email"
                                        id="text-password" aria-describedby="password-help-block">
                                    </b-form-input>
                                </b-form-group>
                                <span class="small text-danger" v-show="errorEmail.show">{{ errorEmail.text }}</span>
                            </b-col>
                            <b-col cols="12">
                                <b-form-group label="Password">
                                    <b-form-input v-model="formLogin.password" required class="h-input" type="password"
                                        id="text-password" aria-describedby="password-help-block">
                                    </b-form-input>
                                </b-form-group>
                                <span class="small text-danger"
                                    v-show="errorPassword.show">{{errorPassword.text}}</span>
                                <p class="text-end small fw-semi-bold mt-1 text-primary cursor">Forget Password</p>
                            </b-col>

                            <b-col cols="12" class="mt-5">
                                <b-button @click="loginAccount" type="submit" id="btn-signup"
                                    class=" fw-bold w-100 h-input">
                                    Log in
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-form>
                    <p class="mt-2 text-center">You don't have an account ?
                        <router-link tag="a" :to="`/${$route.params.storeName}/SignUp`">
                            <span class="text-decoration-underline text-primary">Create one here.</span>
                        </router-link>
                    </p>

                </b-col>
                <!-- img -->
                <b-col class="d-none d-lg-block">
                    <div id="img" class="rounded">
                    </div>
                </b-col>
            </b-row>

            <p>{{items}}</p>
        </b-container>
    </section>
</template>


<script>
    import axios from 'axios';
    import {
        mapActions,
        mapState
    } from 'vuex';

    export default {
        name: 'LoginView',
        data() {
            return {
                formLogin: {
                    email: 'hamzacustomer18@gmail.com',
                    password: 'hahamalaha',
                    nameStore: '',

                },
                errorEmail: {
                    text: '',
                    show: false
                },
                errorPassword: {
                    text: '',
                    show: false
                },
            }
        },


        computed: {
            ...mapState('cart', {
                items: state => state.items
            })
        },


        methods: {

            async loginAccount() {
                try {

                    if (this.formLogin.email !== '' && this.formLogin.password !== '') {
                        const response = await axios.post(`http://localhost:3000/api/customers/login`, this
                            .formLogin)
                        if (response.data.message === 'Login is finish with successful') {
                            this.errorEmail.show = false
                            this.errorPassword.show = false
                            localStorage.setItem('tokenCustomer', response.data.token)

                            // CREATE CART CUSTOMER
                             this.createCart()
                            

                            const targetRoute = `/${this.$route.params.storeName}`;
                            if (this.$route.path !== targetRoute) {
                                this.$router.push(targetRoute)
                            }
                        }
                    }

                } catch (error) {
                    if (error.response.data.message && error.response.data.message === 'Email is incorrecte') {
                        this.errorEmail.show = true
                        this.errorEmail.text = 'Email is incorrecte'
                    } else if (error.response.data.message && error.response.data.message ===
                        'Customer is deleted') {
                        this.errorEmail.show = true
                        this.errorEmail.text = 'Customer is deleted'
                    } else if (error.response.data.message && error.response.data.message ===
                        'Passwrod is incorrecte') {
                        this.errorPassword.show = true
                        this.errorPassword.text = 'Passwrod is incorrecte'
                    }
                }
            },

            // CREATE CART CUSTOMER
            ...mapActions("cart", {
                createCart: 'ac_createCart'
            }),

            // GET CART USER
            ...mapActions('cart', {
                getItems: 'ac_getItems'
            }),

        },

        mounted() {
            this.formLogin.nameStore = this.$route.params.storeName
            this.getItems()
        }
    }
</script>

<style scoped>
    #shadow {
        background-color: var(--thirday-color);
        width: 100px;
        height: 100px;
        position: absolute;
        filter: blur(60px);
    }

    .h-input {
        height: 45px;

        &:focus {
            box-shadow: none;
            border-color: black;
        }
    }

    #btn-signup {
        background-color: var(--thirday-color);
        border: none;


    }

    #img {
        background-image: url('@/assets/img/login.png');
        background-position-x: center;
        background-size: cover;
        /* Pour couvrir toute la div */
        height: 100%;
        /* Ajuste la hauteur selon ton besoin */
        width: 100%;
        /* Ajuste la largeur selon ton besoin */
    }

    .cursor {
        cursor: pointer;
    }
</style>