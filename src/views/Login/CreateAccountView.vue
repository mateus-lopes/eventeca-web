<template lang="">
    <div class="w-full lg:h-screen py-16 bg-gray-100 flex justify-center items-center">
            <section class="w-10/12 min-h-96 bg-white shadow-xl rounded-2xl flex overflow-hidden">
                        <div class="bg-primary hidden lg:w-5/12 lg:flex lg:justify-center lg:items-center">
                            <img src="../../assets/img/form-create-account.svg" class="w-full p-24" alt="">
                        </div>
                        <div class="py-8 lg:py-2 xl:py-8 px-12 w-full lg:w-7/12 flex flex-col justify-center">
                            <TitleH1 title="Formualrio de Login" size="4xl" color="gray-400" />
                            <FormCreateAccount />
                            <div class="flex flex-col md:flex-row justify-between gap-6">
                                <div class="flex flex-col md:flex-row md:gap-8 gap-4">
                                    <router-link to="/login">
                                        <div class="block text-sm text-gray-400 underline underline-offset-4">
                                            Já possui uma Conta?
                                        </div>
                                    </router-link>
                                </div>
                                <div class="w-full md:w-5/12">
                                    <BtnNav class="w-full">
                                        Criar Conta
                                    </BtnNav>
                                </div>
                            </div>
                        </div>
            </section>
    </div>
</template>
<script>
import FormCreateAccount from '../../components/Login/FormCreateAccount.vue';
import TitleH1 from '../../components/Commun/TitleH1.vue';
import BtnNav from '../../components/Navbar/BtnNav.vue';

export default {
    data(){
        return {
            email: '',
            password: ''
        }
    },
    components:{
        BtnNav,
        TitleH1,
        FormCreateAccount
    }    
}
</script>
<style lang="">
    
</style>