<template lang="">
    <i :class="content, {'hidden':small}" class=""></i>
</template>
<script>
export default {
    props: {
        content: String,
        small: Boolean,
    }
}
</script>