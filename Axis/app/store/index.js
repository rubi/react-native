import { AsyncStorage } from 'react-native';

import ClassDetail from '../screens/classDetail/store/main.store';
import Account from './account';
import Net from './network';

const stores = {
	classDetailStore: ClassDetail,
	accountStore: Account,
	netStore: Net
};

export default {
	...stores
};