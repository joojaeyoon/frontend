<template>
  <div class="postDetail">
    <b-carousel
      :interval="5000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide
        class="carousel-img"
        v-for="img in imgs"
        :key="img.idx"
        :img-src="img.url"
      >
      </b-carousel-slide>
    </b-carousel>
    <h1 class="post-title">
      {{ post.title }}
    </h1>
    <div class="post-time">
      {{ post.category }} {{ compare(post.created_at) }}
    </div>
    <div class="post-price">{{ post.price }}원</div>
    <div class="post-content">
      {{ post.content }}
    </div>
  </div>
</template>

<script>
import time from "@/utils/time";

export default {
  data() {
    return {
      imgs: [],
    };
  },
  methods: {
    compare(date) {
      return time.compare(new Date(date));
    },
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("getPostDetail", id);
  },
  computed: {
    post() {
      const detail = this.$store.getters.postDetail;
      const img_url = this.$store.state.img_url;
      if (detail.images === undefined) return;

      this.imgs = detail.images.map((img, idx) => {
        return {
          idx: idx,
          url: `${img_url}/${this.$route.params.id}/${img.name}`,
        };
      });

      if (detail.images.length == 0) {
        this.imgs = [{ idx: 0, url: `${img_url}/Default.png` }];
      }
      return detail;
    },
  },
};
</script>

<style>
.postDetail {
  width: 70%;
  display: block;
  margin: 0px auto;
  text-align: left;
}
.carousel-inner {
  height: 480px !important;
}
.img-fluid {
  max-height: 480px !important;
  max-width: 938px !important;
  width: auto !important;
  height: auto !important;
}
.carousel-img {
  width: 100% !important;
  height: 100% !important;
  text-align: center;
}
.post-title {
  margin-top: 15px;
}
.post-price {
  margin-top: 5px;
  font-size: 22px;
}
.post-time {
  margin-top: 5px;
  color: gray;
  font-weight: 300;
  font-size: 20px;
}
.post-content {
  margin-top: 15px;
  font-size: 20px;
}
</style>
