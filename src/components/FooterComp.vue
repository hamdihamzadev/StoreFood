<template>
    <section id="footer" class="py-5">
        <b-container class="px-lg-5" >
            <b-row>
                <b-col md="4">
                    <div id="information-contact" class="text-start">
                        <img class="mb-4" src="../assets//img//logo.png" alt="">
                        <div>
                            <p class="mb-2">Address: 60-49 Road 11378 New York</p>
                            <p class="mb-2">Phone: +65 11.188.888</p>
                            <p>Email: hello@colorlib.com</p>
                        </div>
                    </div>
                </b-col>
                <b-col md="2">
                    <div id="pages" class="text-start">
                        <p class="mb-3"> <strong>Pages</strong> </p>
                        <nav class="d-flex flex-column gap-2">
                            <router-link v-for="item in linkPages" :key="item.id" :to="item.path" tag="li">
                                <a class="fs-14" href="">{{ item.text }}</a></router-link>
                        </nav>
                    </div>
                </b-col>
                <b-col md="2">
                    <div id="about" class="text-start">
                        <p class="mb-3"> <strong>About us</strong> </p>
                        <nav class="d-flex flex-column gap-2">
                            <router-link v-for="item in linkAbout" :key="item.id" :to="item.path" tag="li"><a
                                    class="fs-14" href="">{{ item.text }}</a></router-link>
                        </nav>
                    </div>
                </b-col>
                <b-col md="4">
                    <div id="Newsletter" class="text-start">
                        <p class="mb-2"><strong>Join Our Newsletter Now</strong></p>
                        <p class="fs-14 mb-4">Get E-mail updates about our latest shop and special offers.</p>
                       
                            <b-form class="d-flex" id="form" >
                                <b-form-input class="rounded-0" id="inline-form-input-name" placeholder="EENTER YOUR EMAIL"></b-form-input>
                                <b-button id="btn-newsletter" class="rounded-0 border-0" variant="primary"><strong>SUBSCRIBE</strong></b-button>
                            </b-form>
                       

                        <div id="social-media" class="mt-3 d-flex gap-2">
                            <a href="" >
                                <b-icon icon="facebook" scale="0.5" class="rounded-circle bg-white  text-dark" variant="light" aria-hidden="true"></b-icon>
                               
                               
                            </a>
                            <a href="" >
                                <b-icon icon="instagram" scale="0.5" class="rounded-circle bg-white  text-dark" variant="light" aria-hidden="true"></b-icon>
                            </a>
                            <a href="" >
                                <b-icon icon="twitter" scale="0.5" class="rounded-circle bg-white  text-dark" variant="light" aria-hidden="true"></b-icon>
                            </a>
                            <a href="" >
                                <b-icon icon="linkedin" scale="0.5" class="rounded-circle bg-white  text-dark" variant="light" aria-hidden="true"></b-icon>
                            </a>
            
                        </div>

                    </div>
                </b-col>
            </b-row>

            <b-row class="border-top mt-5 pt-4">
                <b-col>
                    <div id="Copyright" class="text-start">
                        <p>Copyright ©2024 All rights reserved | This template is made with <a href=""></a></p>
                    </div>
                </b-col>
                <b-col>
                    <div id="payment" class="text-end">
                        <img src="../assets/img/payment-item.png" alt="">
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: 'FooterStore',
        data() {
            return {
                linkPages: [{
                        path: 'home',
                        text: "Home"
                    },
                    {
                        path: 'categories',
                        text: "Categories"
                    },
                    {
                        path: 'contact',
                        text: "Contact"
                    },
                    {
                        path: 'blog',
                        text: "Blog"
                    },
                ],
                linkAbout: [{
                        path: 'Whoweare',
                        text: "Who we are"
                    },
                    {
                        path: 'deliveryinfomation',
                        text: "Delivery infomation"
                    },
                    {
                        path: 'privacypolicy',
                        text: "Privacy Policy"
                    },
                    {
                        path: 'returnpolicy',
                        text: "Return Policy"
                    },
                ],
            }
        }
    }
</script>

<style scoped >
#footer{
    background-color: var(--secondary-color);
}
#btn-newsletter{
    background-color: var(--thirday-color)
}

#Newsletter{
    #form{
        input:focus{
            box-shadow: none;
            border-color: transparent;
        }
    }
}

#social-media{
    font-size: 32px;
  
}


</style>