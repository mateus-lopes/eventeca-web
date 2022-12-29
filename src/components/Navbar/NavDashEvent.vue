<template lang="">
    <div>
        <div class="mt-8">
            <NavList :header_navbar=true :page_selection="page_selection" :nav_inline=false :items="nav_menu" />
        </div>
    </div>
</template>
<script>
import NavList from './NavList.vue';

export default {
    components: {    
        NavList,
    },
    props:{
        page_selection: String,
    },
    data() {
        return {
            nav_menu: [
                {
                    title:'Visão geral',
                    id:'admin/events/dashboard'
                },
                {
                    title:'Programação',
                    id:'admin/events/organization'
                },
                {
                    title:'Inscrição',
                    id:'admin/events/inscription'
                },
                {
                    title:'Vendas',
                    id:'admin/events/sales'
                },
                {
                    title:'Certificados',
                    id:'admin/events/certificates'
                },
                {
                    title:'Configurações',
                    id:'admin/events/settings'
                }
            ]
        }
    },
}
</script>
<style lang="">
    
</style>