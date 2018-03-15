import { observable, action } from 'mobx';

import Account from './model/account';
const Realm = require('realm');
const AccountSchema = {
	name: 'Account',
	properties: {
		authorized: {
			type: 'bool',
			default: false
		},
		username: {
			type: 'string',
			default: ''
		},
		password: {
			type: 'string',
			default: ''
		},
		isShowNotification: {
			type: 'bool',
			default: true
		}
	}
};

const AccountRealm = new Realm({schema: [AccountSchema]});
class Store {

	@observable account = {username: null, password:null};
	@observable authorized = false;
	@observable isShowNotification = true;

	constructor(){
		let Accounts = AccountRealm.objects('Account');
		if(!Accounts.length){
			AccountRealm.write(() => {
				AccountRealm.create('Account', {
					authorized: false,
					username: '',
					password: '',
					isShowNotification: true
				});
			});
		}else{
			this.authorized = Accounts[0].authorized;
			this.isShowNotification = Accounts[0].isShowNotification;
			this.account = {
				username: Accounts[0].username,
				password: Accounts[0].password
			};
		}

	}

	@action
	login = (username: string, password: string) => {
		return new Promise((resolve, reject) => {
			if (username === 'admin' && password === '123') {
				this.authorized = true;
				this.account = { username, password };
				AccountRealm.write(()=>{
					const data = AccountRealm.objects('Account');
					data[0].authorized = true;
					data[0].username = username;
					data[0].password = password;
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
				data[0].authorized = false;
				data[0].username = '';
				data[0].password = '';
				data[0].isShowNotification = true;
			});
			resolve();
		});
	}

	@action
	setNotification = ()=>{
		AccountRealm.write(()=>{
			const data = AccountRealm.objects('Account');
			data[0].isShowNotification = false;
		});
	}
};

export default new Store();