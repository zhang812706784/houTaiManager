<template>
    <div class="main-con">
        <el-row class="main-con">
            <!-- 左树菜单 -->
            <el-col :span="4" class="mian-left">
                <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                    <el-radio-button :label="false">展开</el-radio-button>
                    <el-radio-button :label="true">收起</el-radio-button>
                </el-radio-group> -->
                <!-- :default-openeds="openeds" -->
                <el-menu :default-active="seconddefault" class="el-menu-vertical-demo" 
                @open="openMenu"
                router 
                :collapse="isCollapse" 
                unique-opened 
                :default-openeds="openeds">
                    <template v-for="(treeItem,i) in treedata">
                        <!-- 最后一级菜单 -->
                        <el-menu-item v-if="!treeItem.childs"
                        :key="i" 
                        :index="'/menu_list/' + activename +'/'+ treeItem.name">
                            <i class="el-icon-location"></i>
                            <span slot="title">{{treeItem.title}}</span>
                        </el-menu-item>

                        <!-- 此菜单下还有子菜单 -->
                        <el-submenu v-if="treeItem.childs"
                        :key="i" 
                        :index="i">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span slot="title">{{treeItem.title}}</span>
                            </template>
                            <!-- 二级菜单 -->
                            <template v-for="(treeChild,j) in treeItem.childs">
                                <el-menu-item :key="j"  route
                                :index="'/menu_list/' + activename +'/'+ treeChild.name">
                                    {{treeChild.title}}
                                </el-menu-item>
                            </template>
                            
                        </el-submenu>
                    </template>
                </el-menu>
            </el-col>
            <el-col :span="20" class="main-right">
                <router-view v-loading.fullscreen.lock= "this.$store.state.appStore.globalLoading"></router-view>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import {customZhiNanRouters} from '@/router/router-tree/zhinan-router.js';
import {customZuJianRouters} from '@/router/router-tree/zujian-router.js';
import { mapMutations,mapGetters } from 'vuex';
export default {
    props: ['activename','treedata','seconddefault'],
    data(){
        return {
            isCollapse: false,
            openeds: [0]
        };
    },
    methods:{
        openMenu(){

        }
    }
}
</script>
<style>
    .el-menu{
        /* border-right: none;  */
        height: 100%;
    }
    .main-con{
        width: 100%;
        height: 100%;
    }
    .main-right{
        box-sizing: border-box;
        padding: 20px;
        height: 100%;
    }
    .mian-left{
        height: 100%;
    }
     /* box-shadow: 2px 0 6px rgba(0,21,41,.35); */
</style>