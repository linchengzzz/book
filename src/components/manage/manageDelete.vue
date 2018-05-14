<template>
    <div style="width:100%">
        <ManageHeader>删除图书</ManageHeader>
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
                        <el-table-column fixed="right" label="操作" center width="100">
                            <template slot-scope="scope">
                                <el-button @click="manageDelete(scope.row.bookId)" type="danger">删除</el-button>
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
import * as Types from "../../store/mutations-type";
import {delManageBook} from '../../api';
export default {
    data() {
        return {};
    },
    created() {
        this.$store.commit(Types.CLEAR_MANAGE_BOOKS);
    },
    methods: {
        types(type) {
            switch (type) {
                case "novel":
                    return "小说";
                case "child":
                    return "儿童";
                case "tool":
                    return "工具";
                case "prose":
                    return "散文";
                case "manage":
                    return "动漫";
            }
        },
        async deleteBook(id){
            let result = await delManageBook(id);
            if(result.code==1){
                this.$store.commit(Types.DELETE_MANAGE_BOOK,id)
            }else{
                this.$message({
                    type: "error",
                    message: "删除失败"
                });
                return;
            }
        },
        manageDelete(id) {
            this.$confirm("确定删除该图书, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    this.deleteBook(id);
                    this.$message({
                        type: "success",
                        message: "删除成功!"
                    });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除"
                    });
                });
        }
    },
    watch: {},
    components: {
        ManageHeader,
        ManageSearch
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
