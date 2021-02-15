<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <label>Name:</label>
      <input type="text" v-model="name" />
      <br />
      <label>Email:</label>
      <input type="email" v-model="email" />
      <br />
      <label>Password:</label>
      <input type="password" v-model="password" />
      <br />
      <label>Password Confirmation:</label>
      <input type="password" v-model="passwordConfirmation" />
      <br />
      <input type="submit" class="btn btn-primary" value="Submit">
    </form>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };

      axios
        .post("/api/users", params)
        .then(response => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.message;
        });
    },
  },
};
</script>
