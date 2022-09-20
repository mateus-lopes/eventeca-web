<script>
    import NavbarMain from '@/components/Navbar/NavbarMain.vue'
    import TitleH2 from '@/components/Reusables/TitleH2.vue';
    import LinkLi from '@/components/Reusables/LinkLi.vue';
    import SocialMedias from '../Reusables/SocialMedias.vue';
    
    export default {
        data(){
            return {

            }
        },
        components: {
            NavbarMain,
            TitleH2,
            LinkLi,
            SocialMedias
        },
        props: {
            page_selection: String,
            flex: String
        }
    }
</script>
<template>
    <div>
        <div class="flex justify-center py-8 bg-gray-800 lg:hidden">
            <SocialMedias />
        </div>
        <div class="bg-secondary text-white">
            <div class="container max-w-screen-base lg:py-16 pb-10 pt-3 px-4">
                <section class="lg:flex justify-between relative md:pb-8">
                    <div class="lg:max-w-md xl:max-w-lg">
                        <TitleH2 title="Eventeca"/>
                        <p class="text-gray-400 mt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita minus quod in illum vel eligendi similique deleniti ea quidem odio adipisci tempora, aliquam velit libero, eius alias nobis mollitia consequuntur?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita minus quod in illum vel eligendi sim alias nobis mollitia consequuntur?
                        </p>
                    </div>
                    <div class="pt-8 md:pt-0">
                        <TitleH2 title="Categorias"/>
                        <ul>
                            <LinkLi class="my-3">
                                <router-link to="/"> Negócios e Administração </router-link>
                            </LinkLi>
                            <LinkLi class="my-3">
                                <router-link to="/"> Tecnologia  e Inovação</router-link>
                            </LinkLi>
                            <LinkLi class="my-3">
                                <router-link to="/"> Educação </router-link>
                            </LinkLi>
                            <LinkLi class="my-3">
                                <router-link to="/"> Religioso e Espiritualidade </router-link>
                            </LinkLi>
                            <LinkLi class="my-3">
                                <router-link to="/"> Medicina </router-link>
                            </LinkLi>
                        </ul>
                    </div>
                    <div class="pt-8 md:pt-0">
                        <TitleH2 title="Menu"/>
                        <NavbarMain small="false" />
                    </div>
                    <div class="pt-8 md:pt-0">
                        <TitleH2 title="Contato"/>
                        <ul>
                            <LinkLi class="my-3" content="abcabc@abc.com" />
                            <LinkLi class="my-3" content="abcabc@abc.com" />
                            <LinkLi class="my-3" content="+55 (47) 99918-2323" />
                            <LinkLi class="my-3" content="+55 (47) 99918-2323" />
                        </ul>
                    </div>
                    <div class="lg:block md:absolute md:bottom-0 hidden">
                        <SocialMedias />
                    </div>
                </section>
                <section class="md:flex justify-between pt-8 md:pt-4">
                    <div>
                        <TitleH2 title="Com Apoio Especial"/>
                        <div class="flex gap-2 pt-3">
                            <img src="@/assets/img/image 5.png" class="" alt="">
                            <img src="@/assets/img/image 6.png" class="" alt="">
                        </div>
                    </div>
                    <div class="justify-center items-center md:justify-end hidden md:flex md:flex-col">
                        <button class="bg-gray-200 w-14 h-14 flex justify-center items-center rounded-full">
                            <img src="../../assets/img/icons/arrow-up.svg" alt="">
                        </button>
                    </div>
                </section>
            </div>
        </div>
        <div :class="flex" class="py-10">
            <p>
                Desenvolvido por <a href="https://github.com/mateus-lopes" class="text-primary border-b border-primary"> mateus-lopes </a> e <a href="https://github.com/sr-only" class="text-primary border-b border-primary"> sr-only </a>
            </p>
        </div>
    </div>
</template>

<style scoped>
    .bi {
        font-size: 24px;
    }
</style>