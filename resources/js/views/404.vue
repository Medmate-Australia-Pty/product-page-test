<template>
  <section id="not-found">
    <div class="container">
      <div class="row">
        <div class="col-m-5">
          <h1>404</h1>
        </div>

        <div class="col-m-7">
          <h2>There's nothing here!</h2>
          <p>Not all who wander are lost. But you certainly are</p>
          <button class="btn-primary" @click="goToProductPage">Go to Fall Limited Edition Sneakers page</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    goToProductPage() {
      this.$router.push({ path: '/' });
    }
  }
};
</script>