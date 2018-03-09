import { observable, action } from 'mobx';

import Account from './model/account';
const Realm = require('realm');
const AccountSchema = {
	name: 'Account',
	properties: {
		authorized: 'string',
		account: 'string'
	}
};

let AccountRealm = new Realm({schema: [AccountSchema]});
debugger;
let world = AccountRealm.write(() => {
	AccountRealm.create('Account', {authorized:'123', account:'hello'});
});


class Store {

	@observable account = {username: null, password:null};
	@observable authorized = false;

	constructor({authorized, account}){
		debugger;
		this.authorized = authorized;
		this.account = new Account(account);
	}

	@action
	login = (username: string, password: string) => {
		return new Promise((resolve, reject) => {
			if (username === 'admin' && password === '123') {
				this.authorized = true;
				this.account = { username, password };
				AccountRealm.write(()=>{
					const data = AccountRealm.objects('Account');
					data.authorized = true;
					data.account = Object.assign({}, this.account);
				});
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
			AccountRealm.write(()=>{
				const data = AccountRealm.objects('Account');
				data.authorized = false;
				data.account = Object.assign({}, this.account);
			});
			resolve();
		});
	}
};

export default new Store(AccountRealm.objects('Account'));