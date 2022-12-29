<template lang="">
    <div class="w-full h-screen bg-primary flex flex-col justify-center items-center gap-8">
        <img src="../assets/img/error-404.svg" class="w-5/12" alt="">
        <BtnNav link="/">Voltar a Navegação</BtnNav>
    </div>
</template>

<script>
import BtnNav from '../components/Navbar/BtnNav.vue';

export default {
    components:{
        BtnNav,
    }
}
</script>