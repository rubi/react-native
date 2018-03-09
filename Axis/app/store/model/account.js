
import { observable, computed } from 'mobx';
import { persist } from 'mobx-persist';

class Account {
	@persist @observable username = null;
	@persist @observable password = null;
}

export default Account;
