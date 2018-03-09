
import { observable, computed } from 'mobx';

class Account {
	@observable username = null;
	@observable password = null;

	constructor(){

	}
}

export default Account;
