<template>
  <b-card
    class="shadow mb-2 card article"
    v-bind:title="data.title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-left
    img-width="300"
  >
    <b-card-text>
      dd
    </b-card-text>
    <blockquote class="blockquote mb-0 price">
      <p>{{ data.price }}원</p>
    </blockquote>
  </b-card>
</template>

<script>
export default {
  props: {
    data: Object,
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
