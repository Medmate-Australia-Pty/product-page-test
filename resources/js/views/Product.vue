<template>
    <div>
        <div v-if="product">
            <table>
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
            </table>
        </div>
        <div v-else>
            Loading product...
        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            product: null,
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
            })
            .catch((error) => {
                console.error(error);
            });
        },
    },
};
</script>

<style lang="scss">
    td {
        border-color: 1px solid black;
    }
</style>