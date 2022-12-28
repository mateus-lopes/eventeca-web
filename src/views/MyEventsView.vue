<template lang="">
    <div>
        <header>
            <NavbarComp page_selection="my-events" />
        </header>
        <main>
            my-events
        </main>
        <footer>
            <Footer page_selection="my-events"></Footer>
        </footer>
    </div>
</template>
<script>
import Footer from "../components/footer/FooterComp.vue";
import NavbarComp from "../components/navbar/NavComp.vue";

export default {
  data() {
    return {
    };
  },
  components: {
    NavbarComp,
    Footer,
},
}
</script>