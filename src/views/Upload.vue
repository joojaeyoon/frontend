<template>
  <div class="text-left container">
    <b-card class="mt-5">
      <b-card-title>
        등록
      </b-card-title>
      <b-form @submit.prevent="onSubmit">
        <label for="title">제목</label>
        <b-form-input
          v-model="form.title"
          type="text"
          id="title"
          placeholder="제목"
          required
        ></b-form-input>
        <label class="mt-3" for="price">가격</label>
        <div class="price-container">
          <b-form-input
            type="text"
            v-model="form.price"
            id="price"
            autocomplete="off"
            required
          ></b-form-input>
          <p class="ml-2">원</p>
        </div>
        <b-form-invalid-feedback
          :state="!(submitted && !$v.form.price.numeric)"
        >
          가격은 숫자만 입력할 수 있습니다.
        </b-form-invalid-feedback>
        <div v-if="submitted && !$v.form.price.numeric"></div>

        <ImagePreview :setImages="setImages" />

        <label for="content">내용</label>
        <b-form-textarea
          rows="8"
          v-model="form.content"
          no-resize
          id="content"
          placeholder="내용"
          required
        ></b-form-textarea>
        <button class="btn btn-primary btn-block mt-3">작성</button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import ImagePreview from "@/components/ImagePreview.vue";
import { numeric } from "vuelidate/lib/validators";

export default {
  components: {
    ImagePreview,
  },
  data() {
    return {
      submitted: false,
      form: {
        title: "",
        price: "0",
        images: [],
        content: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.submitted = true;
      this.$store.dispatch("uploadPost", this.form);
    },
    setImages(files) {
      this.form.images = files;
    },
  },
  validations: {
    form: {
      price: { numeric },
    },
  },
};
</script>

<style>
.price-container {
  display: flex;
  font-weight: 500;
  font-size: 25px;
}
.price-container > input {
  width: 150px;
}
</style>
