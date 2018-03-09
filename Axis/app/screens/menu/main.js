import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Dimensions,
	FlatList
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getDomain } from '../../config/domain';
import { styles } from './main.style';
import { List, ListItem } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { observer, inject } from 'mobx-react';

const {
	width,
	height
} = Dimensions.get('window');
const list = [
	{
		title: 'Upcoming Class',
		icon: 'av-timer',
		screen: 'Axis.Menu.UpcomingClass',
		tabIndex: 0
	},
	{
		title: 'Schedule',
		icon: 'flight-takeoff',
		screen: 'Axis.Menu.Schedule',
		tabIndex: 1
	}
];

@inject('accountStore')
@observer
export default class MenuScreen extends Component {

	constructor(){
		super();
	}

	componentDidMount(){

	}

	jumpToScreen(tabIndex){
		this.props.navigator.switchToTab({
			tabIndex: tabIndex
		});
		this.props.navigator.toggleDrawer({
			side: 'left',
			animated: true
		});
	}

	submitLogout(){
		const { accountStore } = this.props;
		accountStore.logout().then(
			(data)=>{

			},
			(data)=>{

			}
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<List>
					{
						list.map((item, i) => (
							<ListItem
								key={i}
								title={item.title}
								leftIcon={{name: item.icon}}
								onPress={this.jumpToScreen.bind(this, item.tabIndex)}
							/>
						))
					}
				</List>
				<View style={{marginTop: 100}}>
					<Button
						buttonStyle={{height: 40, backgroundColor: '#5a66d1'}}
						title='Sign Out'
						onPress={this.submitLogout.bind(this)}/>
				</View>
			</View>
		)
	}
}