<template>
    <div class="homeList">
        <el-container>
            <el-header>
                <el-row :gutter="20">
                    <el-col :span="20">
                        <el-button-group style="margin-bottom: 30px;">
                            <el-button @click="sort('all')">综合排序</el-button>
                            <el-button @click="sort('sold')">销量</el-button>
                            <el-button @click="sort('price')">价格</el-button>
                            <el-button @click="sort('date')">出版时间</el-button>
                        </el-button-group>
                    </el-col>
                    <el-col :span="4">
                        <el-input placeholder="请输入内容" style="margin-top:10px" v-model="input" class="input-with-select">
                            <el-button slot="append" @click="search" icon="el-icon-search"></el-button>
                        </el-input>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <ul class="bookList">
                    <li v-for="(item,index) in books" :class="{display:hover==index}" :key="index" @mouseover="addClass(index)" @mouseout="removeClass">
                        <div class="book">
                            <router-link :to="{path:'/detail',name:'detail',params:{bid:item.bookId}}" tag="img" :src="item.bookCover" alt="" />
                            <el-tag type="info">
                                {{item.bookName}}
                            </el-tag>
                            <p>售价:{{format(item.bookPrice*item.bookSale)}}</p>
                            <my-button :book="item" />
                        </div>
                    </li>
                </ul>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import { getBooks } from "../../api";
import myButton from "../../base/button.vue";
import { formatPrice } from "../../common";

export default {
    props: {
        index: {
            type: String,
            default: "all"
        }
    },
    data() {
        return {
            books: [],
            allBooks: [],
            hover: null,
            flag: 1,
            input: "",
            oldBooks:[]
        };
    },
    created() {
        this.getBook();
    },
    methods: {
        async getBook() {
            this.allBooks = await getBooks();
            this.typeBook(this.index);
        },
        typeBook(type) {
            if (this.index == "all") {
                this.oldBooks = this.books = this.allBooks;
            }else{
                this.oldBooks = this.books = this.allBooks.filter(item => item.bookType == type);
            }
        },
        addClass(index) {
            this.hover = index;
        },
        removeClass() {
            this.hover = null;
        },
        format(value) {
            return formatPrice(value);
        },
        sort(cur) {
            this.flag *= -1;
            switch (cur) {
                case "all":
                    this.books.sort((prev, next) => prev.bookId - next.bookId);
                    break;
                case "sold":
                    this.books.sort(
                        (prev, next) =>
                            this.flag * (prev.bookSold - next.bookSold)
                    );
                    break;
                case "price":
                    this.books.sort(
                        (prev, next) =>
                            this.flag *
                            (prev.bookPrice * prev.bookSale -
                                next.bookPrice * next.bookSale)
                    );
                    break;
                case "date":
                    this.books.sort((prev, next) => {
                        let reg = new RegExp(/^\d+-\d+-\d+/);
                        let newPrevBookDate = reg.exec(prev.bookDate)[0];
                        let newNextBookDate = reg.exec(next.bookDate)[0];
                        newPrevBookDate = newPrevBookDate.replace(/-/g, "");
                        newNextBookDate = newNextBookDate.replace(/-/g, "");
                        return this.flag * (newPrevBookDate - newNextBookDate);
                    });
                    break;
            }
        },
        search() {
            if (this.input == "") {
                this.books = this.oldBooks;
            } else {
                this.books = this.oldBooks.filter(
                    book => book.bookName.indexOf(this.input) > 0
                )
            }
        }
    },
    components: {
        myButton
    },
    computed: {},
    watch: {
        index(key) {
            this.typeBook(key);
            switch (key) {
                case "all":
                    this.books = this.allBooks;
                    break;
                default:
                    this.typeBook(key);
                    break;
            }
        }
    }
};
</script>

<style scoped lang="less">
.homeList {
    width: 100%;
    .el-header {
        height: 60px;
        background: #b3c0d1;
        display: flex;
        width: 100%;
        .el-row {
            width: 100%;
            .el-button-group {
                margin-top: 10px;
            }
        }
    }
    .el-main {
        overflow: visible;
        .bookList .display {
            overflow: visible;
        }
        .bookList {
            li {
                box-sizing: border-box;
                padding: 10px;
                margin: 10px;
                width: 300px;
                border: 1px solid #ccc;
                text-align: center;
                float: left;
                height: 300px;
                overflow: hidden;
                position: relative;
                .book {
                    position: absolute;
                    width: 310px;
                    height: 400px;
                    top: -10px;
                    left: -5px;
                    border: 1px solid #ccc;
                    box-shadow: #ccc 2px 2px 10px 2px;
                    background: #fff;
                    z-index: 100;
                    cursor: pointer;
                    img {
                        width: 80%;
                        display: block;
                        margin: 10px auto;
                    }
                    p {
                        margin: 10px 0;
                    }
                    &:hover {
                        z-index: 101;
                    }
                }
            }
        }
    }
}
</style>
