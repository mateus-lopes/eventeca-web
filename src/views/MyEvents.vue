<script>
    import Navbar from '@/components/Navbar/NavbarComp.vue'
    import Footer from '@/components/Footer/FooterComp.vue'
    export default {
        data(){
            return {
                
            }
        },
        props: {
            flex: String,
        },
        components: {
            Navbar,
            Footer,
        },
        methods: {
        }
    };
    </script>
    
    <template>
        <main>
            <Navbar page_selection="my-events" :flex="flex" />
            <Footer page_selection="my-events" :flex="flex" />
        </main>
    </template>
    