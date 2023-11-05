
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
  
<style>
.product-page {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.product-carousel {
    flex: 1;
}

.product-details {
    flex: 1;
    padding: 15px 40px
}

.carousel {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.carousel-inner {
    position: relative;
}

.carousel-control-prev,
.carousel-control-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: aliceblue;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 11px
}

.carousel-control-prev {
    left: 5%;
}

.carousel-control-next {
    right: 5%;
}

.img-fluid {
    width: 100%;
    max-height: 50vh;
}

.carousel-thumbnails-container>img {
    display: none
}

.sneaker-text {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 600;
    color: #FFA500;
    letter-spacing: 1px;
}

.description {
    font-size: 16px;
    color: #ababab;
    text-align: left;
}

.price-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px 0;
}

.total-price {
    font-size: 25px;
}

.discount-percent {
    padding: 5px 8px;
    margin: 0 15px;
    color: #FFA500;
    background-color: hsl(25, 100%, 94%);
    border-radius: 12%;
}

.full-price {
    color: #ababab;
    text-decoration: line-through;
}

.button-container {
    display: flex;
    flex-direction: column;
}

.quantity-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f2f9fc;
    border-radius: 10px;
    padding: 10px;
}

.quantity-button {
    width: 30px;
    height: 30px;
    font-size: bold;
    color: #FFA500;
    cursor: pointer;
    font-size: 25px;
}

.quantity-value {
    font-size: 18px;
    margin: 0 10px;
}

.add-to-cart-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
    background-color: hsl(26, 100%, 55%);
    color: hsl(25, 100%, 94%);
    border-radius: 10px;
    border: 0px;
    padding: 15px;
}

.cart-button {
    background-color: hsl(26, 100%, 55%);
    font-size: 16px;
    border: none;
    color: hsl(25, 100%, 94%);
    font-weight: bold;
}

.fa-shopping-cart {
    padding: 0 10px;
}

.not-found {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.not-found h1 {
    font-size: 16px;
    margin: 0;
    color: red
}

.not-found p {
    font-size: 8px;
    color: #777;
}

@media (min-width: 576px) {
    .img-fluid {
        width: 100%;
        max-height: 70vh;
    }

}

@media (min-width: 768px) {
    .img-fluid {
        width: 100%;
        max-height: auto
    }

}

@media (min-width: 1440px) {
    .product-page {
        flex-direction: row;
        max-width: 1020px;
        margin: 100px auto
    }

    .carousel {
        text-align: center;
    }

    .img-fluid {
        width: 400px;
        height: auto;
        border-radius: 5%;
    }

    .carousel-thumbnails-container {
        display: flex;
        justify-content: space-between;
        padding: 25px 55px;
    }

    .carousel-thumbnails-container>img {
        display: inline-block;
        width: 75px;
        border-radius: 12%;
        cursor: pointer;
        border: none;
    }

    .selected-thumbnail {
        outline: 2px solid hsl(26, 100%, 55%);
        opacity: 0.3;
    }

    .selected-thumbnail:hover {
        opacity: 1;
    }

    .carousel-control-prev,
    .carousel-control-next {
        display: none;
    }

    .product-details {
        margin-top: 20px
    }

    .sneaker-text {
        display: none
    }

    .price-container {
        flex-direction: column;
        align-items: flex-start;
        margin: 30px 0;
    }

    .price-details {
        padding: 0 0 5px 0;
    }

    .button-container {
        flex-direction: row;
    }

    .quantity-controls {
        width: 50%;
    }

    .add-to-cart-button {
        width: 50%;
        margin: 0 10px
    }

    .not-found h1 {
        font-size: 24px;
        margin: 0;
        color: red
    }

    .not-found p {
        font-size: 16px;
        color: #777;
    }
}
</style>
  