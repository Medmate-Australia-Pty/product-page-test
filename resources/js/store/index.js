import { createStore } from 'vuex'
import axios from 'axios'

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
            console.log(itemAlreadyInCart)
            if (itemAlreadyInCart >= 0) {
                state.cart[itemAlreadyInCart].quantity += productSelection.quantity
            } else {
                state.cart.push(productSelection)
            }

            localStorage.setItem('cart', JSON.stringify(state.cart));

            toast("Added to cart", {
                autoClose: 1500,
            });
        },
    },

    actions: {
        fetchProduct({ commit }) {
            const baseURL = "http://localhost:8000/";
            axios.get(baseURL + 'client/products/fall-limited-edition-sneakers')
            .then(res => {
                commit("setProductData", res.data.data);
            })
            .catch(e => {
                console.log(e); 
            });
        }
        
    },

    getters: {
        price(state) {
            return state.product.price
        }
    },
    
    modules: {},
})