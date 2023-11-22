<template>
    <div class="d-flex align-items-center">
        <div>
            <p class="product-price m-0">{{ data.price }}</p>
        </div>
        <div class="card border-0 bg-pale-orange ms-3" style="max-width: 18rem;">
            <p class="orange-bold-text mx-2 my-1">{{ data.discount }}</p>
        </div>
        <div class="full-price-text ms-auto">
            <p class="text-decoration-line-through">{{ data.fullPrice }}</p>
        </div>
    </div>
    <div class="d-flex align-items-center quantity-area justify-content-between px-3 my-3">
        <a type="button" @click="decrementQuantity" :class="loading?'disabled':''">
            <img :src="minusIcon">
        </a>
        <input type="number" v-model.number="quantity" disabled class="product-quantity-input form-control">
        <a type="button" @click="incrementQuantity" :class="loading?'disabled':''">
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
            data: {
                fullPrice: "$250.00",
                price: "$125.00",
                discount: "50%",
            },
            quantity: 0,
            loading: false,
        }
    },

    mounted() {
        this.quantity = this.product.quantity

        let storeCart = this.$store.state.cart
        let existingStoreItem = storeCart.find(o => o.id ===  this.product.id);
        if(existingStoreItem) {
            this.item = existingStoreItem
        }
        else {
            this.item = this.product
        }
    },

    methods: {
        async incrementQuantity() {
            console.log('increment')
            // this.loading = true

            this.quantity ++
            console.log(this.quantity)
            // this.product.quantity = this.quantity
            // await this.$store.commit('updateCart', { product: this.product })

            // this.loading = false
        },

        async decrementQuantity() {
            console.log('decrement')
            // this.loading = true

            if(this.quantity > 1) {
                this.quantity --
            //     this.product.quantity = this.quantity
            //     await this.$store.commit('updateCart', { product: this.product })
            }

            // this.loading = false
        },

        async addToCart(){
            this.item.quantity = 1
            this.$store.commit('addToStoreCart', this.item)
            toast('Added items to cart', { autoClose: 1500 });
        }
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