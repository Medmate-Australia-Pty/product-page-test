<template>
    <div class="row"></div>
    <div class="position-absolute top-50 translate-middle-y px-3 align-items-center w-100">
        <p class="not-found-exclamation text-center">{{ exclamation }}</p>
        <p class="not-found-message text-center">{{ message }}</p>
    </div>
</template>

<script>

export default {
    name: 'ProductNotFound',

    data() {
        return {
            exclamation: 'Oh dear!',
            message: `It looks like we don't have this product`
        }
    }
}
</script>

<style scoped>
.not-found-exclamation {
    color: hsl(26, 100%, 55%);
    font-size: 50px;
    font-weight: 900;
}

.not-found-message {
    color: hsl(219, 9%, 45%);
    font-size: 30px;
    font-weight: 900;
}
</style>