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
    // TODO 나중에 다른곳으로 옮기던가 하기
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
