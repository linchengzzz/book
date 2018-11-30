<template>
    <div>
        <template>
            <el-button type="warning" v-if="!isCollect(book)" round @click="addCollect(book)">加入收藏</el-button>
            <el-button type="success" v-else round>已加入收藏</el-button>
        </template>
        <template>
            <el-button type="warning" v-if="!isCar(book)" round @click="addCar(book)">加入购物车</el-button>
            <el-button type="success" v-else round>已加入购物车</el-button>
        </template>
    </div>
</template>

<script>
    import * as Types from '../store/mutations-type'

    export default {
        props: ['book'],
        data() {
            return {};
        },
        methods: {
            addCollect(book) {
                this.$store.commit(Types.ADD_COLLECT, book);
            },
            addCar(book) {
                this.$store.commit(Types.ADD_CAR, book);
            },
            isCollect(book) {
                return this.$store.state.collectList.find(item => item.bookId === book.bookId)
            },
            isCar(book) {
                return this.$store.state.carList.find(item => item.bookId === book.bookId)
            }
        }
    }

</script>

<style scoped>
</style>
