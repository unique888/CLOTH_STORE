<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view />
    </keep-alive>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "./components/content/mianTabBar/MainTabBar";

export default {
  name: "app",
  components: {
    MainTabBar
  }
};
</script>


<style lang="scss">
@import "assets/css/base.css";
</style>
