<template lang="">
    <div>
        <!-- <header>
            <NavbarComp page_selection="help" />
        </header> -->
        <main>
            <HelpContainer></HelpContainer>
        </main>
        <!-- <footer>
            <Footer page_selection="help"></Footer>
        </footer> -->
    </div>
</template>
<script>
import Footer from "../components/footer/FooterComp.vue";
import NavbarComp from "../components/navbar/NavComp.vue";
import HelpContainer from "../components/HelpContainer.vue";

export default {
  data() {
    return {
    };
  },
  components: {
    NavbarComp,
    Footer,
    HelpContainer,
},
}
</script>