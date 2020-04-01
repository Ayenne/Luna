const initState = {
    token: localStorage.getItem('token'),
}

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
}

export default reducer;
