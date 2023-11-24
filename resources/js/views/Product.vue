<template>
    <div class="row">
        <div class="col-md-1"></div>
        <ImageSectionXS class="col d-md-none"></ImageSectionXS>
        <ImageSectionMD class="col-5 d-none d-md-block"></ImageSectionMD>
        <div class="p-4 col-md-5">
            <TextSection></TextSection>
            <CartSection></CartSection>
        </div>
        <div class="col-md-1"></div>
    </div>
</template>

<script>
import ImageSectionXS from './components/ImageSectionXS.vue'
import ImageSectionMD from './components/ImageSectionMD.vue'
import TextSection from './components/textSection.vue'
import CartSection from './components/CartSection.vue'

export default {
    name: 'Product',

    components: {
        ImageSectionXS,
        ImageSectionMD,
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