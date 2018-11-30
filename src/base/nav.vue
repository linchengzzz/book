<template>
    <div>
        <el-menu :router="true" default-active="/home/com/sold" class="el-menu" mode="horizontal" text-color="#fff" background-color="#545c64" active-text-color="#ffd04b">
            <el-menu-item index="/home/com/sold">图书首页</el-menu-item>
            <el-menu-item index="/collect">我的收藏</el-menu-item>
            <el-menu-item index="/car">购物车</el-menu-item>
            <el-menu-item index="/manage">图书管理</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            };
        },
        methods: {}
    }

</script>

<style scoped>
    .el-menu {
        border-bottom: 0;
    }
</style>
