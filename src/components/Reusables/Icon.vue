<template lang="">
    <i :class="content, {'hidden':small}" class="pr-3" ></i>
</template>
<script>
export default {
    props: {
        content: String,
        small: Boolean
    }
}
</script>