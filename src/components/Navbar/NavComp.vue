<script>
import BtnNav from "./BtnNav.vue";
import NavList from "./NavList.vue";

export default {
  data() {
    return {
      navbar: {
        css: "hidden w-1 h-1",
        open_menu: false,
      },
      info: true,
      nav_menu: [
        {
            title:'Pagina Inicial',
            id:'/'
        },
        {
            title:'Encrote Eventos',
            id:'events'
        },
        {
            title:'Meus Eventos',
            id:'my-events'
        },
        {
            title:'Ajuda',
            id:'help'
        },
    ],
      // is_logged: this.$cookies.get("logged"),
      // user_id: this.$cookies.get("userId"),
      // user: {},
    };
  },
  props: {
    page_selection: String
  },
  components: {
    NavList,
    BtnNav,
},
  methods: {
    toogle_navbar() {
      console.log("toogle_navbar activate");
      this.navbar.css = this.navbar.key ? "hidden w-1 h-1" : " ";
      this.navbar.key = this.navbar.key ? false : true;
    },
    closeInfo() {
      
    }
  },
  // mounted() {
  //   axios
  //     .get(
  //       `http://localhost:8000/watchers/${this.user_id}`,
  //       (Headers = {
  //         headers: {
  //           Authorization: `Bearer ${this.is_logged}`,
  //         },
  //       })
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //       this.user = response.data;
  //     })
  //     .catch((error) => {
  //       if ((error.status = 401)) {
  //         $cookies.remove("logged");
  //         $cookies.remove("userId");
  //         this.$router.push("/login");
  //       }
  //     });
  // },
};
</script>
<template>
  <div>

    <section class="shadow-xl md:py-5 lg:py-3 bg-white">
      <header class="flex items-center container max-w-7xl mx-auto py-3 text-gray-600 m-0">
        <div class="flex justify-between w-full items-center gap-8">
          <!-- logo / navbar list -->
          <div class="flex lg:w-full xl:w-8/12 gap-4 justify-left items-center">
            <router-link to="/">
              <img src="../../assets/img/logo.png" class="h-10" alt="" />
            </router-link>
            <div class="hidden xl:block mr-4">
              <NavList :items="nav_menu" :page_selection="page_selection" :header_navbar=true :nav_row=true />
            </div>
          </div>
          <!-- create event / user -->
          <div class="flex items-center">
            <!-- btn create event ( click -> dashboard-admin ) -->
            <div class="hidden md:flex items-center">
              <BtnNav link="/admin/dashboard" :stroke=true>
                Criar Evento
              </BtnNav>
              <div class="w-0.5 h-10 mx-5 bg-gray-200 "></div>
            </div>
            <!-- btn user -->
            <BtnNav link="/profile" v-if="user">
              Nome do User
            </BtnNav>
            <BtnNav link="/login" v-else>
                Entrar
            </BtnNav>
            <!-- btn mobile navbar -->
            <button @click="toogle_navbar" class="text-gray-900 ml-6 lg:ml-3 items-center xl:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
            </button>
            <!-- navbar mobile -->
            <div :class="navbar.css" class="transition-all w-full h-screen z-10 fixed top-0 right-0 bg-white">
              <div class="py-9 flex justify-center items-center">
                <img src="../../assets/img/logo.png" class="h-10" alt="" />
              </div>
              <div class="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0">
                <NavList :items="nav_menu" :page_selection="page_selection" :header_navbar=true :nav_row=true />
              </div>
              <div class="flex justify-center items-center w-full fixed bottom-0 left-0">
                <div>
                  <a @click="toogle_navbar" href="#" class="text-2xl pb-8 flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="bi bi-x"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  </div>
</template>