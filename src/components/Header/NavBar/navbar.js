import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import NavBarMenu from './Menu/menu'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../../../actions';


const styles = {
	root: {
		flexGrow: 1,
	},
	grow: {
		flexGrow: 1,
	  },
	menuButton: {
		marginLeft: -18,
		marginRight: 10,
	},
};

class NavBar extends Component {

	static propTypes = {
		classes: PropTypes.object.isRequired,
	}

	toggleDrawer = status => () => {
		this.props.toggleSideNav(status)
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<AppBar position="fixed">
					<Toolbar variant="dense">
						<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
							<MenuIcon onClick={this.toggleDrawer(true)} />
						</IconButton>
						<Typography color="inherit" variant="h6" className={classes.grow}>App</Typography>
						<NavBarMenu />
					</Toolbar>
				</AppBar>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(actions, dispatch)
}


export default withStyles(styles)(connect(null, mapDispatchToProps)(NavBar));