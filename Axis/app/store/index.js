import { AsyncStorage } from 'react-native';
import { create } from 'mobx-persist';

import ClassDetail from '../screens/classDetail/main.store';
import Account from './account';

const hydrate = create({ storage: AsyncStorage });
const stores = {
	classDetailStore: ClassDetail,
	accountStore: Account
};

(async ()=>{
	debugger;
	await hydrate('Account', stores.accountStore);
})();

export default {
	...stores
};