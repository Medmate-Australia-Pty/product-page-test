<template>
    <div class="container g-0 g-md-1">
        <div v-if="data" class="product-page row g-0 g-md-1">

            <!-- Image gallery for desktop -->
            <div v-if="width > 800" class="image-box col-xs-12 col-sm-6">
                <img class="main-image" ref="image" :src="data.images[0]" :alt="data.name" />

                <img @click="renderImage(images, i)" :class="{
                    'active-image-item': i === activeItem,
                    'image-items': activeItem !== i,
                }" v-for="(images, i) in data.images" :key="images" :src="images" :alt="data.name" />

            </div>

            <!-- Image carousel for mobile -->
            <div v-if="width < 800" class="mobile-image-box">
                <button @click="renderPrevImageCarousel()" class="mobile-button-left">
                    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="4" fill="none" fill-rule="evenodd" />
                    </svg>
                </button>
                <img class="main-image" ref="image" :src="data.images[activeItem]" :alt="data.name" />

                <button @click="renderNextImageCarousel()" class="mobile-button-right">
                    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                        <path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="4" fill="none" fill-rule="evenodd" />
                    </svg>
                </button>
            </div>

            <!-- Product information -->
            <div class="product-contents col-xs-12 col-sm-6">
                <p class="sneaker-company" v-if="width < 800">SNEAKER COMPANY</p>
                <h1>{{ data.name }}</h1>
                <p class="product-description">
                    {{ data.description }}
                </p>

                <div class="product-prices">
                    <div class="product-prices-discount">
                        <h2>${{ data.price.discounted }}</h2>
                        <span>{{ data.discount.amount }}%</span>
                    </div>
                    <div class="product-prices-full">
                        ${{ data.price.full }}
                    </div>
                </div>

                <div class="product-cart-control">
                    <div class="product-cart-num">
                        <button @click="quantity > 0 ? quantity-- : quantity">
                            -
                        </button>
                        <span>{{ quantity }}</span>
                        <button @click="quantity++">+</button>
                    </div>
                    <button class="product-cart-addto" @click="addToCart">
                        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                                fill="#ffffff" fill-rule="nonzero" />
                        </svg>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    created() {
        const slug = this.$route.params.slug;
        this.getData(slug);
        window.addEventListener("resize", this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener("resize", this.handleResize);
    },
    data() {
        return {
            activeItem: 0, // default first image
            width: 0,
            data: {},
            quantity: 0,
            cartButton: {
                title: "Add to cart",
            },
        };
    },
    methods: {
        getData(slug) {
            // Include token
            const token = localStorage.getItem('authToken');
            console.log('token: ' + token);
            axios
                .get("/client/products/fall-limited-edition-sneakers")
                // Bug: 404page template won't reload after being navigated to (unless manually hit refresh)
                // .get(`/client/products/${slug}`) 

                // Retrieve from own API
                // .get("/api/products/1", {
                //     headers: {
                //         Authorization: "Bearer " + token,
                //     },
                // })
                .then((response) => {
                    // console.log(response.data.data);
                    this.data = response.data.data;
                })
            //  Code for 404 redirect 
            // .catch((error) => {
            //     console.error(error);
            //     if (error.response && error.response.status === 404) {
            //         this.$router.push({ name: "404page" }); // Redirect to the 404 route
            //     }
            // });
        },
        handleResize() {
            this.width = window.innerWidth;
        },
        renderImage(imageLink, i) {
            this.$refs.image.src = imageLink;
            this.activeItem = i;
        },
        renderNextImageCarousel() {
            if (this.activeItem === this.data.images.length - 1) {
                this.activeItem = 0;
            } else {
                this.activeItem++;
            }
            this.$refs.image.src = this.data.images[this.activeItem];
        },
        renderPrevImageCarousel() {
            if (this.activeItem === 0) {
                this.activeItem = this.data.images.length - 1;
            } else {
                this.activeItem--;
            }
            this.$refs.image.src = this.data.images[this.activeItem];
        },
    },
}
</script>

