import { NetInfo } from 'react-native';
import { observable, action } from 'mobx';
import {Navigation} from 'react-native-navigation';

class Store {
	@observable isConnected =  true;

	constructor(){
		NetInfo.isConnected.fetch().then().done((data) => {
			this.isConnected = data;
			NetInfo.isConnected.addEventListener('change', this.dispatchConnectStatus.bind(this));
		});
	}

	dispatchConnectStatus(isConnected){
		this.isConnected = isConnected;
	}
}

export default new Store();