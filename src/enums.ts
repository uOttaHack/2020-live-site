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
	CareerFair = 'South floor 0',
	Workshop = 'Git Pull - Workshop Room #307',
	Staging = 'Staging - First Floor Classroom'
}

export enum RelativeTime {
	Past = 'past',
	Present = 'present',
	Future = 'future'
}
