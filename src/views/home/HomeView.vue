<template>
    <section id="home" class="mb-4 ">
        <SlideHome class="mb-6" />
        <SlickProducts class="mb-6" />
        <FeaturedProducts class="mb-6" />
        <BannerView class="mb-6" />
        <CarouselVertical class="mb-6" />
        <PostBlog class="mb-6" />

    </section>
</template>

<script>
    import SlideHome from './SlideSidebar.vue'
    import SlickProducts from "./CarouselProducts.vue"
    import FeaturedProducts from './FeaturedProducts.vue'
    import BannerView from './BannerView.vue'
    import CarouselVertical from './FeaturedCollections.vue'
    import PostBlog from "./FromTheBlog.vue"


    export default {
        name: 'HomeView',
        components: {
            SlideHome,
            SlickProducts,
            FeaturedProducts,
            BannerView,
            CarouselVertical,
            PostBlog
        },


    }
</script>

<style lang="scss" scoped>


    .mb-6{
        margin-bottom: 6rem;
    }
</style>