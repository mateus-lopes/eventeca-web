<template lang="">
    <li :class="style" @click="routerTo()">
        <div :class="{'lg:text-primary underline underline-offset-8 transition-all ':check_navbar(), ' transition-all cursor-pointer lg:hover:text-primary lg:hover:underline underline-offset-8':!this.links}">
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
        links: Boolean,
    },
    methods: {
        check_navbar(){
            if(this.link)
                return this.link == this.page_selection
        },
        routerTo(){
            if(!this.links) {
                return this.link === '/' ? this.$router.push(`/`) : this.$router.push(`/${this.link}`)
            }
        }
    }
}
</script>