import { combineReducers } from 'redux'

import sideNav from './sidenav_reducer'
import navBar from './navbar_reducer'

const rootReducer = combineReducers({ sideNav, navBar })

export default rootReducer;