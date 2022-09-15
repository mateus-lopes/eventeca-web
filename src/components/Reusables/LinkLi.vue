<template lang="">
    <li :class="{'text-primary active':check_navbar()}" >
        <slot>

        </slot>
        {{content}}
    </li>   
</template>

<script>
export default {
    props: {
        content: String,
        page_selection: String,
        url: String,
    },
    methods: {
        check_navbar(){
            if(this.url)
                return this.url == this.page_selection 
            return false
        }
    }
}
</script>