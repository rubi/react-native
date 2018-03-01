import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import {
    registerScreens,
    registerScreenVisibilityListener
} from './app/events/register';

registerScreens();
registerScreenVisibilityListener();

Navigation.startSingleScreenApp({
	screen: {
		screen: 'Axis.Welcome',
		title: 'Welcome',
		navigatorStyle: {
			navBarHidden: true, // make the nav bar hidden
			statusBarHidden: false, //make the status bar shown
		},
		navigatorButtons: {}
	},
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
	},
	passProps: {},
	animationType: 'slide-down'
});