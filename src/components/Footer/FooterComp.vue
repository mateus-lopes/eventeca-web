<template>
    <main class="w-full  bg-secondary text-white">
        <section class="container max-w-7xl mx-auto lg:flex gap-16 justify-between pt-16">
            <!-- img logo / social medias -->
            <div class="w-full lg:w-4/12">
                <ApresentationFooter />
                <SocialMedias />
            </div>
            <div class="w-full lg:w-8/12 lg:flex justify-end gap-32">
                <!-- categories -->
                <GenericList title="Categorias" :items="categories" />
                <!-- navegation -->
                <div class="pt-8 lg:pt-0">
                    <TitleH2  title="Menu" size="xl"/>
                    <NavList :items="nav_menu" :page_selection="page_selection" :nav_inline="false" ></NavList>
                </div>
                <!-- contact -->
                <GenericList :links=true title="Contato" :items="contact" />
            </div>
        </section>
        <section class="container max-w-7xl mx-auto md:flex justify-end pb-16 pt-8 lg:pt-0">
            <div @click="return_to_top()" class="justify-center items-center md:justify-end hidden md:flex md:flex-col">
                <button class="transition-all bg-gray-200 w-14 h-14 flex justify-center items-center rounded-full">
                    <img src="../../assets/img/icons/arrow-up.svg" alt="">
                </button>
            </div>
        </section>
        <EndFooter />
    </main>
</template>

<script>
import ApresentationFooter from './ApresentationFooter.vue';
import SocialMedias from '../Commun/SocialMedias.vue';
import NavList from '../Navbar/NavList.vue';
import GenericList from '../Commun/GenericList.vue';
import LiLink from '../Commun/LiLink.vue';
import TitleH2 from '../Commun/TitleH2.vue';
import EndFooter from './EndFooter.vue';

export default {
    data() {
        return {
            categories: [
                {title:'Categoria 1', id:'###'},
                {title:'Categoria 2', id:'###'},
                {title:'Categoria 3', id:'###'}
            ],
            contact: [
                {title:'Contato 1'},
                {title:'Contato 2'},
                {title:'Contato 3'}
            ],
            nav_menu: [
                {
                    title:'Pagina Inicial',
                    id:'/'
                },
                {
                    title:'Encrote Eventos',
                    id:'events'
                },
                {
                    title:'Meus Eventos',
                    id:'my-events'
                },
                {
                    title:'Ajuda',
                    id:'help'
                },
            ],
        }
    },
    props: {
        key_btn: Boolean,
        page_selection: String,
    },
    methods: {
        return_to_top() {
            window.scrollTo(0, 0);
        }
    },
    components: {
    ApresentationFooter,
    SocialMedias,
    TitleH2,
    NavList,
    GenericList,
    LiLink,
    EndFooter
}
}
</script>


