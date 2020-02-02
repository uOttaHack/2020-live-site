export enum EventCategory {
	Default = 'default',
	Food = 'food',
	Workshop = 'workshop',
	Activity = 'activity',
	Career = 'career',
	Hacker = 'hacker'
}

export const EventCategoryColor: {
	[category: string]: string;
} = {
	[EventCategory.Default]: 'grey',
	[EventCategory.Food]: 'deepskyblue',
	[EventCategory.Workshop]: 'purple',
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
	CareerFair = 'South floor 0',
	WorkshopC408 = 'Workshop Room C408',
	WorkshopC409 = 'Workshop Room C409',
	Staging = 'Staging - First Floor Classroom',
	Lobby = 'Lobby',
	Chill = 'REST Room - 5th floor'
}

export enum RelativeTime {
	Past = 'past',
	Present = 'present',
	Future = 'future'
}

export enum EventListener {
	Resize = 'resize'
}
