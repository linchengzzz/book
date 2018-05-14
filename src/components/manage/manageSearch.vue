<template>
    <div class="search">
        <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择类型">
                <el-option label="全部图书" value="all"></el-option>
                <el-option label="小说" value="novel"></el-option>
                <el-option label="儿童" value="child"></el-option>
                <el-option label="工具" value="tool"></el-option>
                <el-option label="散文" value="prose"></el-option>
                <el-option label="动漫" value="manga"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
    </div>
</template>
<script>
import {getManageBooks} from '../../api';
import * as Types from '../../store/mutations-type';
export default {
    data() {
        return {
            input:'',
            select:''
        };
    },
    created() {},
    methods: {
        async search(){
            let books = await getManageBooks(this.select,this.input);
            this.$store.commit(Types.GET_MANAGE_BOOKS,books);
        }
    },
    watch: {},
    components: {},
    computed: {}
};
</script>

<style scoped lang="less">
    .search{
        width:100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px dashed #ccc;
        .el-select {
        width: 130px;
        }
        .input-with-select .el-input-group__prepend {
            background-color: #fff;
        }
        .el-input{
            width: 80%;
        }
    }
</style>
