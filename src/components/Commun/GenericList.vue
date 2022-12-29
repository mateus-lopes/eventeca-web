<template lang="">
    <div class="pt-8 lg:pt-0">
        <TitleH2 :title="title" size="xl" />
        <ul class="flex flex-col gap-4">
            <div v-for="item in items">
                <LiLink :links='links' :link='computedLink(item.id)'>
                    {{item.title}}
                </LiLink>
            </div>
            <LiLink v-if="this.title == 'Categorias'" link="all-categories">
                Mais Categorias
            </LiLink>
        </ul>
    </div>
</template> 

<script>
import LiLink from './LiLink.vue';
import TitleH2 from './TitleH2.vue';


export default {
    components: { LiLink, TitleH2 },
    props: {
        title: String,
        items: Array,
        links: Boolean,
    },
    methods: {
        computedLink(link){
            return this.links ? '/categories/' + link : '#'
        }
    }
}
</script>