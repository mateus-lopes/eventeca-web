<template lang="">
    <div class="bg-gray-100">
        <header>
            <NavbarComp />
        </header>
        <main class="my-16">
            <section class="container max-w-5xl mx-auto px-16 py-8 shadow-xl rounded-2xl bg-white">
                <TitleH1 title="PERFIL DO USUÁRIO" />
                <div class=" flex justify-start items-start">
                    <div class="w-5/12">
                        <img src="../../assets/img/mika.png" class="rounded-2xl w-52 h-52" alt="">
                    </div>
                    <div class="w-full">
                        <p class="py-2">Nome Completo: Dados do Usuário</p>
                        <p class="py-2">Email: Dados do Usuário</p>
                        <p class="py-2">Telefone 1: Dados do Usuário</p>
                        <p class="py-2">Telefone 2: Dados do Usuário</p>
                        <p class="py-2">Endereço: Dados do Usuário</p>
                        <div class="flex gap-4 text-right justify-end">
                            <BtnNav class="bg-red-600">
                                Sair
                            </BtnNav>
                            <BtnNav>
                                Atualizar Dados
                            </BtnNav>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
</template>
<script>
import Footer from "../../components/Footer/FooterComp.vue";
import NavbarComp from "../../components/Navbar/NavComp.vue";
import BtnNav from "../../components/Navbar/BtnNav.vue";
import TitleH1 from "../../components/Commun/TitleH1.vue";

export default {
    data() {
        return {
        };
    },
    components: {
        NavbarComp,
        Footer,
        TitleH1,
        BtnNav,
    },
}
</script>