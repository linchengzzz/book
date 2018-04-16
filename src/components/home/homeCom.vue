<template>
    <div style="width:100%">
        <el-header style="font-size:24px">{{headerText}}</el-header>
        <el-main>
            <ul class="bookList">
                <!-- <router-link v-for="(item,index) in books" :class="{display:item.display}" :to="{path:'/detail',name:'detail',paramsL:{bid:item.bookId}}" tag="li" :key="index" @mouseover="console.log(1)" @mouseout="item.display=false"> -->
                <li v-for="(item,index) in books" :class="{display:hover==index}" :key="index" @mouseover="addClass(index)" @mouseout="removeClass">
                    <div>
                        <router-link :to="{path:'/detail',name:'detail',params:{bid:item.bookId}}" tag="img" :src="item.bookCover" alt="" />
                        <el-tag type="info">
                            {{item.bookName}}
                        </el-tag>
                        <el-tag type="warning">
                            <template v-if="title[1]=='bookSale'">
                                {{title[0]}}:{{item[title[1]]*10}}折
                            </template>
                            <template v-else>
                                {{title[0]}}:{{item[title[1]]}}
                            </template>
                        </el-tag>
                        <p>售价:{{format(item.bookPrice*item.bookSale)}}</p>
                        <el-button type="warning" round>加入收藏</el-button>
                        <el-button type="success" round>加入购物车</el-button>
                    </div>
                </li>

                <!-- </router-link> -->
            </ul>
        </el-main>
    </div>
</template>

<script>
    import {
        getBooks,
    } from '../../api'
    import { 
        formatPrice
     } from "../../common";
    export default {
        props: {
            index: {
                type: String,
                default: 'sold'
            }
        },
        data() {
            return {
                books: [],
                allBooks: [],
                headerText: '畅销图书',
                title: ['已售出', 'bookSold'],
                hover: null,
            };
        },
        created() {
            this.getBook();
        },
        methods: {
            clickHeader(text) {
                this.headerText = text + '图书';
            },
            async getBook() {
                this.books = this.allBooks = await getBooks();
                switch (this.index) {
                    case 'sold':
                        this.soldBooks();
                        this.headerText = '畅销图书'
                        break;
                    case 'search':
                        this.hotBooks();
                        this.headerText = '热搜图书'
                        break;
                    case 'sale':
                        this.saleBooks();
                        this.headerText = '打折图书'
                        break;
                }
            },
            soldBooks() {
                this.books = this.allBooks;
                this.title[0] = '已售出';
                this.title[1] = 'bookSold';
                this.books.sort((prov, next) => next.bookSold - prov.bookSold);
            },
            hotBooks() {
                this.books = this.allBooks;
                this.title[0] = '热度';
                this.title[1] = 'bookSearch';
                this.books.sort((prov, next) => next.bookSearch - prov.bookSearch);
            },
            saleBooks() {
                this.books = this.allBooks;
                this.title[0] = '折扣';
                this.title[1] = 'bookSale';
                this.books.sort((prov, next) => prov.bookSale - next.bookSale);
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
        },
        watch: {
            index(key) {
                switch (key) {
                    case 'sold':
                        this.soldBooks();
                        this.headerText = '畅销图书'
                        break;
                    case 'search':
                        this.hotBooks();
                        this.headerText = '热搜图书'
                        break;
                    case 'sale':
                        this.saleBooks();
                        this.headerText = '打折图书'
                        break;
                }
            }
        },
        components: {},
        computed: {}
    };

</script>

<style scoped lang="less">
    .el-header {
        background-color: #b3c0d1;
        color: #333;
        line-height: 60px;
    }

    .bookList .display {
        overflow: visible;
    }

    .el-main {
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
            div {
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
                    margin-top: 10px;
                }
            }
        }
    }

</style>
