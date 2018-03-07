import { observable, action } from 'mobx';

class Store {
	@observable todos = [{
		title: 'I am PL',
		done: false,
	}];
};

export default new Store;