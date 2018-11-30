<template>
    <div class="manage">
        <div class="title" :style="height" v-if="!show()">
            <el-card shadow="hover" class="box-card">
                <h3>请切换成管理员登录</h3>
            </el-card>
        </div>
        <div v-else :style="height">
            <el-container>
                <el-aside width="200px">
                    <el-menu :default-openeds="['1']" default-active="/manage/check" :router="true">
                        <el-submenu index="1">
                            <template class="list" slot="title">
                                <i class="el-icon-warning"></i> 操作管理
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/manage/check">查看图书</el-menu-item>
                                <el-menu-item index="/manage/add">添加图书</el-menu-item>
                                <el-menu-item index="/manage/update">修改图书</el-menu-item>
                                <el-menu-item index="/manage/delete">删除图书</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-container :style="height">
                    <router-view></router-view>
                </el-container>
            </el-container>
        </div>
    </div>
</template>

<script>
import * as User from "../../common/user";
import { getHeight } from "../../common";

export default {
    data() {
        return {
            user: {
                username: null,
                password: null
            },
            height: ""
        };
    },
    created() {
        this.user.username = window.localStorage.getItem(User.USERNAME);
        this.user.password = window.localStorage.getItem(User.PASSWORD);
        let curHeight = getHeight() - 60;
        this.height = "height:" + curHeight + "px";
        window.location.hash='/manage/check';
    },
    methods: {
        show() {
            if (
                this.user.username === "admin" &&
                this.user.password === "0103"
            ) {
                return true;
            } else {
                return false;
            }
        }
    },
    components: {
    },
    computed: {}
};
</script>

<style lang="less">
.manage {
    width: 100%;
    height: 100%;
    .title {
        height: 100%;
        width: 100%;
        display: flex;
        background: #ccc;
        justify-content: center;
        align-items: center;
        .el-card {
            width: 30%;
            height: 30%;
            display: flex;
            justify-content: center;
            align-items: center;
            h3 {
                text-align: center;
                font-size: 24px;
                font-weight: normal;
            }
        }
    }
}
.el-aside {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 200px;
    padding-top: 20px;
}

</style>