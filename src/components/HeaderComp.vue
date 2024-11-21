<template>
    <section id="header">
        <!-- topBar -->
        <div id="topbar" class="d-none d-md-block">
            <b-container class="px-lg-5">
                <b-row class="d-flex align-items-center ">
                    <b-col>
                        <div class="d-flex gap-3">
                            <p class="fs-14">
                                <b-icon class="me-1" icon="envelope-fill" aria-hidden="true"></b-icon>
                                <span>teste@gmail.com</span>
                            </p>
                            <p class="fs-14 border-start ps-3">
                                <font-awesome-icon icon="twitter" />Free Shipping for all Order of $99 {{ nameStore }}
                            </p>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="d-flex justify-content-end align-items-center  gap-4 ">
                            <div id="soical-media">
                                <b-icon class="me-3" icon="facebook" aria-hidden="true"></b-icon>
                                <b-icon class="me-3" icon="twitter" aria-hidden="true"></b-icon>
                                <b-icon class="me-3" icon="linkedin" aria-hidden="true"></b-icon>
                                <b-icon icon="facebook" aria-hidden="true"></b-icon>
                            </div>
                            <div class="ps-2 border-start position-relative">
                                <router-link v-if="isTokenAvailable()==='noConnected'" tag="a" :to="`/${$route.params.storeName}/Login`">
                                    <b-icon class="me-2" icon="person-fill" aria-hidden="true"></b-icon>Login
                                </router-link>
                                <b-button v-else v-b-toggle.collapse-profile
                                    class="d-flex align-items-center justify-content-between gap-2 border-0 text-black bg-transparent">
                                    <b-avatar
                                        src="http://localhost:3000/images/Design_sans_titre__3_-removebg-preview%202-1731598358423-40625322.png"
                                        variant="dark"></b-avatar>
                                    <strong>Hamza hamdi</strong>
                                    <b-icon icon="chevron-down" aria-hidden="true"></b-icon>
                                </b-button>
                                <!-- Collapse -->
                                <b-collapse id="collapse-profile"
                                    class="mt-2 position-absolute start-0 end-0 z-3 shadow">
                                    <b-card class="p-0">
                                        <nav class="d-flex flex-column gap-2 ">
                                            <router-link v-for="item in linksProfil" :key="item.id"
                                                :to="`/${$route.params.storeName}${item.path}`" tag="li">
                                                <b-icon :icon="item.icon" class="me-2" aria-hidden="true"></b-icon>
                                                <a href="">{{ item.text }}</a>
                                            </router-link>
                                        </nav>
                                        <hr class="m-2">
                                        <li>
                                            <a href="" @click="logout">
                                                <b-icon icon="box-arrow-in-right" class="me-2" aria-hidden="true">
                                                </b-icon>
                                                <span>Logout</span>
                                            </a>
                                        </li>
                                    </b-card>
                                </b-collapse>
                            </div>
                        </div>
                    </b-col>
                </b-row>

            </b-container>
        </div>
        <!-- nav bar -->
        <div id="navBar" class="py-3 border-end">
            <b-container class="px-lg-5">
                <b-row class="align-items-center">

                    <b-col cols="6" lg="4">
                        <div class="text-start">
                            <router-link :to="`/${$route.params.storeName}`">
                                <img class="w-lg-25" src="../assets/img/logo.png" alt="">
                            </router-link>
                        </div>
                    </b-col>

                    <b-col lg="4" class="d-none d-lg-block">
                        <!-- hidden in sm and md -->
                        <nav class="d-flex justify-content-between ">
                            <router-link v-for="(item,index) in links" :key="item.id" tag="li"
                                :to="`/${$route.params.storeName}${item.path}`">
                                <a :id="item.id" @click="toggleActive(index)" class="small fw-bold"
                                    :class="{'ActiveLink':activeIndex===index}" href="">
                                    {{ item.text }}
                                    <b-icon v-if="item.children" icon="chevron-down" aria-hidden="true"></b-icon>
                                </a>

                                <b-popover target="popover-pages" triggers="hover" placement="top">
                                    <router-link v-for="child in item.children" :key="child.id" tag="li"
                                        :to="`/${$route.params.storeName}${child.path}`">
                                        <a id="links-pages" class="text-decoration-none d-block w-100 mb-2 "
                                            href="">{{ child.text }} </a>
                                    </router-link>
                                </b-popover>

                            </router-link>

                        </nav>
                    </b-col>

                    <!-- phone and tablet start -->
                    <b-col cols="6" class="d-lg-none">
                        <div class="d-flex justify-content-end">
                            <b-button class="d-flex aligns-items-center bg-white text-black " v-b-toggle.sidebar-1>
                                <b-icon icon="list" aria-hidden="true"></b-icon>
                            </b-button>
                            <b-sidebar id="sidebar-1" shadow>
                                <div class="px-4 py-2 d-flex flex-column ">

                                    <!-- logo -->
                                    <router-link to="/" tag="li">
                                        <a class="d-block mb-4" href=""><img src="../assets/img/logo.png" alt=""></a>
                                    </router-link>

                                    <!-- panier -->
                                    <div id="header-cart" class="d-flex align-items-center mb-3 ">
                                        <b-avatar icon="heart-fill" badge badge-top badge-offset="-2px"></b-avatar>
                                        <b-avatar icon="basket2-fill" badge badge-top badge-offset="-2px"></b-avatar>
                                        <p class="fs-14">item : <strong>$150.00</strong></p>
                                    </div>

                                    <!-- nav -->
                                    <nav class="d-flex flex-column mb-4 ">
                                        <router-link v-for="(item,index) in links" :key="item.id" tag="li"
                                            :to="item.path">
                                            <a class="border-bottom d-block  py-2" @click="toggleActive(index)"
                                                :class="{'ActiveLink':activeIndex===index}" href="">
                                                {{ item.text }}
                                            </a>
                                        </router-link>
                                    </nav>

                                    <!-- social media -->
                                    <div id="soical-media" class="mb-4">
                                        <b-icon class="me-3" icon="facebook" aria-hidden="true"></b-icon>
                                        <b-icon class="me-3" icon="twitter" aria-hidden="true"></b-icon>
                                        <b-icon class="me-3" icon="linkedin" aria-hidden="true"></b-icon>
                                        <b-icon icon="facebook" aria-hidden="true"></b-icon>
                                    </div>

                                    <!-- gmail and shippig -->
                                    <div class="d-flex flex-column gap-2 mb-4">
                                        <p class="fs-14">
                                            <b-icon class="me-1" icon="envelope-fill" aria-hidden="true"></b-icon>
                                            <span>hamdihamza@gmail.com</span>
                                        </p>
                                        <p class="fs-14 border-start ">
                                            <font-awesome-icon icon="twitter" />Free Shipping for all Order of $99
                                        </p>
                                    </div>

                                    <!-- login -->
                                    <div>
                                        <router-link tag="a" to="/login">
                                            <b-icon class="me-2" icon="person-fill" aria-hidden="true"></b-icon>Login
                                        </router-link>
                                    </div>

                                </div>
                            </b-sidebar>
                        </div>
                    </b-col>
                    <!-- phone and tablet end -->

                    <b-col lg="4" class="mt-3 mt-lg-0">
                        <div id="header-cart"
                            class="d-flex align-items-center justify-content-center  justify-content-lg-end  gap-1">
                            <router-link></router-link>
                            <router-link :to="`/${$route.params.storeName}/Favoris`" >
                                <b-icon class="fs-4 me-2 cursor"  icon="heart" aria-hidden="true"></b-icon>
                            </router-link>
                            <router-link :to="`/${$route.params.storeName}/Shopingcart`" >
                                <b-icon class="fs-4 cursor" icon="cart3" aria-hidden="true"></b-icon>
                            </router-link>
                        
                            <p class="fs-14">Total cart <strong>${{ totalShoppingCart }}</strong></p>
                        </div>
                    </b-col>

                </b-row>
            </b-container>
        </div>
    </section>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'HeaderComp',
        data() {
            return {
                links: [{
                        path: '/',
                        text: "HOME"
                    },
                    {
                        path: '/Categories',
                        text: "CATEGORIES"
                    },
                    {
                        path: '#',
                        text: "PAGES",
                        id: 'popover-pages',
                        children: [{
                                path: '/PageProduct',
                                text: 'Page Product'
                            },

                            {
                                path: '/Shopingcart',
                                text: 'Shoping Cart'
                            },
                            {
                                path: '/ChecKout',
                                text: 'ChecKout'
                            }
                        ]
                    },
                    {
                        path: '/All-blogs',
                        text: "BLOG"
                    },
                    {
                        path: '/Contact',
                        text: "CONTACT"
                    },
                ],

                linksProfil: [{
                        path: '/Myaccount',
                        text: 'My account',
                        icon: 'person'
                    },
                    {
                        path: '/Orders',
                        text: 'Orders',
                        icon: 'bag'
                    },
                    {
                        path: '/Settings',
                        text: 'Settings',
                        icon: 'gear'
                    },
                ],
                activeIndex: 0,
                userConnected: {},
                showCollapseProfil: false,
                cartUser:[]
            }
        },

        computed:{
            totalShoppingCart(){
                let total=0
                if(this.cartUser.length!==0){
                    total=this.cartUser
                    .map(item=>{
                       return (item.product.promotion.priceAfter>0 ? item.product.promotion.priceAfter : item.product.price) * item.quantity
                    } )
                    .reduce((accu,total)=>accu+total,0)
                }
                return total
            }
        },



        methods: {

            isTokenAvailable(){
                const token=localStorage.getItem('tokenCustomer')
                if(token){
                    return 'Connected'
                }else{
                     return 'noConnected'
                }
            },

            toggleActive(index) {
                setTimeout(() => {
                    this.activeIndex = index
                }, 100)
            },

            toggleActiveMounted() {
                const index = this.links.findIndex(ele => ele.path === this.$route.path)
                this.activeIndex = index
            },

            async getUserConnected() {
                try {
                    const nameStore = this.$route.params.storeName
                    // const token=localStorage.getItem('tokenCustomer')
                    const response = axios.get(`http://localhost:3000/api/customers/CustomerConnected/${nameStore}`
                        // ,
                        // {
                        //     headers:{
                        //         Authorization: `Bearer ${JSON.parse(token)}`
                        //     }
                        // }

                    )
                    this.userConnected = response.data.customer

                } catch (error) {
                    console.log('error the get user connected is :', error)
                }
            },

 

            logout() {
                localStorage.clear('tokenCustomer')
                window.location.reload()
            },


            // GET CART USER
            async getCartUser() {
                try {
                    const token = localStorage.getItem('tokenCustomer')
                   const response= await axios.get(`http://localhost:3000/api/cart/getCart/${this.$route.params.storeName}`,
                     {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        }
                    })
                    this.cartUser= response.data.cart.items
                 
                } catch (error) {
                    console.log(`error get cart use is :${error}`)
                }
            },

        },

        mounted() {
            this.toggleActiveMounted()
            this.getUserConnected()
            this.isTokenAvailable()
            this.getCartUser()


        }
    }
</script>

<style lang="scss" scoped>
    #header {

        #topbar {
            background-color: var(--secondary-color);
            padding-block: 10px;

            .fs-14 {
                font-size: var(--small-size);
            }

            p {
                margin: 0px;
            }
        }

        #navBar {
            a:hover {
                color: var(--thirday-color);
            }

            .ActiveLink {
                color: var(--thirday-color);
            }


        }

    }

    #links-pages {
        color: black;

        &:hover {
            color: var(--thirday-color);
        }
    }

    ::v-deep #collapse-profile .card-body {
        padding-inline: 0px;
        padding-block: 15px;


        li {
            padding-inline: 10px;
            padding-block: 5px;
            display: flex;
            align-items: center;

            a {
                display: block;
                width: 100%;

            }

            &:hover {
                background-color: rgb(226, 226, 226)
            }

        }
    }

    .cursor{cursor: pointer;}
</style>