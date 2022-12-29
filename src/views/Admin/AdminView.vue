<template lang="">
    <div class="flex">
        <section class="fixed bg-primary lg:bg-white w-full lg:w-3/12">
            <header class="shadow-lg h-screen flex flex-col justify-center lg:justify-start items-center pt-16">
                <div class="p-12 border-b">
                    <img src="../assets/img/logo.png" class="h-14" alt="">
                </div>
                <div class="mt-8">
                    <NavList :header_navbar=true :page_selection="page_selection" :nav_inline=false :items="nav_menu" />
                </div>
            </header>
        </section>
        <section class="w-full lg:w-8/12">
            <main>
            </main>
        </section>
    </div>
</template>
<script>
import GenericList from "../../components/Commun/GenericList.vue";
import NavList from "../../components/Navbar/NavList.vue";

export default {
    data() {
        return {
            nav_menu: [
                {
                    title:'Dashboard',
                    id:'##'
                },
                {
                    title:'Pessoas',
                    id:'##'
                },
                {
                    title:'Programação',
                    id:'##'
                },
                {
                    title:'Inscrição',
                    id:'##'
                },
                {
                    title:'Vendas',
                    id:'##'
                },
                {
                    title:'Certificados',
                    id:'##'
                },
                {
                    title:'Configurações',
                    id:'##'
                }
            ]
        }
    },
    components: {
        GenericList,
        NavList,
    }
}
</script>