import { EventCategory } from './enums';

export interface IEvent {
	name: string;
	start: Date;
	duration: number;
	category: EventCategory;
	location: string;
	description: string;
}

export interface IEventDay {
	title: string;
	date: Date;
	events: IEvent[];
}

export interface ICategoryEventList {
	[category: string]: IEvent[];
}

export interface PropTypesDay {
	day: IEventDay;
}
