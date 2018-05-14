<template>
    <el-row style="width:100%">
        <el-col :span="20" :offset="2">
            <el-form :model="book" :rules="rules" ref="book" label-width="150px" class="book">
                <el-form-item label="图书封面：" prop="bookCover">
                    <el-input v-model="book.bookCover"></el-input>
                </el-form-item>
                <el-form-item label="图书名称：" prop="bookName">
                    <el-input v-model="book.bookName"></el-input>
                </el-form-item>
                <el-form-item label="图书作者：" prop="bookAuthor">
                    <el-input v-model="book.bookAuthor"></el-input>
                </el-form-item>
                <el-form-item label="图书描述：" prop="bookInfo">
                    <el-input v-model="book.bookInfo"></el-input>
                </el-form-item>
                <el-form-item label="图书价格：" prop="bookPrice">
                    <el-input v-model="book.bookPrice"></el-input>
                </el-form-item>
                <el-form-item label="图书热度：" prop="bookSearch">
                    <el-input v-model="book.bookSearch"></el-input>
                </el-form-item>
                <el-form-item label="图书折扣：" prop="bookSale">
                    <el-input v-model="book.bookSale"></el-input>
                </el-form-item>
                <el-form-item label="图书售量：" prop="bookSold">
                    <el-input v-model="book.bookSold"></el-input>
                </el-form-item>
                <el-form-item label="图书分类：" prop="bookType">
                    <el-select v-model="book.bookType" placeholder="请选择分类">
                        <el-option label="小说" value="novel"></el-option>
                        <el-option label="儿童" value="child"></el-option>
                        <el-option label="工具" value="tool"></el-option>
                        <el-option label="散文" value="prose"></el-option>
                        <el-option label="动漫" value="manga"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="出版日期：" required>
                    <el-form-item prop="bookDate">
                        <el-date-picker type="date" placeholder="选择日期" v-model="book.bookDate" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-form-item>
                <el-form-item label="书籍简介：" prop="bookContent">
                    <el-input type="textarea" rows="10" v-model="book.bookContent"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">确认修改</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script>
import { getManageBook, setManageBook } from "../../api";
export default {
    data() {
        return {
            book: {},
            rules: {
                bookCover: [
                    {
                        required: true,
                        message: "请输入图书封面",
                        trigger: "blur"
                    }
                ],
                bookName: [
                    {
                        required: true,
                        message: "请输入图书名称",
                        trigger: "blur"
                    }
                ],
                bookAuthor: [
                    {
                        required: true,
                        message: "请输入图书作者",
                        trigger: "blur"
                    }
                ],
                bookInfo: [
                    {
                        required: true,
                        message: "请输入简介",
                        trigger: "blur"
                    }
                ],
                bookPrice: [
                    {
                        required: true,
                        message: "请输入价格",
                        trigger: "blur"
                    }
                ],
                bookSearch: [
                    {
                        required: true,
                        message: "请输入搜索热度",
                        trigger: "blur"
                    }
                ],
                bookSale: [
                    {
                        required: true,
                        message: "请输入折扣",
                        trigger: "blur"
                    }
                ],
                bookSold: [
                    {
                        required: true,
                        message: "请输入售量",
                        trigger: "blur"
                    }
                ],
                bookType: [
                    {
                        required: true,
                        message: "请选择图书分类",
                        trigger: "blur"
                    }
                ],
                bookDate: [
                    {
                        type: "date",
                        required: true,
                        message: "请选择日期",
                        trigger: "blur"
                    }
                ],
                bookContent: [
                    {
                        required: true,
                        message: "请填写图书简介",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    created() {
        let id = this.$route.params.bid;
        this.getBook(id);
    },
    methods: {
        async getBook(id) {
            this.book = await getManageBook(id);
        },
        async updateBook(book){
            let result = await setManageBook(book);
            if(result.code==1){
                this.$router.history.go(-1);
            }else{
                this.$message({
                    type: "error",
                    message: "删除失败"
                });
            }
        },
        submit() {
            this.$confirm("确定修改该图书, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    this.updateBook(this.book);
                    this.$message({
                        type: "success",
                        message: "修改成功!"
                    });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消修改"
                    });
                });
        }
    },
    components: {},
    computed: {}
};
</script>

<style scoped lang="less">
.book {
    margin: auto;
    margin-top: 20px;
}
.el-textarea {
    resize: none;
}
</style>