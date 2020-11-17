<template>
  <div class="text-left">
    <Post v-for="item in items" :key="item.id" v-bind:data="item" />
  </div>
</template>

<script>
import Post from "./Post";

export default {
  components: {
    Post,
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.$store.state.axios
      .get("http://localhost:8080/api/post?page=1&size=15&direction=ASC")
      .then((res) => {
        this.items = res.data.content;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
