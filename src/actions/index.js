export const toggleSideNav = (status) => {
	return { type: "TOGGLE_SIDENAV", payload: status }
}

export const changeSideNavIndex = (index) => {
	return { type: "CHANGE_SIDENAV_INDEX", payload: index }
}

export const clickNavbarMenu = (target) => {
	return { type: "ClICK_NAVBAR_MENU", payload: target }
}

export const closeNavbarMenu = () => {
	return { type: "CLOSE_NAVBAR_MENU", payload: null }
}