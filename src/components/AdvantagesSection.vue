<template>
  <div class="bg-primary p-20 rounded-base text-white">
      <div class="flex space-beteewn gap-8">
          <AdvantagesCard title="Planejamento Online" icon="bi bi-laptop" :content="content" />
          <AdvantagesCard title="Inscrições" icon="bi bi-people" :content="content" />
          <AdvantagesCard title="Aplicativo do evento" icon="bi bi-phone" :content="content" />
      </div>
      <div class="flex space-beteewn gap-8 mt-16">
          <AdvantagesCard title="Certificados" icon="bi bi-file-earmark-check" :content="content" />
          <AdvantagesCard title="Husenberg" icon="bi bi-hand-index-thumb" :content="content" />
          <AdvantagesCard title="Plataforma Segura" icon="bi bi-shield-check" :content="content" />
      </div>
  </div>
</template>

<script>
  import AdvantagesCard from './AdvantagesCard.vue';
  export default {
      components: {
          AdvantagesCard,
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