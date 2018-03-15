import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableHighlight,
	Image,
	Dimensions,
	//Button
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import { styles } from './main.style';
import { Button } from 'react-native-elements';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { observer, inject } from 'mobx-react';
import NetworkHint from '../../common/network/hint/main';
const {
	width,
	height
} = Dimensions.get('window');

@inject('accountStore')
@observer
export default class UpcomingClassScreen extends NetworkHint {

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

		}
	}

	componentDidMount(){
		const { accountStore } = this.props;
		if(accountStore.isShowNotification){
			this.showNotificationsLightBox();
		}
	}

	showNotificationsLightBox(){
		this.props.navigator.showLightBox({
			screen: 'Axis.LightBox.Notification',
			passProps: {
				title: '"EF AXIS" would like to send you notifications',
				content: 'Notifications may include alerts. sounds, and icon badges. These can be configured in settings.',
				onClose: this.dismissNotificationsLightBox.bind(this),
			},
			style: {
				backgroundBlur: 'dark',
				backgroundColor: 'rgba(0, 0, 0, 0.7)',
				tapBackgroundToDismiss: true
			}
		});
	};

	dismissNotificationsLightBox(){
		const { accountStore } = this.props;
		this.props.navigator.dismissLightBox();
		accountStore.setNotification();
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

	jumpToSchedule(){
		this.props.navigator.switchToTab({
			tabIndex: 1
		});
	}

	render() {
		return (
			<View style={styles.container}>
				{super.render()}
				<View style={{flex: 1, justifyContent: 'flex-start'}}>
					<View>
						<TouchableHighlight
							onPress={this.jumpToClassDetail.bind(this)}
							underlayColor={'rgba(0, 0, 0, 0.054)'}
						>
						<Image style={{width: width,height: height-100}}
							   source={require('../../../img/screenshoot/upcoming-class-list.png')}/>
						</TouchableHighlight>
					</View>
					<View style={{position: 'absolute', left:20, right:20,  bottom: 30}}>
						<Button
							title="Set full schedule"
							icon={
								<Ionicons
								  name='ios-calendar-outline'
								  size={15}
								  color='white'
								/>
							}
							titleStyle={{ fontWeight: "700" }}
							buttonStyle={{
								backgroundColor: "#fe7a49",
								width: 300,
								height: 45,
								borderColor: "transparent",
								borderWidth: 0,
								borderRadius: 5
							}}
							containerStyle={{ marginTop: 20 }}
							onPress={this.jumpToSchedule.bind(this)}
						/>
					</View>
				</View>
			</View>
		);
	}
}