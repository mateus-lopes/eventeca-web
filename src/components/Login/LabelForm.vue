<template lang="">
    <div>
        <div class="mb-6">
        <label :for="for" class="block mb-2 font-medium">{{label}}</label>
        <slot></slot>
      </div>
    </div>
</template>
<script>
export default {
    props: {
        label: String,
        for: String
    }
}
</script>
<style lang="">
    
</style>