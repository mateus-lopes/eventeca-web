<template lang="">
    <div>
        <header>
            <NavbarComp page_selection="my-events" />
            <section class="container max-w-7xl mx-auto pt-3">
                <InfoAlert text="Desing Interativo, arraste para o lado com o mouse ou touch para navegar"/>
            </section>
        </header>
        <main class="container max-w-7xl mx-auto">
            <section class="mt-8">
                <TitleList>
                    Eventos com Participação
                </TitleList>
                <EventsList></EventsList>
            </section>
            <section class="my-8">
                <TitleList>
                    Sua Lista de Eventos
                </TitleList>
                <EventsList></EventsList>
            </section>
            <section class="mb-32">
                <TitleList>
                    Os Mais Acessados
                </TitleList>
                <EventsList></EventsList>
            </section>
        </main>
        <footer>
            <Footer page_selection="my-events"></Footer>
        </footer>
    </div>
</template>
<script>

import CategoriesList from "../../components/Event/CategoriesList.vue";
import EventsList from "../../components/Event/EventsList.vue";
import Footer from "../../components/Footer/FooterComp.vue";
import NavbarComp from "../../components/Navbar/NavComp.vue";
import TitleList from "../../components/Commun/TitleList.vue";
import InfoAlert from "../../components/Commun/InfoAlert.vue";
import TitleH1 from "../../components/Commun/TitleH1.vue";
import BtnNav from "../../components/Navbar/BtnNav.vue";

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
    EventsList,
    InfoAlert,
    TitleH1,
    BtnNav,
    },
}
</script>