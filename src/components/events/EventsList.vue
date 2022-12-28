<template lang="">
    <div>
        <swiper
            class="md:hidden"
            :slides-per-view="1"
            :space-between="25"
            :modules="modules" 
        >
                        <swiper-slide>
                            <EventComp></EventComp>
                        </swiper-slide>
                        <swiper-slide>
                            <EventComp></EventComp>
                        </swiper-slide>
                        <swiper-slide>
                            <EventComp></EventComp>
                        </swiper-slide>
                        <swiper-slide>
                            <EventComp></EventComp>
                        </swiper-slide>
                        <swiper-slide>
                            <EventComp></EventComp>
                        </swiper-slide>
        </swiper>
        <swiper
            class="hidden md:block lg:hidden"
            :slides-per-view="3"
            :space-between="25"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :modules="modules"  
        >
            <!-- :navigation="true" -->
                        <swiper-slide>
                            <EventComp></EventComp>
                        </swiper-slide>
                        <swiper-slide>
                            <EventComp></EventComp>
                        </swiper-slide>
                        <swiper-slide>
                            <EventComp></EventComp>
                        </swiper-slide>
                        <swiper-slide>
                            <EventComp></EventComp>
                        </swiper-slide>
                        <swiper-slide>
                            <EventComp></EventComp>
                        </swiper-slide>
        </swiper>
        <swiper
            class="hidden lg:block xl:hidden"
            :space-between="25"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :slides-per-view="4"
            :modules="modules"
        >
            <!-- :navigation="true" -->
                        <swiper-slide>
                            <EventComp></EventComp>
                        </swiper-slide>
                        <swiper-slide>
                            <EventComp></EventComp>
                        </swiper-slide>
                        <swiper-slide>
                            <EventComp></EventComp>
                        </swiper-slide>
                        <swiper-slide>
                            <EventComp></EventComp>
                        </swiper-slide>
                        <swiper-slide>
                            <EventComp></EventComp>
                        </swiper-slide>
        </swiper>
        <swiper
            class="xl:block hidden"
            :slides-per-view="4"
            :space-between="25"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :modules="modules"
        >
        <!-- :navigation="true" :grid="true" -->
                        <swiper-slide>
                            <EventComp></EventComp>
                        </swiper-slide>
                        <swiper-slide>
                            <EventComp></EventComp>
                        </swiper-slide>
                        <swiper-slide>
                            <EventComp></EventComp>
                        </swiper-slide>
                        <swiper-slide>
                            <EventComp></EventComp>
                        </swiper-slide>
                        <swiper-slide>
                            <EventComp></EventComp>
                        </swiper-slide>
        </swiper>
    </div>
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
    import EventComp from './EventComp.vue';

    export default {
        components: {
            Swiper,
            SwiperSlide,
            EventComp
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

<style>
    .swiper-button-next {
        background-color: rgba(0, 0, 0, 0.7);
        padding: 2em;
        border-radius: 50%;
    }
    .swiper-button-next::after {
        color: #fff;
        font-size: 1.5em;
    }
    .swiper-button-prev {
        background-color: rgba(0, 0, 0, 0.7);
        padding: 2em;
        border-radius: 50%;
    }
    .swiper-button-prev::after {
        color: #fff;
        font-size: 1.5em;
    }
</style>