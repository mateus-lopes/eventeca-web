<script>
    import Navbar from '@/components/Navbar/NavbarComp.vue'
    import Footer from '@/components/Footer/FooterComp.vue'
    import TitleH1 from '@/components/Reusables/TitleH1.vue';
    import Icon from '@/components/Reusables/Icon.vue';
    import AllCards from '@/components/Cards/AllCards.vue';
    export default {
        data(){
            return {
                
            }
        },
        props: {
            flex: String,
        },
        components: {
            Navbar,
            Footer,
            TitleH1,
            AllCards,
            Icon
        },
    };
</script>
    
<template>
    <header>
        <Navbar page_selection="search-events" :flex="flex" />
    </header>
    <main class="container max-w-screen-base">
        <section class="mb-20 mt-5">
            <form class="py-3 flex items-center justify-between">
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
                    Pesquisar
                </label>
                <div class="relative w-5/12">
                    <input type="search" id="default-search" class="block px-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary" placeholder="Pesquisar..." required="">

                    <button type="submit" class="text-white absolute h-full right-0 bottom-0 bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-r-lg text-sm px-4 py-2 dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary">
                        <i class="bi bi-search"></i>
                    </button>
                </div>
                <div class="flex gap-3 w-auto">
                    <select id="underline_select" class="block py-2.5 px-6 w-full text-sm text-gray-500 text-center bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option selected="">Categorias</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                    <select id="underline_select" class="block py-2.5 text-center px-4 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option selected="">Em Alta</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                    <select id="underline_select" class="block py-2.5 px-4 w-full text-center text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option selected="">Região</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                    <select id="underline_select" class="block py-2.5 px-6 w-full text-sm text-center text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option selected="">Gratuitos</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
            </form>
            <!-- cards lists -->
            <article class="my-5">
                <AllCards />
            </article>
            <div class="w-full flex justify-center mt-16">                
                <nav aria-label="Page navigation example">
                    <ul class="inline-flex items-center -space-x-px">
                        <li>
                            <a href="#" class="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center mx-2">
                                <span class="sr-only">Previous</span>
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" class="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center leading-tight mx-2">
                                -
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" class="w-10 h-10 rounded-full bg-primary text-white flex justify-center items-center leading-tight mx-2">
                                1
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" class="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center leading-tight mx-2">
                                2
                            </a>
                        </li>
                        <li>
                            <a href="#" class="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center mx-2">
                                <span class="sr-only">Next</span>
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    </main>
    <footer>
        <Footer page_selection="search-events" :flex="flex" />
    </footer>
</template>

    