export enum EventCategory {
	'Food' = 'food',
	'Workshop' = 'workshop',
	'Activity' = 'activity'
}

export const EventCategoryColor: {
	[category: string]: string;
} = {
	[EventCategory.Food]: 'grey',
	[EventCategory.Workshop]: 'purple',
	[EventCategory.Activity]: 'lightpink'
	// deepskyblue
	// indianred
	// navy
	// light green
};

export enum RoutePath {
	'Home' = '/',
	'Schedule' = '/schedule',
	'Map' = '/map',
	'Food' = '/food',
	'Contact' = '/contact',
	'Info' = '/info'
}
