<template lang="">
    <div class="pr-2 pb-2 pt-2 w-full">
        <div class="p-8 bg-white shadow-md rounded-2xl">
            {{title}}
            <p class="text-center text-primary text-2xl pt-2">
                <slot></slot>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
    }
}
</script>
<style lang="">
    
</style>