<template>
    <div>
        <p class="orange-bold-text">{{ companyName }}</p>
        <p class="product-title">{{ $store.state.product.name }}</p>
        <p class="product-description">{{ $store.state.product.description }}</p>
    </div>
</template>
    
<script>

export default {
    name: 'TextSection',

    components: {
    },
    
    data() {
        return {
            companyName: 'SNEAKER COMPANY',
        }
    },

    mounted: function() {
    },

    methods: {
    },

    computed: {
    }
}
</script>

<style scoped>
.orange-bold-text {
    color: hsl(26, 100%, 55%);
    font-size: 14px;
    font-weight: 600
}

.product-title {
    font-size: 28px;
    font-weight: bold;
}

.product-description {
    font-size: 14px;
    color: hsl(219, 9%, 45%);
    line-height: 1.5;
}
</style>