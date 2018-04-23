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
                        <el-table-column width="80">
                            <template slot-scope="scope">
                                <img :src="scope.row.bookCover" width="80" alt="">
                            </template>
                        </el-table-column>
                        <el-table-column label="书名" prop="bookName" show-overflow-tooltip width="280">
                        </el-table-column>
                        <el-table-column label="单价" width="80">
                            <template slot-scope="scope">
                                <span>{{format(scope.row.bookPrice*scope.row.bookSale)}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="数量" width="180">
                            <template slot-scope="scope">
                                <template>
                                    <el-input-number v-model="scope.row.num" @change="handleChange(scope)" :min="1"></el-input-number>
                                </template>
                            </template>
                        </el-table-column>
                        <el-table-column label="小计" width="180">
                            <template slot-scope="scope">
                                <span>{{format(scope.row.bookPrice*scope.row.bookSale*scope.row.num)}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <router-link :to="{path:'/detail',name:'detail',params:{bid:scope.row.bookId}}" size="mini" tag="el-button" alt="">查看详情</router-link>
                                <el-button type="danger" @click="removeCar(scope.row)">移除购物车</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>
        </el-main>
    </div>
</template>

<script>
    import {
        getHeight,
        formatPrice
    } from '../common'
    import {
        mapState
    } from 'vuex';
    import * as Types from '../store/mutations-type'
    export default {
        data() {
            return {
                height: '',
                data: []
            };
        },
        created() {
            let curHeight = getHeight() - 60 - 60;
            this.height = "height:" + curHeight + "px";
        },
        methods: {
            format(value) {
                return formatPrice(value);
            },
            handleChange(scope) {
                this.$store.commit(Types.UPDATA_CAR, scope)
            },
            removeCar(book){
                 this.$store.commit(Types.REMOVE_CAR,book)
            },
        },
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

    .el-input-number {
        width: 120px;
    }

</style>
