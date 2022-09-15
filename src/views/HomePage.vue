<script>
import Navbar from '@/components/Navbar/NavbarComp.vue'
import Footer from '@/components/Footer/FooterComp.vue'
import TitleH1 from '@/components/Reusables/TitleH1.vue';
import CardsList from '@/components/Cards/CardsList.vue';
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
    CardsList
},
    methods: {
    }
};
</script>

<template>
    <header>
        <Navbar page_selection="home-page" :flex="flex" />
    </header>
    <!-- <main class="container py-8">
        <TitleH1 title="Categoria 1" />     
        <CardsList />
    </main> -->
    <footer>
        <Footer page_selection="home-page" :flex="flex" />
    </footer>
</template>
