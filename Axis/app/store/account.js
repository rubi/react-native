import { observable, action, computed } from 'mobx';

import { persist } from 'mobx-persist';
import Account from './model/account';

class Store {

	@persist('object', Account) @observable account = new Account;
	@persist @observable authorized = false;

	constructor(){

	}

	@action
	login = (username: string, password: string) => {
		return new Promise((resolve, reject) => {
			if (username === 'admin' && password === '123') {
				this.authorized = true;
				this.account = { username, password };
				resolve({ isSuccess: true });
			} else {
				reject({ isSuccess: false });
			}
		});
	}

	@action
	logout = () => {
		return new Promise((resolve, reject) => {
			this.authorized = false;
			this.account = { username: null, password: null};
			resolve();
		});
	}
};

export default new Store();