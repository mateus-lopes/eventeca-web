<template lang="">
    <li :class="style" @click="routerTo()">
        <div :class="{'text-primary underline underline-offset-8':check_navbar(), 'cursor-pointer':link}">
            <slot></slot>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        style: String,
        page_selection: String,
        link: String,
    },
    methods: {
        check_navbar(){
            if(this.link)
                return this.link == this.page_selection
        },
        routerTo(){
            return this.link === '/' ? this.$router.push(`/`) : this.$router.push(`/${this.link}`)
        }
    }
}
</script>