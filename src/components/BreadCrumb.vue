<template>
    <section id="breadcrumb" class="d-flex  align-items-center">
        <b-container>
           <div class="d-flex flex-column gap-3  align-items-center">
            <h1 class="text-white  fw-bold mb-0 display-4" >{{ titlebreadcrumb }}</h1>
            <b-breadcrumb class="text-white  mb-0" :items="items"></b-breadcrumb>
           </div>
        </b-container>
    </section>
</template>

<script>
export default{
    name:'breadCrumb',
    props:['titlebreadcrumb'],
    data(){
        return{
            items: [{text:'Home',href:'/'}],
           
        }
    },

    mounted(){
        this.$route.path.split('/').slice(1).forEach(ele=> this.items.push({text:ele,href:ele}) )

    }

}
</script>

<style lang="scss" scoped>
#breadcrumb{
    background-image: url('../assets/img/breadcrumb.jpg');
    background-repeat: round;
    height: 187px;
}

 ::v-deep .breadcrumb-item.active{
    color: white
}

::v-deep .breadcrumb-item + .breadcrumb-item::before {
    color: white
}

#breadcrumb {
    a{
        font-weight: bold;
    }
}
</style>