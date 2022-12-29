<template lang="">
    <div class="w-full h-screen bg-gray-100 flex justify-center items-center">
        <section class="w-6/12 min-h-96 bg-white shadow-xl rounded-2xl flex overflow-hidden">
            <div class="p-8 px-12 w-full flex flex-col justify-center">
                <TitleH1 title="Logar como Adminstrador" size="4xl" color="gray-400" />
                <router-link to="/login">
                    <div class="block text-sm text-primary pb-4">
                        Mudar para login de Usuário
                    </div>
                </router-link>
                <FormLogin />
                <div class="flex flex-col md:flex-row justify-between gap-6">
                    <div class="w-full">
                        <BtnNav link="dashboard" class="w-full">
                            Entrar
                        </BtnNav>
                    </div>
                </div>
                <div class="pt-4 text-center">
                    <router-link to="/">
                        <div class="block text-sm text-gray-400 underline underline-offset-4">
                            Voltar a Navegação
                        </div>
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import FormLogin from '../../components/Login/FormLogin.vue';
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
        FormLogin
    }    
}
</script>
<style lang="">
    
</style>