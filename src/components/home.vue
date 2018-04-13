<template>
    <div>
        <el-container style="height: 700px;">
            <div style=" height:700px,border 1px solid #eee">
                <el-aside width="200px">
                    <el-menu :default-openeds="['1', '2']" default-active="1-1">
                        <el-submenu index="1">
                            <template class="list" slot="title">
                                <i class="iconfont icon-tuijian"></i> 精品推荐
                            </template>
                            <el-menu-item-group >
                                <el-menu-item index="1-1">畅销榜</el-menu-item>
                                <el-menu-item index="1-2">热搜榜</el-menu-item>
                                <el-menu-item index="1-3">收藏榜</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="2">
                            <template class="list" slot="title">
                                <i class="iconfont icon-tuijian"></i> 图书分类</template>
                            <el-menu-item-group>
                                <el-menu-item index="2-1">所有图书</el-menu-item>
                                <el-menu-item index="2-2">小说</el-menu-item>
                                <el-menu-item index="2-3">儿童</el-menu-item>
                                <el-menu-item index="2-4">工具</el-menu-item>
                                <el-menu-item index="2-5">散文</el-menu-item>
                                <el-menu-item index="2-6">动漫</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-aside>
            </div>
            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王小虎</span>
                </el-header>

                <el-main>
                    <el-table :data="tableData">
                        <el-table-column prop="date" label="日期" width="140">
                        </el-table-column>
                        <el-table-column prop="name" label="姓名" width="120">
                        </el-table-column>
                        <el-table-column prop="address" label="地址">
                        </el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item)
            }
        },
        methods: {

        },
        components: {

        },
        computed: {

        }
    };

</script>

<style scoped>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        background-color: #fff;
        color: #333;
        text-align: center;
        line-height: 200px;
        padding-top: 20px;
        height: 700px;
    }

</style>
