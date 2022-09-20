<script>
import NavbarMain from '@/components/Navbar/NavbarMain.vue'
import NavbarUser from '@/components/Navbar/NavbarUser.vue'

export default {
    data() {
        return {
            mobile__navbar: {
                'css':'hidden',
                'open_menu': false
            },
        }
    },
    components: {
        NavbarMain,
        NavbarUser,
    },
    props: {
        page_selection: String,
        flex: String,
    },
    methods: {
        toogle_navbar() {
            console.log('toogle_navbar activate')
            this.mobile__navbar.css = this.mobile__navbar.key ? 'fadeOut' : 'fadeIn'
            this.mobile__navbar.key = this.mobile__navbar.key ? false : true
        },
    }

}
</script>
<template>
    <section class="shadow-lg lg:py-4">
        <header class="container max-w-screen-base flex justify-between items-center px-4 py-3 text-gray-600">
            <div class="flex justify-between lg:justify-start w-full lg:w-auto items-center gap-8">
                <div>
                    <img src="../../assets/img/logo.png" alt="">
                </div>
                <div class="lg:hidden">
                    <span @click="toogle_navbar">
                        <i class="bi bi-list nav-icon"></i>
                    </span>
                    <div :class="(mobile__navbar.css)" class="w-full h-screen z-10 fixed top-0 right-0 bg-white text-sm">
                        <div class="py-9 flex border-b border-gray-200 justify-center items-center">
                            <img src="../assets/img/logo.png" class="h-12" alt="">
                        </div>  
                        <div :class="flex" class="absolute top-0 left-0 right-0 bottom-0">
                            <NavbarMain :nav_inline=false :page_selection="page_selection" />
                        </div>
                        <div :class="flex" class="fixed bottom-0 left-0">
                            <div>
                                <NavbarUser :active="mobile__navbar.key" :nav_inline=false user_login="Entrar no Sistema" />
                                <a @click="toogle_navbar" href="#" class="text-2xl pb-2 flex justify-center">
                                    <img src="../../assets/img/icons/close.svg" class="w-8" alt="">
                                </a>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="lg:block hidden">
                    <NavbarMain :nav_inline=true small="true" :page_selection="page_selection" />
                </div>
            </div>
            <div class="lg:flex hidden">
                <NavbarUser :nav_inline=true user_login="Entrar no Sistema" />
            </div>
        </header>
    </section>
</template> 


<style scoped>
    .bi {
        font-size: 24px;
    }
    .nav-icon {
        font-size: 38px;
    }
</style>