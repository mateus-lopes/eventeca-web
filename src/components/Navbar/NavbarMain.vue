<template>
    <nav> 
        <ul :class="navbar">
            <li class="mb-5 md:my-2 w-40 md:w-auto flex items-center gap-2" :class="{'text-primary active':check_navbar('home-page')}">
                <!-- <img src="../../assets/img/icons/home.svg" class="w-5" alt=""> -->
                <i :class="{'hidden':small}" class="bi bi-house"></i>
                <router-link to="/">Página Inicial</router-link>
            </li>
            <li class="my-5 md:my-2 w-40 md:w-auto flex items-center gap-2" :class="{'text-primary active':check_navbar('search-events')}">
                <!-- <img src="../../assets/img/icons/people.svg" class="w-5" alt=""> -->
                <i :class="{'hidden':small}" class="bi bi-people"></i>
                <router-link to="/search-events">Encontre Eventos</router-link>
            </li>
            <li class="my-5 md:my-2 w-40 md:w-auto flex items-center gap-2" :class="{'text-primary active':check_navbar('my-events')}">
                <!-- <img src="../../assets/img/icons/star.svg" class="w-5" alt=""> -->
                <i :class="{'hidden':small}" class="bi bi-bag-check"></i>
                <router-link to="/my-events">Meus Eventos</router-link>
            </li>
            <li class="mt-5 md:my-2 w-40 md:w-auto flex items-center gap-2" :class="{'text-primary active':check_navbar('help-center')}">
                <!-- <img src="../../assets/img/icons/info.svg" class="w-5" alt=""> -->
                <i :class="{'hidden':small}" class="bi bi-question-circle"></i>
                <router-link to="/help-center">Ajuda</router-link>
            </li>
        </ul>
    </nav>
</template> 

<script>
    export default {
        data() {
            return {
                navbar: {
                    'flex gap-6 text-gray-600':(this.nav_inline ? this.nav_inline : false),
                    'text-light':(this.text_white ? this.text_white : false),
                }
            }
        }, 
        props: {
            page_selection: String,
            nav_inline: Boolean,
            small: Boolean,
        },
        methods: {
            check_navbar(link){
                return link == this.page_selection
            }
        }
    }
</script>

<style scoped>

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
        animation: mobile__na2v .5s ease-out;
        width: 100%;
        height: 2px;
        right: 0;
        bottom: -20px;
        top: auto;
    }
    }

</style>