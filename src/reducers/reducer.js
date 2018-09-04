import { FETCH_LIST, ADD_ITEM, REMOVE_ITEM, SEARCH_ITEM } from '../actions/actions';

const INITIAL_STATE = {
    itemList: [],
    originalList: [],
    orderList: []
}


export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_LIST:
            return { ...state, itemList: action.payload, originalList: action.payload }
        case ADD_ITEM:
            return { ...state, orderList: action.payload }
        case REMOVE_ITEM:
            return { ...state, orderList: action.payload }
        case SEARCH_ITEM:
            return { ...state, itemList: action.payload }
        default: 
            return { ...state }
    }
};