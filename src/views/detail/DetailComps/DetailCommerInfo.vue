<template>
  <div class="commer-info" v-if="commerntInfo.user">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>
    <div class="info-user">
      <img :src="commerntInfo.user.avatar" alt="" />
      <p>{{ commerntInfo.user.uname }}</p>
    </div>
    <div class="info-detail">
      <p>{{ commerntInfo.content }}</p>
      <div class="info-other">
        <span class="data">{{commerntInfo.created | showDate(commerntInfo.created) }}</span>
        <span>{{ commerntInfo.style }}</span>
      </div>
      <div class="info-imgs">
        <img
          :src="item"
          v-for="(item, index) in commerntInfo.images"
          :key="index"
        />
      </div>
    </div>
    <h1>{{commerntInfo.user.avatar}}</h1>
    <h1>hhahahah</h1>
    <h1>hhahahah</h1>
  </div>
</template>

<script>
import {formatDate} from '../../../commer/utils';

export default {
  props: {
    commerntInfo: {
      type: Object
    }
  },
  //将时间戳转化成时间格式化字符串
  filters: {
    showDate(value) {
      // 1. 将时间戳转成Date对象
      const date = new Date(value * 1000);
      // 2.将date进行格式化
      // console.log("formatDate(date, 'yyy-MM-dd')");
      return formatDate(date, 'yyyy-MM-dd');
    }
  }
};
</script>

<style scoped>
.commer-info {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}

.info-imgs img {
  width: 150px;
  height: 150px;
}
.info-header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
}
.header-title {
  float: left;
  font-size: 15px;
}
.header-more {
  float: right;
  margin-right: 10px;
  font-size: 13px;
}
.info-user {
  display: flex;
  align-items: center;
}
.info-user img {
  width: 50px;
}
</style>