<template lang="">
    <swiper
            :slides-per-view="1"
            :space-between="25"
            :modules="modules" 
            :pagination="true"
        >
            <swiper-slide>
                <SpecialComp></SpecialComp>
            </swiper-slide>
            <swiper-slide>
                <SpecialComp></SpecialComp>
            </swiper-slide>
            <swiper-slide>
                <SpecialComp></SpecialComp>
            </swiper-slide>
        </swiper>
</template>

<script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';

    // Import Swiper styles
    import 'swiper/css';
    import "swiper/css/navigation"; 
    import "swiper/css/grid";
    
    // import required modules
    import { Navigation, Grid } from "swiper";
    import SpecialComp from './SpecialComp.vue';

    export default {
        components: {
            Swiper,
            SwiperSlide,
            SpecialComp
        },
        setup() {
            const swiper = useSwiper();
            return {
                modules: [Navigation, Grid],
                swiper,
            };
        },
        data() {
            return {
            }
        },
    };
</script>