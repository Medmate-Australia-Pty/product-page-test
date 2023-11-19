<template>
    <Header />
    <div id="single-product" class="container">
      <div v-if="singleProduct" class="product-wrapper">
        <div class="images-container" v-if="singleProduct.images.length > 0">
          <div class="main-image">
            <button class="mobile-button-prev" @click.stop="handleMobileActiveImage('previous')">
              <img v-svg-inline :src="'images/icon-previous.svg'" alt="Previous Icon" />
            </button>
            <img :src="activeImage" alt="Main Image" />
            <button class="mobile-button-next" @click.stop="handleMobileActiveImage('next')">
              <img v-svg-inline :src="'images/icon-next.svg'" alt="Next Icon" />
            </button>
          </div>
          <div class="grid-images">
            <div v-for="image in singleProduct.images">
              <button class="image-button" @click.stop="activeImage = image" :class="activeImage === image ? 'active' : ''">
                <span class="overlay"></span>
                <img :src="image" alt="Main Image" />
              </button>
            </div>
          </div>
        </div>
        <div class="product-content">
          <h4 class="tag">Sneaker Company</h4>
          <h1 class="name" v-if="singleProduct.name" v-html="singleProduct.name"></h1>
          <p class="description" v-if="singleProduct.description" v-html="singleProduct.description"></p>
          <div class="price">
            <div v-if="singleProduct.discount" class="discount-price-wrapper">
              <div class="discount-container">
                <h2 class="discounted-price">${{ parseInt(singleProduct.price.discounted).toFixed(2)}}</h2>
                <div class="discount">
                  <h5 v-if="singleProduct.discount.type === 'amount'">-</h5>
                  <h5>{{ singleProduct.discount.amount }}</h5>
                  <h5 v-if="singleProduct.discount.type === 'percent'">%</h5>
                </div>
              </div>
              <h5 class="original-price" v-if="singleProduct.price.full">${{ parseInt(singleProduct.price.full).toFixed(2) }}</h5>
            </div>
            <div v-else>
              <h2 class="discounted-price" v-if="singleProduct.price.full">${{ parseInt(singleProduct.price.full).toFixed(2)}}</h2>
            </div>
          </div>
          <div class="buttons-container">
            <div class="button-count">
              <button class="button-minus" @click.stop="decreaseProductCount()">
                <img :src="'images/icon-minus.svg'" alt="Minus Icon" />
              </button>
              <span v-html="productCount" class="product-count"></span>
              <button class="button-plus" @click.stop="increaseProductCount()">
                <img :src="'images/icon-plus.svg'" alt="Plus Icon" />
              </button>
            </div>
            <button class="button-add-to-cart">
              <img v-svg-inline :src="'images/icon-cart.svg'" alt="Cart Icon" />
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import product from '../api/product'
import Header from '../components/Header'

const singleProduct = ref(null)
const activeImage = ref(null)
const productCount = ref(0)
const mobileImageIndex = ref(0)
const decreaseProductCount = () => {
  if (productCount.value !== 0) {
    productCount.value--
  }
}

const increaseProductCount = () => {
  productCount.value++
}

//handles active image for mobile view
const handleMobileActiveImage = (direction) => {
  switch(direction) {
    case 'previous':
      if (mobileImageIndex.value !== 0) {
        mobileImageIndex.value = mobileImageIndex.value - 1
      }
      break
    case 'next':
      if (mobileImageIndex.value !== (singleProduct?.value?.images?.length - 1)) {
        mobileImageIndex.value = mobileImageIndex.value + 1
      }
      break
  }

  activeImage.value = singleProduct?.value?.images[mobileImageIndex.value]
}

onMounted(async () => {
  //get the product by slug
  // singleProduct.value = await product.getProduct('fall-limited-edition-sneakers')
  //get product from backend server
  singleProduct.value = await product.getProductServer('fall-limited-edition-sneakers')
  //set initial active image
  activeImage.value = singleProduct?.value?.images?.length > 0 ? singleProduct.value.images[0] : null
})

</script>