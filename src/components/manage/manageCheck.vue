<template>
    <div style="width:100%">
        <ManageHeader>查看图书</ManageHeader>
        <ManageSearch></ManageSearch>
        <el-main>
        </el-main>
    </div>
</template>
<script>
import ManageHeader from './manageHeader';
import ManageSearch from './manageSearch.vue';
    export default {
        data() {
            return {
            };
        },
        created() {
        },
        methods: {
        },
        watch: {
        },
        components: {
            ManageHeader,
            ManageSearch
        },
        computed: {
        }
    };

</script>

<style scoped lang="less">
</style>
