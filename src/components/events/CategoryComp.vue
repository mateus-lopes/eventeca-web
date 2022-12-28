<template lang="">
    <div @click="goCategory" class="p-4 bg-primary text-white text-center">
        Categorias
    </div>
</template>

<script>
    export default {
        props: {

        },
        methods: {
            goCategory() {
                this.$router.push(`/categories/`)
            },
        },
    }
</script>