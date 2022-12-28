<template lang="">
    <div>
        <header>
            <NavbarComp />
        </header>
        <main>
            help
        </main>
        <footer>
            <Footer></Footer>
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