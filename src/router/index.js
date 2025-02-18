import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import CategoryView from '../views/category/CategoryView.vue'
import AllBlogs from '../views/blog/AllBlogs.vue'
import ContactView from '../views/contact/ContactView.vue'
import PageProduct from '../views/PageProduct.vue'
import ShopingCart from '@/views/shoppingcart/ShopingCart.vue'
import ChecKout from '@/views/checkout/ChecKout.vue'
import BlogDetail from '@/views/blogDetails/BlogDetails.vue'
import SignupView from '@/views/loginSign/SignUp.vue'
import LoginView from '@/views/loginSign/LoginView.vue'
import ListCategories from '../views/category/ListCategories.vue'
import PageNotFound from '../views/PageNotFound.vue'
import ProductCategoryNotFound from '../views/ProductCategorynotFound.vue'
import ThankYouPage from '../views/ThankYouPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/:storeName',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:storeName/All-blogs',
    name: 'blog',
    component: AllBlogs
  },

  {
    path: '/:storeName/product/:nameproduct/:id',
    name: 'product',
    component: PageProduct,
  },

  {
    path: '/:storeName/Categories/:namecategory/:id',
    name: 'Categories',
    component: CategoryView,
  },

  {
    path: '/:storeName/Categories',
    name: 'Categories',
    component: ListCategories,
  },

  {
    path: '/:storeName/Contact',
    name: 'Contact',
    component: ContactView,
  },

  {
    path: '/:storeName/Shopingcart',
    name: 'shopingart',
    component: ShopingCart,
  },

  {
    path: '/:storeName/ChecKout',
    name: 'ChecKout',
    component: ChecKout,
  },

  {
    path: '/:storeName/BlogDetail',
    name: 'BlogDetail',
    component:BlogDetail,
  },

  {
    path: '/:storeName/Signup',
    name: 'SignUp',
    component:SignupView,
    
  },

  {
    path: '/:storeName/Login',
    name: 'Login',
    component:LoginView,
    
  },

  {
    path: '/:storeName/thank-you/:idOrder',
    name: 'ThankYouPage',
    component:ThankYouPage,
    
  },

  {
    path: '*',
    name: 'PageNotFound',
    component:PageNotFound,
    props:{
      errorCode:'404',
      errorMessage:'Page not found'
    }
  },

  {
    path: '/:storeName/:nameError',
    name: 'ProductCategoryNotFound',
    component:ProductCategoryNotFound,
    props:{
      errorCode:'404',
      errorMessage:'Product not found'
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

})

export default router
