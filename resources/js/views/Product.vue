<template>
    <div class="product">
        <div class="product-details">
            <div class="row">
                <div class="col-md-6 std-padding">
                    <div class="product-images">
                        <img
                            :src="currentImage"
                            class="large-image"
                            alt="Large Product Image"
                        />
                        <br />
                        <div class="row">

                            <div class="col-3" v-for="(image, index) in productData.images" :key="index">
                                <img
                                    :src="`${image}`"
                                    class="small-images"
                                    alt="Small Product Image"
                                    @click="changeLargeImage(`${image}`)"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="product-info">
                        <h1 class="product-title">{{ productData.name }}</h1>
                        <p class="product-description">{{ productData.description }}</p>
                        <div class="product-prices">
                            <span class="discount">${{ productData.price.discounted }}</span>
                            <span class="discount-tag">{{ productData.discount.type === 'amount' ? '$'+ productData.discount.discount  : '%'+ productData.discount.discount  }}</span>

                            <br />
                            <span class="original-price"><del>{{productData.price.full}}</del></span>

                        </div>
                        <br/>
                        <div class="row">
                            <div class="row">
                                <div class="col-md-6">

                                    <div class="quantity-control">
                                        <span class="left-neg" @click="decrementQuantity">-</span>
                                        <span class="quantity">{{ quantity }}</span>
                                        <span class="right-pos" @click="incrementQuantity">+</span>
                                    </div>

                                </div>
                                <div class="col-md-6">

                                    <div class="add-to-cart">
                                        <button class="btn btn-orange" @click="addToCart">
                                            <i class="fa fa-shopping-cart"></i> Add to Cart
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            currentImage: './images/iphone-15-pro2.jpg',
            quantity: 0,
        };
    },

    created() {

        this.fetchProductData();
    },
    methods: {
        fetchProductData() {
            const apiUrl = 'http://127.0.0.1:8000/api/products/1';
            const token = '123';

            // Create headers with the Authorization header containing the token
            const headers = new Headers({
                'Authorization': `${token}`,
                'Content-Type': 'application/json', // Set the content type if needed
            });

            // Create the request configuration
            const requestOptions = {
                method: 'GET',
                headers: headers,
            };

            // Make the API request
            fetch(apiUrl, requestOptions)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    this.productData = data;
                    this.currentImage = data.images[0];
                })
                .catch(error => {
                    console.error('Error fetching product data:', error);
                });
        },

        incrementQuantity() {
            this.quantity += 1;
        },
        decrementQuantity() {
            if (this.quantity > 0) {
                this.quantity -= 1;
            }
        },
        changeLargeImage(imageUrl) {
            this.currentImage = imageUrl;
        },
    },
};
</script>

<style scoped>
.product {
    margin-top: 50px;
}

.quantity-control
{
    padding-top: 5px;
    background-color: hsl(223, 64%, 98%);
    width: 150px;
    border-radius: 30px;
    height: 40px;
}

.product-images {
    display: block;
    position: relative;
    width: 70%;
}

.large-image {
    width: 500px;
    max-height: 400px;
}

.small-images {
    cursor: pointer;
    margin-top: 50px;
    width: 200px;
    max-height: 150px;
}


.product-description {
    margin-top: 50px;
    font-size: 16px;
}


.original-price {

    color :hsl(220, 13%, 13%);
}

.discount {
    font-size: 22px;
    font-weight: bold;
}

.quantity {
    position: relative;
    text-align: center;
    left: 50px;
    font-size: 18px;
    font-weight: bold;
}

.product-info

{
    width: 80%;
    padding-left: 40px;
    padding-right: 40px;
}
.add-to-cart button
{
    margin-bottom: 50px;
    width:200px;
}
.add-to-cart button i,.add-to-cart button
{
    color: hsl(0, 0%, 100%)
}

.discount-tag
{

    margin-left: 40px;
    color:  hsl(26, 100%, 55%);
    background-color:  hsl(25, 100%, 94%);
}
.btn-orange
{
    background-color: hsl(26, 100%, 55%);
}

.right-pos
{
    cursor: pointer;
    padding-right: 10px;
    float: right;
    color: hsl(26, 100%, 55%);
    margin-bottom: 30px;
}
.left-neg
{
    cursor: pointer;
    color: hsl(26, 100%, 55%);
    padding-left: 10px;
    float: left;
}

.std-padding
{
    padding-left: 100px;
    padding-right: 100px;
}
</style>
