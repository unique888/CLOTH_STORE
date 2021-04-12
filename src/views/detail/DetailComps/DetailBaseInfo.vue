<template>
  <div class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount"  v-if="goods.discountDesc">{{goods.discountDesc}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns &&  goods.columns[0]}}</span>
      <span>{{goods.columns &&  goods.columns[1]}}</span>
      <span>{{goods.columns &&  goods.services[goods.services.length-1].name}}</span>
    </div>
  <div class="info-services">
    <span class="info-services-item" v-for="index in goods.services && goods.services.length-1" :key="index">
      <img :src="goods.services[index-1].icon" alt="">
      <span>{{goods.services[index-1].name}}</span>
    </span>
  </div>

  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.info-title {
  color: #222;
}
.info-price {
  margin-top: 10px;
}
.n-price {
  font-size: 30px;
  color: hotpink;
  font-weight: 500;
}
.o-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.discount {
  display: inline-block;
  width: 20%;
  height: 20px;
  color: #ffff;
  border: 1px solid;
  border-radius: 30px;
  background-color: #f13e3a;
  text-align: center;
  line-height: 20px;
  font-size: 13px;
  position: relative;
  top: -10px;
  left: 5px;
  right: 0;
}
.info-other {
  font-size: 13px;
  margin-top: 30px;
  border-bottom: 1px solid #ccc;
  height: 30px;
  display: flex;
  justify-content: space-between;
}
.info-services {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}
.info-services-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}

</style>