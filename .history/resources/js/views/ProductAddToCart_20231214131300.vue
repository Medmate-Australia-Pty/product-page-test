<template>
    <div
        v-for="(item, index) in products"
        :key="index"
        class="container-product-details my-8 flex flex-col"
    >
        <h1 class="text-4xl font-bold">{{ item.name }}</h1>
        <p class="my-8">{{ item.description }}</p>
        <div class="flex gap-x-4 w-4 justify-between items-center">
            <div>
                <p class="text-2xl font-bold">
                    ${{ (item.price.discounted * counter).toFixed(2) }}
                </p>
            </div>
            <div
                class="container-discount-percentage bg-pale-orange flex rounded items-center"
            >
                <small
                    class="txt-discount-percentage leading-6 text-orange font-bold"
                    >50%</small
                >
            </div>
        </div>
        <div class="mt-1">
            <p class="txt-price-full font-bold text-gray-400 line-through">
                ${{ (item.price.full * counter).toFixed(2) }}
            </p>
        </div>
        <div
            class="flex flex-col gap-x-4 w-4 justify-between items-start md:flex-row md:items-center"
        >
            <div class="container-counter flex mt-8 p-4 bg-light-grayish-blue">
                <button
                    type="button"
                    name="button"
                    @click="changeCounter('-1')"
                >
                    <span class="txt-counter-ops text-orange font-bold">-</span>
                </button>
                <input
                    class="input-counter bg-light-grayish-blue font-bold text-center"
                    type="text"
                    name="name"
                    :value="counter"
                />
                <button type="button" name="button" @click="changeCounter('1')">
                    <span class="txt-counter-ops text-orange font-bold">+</span>
                </button>
            </div>
            <button
                class="btn-add-to-cart mt-8 bg-orange whitespace-nowrap flex justify-between items-center gap-x-4 duration-200 ease-in-out hover:bg-very-dark-blue hover:cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-shopping-cart text-white w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                </svg>
                <span class="text-white font-bold">Add to cart</span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const products = ref([]);
const counter = ref(0);

onMounted(async () => {
    await loadProducts();
});

const loadProducts = async () => {
    const { data } = await axios.get(
        "/client/products/fall-limited-edition-sneakers"
    );
    products.value = data;
};

const changeCounter = (num) => {
    counter.value += +num;
    !isNaN(counter.value) && counter.value > 0
        ? counter.value
        : (counter.value = 0);
};
</script>

<style>
.container-discount-percentage {
    padding: 0 7px;
}

.txt-discount-percentage,
.txt-price-full {
    font-size: 0.85rem;
}

.btn-add-to-cart {
    padding: 0 70px;
    box-shadow: hsla(26, 100%, 55%, 0.5) 0px 20px 75px 0px;
}

.container-counter,
.btn-add-to-cart {
    height: 50px;
    border-radius: 10px;
}

.input-counter {
    width: 90px;
}

.txt-counter-ops {
    font-size: 30px;
    line-height: 0;
}

@media (max-width: 480px) {
    .container-product-details {
        margin-right: 2.25rem;
        margin-left: 2.25rem;
    }
}
</style>
