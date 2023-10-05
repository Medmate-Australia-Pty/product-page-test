<template>
    <div class="product-page-temp container">
        <div v-if="product" class="product-page row">
            <div class="product-images col-xs-12 col-sm-6">
                <div id="product-carousel" class="carousel slide">
                    <div class="carousel-inner">
                        <div
                            v-for="(image, index) in product.images"
                            :key="index"
                            :class="{
                                'carousel-item': true,
                                active: index === currentImageIndex,
                            }"
                        >
                            <img
                                :src="image"
                                class="product-image d-block w-100"
                                :alt="'Product Image ' + (index + 1)"
                            />
                        </div>
                    </div>
                    <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#product-carousel"
                        data-bs-slide="prev"
                    >
                        <div>
                            <span
                                class="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Previous</span>
                        </div>
                    </button>
                    <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#product-carousel"
                        data-bs-slide="next"
                    >
                        <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="ProductThumbnails row">
                    <div
                        class="col-3"
                        v-for="(image, index) in product.images"
                        :key="index"
                    >
                        <a
                            :class="{
                                'active-thumbnail': index === currentImageIndex,
                            }"
                            class="thumbnail-wrap"
                            @click="currentImageIndex = index"
                            :alt="'ProductThumbnailImage ' + (index + 1)"
                        >
                            <img
                                :src="image"
                                class="img-fluid ProductThumbnail"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div class="product-contents col-xs-12 col-sm-6">
                <p class="product-company">SNEAKER COMPANY</p>
                <h1 class="product-name">{{ product.name }}</h1>
                <p class="product-description">{{ product.description }}</p>
                <div class="product-prices">
                    <div class="product-prices-discount">
                        <h2>${{ product.price.discounted }}</h2>
                        <span>{{ product.discount.amount }}%</span>
                    </div>
                    <div class="product-prices-full">
                        ${{ product.price.full }}
                    </div>
                </div>
                <div class="product-cart-control">
                    <div class="product-cart-num">
                        <button
                            @click="productNum > 0 ? productNum-- : productNum"
                        >
                            -
                        </button>
                        <span>{{ productNum }}</span>
                        <button @click="productNum++">+</button>
                    </div>
                    <button class="product-cart-addto" @click="addToCart">
                        <svg
                            width="22"
                            height="20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                                fill="#ffffff"
                                fill-rule="nonzero"
                            />
                        </svg>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
        <div v-else class="loading">
            <div class="spinner-border m-5" role="status">
                <span class="visually-hidden"> Loading product details..</span>
            </div>
            Loading product details..
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "ProductPage",
    data() {
        return {
            product: null,
            currentImageIndex: 0,
            productNum: 0,
            cart: null,
            // [{
            //     id:,
            //     name:,
            //     amount:,
            // }]
        };
    },
    methods: {
        getProductData() {
            let token = "2|2E2KfxtDKzJM8PnpFJPTv8APv4Xj6rZl5RL0kSfo";
            axios
                // .get("/client/products/fall-limited-edition-sneakers")
                .get("/api/products/1", {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                })
                .then((response) => {
                    console.log(response);
                    this.product = response.data;
                })
                .catch((error) => {
                    console.error(error);
                    if (error.response && error.response.status === 404) {
                        this.$router.push({ name: "404page" }); // Redirect to the 404 route
                    }
                });
        },
        addToCart() {
            console.log("Product added to cart:", this.product);
        },
    },
    created() {
        this.getProductData();
    },
};
</script>

<style scoped>
/* * {
    outline: 1px solid red;
} */
.product-page-temp {
}
.product-page {
    display: flex;
    /* flex-direction: column; */
    /* justify-content: center; */
    /* justify-content: space-evenly;
    align-items: center; */
    margin-top: 150px;
}
.product-images {
    padding: 0px 40px;
}
.product-contents {
    padding: 0px 40px;
}
.product-image {
    border-radius: 10%;
}
.ProductThumbnails {
    margin-top: 25px;
}
.ProductThumbnail {
    border-radius: 10%;
}
.thumbnail-wrap {
    border: 3px solid transparent;
    display: block;
}
.active-thumbnail {
    border: 3px solid hsl(26, 100%, 55%);
    border-radius: 10%;
}
.active-thumbnail img {
    opacity: 0.5;
}
.product-contents {
    margin-top: 40px;
}
.product-company {
    display: none;
}
.product-name {
    font-weight: bold;
}
.product-description {
    margin-top: 25px;
    margin-bottom: 25px;
    color: hsl(219, 9%, 45%);
    font-size: 16px;
}
.product-prices-discount {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
}
.product-prices-discount h2 {
    margin: 0;
    font-weight: bold;
}
.product-prices-discount span {
    color: hsl(26, 100%, 55%);
    background: hsl(25, 100%, 94%);
    padding: 0px 10px;
    border-radius: 5px;
    margin-left: 12px;
    font-weight: bold;
}
.product-prices-full {
    font-size: 16px;
    color: hsl(220, 14%, 75%);
    text-decoration: line-through;
}
.product-cart-control {
    margin-top: 25px;
    display: flex;
    /* justify-content: space-between; */
    font-size: 16px;
}
.product-cart-control button {
    /* background: none; */
    /* color: inherit; */
    border: none;
    /* padding: 0; */
    font: inherit;
    cursor: pointer;
    outline: inherit;
    font-weight: bold;
}
.product-cart-num {
    background: hsl(223, 64%, 98%);
    padding: 10px 10px;
    border-radius: 5px;
    margin-right: 10px;
}
.product-cart-num button {
    color: hsl(26, 100%, 55%);
    background: hsl(223, 64%, 98%);
    font-weight: bold;
    font-size: 22px;
}
.product-cart-num span {
    padding: 0px 30px;
    font-weight: bold;
}

.product-cart-addto {
    display: flex;
    background: hsl(26, 100%, 55%);
    color: white;
    border-radius: 5px;
    padding: 15px 60px;
    box-shadow: 0px 30px 40px hsla(26, 100%, 30%, 0.5);
    font-weight: bold;
}
.product-cart-addto svg {
    margin-right: 10px;
}
.carousel-control-prev {
    display: none;
}
.carousel-control-next {
    display: none;
}

.loading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

@media (max-width: 996px) {
    .product-contents {
        padding: 0px 10px;
        margin-top: 10px;
    }
    .product-images {
        padding: 5px 10px;
    }
    .product-cart-addto {
        padding: 15px 30px;
    }
}
@media (max-width: 768px) {
    .product-cart-control {
        flex-direction: column;
    }
    .product-cart-num {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        margin-right: 0px;
    }
}
@media (max-width: 576px) {
    .carousel-control-prev {
        display: flex;
    }
    .carousel-control-next {
        display: flex;
    }
    .ProductThumbnails {
        display: none;
    }
    .product-company {
        display: block;
        color: hsl(26, 100%, 55%);
        font-weight: bold;
    }
    .product-page {
        margin-top: 0px;
        flex-direction: column;
    }
    .product-images {
        padding: 0px 0px;
    }
    .product-image {
        border-radius: 0;
    }
    .product-contents {
        padding: 10px 30px;
    }
    .product-cart-num {
        justify-content: space-between;
        margin: 10px 0px;
        padding: 7px 30px;
    }
    .product-cart-num button {
        font-size: 32px;
    }
    .product-prices {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .product-cart-addto {
        justify-content: center;
        margin: 10px 0px;
        padding: 20px 30px;
    }
}
</style>
