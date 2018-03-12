import { observable, action } from 'mobx';
import Fetch from '../../../common/fetch';

class Store {
	@observable slots = [{
		title: 'I am PL'
	}];
	@observable classDetail = null;

	@action fetchClassDetail(){
		return Fetch('http://172.26.19.214:3000/api/detail').then((data)=>{
			this.classDetail = data.data;
		})
	}

};

export default new Store();