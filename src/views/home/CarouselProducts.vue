<template>
    <section id="categories">
        <b-container class="px-lg-5" >
            <VueSlickCarousel v-bind="settings"  >
                <div class="w-0 position-relative ">
                    
                    <img class=" w-100" :src="require('@/assets/img/categories/cat-1.jpg')" alt="">
                    <div class="position-absolute start-50 bg-white text-center" id="name-category">
                        <router-link tag="li" to="/" ><a href="" class="d-block"><strong>Fresh Onion</strong></a></router-link>
                    </div>
                
                </div>
                <div class="w-0 position-relative">
                    
                    <img class=" w-100" :src="require('@/assets/img/categories/cat-2.jpg')" alt="">
                    <div class="position-absolute start-50 bg-white text-center" id="name-category">
                        <router-link tag="li" to="/" ><a href="" class="d-block"><strong>Vegetables</strong></a></router-link>
                    </div>
                
                </div>
                <div class="w-0 position-relative">
                    
                    <img class=" w-100" :src="require('@/assets/img/categories/cat-3.jpg')" alt="">
                    <div class="position-absolute start-50 bg-white text-center" id="name-category">
                        <router-link tag="li" to="/" ><a href="" class="d-block"><strong>Ocean Foods</strong></a></router-link>
                    </div>
                
                </div>
                <div class="w-0 position-relative">
                    
                    <img class=" w-100" :src="require('@/assets/img/categories/cat-4.jpg')" alt="">
                    <div class="position-absolute start-50 bg-white text-center" id="name-category">
                        <router-link tag="li" to="/" ><a href="" class="d-block"><strong>Fresh Onion</strong></a></router-link>
                    </div>
                
                </div>
                <div class="w-0 position-relative">
                    
                    <img class=" w-100" :src="require('@/assets/img/categories/cat-5.jpg')" alt="">
                    <div class="position-absolute start-50 bg-white text-center" id="name-category">
                        <router-link tag="li" to="/" ><a href="" class="d-block"><strong>Oatmeal</strong></a></router-link>
                    </div>
                
                </div>

            </VueSlickCarousel>
        </b-container>
    </section>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'

    export default {
        name: 'SlickProducts',
        components: {
            VueSlickCarousel
        },
        data() {
            return {
                settings: {
                    "dots": true,
                    "infinite": false,
                    "speed": 500,
                    "slidesToShow": 4,
                    "slidesToScroll": 4,
                    "initialSlide": 0,
                    "responsive": [{
                            "breakpoint": 1024,
                            "settings": {
                                "slidesToShow": 3,
                                "slidesToScroll": 3,
                                "infinite": true,
                                "dots": true
                            }
                        },
                        {
                            "breakpoint": 600,
                            "settings": {
                                "slidesToShow": 2,
                                "slidesToScroll": 2,
                                "initialSlide": 2
                            }
                        },
                        {
                            "breakpoint": 480,
                            "settings": {
                                "slidesToShow": 1,
                                "slidesToScroll": 1
                            }
                        }
                    ]
                }
            }
        }

    };
</script>

<style scoped>
::v-deep .slick-track{
    display: flex !important;
    gap: 20px !important;
}
::v-deep .slick-prev.slick-disabled:before, .slick-next.slick-disabled:before {
    opacity: 8;
    /* color: #000000; */
}

::v-deep .slick-next:before  {

    color: #000000;
}

::v-deep .slick-prev:before  {

    color: #000000;
}
.slick-initialized .slick-slide{
    display: inline-block;
    width: 0px;
}

#name-category{
    bottom: 10%; 
    transform: translateX(-50%);
    width: 80%;;
    padding-block: 7px;

    a{
    font-size: 18px;
    color: #1c1c1c;
    font-weight: 700;
    text-transform: uppercase;
    }
}

</style>