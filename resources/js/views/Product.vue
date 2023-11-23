<template>
    <ImageSection></ImageSection>
    <div class="p-4">
        <TextSection></TextSection>
        <CartSection></CartSection>
    </div>
</template>

<script>
import ImageSection from './components/ImageSection.vue'
import TextSection from './components/textSection.vue'
import CartSection from './components/CartSection.vue'

export default {
    async mounted() {
        // await this.$store.commit(initialiseStore)
    },

    components: {
        ImageSection,
        TextSection,
        CartSection,
    },

    data() {
        return {}
    },

    beforeMounted() {
        this.getProduct()
    },

    methods: {
        async getProduct() {
            // const response = await fetch('products/fall-limited-edition-sneakers')
            // console.log(response);
        }
    }
}
</script>