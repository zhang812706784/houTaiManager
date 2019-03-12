<template>
    <div class="login-wrap">
        <div class="login-con">
            
            <div class="login-top">
                Element管理平台
            </div>
            
            <div class="login-bottom">
                <el-form :model="form">
                    <el-form-item label="">
                        <el-input v-model="form.userName" type="text" suffix-icon="el-icon-edit"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-input v-model="form.passWord" type="password" suffix-icon="el-icon-view"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" class="login-btn" @click="submit">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapMutations } from 'vuex';
    export default {
        data(){
            return {
                form:{
                    userName:'',
                    passWord: ''
                }
            }
        },
        methods: {
            submit(){
                var obj = {
                    u: this.form.userName,
                    p: this.form.passWord,
                    pri: 'guest'
                }
                this.loginFun(obj);
                //根据权限动态生成路由
                this.$router.push({ name:"zhinan"});
            },
            ...mapMutations([
                'loginFun'
            ])
        },
        mounted(){
           
        }
    }
</script>
<style>
    .login-wrap{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login-con{
        width: 425px;
        height: 450px;
        padding-left: 40px;
        padding-right: 40px;
        border-radius: 5px;
        box-shadow: 1px 1px 3px 4px #cfcfcf;
    }
    .login-top{
        height: 150px;
        font-size: 22px;
        color: red;
        font-weight: bold;
        text-align: center;
        line-height: 150px;
    }
    .login-btn{
        width: 100%;
    }
</style>
