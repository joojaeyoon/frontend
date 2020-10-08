<template>
  <b-card
    class="shadow mb-2 card"
    v-bind:title="title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style>
.card {
  cursor: pointer;
}
</style>
