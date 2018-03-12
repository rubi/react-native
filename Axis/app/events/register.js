import {
	Navigation,
	ScreenVisibilityListener
} from 'react-native-navigation';
import { Provider } from 'mobx-react';

import WelcomeScreen from '../screens/welcome/view/main';
import MenuScreen from '../screens/menu/view/main';
import LoginScreen from '../screens/login/view/main';
import UpcomingClassScreen from '../screens/upcomingClass/view/main';
import ScheduleScreen from '../screens/schedule/view/main';
import ClassDetailScreen from '../screens/classDetail/view/main';
import NetworkNotificationScreen from '../screens/common/network/notification/main';
import NetworkHintScreen from '../screens/common/network/hint/main';

//button
import NavBarLeftButtonScreen from '../screens/common/buttons/backDrawer';
import NavBarUpdateButtonScreen from '../screens/common/buttons/updateScreen';
import NavBarLegendButtonScreen from '../screens/upcomingClass/navBar/rightButton/legendTip';
import NavBarCreateButtonScreen from '../screens/upcomingClass/navBar/rightButton/createClass';

//lightbox
import NotificationScreen from '../screens/notification/view/main';

// register all screens and listen all events;

export function registerScreens(stores: {}, provider: {}) {
	Navigation.registerComponent('Axis.Welcome', () => WelcomeScreen);
	Navigation.registerComponent('Axis.Menu', () => MenuScreen, stores, provider);
	Navigation.registerComponent('Axis.Login', () => LoginScreen, stores, provider);
	Navigation.registerComponent('Axis.Menu.UpcomingClass', () => UpcomingClassScreen, stores, provider);
	Navigation.registerComponent('Axis.Menu.Schedule', () => ScheduleScreen, stores, provider);
	Navigation.registerComponent('Axis.Class.Detail', () => ClassDetailScreen, stores, provider);
	Navigation.registerComponent('Axis.Message.Network', () => NetworkNotificationScreen, stores, provider);
	Navigation.registerComponent('Axis.Hint.Network', () => NetworkHintScreen, stores, provider);

	Navigation.registerComponent('Axis.NavBar.Common.BackDrawer', () => NavBarLeftButtonScreen);
	Navigation.registerComponent('Axis.NavBar.Common.UpdateButton', () => NavBarUpdateButtonScreen);
	Navigation.registerComponent('Axis.NavBar.UpcomingClass.LegendButton', () => NavBarLegendButtonScreen);
	Navigation.registerComponent('Axis.NavBar.UpcomingClass.CreateButton', () => NavBarCreateButtonScreen);

	Navigation.registerComponent('Axis.LightBox.Notification', () => NotificationScreen);
}

export function registerScreenVisibilityListener() {
	new ScreenVisibilityListener(
		{
			willAppear: ({screen}) =>{
				console.log(`Displaying screen ${screen}`)
			},
			didAppear: ({screen, startTime, endTime, commandType}) => {
				console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`)
			},
			willDisappear: ({screen}) => {
				console.log(`Screen will disappear ${screen}`)
			},
			didDisappear: ({screen}) => {
				console.log(`Screen disappeared ${screen}`)
			}
		}
	).register();
}