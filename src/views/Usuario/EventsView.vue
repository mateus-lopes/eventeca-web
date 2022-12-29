<template lang="">
    <div>
        <header>
            <NavbarComp page_selection="events"/>
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
import Footer from "../../components/Footer/FooterComp.vue";
import NavbarComp from "../../components/Navbar/NavComp.vue";
import SearchEvents from "../../components/Event/SearchEvents.vue";
import AllEvents from "../../components/Event/AllEvents.vue";
import InfoAlert from "../../components/Commun/InfoAlert.vue";

export default {
  data() {
    return {
    };
  },
  components: {
    NavbarComp,
    Footer,
    SearchEvents,
    AllEvents,
    InfoAlert,
},
}
</script>