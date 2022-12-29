<template>
    <div>
        <h1 @click="link_to_link" class="cursor-pointer text-primary text-2xl pb-4">
            <slot></slot>
        </h1>
    </div>
</template>

<script>
    export default {
        props: {
            link: String,
        },
        methods: {
            link_to_link() {
                if(this.link) {
                    return this.$router(this.link)
                }
                else {
                    return false
                }
            }
        }
    }
</script>