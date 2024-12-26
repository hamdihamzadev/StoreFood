<template>
    <div id="empty-cart" class="text-center my-5" >
        <b-img :src="require('@/assets/img/Emptycart.png')" alt="Panier vide" class="w-25"></b-img>
        <h3 class="fw-bold" >Your cart is empty</h3>
        <p class="mb-5" >Add items to your cart to start shopping.</p>
        <router-link :to="`/${$route.params.storeName}/Categories`">
            <b-button id="btn" >Commencer vos achats</b-button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'EmptyCart'
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