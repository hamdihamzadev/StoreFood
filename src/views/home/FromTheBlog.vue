<template>
    <section id="FromTheBlog">
        <b-container class="px-lg-5" >
            <h2 id="title" class="mb-5 text-center fw-bold ">FromTheBlog</h2>
            <b-row class="g-5" >
                <b-col v-for="item in allBlogs" :key="item.id" md="4">
                    <PostBlog :blog="item" />
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    import PostBlog from '@/components/PostBlog.vue'
    export default {
        name: 'FromTheBlog',
        components: {
            PostBlog
        },

        data() {
            return {
                allBlogs: [
                    {
                    img: require('@/assets/img/blog/blog-1.jpg'),
                    title: 'Cooking tips make cooking simple',
                    para: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
                    date:'Mat 4,2024',
                    comment:5,
                    id:'45486478'
                },
                    {
                    img: require('@/assets/img/blog/blog-2.jpg'),
                    title: 'Visit the clean farm in the US',
                    para: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
                    date:'Mat 4,2024',
                    comment:5,
                    id:'8786798'
                },
                    {
                    img: require('@/assets/img/blog/blog-3.jpg'),
                    title: '6 ways to prepare breakfast for 30',
                    para: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
                    date:'Mat 4,2024',
                    comment:5,
                    id:'65787/98'
                },
            ]
            }
        }
    }
</script>

<style scoped>
    #title::after {
        content: " ";
        width: 7%;
        height: 4px;
        display: block;
        background-color: var(--thirday-color);
        margin: auto;
        margin-top: 10px;
    }
</style>