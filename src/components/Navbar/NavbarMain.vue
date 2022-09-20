<template>
    <nav> 
        <ul :class="navbar">
            <LinkLi url="home-page" :page_selection="page_selection">
                <div class='pr-8 md:px-0 my-3 flex'>
                    <Icon :small="small" content="bi bi-house" />
                    <router-link to="/">Página Inicial</router-link>
                </div>    
            </LinkLi>
            <LinkLi url="search-events" :page_selection="page_selection">
                <div class='pr-8 md:px-0 my-3 flex'>
                    <Icon :small="small" content="bi bi-people" />
                    <router-link to="/search-events">Encontre Eventos</router-link>
                </div>                
            </LinkLi>
            <LinkLi url="my-events" :page_selection="page_selection">
                <div class='pr-8 md:px-0 my-3 flex'>
                    <Icon :small="small" content="bi bi-bag-check" />
                    <router-link to="/my-events">Meus Eventos</router-link>
                </div>
            </LinkLi>        
            <LinkLi url="help-center" :page_selection="page_selection">
                <div class='pr-8 md:px-0 my-3 flex'>
                    <Icon :small="small" content="bi bi-question-circle" />
                    <router-link to="/help-center">Ajuda</router-link>
                </div>
            </LinkLi>
        </ul>
    </nav>
</template> 

<script>
import Icon from '@/components/Reusables/Icon.vue';
import LinkLi from '@/components/Reusables/LinkLi.vue';
    export default {
    data() {
        return {
            navbar: {
                "flex gap-6 text-gray-600": (this.nav_inline ? this.nav_inline : false),
                "text-light": (this.text_white ? this.text_white : false),
            },
            li_style: 'my-5 md:my-2 w-40 md:w-auto flex items-center gap-2'
        };
    },
    props: {
        page_selection: String,
        nav_inline: Boolean,
        small: Boolean,
    },
    components: { Icon, LinkLi}
}
</script>

<style>
    .active {
        position: relative;
    }
    .active::after {
        animation: mobile__nav .5s ease-out;
        content: '';
        display: block;
        width: 3px;
        height: 100%;
        background-color: #288D85;
        border-radius: 5px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
    }

    @keyframes mobile__nav {
        0% {
            height: 0;
        }
        100% {
            height: 100%;
        }
    }

    @media screen and (min-width:768px) {
        .active::after {
            content: none;
        }
    }

</style>