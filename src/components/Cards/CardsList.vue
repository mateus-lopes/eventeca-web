<script>
    import Card from '@/components/Cards/Card.vue';
    export default {
        components: {
            Card,
        },
        data(){
            return {
                teste2: {
                    url:'../../assets/img/teste_div.png',
                    title: '1° Workshop - Gestão em Serviços de Alimentação',
                    date: 'segunda-feira, 29 de agosto de 2022'
                }   
            }
        }
    }
</script>
<template>
    <div class="grid grid-cols-4 gap-8">
        <Card :title="teste2.title" :url="teste2.url" :date="teste2.date" />
        <Card :title="teste2.title" :url="teste2.url" :date="teste2.date" />
        <Card :title="teste2.title" :url="teste2.url" :date="teste2.date" />
        <Card :title="teste2.title" :url="teste2.url" :date="teste2.date" />
    </div>
</template>