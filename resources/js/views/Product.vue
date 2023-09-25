<template>
    <div class="container">
        <div class="content" v-if="!error">
            <div class="slideshow-container">
                <button @click="prevImage(activeIndex)" class="prev-img-btn">
                    &#10094;
                </button>
                <img :src="activeImage" alt="" />
                <button @click="nextImage(activeIndex)" class="next-img-btn">
                    &#10095;
                </button>
            </div>

            <div class="images-container">
                <img :src="activeImage" alt="" />
                <div class="all-images-container">
                    <img
                        v-for="image in product.images"
                        :src="image"
                        @click="changeImage(image)"
                        :class="activeImage === image ? 'active-img' : ''"
                    />
                </div>
            </div>
            <div class="product-info">
                <h1 class="title">{{ product.name }}</h1>
                <p class="description">{{ product.description }}</p>
                <div class="prices">
                    <div class="discount-price">
                        <h2 class="price">${{ product.price.discounted }}</h2>
                        <span class="discount"
                            >{{ product.discount.amount }}%</span
                        >
                    </div>
                    <h3 class="full-price">${{ product.price.full }}</h3>
                </div>
                <div class="add-to-cart-container">
                    <div class="quantity-container">
                        <button className="decrement-btn" @click="decrement">
                            -
                        </button>
                        <input type="number" :value="count" />
                        <button className="increment-btn" @click="increment">
                            +
                        </button>
                    </div>
                    <button class="add-to-cart-btn">
                        <img
                            src="images/shopping-cart.svg"
                            class="cart-icon"
                            alt=""
                        />
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
        <div v-else>
            {{ error }}
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);
const product = ref(null);
const activeImage = ref(null);
const activeIndex = ref(0);
const error = ref("");

function increment() {
    count.value++;
}

function decrement() {
    count.value--;
    if (count.value < 0) {
        count.value = 0;
    }
}

function changeImage(image) {
    activeImage.value = image;
}

function nextImage() {
    activeIndex.value++;
    if (activeIndex.value === product.value.images.length) {
        activeIndex.value = 0;
    }
    changeImage(product.value.images[activeIndex.value]);
}

function prevImage() {
    activeIndex.value--;
    if (activeIndex.value === -1) {
        activeIndex.value = product.value.images.length - 1;
    }
    changeImage(product.value.images[activeIndex.value]);
}

fetch("/client/products/fall-limited-edition-sneakers")
    .then((res) => res.json())
    .then(({ data }) => {
        product.value = data;
        activeImage.value = data.images[0];
    })
    .catch((err) => (error.value = "An error occurred getting the product"));
</script>
