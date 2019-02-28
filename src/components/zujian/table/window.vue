<template>
    <div class="table-win">
        <el-dialog :title="title" :visible="dialogFormVisible" @close="dialogFormVisibleFun">
            <!-- 表单内容 -->
            <el-form :model="formData" label-position="left">
                <el-form-item label="姓名" :label-width="formLabelWidth" required>
                    <el-col :span="18">
                         <el-input v-model="formData.name" autocomplete="off" size="small"  autofocus="true">
                        </el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="活动区域" :label-width="formLabelWidth">
                    <el-col :span="18">
                        <el-select v-model="formData.region" filterable placeholder="请选择" size="small">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-form-item>
                <el-form-item label="备选方案" :label-width="formLabelWidth">
                    <el-col :span="18">
                        <el-radio v-model="formData.radio" label="1">备选项1</el-radio>
                        <el-radio v-model="formData.radio" label="2">备选项2</el-radio>
                    </el-col>
                </el-form-item>
                <el-form-item label="多选" :label-width="formLabelWidth">
                    <el-checkbox-group 
                        v-model="formData.city"
                        :min="1"
                        :max="2">
                        <el-checkbox v-for="(city,i) in citys" :label="city.value" :key="i">{{city.name}}</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
            </el-form>
            <!-- 确认、取消按钮 -->
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisibleFun">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible">确 定</el-button>
            </div>
         </el-dialog>
    </div>
    
</template>
<script>
import {getCombox} from '@/axios/zujian/table-ajax.js';
export default {
    name:'win',
    props:["winshow","changewinshow","formdata"],
    data(){
        return {
            title: "修改窗口",
            dialogFormVisible: false,
            formData:{},
            formLabelWidth: "80px",
            options:[],
            citys:[{
                name: "上海",
                value: "sh"
            },{
                name: "北京",
                value: "bj"
            },{
                name: "广东",
                value: "gd"
            }]
        }
    },
    watch:{
        winshow(val){
            this.dialogFormVisible = val;
        }
    },
    methods:{
        dialogFormVisibleFun(){
            this.changewinshow(false);
        }
    },
    mounted(){
        var me = this;
        this.formData = Object.assign({},this.formdata);
        this.dialogFormVisible = true;
        getCombox({},function(response){
            me.options = response.data.data;
        
        },function(error){
        
        });
    }
}
</script>
<style>
.el-select{
    width: 100%;
}
</style>

