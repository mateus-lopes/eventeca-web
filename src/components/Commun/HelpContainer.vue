<template lang="">
  <div>
    <section
      class="w-full h-screen bg-primary flex items-center justify-center"
    >
      <div class="fixed top-5 md:top-10 right-5 md:right-10">
        <router-link to="/">
          <button
            type="button"
            class="text-white rounded-2xl p-3 hover:text-gray-300 inline-flex"
          >
            <span class="sr-only">Fechar</span>
            <svg
              aria-hidden="true"
              class="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </router-link>
      </div>
      <div class="text-center container max-w-xl lg:max-w-4xl">
        <TitleH1 title="Central de Atendimento" color="white" size="4xl" />
        <p class="pb-8 pt-4 text-white">
          Para reportar problemas, garantir certificados perdidos, solicitar
          suporte ou obter mais informações sobre um evento, entre em contato
          com a equipe do evento. Para problemas relacionados à plataforma,
          perda de senha ou usuário, entre em contato com a equipe de suporte.
        </p>
        <div class="px-16 my-6">
          <button
            class="w-full bg-white border border-white hover:bg-primary hover:text-white transition-all py-4 rounded-2xl"
          >
            Tutoriais
          </button>
        </div>
        <div class="px-16 my-6">
          <button
            class="w-full bg-white border border-white hover:bg-primary hover:text-white transition-all py-4 rounded-2xl"
          >
            Perguntas Frequentes
          </button>
        </div>
        <div class="px-16 my-6">
          <button
            class="w-full bg-white border border-white hover:bg-primary hover:text-white transition-all py-4 rounded-2xl"
          >
            Entrar em Contato com o Suporte (email)
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import TitleH1 from "./TitleH1.vue";

export default {
  components: {
    TitleH1,
  },
};
</script>
<style lang=""></style>
