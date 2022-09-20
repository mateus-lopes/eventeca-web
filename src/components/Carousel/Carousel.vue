<template>
    <div id="default-carousel" class="relative" data-carousel="static">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-base md:h-96">
             <!-- Item 1 -->
            <div :class="slide" class="translate-x-0 z-20" data-carousel-item>
                <span class="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                <img src="../../assets/img/teste_div.png" :class="img" alt="...">
            </div>
            <!-- Item 2 -->
            <div :class="slide" data-carousel-item>
                <img src="../../assets/img/teste_div.png" :class="img" alt="...">
            </div>
            <!-- Item 3 -->
            <div :class="slide" data-carousel-item>
                <img src="../../assets/img/teste_div.png" :class="img" alt="...">
            </div>
        </div>
        <!-- Slider indicators -->
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button type="button" :class="btn_navegation" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" :class="btn_navegation" class="bg-white/50 hover:bg-white" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" :class="btn_navegation" class="bg-white/50 hover:bg-white" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" :class="btn_navegation" class="bg-white/50 hover:bg-white" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" :class="btn_navegation" class="bg-white/50 hover:bg-white" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" :class="btn_navegation" class="bg-white/50 hover:bg-white" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" :class="btn_navegation" class="bg-white/50 hover:bg-white" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" :class="btn_navegation" class="bg-white/50 hover:bg-white" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        </div>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          slide: 'duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10',
          btn_navegation: 'block cursor-pointer w-3 h-3 rounded-full bg-white transition-all duration-200',
          img: 'absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
        }
      }
    }
</script>