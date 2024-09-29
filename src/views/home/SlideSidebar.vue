<template>
    <section id="slide">
        <b-container class="px-lg-5" >
            <div class="position-relative"  id="banner">
                        <b-img class="w-100 object-fit-none object-fit-lg-cover  h-100 " :src="require('@/assets/img/hero/banner.jpg')" alt="Responsive image">
                        </b-img>
                        <div id="text-slide" class="position-absolute top-50 start-0 translate-middle-y ms-5">
                            <p id="title" class="mb-2"><strong>FRUIT FRESH</strong></p>
                            <p class="display-4 fw-bold mb-1">Vegetable <br>100% Organic</p>
                            <p class="mb-4" id="para">Free Pickup and Delivery Available</p>
                            <b-button id="btn-shop" class="px-4 py-2 rounded-0 border-0"><a href=""><strong>SHOP
                                        NOW</strong></a></b-button>
                        </div>
                    </div>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: 'SlideHome',
   
    }
</script>

<style scoped>
       #banner {
                #text-slide {
                    #title {
                        color: var(--thirday-color);
                    }

                    #para {
                        color: var(--paragraph-color);
                    }

                    #btn-shop {
                        background-color: var(--thirday-color);
                    }
                }
            }

            @media (max-width: 575.98px) { 
                #banner{
                    height: 400px;
                }
             }
    
</style>