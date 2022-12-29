<template lang="">
    <swiper
            class="overflow-hidden rounded-2xl"
            :slides-per-view="1"
            :space-between="25"
            :modules="modules" 
            :pagination="{
                type: 'progressbar',
            }"
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
    import "swiper/css/pagination"; 
    import "swiper/css/grid";
    
    // import required modules
    import { Navigation, Grid, Pagination } from "swiper";
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
                modules: [Navigation, Grid, Pagination],
                swiper,
            };
        },
        data() {
            return {
            }
        },
    };
</script>

<style>
    .swiper-pagination-progressbar-fill {
        background-color: #288D85 !important;
    }
    .swiper-pagination-progressbar {
        height: 5px !important;
        top: auto !important;
        bottom: 0 !important;
    }
</style>