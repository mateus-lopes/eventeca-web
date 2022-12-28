<template>
  <div>
    <header>
      <NavbarComp />
    </header>
    <main class="container max-w-7xl mx-auto">
      <section class="mt-8">
        <TitleList>Procurando algo em específico?</TitleList>
        <div class="overflow-hidden rounded-xl flex mt-4">
          <div class="p-5 bg-primary text-white">categorias</div>
          <div class="p-5 bg-primary text-white">categorias</div>
          <div class="p-5 bg-primary text-white">categorias</div>
          <div class="p-5 bg-primary text-white">categorias</div>
          <div class="p-5 bg-primary text-white">categorias</div>
          <div class="p-5 bg-primary text-white">categorias</div>
          <div class="p-5 bg-primary text-white">categorias</div>
          <div class="p-5 bg-primary text-white">categorias</div>
          <div class="p-5 bg-primary text-white">categorias</div>
          <div class="p-5 bg-primary text-white">categorias</div>
          <div class="p-5 bg-primary text-white">categorias</div>
        </div>
      </section>
      <section class="mt-6">
        <TitleList>Eventos em Destaque</TitleList>
        <div class="flex mt-4">
          <div class="w-full h-96 flex justify-center items-center bg-primary text-white rounded-xl">teste1</div>
        </div>
      </section>
      <section class="mt-8">
        <TitleList>Categoria 1 da lista até a 3 (essa seleção pode ser por popularidade)</TitleList>
        <div class="overflow-hidden rounded-xl flex mt-4">
          <div class="p-5 bg-primary text-white">eventos</div>
          <div class="p-5 bg-primary text-white">eventos</div>
          <div class="p-5 bg-primary text-white">eventos</div>
          <div class="p-5 bg-primary text-white">eventos</div>
          <div class="p-5 bg-primary text-white">eventos</div>
          <div class="p-5 bg-primary text-white">eventos</div>
          <div class="p-5 bg-primary text-white">eventos</div>
          <div class="p-5 bg-primary text-white">eventos</div>
          <div class="p-5 bg-primary text-white">eventos</div>
          <div class="p-5 bg-primary text-white">eventos</div>
          <div class="p-5 bg-primary text-white">eventos</div>
          <div class="p-5 bg-primary text-white">eventos</div>
          <div class="p-5 bg-primary text-white">eventos</div>
        </div>
      </section>
      <section class="mt-8 w-full bg-primary flex flex-wrap px-16 py-8 rounded-xl text-white">
          <div class="lg:p-8 py-6 w-full md:w-2/4 lg:w-1/3">
            <span>
              <img src="../assets/img/ico-white.png" class="" alt="">
            </span>
            <h2 class="mb-3 text-lg">teste</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div class="lg:p-8 py-6 w-full md:w-2/4 lg:w-1/3">
            <span>
              <img src="../assets/img/ico-white.png" class="" alt="">
            </span>
            <h2 class="mb-3 text-lg">teste</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div class="lg:p-8 py-6 w-full md:w-2/4 lg:w-1/3">
            <span>
              <img src="../assets/img/ico-white.png" class="" alt="">
            </span>
            <h2 class="mb-3 text-lg">teste</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div class="lg:p-8 py-6 w-full md:w-2/4 lg:w-1/3">
            <span>
              <img src="../assets/img/ico-white.png" class="" alt="">
            </span>
            <h2 class="mb-3 text-lg">teste</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          
          <div class="lg:p-8 py-6 w-full md:w-2/4 lg:w-1/3">
            <span>
              <img src="../assets/img/ico-white.png" class="" alt="">
            </span>
            <h2 class="mb-3 text-lg">teste</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div class="lg:p-8 py-6 w-full md:w-2/4 lg:w-1/3">
            <span>
              <img src="../assets/img/ico-white.png" class="" alt="">
            </span>
            <h2 class="mb-3 text-lg">teste</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
          </div>
      </section>
      <section class="mt-8">
        <TitleList>Nossos Parceiros</TitleList>
        <div class="overflow-hidden rounded-xl flex mt-4">
          <div class="px-14 py-12 bg-primary text-white">Empresas</div>
          <div class="px-14 py-12 bg-primary text-white">Empresas</div>
          <div class="px-14 py-12 bg-primary text-white">Empresas</div>
          <div class="px-14 py-12 bg-primary text-white">Empresas</div>
          <div class="px-14 py-12 bg-primary text-white">Empresas</div>
          <div class="px-14 py-12 bg-primary text-white">Empresas</div>
          <div class="px-14 py-12 bg-primary text-white">Empresas</div>
        </div>
      </section>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/footer/FooterComp.vue";
import NavbarComp from "../components/navbar/NavComp.vue";
import TitleList from "../components/TitleList.vue";

export default {
  data() {
    return {
    };
  },
  components: {
    NavbarComp,
    TitleList,
    Footer
},
}
</script>

<style scoped>

</style>