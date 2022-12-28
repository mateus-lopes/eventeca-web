<template lang="">
    <div @click="goEvent" class="bg-white ">
        <div>
            <img src="../../assets/img/example.jpg" class="w-full h-32 rounded-xl" alt="">
        </div>
        <div class="py-5 flex flex-col gap-1">
            <div class="flex justify-between text-xs">
                    <span class="text-primary">
                        #Categoria
                    </span>
                    <span class="text-primary">
                        00/00/0000
                    </span>
                </div>
            <h4 class="text-lg">
                Titulo
            </h4>
            <div class="flex justify-between gap-8">
                <p class="max-w-xs text-sm">
                    Texto com no máximo 90 caracteres asdl kçjf laksçdj klças dasdlk jflak dsaçk fh jasd kla...
                </p>
            </div>
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