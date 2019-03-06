/* 
  登录页 跳转进来的页面 
  上半部分 -- 横向菜单（一级菜单）
  下半部分(路由) -- main.vue
 */
<template>
  <div class="menu-list-con">
    <!-- 首页上半部分 -->
    <el-row class="menu-list-top">
      <el-col :span="18" :offset="3">
        <el-menu :default-active="defaultActive" class="el-menu-demo" mode="horizontal" @select="handleSelect" ref="nav">
          <!-- <el-menu-item index="1">指南</el-menu-item>
          <el-menu-item index="2">组件</el-menu-item>
          <el-menu-item index="3">资源</el-menu-item>
          <el-menu-item index="4">论坛</el-menu-item> -->
          <el-menu-item v-for="(navitem,i) in treeRouters" :index="navitem.name" :key="i">{{navitem.title}}</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="3" class="menu-list-top-other">
        其他
      </el-col>
    </el-row>
    <!-- 首页下半部分 -->
    <el-row class="menu-list-bottom">
        <router-view :activename = "activeName" :treedata= "treedata"  v-if="viewchange"></router-view>
    </el-row>
  </div>
</template>

<script>
import { mapMutations,mapGetters } from 'vuex';
import {treeRouters} from '@/router/routers.js';

export default {
  name: 'menu_name',
  data () {
    return {
      defaultActive: 'zhinan',
      treeRouters: treeRouters,
      activeName: 'zhinan',
      treedata: [],//二级菜单数据
      viewchange : true
    }
  },
  methods:{
    // 一级菜单切换 事件
    handleSelect(key, keyPath) {

      this.activeName = key;
      this.treedata = this.getCustomRouter(this.activeName);
      var name = this.treedata[0].name
      this.$nextTick(()=>{
          this.$router.push({
            name: name
        });
      });
       //指南菜单走这里
      /* if(this.activeName == "zhinan"){
          //this.defaultActiveOfMain = path  + 'designPrinciples';
          this.$nextTick(()=>{
              this.$router.push({
                name:'designPrinciples'
            });
          });
          
      //组件菜单走这里
      }else if(this.activeName == "zujian"){
          //this.defaultActiveOfMain = path  + 'zujian_tabel';
          this.$nextTick(()=>{
              this.$router.push({
                name:'zujian_tabel'
            });
          });
      } */
      this.changeView();

    },
    changeView(){
      this.viewchange = false;
      this.$nextTick(()=>{
        this.viewchange = true;
      });
    }
  },
  computed:{
      ...mapGetters([
          "getRouterFromAccess",
          "getCustomRouter"
      ])
  },
  mounted(){
    debugger;
    console.log(this);
    this.handleSelect("zhinan");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menu-list-con{
    width: 100%;
    height: 100%;
  }
  .menu-list-con .el-menu.el-menu--horizontal{
    border-bottom: none;
  }
  .menu-list-top{
    height: 61px;
    border-bottom: solid 1px #e6e6e6;
  }
  .menu-list-top-other{
    height: 60px;
    display: flex;
    align-items: center;
    color: #909399;
    cursor:default;
  }
  .menu-list-bottom{
    height: calc(100% - 61px);
  }
</style>
