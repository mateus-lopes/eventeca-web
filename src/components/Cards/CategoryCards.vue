<script>
    import Card from '@/components/Cards/Card.vue';
    export default {
        components: {
            Card,
        },
        data(){
            return {
                teste: {
                    url:'../../assets/img/teste_div.png',
                    title: '1° Workshop - Gestão em Serviços de Alimentação',
                    date: 'segunda-feira, 29 de agosto de 2022'
                }   
            }
        }
    }
</script>
<template>
    <div class="grid grid-cols-6 gap-3">
        <Card :url="teste.url" />
        <Card :url="teste.url" />
        <Card :url="teste.url" />
        <Card :url="teste.url" />
        <Card :url="teste.url" />
        <Card :url="teste.url" />
    </div>
</template>