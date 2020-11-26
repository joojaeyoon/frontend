<template>
  <b-card
    class="shadow mb-2 card article"
    v-bind:title="post.title"
    :img-src="img"
    img-alt="Image"
    img-left
    img-width="300"
    v-on:click="onClick"
  >
    <b-card-text>
      dd
    </b-card-text>
    <blockquote class="blockquote mb-0 price">
      <p>{{ post.price }}원</p>
    </blockquote>
  </b-card>
</template>

<script>
export default {
  props: {
    post: Object,
  },
  data() {
    return {
      img: "",
    };
  },
  methods: {
    onClick() {
      this.$router.push(`/post/${this.post.id}`);
    },
  },
  created() {
    this.img = `http://localhost:8080/images/${this.post.id}/${this.post.image.name}`;
    if (this.post.image.name === "Default.png")
      this.img = `http://localhost:8080/images/${this.post.image.name}`;
  },
};
</script>

<style>
.article {
  cursor: pointer;
}
.price {
  color: #ffb13d;
}
</style>
