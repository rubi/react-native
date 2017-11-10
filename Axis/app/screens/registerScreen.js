import {Navigation, ScreenVisibilityListener} from 'react-native-navigation';

import T1 from '../components/t1';
import T2 from '../components/t2';
import T3 from '../components/t3';
import Menu from '../components/menu';


export function registerScreens() {
	Navigation.registerComponent('example.T1', () => T1);
	Navigation.registerComponent('example.T2', () => T2);
	Navigation.registerComponent('example.T3', () => T3);
}

export function registerScreenVisibilityListener() {
	new ScreenVisibilityListener({
		willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
		didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
		willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
		didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
	}).register();
}