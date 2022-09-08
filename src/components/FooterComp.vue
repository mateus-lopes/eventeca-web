<script>
    import NavbarMain from '@/components/Navbar/NavbarMain.vue'
import TitleH2 from './Reusables/TitleH2.vue';
    export default {
        data(){
            return {

            }
        },
        components: {
    NavbarMain,
    TitleH2
},
        props: {
            page_selection: String,
            flex: String
        }
    }
</script>
<template>
    <div>
        <section class="bg-secondary p-8 text-white" :class="flex">
            <footer>
                <div>
                    <TitleH2 title="Eventeca"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita minus quod in illum vel eligendi similique deleniti ea quidem odio adipisci tempora, aliquam velit libero, eius alias nobis mollitia consequuntur?</p>
                </div>
                <div>
                    <TitleH2 title="Menu"/>
                    <NavbarMain :nav_inline=false small="true" :page_selection="page_selection" />    
                </div>
                <div>
                    <TitleH2 title="Categorias"/>
                    <ul>
                        <li class="mb-5">fadfasdfasdfasf</li>
                        <li class="my-5">fadfasdfasdfasf</li>
                        <li class="my-5">fadfasdfasdfasf</li>
                        <li class="mt-5">fadfasdfasdfasf</li>
                    </ul>
                </div>
                <div>
                    <TitleH2 title="Contato"/>
                    <ul>
                        <li class="mb-5">fadfasdfasdfasf</li>
                        <li class="my-5">fadfasdfasdfasf</li>
                        <li class="my-5">fadfasdfasdfasf</li>
                        <li class="mt-5">fadfasdfasdfasf</li>
                    </ul>
                </div>
                <div>
                    <TitleH2 title="Com Apoio Especial"/>
                    <div class="flex gap-2">
                        <img src="@/assets/img/image 5.png" alt="">
                        <img src="@/assets/img/image 5.png" alt="">
                    </div>
                </div>
            </footer>
        </section>
        <div :class="flex" class="py-10">
            <p>
                Desenvolvido por <a href="https://github.com/mateus-lopes" class="text-primary border-b border-primary"> mateus-lopes </a> e <a href="https://github.com/sr-only" class="text-primary border-b border-primary"> sr-only </a>
            </p>
        </div>
    </div>
</template>
<style>
    
</style>