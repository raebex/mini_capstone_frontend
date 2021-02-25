<template>
  <div class="products-new">
    <h1>Add a product</h1>
    <ul>
      <li class="text-danger" v-for="error in errors" v-bind:key="error">
        {{ error }}
      </li>
    </ul>
    <form v-on:submit.prevent="createProduct()">
      <div class="form-group">
        <label for="productName">Name</label>
        <input v-model="name" type="text" class="form-control" id="productName" />
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input v-model="price" type="text" class="form-control" id="price" />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input v-model="description" type="text" class="form-control" id="description" />
      </div>
      <div class="form-group">
        <label for="inventory">Inventory</label>
        <input v-model="inventory" type="text" class="form-control" id="inventory" />
      </div>
      <div class="form-group">
        <label for="supplierId">Supplier ID</label>
        <input v-model="supplierId" type="text" class="form-control" id="supplierId" />
      </div>
      <input type="submit" class="btn btn-primary" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      price: "",
      description: "",
      inventory: "",
      supplierId: "",
      errors: [],
    };
  },
  created: function() {},
  methods: {
    createProduct: function() {
      var params = {
        name: this.name,
        price: this.price,
        description: this.description,
        inventory: this.inventory,
        supplier_id: this.supplierId,
      };

      axios
        .post("/api/products", params)
        .then(response => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
