<template>
    <div class="row">
        <ImageSection class="col-md-6"></ImageSection>
        <div class="p-4 col-md-6">
            <TextSection></TextSection>
            <CartSection></CartSection>
        </div>
    </div>
</template>

<script>
import ImageSection from './components/ImageSection.vue'
import TextSection from './components/textSection.vue'
import CartSection from './components/CartSection.vue'

export default {
    name: 'Product',

    components: {
        ImageSection,
        TextSection,
        CartSection,
    },

    data() {
        return {}
    },

    async mounted() {
        this.$store.dispatch("fetchProduct")
        await this.$store.commit('initialiseStore')
    },

    thisIsntReal() {

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