<template>
  <div>
    <header>
        <NavbarComp page_selection="/" />
        <section class="container max-w-7xl mx-auto pt-3">
          <InfoAlert></InfoAlert>
        </section>
    </header>
    <main class="container max-w-7xl mx-auto">
        <section class="mt-4">
            <CategoriesList></CategoriesList>
        </section>
        <section class="mt-6">
            <TitleList>Eventos em Destaque</TitleList>
            <EventsSpecial></EventsSpecial>
        </section>
        <section class="mt-16">
            <TitleList>
              <router-link to="/teste">
                Categoria 1
              </router-link>
            </TitleList>
            <EventsList></EventsList>
        </section>
        <section class="my-8">
            <TitleList>Categoria 2</TitleList>
            <EventsList></EventsList>
        </section>
        <section class="mb-16">
            <TitleList>Categoria 3</TitleList>
            <EventsList></EventsList>
        </section>
        <AdvantagesSection></AdvantagesSection>
        <section class="mt-8">
            <TitleList>Nossos Parceiros</TitleList>
            <FriendsSection></FriendsSection>
        </section>
    </main>
    <footer>
      <Footer page_selection="/"></Footer>
    </footer>
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
import InfoAlert from "../components/navbar/InfoAlert.vue";

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
    InfoAlert,
},
}
</script>

<style scoped>

</style>