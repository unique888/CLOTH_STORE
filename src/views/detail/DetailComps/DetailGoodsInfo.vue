<template>
  <div class="goods-info">
    <div class="info-desc">
      <div class="start">{{goodsInfo.desc}}</div>
      <div class="desc"></div>
      <div class="end"></div>
    </div>
    <div class="info-key">
      {{goodsInfo.detailImage && goodsInfo.detailImage[0].key}}
    </div>
    <div class="info-list">
      <img v-for="(item, index) in goodsInfo.detailImage && goodsInfo.detailImage[0].list"
      :key="index"
       :src="item" @load="imgLoad" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsInfo: {
      type: Object
    }
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0
    };
  },
  methods: {
    imgLoad() {
      if(++this.counter === this.imagesLength) {
        this.$emit('imageLode');
      }
    }
  },
  watch: {
    detailInfo() {
      this.imagesLength = this.goodsInfo.detailImage[0].list.length;
    }
  }
};
</script>

<style scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}
.info-list img {
  width: 100%;
  height: 100%;
}
</style>