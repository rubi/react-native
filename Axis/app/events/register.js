import {
	Navigation,
	ScreenVisibilityListener
} from 'react-native-navigation';

import WelcomeScreen from '../screens/welcome/main';
import MenuScreen from '../screens/menu/main';
import LoginScreen from '../screens/login/main';
import UpcomingClassScreen from '../screens/upcomingClass/main';
import ScheduleScreen from '../screens/schedule/main';

//button
import NavigatorLeftButtonScreen from '../screens/common/buttons/navigatorLeftButton';

//lightbox
import NotificationScreen from '../screens/notification/main';

// register all screens and listen all events;

export function registerScreens() {
	Navigation.registerComponent('Axis.Welcome', () => WelcomeScreen);
	Navigation.registerComponent('Axis.Menu', () => MenuScreen);
	Navigation.registerComponent('Axis.Login', () => LoginScreen);
	Navigation.registerComponent('Axis.Menu.UpcomingClass', () => UpcomingClassScreen);
	Navigation.registerComponent('Axis.Menu.Schedule', () => ScheduleScreen);

	Navigation.registerComponent('Axis.Navigator.leftButton', () => NavigatorLeftButtonScreen);

	Navigation.registerComponent('Axis.LightBox.Notification', () => NotificationScreen);
}

export function registerScreenVisibilityListener() {
	new ScreenVisibilityListener({
		willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
		didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
		willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
		didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
	}).register();
}