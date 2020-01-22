export enum EventCategory {
	'Food',
	'Workshop',
	'Activity'
}

export const EventCategoryColor = {
	[EventCategory.Food]: 'red',
	[EventCategory.Workshop]: 'blue',
	[EventCategory.Activity]: 'yellow'
};

export enum RoutePath {
	'Home' = '/',
	'Schedule' = '/schedule',
	'Map' = '/map',
	'Food' = '/food',
	'Contact' = '/contact'
}
