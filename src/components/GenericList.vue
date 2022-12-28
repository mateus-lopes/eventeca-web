<template lang="">
    <div class="pt-8 lg:pt-0">
        <h2 class="text-xl">
            {{title}}
        </h2>
        <ul class="flex flex-col gap-4 mt-4">
            <div v-for="item in items">
                <LiLink :link='computedLink(item.id)'>
                    {{item.title}}
                </LiLink>
            </div>
            <LiLink v-if="this.title == 'Categorias'" link="/all-categories">
                Mais Categorias
            </LiLink>
        </ul>
    </div>
</template> 

<script>
import LiLink from './LiLink.vue';


export default {
    components: { LiLink },
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