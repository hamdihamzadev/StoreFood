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
import SignUp from '@/views/login/SignUp.vue'
import LoginView from '@/views/login/LoginView.vue'


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
    path: '/:storeName/PageProduct/:slug',
    name: 'product',
    component: PageProduct,
  },

  {
    path: '/:storeName/Categories',
    name: 'Categories',
    component: CategoryView,
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
    component:SignUp,
    
  },

  {
    path: '/:storeName/Login',
    name: 'Login',
    component:LoginView,
    
  },



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
