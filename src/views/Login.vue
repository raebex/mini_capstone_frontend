<template>
  <div class="login">
    <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <label>Email:</label>
      <input type="email" v-model="email" />
      <br />
      <label>Password:</label>
      <input type="password" v-model="password" />
      <br />
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password,
      };

      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch(error => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
        });
    },
  },
};
</script>
