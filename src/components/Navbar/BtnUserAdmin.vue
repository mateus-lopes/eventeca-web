<template lang="">
    <div class="hidden lg:flex gap-8 items-center">
        <BtnNav :stroke=true link="/">
            Ver Site
        </BtnNav>
        <router-link :to="link">
            <div class="bg-primary py-2.5 px-20 rounded-bl-2xl text-white flex justify-around gap-2 font-medium">
                <slot></slot>
                <img src="../../assets/img/arrow-white.png" class="-rotate-90" alt="">
            </div>
        </router-link>
    </div>
</template>
<script>
import BtnNav from './BtnNav.vue';

export default {
    props: {
        link: String,
    },
    components: {
        BtnNav
    }
}
</script>
<style lang="">
    
</style>