<template>
    <div>
        <el-menu default-active="1" class="el-menu" mode="horizontal" text-color="#fff" background-color="#545c64" active-text-color="#ffd04b">
            <el-menu-item index="1"><router-link tag="div" to="/home">图书首页</router-link></el-menu-item>
            <el-menu-item index="2"><router-link tag="div" to="/collect">我的收藏</router-link></el-menu-item>
            <el-menu-item index="3"><router-link tag="div" to="/car">购物车</router-link></el-menu-item>
            <el-menu-item index="4"><router-link tag="div" to="/manage">图书管理</router-link></el-menu-item>
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
