<script>
import Navbar from '@/components/Navbar/NavbarComp.vue'
import Footer from '@/components/Footer/FooterComp.vue'
import TitleH1 from '@/components/Reusables/TitleH1.vue';
import CardsList from '@/components/Cards/CardsList.vue';
import CategoryCards from '@/components/Cards/CategoryCards.vue';
import Carousel from '@/components/Carousel/Carousel.vue';
import BenefitsSection from '@/components/Benefits/index.vue';
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
    CardsList,
    CategoryCards,
    Carousel,
    BenefitsSection 
},
    methods: {
    }
};
</script>

<template>
    <header>
        <Navbar page_selection="home-page" :flex="flex" />
    </header>
    <main class="container max-w-screen-base py-8">
        <section class="m-0 p-0">
            <TitleH1 title="Procurando algo em especifico?" />     
            <CategoryCards />
        </section>
        <section class="m-0 p-0">
            <TitleH1 title="Eventos em destaque" />     
            <Carousel />
        </section>
        <section class="my-10">
            <!-- cards lists -->
            <article class="mb-5">
                <TitleH1 title="Categoria 1" />     
                <CardsList />
            </article>
            <article class="my-5">
                <TitleH1 title="Categoria 2" />     
                <CardsList />
            </article>
            <article class="my-5">
                <TitleH1 title="Categoria 3" />     
                <CardsList />
            </article>
        </section>
        <section>
            <BenefitsSection />
        </section>
        <section class="py-16 text-center">
            parceiros
        </section>
    </main>
    <footer>
        <Footer page_selection="home-page" :flex="flex" />
    </footer>
</template>
