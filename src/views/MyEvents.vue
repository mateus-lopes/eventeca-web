<script>
    import Navbar from '@/components/Navbar/NavbarComp.vue'
    import Footer from '@/components/Footer/FooterComp.vue'
    import TitleH1 from '@/components/Reusables/TitleH1.vue';
    import CardsList from '@/components/Cards/CardsList.vue';
    import CategoryCards from '@/components/Cards/CategoryCards.vue';
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
        },
    };
</script>
    
<template>
    <header>
        <Navbar page_selection="my-events" :flex="flex" />
    </header>
    <main class="container max-w-screen-base py-8">
        <section class="mb-20">
            <!-- cards lists -->
            <article class="mb-5">
                <TitleH1 title="Minha Lista" />     
                <CardsList />
            </article>
            <article class="my-5">
                <TitleH1 title="Meus Eventos" />     
                <CardsList />
            </article>
            <article class="my-5">
                <TitleH1 title="Mais Acessados" />     
                <CardsList />
            </article>
        </section>
    </main>
    <footer>
        <Footer page_selection="my-events" :flex="flex" />
    </footer>
</template>
