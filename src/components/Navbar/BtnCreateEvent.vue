<template lang="">
    <div @click='goCreate()' class="fixed hover:bg-teal-700 cursor-pointer  bottom-8 right-8 w-16 h-16 bg-primary flex justify-center items-center rounded-full p-3">
        <img src="../../assets/img/plus-arrow.png" alt="">
    </div>
</template>
<script>
export default {
    methods: {
        goCreate() {
            this.$router.push(`events/create-event`)
        }
    }
}
</script>
<style lang="">
    
</style>