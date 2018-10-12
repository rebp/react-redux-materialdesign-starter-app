const initialState = {
    left: false,
    sideNavItemIndex: 0
}

const sideNav = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_SIDENAV":
            return { ...state, left: action.payload }
        case "CHANGE_SIDENAV_INDEX":
            return { ...state, sideNavItemIndex: action.payload }
        default:
            return state;
    }
}

export default sideNav;