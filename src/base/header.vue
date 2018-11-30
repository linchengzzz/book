<template>
    <div class="header"> 
        <el-row type="flex" justify="space-around">
            <el-col :span="5">
                <div class="logo"><i class="el-icon-tickets"></i> 图书购物商城 </div>
            </el-col>
            <el-col :span="12">
                <my-nav></my-nav>
            </el-col>
            <el-col class="login" :span="6">
                当前用户：<span>{{username}}</span>
                <el-button size="small" type="danger" @click="logout">退出登录</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import myNav from './nav.vue'
    import * as User from '../common/user';
    import * as Types from '../store/mutations-type';
    export default {
        data() {
            return {
                input:''
            };
        },
        methods: {
            logout(){
                this.$store.commit(Types.IS_LOGIN, false);
            }
        },
        components: {
            myNav
        },
        computed: {
            username: function() {
                let username = window.localStorage[User.USERNAME];
                return username;
            }
        }
    };

</script>

<style scoped lang="less">
    .header {
        background: #545c64;
        height: 60px;
        line-height: 60px;
    }
    .el-button{
        margin-left: 10px;
        background: #F56C6C;
        color: #fff;
    }
    .login{
        font-size: 16px;
        color: #fff;
        span{
            color:greenyellow;
        }
    }
    .logo{
        font-size: 24px;
        margin: 0;
        line-height: 60px;
        color: #D3DCE6;
    }
</style>
