let getHeight = function () {
    let WinH = document.documentElement.clientHeight;
    return WinH;
}
let formatPrice = function (value) {
    value = parseFloat(value).toFixed(2);
    return "￥" + value;
}
export {
    getHeight,
    formatPrice
}
