<template>
    <div class="container">
        <div v-if="width > 1140" class="image-box">
            <img
                class="main-image"
                ref="image"
                :src="data.images[activeItem]"
                :alt="data.name"
            />
            <img
                @click="renderImage(images, i)"
                :class="{
                    'active-image-item': i === activeItem,
                    'image-items': activeItem !== i,
                }"
                v-for="(images, i) in data.images"
                :key="images"
                :src="images"
                :alt="data.name"
            />
        </div>
        <div v-if="width < 1140" class="mobile-image-box">
            <button
                @click="renderPrevImageCarousel()"
                class="mobile-button-left"
            >
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11 1 3 9l8 8"
                        stroke="#1D2026"
                        stroke-width="3"
                        fill="none"
                        fill-rule="evenodd"
                    />
                </svg>
            </button>
            <img
                class="main-image"
                ref="image"
                :src="data.images[activeItem]"
                :alt="data.name"
            />

            <button
                @click="renderNextImageCarousel()"
                class="mobile-button-right"
            >
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m2 1 8 8-8 8"
                        stroke="#1D2026"
                        stroke-width="3"
                        fill="none"
                        fill-rule="evenodd"
                    />
                </svg>
            </button>
        </div>

        <div class="text-box">
            <p class="sneaker-company" v-if="width < 1140">SNEAKER COMPANY</p>
            <h1>{{ data.name }}</h1>
            <p class="description">
                {{ data.description }}
            </p>
            <h2>
                ${{ data.price.discounted }}.00
                <span class="discount"> {{ data.discount.amount }} %</span>
            </h2>
            <s class="original-price">${{ data.price.full }}.00</s>
            <div class="inputs">
                <div class="quantityBox">
                    <span @click="decrement()"
                        ><svg
                            width="12"
                            height="6"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                            <defs>
                                <path
                                    d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                                    id="a"
                                />
                            </defs>
                            <use
                                fill="#FF7E1B"
                                fill-rule="nonzero"
                                xlink:href="#a"
                            /></svg></span
                    >{{ quantity }}
                    <span @click="increment()"
                        ><svg
                            width="12"
                            height="12"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                            <defs>
                                <path
                                    d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                                    id="b"
                                />
                            </defs>
                            <use
                                fill="#FF7E1B"
                                fill-rule="nonzero"
                                xlink:href="#b"
                            /></svg
                    ></span>
                </div>
                <div class="cart-button">
                    <span
                        ><svg
                            width="22"
                            height="20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                                fill="white"
                                fill-rule="nonzero"
                            /></svg></span
                    >{{ cartButton.title }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.getData();
        window.addEventListener("resize", this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener("resize", this.handleResize);
    },
    data() {
        return {
            activeItem: 0,
            width: 0,
            i: 0,
            data: {},
            quantity: 0,
            cartButton: {
                title: "Add to cart",
            },
        };
    },
    methods: {
        handleResize() {
            this.width = window.innerWidth;
        },
        increment() {
            this.quantity++;
        },
        decrement() {
            if (this.quantity > 0) {
                this.quantity--;
            }
        },
        async getData() {
            try {
                const res = await fetch(
                    "/client/products/fall-limited-edition-sneakers"
                );
                const dataObj = await res.json();
                this.data = dataObj.data;
            } catch (error) {
                console.log(error);
            }
        },
        renderImage(imageLink, i) {
            this.$refs.image.src = imageLink;
            this.activeItem = i;
        },
        renderNextImageCarousel(i) {
            if (this.i === this.data.images.length - 1) {
                this.i = -1;
            }
            this.i++;
            this.$refs.image.src = this.data.images[this.i];
            console.log(this.i, "next");
        },
        renderPrevImageCarousel(i) {
            if (this.i === 0) {
                this.i = this.data.images.length;
            }
            this.i--;
            this.$refs.image.src = this.data.images[this.i];
            console.log(this.i, "prev");
        },
    },
};
</script>

<style lang="scss">
@import "./resources/css/_color.scss";

/** DESKTOP CSS */

.container {
    display: flex;
    flex-direction: row;
    padding: 20px 200px 0px 200px;
    align-items: start;
}
.image-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40px;
    img {
        border-radius: 10px;
    }
    .main-image {
        width: 700px;
    }
    .image-items {
        cursor: pointer;
        flex: 1 1 0px;
        width: 0px;
    }
    .active-image-item {
        flex: 1 1 0px;
        width: 0px;
        border-style: solid;
        border-color: $color-orange;
        opacity: 0.4;
    }
}

.text-box {
    margin: 0px 0px 0px 100px;
    align-self: center;
    .discount {
        color: $color-orange;
        background-color: $color-pale-orange;
        font-size: 16px;
        padding: 3px 10px 3px 10px;
        border-radius: 5px;
        margin: 0px 10px 10px 0px;
    }
    .original-price {
        opacity: 0.2;
        font-weight: bold;
    }
    .description {
        opacity: 0.5;
    }

    .inputs {
        margin: 10px 0px 0px 0px;
        display: flex;
        gap: 10px;
        align-items: center;
        .quantityBox {
            display: flex;
            flex: 1 1 auto;
            justify-content: space-around;
            cursor: pointer;
            align-self: center;
            background-color: $color-light-grayish-blue;
            border-radius: 8px;
            padding: 14px;
            text-align: center;
            font-size: 12px;
            font-weight: bold;
        }
        .cart-button {
            cursor: pointer;
            display: flex;
            flex: 1 1 auto;
            padding: 12px;
            justify-content: space-evenly;
            background-color: $color-orange;
            color: $color-white;
            border: none;
            border-radius: 5px;
            font-size: 14px;
            font-weight: bold;
            box-shadow: 0px 20px 20px 0px $color-pale-orange;
        }
    }
}

/** MOBILE CSS */
@media screen and (max-width: 1140px) {
    .container {
        display: flex;
        flex-direction: column;
        padding: 0px;
    }
    .image-box {
        display: none;
    }
    .text-box {
        margin: 0px;
        padding: 20px;
    }
    .sneaker-company {
        font-size: 13px;
        letter-spacing: 1px;
        color: $color-orange;
        font-weight: bold;
    }
    .inputs {
        flex-direction: column;
        margin: 0px;
        .quantityBox {
            width: 100%;
        }
        .cart-button {
            width: 100%;
        }
    }
    .mobile-button-right {
        position: absolute;
        cursor: pointer;
        transform: translate(-60px, 180px);
        padding: 15px;
        border-radius: 70%;
        z-index: 1;
        border: none;
    }
    .mobile-button-left {
        position: absolute;
        cursor: pointer;
        transform: translate(20px, 180px);
        padding: 15px;
        border-radius: 70%;
        z-index: 1;
        border: none;
    }
}
</style>
