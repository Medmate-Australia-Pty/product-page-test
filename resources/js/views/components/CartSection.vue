<template>
    <div class="d-flex align-items-center">
        <div>
            <p class="product-price m-0">{{ $store.state.product.price }}</p>
        </div>
        <div class="card border-0 bg-pale-orange ms-3" style="max-width: 18rem;">
            <p class="orange-bold-text mx-2 my-1">{{ $store.state.product.discount }}</p>
        </div>
        <div class="full-price-text ms-auto">
            <p class="text-decoration-line-through">{{ $store.state.product.fullPrice }}</p>
        </div>
    </div>
    <div class="d-flex align-items-center quantity-area justify-content-between px-3 my-3">
        <a type="button" @click="$store.commit('decrementQuantity')">
            <img :src="minusIcon">
        </a>
        <input type="number" v-model="$store.state.quantity" class="product-quantity-input form-control">
        <a type="button" @click="$store.commit('incrementQuantity')">
            <!-- TODO - vertically center the plus/minus buttons -->
            <img :src="plusIcon">
        </a>
    </div>
    <button type="button" @click="addToCart" class="btn btn-add-to-cart w-100">
        <!-- TODO - vertically center the icon -->
        <img :src="cartIcon" class="cart-icon me-2">
        Add to cart
    </button>
</template>
    
<script>
import plusIcon from '../../../../public/images/icon-plus.svg'
import minusIcon from '../../../../public/images/icon-minus.svg'
import cartIcon from '../../../../public/images/icon-cart.svg'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    name: 'CartSection',

    props: ['product'],

    components: {
    },
    
    data() {
        return {
            plusIcon,
            minusIcon,
            cartIcon,
        }
    },

    mounted() {
        
    },

    methods: {
        
    },

    computed: {
    }
}
</script>

<style scoped>
.product-price{
    font-size: 28px;
    font-weight: bold;
}

.bg-pale-orange {
    background-color: hsl(25, 100%, 94%);
}

.full-price-text {
    font-size: 14px;
    font-weight: 600;
    color: hsl(220, 14%, 75%);
}

input[type="number"] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  background-color: hsl(223, 64%, 98%);
  border: 0;
  width: 100px;
  font-weight: 600;
  text-align: center;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

.quantity-area {
    background-color: hsl(223, 64%, 98%);
    border-radius: 10px;
    height: 50px;
}

.product-quantity-input:focus {
    outline: 0;
}

.btn-add-to-cart {
    background-color: hsl(26, 100%, 55%);
    color: white;
    font-weight: 600;
}

.cart-icon {
    filter: brightness(0) invert(1);
    width: 15px;
    height: 15px;
}

</style>