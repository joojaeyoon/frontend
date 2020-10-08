<template>
  <div v-bind:class="{ incoming_msg: msg.type, outgoing_msg: !msg.type }">
    <div v-if="msg.type" class="incoming_msg_img">
      <img :src="msg.img" :alt="msg.name" />
    </div>
    <div v-if="msg.type" class="received_msg">
      <div class="received_withd_msg">
        <p>{{ msg.text }}</p>
        <span class="time_date">{{ msg.time }}</span>
      </div>
    </div>
    <div v-if="!msg.type" class="outgoing_msg">
      <div class="sent_msg">
        <p>{{ msg.text }}</p>
        <span class="time_date">{{ msg.time }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: Object,
  },
};
</script>

<style></style>
