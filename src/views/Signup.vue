<template>
  <div class="signup">
    <h1>Signup</h1>
    <ul>
      <li class="text-danger" v-for="error in errors" v-bind:key="error">
        {{ error }}
      </li>
    </ul>
    <form v-on:submit.prevent="submit()">
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="name" type="text" class="form-control" id="name" />
      </div>
      <div class="form-group">
        <label for="inputEmail">Email</label>
        <input v-model="email" type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" />
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" type="password" class="form-control" id="password" />
      </div>
      <div class="form-group">
        <label for="passwordConfirmation">Password Confirmation</label>
        <input
          v-model="passwordConfirmation"
          type="passwordConfirmation"
          class="form-control"
          id="passwordConfirmation"
        />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>

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
