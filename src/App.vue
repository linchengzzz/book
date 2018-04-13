<template>
    <div>
        <my-header></my-header>
        <my-body></my-body>
    </div>
</template>

<script>
    import myHeader  from './base/header.vue'
    import myBody from './base/body.vue'
    export default {
        data() {
            return {

            };
        },
        methods: {

        },
        components: {
            myHeader,
            myBody
        },
        created () {
           window.location.hash='/home' 
        },
        computed: {

        }
    };

</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
    }
    ul,li{
        list-style: none;
    }

</style>
