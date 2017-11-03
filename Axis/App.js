import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {
    registerScreens,
    registerScreenVisibilityListener
} from './app/screens/registerScreen';


// screen related book keeping
registerScreens();
registerScreenVisibilityListener();

const tabs = [
	{
		label: 'Class',
		screen: 'example.T1',
		icon: require('./app/img/list.png'),
		title: 'Schedule Class',
		iconInsets: { // add this to change icon position (optional, iOS only).
			top: 6, // optional, default is 0.
			left: 0, // optional, default is 0.
			bottom: -6, // optional, default is 0.
			right: 0 // optional, default is 0.
		},
		navigatorStyle: {
			navBarTextFontSize: 15
		},
		navigatorButtons: {}
	},
	{
		label: 'Availability',
		screen: 'example.T2',
		icon: require('./app/img/swap.png'),
		title: 'Schedule Availability',
		iconInsets: { // add this to change icon position (optional, iOS only).
			top: 6, // optional, default is 0.
			left: 0, // optional, default is 0.
			bottom: -6, // optional, default is 0.
			right: 0 // optional, default is 0.
		},
		navigatorStyle: {
			navBarTextFontSize: 15
		},
		navigatorButtons: {}
	},
	{
		label: 'Notifications',
		screen: 'example.T2',
		icon: require('./app/img/transform.png'),
		title: 'Schedule Notifications',
		iconInsets: { // add this to change icon position (optional, iOS only).
			top: 6, // optional, default is 0.
			left: 0, // optional, default is 0.
			bottom: -6, // optional, default is 0.
			right: 0 // optional, default is 0.
		},
		navigatorStyle: {
			navBarTextFontSize: 15
		},
		navigatorButtons: {}
	}
];

/*if (Platform.OS === 'android') {
	tabs.push({
		label: 'Transitions',
		screen: 'example.Transitions',
		icon: require('./app/img/transform.png'),
		title: 'Navigation Transitions',
	});
}*/

// this will start our app
Navigation.startTabBasedApp({
	tabs,
	animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
	tabsStyle: {
		tabBarBackgroundColor: '#F8F9F9',
		tabBarButtonColor: '#2E4053',
		tabBarSelectedButtonColor: '#ff505c',
		tabFontFamily: 'BioRhyme-Bold',
	},
	appStyle: {
		tabBarBackgroundColor: '#F8F9F9',
		navBarButtonColor: '#ffffff',
		tabBarButtonColor: '#2E4053',
		navBarTextColor: '#ffffff',
		tabBarSelectedButtonColor: '#ff505c',
		navigationBarColor: '#1F618D',
		navBarBackgroundColor: '#1F618D',
		statusBarColor: '#002b4c',
		tabFontFamily: 'BioRhyme-Bold',
	}
});