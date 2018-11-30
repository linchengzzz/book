<template>
    <div style="width:100%">
        <el-header style="font-size:24px">
            <slot></slot>
        </el-header>
    </div>
</template>

<script>
    export default {
        data() {
            return { };
        },
        created() { },
        methods: { },
        watch: { },
        components: { },
        computed: { },
    };

</script>

<style scoped lang="less">
   .el-header {
        background-color: #b3c0d1;
        color: #333;
        line-height: 60px;
}
</style>
