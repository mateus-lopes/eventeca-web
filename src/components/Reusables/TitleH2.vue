<template>
    <div>
        <h2 :class="class_title()" class="py-4 font-bold">
            {{ title }}
        </h2>
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
            return this.size ? `text-${this.size}` : 'text-lg' 
        }
    }
}
</script>
<style>
    
</style>