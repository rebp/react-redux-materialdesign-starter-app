const initialState = {
    anchorEl: null
}

const navBar = (state = initialState, action) => {
    switch (action.type) {
        case "ClICK_NAVBAR_MENU":
            return { ...state, anchorEl: action.payload }
        case "CLOSE_NAVBAR_MENU":
            return { ...state, anchorEl: action.payload }
        default:
            return state;
    }
}

export default navBar;