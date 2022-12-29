<template lang="">
    <div class="bg-gray-100 min-h-screen flex">
        <header class="lg:w-3/12">
            <!-- menu lateral -->
            <nav class="bg-primary relative lg:bg-white w-full lg:shadow-lg h-screen flex flex-col justify-center lg:justify-start items-center pt-16">
                <div class="p-12 border-b">
                    <img src="../../assets/img/logo.png" class="h-14" alt="">
                </div>
                <NavCompAdmin page_selection="admin/inscription" />
                <BtnFooterAdmin link="/admin/help">
                    Ajuda 
                </BtnFooterAdmin>
            </nav>
        </header>
        <div class="w-9/12">
            <main>
                <!-- menu top -->
                <section class="flex justify-end">
                    <BtnUserAdmin link="/admin/settings">
                        user
                    </BtnUserAdmin>
                </section>
                <!-- conteudo -->
                Inscrições
            </main>
        </div>
    </div>
</template>
<script>
import NavCompAdmin from "../../components/Navbar/NavCompAdmin.vue";
import BtnUserAdmin from "../../components/Navbar/BtnUserAdmin.vue";
import BtnFooterAdmin from "../../components/Footer/BtnFooterAdmin.vue";

export default {
    
    components: {
        NavCompAdmin,
        BtnFooterAdmin,
        BtnUserAdmin
    }
}
</script>