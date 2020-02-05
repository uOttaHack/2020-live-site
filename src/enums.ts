export enum EventCategory {
	Default = 'default',
	Food = 'food',
	Workshop1 = 'workshop1',
	Workshop2 = 'workshop2',
	Activity = 'activity',
	Career = 'career',
	Hacker = 'hacker'
}

export const EventCategoryColor: {
	[category: string]: string;
} = {
	[EventCategory.Default]: 'grey',
	[EventCategory.Food]: 'deepskyblue',
	[EventCategory.Workshop1]: 'purple',
	[EventCategory.Workshop2]: 'purple',
	[EventCategory.Activity]: 'lightpink',
	[EventCategory.Career]: 'indianred',
	[EventCategory.Hacker]: 'lightgreen'
	// navy
};

export enum RoutePath {
	Home = '/',
	Schedule = '/schedule',
	Map = '/map',
	Food = '/food',
	Contact = '/contact',
	Info = '/info'
}

export enum Location {
	None = '',
	CareerFair = '1st floor',
	WorkshopC408 = 'Workshop Room C408',
	WorkshopC409 = 'Workshop Room C409',
	Staging = 'Staging - First Floor Classroom',
	Lobby = 'Lobby',
	Chill = 'REST Room - 5th floor',
	UCU = 'UCU - follow guides to different building',
	Food = 'Food Room C308',
	Demo = 'C140',
	Canal = 'Rideau Canal'
}

export enum RelativeTime {
	Past = 'past',
	Present = 'present',
	Future = 'future'
}

export enum EventListener {
	Resize = 'resize'
}
