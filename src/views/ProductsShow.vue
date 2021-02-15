<template>
  <div class="products-index">
    <div class="container">
      <h1>{{ product.name }}</h1>
      <p>{{ product.price }}</p>
      <p>{{ product.description }}</p>
      <p>{{ product.supplier_name }}</p>
      <div v-for="image in product.images" :key="image.id">
        <img :src="image.url" />
      </div>
      <h3>Categories:</h3>
      <div v-for="category in product.categories" :key="category.id">
        <p>{{ category.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
  }

  img {
    width: 100%;
  }
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      product: {},
    };
  },
  created: function() {
    axios.get(`/api/products/${this.$route.params.id}`).then(response => {
      this.product = response.data;
    });
  },
};
</script>
