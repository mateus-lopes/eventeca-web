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
    <div class="flex gap-8">
        <Card :title="teste.title" :url="teste.url" :date="teste.date" />
        <Card :title="teste.title" :url="teste.url" :date="teste.date" />
        <Card :title="teste.title" :url="teste.url" :date="teste.date" />
        <Card :title="teste.title" :url="teste.url" :date="teste.date" />
    </div>
</template>