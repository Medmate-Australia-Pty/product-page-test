import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify';
import router from '../router';

export default createStore({
    state: {
        quantity: 1,
        product: {},
        cart: [],
    },

    mutations: {
        async initialiseStore(state) {
            if(localStorage.getItem('cart')){
             state.cart = JSON.parse(localStorage.getItem('cart'))
            }
        },

        incrementQuantity(state) {
            state.quantity ++            
        },

        decrementQuantity(state) {
            if(state.quantity > 1) {
                state.quantity --
            }
        },

        setProductData(state, productData) {
            state.product = productData
        },

        updateCart(state, productSelection) {
            let itemAlreadyInCart = state.cart.findIndex(el => el.productId == productSelection.productId)
            if (itemAlreadyInCart >= 0) {
                state.cart[itemAlreadyInCart].quantity += productSelection.quantity
            } else {
                state.cart.push(productSelection)
            }

            localStorage.setItem('cart', JSON.stringify(state.cart));

            toast.success("Added to cart")
        },
    },

    actions: {
        fetchProduct({ commit, state }) {
            const baseURL = "http://localhost:8000/client/products/"
            axios.get(baseURL + router.currentRoute._value.params.slug)
            .then(res => {
                commit("setProductData", res.data.data)
            })
            .catch(e => {
                console.log(e)
                window.location.replace('http://localhost:8000/#/shop/product/product-not-found')
            });
        }
        
    },
    
    modules: {},
})
