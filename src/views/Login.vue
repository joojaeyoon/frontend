<template>
  <div>
    <div>
      <div id="nav">
        <router-link to="/login">Login</router-link> |
        <router-link to="/register">Register</router-link>
      </div>
    </div>
    <div class="container card border-primary shadow px-5 py-5 text-left">
      <b-form @submit.prevent="onSubmit" class="mb-5">
        <div class="form-group">
          <label for="username">Username</label>
          <b-input
            v-model="form.username"
            autocomplete="off"
            class="form-control"
            id="username"
          ></b-input>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <b-input
            type="password"
            class="form-control"
            id="password"
            v-model="form.password"
          ></b-input>
        </div>
        <button class="btn btn-primary btn-block">Login</button>
      </b-form>
      <div>
        <div class="mt-3">
          <button class="border btn btn-primary btn-block">
            Login with Facebook
          </button>
        </div>
        <div class="mt-3">
          <button class="border btn btn-light btn-block">
            Login with Google
          </button>
        </div>
        <div class="mt-3">
          <button class="border btn btn-warning btn-block">
            Login with KAKAO
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      // TODO Check Valid values
      this.$v.$touch();
      if (this.$v.$invalid) {
        // invalid value
      }

      // TODO Login API Call
      this.$store.dispatch("logIn", this.form);
    },
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(12),
      },
      password: {
        required,
        minLength: minLength(5),
      },
    },
  },
};
</script>

<style></style>
