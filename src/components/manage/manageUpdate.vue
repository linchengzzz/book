<template>
    <div style="width:100%">
        <ManageHeader>修改图书</ManageHeader>
        <ManageSearch></ManageSearch>
        <el-main>
            <el-row>
                <el-col :span="20" :offset="2">
                    <el-table stripe :data="books" border style="width: 100%">
                        <el-table-column fixed prop="bookId" label="编号" width="100">
                        </el-table-column>
                        <el-table-column prop="bookName" label="书名" width="150">
                        </el-table-column>
                        <el-table-column prop="bookAuthor" label="作者" width="120">
                        </el-table-column>
                        <el-table-column prop="bookPrice" label="价格" width="120">
                        </el-table-column>
                        <el-table-column prop="bookSale" label="折扣" width="120">
                        </el-table-column>
                        <el-table-column prop="bookSold" label="售出" width="120">
                        </el-table-column>
                        <el-table-column prop="bookType" label="类型" width="120">
                            <template slot-scope="scope">
                                <p>{{types(scope.row.bookType)}}</p>
                            </template>
                        </el-table-column>
                        <el-table-column prop="bookInfo" label="描述" width="200">
                        </el-table-column>
                        <el-table-column fixed="right" label="操作" center width="100">
                            <template slot-scope="scope">
                                <router-link :to="{path:'/manage/detail:id',name:'manageDetail',params:{bid:scope.row.bookId}}" tag="el-button">修改</router-link>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>
        </el-main>
    </div>
</template>
<script>
import ManageHeader from "./manageHeader";
import ManageSearch from "./manageSearch.vue";
import * as Types from '../../store/mutations-type';
export default {
    data() {
        return { };
    },
    created() {
        this.$store.commit(Types.CLEAR_MANAGE_BOOKS);
    },
    methods: {
        types(type){
            switch(type){
                case 'novel':
                    return '小说';
                case 'child':
                    return '儿童';
                case 'tool':
                    return '工具';
                case 'prose':
                    return '散文';
                case 'manga':
                    return '动漫';
            }
        }
    },
    watch: {},
    components: {
        ManageHeader,
        ManageSearch,
    },
    computed: {
        books() {
            return this.$store.state.manageBooks;
        }
    }
};
</script>

<style scoped lang="less">

</style>
