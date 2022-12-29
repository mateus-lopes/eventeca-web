<template lang="">
    <div class="bg-primary text-white absolute bottom-0 w-full py-4 text-center">
        <router-link :to="link">
            <span class="cursor-pointer">
                <slot></slot>
            </span>
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