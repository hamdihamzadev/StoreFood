<template id="contact">
    <section>
        <div class="mb-5">
            <breadCrumb />
        </div>
        <b-container>
            <b-row class="g-5" >
                <b-col cols="12" lg="3" v-for="item in infosContact" :key="item.id" class="d-flex flex-column align-items-center gap-4 ">
                    <b-icon id="icon" :icon="item.icon" aria-hidden="true"></b-icon>
                    <div>
                        <h5 class="fw-bold text-center"><strong>{{ item.name }}</strong></h5>
                        <p class="text-body-tertiary">{{ item.info }}</p>
                    </div>
                </b-col>
            </b-row>
        </b-container>


        <div class="h-100 mt-5">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.56000802846!2d-7.669393781715836!3d33.57240323199791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sfr!2sma!4v1727271220436!5m2!1sfr!2sma"
                class="border-0 w-100" style="height: 50vh;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <b-container class="mt-5" >
            <div>
                <h1 class="text-center fw-bold mb-4 mb-md-5" ><strong>Leave Message</strong></h1>
                <b-form>
                    <b-row class="g-4" >
                        <b-col md="6">
                            <b-form-input  class="h-100 focusNone" v-model="form.name" type="email" placeholder="Your name"
                                required></b-form-input>
                        </b-col>
                        <b-col md="6">
                            <b-form-input  class="h-100 focusNone"  v-model="form.email" type="email" placeholder="Your email"
                                required></b-form-input>
                        </b-col>
                        <b-col cols="12" >
                            <b-form-textarea style="height: 100px;" class="focusNone" v-model="form.message" placeholder="Your message..." rows="3"
                                max-rows="6"></b-form-textarea>
                        </b-col>
                        <b-col cols="12">
                            <b-button id="btn-form"  class="w-100 py-2 px-3" type="submit" variant="primary"><strong>Send message</strong></b-button>
                        </b-col>
                        
                    </b-row>






                </b-form>

            </div>

        </b-container>
    </section>
</template>

<script>
    import breadCrumb from '@/components/BreadCrumb.vue'
    export default {
        name: "ContactView",
        components: {
            breadCrumb
        },
        data() {
            return {
                infosContact: [{
                        icon: 'telephone',
                        name: 'Phone',
                        info: '+21262723586'
                    },
                    {
                        icon: 'pin-map',
                        name: 'Address',
                        info: 'Morocco - Casablanca'
                    },
                    {
                        icon: 'stopwatch',
                        name: 'Open time',
                        info: '7/7 9am : 23pm'
                    },
                    {
                        icon: 'envelope-fill',
                        name: 'Email',
                        info: 'hamdihamzadev@hotmail.com'
                    },
                ],
                form: {
                    name: '',
                    email: '',
                    message: ''
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #icon {
        color: var(--thirday-color);
        font-size: 32px;
    }

    .focusNone:focus{
        box-shadow: none;
        border-color: var(--thirday-color)
    }

    #btn-form{
        background-color: var(--thirday-color);
        border-color: var(--thirday-color);

        &:hover{
            background-color: transparent;
            color: var(--thirday-color);
        }
    }
</style>