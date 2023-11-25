<template>
    <div>
        <div class="row d-none d-md-block" style="height: 10vw;"></div>
        <div class="row">
            <div class="d-none d-md-block col-md-1"></div>
            <ImageSectionXS class="col d-md-none"></ImageSectionXS>
            <ImageSectionMD class="col-5 d-none d-md-block p-0 pe-md-4"></ImageSectionMD>
            <div class="p-4 p-md-0 ps-md-4 col-md-5">
                <TextSection></TextSection>
                <CartSection></CartSection>
            </div>
            <div class="d-none d-md-block col-md-1"></div>
        </div>
    </div>
</template>

<script>
import ImageSectionXS from './components/ImageSectionXS.vue'
import ImageSectionMD from './components/ImageSectionMD.vue'
import TextSection from './components/TextSection.vue'
import CartSection from './components/CartSection.vue'
import store from './../store/index'

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
        await this.$store.commit('initialiseStore')
        this.$store.dispatch("fetchProduct")
    },

    beforeRouteUpdate(to, from, next) {
        location.reload()
    },
}
</script>
