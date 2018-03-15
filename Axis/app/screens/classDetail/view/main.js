import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	Image,
	Dimensions
} from 'react-native';

import { observer, inject } from 'mobx-react';
import NetworkHint from '../../common/network/hint/main';
const {
	width,
	height
} = Dimensions.get('window');

@inject('classDetailStore')
@observer
export default class ClassDetailScreen extends NetworkHint  {
	constructor(props){
		super(props);
	}

	componentWillMount(){
		//this.props.classDetailStore.fetchClassDetail();
	}

	render() {
		const { classDetailStore } = this.props;
		const detail = classDetailStore.classDetail;
		return (
			<View style={{flex: 1, justifyContent: 'flex-start'}}>
				{super.render()}
				<View>
					<Image style={{width: width,height: height-100}}
						   source={require('../../../img/screenshoot/class-detail.png')}/>
				</View>
			</View>
		);
	}
}