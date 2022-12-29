<template>
    <div>
        <h1 :class="auto_class" class="py-4 font-medium">
            {{ title }}
        </h1>
    </div>
</template>
<script>
export default {
    data() {
      return {
        auto_class: `${this.color ? `text-${this.color}` : 'text-primary'} ${this.class_title()}`
      }  
    },
    props: {
        title: String,
        size: String,
        color: String,
    },
    methods: {
        class_title() {
            return this.size ? `text-xl lg:text-${this.size}` : 'text-xl' 
        }
    }
}
</script>
<style>
    
</style>