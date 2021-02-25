<template>
  <div class="products-index">
    <div class="container">
      <h1>{{ product.name }}</h1>
      <p class="font-weight-bold">${{ product.price }}</p>
      <div class="mb-4">
        <span class="badge badge-info mr-1" v-for="category in product.categories" :key="category.name">
          {{ category.name }}
        </span>
      </div>
      <p>{{ product.description }}</p>
      <small class="text-muted">Sold by {{ product.supplier_name }}</small>

      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div
            class="carousel-item"
            :class="{ active: activeImage === image.id }"
            v-for="image in product.images"
            :key="image.id"
          >
            <img class="d-block w-100" :src="image.url" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      product: {},
      activeImage: 0,
    };
  },
  created: function() {
    axios.get(`/api/products/${this.$route.params.id}`).then(response => {
      this.product = response.data;
      this.activeImage = this.product.images[0].id;
    });
  },
};
</script>
