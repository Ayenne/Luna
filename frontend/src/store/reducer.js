const initState = {
    token: localStorage.getItem('token')
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
    else if (action.type === "GETBESTRESTAURANTS")
    {
        return {
            ...state,
            bestRestaurants: [action.payload]
        }
    }
    else {
        return state;
    }

}

export default reducer;
