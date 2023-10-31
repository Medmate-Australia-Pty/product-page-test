<template>
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="text-center">
            <h1 class="display-3">404</h1>
            <p>Page Not Found</p>
            <router-link to="/" class="btn btn-outline-primary">Go Home</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "NotFound",
};
</script>