<template>
    <div
        class="flex flex-col items-center justify-center mx-auto max-w-screen-lg h-screen gap-x-28 lg:flex-row"
    >
        <section><ProductSlider /></section>
        <section class="container-add-to-cart mt-0 lg:-mt-20">
            <ProductAddToCart />
        </section>
    </div>
</template>

<script setup>
import ProductSlider from "./ProductSlider.vue";
import ProductAddToCart from "./ProductAddToCart.vue";
</script>

<style lang="scss">
.container-add-to-cart {
    width: 100%;

    @media (max-width: 1024px) {
        width: 27rem;
    }

    @media (max-width: 640px) {
        width: 22rem;
    }
}
</style>
