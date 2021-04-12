<template>
  <div class="param-info">
   <table class="info-size" v-for="(table, index) in paramInfo.sizes" :key="index">
     <tr v-for="(tr,indey) in table" :key="indey">
       <td v-for="(td, index) in table" :key="index">
         {{td}}
       </td>
     </tr>
   </table>
  <table class="info-param">
    <tr v-for="(info, index) in paramInfo.infos" :key="index">
      <td class="info-param-key">{{info.key}}</td>
      <td class="info-param-value">{{info.value}}</td>
    </tr>
  </table>
  <div class="info-img" v-if="paramInfo.image  && paramInfo.image.length  !== 0">
    <img :src="paramInfo.image" alt="">
  </div>
    <h1>hahahahhhhh</h1>
    <h1>hahahahhhhh</h1>
    <h1>hahahahhhhh</h1>
    <h1>hahahahhhhh</h1>
    <h1>hahahahhhhh</h1>
    <h1>hahahahhhhh</h1>
  </div>
</template>

<script>
export default {
  props: {
    paramInfo: {
      type: Object

    }
  }
};
</script>

<style scoped>

</style>