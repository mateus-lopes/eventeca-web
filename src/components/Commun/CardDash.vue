<template lang="">
    <div class="pr-2 pb-2 pt-2 basis-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
        <div class="p-8 bg-white shadow-md rounded-2xl">
            {{title}}
            <p class="text-primary text-2xl pt-3">
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