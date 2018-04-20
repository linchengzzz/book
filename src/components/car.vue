<template>
    <div>
        <el-header>
            <h2>购物车</h2>
        </el-header>
        <el-main :style="height">
            <el-row :gutter="20">
                <el-col :span="18" :offset="3">
                    <el-table ref="multipleTable" :data="carList" tooltip-effect="dark" style="width: 100%">
                        <el-table-column label="全选" type="selection" width="55">
                        </el-table-column>
                        <el-table-column class="bookName" label="图书" width="180" show-overflow-tooltip>
                            <template slot-scope="scope">
                                <img :src="scope.row.bookCover" width="80" alt="">
                                <span>{{scope.row.bookName}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="单价" width="180">
                        </el-table-column>
                        <el-table-column label="数量">
                        </el-table-column>
                        <el-table-column label="小计">
                        </el-table-column>
                        <el-table-column label="操作">
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>
        </el-main>
    </div>
</template>

<script>
    import {
        getHeight
    } from '../common'
    import {
        mapState
    } from 'vuex';
    import * as Types from '../store/mutations-type'
    export default {
        data() {
            return {
                height: ''
            };
        },
        created() {
            let curHeight = getHeight() - 60 - 60;
            this.height = "height:" + curHeight + "px";
        },
        methods: {},
        components: {

        },
        computed: {
            ...mapState(['carList'])
        }
    };

</script>

<style scoped lang="less">
    .el-header {
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        background: #b3c0d1;
    }

    .el-main {
        .bookName {
            vertical-align: middle;
        }
    }

</style>
