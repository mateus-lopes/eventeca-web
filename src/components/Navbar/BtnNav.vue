<template lang="">
    <button @click="routerTo()" :class="css" class="cursor-pointer flex items-center justify-center">
            <slot></slot>
    </button>
</template>
<script>
export default {
    props: {
        link: String,
        stroke: Boolean,
    },
    data(){
        return{
            css: this.stroke ? 'hover:text-primary transition-all text-gray-800 rounded-2xl' : "px-5 lg:px-7 py-3.5 hover:bg-gray-600 transition-all bg-primary text-white rounded-2xl"
        }
    },
    methods: {
        routerTo(){
            this.$router.push(`${this.link}`)
        }
    }
}
</script>
<style lang="">
    
</style>