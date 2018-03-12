import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Provider from './app/provider/rnnProvider';
import Stores from './app/store/index';
import { reaction, autorun } from 'mobx';
import tabs from './app/contants/tabs';
import {
    registerScreens,
    registerScreenVisibilityListener
} from './app/events/register';


registerScreens(Stores, Provider);
registerScreenVisibilityListener();
export default class App{
	constructor(){
		let accountStore = Stores.accountStore;
		autorun(
			() => {
				this.startApp(accountStore.authorized);
			}
		);
	}

	startApp(status){
		if(status){
			this.startHome();
		}else{
			this.startLogin();
		}
	}

	startLogin(){
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

	startHome(){
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
}

