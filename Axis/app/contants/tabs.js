const tabs = [
	{
		label: 'UpcomingClass',
		screen: 'Axis.Menu.UpcomingClass',
		icon: require('../img/list.png'),
		title: 'Upcoming Class',
		iconInsets: {
			top: 6,
			left: 0,
			bottom: -6,
			right: 0
		},
		navigatorStyle: {
			navBarTextFontSize: 18
		},
		navigatorButtons: {
			leftButtons: [
				{
					id: 'sideMenu',
					component: 'Axis.NavBar.Common.BackDrawer',
					passProps: {},
					buttonColor: '#000000'
				}
			],
			rightButtons: [
				{
					id: 'updateButton',
					component: 'Axis.NavBar.Common.UpdateButton',
					passProps: {},
					buttonColor: '#000000'
				}
			]
		}
	},
	{
		label: 'Schedule',
		screen: 'Axis.Menu.Schedule',
		icon: require('../img/swap.png'),
		title: 'Schedule',
		iconInsets: {
			top: 6,
			left: 0,
			bottom: -6,
			right: 0
		},
		navigatorStyle: {
			navBarTextFontSize: 18
		},
		navigatorButtons: {
			leftButtons: [
				{
					id: 'sideMenu',
					component: 'Axis.NavBar.Common.BackDrawer',
					passProps: {},
					buttonColor: '#000000'
				}
			],
			rightButtons: [
				{
					id: 'createButton',
					component: 'Axis.NavBar.UpcomingClass.CreateButton',
					passProps: {},
					buttonColor: '#000000'
				},
				{
					id: 'legendButton',
					component: 'Axis.NavBar.UpcomingClass.LegendButton',
					passProps: {},
					buttonColor: '#000000'
				},
				{
					id: 'updateButton',
					component: 'Axis.NavBar.Common.UpdateButton',
					passProps: {},
					buttonColor: '#000000'
				}
			]
		}
	}
];

export default tabs;