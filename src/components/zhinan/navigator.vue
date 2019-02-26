<template>
  <div>
    导航<br>
    导航可以解决用户在访问页面时：在哪里，去哪里，怎样去的问题。一般导航会有「侧栏导航」和「顶部导航」2 种类型。
    <br>
    选择合适的导航
    <br>
    选择合适的导航可以让用户在产品的使用过程中非常流畅，相反若是不合适就会引起用户操作不适（方向不明确），以下是「侧栏导航」和 「顶部导航」的区别。
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  mounted(){
    this.$store.commit('opreateLobalLoading',true);
    setTimeout(()=>{
      this.$store.commit('opreateLobalLoading',false);
    },1000);
  }
}
</script>

<style>
</style>
