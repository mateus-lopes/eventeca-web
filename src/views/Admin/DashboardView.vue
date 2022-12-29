<template lang="">
    <div class="flex">
        <section class="fixed md:flex justify-between w-full">
            <nav class="bg-primary relative lg:bg-white w-full lg:w-3/12 lg:shadow-lg h-screen flex flex-col justify-center lg:justify-start items-center pt-16">
                <div class="p-12 border-b">
                    <img src="../../assets/img/logo.png" class="h-14" alt="">
                </div>
                <div class="mt-8">
                    <NavList :header_navbar=true :page_selection="page_selection" :nav_inline=false :items="nav_menu" />
                </div>
            </nav>
            <header class="flex gap-4 h-20 p-4">
                <BtnNav class="bg-cyan-700">
                    Menu
                </BtnNav>
                <BtnNav>
                    Nome do Usuario
                </BtnNav>
                <BtnNav class="bg-red-600">
                    <span class="sr-only">Close</span>
                    <svg aria-hidden="true" class="w-5 h-5" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </BtnNav>
            </header>
        </section>
        <section class="w-full lg:w-8/12">
            <main>
                olaasdfadsf
            </main>
        </section>
    </div>
</template>
<script>
import GenericList from "../../components/Commun/GenericList.vue";
import NavList from "../../components/Navbar/NavList.vue";
import BtnNav from "../../components/Navbar/BtnNav.vue";

export default {
    
    components: {
        GenericList,
        NavList,
        BtnNav,
    }
}
</script>