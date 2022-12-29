<template lang="">
    <div>
        <form class="py-3 flex items-center justify-between">
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">
                    Pesquisar
                </label>
                <div class="relative w-5/12 hidden lg:block">
                    <!-- pesqusia desktop -->
                    <input type="search" id="default-search" class="py-2 px-4 w-full text-sm text-gray-900 bg-gray-50 rounded-2xl border border-gray-300 focus:ring-primary focus:border-primary " placeholder="Pesquisar..." required="">
                    <button type="submit" class="text-white absolute h-full right-0 bottom-0 bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-r-2xl text-sm px-4 py-2">
                        <i class="bi bi-search"></i>
                    </button>
                </div>
                <div class="relative lg:hidden rounded-2xl overflow-hidden">
                    <!-- pesqusia mobile -->
                    <!-- <input type="search" id="default-search" class="relative py-5 px-4 w-full text-sm text-gray-900 bg-gray-50 rounded-2xl border border-gray-300 focus:ring-primary focus:border-primary " placeholder="Pesquisar..." required="">
                    <button type="submit" class="text-white absolute h-full right-0 bottom-0 bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-r-2xl text-sm px-4 py-2">
                        <i class="bi bi-search"></i>
                    </button> -->
                </div>
                <div class="gap-3 w-auto hidden lg:flex">
                    <!-- filtros desktop -->
                    <select id="underline_select" class="block py-2.5 px-6 w-full text-sm text-gray-500 text-center bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option selected="">Categorias</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                    <select id="underline_select" class="block py-2.5 text-center px-4 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option selected="">Em Alta</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                    <select id="underline_select" class="block py-2.5 px-4 w-full text-center text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option selected="">Região</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                    <select id="underline_select" class="block py-2.5 px-6 w-full text-sm text-center text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option selected="">Gratuitos</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                    <BtnNav @click="goFilter()" link="#" class="hidden lg:block">    
                        Filtrar
                    </BtnNav>
                </div>
                <!-- filtros mobile -->
                <div class="lg:hidden flex justify-between w-full gap-4">
                    <BtnNav @click="openFilterMobile()" link="#" class="lg:hidden basis-2/3">    
                        Opções de Filtro
                    </BtnNav>
                    <BtnNav @click="openFilterMobile()" link="#" class="lg:hidden basis-1/3">    
                        <i class="bi bi-search"></i>
                    </BtnNav>
                </div>
            </form>
    </div>
</template>
<script>
import BtnNav from '../Navbar/BtnNav.vue';

export default {
    components: {
        BtnNav
    },
    methods: {
        goFilter(){
            console.log('filtrar')
        }
    }
}
</script>
<style lang="">
    
</style>