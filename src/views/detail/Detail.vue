<template>
  <div id="detail">
   <NavBar class="detail-nav">
     <div slot="left" class="back" @click="backClick">
       <img src="../../assets/img/detail.jpg" alt="">
       </div>
     <div slot="center" class="title">
       <div v-for="(item,index) in titles" :key="index" class="title-item"
       :class="{active: index===currentindex}"
       @click="titleClick(index)"
       >
         {{item}}
         </div>
     </div>
   </NavBar>
   <Scroller class="content"  ref="scroll">
      <DetailSwiper :top-images="topImages"/>
      <DetailBaseInfo :goods="goods"/>
      <DetailShopInfo :shopInfo="shopInfo"/>
      <DetailGoodsInfo :goodsInfo="goodsInfo"/>
      <DetailParamInfo :paramInfo="paramInfo"/>
      <DetailCommerInfo :commerntInfo="commerntInfo"/>
      <GoodsList :goods="recommend"/>
    </Scroller>
    <DetailBottomBar/>
  </div>
</template>


<script>
import NavBar from '../../components/common/navbar/NavBar';
import DetailSwiper from './DetailComps/DetailSwiper';
import DetailBaseInfo from "./DetailComps/DetailBaseInfo";
import DetailShopInfo from "./DetailComps/DetailShopInfo";
import Scroller from "../../components/common/scroller/Scroller";
import DetailGoodsInfo from "../detail/DetailComps/DetailGoodsInfo";
import DetailParamInfo from "../detail/DetailComps/DetailParamInfo";
import DetailCommerInfo from '../detail/DetailComps/DetailCommerInfo';
import GoodsList from "../../components/content/goods/GoodsList";
import DetailBottomBar from "../detail/DetailComps/DetailBottomBar";

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from '../../network/detail';
export default {
  components: {
    NavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroller,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommerInfo,
    GoodsList,
    DetailBottomBar
  },
  data() {
    return {
      iid: null,
      titles: ['商品', '参数', '评论', '推荐'],
      currentindex: 0,
      topImages: [],
      goods: {},
      shopInfo: {},
      goodsInfo: {},
      paramInfo: {},
      commerntInfo: {},
      recommend: [],
      themeTopY: []
    };
  },
  mounted() {
    this.getDetails();
    this.getRecommends();
  },
  methods: {
    titleClick(index) {
      this.currentindex = index;
      this.$refs.scroll.scrollTo(0,-this.themeTopY[index],200);
    },
    backClick() {
      this.$router.go(-1);
    },
    // 网络请求的相关方法
    getDetails() {
      // 1. 获取iid 设置跳转路由 params路由传参数的 保存传入的iid
      this.iid = this.$route.params.iid;
      // 2.根据iid请求详情页数据
      getDetail(this.iid).then(res => {
        const list = res.data.result;
        // console.log(list);
        // console.log(list.result.itemInfo.topImages);
        this.topImages = list.itemInfo.topImages;
        // 3.获取商品信息
        this.goods = new Goods(list.itemInfo, list.columns,list.shopInfo.services);
        // 4.获取店铺信息
        this.shopInfo = new Shop(list.shopInfo);
        // 5.保存商品的详情信息
        this.goodsInfo = list.detailInfo;
        // console.log(list.detailInfo);
        // 6.获取参数信息
        this.paramInfo = new GoodsParam(list.itemParams.info, list.itemParams.rule);
        // 7.取出评论信息 有些是没有评论信息 所以加个判断
        if(list.rate.cRate !== 0) {
          // console.log(list.rate.list);
          this.commerntInfo = list.rate.list[0];
        }
      });
    },
    // 3.请求推荐数据
    getRecommends() {
      getRecommend().then(res => {
        this.recommend = res.data.data.list;
      });
    }
  }
};

</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back img {
  margin-top: 10px;
}
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px -49px);
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color:#ffff ;
}
</style>