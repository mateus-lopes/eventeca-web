<template lang="">
    <div class="bg-gray-100">
        <header>
            <NavbarComp />
        </header>
        <main class="my-16">
            <section class="container max-w-7xl mx-auto p-20 shadow-xl rounded-2xl bg-white flex justify-start">
                <div class="basis-1/4">
                    <img src="../assets/img/example.jpg" class="rounded-2xl w-52 h-52" alt="">
                </div>
                <div class="basis-auto">
                    <TitleH2 title="NOME DE USUARIO" />
                    <p class="pb-2">Descrição: SER</p>
                    <p class="py-2">Email: joaozinho@gmail.com</p>
                    <p class="py-2">Telefone 1: (23) 912345678</p>
                    <p class="py-2">Telefone 2: (23) 912345678</p>
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
import TitleH2 from "../../components/Commun/TitleH2.vue";

export default {
    data() {
        return {
        };
    },
    components: {
        NavbarComp,
        Footer,
        TitleH2,
    },
}
</script>