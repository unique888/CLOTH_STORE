<template>
  <div class="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
      <TabControl :titles="['pop', '新款', '精选']"
              @tabClick="tabClick"
              class="tabcontrol" v-show="isTabFixed"
              ref="toptabcontrol"
            />
    <Scroller class="contents"
    ref="scorll"
     :probe-type="3"
      @scroll="getposition"
      :pull-up-load="true"
      @pullingUp="loadMore"
      >
          <HomeSwiper :banners="banners" @HomeSwiperLoad="HomeSwiperLoad" />
          <RecommendView :recommend="recommend" />
          <FeatureView />
          <TabControl ref="offsettop" v-show="!isTabFixed"
            :titles="['流行', '新款', '精选']"
            @tabClick="tabClick" :class="{fixed: isTabFixed}"
          />
          <GoodsList :goods="goods[currentType].list" />
    </Scroller>
<!-- .native监听原生组件的点击 -->
    <BackTop @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "../../components/content/tabcontrol/TabControl";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "../home/childComps/FeatureView";
import GoodsList from "../../components/content/goods/GoodsList";
import Scroller from "../../components/common/scroller/Scroller";
import BackTop from "../../components/content/backtop/BackTop";
// 引入网络请求
import { getHomeMulitidate, getHomeGoods } from "../../network/home";
// import swiper from "../../components/common/swiper/swiper";
// import SwiperItem from "../../components/common/swiper/SwiperItem";
export default {
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    RecommendView,
    FeatureView,
    GoodsList,
    BackTop,
    Scroller
  },
  // 创建一个data 用于存储 创建完之后的 请求数据
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        // 保存商品的数据结构
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false,
      isShow:true,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    };
  },
  // computed: {
  //   showgoods() {
  //     return this.goods[this.currentType].list;
  //   }
  // },
  // 切换页面 home 就销毁 如何不让其销毁 在app.vue里面 keep-alive
  destroyed() {
    console.log('home destroyed');
  },
  // 进来时候得状态 拿到离开时保存的位置
  activated() {
    this.$refs.scorll.scrollTo(0, this.saveY,0);
    // console.log('111this.$refs.scorll',this.saveY);
    // this.$refs.scorll.refresh();
    // console.log(this.$refs.scorll.scrollTo);
  },
  // 离开时候得状态 将刚才滚动时候的坐标保存
  deactivated() {
    this.saveY = this.$refs.scorll.getScrollY();
    // console.log(this.$refs.scorll.getScrollY());
  },
  // 等首页模板 挂载完之后 就立即请求数据
  // 钩子函数里面调用
  mounted() {
    this.getHomeMuliti();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  // 方法里面创建
  methods: {
    // 事件监听相关得方法

    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
      // 让两个TabControl的currentindex 保持一致
      this.$refs.toptabcontrol.currentIndex = index;
      this.$refs.offsettop.currentIndex = index;
    },
    backClick() {
      // 通过$refs 拿到组件中得对象
      this.$refs.scorll.scrollTo(0,0,3000);
    },
    getposition(position) {
      // 1.判断backtop是否显示
      this.isShowBackTop = -position.y > 300;
      // console.log(position);
      // 2. 判断tabcontrol 是否吸顶（position:fixed)
      this.isTabFixed = -position.y > this.tabOffsetTop-44;
      // console.log(this.tabOffsetTop);
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    HomeSwiperLoad() {
      // console.log(this.$refs.offsettop.$el.offsetTop);
      this.tabOffsetTop = this.$refs.offsettop.$el.offsetTop;
      // console.log(this.tabOffsetTop);
    },
    // 网络请求相关的放法
    getHomeMuliti() {
      getHomeMulitidate().then((res) => {
        // this.result = res;
        this.banners = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
        // console.log(this.banners);
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        this.$refs.scorll.scroller.finishPullUp();
        // console.log(this.$refs.scorll.scroller.finishPullUp);
        // console.log(res);
        // console.log(res.data.data.list);
      });
    }
  }
};
</script>

<style scoped>
.home {
  /* vh 代表100个视口  可视区域 */
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
/* .tab-control {
  position: sticky;
  top: 43px;
  z-index: 9;
} */
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 9;
}
.contents {
  height: calc(100% - 93px);
  overflow: hidden;
  /* margin-top: 44px; */
}
</style>