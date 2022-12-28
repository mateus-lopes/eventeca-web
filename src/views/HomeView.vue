<template>
  <div>
    <header>
      <NavbarComp />
    </header>
    <main class="container max-w-7xl mx-auto">
      <section class="mt-8">
        <TitleList>Procurando algo em específico?</TitleList>
        <CategoriesList></CategoriesList>
      </section>
      <section class="mt-6">
        <TitleList>Eventos em Destaque</TitleList>
        <EventsSpecial></EventsSpecial>
      </section>
      <section class="mt-8">
        <TitleList>Categoria 1 da lista até a 3 (essa seleção pode ser por popularidade)</TitleList>
        <EventsList></EventsList>
      </section>
      <AdvantagesSection></AdvantagesSection>
      <section class="mt-8">
        <TitleList>Nossos Parceiros</TitleList>
        <FriendsSection></FriendsSection>
      </section>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import CategoriesList from "../components/events/CategoriesList.vue";
import EventsList from "../components/events/EventsList.vue";
import EventsSpecial from "../components/events/EventsSpecial.vue";
import Footer from "../components/footer/FooterComp.vue";
import NavbarComp from "../components/navbar/NavComp.vue";
import TitleList from "../components/TitleList.vue";
import AdvantagesSection from "../components/AdvantagesSection.vue";
import FriendsSection from "../components/FriendsSection.vue";

export default {
  data() {
    return {
    };
  },
  components: {
    NavbarComp,
    TitleList,
    Footer,
    CategoriesList,
    EventsSpecial,
    EventsList,
    AdvantagesSection,
    FriendsSection,
},
}
</script>

<style scoped>

</style>