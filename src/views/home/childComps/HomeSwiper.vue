<template>
  <div class="home-swiper">
    <swiper class="home-swiper">
      <swiper-item v-for="(item, index) in banners && banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array
    }
  },
  data() {
    return {
      isLoad: false
    };
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    // 监听图片是否加载完成 把结果通过$emit发送到父组件（首页中）
    imageLoad() {
      if(!this.isLoad)
        this.$emit('HomeSwiperLoad');
      this.isLoad = true;
    }
  }
};
</script>

<style scoped>
</style>