<template>
    <main class="w-full mt-8  bg-gray-900 text-white">
        <section class="container max-w-7xl mx-auto lg:flex gap-16 justify-between py-16">
            <!-- img logo / social medias -->
            <div class="w-4/12">
                <img src="../../assets/img/logo.png" alt="">
                <p class="pt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellendus quis debitis doloremque praesentium aliquid mollitia nulla repudiandae iusto voluptatibus, molestiae error adipisci tenetur animi sequi exercitationem suscipit officiis nemo.
                </p>
                <ul class="flex gap-4 mt-4">
                    <li>
                        <img src="../../assets/img/ico-white.png" class="w-10" alt="">
                    </li>
                    <li>
                        <img src="../../assets/img/ico-white.png" class="w-10" alt="">
                    </li>
                    <li>
                        <img src="../../assets/img/ico-white.png" class="w-10" alt="">
                    </li>
                    <li>
                        <img src="../../assets/img/ico-white.png" class="w-10" alt="">
                    </li>
                </ul>
            </div>
            <div class="w-8/12 flex justify-end gap-32">
                <!-- categories -->
                <div class="pt-8 lg:pt-0">
                    <h2 class="text-xl">
                        Categorias
                    </h2>
                    <ul class="flex flex-col gap-4 mt-4">
                        <li>
                            Link de Categoria
                        </li>
                        <li>
                            Link de Categoria
                        </li>
                        <li>
                            Link de Categoria
                        </li>
                        <li>
                            Mais Categorias
                        </li>
                    </ul>
                </div>
                <!-- navegation -->
                <div class="pt-8 lg:pt-0">
                    <h2 class="text-xl">
                        Menu
                    </h2>
                    <ul class="flex flex-col gap-4 mt-4">
                        <router-link to="/">
                            <li>
                                Página Inicial
                            </li>  
                        </router-link>
                        <router-link to="/genres">
                            <li>
                                Gêneros
                            </li>
                        </router-link>
                        <router-link to="/perfil">
                            <li>
                                Perfil
                            </li>
                        </router-link>
                        <router-link to="/help">
                            <li>
                                Ajuda
                            </li>
                        </router-link>
                    </ul>
                </div>
                <!-- contact -->
                <div class="pt-8 lg:pt-0">
                    <h2 class="text-xl">
                        Contato
                    </h2>
                    <ul class="flex flex-col gap-4 mt-4">
                        <li>
                            email para contato
                        </li>
                        <li>
                            numero para contato
                        </li>
                        <li>
                            numero para contato
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <p class="text-gray-400 text-sm text-center w-full bg-gray-800 py-8">
            SIGAA | Diretoria de Tecnologia da Informação - (47) 3331-7800 | Copyright © 2006-2022 - UFRN - jboss-sigaa-05.sig.ifc.edu.br.sigaa05 - v4.8.7.j
        </p>
    </main>
</template>

<script>
import NavList from '../navbar/NavList.vue';

    export default {
    props: {
        key_btn: Boolean
    },
    methods: {
        return_to_top() {
            window.scrollTo(0, 0);
        }
    },
    components: { NavList }
}
</script>
