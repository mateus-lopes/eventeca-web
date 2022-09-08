<template>
    <nav class="text-center"> 
        <ul :class="navbar">
            <li class="">
                <router-link to="/">Criar um Evento</router-link>
            </li>
            <li class="my-2 py-1.5 px-16 bg-primary text-white rounded">
                <router-link to="/search-events">Entrar</router-link>
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
                    'block text-center':(this.nav_block ? this.nav_block : false),
                }
            }
        }, 
        props: {
            user_login: String,
            nav_inline: Boolean,
            block: Boolean,
        },
        methods: {
        }
    }
</script>