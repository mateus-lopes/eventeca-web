<script>
    import TitleH1 from '@/components/Reusables/TitleH1.vue';
    import BtnPrimary from '@/components/Reusables/BtnPrimary.vue';
    export default {
        components: {
            TitleH1,
            BtnPrimary,
        },
        props: {
            url: String,
            title: String,
            date: String,
            is_save: Boolean,
        }
    }
</script>
<template>
    <div>
        <div class="max-w-sm">
            <a href="#">
                <img class="rounded-base w-full" src="../../assets/img/teste_div.png" alt="">
            </a>
            <div class="">
                <router-link to="/">
                    <TitleH1 size="xl" :title="title" />
                </router-link>
                <p class="font-light">
                    {{ date }}
                </p>
            </div>
        </div>
    </div>
</template>