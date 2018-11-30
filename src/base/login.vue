<template>
    <div>
        <el-row :gutter="12">
            <el-col :span="12" :offset="6">
                <el-card shadow="hover">
                    <el-header>
                        <h2>图书管理系统</h2>
                        <h3>请选择登录用户</h3>
                    </el-header>
                    <el-main>
                        <el-form size="small" ref="form" status-icon :rules="rules" :model="form" label-width="180px">
                            <el-form-item label="用户名：">
                                <el-select v-model="form.select" placeholder="请选择活动区域">
                                    <el-option label="普通用户" value="custom"></el-option>
                                    <el-option label="管理员" value="admin"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item v-if="form.select==='admin'" label="密码:" prop="pass">
                                <el-input type="password" v-model="form.pass" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm">提交</el-button>
                                <el-button @click="resetForm">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </el-main>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import * as User from '../common/user';
import * as Types from '../store/mutations-type';

export default {
    data() {
        let validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else {
                callback();
            }
        };
        return {
            rules: {
                pass: [{ validator: validatePass, trigger: "blur" }]
            },
            form: {
                pass: "",
                select: "",
                region: ""
            }
        };
    },
    methods: {
        submitForm() {
            let usrname = this.form.select;
            let password = this.form.pass;
            if (usrname === 'custom') {
                window.localStorage.setItem(User.USERNAME, usrname);
                window.location.hash = '/home/com/sold';
                this.$store.commit(Types.IS_LOGIN, true);
            } else if (usrname === 'admin') {
                if (password === '0103') {
                    window.localStorage.setItem(User.USERNAME, usrname);
                    window.localStorage.setItem(User.PASSWORD, password);
                    window.location.hash = '/home/com/sold';
                    this.$store.commit(Types.IS_LOGIN, true);
                } else {
                    this.$message('密码输入错误');
                }
            } else {
                this.$message('请选择登录用户');
            }
        
        },
        resetForm() {
            this.$refs.form.resetFields();
        }
    },
    components: {},
    computed: {}
};
</script>

<style scoped lang="less">
div {
    height: 100%;
    .el-row {
        height: 100%;
        background: #ccc;
        .el-col {
            height: 100%;
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
            .el-card {
                background: #fff;
                width: 100%;
                height: 400px;
                .el-header {
                    width: 100%;
                    text-align: center;
                    height: 120px!important;
                    h2{
                        margin: auto;
                        font-size:36px; 
                        font-weight: normal;
                        width: 60%;
                        padding:10px;
                        border: 2px dashed #ccc;
                        border-radius: 15px;
                        background: #ddd;
                    }
                    h3 {
                        margin-top:5px; 
                        font-size: 24px;
                        font-weight: normal;
                    }
                    border-bottom: 1px solid #ccc;
                }
                .el-form-item {
                    .el-input {
                        width: 200px;
                    }
                }
            }
        }
    }
}
</style>
