const API_URL = 'http://localhost:3000/api/books';

const FETCH__BEGIN = 'books/FETCH__BEGIN';
const FETCH__SUCCESS = 'books/FETCH__SUCCESS';
const FETCH__FAIL = 'books/FETCH__FAIL';

const fetchBegin = () => ({
    type: FETCH__BEGIN
});

const fetchSuccess = data => ({
    type: FETCH__SUCCESS,
    data
});

const fetchFail = error => ({
    type: FETCH__FAIL,
    error
});

export const fetchBooks = () => dispatch => {
    dispatch(fetchBegin());
    return fetch(API_URL)
        .then(response => response.json())
        .then(data => dispatch(fetchSuccess(data)))
        .catch(error => dispatch(fetchFail(error)))
};

const initialState = {
    data: null,
    fetching: false,
    error: null,
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case FETCH__BEGIN:
            return {
                ...state,
                fetching: true,
                error: null
            };
        case FETCH__SUCCESS:
            return {
                ...state,
                fetching: false,
                data: action.data
            };
        case FETCH__FAIL:
            return {
                fetching: false,
                error: action.error
            };
        default:
            return state
    }
}