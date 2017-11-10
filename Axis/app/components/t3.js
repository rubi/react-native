import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Dimensions
} from 'react-native';
import UltimateListView from "react-native-ultimate-listview";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation'
import {getDomain} from '../config/domain';

const {width, height} = Dimensions.get('window');
export default class T3 extends Component<{}> {
	constructor(){
		super();
		this.state = {
			hasData: false
		};
	}
	renderItem(item, index){
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
						<Text style={{textAlign: 'left'}}>{item.title}</Text>
					</View>
					<View style={{width: 50, alignItems: 'flex-end', justifyContent: 'center'}}>
						<Ionicons
							name="ios-arrow-forward-outline"
							size={20}
						/>
					</View>
				</View>
			</View>
		)
	}
	renderPaginationFetchingView = () => {
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		);
	};
	onFetch(page = 1, startFetch, abortFetch){
		const pageNum = 15;
		fetch(getDomain()+'/api/notice?page='+page+'&pageNum=' + pageNum)
		.then((response)=>{
			return response.json();
		})
		.then((result)=>{
			try{
				startFetch(result.items, pageNum);
			}catch(err){
				abortFetch();
			}
		})
	}
	render() {
		return (
			<View style={styles.container}>
				<UltimateListView
					ref={(ref) => this.listView = ref}
					key='list' //this is important to distinguish different FlatList, default is numColumns
					onFetch={this.onFetch}
					keyExtractor={(item, index) => `${index} - ${item}`}  //this is required when you are using FlatList
					refreshableMode="basic" //basic or advanced
					item={this.renderItem}  //this takes three params (item, index, separator)
					numColumns={1} //to use grid layout, simply set gridColumn > 1
					displayDate
					header={this.renderHeader}
					paginationFetchingView={this.renderPaginationFetchingView}
					arrowImageStyle={{width: 20, height: 20, resizeMode: 'contain'}}
					dateStyle={{color: 'lightgray'}}
					refreshViewStyle={Platform.OS === 'ios' ? {height: 80, top: -80} : {height: 80}}
					refreshViewHeight={80}
				/>
			</View>
		);
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
