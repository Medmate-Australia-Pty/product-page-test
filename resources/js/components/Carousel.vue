<template>
  <div class="main-image">
    <img :src="selectedImage" alt="Large Image">

    <div class="arrow-buttons">
      <button @click="prevImage">
        <img src="@/icon-previous.svg"/>
      </button>
      <button @click="nextImage">
        <img src="@/icon-next.svg"/>
      </button>
    </div>
  </div>
  <div class="thumbnail-container">
    <div
      class="thumbnail-image"
      :class="{ 'selected': index === selectedIndex }"
      v-for="(image, index) in images"
      :key="index"
    >
      <img
        :src="`/images/${image}`"
        alt="Thumbnail"
        @click="selectImage(index)"
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'image-product-1.jpg',
        'image-product-2.jpg',
        'image-product-3.jpg',
        'image-product-4.jpg',
      ],
      selectedIndex: 0,
    };
  },
  computed: {
    selectedImage() {
      return `/images/${this.images[this.selectedIndex]}`
    },
  },
  methods: {
    selectImage(index) {
      this.selectedIndex = index;
    },
    prevImage() {
      this.selectedIndex = (this.selectedIndex - 1 + this.images.length) % this.images.length
    },
    nextImage() {
      this.selectedIndex = (this.selectedIndex + 1) % this.images.length
    },
  },
};
</script>

<style lang="scss" scoped>
.main-image {
  position: relative;
  img {
    height: auto;
  }
}

.thumbnail-container {
  justify-content: center;
  padding: 20px 0;
  grid-gap: 20px;
}

.thumbnail-image {
  border-radius: 8px;
  overflow: hidden;
  width: 100px;
  height: 100px;
  cursor: pointer;
} 

.arrow-buttons {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translate(0, -50%);
  padding: 0 20px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
  }
}


@media (min-width: 375px) {
  .thumbnail-container {
    display: none;
  }
}

@media (min-width: 768px) {

}

@media (min-width: 992px) {
  .arrow-buttons {
    display: none;
  }
  .thumbnail-container {
    display: flex;
  }
}

@media screen and (min-width: 1440px) {
  .main-image img {
    border-radius: 20px;
  }
}
</style>