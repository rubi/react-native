import { AsyncStorage } from 'react-native';

import ClassDetail from '../screens/classDetail/main.store';
import Account from './account';

const stores = {
	classDetailStore: ClassDetail,
	accountStore: Account
};

export default {
	...stores
};