<template>
    <section id="signup" class="px-lg-5 vh-100">
        <b-container class="px-lg-5" >
            <b-row class="vh-100 py-5 gx-5" >
                <b-col class="d-flex  flex-column align-items-baseline justify-content-center"  >
                    <router-link to="/" ><a href=""><b-img  class="w-15"  :src="require('@/assets/img/logo.png')" ></b-img></a></router-link>
                    <p class="fw-bold fs-5 mb-1 mt-4" ><strong>Create your account</strong></p>
                    <p class="mb-5 text-body-secondary" >Once registered, you will have access to all our features .</p>
                    <b-form>
                        <b-row class="g-4" >
                            <b-col cols="12" lg="6" >
                                <label for="text-password">Full Name</label>
                                <b-form-input  class="h-input" type="text" id="text-password" aria-describedby="password-help-block"></b-form-input>
                            </b-col>
                            <b-col cols="12" lg="6">
                                <label for="text-password">Phone</label>
                                <b-form-input class="h-input" type="number" id="text-password" aria-describedby="password-help-block"></b-form-input>
                            </b-col>
                            <b-col cols="12" >
                                <label for="text-password">Email</label>
                                <b-form-input class="h-input" type="email" id="text-password" aria-describedby="password-help-block"></b-form-input>
                            </b-col>
                            <b-col cols="12" >
                                <label for="text-password">Password</label>
                                <b-form-input class="h-input" type="password" id="text-password" aria-describedby="password-help-block"></b-form-input>
                            </b-col>
                            <b-col cols="12" class="mt-5" >
                                <b-button id="btn-signup" class=" fw-bold w-100 h-input" >Creat account</b-button>
                            </b-col>
                            <p class="mt-2 text-center" >Already have an account ? <router-link to="/Login" ><a href="" class="text-decoration-underline text-primary" >Sign in</a></router-link> </p>
                        </b-row>
                    </b-form>
                </b-col>
                <!-- img -->
                <b-col class="d-none d-lg-block" >
                    <div id="img" class="rounded" >
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: 'LoginView'
    }
</script>

<style scoped>
.h-input{
    height: 45px;
    &:focus{
        box-shadow: none;
        border-color: black;
    }
}

#btn-signup{
    background-color: var(--thirday-color);
    border: none;
 

}

#img {
    background-image: url('@/assets/img/login.png');
    background-position-x: center;
    background-size: cover; /* Pour couvrir toute la div */
    height: 100%; /* Ajuste la hauteur selon ton besoin */
    width: 100%; /* Ajuste la largeur selon ton besoin */
}

</style>