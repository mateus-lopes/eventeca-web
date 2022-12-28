<template lang="">
    <li :class="style" @click="routerTo()">
        <slot></slot>
    </li>
</template>
<script>
export default {
    props:{
        style: String,
        link: String,
    },
    methods: {
        routerTo(){
            this.$router.push(`${this.link}`)
        }
    }
}
</script>