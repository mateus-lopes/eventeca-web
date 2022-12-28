<template>
    <main class="w-full mt-8  bg-gray-900 text-white">
        <section class="container max-w-7xl mx-auto lg:flex gap-16 justify-between py-16">
            <!-- img logo / social medias -->
            <div class="w-4/12">
                <ApresentationFooter></ApresentationFooter>
                <SocialMedias></SocialMedias>
            </div>
            <div class="w-8/12 flex justify-end gap-32">
                <!-- categories -->
                <GenericList title="Categorias" :items="categories"></GenericList>
                <!-- navegation -->
                <div class="pt-8 lg:pt-0">
                    <h2 class="text-xl">
                        Menu
                    </h2>
                    <NavList :nav_inline="false" ></NavList>
                </div>
                <!-- contact -->
                <GenericList :links=false title="Contato" :items="contact"></GenericList>
            </div>
        </section>
        <EndFooter></EndFooter>
    </main>
</template>

<script>
import ApresentationFooter from './ApresentationFooter.vue';
import SocialMedias from '../SocialMedias.vue';
import NavList from '../navbar/NavList.vue';
import GenericList from '../GenericList.vue';
import LiLink from '../LiLink.vue';
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
            ]
        }
    },
    props: {
        key_btn: Boolean
    },
    methods: {
        return_to_top() {
            window.scrollTo(0, 0);
        }
    },
    components: {
    ApresentationFooter,
    SocialMedias,
    NavList,
    GenericList,
    LiLink,
    EndFooter
}
}
</script>
