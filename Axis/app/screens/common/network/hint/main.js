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
import { observer, inject } from 'mobx-react';
import { styles } from './main.style';

const {
	width,
	height
} = Dimensions.get('window');

@observer
export default class NetworkHint extends Component {

	constructor(props){
		super(props);
	}

	componentDidMount(){

	}

	render() {
		let { net } = this.props;
		if(net.isConnected){
			return null;
		}else{
			return (
				<View style={styles.container}>
					<Text style={styles.title}>Network Unconnected</Text>
				</View>
			)
		}

	}
}