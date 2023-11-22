<template>
    <div>
        <p class="orange-bold-text">SNEAKER COMPANY</p>
        <p class="product-title">Fall Limited Edition Sneakers</p>
        <p class="product-description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
    </div>
</template>
    
<script>

export default {
    name: 'TextSection',

    components: {
    },
    
    data() {
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