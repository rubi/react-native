import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import { styles } from './main.style';
import { Button } from 'react-native-elements';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import { observer, inject } from 'mobx-react';
import NetworkHint from '../common/network/hint/main';

@inject('netStore')
@observer
export default class UpcomingClassScreen extends React.Component {

	constructor(props){
		super(props)
		this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
	}

	toggleDrawer(){
		this.props.navigator.toggleDrawer({
			side: 'left',
			animated: true
		});
	}

	onNavigatorEvent(event) {
		if (event.type == 'DeepLink') {
			if(event.link === 'toggle/draw'){
				this.toggleDrawer();
			}
		}
	}

	componentWillMount() {

	}

	componentWillUnmount() {

	}

	jumpToClassDetail(){
		this.props.navigator.push({
			screen: 'Axis.Class.Detail',
			title: 'Class Detail'
		});
	}

	render() {
		let { netStore } = this.props;
		return (
			<View style={styles.container}>
				<NetworkHint net={netStore}></NetworkHint>
				<View style={{flex: 1, justifyContent: 'center'}}>
					<Button
						buttonStyle={{backgroundColor: "#000000"}}
						title="I am PL"
						onPress={this.jumpToClassDetail.bind(this)}
					/>
				</View>
			</View>
		);
	}
}