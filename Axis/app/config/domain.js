import {
	Platform
} from 'react-native';

let getDomain = ()=>{
	if(Platform.OS === 'android'){
		return 'http:// 172.26.19.214:3000';
	}else{
		return 'http://localhost:3000';
	}
}
export {
	getDomain
}