<template lang="">
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
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>