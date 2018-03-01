import {
	StyleSheet,
	Dimensions
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		width: Dimensions.get('window').width * 0.7,
		height: Dimensions.get('window').height * 0.35,
		backgroundColor: '#ffffff',
		borderRadius: 5,
		padding: 16,
	},
	title: {
		fontSize: 17,
		fontWeight: '700',
	},
	content: {
		marginTop: 8,
	},
	buttonArea: {
		marginTop: 50,
		flexDirection: 'row',
	},
	wrap: {
		flex: 1,
	},
	btn: {
		fontSize: 20,
		backgroundColor: '#ffffff',
	}
});

export {
	styles
};