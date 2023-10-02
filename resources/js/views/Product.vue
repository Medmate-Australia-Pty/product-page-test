<template>
    <div class="container">
        <div class="image-box">
            <img
                class="main-image"
                ref="image"
                :src="data.images[0]"
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
        <div class="text-box">
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
                <div class="quantityBox">{{ quantity }}</div>
                <div class="cart-button">{{ cartButton.title }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.getData();
    },
    data() {
        return {
            activeItem: null,
            data: {},
            quantity: 0,
            cartButton: {
                title: "Add to cart",
            },
        };
    },
    methods: {
        async getData() {
            const res = await fetch(
                "/client/products/fall-limited-edition-sneakers"
            );
            const dataObj = await res.json();
            this.data = dataObj.data;
        },
        renderImage(imageLink, i) {
            this.$refs.image.src = imageLink;
            this.activeItem = i;
        },
    },
};
</script>

<style lang="scss">
@import "./resources/css/_color.scss";

.container {
    display: flex;
    flex-direction: row;
    padding: 20px 200px 0px 200px;
    align-items: center;
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
        width: 145px;
    }
    .active-image-item {
        width: 145px;
        border-style: solid;
        border-color: $color-orange;
        opacity: 0.4;
    }
}

.text-box {
    margin: 0px 0px 0px 100px;
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
        flex-grow: 1;
        gap: 10px;
        align-items: center;
        .quantityBox {
            background-color: $color-light-grayish-blue;
            border-radius: 8px;
            padding: 12px;
            width: 150px;
            text-align: center;
            font-size: 12px;
            font-weight: bold;
        }
        .cart-button {
            background-color: $color-orange;
            color: $color-white;
            padding: 15px;
            width: 200px;
            text-align: center;
            border: none;
            border-radius: 5px;
            font-size: 12px;
            font-weight: bold;
            box-shadow: 0px 20px 20px 0px $color-pale-orange;
        }
    }
}
</style>
