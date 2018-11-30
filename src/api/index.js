import axios from "axios";
import qs from 'qs';
import Vue from "vue";
const Axios = axios.create({
    baseURL: 'http://192.168.1.81:8010',
    headers: {
        'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
});
Vue.use(Axios);


Axios.interceptors.response.use(response => response.data)

//获取所有的书籍
export let getBooks = () => {
    return Axios.get('/books')
}
//获取一本书
export let getDetail = (id) => {
    return Axios.get(`/detail/?id=${id}`)
}
//管理图书--获取图书
export let getManageBooks = (type, content) => {
    return Axios.get(`/manage/getBooks?type=${type}&content=${content}`)
}
//管理图书--删除图书
export let delManageBook = (id) => {
    return Axios.get(`/manage/delBook?id=${id}`)
}
//管理图书--获取图书
export let getManageBook = (id) => {
    return Axios.get(`/manage/getBook?id=${id}`);
}
//管理图书--添加/修改图书
export let setManageBook = (book) => {
    return Axios.post('/manage/setBook', qs.stringify({
        "book": JSON.stringify(book)
    }));
}