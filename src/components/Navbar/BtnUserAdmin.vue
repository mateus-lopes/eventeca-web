<template lang="">
    <div class="flex gap-8 items-center">
        <router-link :to="link">
            <div class="bg-primary py-2.5 px-20 rounded-bl-2xl hover:bg-teal-700 transition-all text-white flex items-center justify-around gap-2 font-medium">
                <slot></slot>
            </div>
        </router-link>
    </div>
</template>
<script>
import BtnNav from './BtnNav.vue';

export default {
    props: {
        link: String,
        event_key: Boolean,
    },
    components: {
        BtnNav
    }
}
</script>
<style lang="">
    
</style>