<template>
    <div class="header"> 
        <el-row type="flex" justify="space-around">
            <el-col :span="4">
                <div class="logo"><i class="el-icon-tickets"></i> 清新图书馆</div>
            </el-col>
            <el-col :span="12">
                <my-nav></my-nav>
            </el-col>
            <el-col :span="4">
                <el-input placeholder="请输入内容" style="margin-top:10px" v-model="input" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import myNav from './nav.vue'
    export default {
        data() {
            return {
                input:''
            };
        },
        methods: {

        },
        components: {
            myNav
        },
        computed: {

        }
    };

</script>

<style scoped>
    .header {
        background: #545c64;
        height: 60px;
        line-height: 60px;
    }
    .logo{
        font-size: 24px;
        margin: 0;
        line-height: 60px;
        color: #D3DCE6;
    }
</style>
