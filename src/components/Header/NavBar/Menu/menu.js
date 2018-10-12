import React, { Component } from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../../../../actions';

class NavBarMenu extends Component {

	handleClick = event => {
		this.props.clickNavbarMenu(event.currentTarget)
	};

	handleClose = () => {
		this.props.closeNavbarMenu()
	};

	render() {
		
		const { anchorEl } = this.props;

		return (
			<div>
				<IconButton
					aria-owns={anchorEl ? 'menu' : null}
					aria-haspopup="true"
					onClick={this.handleClick}
					color="inherit"
				>
					<MoreVertIcon />
				</IconButton>
				<Menu
					id="menu"
					anchorEl={anchorEl}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					open={Boolean(anchorEl)}
					onClose={this.handleClose}
				>
					<MenuItem onClick={this.handleClose}>Settings</MenuItem>
					<MenuItem onClick={this.handleClose}>Login</MenuItem>
				</Menu>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		anchorEl: state.navBar.anchorEl
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(actions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBarMenu);