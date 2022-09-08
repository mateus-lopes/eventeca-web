<script>
    import Navbar from '@/components/NavbarComp.vue'
    import Footer from '@/components/FooterComp.vue'
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
    