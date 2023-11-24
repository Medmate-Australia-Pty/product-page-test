<template>
    <!-- if discount, display discounted price, discount and full price -->
    <div class="row mb-4" v-if="$store.state.product.price?.discounted">
        <div class="col-9 col-md-12 d-flex align-items-center mb-1">
            <p class="product-price m-0">
                ${{ $store.state.product.price?.discounted }}.00
            </p>
            <div class="">
                <div class="card border-0 bg-pale-orange ms-3">
                    <p class="orange-bold-text mx-2 my-1">
                        {{ $store.state.product.discount?.type == 'percent' ? '' : '$' }}
                        {{ $store.state.product.discount?.amount }}
                        {{ $store.state.product.discount?.type == 'percent' ? '%' : '' }}
                    </p>
                </div>
            </div>
        </div>
        <div class="full-price-text col-3 col-md-12 d-flex align-items-center justify-content-end justify-content-md-start">
            <p class="text-decoration-line-through m-0">
                {{ $store.state.product.price?.full }}.00
            </p>
        </div>
    </div>
    <!-- if no discount, just display full price -->
    <div class="d-flex align-items-center" v-else>
        <div>
            <p class="product-price m-0">
                ${{ $store.state.product.price?.full }}.00
            </p>
        </div>
    </div>
    <div class="row d-flex align-items-center">
        <div class="my-3 col-lg-5">
            <div class="px-4 px-lg-2 d-flex align-items-center quantity-area justify-content-between">
                <a type="button" @click="$store.commit('decrementQuantity')">
                    <img :src="minusIcon">
                </a>
                <input type="number" disabled v-model="$store.state.quantity" class="product-quantity-input form-control">
                <a type="button" @click="$store.commit('incrementQuantity')">
                    <!-- TODO - vertically center the plus/minus buttons -->
                    <img :src="plusIcon">
                </a>
            </div>
        </div>
        <div class="col-lg-7" style="height: 50px;">
            <button class="btn btn-add-to-cart w-100 h-100" type="button" @click="$store.commit('updateCart', {productId: $store.state.product.id, quantity: $store.state.quantity})">
                <!-- TODO - vertically center the icon -->
                <img :src="cartIcon" class="cart-icon me-2">
                Add to cart
            </button>
        </div>
    </div>
</template>
    
<script>
import plusIcon from '../../../../public/images/icon-plus.svg'
import minusIcon from '../../../../public/images/icon-minus.svg'
import cartIcon from '../../../../public/images/icon-cart.svg'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    name: 'CartSection',

    data() {
        return {
            plusIcon,
            minusIcon,
            cartIcon,
        }
    },
}
</script>

<style scoped>
.product-price{
    font-size: 28px;
    font-weight: bold;
}

.bg-pale-orange {
    background-color: hsl(25, 100%, 94%);
    width: fit-content;
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
    border-radius: 10px;
}

.cart-icon {
    filter: brightness(0) invert(1);
    width: 15px;
    height: 15px;
}

</style>