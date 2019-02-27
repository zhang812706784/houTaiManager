<template>
    <div>
        <el-dialog :title="title" :visible="dialogFormVisible" @close="dialogFormVisibleFun">
            <!-- 表单内容 -->
            <el-form :model="formData" label-position="left">
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="formData.name" autocomplete="off" size="mini">
                    </el-input>
                </el-form-item>
                <!-- <el-form-item label="活动区域" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item> -->
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
export default {
    name:'win',
    props:["winshow","changewinshow","formdata"],
    data(){
        return {
            title: "修改窗口",
            dialogFormVisible: false,
            formData:{},
            formLabelWidth: "100px"
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
        this.formData = this.formdata;
    }
}
</script>
<style>
</style>

