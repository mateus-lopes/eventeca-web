<template lang="">
    <div>
        <p class="text-gray-500">
            {{text1}} / {{text}} 
        </p>
        <TitleH1 :title="text" size="2xl"/>
    </div>
</template>
<script>
import TitleH1 from "./TitleH1.vue";

export default {
    props: {
        text: String,
        text1: String,
    },
    components: {
        TitleH1,
    }
}
</script>
<style lang="">
    
</style>