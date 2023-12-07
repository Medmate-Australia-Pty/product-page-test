<template>
  <section id="product">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <Carousel />
        </div>

        <div class="col-md-7 description">
          <h2>{{ productData.name }}</h2>
          <p>{{ productData.description }}</p>

          <div class="price">
            <div>
              <h3>${{ productData.price?.discounted.toFixed(2) }}</h3>
              <p>{{ productData.discount?.amount }}%</p>
            </div>
            <small class="full-price">${{ productData.price?.full.toFixed(2) }}</small>
          </div>

          <div class="add-cart-wrapper">
            <div class="quantity">
              <button @click="decrementQuantity">
                <img src="@/icon-minus.svg"/>
              </button>
              <span>{{ quantity }}</span>
              <button @click="incrementQuantity">
                <img src="@/icon-plus.svg"/>
              </button>
            </div>
            <button class="btn-add btn-primary">
              <img src="@/icon-cart.svg"/> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Carousel from '../components/Carousel.vue';

export default {
  components: {
    Carousel,
  },
  data() {
    return {
      productData: '',
      quantity: 0,
    };
  },
  methods: {
    decrementQuantity() {
      if (this.quantity > 0) {
        this.quantity--;
      }
    },
    incrementQuantity() {
      this.quantity++;
    },
  },
  mounted() {
    const requestedSlug = this.$route.params.slug;
    if(requestedSlug !== 'fall-limited-edition-sneakers') {
      this.$router.push({ name: '404' })
    }
    // Make a GET request to the specified endpoint using fetch
    fetch('http://localhost:8000/client/products/fall-limited-edition-sneakers')
      .then(response => response.json())
      .then(data => {
        this.productData = data.data;
      })
      .catch(error => {
        console.log("Error:", error.message);
      });

  },
};
</script>
