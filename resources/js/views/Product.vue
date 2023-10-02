<template>
    <div class="single-product-page">

        <div v-if="product" class="py-5">

            <div class="container product py-5">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="bg-primary me-md-5 mb-5 mb-md-0">
                            left
                        </div>
                    </div>
                    <div class="col-md-6">
                        
                        <h1 class="product__name fw-bold pb-2 pb-md-4">{{ product.name }}</h1>
                        <p class="product__desc pb-1 pb-md-3">{{ product.description }}</p>
                        <div class="product__price d-inline-flex align-items-center mb-1 fw-bold">
                            <div class="product__price-final fs-3 me-2" v-if="product.price.discounted">
                                ${{ parseFloat(product.price.discounted).toFixed(2) }}
                            </div>
                            <div class="product__price-discounted px-2 py-1 rounded" v-if="product.discount.amount">
                                {{ product.discount.amount }}%
                            </div>
                        </div>
                        <div class="product__price-original fw-bold pb-3 pb-md-4" v-if="product.price.full">
                            <del>${{ parseFloat(product.price.full).toFixed(2) }}</del>
                        </div>
                        <div class="product__actions d-md-inline-flex align-items-center d-grid gap-2">
                            <div class="product__actions-quantity minusplusnumber d-inline-flex align-items-center justify-content-center me-md-3 rounded fw-bold">
                                <div class="minus fs-2 px-3 pb-2" v-on:click="mpminus()">-</div>
                                <div id="field_container">
                                    <input type="number" class="fs-6 fw-bold ms-2" v-model="newValue" />
                                </div>
                                <div class="plus fs-2 px-3 pb-2" v-on:click="mpplus()">+</div>
                            </div>
                            <button class="product__actions-add-to-cart btn btn-primary fw-bold" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3 me-2 mb-1" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                                Add to cart
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <!-- <table class="product-table">
                <tr>
                    <td>Product ID</td>
                    <td>{{ product.id }}</td>
                </tr>
                <tr>
                    <td>Product Name</td>
                    <td>{{ product.name }}</td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td>{{ product.description }}</td>
                </tr>
                <tr>
                    <td>Full Price</td>
                    <td>{{ product.price.full }}</td>
                </tr>
                <tr>
                    <td>Discounted Price</td>
                    <td>{{ product.price.discounted }}</td>
                </tr>
                <tr>
                    <td>Discount Type</td>
                    <td>{{ product.discount.type }}</td>
                </tr>
                <tr>
                    <td>Discount Amount</td>
                    <td>{{ product.discount.amount }}%</td>
                </tr>
                <tr>
                    <td>Images</td>
                    <td>
                    <ul>
                        <li v-for="(image, index) in product.images" :key="index">
                            <img :src="image" alt="Product Image" />
                        </li>
                    </ul>
                    </td>
                </tr>
            </table> -->
        </div>
        <div v-else>
            Loading product...
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import VueNumericInput from 'vue-numeric-input';

export default {
    props: {
        value: {
            default: 0,
            type: Number
        },
        min: {
            default: 0,
            type: Number
        },
        max: {
            default: undefined,
            type: Number
        }
    },
    data() {
        return {
            product: null,
            newValue: 1,
        };
    },
    mounted() {
        this.fetchData(); // Call fetchData method when the component is mounted
    },
    methods: {
        fetchData() {
            axios.get('/client/products/fall-limited-edition-sneakers')
            .then((response) => {
                this.product = response.data.data; // Store the product data
                console.log(response.data.data);
            })
            .catch((error) => {
                console.error(error);
            });
        },
        mpplus: function () {
            if (this.max === undefined || (this.newValue < this.max)) {
            this.newValue = this.newValue + 1
            this.$emit('input', this.newValue)
            }
        },
        mpminus: function () {
            if ((this.newValue) > this.min) {
            this.newValue = this.newValue - 1
            this.$emit('input', this.newValue)
            }
        }
    },
    watch: {
        value: {
            handler: function (newVal, oldVal) {
            this.newValue = newVal
            }
        }
    },
    created: function () {
        this.newValue = this.value
    }
};
</script>

<style lang="scss">
    /* Import your SCSS file */
    @import 'resources/css/app.scss';

    .single-product-page {
        color: $very-dark-blue;

        .product {
            width: 1038px;
            max-width: 100%;

            &__desc {
                color: $dark-grayish-blue;
            }

            &__price-discounted {
                background-color: $pale-orange;
                color: $orange;
            }

            &__price-original {
                color: $grayish-blue;
            }

            &__actions-quantity {
                background-color: $light-grayish-blue;
                input {
                    background-color: transparent;
                    border: 0;
                    outline: none;
                    width: 80px;
                    max-width: 100%;
                    text-align: center;
                }
                .plus,
                .minus {
                    color: $orange;

                    &:hover {
                        cursor: pointer;
                    }
                }
            }

            &__actions-add-to-cart {
                font-size: 14px;
                --bs-btn-padding-y: 1rem;
                --bs-btn-padding-x: 3rem;
                max-width: 100%;

                @media (min-width: $desktop) {
                    width: 270px;
                }
            }
            
        }
    }
</style>