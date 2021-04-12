<template>
  <div>
    <Swiper class="swiper-item">
      <SwiperItem v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt="">
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import Swiper from "../../../components/common/swiper/Swiper";
import SwiperItem from "../../../components/common/swiper/SwiperItem";
export default {
  components: {
    Swiper,
    SwiperItem
  },
  // 1.传入 detail 的数据
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.swiper-item {
  height: 300px;
  overflow: hidden;
}
</style>