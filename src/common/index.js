import * as User from './user';
let getHeight = function () {
    let WinH = document.documentElement.clientHeight;
    return WinH;
}
let formatPrice = function (value) {
    value = parseFloat(value).toFixed(2);
    return "￥" + value;
}
let isLogin = function(){
    let username = window.localStorage[User.USERNAME]
    let password = window.localStorage[User.PASSWORD]
    if(username==='custom'){
        return 'custom'
    }else if(username==='admin'&&password==='0103'){
        return 'admin'
    }else{
        return false;
    }
}
export {
    getHeight,
    formatPrice,
    isLogin
}
