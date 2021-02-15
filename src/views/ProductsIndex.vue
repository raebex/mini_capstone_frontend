<template>
  <div class="products-index">
    <div class="container">
      <h1>Products</h1>
      <div v-for="product in products" :key="product.name">
        <router-link :to="`/products/${product.id}`">
          <h2>{{ product.name }}</h2>
          <p>{{ product.price }}</p>
          <p>{{ product.description }}</p>
          <p>{{ product.supplier_name }}</p>
          <div v-for="image in product.images" :key="image.url">
            <img :src="image.url" />
          </div>
          <h3>Categories:</h3>
          <div v-for="category in product.categories" :key="category.name">
            <p>{{ category.name }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    max-width: 450px;
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
      products: [],
    };
  },
  created: function() {
    axios.get("/api/products").then(response => {
      this.products = response.data;
    });
  },
};
</script>
