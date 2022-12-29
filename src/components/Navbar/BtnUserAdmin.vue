<template lang="">
    <div>
        <router-link :to="link">
            <div class="bg-primary py-2.5 px-20 rounded-bl-2xl text-white">
                Nome de Usuario
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    props: {
        link: String,
    }
}
</script>
<style lang="">
    
</style>