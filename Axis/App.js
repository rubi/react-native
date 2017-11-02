import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {
    registerScreens,
    registerScreenVisibilityListener
} from './app/screens/registerScreen';


// screen related book keeping
registerScreens();
registerScreenVisibilityListener();

const tabs = [{
	label: 'Class',
	screen: 'example.T1',
	icon: require('./app/img/list.png'),
	title: 'Schedule Class',
}, {
	label: 'Notifications',
	screen: 'example.T2',
	icon: require('./app/img/swap.png'),
	title: 'Schedule Availability',
}];

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
		tabBarBackgroundColor: '#003a66',
		tabBarButtonColor: '#ffffff',
		tabBarSelectedButtonColor: '#ff505c',
		tabFontFamily: 'BioRhyme-Bold',
	},
	appStyle: {
		tabBarBackgroundColor: '#003a66',
		navBarButtonColor: '#ffffff',
		tabBarButtonColor: '#ffffff',
		navBarTextColor: '#ffffff',
		tabBarSelectedButtonColor: '#ff505c',
		navigationBarColor: '#003a66',
		navBarBackgroundColor: '#003a66',
		statusBarColor: '#002b4c',
		tabFontFamily: 'BioRhyme-Bold',
	}
});