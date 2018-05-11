
import * as Types from './mutations-type'
const mutations = {
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
            book.num = 1;
            state.carList.push(book);
        }
    },
    [Types.REMOVE_CAR](state, book) {
        let product = state.carList.find(item => item.bookId === book.bookId);
        if (product) {
            state.carList=state.carList.filter(item=>item.bookId!==book.bookId);
        }
    },
    [Types.UPDATA_CAR](state, newState) {
        state.carList = state.carList.map(item => {
            if (item.bookId === newState.row.bookId) {
                return newState.row;
            }
            return item;
        })
    },
    [Types.DEL_SELECTED](state, books) {
        if (books.length > 0) {
            state.carList = state.carList.filter(item => !books.find(book => book.bookId === item.bookId))
        }
    },
    [Types.CLEAR_CAR](state) {
        state.carList = [];
    },
    [Types.IS_LOGIN](state,newState){
        state.login = newState;
    }
}
export default mutations;