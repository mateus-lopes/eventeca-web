<script>
    import TitleH1 from '@/components/Reusables/TitleH1.vue';
    import BtnPrimary from '@/components/Reusables/BtnPrimary.vue';
    import Icon from '@/components/Reusables/Icon.vue'; 
    export default {
        components: {
            TitleH1,
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
                    <TitleH1 size="lg" color="white" :title="title" />
                </router-link>
                <p class="font-light text-sm">
                    {{ content }}
                </p>
            </div>
        </div>
    </div>
</template>