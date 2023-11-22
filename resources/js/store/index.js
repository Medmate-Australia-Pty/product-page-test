import { createStore } from 'vuex'

export default createStore({
    state: {
        cart:[],
    },

    mutations: {
        async initialiseStore(state) {
            if(localStorage.getItem('cart')){
            state.cart = JSON.parse(localStorage.getItem('cart'))
            }
            return true;
        },

        addToStoreCart(state, item){
            //add or remove item
            state.cart.push(item)

            //saving in web storage
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },

        updateCart(state,payload){
            //update quantity 
            state.cart.find(o => o.id ===  payload.product.id).qty = payload.product.qty;

            //saving in web storage
            localStorage.setItem('cart',JSON.stringify(state.cart));
        },
    },

    actions: {},
    
    modules: {},
})