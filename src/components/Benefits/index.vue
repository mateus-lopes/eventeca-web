<template>
    <div class="bg-primary p-16 rounded-base text-white">
        <div class="flex space-beteewn gap-8">
            <Card title="Planejamento Online" icon="bi bi-laptop" :content="content" />
            <Card title="Inscrições" icon="bi bi-people" :content="content" />
            <Card title="Aplicativo do evento" icon="bi bi-phone" :content="content" />
        </div>
        <div class="flex space-beteewn gap-8 mt-16">
            <Card title="Certificados" icon="bi bi-file-earmark-check" :content="content" />
            <Card title="Husenberg" icon="bi bi-hand-index-thumb" :content="content" />
            <Card title="Plataforma Segura" icon="bi bi-shield-check" :content="content" />
        </div>
    </div>
</template>

<script>
    import Card from '@/components/Benefits/Card.vue';
    export default {
        components: {
            Card,
        },
        data() {
            return {
                content: 'Lorem Ipsum is simply dummy text of the printing and is simply dummy text of the printing and typesetting.'
            }
        }
    }
</script>

<style>

</style>