<template>
  <div class="text-left">
    <Post v-for="post in postList" :key="post.id" v-bind:post="post" />
  </div>
</template>

<script>
import Post from "./Post";

export default {
  components: {
    Post,
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getPostList");
  },
  computed: {
    postList() {
      return this.$store.getters.post.content;
    },
  },
};
</script>

<style></style>
