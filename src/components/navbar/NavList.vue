<template>
    <nav class="w-full">
        <ul class="flex flex-col text-center lg:flex-row lg:justify-center">
            <router-link to="/">
                <li :class="css_link" class="bg-primary text-white">
                    Página Inicial
                </li>  
            </router-link>
            <router-link to="/genres">
                <li :class="css_link" class="bg-primary text-white">
                    Gêneros
                </li>
            </router-link>
            <router-link to="/perfil">
                <li :class="css_link" class="bg-primary text-white">
                    Perfil
                </li>
            </router-link>
            <router-link to="/help">
                <li :class="css_link" class="bg-primary text-white">
                    Ajuda
                </li>
            </router-link>
        </ul>
    </nav>
</template> 

<script>

export default {
    data() {
        return {
            css_link: 'hover:border-8 border-primary hover:shadow-2xl xl:hover:border-none xl:hover:shadow-none shadow-black cursor-pointer text-lg xl:text-base transition-all py-10 lg:py-24 lg:px-16 xl:py-0 xl:px-6 xl:hover:text-cyan-700 xl:text-gray-800 xl:bg-white'
        }
    }
}

</script>