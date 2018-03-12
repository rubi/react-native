import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity
} from 'react-native';

import { observer, inject } from 'mobx-react';

@inject('classDetailStore')
@observer
export default class ClassDetailScreen extends Component  {
	constructor(props){
		super(props);
	}

	componentWillMount(){
		this.props.classDetailStore.fetchClassDetail();
	}

	render() {
		const { classDetailStore } = this.props;
		const detail = classDetailStore.classDetail;
		if(detail){
			return (
				<View>
					<Text>{detail[0].serviceTypeCode}</Text>
					<Text>{detail[0].serviceSubTypeCode}</Text>
					<Text>{detail[0].classStatusCode}</Text>
					<Text>{detail[0].sourceTypeCode}</Text>
					<Text>{detail[0].startTime}</Text>
					<Text>{detail[0].endTime}</Text>
					<Text>{detail[0].evcServerCode}</Text>
				</View>
			)
		}else{
			return null;
		}

	}
}