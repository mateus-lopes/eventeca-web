<template>
    <div>
        <h1 :class="class_title()" class="py-4 text-primary font-bold">
            {{ title }}
        </h1>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        size: String,
    },
    methods: {
        class_title() {
            return this.size ? `text-${this.size}` : 'text-2xl' 
        }
    }
}
</script>
<style>
    
</style>