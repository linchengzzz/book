<template>
    <div class="detail">
        <el-container>
            <el-header>
                <el-button @click="goBack">返回</el-button>书籍详情
            </el-header>
            <el-main :style="height">
                <el-row>
                    <el-col :span="14" :offset="5">
                        <el-container>
                            <el-container>
                                <el-aside width="300px">
                                    <img :src="book.bookCover" alt="">
                                </el-aside>
                                <el-main>
                                    <p class="name">{{book.bookName}}</p>
                                    <div class="deta">
                                        <template>
                                            <p class="sale" v-if="book.bookSale<1">
                                                折扣价:
                                                <span>{{format(book.bookPrice*book.bookSale)}}</span> [{{(book.bookSale*10).toFixed(1)}}折] 原价:
                                                <i>{{format(book.bookPrice)}}</i>
                                            </p>
                                            <p class="price" v-else>售价:<i>{{book.bookSale}}</i></p>
                                        </template>
                                        <p class="Info">作者: {{book.bookAuthor}}</p>
                                        <p class="Info">描述: {{book.bookInfo}}</p>
                                        <p class="hot">搜索热度: {{book.bookSearch}}</p>
                                        <p class="sold">交易成功: {{book.bookSold}}</p>
                                        <p>出版日期:{{book.bookDate}}</p>
                                    </div>
                                    <div class="func">
                                        <my-button :book="book" />
                                    </div>
                                </el-main>
                            </el-container>
                            <el-footer>
                                <div class="intro">
                                    <p>书籍简介:</p>
                                    <p class="content">{{book.bookContent}}</p>
                                </div>
                            </el-footer>
                        </el-container>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import { getDetail } from "../api";
    import { getHeight, formatPrice } from '../common';
    import myButton from '../base/button.vue';

    export default {
        data() {
            return {
                book: {},
                height: '',
            };
        },
        methods: {
            async getbook(id) {
                this.book = await getDetail(id);
                let reg = new RegExp(/^\d+-\d+-\d+/);
                this.book.bookDate = reg.exec(this.book.bookDate)[0];
            },
            format(value) {
                return formatPrice(value);
            },
            goBack() {
                this.$router.history.go(-1);
            }
        },
        created() {
            this.getbook(this.$route.params.bid);
            let curHeight = getHeight() - 60 - 60;
            this.height = "height:" + curHeight + "px";
        },
        components: {
            myButton,
        },
        computed: { },
    };

</script>

<style scoped lang="less">
    .detail {
        width: 100%;
        .el-container {
            .el-header {
                font-size: 24px;
                background: #b3c0d1;
                padding: 0 200px;
                color: #333;
                line-height: 60px;
                height: 60px;
                .el-button {
                    margin-right: 600px;
                }
            }
            .el-row {
                margin-top: 20px;
                .el-col {
                    color: #333;
                    .el-aside {
                        padding-top: 10px;
                        img {
                            width: 98%;
                            border: 1px solid #ccc;
                        }
                    }
                    .el-main {
                        padding: 10px;
                        p {
                            padding: 5px;
                        }
                        .name {
                            font-size: 16px;
                            font-weight: bold;
                        }
                        .deta {
                            margin: 20px 0;
                            padding: 10px;
                            color: rgb(100, 100, 100);
                            background: #ececec;
                            border-radius: 10px;
                            width: 60%;
                            .sale {
                                span {
                                    font-size: 18px;
                                    font-weight: bold;
                                    color: rgb(200, 10, 10);
                                }
                                i {
                                    font-style: normal;
                                    text-decoration: line-through;
                                }
                            }
                        }
                        .func {
                            padding: 10px;
                        }
                    }
                    .el-footer {
                        margin-top: 20px;
                        .intro {
                            width: 85%;
                            padding: 10px;
                            border: 1px dashed #c1c1c1;
                            box-sizing: border-box;
                            border-radius: 20px;
                            font-size: 18px;
                            .content {
                                padding: 20px;
                                font-size: 16px;
                                line-height: 30px;
                                text-indent: 35px
                            }
                        }
                    }
                }
            }
        }
    }
</style>
