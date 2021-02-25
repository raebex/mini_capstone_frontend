<template>
  <div class="products-index">
    <div class="jumbotron">
      <h1 class="display-4">Mini Capstone</h1>
      <p class="lead">
        Just a simple store with a lot of vinyl records.
      </p>
    </div>
    <div class="card-columns">
      <div class="card" v-for="product in products" :key="product.name">
        <router-link :to="`/products/${product.id}`">
          <img class="card-img-top" :src="product.images[0].url" />
        </router-link>
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text font-weight-bold">${{ product.price }}</p>
          <p class="card-text">{{ product.description }}</p>
          <p class="card-text">
            <span class="badge badge-info mr-1" v-for="category in product.categories" :key="category.name">
              {{ category.name }}
            </span>
          </p>
          <p class="card-text">
            <small class="text-muted">Sold by {{ product.supplier_name }}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

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
