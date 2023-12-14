<template>
    <div class="flex items-center justify-center">
        <img
            class="banner-img rounded"
            :src="bannerImg"
            alt="Fall Limited Edition Sneakers"
        />
    </div>
    <div v-for="(item, index) in products" :key="index" class="flex my-8">
        <ul role="list" class="flex gap-4 md:gap-8">
            <li
                v-for="(image, index) in item.images"
                :key="index"
                class="inline-flex"
            >
                <div
                    :class="[
                        activeClass == index
                            ? 'border-orange'
                            : 'border-white ',
                    ]"
                    class="thumbnail rounded border-2 border-solid duration-200 ease-in-out hover:cursor-pointer"
                >
                    <img
                        :src="image"
                        :class="[activeClass == index ? 'opacity-25' : '']"
                        :alt="item.name"
                        class="thumbnail rounded hover:cursor-pointer"
                        @click="currentThumbnail(image, index)"
                    />
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const products = ref([]);
const bannerImg = ref("");
const activeClass = ref("");

onMounted(async () => {
    await loadProducts();
});

const loadProducts = async () => {
    const { data } = await axios.get(
        "/client/products/fall-limited-edition-sneakers"
    );
    products.value = data;
    bannerImg.value = data.data.images[0];
};

const currentThumbnail = async (image, index) => {
    bannerImg.value = image;
    activeClass.value = index;
};
</script>

<style type="scss">
.banner-img {
    width: 435px;
    height: 435px;

    &.rounded {
        border-radius: 15px;
    }

    @media (max-width: 640px) {
        width: 350px;
        height: 350px;
    }

    @media (max-width: 480px) {
        width: 250px;
        height: 250px;
    }
}
.thumbnail-container,
.thumbnail {
    width: 85px;
    height: 85px;

    @media (max-width: 640px) {
        width: 64px;
        height: 64px;
    }
}
.thumbnail.rounded {
    border-radius: 10px;
}
</style>
