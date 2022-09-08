<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  data(){
    return {
      flex: 'flex justify-center items-center w-full'
    }
  },
  components: {
    RouterLink, 
    RouterView
  }
}
</script>

<template>
  <RouterView :flex='flex' />
</template>