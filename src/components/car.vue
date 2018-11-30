<template>
    <div>
        <el-header>
            <h2>购物车</h2>
        </el-header>
        <el-main :style="height">
            <el-row :gutter="20">
                <el-col :span="18" :offset="3">
                    <el-table ref="multipleTable" :data="carList" tooltip-effect="dark" style="width: 100%" @selection-change="change">
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
                        <el-table-column label="小计" width="120">
                            <template slot-scope="scope">
                                <span>{{format(scope.row.bookPrice*scope.row.bookSale*scope.row.num)}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" width="280">
                            <template slot-scope="scope">
                                <router-link :to="{path:'/detail',name:'detail',params:{bid:scope.row.bookId}}" size="mini" tag="el-button" alt="">查看详情</router-link>
                                <el-button type="danger" @click="removeCar(scope.row)">移除购物车</el-button>
                            </template>
                        </el-table-column>
                    </el-table>

                </el-col>
            </el-row>
        </el-main>
        <el-footer>
            <el-row :gutter="20">
                <el-col :span="18" :offset="3">
                    <div class="">
                        <el-row :gutter="20">
                            <el-col :span="8">
                                <div class="clearCar">
                                    <span @click="delSelected">删除选中图书</span>
                                    <span @click="clearCar">清空购物车</span>
                                </div>
                            </el-col>
                            <el-col :span="8" :offset="8">
                                <div>
                                    <span>总价：</span>
                                    <span class="sumPrice">{{sumPrice}}</span>
                                    <el-button type="danger"  @click="payClick">去付款</el-button>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </el-footer>
        <el-dialog title="付款页面" :visible.sync="DialogVisible" width="30%" center>
            <div class="pay">
                <img src="@/assets/QRCode.png" alt="">
                <span>扫码支付:<i class="sumPrice">{{sumPrice}}</i></span>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="success" @click="paySure">确认支付</el-button>
                <el-button @click="DialogVisible = false">取 消</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import { getHeight, formatPrice } from '../common';
    import { mapState } from 'vuex';
    import * as Types from '../store/mutations-type';

    export default {
        data() {
            return {
                height: '',
                data: [],
                multipleSelection: [],
                itemId: [],
                DialogVisible: false,
            };
        },
        created() {
            let curHeight = getHeight() - 60 - 60;
            this.height = "height:" + curHeight + "px";
        },
        methods: {
            change(val) {
                this.multipleSelection = val;
            },
            format(value) {
                return formatPrice(value);
            },
            handleChange(scope) {
                this.itemId = this.multipleSelection.map(item => item.bookId);
                this.$store.commit(Types.UPDATA_CAR, scope);
            },
            removeCar(book) {
                this.$store.commit(Types.REMOVE_CAR, book)
            },
            delSelected() {
                this.$store.commit(Types.DEL_SELECTED, this.multipleSelection)
            },
            clearCar() {
                this.$store.commit(Types.CLEAR_CAR)
            },
            payClick(){
                if(this.multipleSelection.length > 0){
                    this.DialogVisible = true;
                }
            },
            paySure(){
                this.delSelected();
                this.DialogVisible = false;
            }
        },
        updated() {
            this.itemId.forEach(item => {
                this.carList.find(book => {
                    if (book.bookId === item) {
                        this.$refs.multipleTable.toggleRowSelection(book, true);
                    }
                })
            })
            this.itemId = [];
        },
        components: {

        },
        computed: {
            ...mapState(['carList']),
            sumPrice() {
                if (this.multipleSelection.length > 0) {
                    let sum = this.multipleSelection.reduce((prev, next) => {
                        return prev + next.bookPrice * next.bookSale * next.num;
                    }, 0)
                    return this.format(sum) + '元'
                } else {
                    return 0 + ' 元';
                }
            },
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

    .el-footer {
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        background: #eee;
        position: fixed;
        border-top: 1px solid #ccc;
        box-shadow: 0 -2px 10px 3px #ddd;
        bottom: 0;
        .clearCar {
            span {
                cursor: pointer;
                font-size: 14px;
                margin-right: 20px;
                &:hover {
                    color: #f00;
                }
            }
        }
    }
    .pay{
        text-align: center;
        span{
            display: block;
            font-size: 18px;
        }
    }
    .sumPrice{
        color:#f00;
    }
</style>
