import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import {
    registerScreens,
    registerScreenVisibilityListener
} from './app/events/register';
import postal from 'postal';

const tabs = [
	{
		label: 'UpcomingClass',
		screen: 'Axis.Menu.UpcomingClass',
		icon: require('./app/img/list.png'),
		title: 'Upcoming Class',
		iconInsets: {
			top: 6,
			left: 0,
			bottom: -6,
			right: 0
		},
		navigatorStyle: {
			navBarTextFontSize: 18
		},
		navigatorButtons: {
			leftButtons: [
				{
					id: 'sideMenu',
					component: 'Axis.NavBar.Common.BackDrawer',
					passProps: {},
					buttonColor: '#000000'
				}
			],
			rightButtons: [
				{
					id: 'updateButton',
					component: 'Axis.NavBar.Common.UpdateButton',
					passProps: {},
					buttonColor: '#000000'
				}
			]
		}
	},
	{
		label: 'Schedule',
		screen: 'Axis.Menu.Schedule',
		icon: require('./app/img/swap.png'),
		title: 'Schedule',
		iconInsets: {
			top: 6,
			left: 0,
			bottom: -6,
			right: 0
		},
		navigatorStyle: {
			navBarTextFontSize: 18
		},
		navigatorButtons: {
			leftButtons: [
				{
					id: 'sideMenu',
					component: 'Axis.NavBar.Common.BackDrawer',
					passProps: {},
					buttonColor: '#000000'
				}
			],
			rightButtons: [
				{
					id: 'createButton',
					component: 'Axis.NavBar.UpcomingClass.CreateButton',
					passProps: {},
					buttonColor: '#000000'
				},
				{
					id: 'legendButton',
					component: 'Axis.NavBar.UpcomingClass.LegendButton',
					passProps: {},
					buttonColor: '#000000'
				},
				{
					id: 'updateButton',
					component: 'Axis.NavBar.Common.UpdateButton',
					passProps: {},
					buttonColor: '#000000'
				}
			]
		}
	}
];
function initAppConfig(){
	registerScreens();
	registerScreenVisibilityListener();
	const loginStatus = getLoginStatus();
	initPostal();
	switchLoginOrHome(false);
}

function switchLoginOrHome(status){
	if(status){
		startHome();
	}else{
		startLogin();
	}
}
function initPostal(){
	let loginStatus = postal.channel('loginStatus');
	loginStatus.subscribe('login.status',(data)=>{
		if(data.isSuccess){
			startHome();
		}
	});
}

function getLoginStatus(){
	return false;
}

function startLogin(){
	Navigation.startSingleScreenApp(Object.assign({},{
		screen: {
			screen: 'Axis.Login',
			title: 'Login',
			navigatorStyle: {
				navBarHidden: true, // make the nav bar hidden
				statusBarHidden: false, //make the status bar shown
			},
			navigatorButtons: {}
		}
	}));
}

function startHome(){
	Navigation.startTabBasedApp(Object.assign({},{
		tabs,
		tabsStyle: {

		},
		appStyle: {
			tabBarHidden: true
		},
		animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
		drawer: {
			left: {
				screen: 'Axis.Menu',
				passProps: {},
				disableOpenGesture: false,
				fixedWidth: 500
			},

			style: {
				// ( iOS only )
				drawerShadow: true,
				contentOverlayColor: 'rgba(0,0,0,0.25)',
				leftDrawerWidth: 50,
				rightDrawerWidth: 50
			},
			type: 'MMDrawer',
			animationType: 'door',
			disableOpenGesture: false
		}
	}));
}

initAppConfig();




