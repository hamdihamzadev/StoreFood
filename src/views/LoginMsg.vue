<template>
 <div id="empty-cart" class="text-center my-5" >
    <b-img :src="require('@/assets/img/loginmsg.png')" alt="Panier vide" class="w-25"></b-img>
    <h3 class="fw-bold">Welcome to {{ $route.params.storeName }}</h3>
    <p class="mb-5">Login to see your cart.</p>
    <router-link :to="`/${$route.params.storeName}/Login`">
        <b-button id="btn">Go to Login</b-button>
    </router-link>
 </div>


</template>

<script>
    export default {
        name: 'LoginMsg'
    }
</script>

<style scoped>
#btn{
    background-color: var(--thirday-color);
    height: 50px;
}
#btn:hover{
    background-color: rgb(24, 24, 24);
    height: 50px;
}
</style>