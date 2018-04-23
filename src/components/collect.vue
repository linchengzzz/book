<template>
    <div>
        <el-header>
            <h2>收藏列表</h2>
        </el-header>
        <el-main :style="height">
            <el-row :gutter="20">
                <el-col :span="18" :offset="3">
                    <el-table :data="collectList" stripe style="width: 100%">
                        <el-table-column prop="bookDate" label="出版日期" width="180">
                        </el-table-column>
                        <el-table-column prop="bookCover" label="书籍图片" width="180">
                            <template slot-scope="scope">
                                <img :src="scope.row.bookCover" alt="" width="60">
                            </template>
                        </el-table-column>
                        <el-table-column prop="bookName" label="书名" width="180">
                        </el-table-column>
                        <el-table-column label="价格" width="180">
                            <template slot-scope="scope">
                                <span>{{format(scope.row.bookPrice*scope.row.bookSale)}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="bookInfo" label="描述">
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <router-link :to="{path:'/detail',name:'detail',params:{bid:scope.row.bookId}}" size="mini"  tag="el-button" alt="">查看详情</router-link>
                                <el-button type="danger" @click="removeCollect(scope.row)">取消收藏</el-button>
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
                height: ''
            };
        },
        created() {
            let curHeight = getHeight() - 60 - 60;
            this.height = "height:" + curHeight + "px";
        },
        methods: {
            removeCollect(book){
                this.$store.commit(Types.REMOVE_COLLECT,book)
            },
            format(value) {
                return formatPrice(value);
            }
        },
        components: {

        },
        computed: {
            ...mapState(['collectList'])
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
</style>
