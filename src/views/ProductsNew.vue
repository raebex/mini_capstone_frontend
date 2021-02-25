<template>
  <div class="products-new">
    <form v-on:submit.prevent="createProduct()">
      <h1>Add a product</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <label>Name:</label>
      <input type="text" v-model="name" />
      <br />
      <label>Price:</label>
      <input type="text" v-model="price" />
      <br />
      <label>Description:</label>
      <input type="text" v-model="description" />
      <br />
      <label>Inventory:</label>
      <input type="text" v-model="inventory" />
      <br />
      <label>Supplier:</label>
      <input type="text" v-model="supplierId" />
      <br />
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
