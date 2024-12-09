<template>
    <section id="productNotFound">
        <b-container>
            <div id="content" class="d-flex flex-column align-items-center justify-content-center" >
                <h2><strong>Oops! Page not found</strong></h2>
                    <p class="mb-5" >We're sorry, but the page you are looking for does not exist or has been moved.</p>
                    <b-img class="w-25 mb-3" :src="require('@/assets/img/errorproduct.webp')" alt="Image d'erreur"></b-img>
                    <b-icon class="fs-2 text-warning mb-5"  icon="exclamation-triangle" aria-hidden="true" ></b-icon>
                    <b-row>
                        <b-col cols="12" md="6" >
                            <b-button style="width: max-content;" class="btn-back" @click="$router.push(`/${$route.params.storeName}`)" >Back to home</b-button>
                        </b-col>
                        <b-col cols="12" md="6" >
                            <b-button style="width: max-content;" class="btn-back" @click="prevPage" >Previous page</b-button>
                        </b-col>
                    </b-row>
            </div>
        </b-container>
    </section>
</template>


<script>
    export default {
        name: 'ProductNotfound',
        data() {
            return {
                title: 'hamza'
            }
        },

        methods:{
            prevPage(){
                if(window.history.length>1){
                    window.history.back()
                }else{
                    this.$router.push(`/${this.$route.params.storeName}`)
                }
            }
        }
    }
</script>

<style scoped>
#productNotFound,
#content{
    height: 100vh;
}

.btn-back {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.btn-back:hover {
  background: #0056b3;
}
</style>