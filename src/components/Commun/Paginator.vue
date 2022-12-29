<template lang="">
    <div>
        <p class="text-gray-500">
            Admin / {{text}} 
        </p>
        <TitleH1 :title="text" size="2xl"/>
    </div>
</template>
<script>
import TitleH1 from "./TitleH1.vue";

export default {
    props: {
        text: String,
    },
    components: {
        TitleH1,
    }
}
</script>
<style lang="">
    
</style>