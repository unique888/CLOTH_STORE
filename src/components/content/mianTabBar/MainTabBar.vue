<template>
  <div>
    <TabBar>
      <TabBarItem path="/home" activeColor="deepPink">
        <img slot="item-icon" src="../../../assets/img/tabbar/buyicon3.png" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/active.jpg" alt="">
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category">
        <img slot="item-icon" src="../../../assets/img/tabbar/buyicon3.png" alt="">
         <img slot="item-icon-active" src="../../../assets/img/tabbar/active.jpg" alt="">
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="cart">
        <img slot="item-icon" src="../../../assets/img/tabbar/buyicon3.png" alt="">
         <img slot="item-icon-active" src="../../../assets/img/tabbar/active.jpg" alt="">
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="proflie">
        <img slot="item-icon" src="../../../assets/img/tabbar/buyicon3.png" alt="">
         <img slot="item-icon-active" src="../../../assets/img/tabbar/active.jpg" alt="">
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from "../../../components/common/tabbar/TabBar";
import TabBarItem from "../../../components/common/tabbar/TabBarItem";


export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style lang="stylus" scoped>

</style>