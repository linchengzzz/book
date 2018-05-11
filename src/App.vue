<template>
    <div class="login" v-if="!show">
        <my-login></my-login>
    </div>
    <div v-else>
        <my-header></my-header>
        <my-body></my-body>
    </div>
</template>

<script>
    import myHeader from './base/header.vue'
    import myBody from './base/body.vue'
    import myLogin from './base/login.vue';
    import {isLogin} from './common';
    export default {
        data() {
            return {
            };
        },
        methods: {

        },
        components: {
            myHeader,
            myBody,
            myLogin
        },
        created() {
        },
        computed: {
            show:function(){
                return this.$store.state.login;
            }
        }
    };

</script>

<style lang="less">
    * {
        margin: 0;
        padding: 0;
    }
    html,body{
        height: 100%;

    }
    i{
        font-style: normal;
    }
    ul,
    li {
        list-style: none;
    }
    a {
        text-decoration: none;
    }
    .login{
        height: 100%;
    }
    .el-table {
        th {
            text-align: center ;
        }
        td{
            text-align: center;
        }
    }

</style>
