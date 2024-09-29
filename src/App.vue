<template>
  <div id="app">
    <div v-show="hideHeaderFooter" ><HeaderComp/></div>
    <div v-show="hideHeaderFooter" class="mb-5" ><SearchSideCollections/></div>
    <div class="content" ><router-view/></div>
    <div v-show="hideHeaderFooter" class="mt-5"><FooterStore/></div>
  </div>

</template>

<script>
import HeaderComp from "./components/HeaderComp.vue"
import FooterStore from "./components/FooterComp.vue"
import SearchSideCollections from './components/SearchSideCollections.vue'
export default{
  components:{
    HeaderComp,
    FooterStore,
    SearchSideCollections
  },

  data(){
    return{
      hideHeaderFooter:true,
    }
  },

 async mounted(){
    this.hideHeaderFooter = this.$route.path !== '/Signup' && this.$route.path !== '/Login';
    
  }
  
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; // Assure que #app prend toute la hauteur de l'écran


  .content {
    flex: 1; // Assure que le contenu principal occupe l'espace restant
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  p{
    margin: 0px;
  }

  .fs-14{
    font-size: 14px;
  }
}

</style>
