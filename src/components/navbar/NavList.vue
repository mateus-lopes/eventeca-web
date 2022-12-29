<template>
    <nav class="w-full">
        <ul class="flex flex-col gap-4" :class="{'gap-0 lg:flex-row lg:justify-center text-center': nav_row}">
            <LiLink link="/" :style="css_link" :page_selection="page_selection">
                Página Inicial
            </LiLink>
            <LiLink link="events" :style="css_link" :page_selection="page_selection">
                Encontre Eventos
            </LiLink>
            <LiLink link="my-events" :style="css_link" :page_selection="page_selection">
                Meus Eventos
            </LiLink>
            <LiLink link="help" :style="css_link" :page_selection="page_selection">
                Ajuda
            </LiLink>
        </ul>
    </nav>
</template> 

<script>
import LiLink from '../LiLink.vue';


export default {
    data() {
        return {
            css_link: this.header_navbar ? "bg-primary text-white hover:border-8 border-primary hover:shadow-2xl xl:hover:border-none xl:hover:shadow-none shadow-black cursor-pointer text-lg xl:text-base transition-all py-10 lg:py-24 lg:px-16 xl:py-0 xl:px-4 xl:hover:text-cyan-700 xl:text-gray-800 xl:bg-white" : '' 
        };
    },
    props: {
        nav_row: Boolean,
        header_navbar: Boolean,
        page_selection: String,
    },
    components: { LiLink }
}

</script>