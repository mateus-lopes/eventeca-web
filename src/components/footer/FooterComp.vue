<template>
    <main class="w-full mt-8  bg-gray-900 text-white">
        <section class="container max-w-7xl mx-auto lg:flex gap-16 justify-between py-16">
            <!-- img logo / social medias -->
            <div class="w-4/12">
                <ApresentationFooter></ApresentationFooter>
                <SocialMedias></SocialMedias>
            </div>
            <div class="w-8/12 flex justify-end gap-32">
                <!-- categories -->
                <CategoriesFooter></CategoriesFooter>
                <!-- navegation -->
                <NavFooter></NavFooter>
                <!-- contact -->
                <ContactList></ContactList>
            </div>
        </section>
        
    </main>
</template>

<script>
import CategoriesFooter from './CategoriesFooter.vue';
import ContactList from './ContactList.vue';
import NavFooter from './NavFooter.vue';
import ApresentationFooter from './ApresentationFooter.vue';
import SocialMedias from '../SocialMedias.vue';

    export default {
    props: {
        key_btn: Boolean
    },
    methods: {
        return_to_top() {
            window.scrollTo(0, 0);
        }
    },
    components: { CategoriesFooter, NavFooter, ContactList, ApresentationFooter, SocialMedias }
}
</script>
