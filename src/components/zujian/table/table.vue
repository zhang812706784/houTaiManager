<template>
  <div>
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="表格1带查询" name="tatel">
        <!-- 列表查询 -->
        <el-row>
          <el-col :span="24">1111</el-col>
        </el-row>
        <!-- 列表内容 -->
        <el-row>
          <el-col :span="24">
            <el-table
              :data="tableData.data"
              style="width: 100%">
              <el-table-column
                label="日期"
                width="180">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="姓名"
                width="180">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top">
                    <p>姓名: {{ scope.row.name }}</p>
                    <p>住址: {{ scope.row.address }}</p>
                    <div slot="reference" class="name-wrapper">
                      {{ scope.row.name }}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <!-- 分页 -->
            <el-pagination background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="tableData.currentPage"
                :page-sizes="[10, 50, 100, 200]"
                :page-size="tableData.pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="tableData.total">
            </el-pagination>
          </el-col>
        </el-row>
        
      </el-tab-pane>
      <el-tab-pane label="表格2不带查询" name="tate2">表格2不带查询</el-tab-pane>
    </el-tabs>
    <!-- 窗口 -->
    <win  :winshow="winshow" :changewinshow="changeWinshow" :formdata="formData"></win>
  </div>
</template>

<script>
import {getTableData} from '@/axios/zujian/table-ajax.js';
import win from '@/components/zujian/table/window';
export default {
  data(){
    return {
      activeName:'tatel',
      winshow: false,
      tableData: {},
      formData: {}
    }
  },
  components:{
    win
  },
  methods:{
    changeWinshow(val){
      this.winshow = val;
    },
    handleEdit(index,row){

      this.winshow = true;
      this.formData = row;

    },
    handleClick(){
     console.log(this.activeName)
    },
    handleSizeChange(){

    },
    handleCurrentChange(){

    }
  },
  mounted(){
    var me = this;
    getTableData({},function(response){
      me.tableData = response.data;
     
    },function(error){
     
    });
  }
}
</script>

<style>
</style>
