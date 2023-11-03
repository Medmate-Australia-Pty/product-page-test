<template>
    <div class="content-wrapper">
        <div class="section">
            <div class="product-page">
                <div class="product-main">
                    <img id="featured"
                         :src="image"
                         alt="Product Image"
                         class="product-image"
                    />
                </div>
            </div>
            <div class="product-sub">
                <img
                        v-for="(image, index) in product.images"
                        :key="index"
                        :src="image"
                        :alt="'Product Image ' + (index + 1)"
                        :class="[(index === 0) ? 'active product-thumbnail' : 'product-thumbnail']"
                />
            </div>
        </div>

        <div class="content-section">
            <h1 class="product-title">{{ product.name }}</h1>
            <p class="product-description">{{ product.description }}</p>
            <p class="product-price">Price: ${{ fullPrice }}</p>

            <input value=1  type="number">
            <a class="btn add-to-cart-button"> Add to Cart</a>
        </div>
    </div>
</template>


<style>
    .add-to-cart-button {
        background-color: hsl(26, 100%, 55%);
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        margin-left: 10px;
    }

    .add-to-cart-button:hover {
        background-color: hsl(16, 100%, 45%);
    }

    .content-wrapper {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .content-section {
        width: 600px;
        padding: 10px;
        margin-bottom: 300px;
    }

    .product-page {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        text-align: center;
    }

    .product-sub {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        text-align: center;
    }

    .product-title {
        font-size: 24px;
        color: hsl(0, 0%, 0%)
    }

    .product-description {
        font-size: 16px;
        color: hsl(220, 14%, 75%);
        margin-top: 10px;
    }

    .product-price {
        font-size: 18px;
        color: hsl(0, 0%, 0%);
        margin-top: 10px;
    }

    .product-image {
        border: 2px solid #e0e0eb;
        border-radius: 4%;
        object-fit: cover;
        cursor: pointer;
        max-width: 500px;
        max-height: 600px;
    }

    .product-thumbnail {
        border: 2px solid #e0e0eb;
        border-radius: 10%;
        cursor: pointer;
        object-fit: cover;
        opacity: 0.5;
        max-width: 118px;
        max-height: 600px;
        margin: 5px;
    }

    .product-thumbnail:hover {
        opacity: 1;
    }

    .active {
        opacity: 1;
        border: hsl(16, 100%, 45%);
    }

    .section {
        width: 600px;
        padding: 10px;
    }

</style>


<script>
    export default {
        props: {
            product: Object,
            image: String,
            fullPrice: Number,
            discountedPrice: Number
        },
        mounted() {
            this.$nextTick(() => {
                this.initializeThumbnails();
            });
        },
        methods: {
            initializeThumbnails() {
                let product_thumbnails = document.getElementsByClassName('product-thumbnail');
                let active_images = document.getElementsByClassName('active');
                let featuredImage = document.getElementById('featured');

                setTimeout(() => {
                    for (var i = 0; i < product_thumbnails.length; i++) {
                        product_thumbnails[i].addEventListener('mouseover', function () {
                            if (active_images.length > 0) {
                                active_images[0].classList.remove('active');
                            }
                            this.classList.add('active');
                            featuredImage.src = this.src;
                        });
                    }
                }, 1000);
            },
        },

    };
</script>
