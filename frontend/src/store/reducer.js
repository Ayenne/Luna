const initState = {
        token: localStorage.getItem('token'),
        reviews: [],
        query: '',
};

const reducer = (state = initState, action) => {
    if (action.type === "LOGIN") {
        return {
            ...state,
            token: action.payload
        }
    }
    else if (action.type === "LOGOUT") {
        return {
            ...state,
            token: null
        }
    }
    else if (action.type === "FETCH_REVIEWS") {
        return {
            ...state,
            reviews: action.payload
        }
    }
     else if (action.type === "SEARCH_REVIEWS") {
        return {
            ...state,
            query: action.payload
        }
    }
     return state;
};

export default reducer;
