<template>
  <div id="app">
    <div v-show="visibleHeader">
      <HeaderComp />
    </div>
    <div v-show="visibleHeader" class="mb-5">
      <SearchSideCollections />
    </div>
    <div class="content">
      <router-view />
    </div>
    <div v-show="visibleHeader" class="mt-5">
      <FooterStore />
    </div>
  </div>

</template>

<script>
  import HeaderComp from "./components/HeaderComp.vue"
  import FooterStore from "./components/FooterComp.vue"
  import SearchSideCollections from './components/SearchSideCollections.vue'
  import axios from "axios";

  export default {
    components: {
      HeaderComp,
      FooterStore,
      SearchSideCollections
    },

    computed: {
      visibleHeader() {
        let path = this.$route.path.split('/')[2]
        if (path === 'SignUp' || path === 'Login' || this.$route.name==='PageNotFound'  || this.$route.name==='ProductCategoryNotFound' ) {
          return false
        } else {
          return true
        }
      },

    },

    methods:{

      async login() {
        const formLogin={email:'useradmin@gmail.com',password:'hahamalaha'}
        try {
          if (this.formLogin.email !== '' || this.formLogin.password !== '') {
            const response = await axios.post(`${this.apiUrl}/api/admin/login`,formLogin)
            const token = response.data.token
            if (token) {
              localStorage.setItem('tokenAdmin',token)
            }
          }

        } catch (error) {
          error.response.data.message === 'email is incorrecte' ? this.errorEmail.show = true : this.errorEmail.show=false
          error.response.data.message === 'passwrod is incorrecte' ? this.errorPassword.show = true : this.errorPassword.show=false
          error?console.log(error):null
        }
      },


    },

    mounted() {
      document.title=this.$route.params.storeName
      this.hideHeaderFooter = this.$route.path !== '/Signup' && this.$route.path !== '/Login';
    },
    watch: {
      $route() {
        this.updateHideHeaderFooter();
      }
    },



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

    a {
      text-decoration: none;
      color: inherit;
    }

    p {
      margin: 0px;
    }

    .fs-14 {
      font-size: 14px;
    }
  }
</style>