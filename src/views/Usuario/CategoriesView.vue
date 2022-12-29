<template lang="">
  <div>
      <header>
          <NavbarComp />
      </header>
      <main>
          categories
      </main>
      <footer>
          <Footer></Footer>
      </footer>
  </div>
</template>
<script>
import Footer from "../../components/Footer/FooterComp.vue";
import NavbarComp from "../../components/Navbar/NavComp.vue";

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