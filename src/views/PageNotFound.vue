<template>
    <section id="productNotFound">
        <b-container>
            <div id="content" class="d-flex flex-column align-items-center justify-content-center" >

                    <h2 class="mb-5" ><strong>Oops! {{ errorMessage }}</strong>.</h2>
                    <b-img v-if="errorCode==='404'" class="w-25 mb-3" :src="require('@/assets/img/errorproduct.webp')" alt="Image d'erreur"></b-img>
                    <b-img v-if="errorCode==='500'" class="w-25 mb-3" :src="require('@/assets/img/error500.webp')" alt="Image d'erreur"></b-img>
                    <b-icon class="fs-2 text-warning mb-5"  icon="exclamation-triangle" aria-hidden="true" ></b-icon>
                    <b-row>
                        <b-col cols="12" md="6" >
                            <b-button style="width: max-content;" class="btn-backprv d-flex align-items-center gap-2" @click="prevPage()" >
                                <b-icon icon="arrow-left" aria-hidden="true" ></b-icon>
                                Previous page
                            </b-button>
                        </b-col>
                        <b-col cols="12" md="6" >
                            <b-button 
                                style="width: max-content;" class="btn-backHome d-flex align-items-center gap-2" 
                                @click="backToHome()" >
                                Back to home
                                <b-icon icon="arrow-right" aria-hidden="true" ></b-icon>
                            </b-button>
                        </b-col>
                    </b-row>
            </div>
        </b-container>
    </section>
</template>


<script>
    export default {
        name: 'PageNotFound',
        props:{
            errorCode:String,
            errorMessage:String,
        },

        methods:{
            prevPage(){
                if(window.history.length>1){
                    this.$router.back()
                }else{
                    const storeName=this.$route.path.split('/')[1]
                    this.$router.push(`/${storeName}`)
                }
            },
            backToHome(){
                const storeName=this.$route.path.split('/')[1]
                this.$router.push(`/${storeName}`)
              
            }
        },
    }
</script>

<style scoped>
#productNotFound,
#content{
    height: 100vh;
}

.btn-backHome,
.btn-backprv {
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-backHome{
    background:var(--thirday-color);
    color: var(--primary-color);
    border: 1px solid var(--thirday-color)
}

.btn-backHome:hover{
    background-color: var(--primary-color);
   color: var(--thirday-color);
   border: 1px solid var(--thirday-color)
}

.btn-backprv{
   background-color: var(--primary-color);
   color: var(--thirday-color);
   border: 1px solid var(--thirday-color)
}

.btn-backprv:hover{
    background:var(--thirday-color);
    color: var(--primary-color)
}

</style>