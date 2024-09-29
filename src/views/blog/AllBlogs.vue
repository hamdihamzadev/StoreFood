<template>
    <section>
        <div class="mb-5" ><breadCrumb :titlebreadcrumb="'Blogs'" /></div>
        <b-container >
            <b-row>
                <b-col lg="3" class="mb-3 mb-lg-0" >
                    <FilterBlog />
                </b-col>
                <b-col>
                    <b-row class="g-5">
                        <b-col v-for="item in allBlogs" :key="item.id" md="6">
                            <PostBlog :blog="item" />
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    import breadCrumb from '@/components/BreadCrumb.vue'
    import FilterBlog from '@/views/blog/FilterBlog.vue'
    import PostBlog from '@/components/PostBlog.vue'
    export default {
        name: 'AllBlogs',
        components: {
            breadCrumb,
            FilterBlog,
            PostBlog
        },

        data() {
            return {
                allBlogs: [{
                        img: require('@/assets/img/blog/blog-1.jpg'),
                        title: 'Cooking tips make cooking simple',
                        para: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
                        date: 'Mat 4,2024',
                        comment: 5,
                        id: '45486478'
                    },
                    {
                        img: require('@/assets/img/blog/blog-2.jpg'),
                        title: 'Visit the clean farm in the US',
                        para: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
                        date: 'Mat 4,2024',
                        comment: 5,
                        id: '8786798'
                    },
                    {
                        img: require('@/assets/img/blog/blog-3.jpg'),
                        title: '6 ways to prepare breakfast for 30',
                        para: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
                        date: 'Mat 4,2024',
                        comment: 5,
                        id: '65787/98'
                    },
                ]
            }
        }
    }
</script>