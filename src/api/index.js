import Axios from "axios";
// import Vue from "vue";

// Vue.use(Axios);
Axios.defaults.baseURL = 'http://localhost:8010';

Axios.interceptors.response.use(response => response.data)
// Axios.interceptors.request.use(config => JSON.stringify(config))

//获取所有的书籍
export let getBooks = () => {
    return Axios.get('/books')
}
//获取一本书
export let getDetail = (id) => {
    return Axios.get('/detail/?id='+id)
}
//管理图书--获取图书
export let getManageBooks = (type,content) =>{
    return Axios.get(`/manage/getBooks?type=${type}&content=${content}`)
}