<script>
    import TitleH2 from './TitleH2.vue';
    import BtnPrimary from './BtnPrimary.vue';
    import Icon from './Icon.vue'; 
    export default {
        components: {
            TitleH2,
            BtnPrimary,
            Icon,
        },
        props: {
            icon: String,
            title: String,
            content: String,
        }
    }
</script>
<template>
    <div>
        <div class="max-w-md">
            <div class="flex flex-col justify-center">
                <div class="">
                    <Icon :content="icon" class="text-5xl"/>
                </div>
                <router-link to="/">
                    <TitleH2 size="lg" color="white" :title="title" />
                </router-link>
                <p class="font-light text-sm">
                    {{ content }}
                </p>
            </div>
        </div>
    </div>
</template>