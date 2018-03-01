import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Dimensions,
	FlatList
} from 'react-native';
import UltimateListView from "react-native-ultimate-listview";
import { List, ListItem } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation'
import {getDomain} from '../config/domain';
const {width, height} = Dimensions.get('window');
export default class T1 extends Component<{}> {
	constructor(){
		super();
		this.state = {
			isFinished: false,
			hasData: false,
			listData: []
		};
	}
	componentDidMount(){
		this.onFetch();
	}
	onFetch(page = 1, startFetch, abortFetch){
		const pageNum = 15;
		fetch(getDomain()+'/api/class?page=1&pageNum=' + pageNum)
		.then((response)=>{
			return response.json();
		})
		.then((result)=>{
			this.setState({isFinished: true, listData: result.items});
		})
	}
	renderItem({index, item, separators}){
		return (
			<View style={{
				width: width,
				paddingLeft: 10,
				paddingRight: 10,
				height: 50,
				borderColor: '#DDDDDD',
				borderBottomWidth: 1,
				flexDirection: 'column',
				alignItems: 'flex-start',
				justifyContent: 'center'
			}}>
				<View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
					<View style={{flex: 4, justifyContent: 'center'}}>
						<Text style={{textAlign: 'left'}}>{item.classId}</Text>
					</View>
					<View style={{width: 50, alignItems: 'flex-end', justifyContent: 'center'}}>
						<Ionicons
							name="ios-arrow-forward-outline"
							size={20}
						/>
					</View>
				</View>
			</View>
		);
	}
	render() {
		if(!this.state.isFinished){
			return (
				<View>
					<Text>Loading...</Text>
				</View>
			)
		}else{
			return (
				<View style={styles.container}>
					<FlatList
						keyExtractor={item => item.classId}
						data={this.state.listData}
						renderItem={this.renderItem.bind(this)}
					/>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	separator: {
		height: 1,
		backgroundColor: '#e2e2e2'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	paginationView: {
		height: 44,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		flexDirection: 'row'
	},
	actionsLabel: {
		color: '#656565',
	}
});
