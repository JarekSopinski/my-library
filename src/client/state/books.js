const API_URL = 'http://localhost:8080/api/books';

const FETCH_BEGIN = 'books/FETCH_BEGIN';
const FETCH_GET_SUCCESS = 'books/FETCH_GET_SUCCESS';
const FETCH_POST_SUCCESS = 'books/FETCH_POST_SUCCESS';
const FETCH_PUT_SUCCESS = 'books/FETCH_PUT_SUCCESS';
const FETCH_DELETE_SUCCESS = 'books/FETCH_DELETE_SUCCESS';
const FETCH_FAIL = 'books/FETCH_FAIL';

const initialState = {
    data: null,
    fetching: false,
    error: null,
};

const fetchBegin = () => ({
    type: FETCH_BEGIN
});

const fetchGetSuccess = data => ({
    type: FETCH_GET_SUCCESS,
    data
});

const fetchPostSuccess = data => ({
    type: FETCH_POST_SUCCESS,
    data
});

const fetchPutSuccess = data => ({
    type: FETCH_PUT_SUCCESS,
    data
});

const fetchDeleteSuccess = data => ({
    type: FETCH_DELETE_SUCCESS,
    data
});

const fetchFail = error => ({
    type: FETCH_FAIL,
    error
});

export const getAllBooks = () => dispatch => {
    dispatch(fetchBegin());
    return fetch(API_URL)
        .then(response => response.json())
        .then(data => dispatch(fetchGetSuccess(data)))
        .catch(error => dispatch(fetchFail(error)))
};

export const postBook = newBookData => dispatch => {
    dispatch(fetchBegin());
    return fetch(API_URL, {
        body: JSON.stringify(newBookData),
        method: 'POST',
        headers: {'content-type': 'application/json'}
      })
        .then(response => response.json())
        .then(data => dispatch(fetchPostSuccess(data)))
        .catch(error => dispatch(fetchFail(error)))
};

export const editBook = (editedBookData, bookID) => dispatch => {
    dispatch(fetchBegin());
    return fetch(`${API_URL}/${bookID}`, {
        body: JSON.stringify(editedBookData),
        method: 'PUT',
        headers: {'content-type': 'application/json'}
      })
        .then(response => response.json())
        .then(data => dispatch(fetchPutSuccess(data)))
        .catch(error => dispatch(fetchFail(error)))
};

export const deleteBook = bookID => dispatch => {
    dispatch(fetchBegin());
    return fetch(`${API_URL}/${bookID}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(data => dispatch(fetchDeleteSuccess(data)))
        .catch(error => dispatch(fetchFail(error)))
};

export default (state = initialState, action = {}) => {

    let updatedData;

    switch (action.type) {
        case FETCH_BEGIN:
            return {
                ...state,
                fetching: true,
                error: null
            };
        case FETCH_FAIL:
            return {
                fetching: false,
                error: action.error,
            };
        case FETCH_GET_SUCCESS:
            return {
                ...state,
                fetching: false,
                data: action.data
            };
        case FETCH_POST_SUCCESS:
            updatedData = state.data;
            updatedData.push(action.data);
            return {
                ...state,
                fetching: false,
                data: updatedData
            };
        case FETCH_PUT_SUCCESS:
            updatedData = state.data.filter(book => book._id !== action.data._id);
            updatedData.push(action.data);
            return {
                ...state,
                fetching: false,
                data: updatedData
            };
        case FETCH_DELETE_SUCCESS:
            return {
                ...state,
                fetching: false,
                data: state.data.filter(book => book._id !== action.data._id)
            };
        default:
            return state
    }
}