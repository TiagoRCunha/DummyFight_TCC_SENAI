<template>
  <div class="home">
    <button type="submit" @click="test">send test</button>
  </div>
</template>

<script>
// @ is an alias to /src
import io from "socket.io-client";

export default {
  name: "home",
  methods: {
    test() {
      const socket = io("http://0.0.0.0:3000")

      socket.emit('message', "hello world")
    }
  }
};
</script>
