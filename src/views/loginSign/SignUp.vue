<template>
    <section id="signup" class="px-lg-5 vh-100">
        <b-container class="px-lg-5">
            <b-row class="vh-100 py-5 gx-5">
                <b-col class="d-flex  flex-column align-items-baseline justify-content-center">
                    <router-link to="/"><a href="">
                            <b-img class="w-15" :src="require('@/assets/img/logo.png')"></b-img>
                        </a>
                    </router-link>
                    <p class="fw-bold fs-5 mb-1 mt-4"><strong>Create your account</strong></p>
                    <p class="mb-5 text-body-secondary">Once registered, you will have access to all our features .</p>
 
                    <b-form @submit.prevent="createAccount">
                        <b-row class="g-4">
                            <b-col cols="12" lg="6">
                                <b-form-group label="First name">
                                    <b-form-input 
                                        v-model="formSignup.firstName" 
                                        class="h-input" 
                                        type="text"
                                        id="text-password" 
                                        aria-describedby="password-help-block" 
                                        required>
                                    </b-form-input>
                                </b-form-group>
                            </b-col>

                            <b-col cols="12" lg="6">
                                <b-form-group label="last name">
                                    <b-form-input 
                                        v-model="formSignup.lastName" 
                                        class="h-input" 
                                        type="text"
                                        id="text-password" 
                                        aria-describedby="password-help-block" 
                                        required>
                                    </b-form-input>
                                </b-form-group>

                            </b-col>

                            <b-col cols="12">
                                <b-form-group label="Contry">
                                    <b-form-select 
                                        v-model="formSignup.contry" 
                                        class="h-input w-100"
                                        :options="countries" 
                                        required>
                                    </b-form-select>
                                </b-form-group>
                            </b-col>

                            <b-col cols="12">
                                <b-form-group label="phone">
                                    <b-form-input 
                                        v-model="formSignup.phone" 
                                        class="h-input w-100" 
                                        type="number"
                                        id="text-password" 
                                        aria-describedby="password-help-block" 
                                        required>
                                    </b-form-input>
                                </b-form-group>
                            </b-col>

                            <b-col cols="12">
                                <b-form-group label="Email">
                                    <b-form-input 
                                        v-model="formSignup.email" 
                                        class="h-input" 
                                        type="email"
                                        id="text-password" 
                                        aria-describedby="password-help-block" 
                                        required>
                                    </b-form-input>
                                </b-form-group>
                                <span class="small text-danger" v-show="ErrorEmail">Email already used</span>
                            </b-col>

                            <b-col cols="12">
                                <b-form-group label="Password">
                                    <b-form-input 
                                        v-model="formSignup.password" 
                                        class="h-input" 
                                        type="password"
                                        id="text-password" 
                                        aria-describedby="password-help-block" 
                                        required>
                                    </b-form-input>
                                </b-form-group>
                            </b-col>

                            <b-col cols="12" class="mt-5">
                                <b-button 
                                    type="submit"
                                    @click="createAccount" 
                                    id="btn-signup" 
                                    class=" fw-bold w-100 h-input">
                                    Create account
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-form>
                    <p 
                        class="mt-2 text-center">
                        Already have an account ?
                        <router-link 
                            tag="a" 
                            :to="`/${$route.params.storeName}/Login`">
                            <span 
                                class="text-decoration-underline text-primary"> Sign in
                            </span>
                        </router-link>
                    </p>

                    <b-modal ref="modal" id="modal-success" centered title="Welcome!" hide-footer>
                <div class="success-animation">
                    <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                        <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                        <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                    </svg>
                </div>
                <p class="my-4 text-center">Your account has been created successfully. Now go to login to your account
                </p>
                <b-button class="w-100 mt-3" variant="success">
                    <router-link :to="`/${$route.params.storeName}/Login`" tag="li" class="list-unstyled"><a href=""
                            class="text-white text-decoration-none">Sign in</a></router-link>
                </b-button>
            </b-modal>
                </b-col>
                <!-- img -->
                <b-col class="d-none d-lg-block">
                    <div id="img" class="rounded">
                    </div>
                </b-col>

            </b-row>
        </b-container>
    </section>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'SignupView',
        data() {
            return {
                formSignup: {
                    nameStore:'',
                    firstName: 'hamza',
                    lastName: 'hamza',
                    phone: 0,
                    contry: 'Morocco',
                    email: '',
                    password: 'hahamalaha',
                },
                countries: [],
                ErrorEmail:false
            }
        },

        methods: {
            async sendFormToDatabase() {
                try {
                    const response = await axios.post(`http://localhost:3000/api/customers/signup`, this.formSignup)
                    response.data.message === 'Your account is created with successful' ? this.ErrorEmail = false : null
                } catch (error) {
                    if (error.response.data.message && error.response.data.message === 'email already used') {
                        this.ErrorEmail = true
                    } else {
                        console.log(`the error in signup is ${error}`)
                    }
                }
            },

            async createAccount(){
               if(this.formSignup.firstName!=='' && this.formSignup.lastName!=='' && this.formSignup.contry!=='' 
                 && this.formSignup.email!=='' && this.formSignup.password!=='' && this.formSignup.phone!==''){
                    await this.sendFormToDatabase()
                    if(!this.ErrorEmail){
                        this.$bvModal.show('modal-success')
                        this.formSignup.firstName='',this.formSignup.lastName='',this.formSignup.contry='',
                        this.formSignup.phone='',this.formSignup.email='',this.formSignup.password=''
                    }else{
                        null
                    }
               }
            },

            async getCountries() {
                try {
                    const response = await axios.get('https://restcountries.com/v3.1/all')
                    this.countries = response.data.map((country) => ({
                        value: country.name.common,
                        text: country.name.common,
                    }))

                } catch (error) {
                    console.log('error get countrie is :', error)
                }
            },

        },

        mounted() {
            this.getCountries()
            this.formSignup.nameStore=this.$route.params.storeName
        }
    }
</script>

<style scoped>
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

        /* animation success sign up */
        .checkmark {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        display: block;
        stroke-width: 2;
        stroke: #4bb71b;
        stroke-miterlimit: 10;
        box-shadow: inset 0px 0px 0px #4bb71b;
        animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
        position: relative;
        top: 5px;
        right: 5px;
        margin: 0 auto;
    }

    .checkmark__circle {
        stroke-dasharray: 166;
        stroke-dashoffset: 166;
        stroke-width: 2;
        stroke-miterlimit: 10;
        stroke: #4bb71b;
        fill: #fff;
        animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;

    }

    .checkmark__check {
        transform-origin: 50% 50%;
        stroke-dasharray: 48;
        stroke-dashoffset: 48;
        animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
    }

    @keyframes stroke {
        100% {
            stroke-dashoffset: 0;
        }
    }

    @keyframes scale {

        0%,
        100% {
            transform: none;
        }

        50% {
            transform: scale3d(1.1, 1.1, 1);
        }
    }

    @keyframes fill {
        100% {
            box-shadow: inset 0px 0px 0px 30px #4bb71b;
        }
    }

</style>