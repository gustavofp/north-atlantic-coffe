import ItemList from "../containers/ItemList/ItemList";

export const FETCH_LIST= 'FETCH_LIST';
export const fetchList = () => (dispatch) => {
    dispatch({
        type: FETCH_LIST,
        payload: [
            { id: 1, title: 'American Wagyu', price: 29.99, img: 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/38/2048x1365/gallery-1506010658-beef-tenderloin-delish.jpg?resize=768:*' },
            { id: 2, title: 'Coffe', price: 5.00, img: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=350' },
            { id: 3, title: 'Bread', price: 7.99, img: 'https://www.browneyedbaker.com/wp-content/uploads/2016/05/white-bread-51-600-600x400.jpg' },
            { id: 4, title: 'Mocaccino', price: 6.00, img: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/7e/b5/cc/mocaccino.jpg' },
            { id: 5, title: 'Ice Cream', price: 3.00, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgBcu070ET9ZrEWidq6AP2Ob2BYYmi8w8C4TQS3u0ATmCUNnIDNQ' }
        ]
    });
}

export const ADD_ITEM = 'ADD_ITEM';
export const addItem = (item, addedItens) => (dispatch) => {
    addedItens.push(item);
    dispatch({
        type: ADD_ITEM,
        payload: addedItens
    })
}

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const removeItem = (id, addedItens) => (dispatch) => {
    dispatch({
        type: REMOVE_ITEM,
        payload: addedItens.filter(e => e.id !== id)
    })
}

export const SEARCH_ITEM = 'SEARCH_ITEM';
export const searchItem = (string, originalList) => (dispatch) => {
    const filtered = originalList.filter(i => {
        const title = i.title.toLowerCase();

        if(title.includes(string.toLowerCase())) return i;
    })
    
    dispatch({
        type: SEARCH_ITEM,
        payload: filtered
    })
}