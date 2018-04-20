<template>
    <div>
        <el-container>
            <el-aside width="200px">
                <el-menu :default-openeds="['1', '2']" default-active="/home/com/sold" :router="true">
                    <el-submenu index="1">
                        <template class="list" slot="title">
                            <i class="iconfont icon-tuijian"></i> 精品推荐
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/home/com/sold">畅销榜</el-menu-item>
                            <el-menu-item index="/home/com/search">热搜榜</el-menu-item>
                            <el-menu-item index="/home/com/sale">打折榜</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template class="list" slot="title">
                            <i class="iconfont icon-tuijian"></i> 图书分类</template>
                        <el-menu-item-group>
                            <el-menu-item index="/home/list/all">所有图书</el-menu-item>
                            <el-menu-item index="/home/list/novel">小说</el-menu-item>
                            <el-menu-item index="/home/list/child">儿童</el-menu-item>
                            <el-menu-item index="/home/list/tool">工具</el-menu-item>
                            <el-menu-item index="/home/list/prose">散文</el-menu-item>
                            <el-menu-item index="/home/list/manga">动漫</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container :style="height">
                <router-view></router-view>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import {
        getHeight
    } from '../../common';

    export default {
        data() {
            return {
                height: "",
            };
        },
        created() {
            let curHeight = getHeight() - 60;
            this.height = "height:" + curHeight + "px";
        },
        methods: {
            
        },
        components: {},
        computed: {}
    };

</script>

<style scoped lang="less">
    .el-aside {
        background-color: #fff;
        color: #333;
        text-align: center;
        line-height: 200px;
        padding-top: 20px;
    }

</style>