<style scoped lang="scss">
@import "./resources/css/_color.scss";

$border-radius: 10px;

// Mobile breakpoint
$screen-mobile: 375px;
// Desktops breakpoint
$screen-desktop: 1440px;

@mixin mobile {
    @media (min-width: #{$screen-mobile}) {
        @content;
    }
}

@mixin desktop {
    @media (min-width: #{$screen-desktop}) {
        @content;
    }
}

.product-page {
    display: flex;
    flex-direction: row;

    @include mobile {
        padding-bottom: 100px;
    }

    @include desktop {
        margin: 140px 140px 0px 140px;
    }

}

.image-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 33px;

    .main-image {
        width: 450px;
    }

    .image-items {
        width: 88px;
    }

    .active-image-item {
        width: 88px;
        border-style: solid;
        border-color: $color-orange;
        opacity: 0.4;
        border-width: 2px;
    }

    img {
        border-radius: $border-radius;
    }
}

.mobile-image-box {
    width: 100%;
    height: 300px;

    .main-image {
        object-fit: cover;
        width: 100%;
    }

    .mobile-button-right {
        position: absolute;
        cursor: pointer;
        transform: translate(-60px, 180px);
        width: 40px;
        height: 40px;
        padding-inline: 0px;
        border-radius: 50%;
        z-index: 1;
        border: none;
        opacity: 0.9;
    }

    .mobile-button-left {
        position: absolute;
        cursor: pointer;
        transform: translate(20px, 180px);
        width: 40px;
        height: 40px;
        padding-inline: 0px;
        border-radius: 50%;
        z-index: 1;
        border: none;
        opacity: 0.9;
    }
}

.sneaker-company {
    font-size: 13px;
    letter-spacing: 1px;
    color: $color-orange;
    font-weight: bold;
}

.product-contents {

    h1 {
        font-weight: bold;
    }

    @include mobile {
        margin-top: 25px;
        padding: 0px 30px;
    }

    @include desktop {
        margin-top: 45px;
        padding-left: 65px;
    }

}

.product-description {
    opacity: 0.5;
    font-weight: light;

    @include mobile {
        margin: 12px 0px 20px 0px;
    }

    @include desktop {
        margin-top: 40px;
        margin-bottom: 30px;
    }

}

.product-prices {
    @include mobile {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
}

.product-prices-discount {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h2 {
        margin: 0;
        font-weight: bold;
    }

    span {
        color: $color-orange;
        background: $color-pale-orange;
        padding: 4px 8px;
        border-radius: 5px;
        margin-left: 12px;
        font-weight: bold;
    }
}

.product-prices-full {
    color: $color-grayish-blue;
    text-decoration: line-through;
}

.product-cart-control {
    margin-top: 20px;
    /* justify-content: space-between; */

    button {
        border: none;
        font: inherit;
        cursor: pointer;
        outline: inherit;
        font-weight: bold;
    }

    @include mobile {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }

    @include desktop {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }
}

.product-cart-num {
    background: $color-light-grayish-blue;
    padding: 10px 15px;
    border-radius: $border-radius;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @include mobile {
        width: 100%;
    }

    @include desktop {
        width: 155px;
        margin-right: 15px;
    }

    button {
        color: $color-orange;
        background: $color-light-grayish-blue;
        font-weight: bold;
        font-size: 22px;
        padding: 0px 10px;
    }

    span {
        font-weight: bold;
    }
}

.product-cart-addto {
    justify-content: center;
    background: $color-orange;
    color: $color-white;
    border-radius: $border-radius;
    padding: 15px 0px;
    box-shadow: 0px 20px 50px hsla(26, 100%, 55%, 0.5);
    font-weight: bold;

    @include mobile {
        width: 100%;
    }

    @include desktop {
        flex: 1;
        width: 300px;
    }

    svg {
        margin-right: 20px;
    }
}
</style>