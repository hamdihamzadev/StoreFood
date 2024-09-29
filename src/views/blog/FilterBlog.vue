<template>
    <section id="filterBlog" class="h-100" >
        <b-card  class="h-100 px-2 py-3">
            <h3 class="card-title fw-bold mb-4"><strong>Categories</strong></h3>
            <nav class="d-flex flex-column gap-3 mb-5  ">
                <router-link v-for="item in blogsCatgeories" :key="item.id" tag="li" :to="item.path">
                    <a   href="">
                        <span id="link-category" >{{ item.name }}</span>
                    </a>
                </router-link>
            </nav>

            <div v-for="item in RecentNews" :key="item.id" class="d-flex align-items-center gap-3 mb-3">
                <b-img class="rounded float-start" :src="item.img"
                    alt="Responsive image">
                 </b-img>
                <div>
                    <router-link :to="item.path">
                        <h6 class="mt-0 fw-bold"><strong>{{ item.title }}</strong></h6>
                    </router-link>
                    <p id="date-recentBlog" class="text-body-secondary">{{ item.date }}</p>
                </div>
            </div>

        </b-card>
    </section>
</template>

<script>
    export default {
        name: 'FilterBlog',
        data() {
            return {
                blogsCatgeories: [{
                        name: 'All',
                        path: '/blogs/All'
                    },
                    {
                        name: 'Beauty',
                        path: '/blogs/Beauty',

                    },
                    {
                        name: 'Food',
                        path: '/blogs/Food',

                    },
                    {
                        name: 'Fast food',
                        path: '/blogs/Fastfood',

                    },
                    {
                        name: 'Healty',
                        path: '/blogs/Healty',

                    },
                ],

                RecentNews:[
                    {img:require('@/assets/img/blog/sidebar/sr-1.jpg'),title:'09 Kinds Of Vegetables Protect The Liver', date:'Today 05, 2024',path:'/'},
                    {img:require('@/assets/img/blog/sidebar/sr-2.jpg'),title:'Tips You To Balance Nutrition Meal Day', date:'Today 05, 2024',path:'/'},
                    {img:require('@/assets/img/blog/sidebar/sr-3.jpg'),title:'4 Principles Help You Lose Weight With Vegetables', date:'Today 05, 2024',path:'/'}
                ]
            }
        },

        methods: {
            gotToCategory(path) {
                this.$router.push({
                    name: 'blog',
                    params: {
                        category: path
                    },

                })
            }
        }

    }
</script>

<style>
    #link-category {
        color: #777777;
    }
    #link-category:hover {
        color: var(--thirday-color);
    }

    #date-recentBlog {
        font-size: 13px;
    }
</style>