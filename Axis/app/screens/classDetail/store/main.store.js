import { observable, action } from 'mobx';

class Store {
	@observable slots = [{
		title: 'I am PL'
	}];
};

export default new Store();