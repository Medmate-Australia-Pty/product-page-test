
<template>
    <div>
        <div v-if="product">
            <div class="product-page">
                <div class="product-carousel">
                    <div id="productCarousel" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <img :src="currentImage" alt="Big Image" class="img-fluid" />
                            <a class="carousel-control-prev" href="#" @click="prevImage" role="button" data-slide="prev">
                                <i class="fas fa-arrow-left"></i>
                            </a>
                            <a class="carousel-control-next" href="#" @click="nextImage" role="button" data-slide="next">
                                <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                        <div class="carousel-thumbnails-container">
                            <img v-for="(image, index) in product.images" :key="index" :src="image" alt="Product Thumbnail"
                                @click="changeImage(index)"
                                :class="{ 'selected-thumbnail': currentImageIndex === index }" />
                        </div>
                    </div>
                </div>

                <div class="product-details">
                    <p class="sneaker-text">SNEAKER COMPANY</p>
                    <h1>{{ product.name }}</h1>
                    <p class="description">{{ product.description }}</p>
                    <div class="price-container">
                        <div class="price-details">
                            <strong class="total-price">${{ parseFloat(totalPrice).toFixed(2) }}</strong>
                            <strong class="discount-percent">{{
                                product.discount.amount }}%</strong>
                        </div>
                        <div>
                            <span class="full-price">${{ parseFloat(product.price.full).toFixed(2) }}</span>
                        </div>
                    </div>
                    <div class="button-container">
                        <div class="quantity-controls">
                            <strong class="quantity-button" @click="decrementQuantity">-</strong>
                            <div class="quantity-value">{{ quantity }}</div>
                            <strong class="quantity-button" @click="incrementQuantity">+</strong>
                        </div>
                        <div class="add-to-cart-button">
                            <button class="cart-button">
                                <i class="fas fa-shopping-cart"></i>
                                <span>Add to cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="not-found">
                <h1>404 - Product Not Found</h1>
                <p>The Slug is incorrect. Please keep it 'fall-limited-edition-sneakers'</p>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            product: null,
            currentImage: null,
            currentImageIndex: 0,
            quantity: 1,
        };
    },
    computed: {
        totalPrice() {
            return this.product ? this.product.price.discounted * this.quantity : 0;
        },
    },
    created() {
        const currentURL = window.location.href;
        const slug = currentURL.split('/').pop();
        const apiEndpoint = `http://localhost:8000/client/products/${slug}`;


        axios.get(apiEndpoint)
            .then((response) => {
                const { data } = response.data;
                this.product = data;
                this.currentImage = data.images[0];
            })
            .catch((error) => {
                console.error("Error fetching product data:", error);
                this.product = null;
            });
    },
    methods: {
        changeImage(index) {
            this.currentImage = this.product.images[index];
            this.currentImageIndex = index
        },
        prevImage() {
            if (this.currentImageIndex > 0) {
                this.currentImageIndex--;
                this.currentImage = this.product.images[this.currentImageIndex];
            }
        },
        nextImage() {
            if (this.currentImageIndex < this.product.images.length - 1) {
                this.currentImageIndex++;
                this.currentImage = this.product.images[this.currentImageIndex];
            }
        },
        incrementQuantity() {
            this.quantity++;
        },
        decrementQuantity() {
            if (this.quantity > 1) {
                this.quantity--;
            }
        },
    },
};
</script>
<style lang="scss">
@import '../../css/product';
</style>


