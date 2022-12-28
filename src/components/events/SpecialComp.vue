<template lang="">
    <div @click="goEvent" class="bg-white ">
        <div class="w-full relative">
            <img src="../../assets/img/example.jpg" class="md:hidden w-full h-96 rounded-xl" alt="">
            <img src="../../assets/img/example.jpg" class="hidden md:block h-96 w-full rounded-xl" alt="">
        </div>
    </div>
    <!-- <img :src="returnImg()" class="cursor-pointer md:hidden w-full" alt=""> -->
</template>

<script>
    export default {
        props: {
            movie: Object,
        },
        methods: {
            goEvent() {
                this.$router.push(`/event/`)
            },
            // returnImg(){
            //     return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`
            // }
        },
    }
</script>