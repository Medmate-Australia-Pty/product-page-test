<template>
  <section id="carousel">
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
              <h3>${{ productData.price?.discounted }}</h3>
              <p>{{ productData.discount?.amount }}%</p>
            </div>
            <small>${{ productData.price?.full }}</small>
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
    };
  },
  mounted() {
    // Make a GET request to the specified endpoint using fetch
    fetch('http://localhost:8000/client/products/fall-limited-edition-sneakers')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.productData = data.data;
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  },
};
</script>

<style lang="scss">
.description {
  padding: 30px 50px;

  .price {
    div {
      display: flex;
      grid-gap: 20px;
      align-items: center;
    }
    h3 {
      font-size: 30px;
    }
    p {
      font-weight: 700;
    }
  }
}
</style>
