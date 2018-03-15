import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Dimensions,
	FlatList,
	Image,
	TouchableHighlight
} from 'react-native';
import NetworkHint from '../../common/network/hint/main';
import { observer } from 'mobx-react';

import { styles } from './main.style';
const {
	width,
	height
} = Dimensions.get('window');

@observer
export default class ScheduleScreen extends NetworkHint {

	constructor(props){
		super(props);
		this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
	}


	onNavigatorEvent(event) {
		if (event.type == 'DeepLink') {
			if(event.link === 'toggle/draw'){
				this.toggleDrawer();
			}
			if(event.link === 'refresh/screen'){
				this.props.navigator.showInAppNotification({
					screen: 'Axis.Message.Network',
				});
			}
		}
	}

	componentDidMount(){

	}

	jumpToClassDetail(){
		this.props.navigator.push({
			screen: 'Axis.Class.Detail',
			title: 'Class Detail'
		});
	}

	render() {
		return (
			<View style={styles.container}>
				{super.render()}
				<View style={{flex: 1, justifyContent: 'flex-start'}}>
					<TouchableHighlight
						onPress={this.jumpToClassDetail.bind(this)}
						underlayColor={'rgba(0, 0, 0, 0.054)'}
					>
					<Image style={{width: width,height: height}}
						   source={require('../../../img/screenshoot/schedule.png')}/>
					</TouchableHighlight>
				</View>
			</View>
		)
	}
}