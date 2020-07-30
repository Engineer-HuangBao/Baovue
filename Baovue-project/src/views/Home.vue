<template>
  <div class="home">
    <!-- <HelloWorld msg="123123123" /> -->
      <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/bao">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: "Home",
};
</script>
