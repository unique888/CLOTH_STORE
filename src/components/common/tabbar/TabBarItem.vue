<template>
    <div class="tab-bar-item" @click="itemClick">
        <!-- <img src="../../assets/img/tabbar/buyicon3.png" alt="">
        <div>首页</div> -->
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :class="{active: isActive}"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
  name:"TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'bule'
    }
  },
  data() {
    return {
      // isActive: true,
    };
  },
  computed: {
    isActive() {
      // indexOf() 查找字符串中是否 存在这个 如果不存在 就返回-1
      // 查找当前活跃路由时否时在我点击当前路由中 在得话 就显示活跃
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {};
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch;
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
    width: 25px;
    height: 25px;
}
/* .active {
    color: green;
} */
</style>