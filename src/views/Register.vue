<template>
  <div>
    <div>
      <div id="nav">
        <router-link to="/login">Login</router-link> |
        <router-link to="/register">Register</router-link>
      </div>
    </div>
    <div class="container card border-primary px-5 py-5 text-left">
      <b-form @submit.prevent="onSubmit" class="mb-5">
        <div class="form-group">
          <label for="username">Username</label>
          <b-input
            autocomplete="off"
            type="text"
            class="form-control"
            id="username"
            :state="submit ? submit && !$v.form.username.$invalid : null"
            v-model="form.username"
          ></b-input>
          <b-form-invalid-feedback
            :state="submit ? submit && !$v.form.username.$invalid : null"
          >
            사용자 이름은 5~12자 사이여야 합니다.
          </b-form-invalid-feedback>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <b-input
            type="password"
            class="form-control"
            id="password"
            :state="submit ? submit && !$v.form.password.$invalid : null"
            v-model="form.password"
          ></b-input>
        </div>
        <div class="form-group">
          <label for="password2">Check Password</label>
          <b-input
            type="password"
            class="form-control"
            id="password2"
            :state="submit ? submit && !$v.form.password2.$invalid : null"
            v-model="form.password2"
          ></b-input>
          <b-form-invalid-feedback
            :state="submit ? submit && !$v.form.password2.$invalid : null"
          >
            입력한 패스워드와 같은 패스워드를 입력해야 합니다.
          </b-form-invalid-feedback>
        </div>
        <button class="btn btn-primary btn-block">Register</button>
      </b-form>
      <div>
        <div class="mt-3">
          <button class="border btn btn-primary btn-block">
            Register with Facebook
          </button>
        </div>
        <div class="mt-3">
          <button class="border btn btn-light btn-block">
            Register with Google
          </button>
        </div>
        <div class="mt-3">
          <button class="border btn btn-warning btn-block">
            Register with KAKAO
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  email,
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      submit: false,
      form: {
        username: "",
        password: "",
        password2: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.submit = true;

      // TODO Check Valid values
      this.$v.$touch();
      if (this.$v.$invalid) {
        // invalid value
      }

      // TODO Register API Call
      this.$store.dispatch("register", this.form);
    },
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(12),
      },
      password: {
        required,
        minLength: minLength(4),
      },
      password2: {
        required,
        minLength: minLength(4),
        checkPassword() {
          return this.form.password === this.form.password2;
        },
      },
    },
  },
};
</script>

<style></style>
