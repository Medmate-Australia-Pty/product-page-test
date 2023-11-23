import { createStore } from 'vuex'

export default createStore({
    state: {
        quantity: 1,
        product: {
            fullPrice: "$250.00",
            price: "$125.00",
            discount: "50%",
            name: 'Fall Limited Edition Sneakers',
            description: `These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.`
        },
    },

    mutations: {
        incrementQuantity(state) {
            state.quantity ++            
        },

        decrementQuantity(state) {
            if(state.quantity > 1) {
                state.quantity --
            }
        },

        setProductData(state, productData) {
            state.product = {
                id: product.id,
                fullPrice: productData.fullPric,
                price: productData.price,
                discount: productData.discount,
                name: productData.name,
                description: productData.description,
            };
        },
    },

    actions: {
        fetchProduct({ commit }) {
            const baseURL = "http://localhost:8080/#/shop/products/";
            axios.get(baseURL + 'fall-limited-edition-sneakers')
            .then(response => {
                // commit("setProductData", res.data);
                console.log(response)
            })
            .catch(e => {
                console.log(e); 
            });
        }
        
    },
    
    modules: {},
})