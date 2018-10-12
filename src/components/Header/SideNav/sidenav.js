import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles, Drawer, List, ListItem, ListItemText, Divider } from '@material-ui/core';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './../../../actions';

const styles = {
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
	bgColor: {
		backgroundColor: "#ecf0f1"
	}
};

class SideNav extends Component {

	static propTypes = {
		classes: PropTypes.object.isRequired,
	}

	toggleDrawer = status => () => {
		this.props.toggleSideNav(status)
	};

	handleListItems = (classes) => {

		const listItems = [
			{
				id: 0,
				content: "Home",
				link: "/"
			},
			{
				id: 1,
				content: "About",
				link: "/about"
			},
			{
				id: 2,
				content: "Contact",
				link: "/contact"
			},
		]

		const items = listItems.map(item => {
			return (
				<ListItem key={item.content} button onClick={() => this.props.changeSideNavIndex(item.id)} className={item.id === this.props.itemIndex ? classes.bgColor : null}>
					<Link to={item.link}>
						<ListItemText disableTypography={true} primary={item.content} />
					</Link>
				</ListItem>
			)
		})

		return (
			<List>
				<ListItem>
					<ListItemText primary="SideNav" secondary="v1.0.0" />
				</ListItem>
				<Divider />
				{items}
			</List>
		)
	}

	render() {

		const { classes } = this.props;

		return (
			<div>
				<Drawer open={this.props.left} onClose={this.toggleDrawer(false)}>
					<div
						onClick={this.toggleDrawer(false)}
						onKeyDown={this.toggleDrawer(false)}
					>
						<div className={classes.list}>
							{this.handleListItems(classes)}
						</div>
					</div>
				</Drawer>

			</div>
		);
	}
}


const mapStateToProps = state => {
	return {
		left: state.sideNav.left,
		itemIndex: state.sideNav.sideNavItemIndex
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(actions, dispatch)
}


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SideNav));