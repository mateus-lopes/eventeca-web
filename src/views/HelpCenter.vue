<script>
    import Navbar from '@/components/Navbar/NavbarComp.vue'
    import Footer from '@/components/Footer/FooterComp.vue'
    import TitleH1 from '@/components/Reusables/TitleH1.vue';
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
        },
    };
</script>
    
<template>
    <header>
        <Navbar page_selection="my-events" :flex="flex" />
        <section class="w-full h-screen bg-primary flex items-center justify-center">
            <div class="text-center max-w-4xl">
                <TitleH1 title="Central de Atendimento" color="white" size="4xl" />
                <p class="pb-8 pt-4 text-white">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie.
                </p>
                <div class="px-16 my-6">
                    <button class="w-full bg-white py-4 rounded-lg">
                        Tutoriais
                    </button>
                </div>
                <div class="px-16 my-6">
                    <button class="w-full bg-white py-4 rounded-lg">
                        Perguntas Frequentes
                    </button>
                </div>
                <div class="px-16 my-6">
                    <button class="w-full bg-white py-4 rounded-lg">
                        Entrar em Contato
                    </button>
                </div>
            </div>
        </section>
    </header>
    <main class="container max-w-screen-base py-8">

    </main>
    <footer>
        <Footer page_selection="my-events" :flex="flex" />
    </footer>
</template>
