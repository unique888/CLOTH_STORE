<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    // 监听是否滚到底部
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroller: null
    };
  },
  // 1.组件创建完之后 调用
  mounted() {
    // 1.创建BScroll 对象
    this.scroller = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    // 2.监听滚动得位置
    this.scroller.on('scroll',(position) => {
      // console.log(position);
      // 子组件自定义了一个事件 并且发射给 父组件
      this.$emit('scroll', position);
    });
    // 3. 监听上拉事件
    this.scroller.on('pullingUp',() => {
      this.$emit('pullingUp');
    });
  },
  methods: {
    scrollTo(x, y, time) {
      // console.log('x, y, time',x, y, time);
      this.scroller.scrollTo(x, y,time);
    },
    finishPullUp() {
      this.scroller.finishPullUp();
    },
    getScrollY() {
      // console.log("this.scroll.y",this.scroller.y);
      // console.log(Boolean(this.scroller.y));
      return this.scroller ? this.scroller.y : 0;
    }
  }
};
</script>

<style scoped>
</style>