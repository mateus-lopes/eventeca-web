<template lang="">
  <div>
    <header>
      <NavbarComp page_selection="events" />
      <section class="container max-w-7xl mx-auto pt-3">
        <InfoAlert
          text="/dev/ Acho uma boa colcocar a barra de pesqusia msm que não funcione só pra não quebrar o desing"
        />
        <InfoAlert
          text="/dev/ Tipo por equanto da pra fazer essa pagina retorar todos os eventos (o paginador eu n sei bem como fazer tlgd mas da pra tentar se tu der uma luz)"
        />
      </section>
    </header>
    <main class="container max-w-7xl mx-auto mb-16">
      <SearchEvents></SearchEvents>
      <section class="mt-4">
        <AllEvents></AllEvents>
      </section>
    </main>
    <footer>
      <Footer page_selection="events"></Footer>
    </footer>
  </div>
</template>
<script>
import Footer from "../components/footer/FooterComp.vue";
import NavbarComp from "../components/navbar/NavComp.vue";
import SearchEvents from "../components/events/SearchEvents.vue";
import AllEvents from "../components/events/AllEvents.vue";
import InfoAlert from "../components/navbar/InfoAlert.vue";

export default {
  data() {
    return {};
  },
  components: {
    NavbarComp,
    Footer,
    SearchEvents,
    AllEvents,
    InfoAlert,
  },
};
</script>
