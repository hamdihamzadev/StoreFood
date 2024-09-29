<template>
    <div id="postBlog" >
        <div class="mb-3 mb-md-5" >
            <b-img class="w-100" :src="blog.img" alt="" ></b-img>
        </div>
        <div class="d-flex gap-4 mb-3" >
            <p> {{ blog.date }}</p>
            <p>{{ blog.comment }}</p></div>
        <router-link tag="h5" class="mb-2" to="/" >
            <a class="fw-bold " href="">{{ blog.title }}</a>
        </router-link>
        <p>{{ blog.para }}</p>
    </div>
</template>

<script>
export default{
    name:'PostBlog',
    props:['blog']
}
</script>