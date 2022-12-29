<template lang="">
    <div>
        <header>
            <NavbarComp page_selection="my-events" />
            <section class="container max-w-7xl mx-auto pt-3">
                <InfoAlert text="/dev/ Participando acho q n vai rolar"/>
                <InfoAlert text="Desing Interativo, arraste para o lado com o mouse ou touch para navegar"/>
            </section>
        </header>
        <main class="container max-w-7xl mx-auto">
            <section class="mt-4">
                <CategoriesList></CategoriesList>
            </section>
            <section class="mt-8">
                <TitleList>
                    Participando
                </TitleList>
                <EventsList></EventsList>
            </section>
            <section class="my-8">
                <TitleList>
                    Minha Lista
                </TitleList>
                <EventsList></EventsList>
            </section>
            <section class="mb-32">
                <TitleList>
                    Mais Acessados
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

import CategoriesList from "../components/events/CategoriesList.vue";
import EventsList from "../components/events/EventsList.vue";
import Footer from "../components/footer/FooterComp.vue";
import NavbarComp from "../components/navbar/NavComp.vue";
import TitleList from "../components/TitleList.vue";
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
    EventsList,
    InfoAlert,
    },
}
</script>