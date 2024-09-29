<template>
    <section id="banner">
        <b-container class="px-lg-5" >
            <b-row class="g-4">
                <b-col  md="6" >
                    <router-link tag="div" to="/">
                        <a href="">
                            <b-img class="w-100" :src="require('@/assets/img/banner/banner-1.jpg')" alt="Responsive image">
                            </b-img>
                        </a>
                    </router-link>
                </b-col>
                <b-col  md="6" >
                    <router-link tag="div" to="/shop">
                       <a href="">
                        <b-img class="w-100" :src="require('@/assets/img/banner/banner-2.jpg')" alt="Responsive image">
                        </b-img>
                       </a>
                    </router-link>
                </b-col>
            </b-row>

        </b-container>
    </section>
</template>

<script>
    export default {
        name: 'BannerView',

    }
</script>