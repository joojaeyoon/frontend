<template>
  <div class="text-left">
    <b-card-group columns>
      <Card v-for="item in items" :key="item" v-bind:title="item" />
      <b-card
        title="Card title that wraps to a new line"
        img-src="https://placekitten.com/g/400/450"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </b-card-text>
      </b-card>

      <b-card header="Quote">
        <blockquote class="blockquote mb-0">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer class="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </b-card>

      <b-card title="Title">
        <b-card-text>
          This card has supporting text below as a natural lead-in to additional
          content.
        </b-card-text>
        <b-card-text class="small text-muted"
          >Last updated 3 mins ago</b-card-text
        >
      </b-card>

      <b-card bg-variant="primary" text-variant="white">
        <blockquote class="card-blockquote">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer>
            <small
              >Someone famous in
              <cite title="Source Title">Source Title</cite></small
            >
          </footer>
        </blockquote>
      </b-card>

      <b-card>
        <b-card-title>Title</b-card-title>
        <b-card-text>
          This card has supporting text below as a natural lead-in to additional
          content.
        </b-card-text>
        <b-card-text class="small text-muted"
          >Last updated 3 mins ago</b-card-text
        >
      </b-card>

      <b-card
        img-src="https://picsum.photos/400/400/?image=41"
        img-alt="Image"
        overlay
      ></b-card>

      <b-card
        img-src="https://picsum.photos/400/200/?image=41"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first.
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  components: {
    Card,
  },
  data() {
    return {
      items: [
        "test",
        "test2",
        "test",
        "test2",
        "test",
        "test2",
        "test",
        "test2",
      ],
    };
  },
};
</script>

<style></style>
