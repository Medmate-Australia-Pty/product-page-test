<template>
    <div>
        <ProductPage
                :product="selectedProduct"
                :image="featureImage"
                :fullPrice="productFullPrice"
                :discountedPrice="productDiscountedPrice"
        />
    </div>
</template>

<script>
    import ProductPage from '../components/ProductPage.vue';
    import axios from 'axios';

    export default {
        data() {
            return {
                selectedProduct: [],
                featureImage: '',
                productFullPrice: 0,
                productDiscountedPrice: 0
            };
        },
        components: {
            ProductPage,
        },
        mounted() {
            // Make a GET request to the API to fetch product data
            axios
                .get('/client/products/fall-limited-edition-sneakers')
                .then((response) => {
                    this.selectedProduct = response.data.data;
                    this.featureImage = response.data.data.images[0];
                    this.productFullPrice = response.data.data.price['full'];
                    this.productDiscountedPrice = response.data.data.price['discounted'];
                })
                .catch((error) => {
                    console.error('Error fetching product:', error);
                });
        },
    };
</script>