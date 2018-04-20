
import * as Types from './mutations-type'
const mustaions = {
    [Types.ADD_COLLECT](state, book) {
        let product = state.collectList.find(item => item.bookId === book.bookId);
        if (!product) {
            state.collectList.push(book);
        }
    },
    [Types.REMOVE_COLLECT](state, book) {
        let product = state.collectList.find(item => item.bookId === book.bookId);
        if (product) {
            state.collectList=state.collectList.filter(item=>item.bookId!==book.bookId);
        }
    },
    [Types.ADD_CAR](state, book) {
        let product = state.carList.find(item => item.bookId === book.bookId);
        if (!product) {
            state.carList.push(book);
        }
    },
    [Types.REMOVE_CAR](state, book) {
        let product = state.carList.find(item => item.bookId === book.bookId);
        if (product) {
            state.carList=state.carList.filter(item=>item.bookId!==book.bookId);
        }
    }
}
export default mustaions;